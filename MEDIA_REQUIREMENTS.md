# Hero Section Media Requirements

## Overview
This document outlines the media specifications and requirements for the hero section background image of the Royal Gate Travels website.

## Hero Section Background Image

### Primary Image Specifications

#### **Technical Requirements**
- **Format**: JPG or WebP (preferred for better compression)
- **Dimensions**: 1920x1080px (16:9 aspect ratio)
- **File Size**: Maximum 500KB (optimized for web)
- **Color Profile**: sRGB
- **Quality**: High resolution, sharp details

#### **Visual Requirements**
- **Style**: Professional, high-quality travel photography
- **Mood**: Inspiring, luxurious, adventurous
- **Color Palette**: Should complement the orange (#f97316) and black (#0f172a) brand colors
- **Composition**: Should work well with overlaid text and content

### Recommended Image Options

#### **Option 1: Aerial Travel Shot**
- **Description**: Bird's eye view of multiple travel destinations
- **Content**: Mix of beaches, mountains, cities, and cultural landmarks
- **Mood**: "Your Gateway to the World" - showing global reach
- **Colors**: Warm tones that complement orange brand color
- **Usage**: Perfect for the main hero message

#### **Option 2: Luxury Travel Lifestyle**
- **Description**: Elegant couple or family at a luxury resort
- **Content**: Overwater bungalow, private beach, or luxury hotel
- **Mood**: Premium, romantic, exclusive
- **Colors**: Soft, warm lighting with orange/amber tones
- **Usage**: Emphasizes luxury and honeymoon packages

#### **Option 3: Cultural/Religious Journey**
- **Description**: Peaceful, spiritual travel scene
- **Content**: Mosque, pilgrimage site, or cultural landmark
- **Mood**: Sacred, respectful, meaningful
- **Colors**: Warm, golden hour lighting
- **Usage**: Highlights Hajj & Umrah services

#### **Option 4: Adventure & Exploration**
- **Description**: Dynamic travel scene with multiple activities
- **Content**: People exploring, hiking, or experiencing new places
- **Mood**: Exciting, adventurous, discovery
- **Colors**: Vibrant but not overwhelming
- **Usage**: Appeals to adventure seekers

### Image Guidelines

#### **What to Include**
- ✅ High-quality, professional photography
- ✅ Travel-related content (destinations, activities, experiences)
- ✅ Warm, inviting color tones
- ✅ Good contrast for text overlay
- ✅ Horizontal composition (16:9 ratio)
- ✅ People enjoying travel experiences

#### **What to Avoid**
- ❌ Overly busy or cluttered compositions
- ❌ Dark or low-contrast images
- ❌ Images that clash with orange/black brand colors
- ❌ Vertical or square aspect ratios
- ❌ Low-resolution or pixelated images
- ❌ Images that don't convey travel/luxury

### Responsive Considerations

#### **Desktop (1920x1080px)**
- Full image visible
- Text overlay on left side
- Quick search widget on right side

#### **Tablet (768px - 1024px)**
- Image may be cropped slightly
- Text and widget stack vertically
- Maintain visual impact

#### **Mobile (320px - 767px)**
- Image cropped to focus on most important area
- Text overlay remains readable
- Quick search widget below text

### Implementation Notes

#### **CSS Implementation**
```css
.hero-section {
  background-image: url('/images/hero-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Optional: parallax effect */
}
```

#### **Overlay Requirements**
- **Dark Overlay**: 40% black overlay for text readability
- **Gradient**: Subtle gradient from left (darker) to right (lighter)
- **Text Contrast**: Ensure white/orange text is readable

### Alternative Options

#### **Video Background** (Optional)
- **Format**: MP4 (H.264 codec)
- **Duration**: 10-15 seconds loop
- **Resolution**: 1920x1080px
- **File Size**: Maximum 2MB
- **Content**: Slow-motion travel scenes, drone footage
- **Mood**: Cinematic, premium, engaging

#### **Image Carousel** (Optional)
- **Multiple Images**: 3-5 different hero images
- **Auto-rotate**: Every 5-7 seconds
- **Transition**: Smooth fade between images
- **Content**: Mix of different travel types (luxury, adventure, cultural)

### File Organization

#### **Recommended File Structure**
```
public/
├── images/
│   ├── hero/
│   │   ├── hero-background-main.jpg
│   │   ├── hero-background-alt1.jpg
│   │   ├── hero-background-alt2.jpg
│   │   └── hero-background-mobile.jpg (optional)
│   └── ...
```

### Performance Optimization

#### **Image Optimization**
- Use WebP format for modern browsers
- Provide JPG fallback for older browsers
- Implement lazy loading
- Use appropriate compression (80-85% quality)

#### **Loading Strategy**
- Preload hero image for faster display
- Use placeholder/blur effect while loading
- Implement progressive loading

### Brand Alignment

#### **Color Harmony**
- Image should complement orange (#f97316) brand color
- Avoid colors that clash with the design
- Consider warm, inviting tones

#### **Message Alignment**
- Image should reinforce "Your Gateway to the World"
- Should appeal to target audience (luxury travelers, families, religious pilgrims)
- Should convey trust, expertise, and premium service

### Testing Requirements

#### **Cross-Browser Testing**
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)
- Different screen sizes and resolutions

#### **Performance Testing**
- Page load speed with image
- Mobile performance
- Image loading time

### Delivery Specifications

#### **File Naming Convention**
- `hero-background-main.jpg`
- `hero-background-alt1.jpg`
- `hero-background-mobile.jpg` (if different mobile version)

#### **Delivery Format**
- Original high-resolution files
- Web-optimized versions
- Different sizes if needed (desktop, tablet, mobile)

### Contact Information

For questions about these requirements or to submit media files, please contact:
- **Email**: info@royalgatetravels.com
- **Phone**: +44 20 1234 5678

---

**Last Updated**: [Current Date]
**Version**: 1.0
**Status**: Ready for Media Creation
