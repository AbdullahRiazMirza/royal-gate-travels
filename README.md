# Royal Gate Travels - Travel Agency Website

A modern, responsive single-page React application for a travel agency offering comprehensive travel services including honeymoon packages, Hajj & Umra, worldwide air tickets, travel insurance, visa services, and hotel booking.

## 🚀 Features

- **Modern Design**: Clean, luxurious design with orange and black color scheme
- **Fully Responsive**: Mobile-first design that works on all devices
- **Interactive Components**: Smooth animations, carousels, and modals
- **Contact Form**: Comprehensive booking/inquiry form with validation
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA attributes
- **SEO Optimized**: Meta tags, Open Graph, and structured content

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Hook Form** with Zod validation
- **Lucide React** for icons

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd royal-gate-travels
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with CTA
│   ├── ServicesGrid.tsx # Services overview
│   ├── ServiceCard.tsx # Individual service card
│   ├── FeaturedPackages.tsx # Featured packages carousel
│   ├── PackageCard.tsx # Package display card
│   ├── PackageModal.tsx # Package details modal
│   ├── HowItWorks.tsx  # Process steps
│   ├── Testimonials.tsx # Customer testimonials
│   ├── FAQ.tsx         # Frequently asked questions
│   ├── ContactForm.tsx # Booking/inquiry form
│   └── Footer.tsx      # Site footer
├── data/
│   └── constants.ts    # Sample data and content
├── types/
│   └── index.ts        # TypeScript interfaces
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎨 Design System

### Colors
- **Primary**: Orange (#f97316) - Main brand color
- **Secondary**: Dark gray/black (#0f172a) - Text and accents
- **Accent**: Gold (#eab308) - Highlights and CTAs

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Components
- **Buttons**: Primary, secondary, and ghost variants
- **Cards**: Elevated with hover effects
- **Forms**: Accessible with validation feedback
- **Modals**: Smooth animations with focus management

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy (H1-H6)
- ARIA labels and roles
- Keyboard navigation support
- Focus management in modals
- Color contrast compliance (WCAG AA)
- Screen reader friendly

## 🔧 Customization

### Adding New Services
1. Update the `services` array in `src/data/constants.ts`
2. Add corresponding icon in `ServiceCard.tsx`

### Modifying Packages
1. Update the `featuredPackages` array in `src/data/constants.ts`
2. Adjust package categories and pricing

### Styling Changes
1. Modify `tailwind.config.js` for theme changes
2. Update component classes for specific styling
3. Add custom CSS in `src/index.css`

## 📧 Contact Form Integration

The contact form is ready for backend integration. Update the `handleFormSubmit` function in `App.tsx` to connect to your API:

```typescript
const handleFormSubmit = async (data: Inquiry) => {
  const response = await fetch('/api/inquiries', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to submit inquiry');
  }
};
```

## 🚀 Deployment

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Automatic Deployment
1. Push your code to the `main` branch
2. Go to your repository's **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**
4. The site will automatically deploy at: `https://yourusername.github.io/royal-gate-travels/`

#### Manual Deployment
```bash
# Install dependencies (if not already done)
npm install

# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

#### Other Hosting Options
- **Vercel**: `vercel --prod`
- **Netlify**: Connect your repository
- **AWS S3**: Upload the `dist` folder

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please contact:
- Email: info@royalgatetravels.com
- Phone: +44 20 1234 5678