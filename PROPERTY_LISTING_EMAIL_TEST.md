# Property Listing Email - Testing Guide

## Quick Start Test

Follow these steps to test the email sending functionality:

### Step 1: Open the List Property Page
1. Start your local server
2. Navigate to: `http://localhost:8000/pages/list-property.html`

### Step 2: Fill in the Form

#### Owner Details
- **Full Name**: Test User
- **Email Address**: your-email@example.com (use your personal email)
- **Mobile Number**: 9876543210

#### Property Details
- **Listing Type**: Select "Sell" or "Rent"
- **Property Type**: Residential / Commercial / Plot
- **Sector**: 78
- **Property Size**: 1500 sq ft
- **BHK**: 2
- **Floor Number**: 5
- **Furnishing**: Semi-furnished

#### Pricing
**For SELL:**
- **Expected Price**: 7500000 (₹75 Lakh)

**For RENT:**
- **Monthly Rent**: 15000
- **Security Deposit**: 300000

#### Amenities
Select at least one:
- ☑ Gym
- ☑ Swimming Pool
- ☑ Parking
- ☑ 24/7 Security

#### Description
Write a sample description like:
"Beautiful 2BHK apartment with modern amenities and excellent location near metro station."

### Step 3: Upload Images
1. Click the image upload area
2. Drag and drop at least 1 image OR click to browse
3. You should see the image preview
4. Maximum 5 images allowed

### Step 4: Submit the Form
1. Click "Submit Property Listing" button
2. Wait for the submission to process (takes a few seconds)
3. You should see success message: "Your property has been successfully submitted!"

### Step 5: Check Email
1. Open your personal email inbox (the one you entered in the form)
2. Check for email from FormSubmit
3. You should also receive confirmation at: **greaterfaridabadproperty@gmail.com**

## What Should Happen

✅ **Success Scenario:**
- Success message appears on screen
- Form clears completely
- Images are removed from preview
- Page scrolls to top
- Email arrives at greaterfaridabadproperty@gmail.com with all property details

❌ **Error Scenario:**
- If any required field is empty
- If no images are uploaded
- If email sending fails
- Error message will display: "Failed to submit property. Please try again."

## Email Contents Verification

The email should contain:

### Subject Line
`New Property Listing - [SELL/RENT] - [Property Type] in Sector [Number]`

Example:
`New Property Listing - SELL - Residential in Sector 78`

### Email Body
Should include:
- Owner name, email, and phone
- All property details
- Price (for sell) or Rent + Deposit (for rent)
- Amenities list
- Property description
- Submission timestamp in Indian format

## Troubleshooting

### Email Not Received
1. **Check spam/junk folder** in gmail account
2. **Check browser console** (F12) for errors
3. **Verify internet connection** is active
4. **Try again** - sometimes there's a delay

### Form Submission Fails
1. **Check all required fields** are filled (marked with *)
2. **Upload at least one image** - this is mandatory
3. **Check browser console** (F12) for error details
4. **Try different browser** (Chrome, Firefox, etc.)

### Images Not Showing in Preview
1. **Use correct image formats** (JPG, PNG, WebP)
2. **Check file size** (should be reasonable, not huge)
3. **Clear browser cache** (Ctrl+Shift+Delete)
4. **Reload the page** and try again

## Email Address Configuration

If you need to change the recipient email:

1. Open: `src/js/config.js`
2. Find: `EMAIL: 'greaterfaridabadproperty@gmail.com'`
3. Change to your email
4. Save and refresh the page

## Browser Developer Tools

To debug issues, open Developer Tools (F12) and:

1. **Check Console** tab for errors
2. **Check Network** tab to see email API request
3. **Look for the fetch call** to formsubmit.co
4. **Check response status** - should be 200 OK

## Live Testing Checklist

- [ ] Form loads properly
- [ ] All form fields are visible
- [ ] Image upload works
- [ ] Toggle between Sell/Rent works
- [ ] Pricing fields update correctly
- [ ] At least 1 image is required validation works
- [ ] Submit button gets disabled during submission
- [ ] Success message appears
- [ ] Form clears after submission
- [ ] Email arrives at greaterfaridabadproperty@gmail.com
- [ ] Email contains all property details
- [ ] Amenities are listed correctly
- [ ] Prices are formatted with commas
- [ ] Error handling works (try submitting without images)

## Contact for Issues

If you encounter any issues:
1. Check the PROPERTY_LISTING_EMAIL.md documentation
2. Test with different browser
3. Clear browser cache and cookies
4. Check your internet connection
5. Contact: greaterfaridabadproperty@gmail.com

---

**Email Service**: FormSubmit.co (Free, No Setup Required)
**Recipient Email**: greaterfaridabadproperty@gmail.com
**Last Updated**: January 11, 2026
