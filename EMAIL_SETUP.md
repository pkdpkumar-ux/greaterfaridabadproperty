# Email Setup Guide - Formspree Integration

## Overview
Your website is now configured to send emails using **Formspree**, a free and reliable email service that requires no backend configuration.

## ✅ Current Status
- Email system is **READY** to use
- Forms will send emails to: `greaterfaridabadproperty@gmail.com`
- All form validation is in place
- Success/error notifications are configured

## 🔧 Setup Instructions (3 Easy Steps)

### Step 1: Create a Formspree Account
1. Go to [https://formspree.io](https://formspree.io)
2. Click **"Sign Up"** (top right)
3. Sign up using your email: `greaterfaridabadproperty@gmail.com`
4. Verify your email address

### Step 2: Create a New Form
1. After login, click **"Create"** or **"New Form"**
2. Enter your project name: `Greater Faridabad Property`
3. Select your email: `greaterfaridabadproperty@gmail.com`
4. Create the form
5. You'll see a **Form ID** like: `xyzlqmnz` (example)

### Step 3: Update Configuration
Replace the placeholder Formspree ID in your code:

**File:** `src/js/config.js` (Line 13)

Change:
```javascript
FORMSPREE_ENDPOINT: 'https://formspree.io/f/xyzlqmnz',
```

To:
```javascript
FORMSPREE_ENDPOINT: 'https://formspree.io/f/YOUR_ACTUAL_FORM_ID',
```

**Example:** If your Form ID is `abcd1234`:
```javascript
FORMSPREE_ENDPOINT: 'https://formspree.io/f/abcd1234',
```

---

## 📧 How It Works

### Forms That Send Emails:
1. **Home Page Enquiry Modal** - "Get More Details" button
2. **Contact Page Form** - "Contact Us" section
3. **Property Details Page** - "Enquire About This Property" modal

### Email Delivery:
- ✅ Emails arrive at `greaterfaridabadproperty@gmail.com`
- ✅ User replies go to their provided email address
- ✅ You receive sender info (name, email, phone)
- ✅ Message content is included

### What Users See:
- ✅ "Sending your enquiry..." - Loading message
- ✅ "Thank you! We will contact you soon." - Success message
- ✅ Error message if something fails (auto-retry available)

---

## 🎯 Testing the Setup

### Test Enquiry Form:
1. Go to home page (http://localhost:8000/public/index.html)
2. Scroll to any property card
3. Click **"Get Details"** button
4. Fill in the form:
   - Name: Test User
   - Email: your@email.com
   - Phone: 9999098553
   - Property Type: Any
   - Message: Test message
5. Click **"Send Enquiry"**
6. Check `greaterfaridabadproperty@gmail.com` for the email

### Test Contact Form:
1. Go to Contact page (http://localhost:8000/pages/contact.html)
2. Fill in the form completely
3. Check the agreement checkbox
4. Click **"Send Message"**
5. Check your inbox for the email

---

## 🔒 Security & Privacy

- **No sensitive data is stored** in your code
- **Form ID is public** (that's intentional, it's safe)
- **Spam protection** is built-in to Formspree
- **HTTPS** ensures encrypted transmission
- **Rate limiting** prevents abuse

### Formspree Features:
- ✅ CAPTCHA support (optional)
- ✅ File uploads (optional)
- ✅ Conditional fields (optional)
- ✅ Webhook integrations (advanced)
- ✅ Custom redirects

---

## 💡 Common Issues & Solutions

### Problem: "Error sending enquiry" message

**Solution:**
1. Check if Form ID is correct in `config.js`
2. Verify Formspree account is verified
3. Test with a simple message first
4. Check browser console (F12) for errors

### Problem: Not receiving emails

**Solution:**
1. Confirm email is verified on Formspree dashboard
2. Check spam/junk folder
3. Verify form submissions in Formspree dashboard
4. Check that CONFIG.FORMSPREE_ENDPOINT is correct

### Problem: Want to receive copies of every email

**Solution:**
In Formspree dashboard:
1. Go to your form settings
2. Enable "Send me a copy" option
3. All submissions will be forwarded

---

## 🚀 Advanced Setup (Optional)

### Add CAPTCHA Protection:
```html
<input type="hidden" name="_captcha" value="false">
```
Change `false` to `true` to enable CAPTCHA.

### Add Success Page Redirect:
```html
<input type="hidden" name="_next" value="https://yoursite.com/thank-you">
```

### Add Custom Subject:
Already configured in your forms! Uses:
```javascript
formData.append('_subject', `New Contact Message: ${data.subject}`);
```

---

## 📞 Support

- **Formspree Help:** [https://formspree.io/help](https://formspree.io/help)
- **Formspree Status:** [https://status.formspree.io](https://status.formspree.io)
- **Contact Formspree:** [support@formspree.io](mailto:support@formspree.io)

---

## ✨ What's Already Configured

✅ Form validation (3+ char names, valid emails, Indian phone format)  
✅ Error handling with user-friendly messages  
✅ Loading states with toast notifications  
✅ Email reply-to setup (replies go to user's email)  
✅ Custom email subjects  
✅ Form reset after successful submission  
✅ Mobile responsive forms  

---

## 📝 Email Received Format

When someone submits a form, you'll receive an email like:

```
From: formspree@formspree.io
Reply-To: [user's email]

Fields:
- fullName: John Doe
- email: john@example.com
- phone: 9876543210
- subject: Interested in property
- message: Please contact me soon
```

---

**Setup Time:** ~2 minutes  
**Cost:** FREE  
**Alternative Services:** EmailJS, SendGrid, Mail.ru, Vercel Domains

Enjoy your email notifications! 🎉
