# GitHub Integration - Quick Start

## 5 Minute Setup

### 1. Get GitHub Token
- Go to: https://github.com/settings/tokens
- Create "Personal access token (classic)"
- Permissions: `repo`, `workflow`
- Copy the token

### 2. Create `.env` File
```bash
cp .env.example .env
```

Edit `.env`:
```
GITHUB_TOKEN=ghp_your_token_here
GITHUB_REPO=yourusername/greaterfaridabadproperty
PORT=3001
```

### 3. Install & Start Backend
```bash
npm install
npm start
```

Expected output:
```
🚀 Property Listing API running on http://localhost:3001
```

### 4. Keep Website Running
Open new terminal:
```bash
python -m http.server 8000
```

### 5. Test It!

1. Go to: http://localhost:8000/pages/list-property.html
2. Fill the form
3. Upload at least 1 image
4. Click "Submit Property Listing"
5. Check console (F12) for success message

## What Happens Behind The Scenes

```
User submits form
    ↓ (sends to Node.js API)
API receives data
    ↓ (triggers GitHub)
GitHub Actions starts
    ↓ (runs Python script)
Properties file updated
    ↓ (commits to repo)
Website auto-updates
    ↓ (new property visible)
Emails sent to user & admin
```

## Files Created/Modified

✅ `.github/workflows/process-property-submission.yml` - GitHub Actions workflow
✅ `.github/scripts/add-property.py` - Property processor
✅ `server.js` - Backend API server
✅ `package.json` - Updated with dependencies
✅ `pages/list-property.html` - Updated to call API
✅ `.env.example` - Configuration template

## Running Servers

**Terminal 1** - Website:
```bash
python -m http.server 8000
# Visit: http://localhost:8000
```

**Terminal 2** - Backend API:
```bash
npm start
# API: http://localhost:3001
```

## Testing Without GitHub

The form still works without GitHub setup:
- ✅ Validation works
- ✅ Email sending works
- ✅ Draft saving works
- ⚠️ Auto-update to properties file won't work

## Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/property/submit` | POST | Submit property listing |
| `/api/health` | GET | Check API status |
| `/api/info` | GET | API information |

## Common Issues

### "Cannot find module 'express'"
→ Run: `npm install`

### "GITHUB_TOKEN is invalid"
→ Check token format (should start with `ghp_`)

### "API submission not available"
→ Backend server not running - run `npm start` in terminal 2

### Property not appearing
→ Check GitHub Actions logs at: https://github.com/yourname/repo/actions

## Environment Variables Needed

```
GITHUB_TOKEN=ghp_xxxxx...    (from Step 1)
GITHUB_REPO=you/repo          (your GitHub username/repo)
```

Optional:
```
PORT=3001                      (backend port)
NODE_ENV=development           (or production)
```

## Next Steps

1. Complete 5-minute setup above
2. Read `GITHUB_INTEGRATION_SETUP.md` for detailed info
3. Test property submission
4. Check GitHub Actions for results
5. Verify property added to `src/data/properties-buy.js`

## Support

Documentation: `GITHUB_INTEGRATION_SETUP.md`
Issues: Check browser console (F12) and backend terminal output

---

**Ready!** Your property listings now auto-update! 🚀
