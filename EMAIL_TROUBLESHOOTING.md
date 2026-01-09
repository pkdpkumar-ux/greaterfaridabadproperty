# Email Troubleshooting Guide

## Issue: "Error sending message. Please try again."

### Quick Fixes (Try These First)

#### 1. **Refresh Browser Cache**
```
Press: Ctrl+Shift+Delete (Clear Cache)
Or: Ctrl+F5 (Hard Refresh)
```

#### 2. **Check Browser Console for Actual Error**
1. Open Developer Tools: `F12`
2. Go to `Console` tab
3. Look for red error messages
4. Take note of the error (e.g., CORS, 404, 400, etc.)

#### 3. **Verify Formspree Endpoint**
In Browser Console, run:
```javascript
console.log(CONFIG.FORMSPREE_ENDPOINT)
```

**Should show:** `https://formspree.io/f/YOUR_FORM_ID`  
**Should NOT show:** `https://formspree.io/f/xyzlqmnz` (placeholder)

---

## Common Errors & Solutions

### Error 1: "xyzlqmnz" (Placeholder Form ID)

**Problem:** You haven't updated the Formspree endpoint yet.

**Solution:**
1. Get a real Formspree Form ID from [https://formspree.io](https://formspree.io)
2. Update `src/js/config.js` line 13:
```javascript
FORMSPREE_ENDPOINT: 'https://formspree.io/f/YOUR_REAL_FORM_ID',
```
3. Refresh browser

---

### Error 2: CORS Error (Cross-Origin Request)

**Error Message:** `Access to XMLHttpRequest at 'https://formspree.io/f/...' from origin 'http://localhost:8000' has been blocked by CORS policy`

**Cause:** Browser security blocking localhost requests

**Solutions (Pick One):**

**Option A: Deploy to GitHub Pages (Recommended)**
- Upload to GitHub
- Formspree will work perfectly
- No local testing issues

**Option B: Use Different Port**
```bash
python -m http.server 3000
# Then visit: http://localhost:3000/public/index.html
```

**Option C: Use CORS Proxy (Temporary)**
```javascript
FORMSPREE_ENDPOINT: 'https://cors-anywhere.herokuapp.com/https://formspree.io/f/YOUR_ID',
```
⚠️ Not recommended for production

**Option D: Use Alternative Service (EmailJS)**
See section below for EmailJS setup

---

### Error 3: 404 Not Found

**Error Message:** `POST https://formspree.io/f/xyzlqmnz 404`

**Cause:** Formspree Form ID doesn't exist

**Solution:**
1. Login to [Formspree.io](https://formspree.io)
2. Create a new form or get existing form ID
3. Update config.js with correct ID
4. Verify it's formatted like: `f/abcd1234` (not just `abcd1234`)

---

### Error 4: 400 Bad Request

**Error Message:** `POST https://formspree.io/f/... 400`

**Cause:** Invalid form data format

**Solution:**
1. Check that required fields are filled
2. Make sure email is valid format
3. Make sure phone has proper format

**Test Form Fields:**
- Name: Min 3 characters ✅
- Email: Valid email format ✅
- Phone: Indian format (10 digits) ✅
- Message: Min 10 characters ✅

---

### Error 5: 429 Too Many Requests

**Error Message:** `POST https://formspree.io/f/... 429`

**Cause:** Rate limited (too many submissions)

**Solution:**
- Wait a few minutes before submitting again
- Check your Formspree account settings
- Contact Formspree support if persistent

---

## Alternative Email Solutions

### Solution A: EmailJS (Recommended for Local Testing)

**Advantages:**
- Works on localhost without CORS issues
- Free tier: 200 emails/month
- No backend needed
- Easy setup

**Setup Steps:**

1. **Create EmailJS Account**
   - Go to [https://www.emailjs.com](https://www.emailjs.com)
   - Sign up (free)
   - Verify email

2. **Create Email Service**
   - Go to "Email Services"
   - Add new service (Gmail, Outlook, etc.)
   - Follow setup wizard

3. **Create Email Template**
   - Go to "Email Templates"
   - Create template with fields: `{{from_name}}`, `{{from_email}}`, `{{message}}`

4. **Get Credentials**
   - Service ID: `service_xxxxx`
   - Template ID: `template_xxxxx`
   - Public Key: `your_public_key`

5. **Update config.js**
```javascript
EMAIL_SERVICE: 'EmailJS',
EMAILJS_SERVICE_ID: 'service_xxxxx',
EMAILJS_TEMPLATE_ID: 'template_xxxxx',
EMAILJS_PUBLIC_KEY: 'your_public_key',
```

6. **Update main.js form handlers:**
```javascript
emailjs.init(CONFIG.EMAILJS_PUBLIC_KEY);
emailjs.send(CONFIG.EMAILJS_SERVICE_ID, CONFIG.EMAILJS_TEMPLATE_ID, data);
```

---

### Solution B: Sendmail (Backend Required)

**Advantages:**
- Professional solution
- No third-party limits
- Full control

**Requires:**
- Backend server (Node.js, Python, etc.)
- Email service like SendGrid/AWS SES
- API endpoint setup

---

## Test Email System

### Method 1: Use EMAIL_TEST.html

1. Open: `http://localhost:8000/EMAIL_TEST.html`
2. Fill in test form
3. Click "Send Test Email"
4. Check status message
5. Check console (F12) for errors

### Method 2: Manual Browser Console Test

```javascript
// Test Formspree endpoint
const testData = new FormData();
testData.append('name', 'Test User');
testData.append('email', 'test@example.com');
testData.append('message', 'Test message');
testData.append('_reply_to', 'test@example.com');

fetch(CONFIG.FORMSPREE_ENDPOINT, {
    method: 'POST',
    body: testData
}).then(r => {
    console.log('Status:', r.status);
    return r.json();
}).then(d => console.log('Response:', d))
  .catch(e => console.log('Error:', e));
```

---

## Verify Email Received

### Check Inbox
1. Open email: `greaterfaridabadproperty@gmail.com`
2. Check **Inbox** folder
3. Check **Spam/Junk** folder
4. If using Formspree: Check Formspree dashboard for submissions

### Formspree Submissions Dashboard
1. Go to [https://formspree.io](https://formspree.io)
2. Login to your account
3. Select your form
4. Click "Submissions" tab
5. You'll see all form submissions here

---

## Complete Debugging Checklist

- [ ] Browser console shows no red errors (F12)
- [ ] `CONFIG.FORMSPREE_ENDPOINT` doesn't contain "xyzlqmnz"
- [ ] Formspree account is created and verified
- [ ] Form ID in config matches your actual Formspree form
- [ ] All form fields are filled correctly
- [ ] Email field contains valid email format
- [ ] Phone field contains Indian format (10 digits)
- [ ] Tested on EMAIL_TEST.html successfully
- [ ] Email received in inbox (check spam too)
- [ ] Formspree dashboard shows submission

---

## Need Help?

### Resources
- **Formspree Help:** https://formspree.io/help
- **EmailJS Docs:** https://www.emailjs.com/docs
- **Browser Console Tutorial:** https://developer.mozilla.org/en-US/docs/Web/API/console

### Quick Support
1. Share console error (F12 → Console tab)
2. Share your `CONFIG.FORMSPREE_ENDPOINT` value
3. Tell us: Does EMAIL_TEST.html work?
4. Tell us: Can you access Formspree dashboard?

---

## Next Steps

1. **Open EMAIL_TEST.html** to test current setup
2. **Check console errors** for actual problem
3. **Try suggested solution** based on error
4. **Verify email received** at greaterfaridabadproperty@gmail.com
5. **Deploy to GitHub** once working locally

Good luck! 🚀
