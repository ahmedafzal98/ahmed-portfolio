# EmailJS 400 Bad Request - Troubleshooting Guide

## Common Causes

A 400 Bad Request error from EmailJS typically means one of these issues:

### 1. Template Variable Names Don't Match
The variable names in your code must **exactly match** the variable names in your EmailJS template.

**Current variables being sent:**
- `from_name`
- `from_email`
- `inquiry_type`
- `message`

**Check your EmailJS template** and make sure it uses these exact variable names: `{{from_name}}`, `{{from_email}}`, `{{inquiry_type}}`, `{{message}}`

### 2. Template ID Might Be Incorrect
You mentioned the template ID is `service_zdqd973` (same as service ID). This seems unusual. 

**To find your correct Template ID:**
1. Go to https://dashboard.emailjs.com/
2. Click on "Email Templates"
3. Find your template
4. The Template ID should be something like `template_xxxxxxx` (not the same as service ID)

### 3. Missing Required Fields
Your EmailJS template might require additional fields that aren't being sent.

## How to Fix

### Step 1: Check Your EmailJS Dashboard

1. Log in to https://dashboard.emailjs.com/
2. Go to **Email Templates**
3. Click on your template
4. Check what variable names are used (they should be in `{{variable_name}}` format)

### Step 2: Update the Code

If your template uses different variable names, update the code in `components/Contact.tsx`:

**Common EmailJS template variable names:**
- `{{user_name}}` or `{{name}}` instead of `{{from_name}}`
- `{{user_email}}` or `{{email}}` instead of `{{from_email}}`
- `{{subject}}` or `{{type}}` instead of `{{inquiry_type}}`
- `{{message}}` or `{{user_message}}` instead of `{{message}}`

### Step 3: Verify Template ID

Make sure you're using the correct Template ID (usually starts with `template_`).

## Quick Test

1. Open browser console (F12)
2. Submit the form
3. Check the console for detailed error messages
4. Look for the error object that shows what EmailJS is expecting

## Alternative: Use Common Variable Names

If you're not sure, try updating the template parameters to use these common names:

```typescript
const templateParams = {
  user_name: formData.name,
  user_email: formData.email,
  subject: formData.inquiryType,
  message: formData.message,
  reply_to: formData.email, // For reply-to functionality
};
```

Then update your EmailJS template to use these variable names.

