# GitHub Integration Setup Guide

## Overview

This guide explains how to set up GitHub integration to automatically update property listings when users submit the form.

## What Happens

1. **User submits property** via "List Your Property" form
2. **Data sent to backend API** (Node.js server)
3. **API triggers GitHub Actions** via webhook
4. **GitHub Actions processes** the submission
5. **Properties file updated** automatically
6. **Changes committed** and deployed
7. **Confirmation emails** sent to user and admin

## Setup Steps

### Step 1: Create GitHub Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" (Classic)
3. Set these permissions:
   - ✅ `repo` (full control of private repositories)
   - ✅ `workflow` (update GitHub Action workflows)
4. Copy the token (you'll need it)

### Step 2: Create `.env` File

1. Copy `.env.example` to `.env`
   ```bash
   cp .env.example .env
   ```

2. Update values:
   ```
   GITHUB_TOKEN=your_token_from_step_1
   GITHUB_REPO=yourusername/greaterfaridabadproperty
   PORT=3001
   ```

3. **Never commit `.env` file to GitHub!** It's in `.gitignore`

### Step 3: Install Backend Dependencies

```bash
npm install
```

This installs:
- express (API server)
- axios (GitHub API calls)
- cors (Cross-origin requests)
- dotenv (Environment variables)

### Step 4: Start Backend Server

Open a new terminal and run:

```bash
npm start
```

Or:
```bash
node server.js
```

You should see:
```
🚀 Property Listing API running on http://localhost:3001
```

### Step 5: Keep Website Running

In another terminal, keep the website running:

```bash
python -m http.server 8000
```

## How It Works

### Frontend Flow
```
User submits form
    ↓
Validation (at least 1 image required)
    ↓
Send to API (localhost:3001/api/property/submit)
    ↓
Send email (via FormSubmit.co)
    ↓
Success message shown
    ↓
Form cleared
```

### Backend Flow
```
API receives request
    ↓
Validates data
    ↓
Triggers GitHub Actions workflow
    ↓
Returns success response
```

### GitHub Actions Flow
```
Workflow triggered via dispatch event
    ↓
Python script processes data
    ↓
Property added to properties-buy.js
    ↓
Changes committed to GitHub
    ↓
Changes pushed
    ↓
Confirmation emails sent
```

## API Endpoints

### Submit Property
```
POST http://localhost:3001/api/property/submit

Headers:
  Content-Type: application/json

Body: {
  ownerName: "John Doe",
  ownerEmail: "john@example.com",
  ownerPhone: "9876543210",
  listType: "sell",
  propertyType: "residential",
  sector: "78",
  propertySize: "1500",
  bhk: "2",
  floorNumber: "5",
  furnishing: "semi-furnished",
  price: "7500000", // For sell
  monthlyRent: "15000", // For rent
  securityDeposit: "300000", // For rent
  amenities: ["gym", "pool", "parking"],
  description: "Beautiful apartment...",
  submittedAt: "2026-01-11T..."
}

Response:
{
  success: true,
  message: "Property submitted successfully...",
  propertyData: {...}
}
```

### Health Check
```
GET http://localhost:3001/api/health
```

### Server Info
```
GET http://localhost:3001/api/info
```

## Testing

### Test Locally (Without GitHub)

1. Submit a property via the form
2. Check console (F12) for:
   - "API submission not available" = Server not running (OK for testing)
   - Or "API Response: {success: true}" = Server running

3. Property data logged to console

### Test with GitHub Integration

1. Ensure `.env` file is configured correctly
2. Run backend server: `npm start`
3. Submit a property
4. Check GitHub Actions: https://github.com/yourusername/greaterfaridabadproperty/actions
5. Verify property added to `src/data/properties-buy.js`

## Troubleshooting

### Backend Not Starting
```
Error: Cannot find module 'express'
→ Solution: Run `npm install`
```

### API Connection Error
```
Error: Failed to fetch
→ Solution: Ensure backend server is running (npm start)
```

### GitHub Workflow Failed
1. Check GitHub Actions logs
2. Verify GITHUB_TOKEN is valid and has correct permissions
3. Check GITHUB_REPO format (should be: username/repo)

### Property Not Added to File
1. Check Python script output in GitHub Actions
2. Verify properties-buy.js file is not locked
3. Check git configuration in workflow

## Environment Variables

Create `.env` with:

```
# Required
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
GITHUB_REPO=yourusername/greaterfaridabadproperty

# Optional
PORT=3001
NODE_ENV=development
EMAIL_USERNAME=your@email.com
EMAIL_PASSWORD=app_password
```

## Security Notes

⚠️ **Important:**
- Never commit `.env` file
- Keep GITHUB_TOKEN secret
- Don't share tokens publicly
- Use personal access token with minimal required permissions
- Regenerate token if compromised

## Workflow Files

- `.github/workflows/process-property-submission.yml` - Main workflow
- `.github/scripts/add-property.py` - Property insertion script

## Next Steps

1. ✅ Create GitHub token
2. ✅ Setup `.env` file
3. ✅ Install dependencies: `npm install`
4. ✅ Start backend: `npm start`
5. ✅ Test property submission
6. ✅ Check GitHub Actions
7. ✅ Verify property added to properties-buy.js

## Support

For issues:
1. Check browser console (F12)
2. Check backend server output
3. Check GitHub Actions logs
4. Review this documentation

---

**Status**: Ready to use!
**Last Updated**: January 11, 2026
