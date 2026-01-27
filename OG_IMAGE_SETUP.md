# OG Image Setup Guide

## What is an OG Image?

An Open Graph (OG) image is the preview image that appears when you share your portfolio link on social media platforms like:
- LinkedIn
- WhatsApp
- Twitter/X
- Facebook
- Slack
- Discord

Without an OG image, your shared link will show a generic grey box or default preview, which looks unprofessional.

## Required Specifications

- **Filename**: `og-image.png`
- **Location**: `/public/og-image.png`
- **Dimensions**: 1200px × 630px (exact)
- **Format**: PNG (or JPG)
- **File Size**: Keep under 1MB for fast loading

## How to Create Your OG Image

### Option 1: Screenshot Method (Easiest)

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Open your portfolio** in a browser at `http://localhost:3000`

3. **Take a screenshot** of your Hero section:
   - Use browser DevTools (F12) to set viewport to 1200x630px
   - Or use a screenshot tool like:
     - **Mac**: Cmd + Shift + 4, then drag to select 1200x630 area
     - **Windows**: Snipping Tool or Windows + Shift + S
     - **Browser Extension**: Full Page Screen Capture

4. **Crop to exact dimensions**:
   - Use an image editor (Photoshop, GIMP, Canva, or online tools)
   - Crop to exactly **1200 × 630 pixels**
   - Focus on your Hero section with your photo and headline

5. **Save as PNG**:
   - Name it `og-image.png`
   - Place it in the `/public` folder

### Option 2: Design Tool Method (Professional)

Use a design tool to create a custom OG image:

1. **Canva** (Free):
   - Go to canva.com
   - Create custom size: 1200 × 630px
   - Add your photo, name, and tagline
   - Download as PNG

2. **Figma** (Free):
   - Create a 1200 × 630px frame
   - Design with your branding
   - Export as PNG

3. **Photoshop/GIMP**:
   - Create new document: 1200 × 630px
   - Design your OG image
   - Export as PNG

### Option 3: Automated Tool (Advanced)

Use tools like:
- **og-image.vercel.app**: Generate OG images programmatically
- **Next.js OG Image Generation**: Use `@vercel/og` package

## What to Include in Your OG Image

Your OG image should include:
- ✅ Your professional photo (or logo)
- ✅ Your name: "Ahmed Afzal"
- ✅ Your title: "Full Stack & AI Engineer"
- ✅ Key tagline: "Building Scalable Engines for Agencies"
- ✅ Your brand colors (Electric Blue/Teal)
- ✅ Clean, professional design

## Testing Your OG Image

After deploying to Vercel:

1. **Facebook Sharing Debugger**:
   - https://developers.facebook.com/tools/debug/
   - Enter your URL and click "Scrape Again"

2. **Twitter Card Validator**:
   - https://cards-dev.twitter.com/validator
   - Enter your URL to preview

3. **LinkedIn Post Inspector**:
   - https://www.linkedin.com/post-inspector/
   - Enter your URL to see preview

4. **Open Graph Preview**:
   - https://www.opengraph.xyz/
   - Enter your URL to see all platforms

## Quick Checklist

- [ ] Image is exactly 1200 × 630 pixels
- [ ] File is named `og-image.png`
- [ ] File is in `/public` folder
- [ ] File size is under 1MB
- [ ] Image looks professional and readable
- [ ] Includes your name and key information
- [ ] Tested on at least one social platform

## File Structure

```
portfolio/
├── public/
│   ├── og-image.png      ← Your OG image here
│   ├── profile-photo.png
│   └── resume.pdf
└── ...
```

## Troubleshooting

**Image not showing?**
- Clear cache on social platforms (use debugger tools)
- Ensure file is in `/public` folder
- Check file name matches exactly: `og-image.png`
- Verify image dimensions are 1200 × 630

**Image looks blurry?**
- Use high-resolution source images
- Export at 1200 × 630px (not smaller)
- Use PNG format for better quality

**Image too large?**
- Compress using tools like TinyPNG
- Keep under 1MB for fast loading

