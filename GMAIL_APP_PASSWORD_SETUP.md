# Gmail App Password Setup - Email Configuration

## Quick Start for Email Functionality

Your email forms are now configured to send emails via Gmail SMTP. This guide will help you set it up in 5 minutes.

## 📋 Prerequisites
- You have access to the Gmail account: `greaterfaridabadproperty@gmail.com`
- 2-Step Verification is enabled on the Gmail account

---

## 🔧 Setup Steps

### Step 1: Enable 2-Step Verification (if not already done)
1. Go to [myaccount.google.com](https://myaccount.google.com/)
2. Click **Security** in the left menu
3. Scroll to **How you sign in to Google**
4. Click **2-Step Verification**
5. Follow the prompts to enable it

### Step 2: Generate Gmail App Password
1. Go to [myaccount.google.com](https://myaccount.google.com/)
2. Click **Security** in the left menu
3. Scroll down to **App passwords** (appears only if 2-Step Verification is enabled)
4. If you don't see "App passwords", scroll down further
5. Select:
   - App: **Mail**
   - Device: **Windows Computer** (or your OS)
6. Click **Generate**
7. Google will generate a **16-character password with spaces**

**Example:** `abcd efgh ijkl mnop`

### Step 3: Update .env Configuration
1. Open `.env` file in the project root
2. Find the line: `SENDER_PASSWORD=`
3. Copy the 16-character password from Step 2
4. **Remove all spaces** from the password
5. Paste it like this:

```
SENDER_PASSWORD=abcdefghijklmnop
```

**Example with actual password:**
```
SENDER_PASSWORD=zyxwvutsrqponmlk
```

### Step 4: Restart Backend Server
1. Stop the current backend server (Ctrl+C in the terminal)
2. Run `START_ALL.bat` again
3. The backend should now be ready to send emails

---

## ✅ Test Email Functionality

### Test 1: Home Page Enquiry
1. Go to http://localhost:8000/public/index.html
2. Scroll to any property card
3. Click **"Get Details"** button
4. Fill in the form:
   - Name: Test User
   - Email: `your-email@gmail.com` (use your own email to test)
   - Phone: 9999098553
   - Property Type: Residential
   - Message: Test enquiry message
5. Click **"Send Enquiry"**
6. You should see: "Thank you! We will contact you soon."
7. Check `greaterfaridabadproperty@gmail.com` inbox for the email

### Test 2: Contact Page
1. Go to http://localhost:8000/pages/contact.html
2. Fill in the contact form:
   - Full Name: Test User
   - Email: `your-email@gmail.com`
   - Phone: 9999098553
   - Subject: Test
   - Property Type: Commercial
   - Message: This is a test message
3. Check the **"I agree to terms"** checkbox
4. Click **"Send Message"**
5. Check your inbox for the email

### Test 3: Property Details Enquiry
1. Go to http://localhost:8000/pages/properties.html
2. Click on any property
3. Scroll to **"Enquire About This Property"** section
4. Fill in the form and click **"Send Enquiry"**
5. Check your inbox

---

## 🔍 Troubleshooting

### ❌ "Email failed to send" error
**Solution:**
1. Check that `SENDER_PASSWORD` in `.env` is correct (16 characters, no spaces)
2. Verify that 2-Step Verification is enabled on the Gmail account
3. Make sure you used an **App Password**, not your regular Gmail password
4. Restart the backend server

### ❌ Emails not appearing in inbox
**Solution:**
1. Check the spam/junk folder
2. Verify that `SENDER_EMAIL` and `RECIPIENT_EMAIL` are correct in `.env`
3. Check the backend console for error messages
4. Try sending again

### ❌ "Failed to send email" in backend logs
**Solution:**
1. This usually means the SMTP connection failed
2. Verify Gmail credentials in `.env`
3. Check your internet connection
4. Try the test email again

### ❌ "2-Step Verification not enabled" error
**Solution:**
1. You MUST enable 2-Step Verification before creating app passwords
2. Go to https://myaccount.google.com/security
3. Enable 2-Step Verification
4. Then create an App Password

---

## 🔐 Security Notes

- ✅ **App Password is safe** - it only works for this application
- ✅ **You can delete it anytime** - just go to App passwords and remove it
- ✅ **Your main Gmail password is NOT used** - only the App Password is stored
- ✅ **The .env file is NOT committed to Git** - it stays on your computer

---

## 📧 Email Flow

```
User fills form on website
     ↓
Frontend sends to /api/send-email
     ↓
Backend receives request
     ↓
Backend connects to Gmail SMTP
     ↓
Email sent to greaterfaridabadproperty@gmail.com
     ↓
Reply-To header set to user's email
     ↓
User receives confirmation on website
```

---

## 📞 Email Content

When a user submits a form, the backend sends:

**To:** `greaterfaridabadproperty@gmail.com`
**Subject:** Form type + user name (e.g., "New Enquiry from John")
**Reply-To:** User's email address
**Body:** All form fields + message

This way, you can reply directly to the user by replying to the email.

---

## ✨ Features

- ✅ Works locally (localhost:3001)
- ✅ SMTP is more reliable than FormSubmit.co
- ✅ Emails include all form data
- ✅ Fallback to FormSubmit if needed
- ✅ Proper error handling and logging
- ✅ Validates email format
- ✅ No CORS issues

---

## 🚀 Next Steps

1. **Generate your Gmail App Password** (follow steps above)
2. **Update the .env file** with your password
3. **Restart the backend** (Ctrl+C and run START_ALL.bat)
4. **Test email functionality** (see Test sections above)
5. **Start using the email forms** on your website!

---

**Questions?** Check the backend console output (the terminal running app.py) for detailed error messages.
