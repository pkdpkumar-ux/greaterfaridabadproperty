# Greater Faridabad Property - Premium Real Estate Website

## Overview

A modern, responsive real estate property website for Greater Faridabad. Built with HTML5, CSS3, JavaScript, and jQuery, featuring a premium design with smooth animations and full responsiveness across all devices.

**Live Website:** [https://greaterfaridabadproperty.in](https://greaterfaridabadproperty.in)

## Features

### Pages

- **Home Page**
  - Hero section with background image and tagline
  - Property search bar (location, budget, property type)
  - Featured properties section with cards
  - Why Choose Us section
  - Client testimonials
  - Call-to-Action buttons
  - WhatsApp floating button

- **Properties Page**
  - Grid layout with property cards
  - Advanced filters (price, BHK, amenities, type)
  - Sorting options (price, newest, popular)
  - Responsive sidebar filters
  - Search functionality

- **Property Details Page**
  - Image gallery with thumbnails
  - Detailed property information
  - Amenities and features list
  - Google Maps embed
  - Contact/Enquiry form
  - Related properties section

- **Sector-wise Properties**
  - Filter by sector
  - Sector-wise property listings
  - Additional filters and sorting

- **Builder Properties**
  - Filter by builder
  - Builder-specific property listings
  - Advanced filtering options

- **About Us Page**
  - Company overview
  - Mission & Vision
  - Team information
  - Statistics and achievements
  - Why Choose Us section

- **Contact Us Page**
  - Contact form with validation
  - Office location and hours
  - Phone and email contact
  - Social media links
  - Embedded Google Map
  - WhatsApp contact option

### Design Features

- **Modern UI**: Luxury real estate theme with professional aesthetics
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop
- **Smooth Animations**: CSS animations and transitions for better UX
- **Consistent Branding**: Professional color palette and typography
- **Accessibility**: WCAG compliant, keyboard navigable
- **Performance Optimized**: Fast loading and optimized images
- **SEO Friendly**: Semantic HTML and proper meta tags

### Technical Features

- **Form Validation**: Client-side validation for all forms
- **WhatsApp Integration**: Direct messaging via WhatsApp button
- **Email Notifications**: Contact forms connected to email service
- **Dynamic Filters**: Real-time property filtering
- **Search Functionality**: Property search with multiple criteria
- **Local Storage**: Save user preferences
- **Mobile-First**: Mobile-responsive design approach

## Project Structure

```
greaterfaridabadproperty/
├── public/
│   ├── index.html              # Home page
│   └── favicon.ico             # Favicon
├── pages/
│   ├── properties.html         # Properties listing
│   ├── property-details.html   # Property details
│   ├── sector-wise.html        # Sector-wise properties
│   ├── builder-properties.html # Builder properties
│   ├── about.html              # About us
│   └── contact.html            # Contact page
├── src/
│   ├── css/
│   │   ├── main.css            # Main stylesheet
│   │   ├── components.css      # Component styles
│   │   └── responsive.css      # Media queries
│   ├── js/
│   │   ├── config.js           # Configuration & utilities
│   │   ├── main.js             # Main JavaScript
│   │   ├── properties-page.js  # Properties page logic
│   │   ├── property-details.js # Property details logic
│   │   ├── sector-wise.js      # Sector filter logic
│   │   ├── builder-properties.js # Builder filter logic
│   │   └── contact.js          # Contact form logic
│   ├── data/
│   │   └── properties.js       # Property data & testimonials
│   ├── assets/
│   │   ├── images/             # Image directory
│   │   └── icons/              # Icon directory
│   └── components/             # React components (optional)
├── package.json                # Project metadata
├── .gitignore                  # Git ignore file
└── README.md                   # This file
```

## Installation

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE (VS Code recommended)
- Python 3.x (for local server) or Node.js

### Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/greaterfaridabadproperty.git
cd greaterfaridabadproperty
```

2. **Install dependencies** (optional)
```bash
npm install
```

3. **Run local server**

**Using Python 3:**
```bash
python -m http.server 8000
```

**Using Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Using Node.js (with http-server):**
```bash
npx http-server
```

4. **Open in browser**
```
http://localhost:8000
```

## Configuration

### Email Configuration

To enable email notifications, update `src/js/config.js`:

```javascript
const CONFIG = {
    EMAIL_SERVICE: 'EmailJS',
    EMAIL_SERVICE_ID: 'your_service_id',
    EMAIL_TEMPLATE_ID: 'your_template_id',
    EMAIL_PUBLIC_KEY: 'your_public_key',
    EMAIL: 'greaterfaridabadproperty@gmail.com'
};
```

### WhatsApp Integration

Update phone number in `src/js/config.js`:
```javascript
WHATSAPP: '+919999098553'
```

### Google Maps

Update map embed link in property details pages with your API key.

## Data Management

Property data is stored in `src/data/properties.js`. To add new properties:

```javascript
{
    id: 11,
    title: "Property Title",
    location: "Location, Greater Faridabad",
    sector: "23",
    price: 5000000,
    priceDisplay: "50 Lakh",
    type: "residential", // or "commercial", "plot"
    bhk: 2,
    size: 1200,
    floor: 5,
    totalFloors: 12,
    propertyAge: "New Construction",
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
    amenities: ["gym", "pool", "parking", "security"],
    features: ["2 Bathrooms", "Balcony", "Modular Kitchen"],
    description: "Property description...",
    builder: "Builder Name",
    mapLink: "Google Maps embed link"
}
```

## Customization

### Color Scheme

Edit CSS variables in `src/css/main.css`:

```css
:root {
    --primary-color: #2d5a3d;
    --secondary-color: #d4a574;
    --accent-color: #d4a574;
    /* ... other variables ... */
}
```

### Typography

Modify font family in `src/css/main.css`:
```css
--font-family: 'Poppins', sans-serif;
```

### Responsive Breakpoints

Media queries are defined in `src/css/responsive.css`:
- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: Below 768px

## Browser Support

- Chrome/Edge (Latest 2 versions)
- Firefox (Latest 2 versions)
- Safari (Latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance Optimization

- Images are optimized with lazy loading
- CSS and JavaScript are minified
- Smooth scrolling behavior
- Efficient filtering algorithms
- Local storage for caching

## SEO Features

- Semantic HTML5 structure
- Meta tags for all pages
- Proper heading hierarchy
- Alt text for images
- Schema markup ready
- Mobile-friendly design
- Fast page load times

## Deployment

### GitHub Pages

1. Push code to GitHub
2. Enable GitHub Pages in settings
3. Deploy from main branch

### Static Hosting

Deploy to:
- Vercel
- Netlify
- AWS S3
- Cloudflare Pages
- Firebase Hosting

### Traditional Server

1. FTP files to server
2. Set up domain DNS
3. Configure SSL certificate

## Maintenance

### Regular Updates

- Update property listings regularly
- Check for broken links
- Monitor form submissions
- Update testimonials
- Review analytics

### Backups

- Regular code backups on GitHub
- Database backups (if using backend)
- Image backups

## Troubleshooting

### Forms Not Working

- Check email configuration
- Verify API keys
- Check browser console for errors

### Images Not Loading

- Verify image paths
- Check file permissions
- Ensure image files exist

### Mobile Display Issues

- Check responsive CSS
- Test on different devices
- Use browser developer tools

## Future Enhancements

- [ ] Admin dashboard for property management
- [ ] User accounts and wishlist
- [ ] Advanced search with filters
- [ ] Virtual property tours (360°)
- [ ] Payment gateway integration
- [ ] Blog/News section
- [ ] Property comparison tool
- [ ] Mobile app (React Native)
- [ ] Multi-language support
- [ ] Dark mode toggle

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## License

This project is licensed under the MIT License - see LICENSE file for details.

## Contact Information

**Greater Faridabad Property**
- 📞 Phone: [+91-9999098553](tel:+919999098553)
- 📧 Email: [greaterfaridabadproperty@gmail.com](mailto:greaterfaridabadproperty@gmail.com)
- 💬 WhatsApp: [Chat with us](https://wa.me/919999098553)
- 🌐 Website: [https://greaterfaridabadproperty.in](https://greaterfaridabadproperty.in)
- 📍 Location: Sector 23, Greater Faridabad, Haryana, India

## Support

For issues, questions, or feature requests:

1. Check existing GitHub issues
2. Create a new issue with detailed description
3. Contact via email or WhatsApp
4. Check documentation

## Acknowledgments

- Font Awesome for icons
- Google Maps for location services
- Unsplash for sample images
- Font families from Google Fonts

## Version History

### v1.0.0 (January 2026)
- Initial release
- Home page with hero section
- Property listings with filters
- Property details page
- Sector-wise and builder properties
- About and Contact pages
- WhatsApp integration
- Form validation
- Responsive design
- SEO optimization

---

**Made with ❤️ for Greater Faridabad Real Estate**

*Last Updated: January 2026*
