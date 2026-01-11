/**
 * Property Listing API Server
 * Receives property submissions and triggers GitHub Actions workflow
 */

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * API endpoint to receive property submission
 * POST /api/property/submit
 */
app.post('/api/property/submit', async (req, res) => {
    try {
        const propertyData = req.body;

        console.log('Property submission received:', {
            owner: propertyData.ownerName,
            type: propertyData.propertyType,
            sector: propertyData.sector
        });

        // Validate required fields
        if (!propertyData.ownerName || !propertyData.ownerEmail || !propertyData.propertyType) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields'
            });
        }

        // Trigger GitHub Actions workflow
        const githubToken = process.env.GITHUB_TOKEN;
        const githubRepo = process.env.GITHUB_REPO || 'yourusername/greaterfaridabadproperty';

        if (githubToken && githubRepo) {
            await triggerGitHubWorkflow(propertyData, githubToken, githubRepo);
        }

        // Return success response
        res.json({
            success: true,
            message: 'Property submitted successfully. It will be added to our platform shortly.',
            propertyData: propertyData
        });

    } catch (error) {
        console.error('Error processing property submission:', error);
        res.status(500).json({
            success: false,
            message: 'Error processing submission',
            error: error.message
        });
    }
});

/**
 * Trigger GitHub Actions workflow via dispatch event
 */
async function triggerGitHubWorkflow(propertyData, token, repo) {
    try {
        const [owner, repoName] = repo.split('/');

        const response = await axios.post(
            `https://api.github.com/repos/${owner}/${repoName}/dispatches`,
            {
                event_type: 'property_submitted',
                client_payload: propertyData
            },
            {
                headers: {
                    'Authorization': `token ${token}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            }
        );

        console.log('✓ GitHub workflow triggered successfully');
        return response.data;

    } catch (error) {
        console.error('Error triggering GitHub workflow:', error.response?.data || error.message);
        throw error;
    }
}

/**
 * Health check endpoint
 */
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

/**
 * Info endpoint
 */
app.get('/api/info', (req, res) => {
    res.json({
        service: 'Greater Faridabad Property - Listing API',
        version: '1.0.0',
        endpoints: {
            submit: 'POST /api/property/submit',
            health: 'GET /api/health'
        }
    });
});

// Error handling
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`\n🚀 Property Listing API running on http://localhost:${PORT}`);
    console.log(`📝 Submit properties to: POST http://localhost:${PORT}/api/property/submit\n`);
});

module.exports = app;
