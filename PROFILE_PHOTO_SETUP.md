# Profile Photo Setup Guide

## Image Placement

Your professional photo needs to be added to the `public` folder with the filename: **`profile-photo.jpg`**

## Steps to Add Your Photo

1. **Prepare Your Photo:**
   - Use a high-quality professional headshot
   - Recommended size: 800x1000px or larger (portrait orientation)
   - Format: JPG or PNG
   - Make sure you're smiling and looking professional (smart casual attire)

2. **Add to Project:**
   - Place your photo in the `/public` folder
   - Name it exactly: `profile-photo.jpg`
   - If using PNG, update the filename in the code to `profile-photo.png`

3. **File Structure:**
   ```
   portfolio/
   ├── public/
   │   ├── profile-photo.jpg  ← Your photo goes here
   │   └── resume.pdf
   └── ...
   ```

## Photo Specifications

### Desktop (Hero Section - Right Side):
- **Position:** Right half of screen, bottom-aligned
- **Size:** Full height (85vh, max 700px)
- **Style:** Rounded top corners, shadow, ring border
- **Effect:** Creates "overlap" effect with bottom alignment

### Mobile (Hero Section):
- **Position:** Between headline and buttons
- **Size:** 192px x 192px (circular)
- **Style:** Circular crop with ring border
- **Effect:** Shows your face before CTA buttons

### Contact Section (Avatar):
- **Position:** Next to "Start a Conversation" heading
- **Size:** 64px x 64px (circular)
- **Style:** Small circular avatar with "Available" indicator
- **Effect:** Creates "Live Agent" feel

## Fallback Behavior

If the image file doesn't exist, the code will show:
- Desktop: A placeholder with gradient background
- Mobile: A placeholder with gradient background
- Contact: Your initials "AA" in a colored circle

## Tips for Best Results

1. **Lighting:** Use natural, even lighting
2. **Background:** Clean, professional background (or blurred)
3. **Expression:** Confident, approachable smile
4. **Attire:** Smart casual or business casual
5. **Crop:** Focus on head and shoulders (portrait style)

## Alternative Formats

If you want to use a different filename or format, update these files:
- `components/Hero.tsx` - Line with `/profile-photo.jpg`
- `components/Contact.tsx` - Line with `/profile-photo.jpg`

Change `/profile-photo.jpg` to your filename (e.g., `/ahmed-photo.png`)

