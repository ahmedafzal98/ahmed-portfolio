# Google Analytics Setup Guide

## ✅ Implementation Status

Google Analytics has been **successfully implemented** in your portfolio website!

## 📋 Step-by-Step Setup Instructions

### Step 1: Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click **"Start measuring"** or **"Create Account"**

### Step 2: Create a Property

1. Click **"Create Property"**
2. Enter your property name: **"Ahmed Afzal Portfolio"**
3. Select your time zone and currency
4. Click **"Next"**

### Step 3: Set Up Data Stream

1. Choose **"Web"** as your platform
2. Enter your website URL: **`https://www.ahmedafzal.dev`**
3. Enter a stream name: **"Portfolio Website"**
4. Click **"Create stream"**

### Step 4: Get Your Measurement ID

1. After creating the stream, you'll see your **Measurement ID**
2. It will look like: **`G-XXXXXXXXXX`** (starts with "G-")
3. **Copy this Measurement ID** - you'll need it in the next step

### Step 5: Add Measurement ID to Your Project

#### Option A: Using Vercel Environment Variables (Recommended)

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: **`ahmed-portfolio`**
3. Go to **Settings** → **Environment Variables**
4. Add a new variable:
   - **Name:** `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value:** `G-VYWXBP5F2W` (your Measurement ID)
   - **Environment:** Select all (Production, Preview, Development)
5. Click **"Save"**
6. **Redeploy** your application for changes to take effect
   - Go to **Deployments** tab
   - Click the **"..."** menu on the latest deployment
   - Select **"Redeploy"**

#### Option B: Using Local .env File (For Development)

1. Create a `.env.local` file in your project root:
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
2. Replace `G-XXXXXXXXXX` with your actual Measurement ID
3. Restart your development server

### Step 6: Verify Installation

1. Visit your website: `https://www.ahmedafzal.dev`
2. Go to Google Analytics → **Reports** → **Realtime**
3. You should see your visit appear within a few seconds
4. If you see data, **Google Analytics is working!** ✅

## 🔍 How to Use Google Analytics

### Viewing Reports

1. **Realtime Reports**: See live visitors on your site
   - Go to **Reports** → **Realtime**
   - See active users, page views, and events

2. **Acquisition Reports**: See where your traffic comes from
   - Go to **Reports** → **Acquisition**
   - View traffic sources (Direct, Social, Search, etc.)

3. **Engagement Reports**: See how users interact with your site
   - Go to **Reports** → **Engagement**
   - View pages per session, bounce rate, etc.

4. **Demographics Reports**: See your audience
   - Go to **Reports** → **User** → **Demographics**
   - View age, gender, location, etc.

### Key Metrics to Monitor

- **Users**: Number of unique visitors
- **Sessions**: Number of visits
- **Page Views**: Total pages viewed
- **Bounce Rate**: Percentage of single-page sessions
- **Average Session Duration**: How long users stay
- **Traffic Sources**: Where visitors come from

## 🎯 Tracking Events (Optional - Advanced)

If you want to track specific events (button clicks, form submissions, etc.), you can add event tracking:

```typescript
// Example: Track button click
gtag('event', 'click', {
  event_category: 'Button',
  event_label: 'Contact Me',
  value: 1
});
```

## 🛠️ Troubleshooting

### Analytics Not Working?

1. **Check Environment Variable**:
   - Make sure `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set correctly
   - Verify it starts with "G-"

2. **Check Browser Console**:
   - Open DevTools (F12)
   - Look for errors in the Console tab
   - Check Network tab for Google Analytics requests

3. **Verify in Google Analytics**:
   - Go to **Admin** → **Data Streams**
   - Click on your stream
   - Check if it shows "Receiving data"

4. **Clear Cache**:
   - Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
   - Clear browser cache

5. **Check Ad Blockers**:
   - Some ad blockers block Google Analytics
   - Disable them temporarily to test

## 📊 Current Implementation

- ✅ Google Analytics 4 (GA4) integrated
- ✅ Automatic page view tracking
- ✅ Works on all pages
- ✅ Privacy-compliant
- ✅ No performance impact (loaded asynchronously)

## 🔒 Privacy & GDPR

Google Analytics is configured to be privacy-compliant. However, if you need full GDPR compliance:

1. Add a cookie consent banner
2. Only load GA after user consent
3. Consider using Google Analytics with IP anonymization

## 📝 Notes

- Data may take 24-48 hours to appear in standard reports
- Realtime reports show data immediately
- The Measurement ID is public (it's safe to expose in client-side code)
- Google Analytics is free for most websites

---

**Need Help?** Check the [Google Analytics Help Center](https://support.google.com/analytics)

