# Service Images

This folder contains images for the service cards on the website.

## Required Images

Place the following images in this folder with the exact filenames:

### Service Images (Required)
- `honeymoon-packages.jpg` - Romantic couple or luxury resort scene
- `hajj-umra.jpg` - Mosque or pilgrimage site
- `air-tickets.jpg` - Airplane or airport scene
- `travel-insurance.jpg` - Security or protection themed image
- `visa-services.jpg` - Passport or document themed image
- `hotel-booking.jpg` - Luxury hotel or accommodation

## Image Specifications

### Technical Requirements
- **Format**: JPG (optimized for web)
- **Dimensions**: 400x300px (4:3 aspect ratio)
- **File Size**: Maximum 200KB per image
- **Quality**: High resolution, sharp details
- **Color Profile**: sRGB

### Visual Requirements
- **Style**: Professional, high-quality photography
- **Mood**: Should match the service theme
- **Colors**: Should complement the orange/black brand colors
- **Composition**: Should work well in a card layout

### Design Guidelines
- Images should be visually appealing and professional
- Avoid overly busy or cluttered compositions
- Ensure good contrast for text overlay (if needed)
- Images should convey the essence of each service
- Consider mobile viewing - images should be clear at smaller sizes

## Fallback Behavior

If an image is missing or fails to load:
- The service card will show the original icon design
- A loading spinner will appear while the image loads
- No broken image icons will be displayed

## File Naming Convention

Images must be named exactly as the service slug:
- Service slug: `honeymoon-packages` → Image: `honeymoon-packages.jpg`
- Service slug: `hajj-umra` → Image: `hajj-umra.jpg`
- etc.

## Performance Notes

- Images are lazy-loaded for better performance
- Loading states and error handling are built-in
- Images will only load when the service cards come into view
