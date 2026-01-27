# Form Submission Setup Guide

## Current Status

The contact form is currently set up with a **simulated submission** for testing purposes. When users submit the form:

1. **What Happens Now:**
   - Form validates all required fields
   - Shows a loading state ("Sending...")
   - After 1.5 seconds, shows a success message
   - Form data is logged to the browser console
   - Form fields are cleared

2. **What You Need to Do:**
   - Choose one of the submission methods below
   - Replace the simulated code in `components/Contact.tsx` (lines 36-52)

## Recommended Options

### Option 1: EmailJS (Easiest - No Backend Required)
**Best for:** Quick setup, no server needed

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create an email service and template
3. Install: `npm install @emailjs/browser`
4. Update the form submission code:

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: formData.name,
        from_email: formData.email,
        inquiry_type: formData.inquiryType,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'
    );
    
    setSubmitStatus("success");
    setFormData({ name: "", email: "", inquiryType: "", message: "" });
  } catch (error) {
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};
```

### Option 2: Formspree (Free Tier Available)
**Best for:** Simple forms, no coding required

1. Sign up at [Formspree.io](https://formspree.io/)
2. Create a new form and get your form ID
3. Update the form submission code:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", inquiryType: "", message: "" });
    } else {
      throw new Error('Submission failed');
    }
  } catch (error) {
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};
```

### Option 3: Custom API Endpoint
**Best for:** Full control, custom logic

1. Create an API route in Next.js: `app/api/contact/route.ts`
2. Set up email service (SendGrid, AWS SES, etc.)
3. Update the form to call your API:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", inquiryType: "", message: "" });
    } else {
      throw new Error('Submission failed');
    }
  } catch (error) {
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};
```

## Button Behaviors Summary

### Hero Section Buttons:
- **"View Work"** → Scrolls to "Engineered Solutions" section (Projects)
- **"Contact Me"** → Scrolls to "Let's Build Something Great" section (Contact)

### Services Section:
- **"Check Availability"** → Scrolls to Contact section so clients can:
  - Fill out the contact form
  - See your direct contact information
  - Download your resume

### Contact Form:
- **"Send Message"** → Submits the form (currently simulated, needs setup per options above)

## Next Steps

1. Choose a form submission method (EmailJS recommended for quick setup)
2. Replace the simulated code in `components/Contact.tsx`
3. Test the form submission
4. Add your resume PDF to the `public` folder as `resume.pdf`

