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

- **Buy Properties Page**
  - Grid layout with 20 buy/sale properties
  - Advanced filters (price, BHK, amenities, type)
  - Sorting options (price, newest, popular)
  - Responsive sidebar filters
  - Search functionality

- **Rent Properties Page**
  - Grid layout with 20 rental properties
  - Advanced filters (price, BHK, amenities, type)
  - Sorting options (monthly rent, newest, popular)
  - Responsive sidebar filters
  - Search functionality

- **List Your Property Page** ⭐ NEW
  - Rent/Sell toggle switch
  - Dynamic form labels based on listing type
  - Owner details form (name, email, phone)
  - Property details (type, location, size, BHK, floor, furnishing)
  - Dynamic pricing section (price for sale, monthly rent + security deposit for rent)
  - Image upload with drag-drop support (up to 5 images)
  - Amenities checkboxes
  - Property description textarea
  - Save as draft functionality (localStorage)
  - Form validation and error messages
  - Success confirmation
  - Location limited to Sectors 68-89 + Other

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
  - Grid of 8 builder cards with information
  - Filter by builder
  - Builder-specific property listings (8 builders: Mansha Group, Shiv Sai, RSI Buildcon, Mawals Builders, JRD Properties, AQ Buildtech, Land Solutions, Pragati Associates)
  - Advanced filtering options

- **About US Page**
  - Company overview
  - Mission & Vision
  - Team information
  - Statistics and achievements
  - Why Choose Us section

- **Contact US Page**
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
│   │   ├── properties-page.js  # Properties page logic (buy properties)
│   │   ├── rent-page.js        # Rent page logic
│   │   ├── property-details.js # Property details logic
│   │   ├── sector-wise.js      # Sector filter logic
│   │   ├── builder-properties.js # Builder filter logic
│   │   └── contact.js          # Contact form logic
│   ├── data/
│   │   ├── properties-buy.js   # Buy/Sale property data (20 properties)
│   │   ├── rental-properties.json # Rental property data (20 properties)
│   │   └── properties.js       # Helper functions & testimonials
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

## Property Data Structure & Separation

### Overview
The Greater Faridabad Property system has been restructured to completely separate Buy and Rent properties, eliminating confusion between the two property types.

### Data File Separation

#### Buy Properties
- **File:** `/src/data/properties-buy.js`
- Contains 20 properties (IDs 1-20) available for **PURCHASE/SALE**
- Variable: `buyPropertiesData` (also aliased as `propertiesData` for backwards compatibility)
- Types: Residential, Commercial, Plot
- Price range: ₹22 Lakh to ₹2.5 Crore
- Price field: `price` (in rupees)

#### Rent Properties
- **File:** `/src/data/rental-properties.json`
- Contains 20 properties (IDs 101-120) available for **RENT**
- Loaded dynamically via Fetch API on rent page
- Types: Residential, Commercial
- Rent range: ₹7,500 to ₹30,000/month
- Price field: `monthlyRent` (rental amount per month)

#### Helper Files
- `/src/data/properties.js` - Legacy file (kept for reference, now contains helper functions only)
- No longer contains property data; contains only utility functions

### Page Updates

**Buy Properties Pages** (use properties-buy.js):
- index.html - Homepage with featured properties
- pages/properties.html - Browse all buy properties
- pages/property-details.html - View details of buy properties
- pages/sector-wise.html - Filter buy properties by sector
- pages/builder-properties.html - Filter buy properties by builder

**Rent Properties Pages** (use rental-properties.json):
- pages/rent.html - Browse all rental properties with filters
  - Loads from JSON via Fetch API
  - Separate filtering/sorting for rentals
  - Shows monthly rent, security deposit

**Navigation Pages** (no property data needed):
- pages/about.html
- pages/contact.html

### Key Differences

| Aspect | Buy Properties | Rent Properties |
|--------|---|---|
| **Data Source** | properties-buy.js | rental-properties.json |
| **Variable Name** | buyPropertiesData / propertiesData | Loaded via fetch() |
| **Property IDs** | 1-20 | 101-120 |
| **Price Field** | price (one-time cost) | monthlyRent (recurring) |
| **Common Field** | priceDisplay | (not used for rent) |
| **Deposit Field** | (not used) | securityDeposit |
| **Type Examples** | residential, commercial, plot | residential, commercial |
| **URL Parameter** | type=buy (default) | type=rent |

### Property Detail Pages

**How it works:**
1. User clicks "View Details" on any property
2. Property-details.html loads with `?id=X&type=buy` or `?type=rent`
3. JavaScript checks the type parameter and loads appropriate data
4. Details page displays either buy or rent property information

**Example URLs:**
- Buy property: `property-details.html?id=5&type=buy`
- Rent property: `property-details.html?id=110&type=rent`

### Data Structure Examples

**Buy Property** (properties-buy.js):
```javascript
{
    id: 1,
    title: "Luxury Apartment in Sector 78",
    location: "Sector 78, Greater Faridabad",
    price: 4500000,
    priceDisplay: "45 Lakh",
    type: "residential",
    bhk: 2,
    size: 1200,
    floor: 5,
    totalFloors: 12,
    propertyAge: "New Construction"
    // ... more fields
}
```

**Rent Property** (rental-properties.json):
```javascript
{
    id: 101,
    title: "2 BHK Apartment on Rent in Sector 78",
    location: "Sector 78, Greater Faridabad",
    monthlyRent: 15000,
    securityDeposit: 300000,
    type: "residential",
    bhk: 2,
    size: 1200,
    furnishing: "unfurnished"
    // ... more fields
}
```

### Benefits

✅ **No Confusion** - Clear separation between buy and rent properties
✅ **Independent Updates** - Can modify buy or rent properties without affecting the other
✅ **Scalability** - Easy to add more properties to either category
✅ **Performance** - Rent page loads only rent data via JSON, not all 40+ properties
✅ **Backwards Compatible** - buyPropertiesData is aliased as propertiesData
✅ **Clear Data Structure** - Each property type has appropriate fields (price vs monthlyRent)

### Rent Page Data Loading

The rent page uses a **two-tier data loading strategy**:

1. **Tier 1: Global Variable (Primary)**
   - If `rentalPropertiesData` is available globally from `properties.js`, use it
   - Maintains compatibility with original data structure

2. **Tier 2: JSON File (Fallback)**
   - If the global variable is not available, fetch properties from `src/data/rental-properties.json`
   - The JSON file contains all 20 rental properties (IDs 101-120)
   - Uses the Fetch API with proper error handling

This ensures the rent page works reliably even if there are timing issues with script loading or caching problems.

### Rent Page Features

✅ Property listing with 20 properties
✅ Filtering by: Type, Price, BHK, Furnishing, Amenities
✅ Sorting by: Newest, Price (Low-High), Price (High-Low), Popular
✅ Property cards with images and details
✅ "View Details" links to property details page
✅ Reset filters button
✅ Results count display

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
