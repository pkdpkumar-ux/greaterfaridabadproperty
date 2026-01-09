// Greater Faridabad Property - Sample Data
// This file contains sample property listings for demonstration

const propertiesData = [
    {
        id: 1,
        title: "Luxury Apartment in Sector 23",
        location: "Sector 23, Greater Faridabad",
        sector: "23",
        price: 4500000,
        priceDisplay: "45 Lakh",
        type: "residential",
        bhk: 2,
        size: 1200,
        floor: 5,
        totalFloors: 12,
        propertyAge: "New Construction",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop"
        ],
        amenities: ["gym", "pool", "parking", "security"],
        features: ["2 Bathrooms", "Balcony", "Modular Kitchen", "Floor Facing"],
        description: "Beautiful 2 BHK apartment with modern amenities and excellent ventilation. Situated in the heart of Sector 23 with proximity to schools, hospitals, and shopping malls.",
        builder: "Premium Builders",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 2,
        title: "Premium 3 BHK Villa in Sector 31",
        location: "Sector 31, Greater Faridabad",
        sector: "31",
        price: 8500000,
        priceDisplay: "85 Lakh",
        type: "residential",
        bhk: 3,
        size: 1800,
        floor: 1,
        totalFloors: 1,
        propertyAge: "New Construction",
        images: [
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9d5a8324a1fc?w=800&h=500&fit=crop"
        ],
        amenities: ["parking", "security", "garden"],
        features: ["3 Bathrooms", "Garden", "Parking Space", "Independent"],
        description: "Spacious 3 BHK independent villa with private garden and parking. Modern architecture with excellent natural light and ventilation.",
        builder: "Elite Developments",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 3,
        title: "Budget Friendly 1 BHK in Sector 17",
        location: "Sector 17, Greater Faridabad",
        sector: "17",
        price: 2200000,
        priceDisplay: "22 Lakh",
        type: "residential",
        bhk: 1,
        size: 600,
        floor: 3,
        totalFloors: 8,
        propertyAge: "2 Years Old",
        images: [
            "https://images.unsplash.com/photo-1462874149175-446339e2e1d8?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1549399542-7e3f8b83ad45?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=500&fit=crop"
        ],
        amenities: ["parking", "security"],
        features: ["1 Bathroom", "Balcony", "Well Designed"],
        description: "Affordable 1 BHK flat perfect for young professionals and couples. Good connectivity to major areas and commercial zones.",
        builder: "Value Homes",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 4,
        title: "Commercial Space in Sector 35",
        location: "Sector 35, Greater Faridabad",
        sector: "35",
        price: 15000000,
        priceDisplay: "1.5 Cr",
        type: "commercial",
        bhk: null,
        size: 2500,
        floor: 2,
        totalFloors: 5,
        propertyAge: "New Construction",
        images: [
            "https://images.unsplash.com/photo-1560607592-735ee62f507f?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1576267423446-16c0db7b63e2?w=800&h=500&fit=crop"
        ],
        amenities: ["parking", "security", "24/7 Access"],
        features: ["Open Space", "Washrooms", "Pantry", "High Traffic Area"],
        description: "Prime commercial space ideal for retail, office, or service business. Excellent visibility and high footfall area.",
        builder: "Commerce Ventures",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 5,
        title: "Residential Plot in Sector 45",
        location: "Sector 45, Greater Faridabad",
        sector: "45",
        price: 3500000,
        priceDisplay: "35 Lakh",
        type: "plot",
        bhk: null,
        size: 400,
        floor: null,
        totalFloors: null,
        propertyAge: "Vacant Land",
        images: [
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1595255707802-e92b5a74e5b7?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop"
        ],
        amenities: [],
        features: ["Corner Plot", "Fenced", "Clear Title"],
        description: "Spacious residential plot with road frontage. Perfect for building your dream home. Well connected area with all amenities nearby.",
        builder: "Land Developers",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 6,
        title: "Ultra Luxury 4 BHK Penthouse in Sector 23",
        location: "Sector 23, Greater Faridabad",
        sector: "23",
        price: 25000000,
        priceDisplay: "2.5 Cr",
        type: "residential",
        bhk: 4,
        size: 2500,
        floor: 12,
        totalFloors: 12,
        propertyAge: "New Construction",
        images: [
            "https://images.unsplash.com/photo-1512917774080-9d5a8324a1fc?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1546439999-a7e0b75ceaea?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1559592413-915581eaa923?w=800&h=500&fit=crop"
        ],
        amenities: ["gym", "pool", "parking", "security", "concierge"],
        features: ["4 Bathrooms", "Terrace", "Modular Kitchen", "Smart Home"],
        description: "Luxurious penthouse with panoramic city views. State-of-the-art amenities and premium finishing. Perfect for discerning buyers.",
        builder: "Luxury Estates",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 7,
        title: "2 BHK Apartment in Sector 21",
        location: "Sector 21, Greater Faridabad",
        sector: "21",
        price: 4200000,
        priceDisplay: "42 Lakh",
        type: "residential",
        bhk: 2,
        size: 1100,
        floor: 4,
        totalFloors: 10,
        propertyAge: "1 Year Old",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop"
        ],
        amenities: ["gym", "parking", "security"],
        features: ["2 Bathrooms", "Balcony", "Lift", "Water Storage"],
        description: "Well-maintained 2 BHK with excellent build quality. Active residential community with regular events and activities.",
        builder: "Family Homes",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 8,
        title: "Office Space in Sector 29",
        location: "Sector 29, Greater Faridabad",
        sector: "29",
        price: 8000000,
        priceDisplay: "80 Lakh",
        type: "commercial",
        bhk: null,
        size: 1500,
        floor: 3,
        totalFloors: 6,
        propertyAge: "2 Years Old",
        images: [
            "https://images.unsplash.com/photo-1560707566-d4a1d4410495?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&h=500&fit=crop"
        ],
        amenities: ["parking", "security"],
        features: ["Open Plan", "Cabins Ready", "Pantry", "Meeting Room"],
        description: "Professional office space with ready-to-use infrastructure. Ideal for startup to mid-size companies.",
        builder: "Business Centers",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 9,
        title: "Residential Plot in Sector 50",
        location: "Sector 50, Greater Faridabad",
        sector: "50",
        price: 4000000,
        priceDisplay: "40 Lakh",
        type: "plot",
        bhk: null,
        size: 500,
        floor: null,
        totalFloors: null,
        propertyAge: "Vacant Land",
        images: [
            "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1601612628319-48a264a8bc81?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop"
        ],
        amenities: [],
        features: ["Corner Plot", "Ready for Construction", "Good Locality"],
        description: "Excellent plot for building residential villa. Surrounded by established residential community.",
        builder: "Plot Traders",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 10,
        title: "2 BHK + Study in Sector 28",
        location: "Sector 28, Greater Faridabad",
        sector: "28",
        price: 5500000,
        priceDisplay: "55 Lakh",
        type: "residential",
        bhk: 2,
        size: 1300,
        floor: 6,
        totalFloors: 14,
        propertyAge: "New Construction",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop"
        ],
        amenities: ["gym", "pool", "parking", "security"],
        features: ["2 Bathrooms", "Study Room", "Balcony", "Modular Kitchen"],
        description: "Spacious apartment with additional study room perfect for work from home. Modern architecture with all latest amenities.",
        builder: "Smart Living Builders",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    }
];

// Testimonials Data
const testimonialsData = [
    {
        id: 1,
        name: "Rahul Sharma",
        title: "Happy Home Owner",
        rating: 5,
        text: "Greater Faridabad Property helped me find my dream home in just 2 weeks. Professional team, transparent process, and excellent support throughout."
    },
    {
        id: 2,
        name: "Priya Patel",
        title: "Business Owner",
        rating: 5,
        text: "Sold my commercial property within 3 months with their expert guidance. They understood the market perfectly and negotiated great terms."
    },
    {
        id: 3,
        name: "Amit Kumar",
        title: "Investor",
        rating: 4,
        text: "Excellent investment opportunity identification. The team provided detailed market analysis that helped me make informed decisions."
    },
    {
        id: 4,
        name: "Neha Singh",
        title: "Young Professional",
        rating: 5,
        text: "Found the perfect 2 BHK apartment within my budget. The entire process was seamless and they were always available to answer my questions."
    }
];

// Sectors Available
const sectorsData = [
    { name: "Sector 17", count: 3 },
    { name: "Sector 21", count: 4 },
    { name: "Sector 23", count: 5 },
    { name: "Sector 28", count: 3 },
    { name: "Sector 29", count: 2 },
    { name: "Sector 31", count: 3 },
    { name: "Sector 35", count: 2 },
    { name: "Sector 45", count: 2 },
    { name: "Sector 50", count: 3 }
];

// Builders Data
const buildersData = [
    { name: "Premium Builders", properties: 8 },
    { name: "Elite Developments", properties: 6 },
    { name: "Luxury Estates", properties: 5 },
    { name: "Family Homes", properties: 7 },
    { name: "Smart Living Builders", properties: 4 },
    { name: "Value Homes", properties: 5 },
    { name: "Commerce Ventures", properties: 3 },
    { name: "Business Centers", properties: 4 }
];

// Amenity Icons Mapping
const amenitiesIconMap = {
    gym: "fa-dumbbell",
    pool: "fa-water",
    parking: "fa-car",
    security: "fa-shield",
    garden: "fa-tree",
    "24/7 Access": "fa-lock-open",
    concierge: "fa-person-dots"
};

// Helper function to get star rating HTML
function getStarRating(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
    }
    return stars;
}

// Helper function to format price
function formatPrice(price) {
    if (price >= 10000000) {
        return (price / 10000000).toFixed(1) + ' Cr';
    } else if (price >= 100000) {
        return (price / 100000).toFixed(0) + ' Lakh';
    }
    return '₹' + price.toLocaleString();
}

// Helper function to get property by ID
function getPropertyById(id) {
    return propertiesData.find(property => property.id === parseInt(id));
}

// Helper function to filter properties
function filterProperties(filters = {}) {
    return propertiesData.filter(property => {
        if (filters.type && property.type !== filters.type) return false;
        if (filters.minPrice && property.price < filters.minPrice) return false;
        if (filters.maxPrice && property.price > filters.maxPrice) return false;
        if (filters.bhk && property.bhk !== filters.bhk) return false;
        if (filters.sector && property.sector !== filters.sector) return false;
        if (filters.builder && property.builder !== filters.builder) return false;
        return true;
    });
}

// Make data accessible globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        propertiesData,
        testimonialsData,
        sectorsData,
        buildersData,
        formatPrice,
        getPropertyById,
        filterProperties,
        getStarRating
    };
}
