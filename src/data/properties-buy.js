// Greater Faridabad Property - BUY/SALE Properties Data
// Properties available for purchase/sale

const buyPropertiesData = [
    {
        id: 1,
        title: "Luxury Apartment in Sector 78",
        location: "Sector 78, Greater Faridabad",
        sector: "78",
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
        description: "Beautiful 2 BHK apartment with modern amenities and excellent ventilation. Situated in the heart of Sector 78 with proximity to schools, hospitals, and shopping malls.",
        builder: "Mansha Group",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 2,
        title: "Premium 3 BHK Villa in Sector 82",
        location: "Sector 82, Greater Faridabad",
        sector: "82",
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
        builder: "Omaxe Heights",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 3,
        title: "Budget Friendly 1 BHK in Sector 75",
        location: "Sector 75, Greater Faridabad",
        sector: "75",
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
        builder: "BP Homes Pvt. Ltd",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 4,
        title: "Commercial Space in Sector 85",
        location: "Sector 85, Greater Faridabad",
        sector: "85",
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
        builder: "SDS India Real Tech",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 5,
        title: "Residential Plot in Sector 87",
        location: "Sector 87, Greater Faridabad",
        sector: "87",
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
        builder: "Raghav Nanda Estate & Builders",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 6,
        title: "Ultra Luxury 4 BHK Penthouse in Sector 86",
        location: "Sector 86, Greater Faridabad",
        sector: "86",
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
        builder: "Amolik Housing Pvt. Ltd.",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 7,
        title: "2 BHK Apartment in Sector 81",
        location: "Sector 81, Greater Faridabad",
        sector: "81",
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
        builder: "RPS Palms",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 8,
        title: "Office Space in Sector 84",
        location: "Sector 84, Greater Faridabad",
        sector: "84",
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
        builder: "Azad Real Estate & Developers",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 9,
        title: "Residential Plot in Sector 88",
        location: "Sector 88, Greater Faridabad",
        sector: "88",
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
        builder: "Nest Dwelling Concept (P) Ltd.",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 10,
        title: "2 BHK + Study in Sector 69",
        location: "Sector 69, Greater Faridabad",
        sector: "69",
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
        builder: "Skyline Properties & Buildcon",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 11,
        title: "Premium 3 BHK in Sector 78",
        location: "Sector 78, Greater Faridabad",
        sector: "78",
        price: 6500000,
        priceDisplay: "65 Lakh",
        type: "residential",
        bhk: 3,
        size: 1600,
        floor: 7,
        totalFloors: 12,
        propertyAge: "New Construction",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop"
        ],
        amenities: ["gym", "pool", "parking", "security"],
        features: ["3 Bathrooms", "Balcony", "Modular Kitchen", "Lift"],
        description: "Well-appointed 3 BHK apartment with premium finishes and great natural light. Located in a prime area with excellent connectivity.",
        builder: "Mansha Group",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 12,
        title: "2 BHK Flat in Sector 82",
        location: "Sector 82, Greater Faridabad",
        sector: "82",
        price: 4800000,
        priceDisplay: "48 Lakh",
        type: "residential",
        bhk: 2,
        size: 1150,
        floor: 4,
        totalFloors: 10,
        propertyAge: "1 Year Old",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop"
        ],
        amenities: ["parking", "security", "lift"],
        features: ["2 Bathrooms", "Balcony", "Modern Design"],
        description: "Contemporary 2 BHK apartment ideal for families. Close to schools, hospitals, and shopping centers.",
        builder: "Mansha Group",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 13,
        title: "Spacious 2 BHK in Sector 88",
        location: "Sector 88, Greater Faridabad",
        sector: "88",
        price: 5200000,
        priceDisplay: "52 Lakh",
        type: "residential",
        bhk: 2,
        size: 1250,
        floor: 5,
        totalFloors: 11,
        propertyAge: "New Construction",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop"
        ],
        amenities: ["gym", "pool", "parking", "security"],
        features: ["2 Bathrooms", "Study Area", "Balcony", "Pantry"],
        description: "Excellent 2 BHK with resort-style amenities. Perfect for modern living with swimming pool and fitness center.",
        builder: "RPS Palms",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 14,
        title: "3 BHK Tower in Sector 88",
        location: "Sector 88, Greater Faridabad",
        sector: "88",
        price: 8500000,
        priceDisplay: "85 Lakh",
        type: "residential",
        bhk: 3,
        size: 1800,
        floor: 8,
        totalFloors: 15,
        propertyAge: "New Construction",
        images: [
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9d5a8324a1fc?w=800&h=500&fit=crop"
        ],
        amenities: ["gym", "pool", "parking", "security", "garden"],
        features: ["3 Bathrooms", "Garden", "Modular Kitchen", "Lift"],
        description: "Luxurious 3 BHK in a multi-tower apartment complex with world-class amenities and landscaped gardens.",
        builder: "RPS Palms",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 15,
        title: "Premium 2 BHK in Sector 86",
        location: "Sector 86, Greater Faridabad",
        sector: "86",
        price: 6200000,
        priceDisplay: "62 Lakh",
        type: "residential",
        bhk: 2,
        size: 1350,
        floor: 6,
        totalFloors: 12,
        propertyAge: "New Construction",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop"
        ],
        amenities: ["gym", "parking", "security"],
        features: ["2 Bathrooms", "Balcony", "Modular Kitchen"],
        description: "Modern 2 BHK offering premium options with resort-style amenities in Omaxe Heights project.",
        builder: "Omaxe Heights",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 16,
        title: "Luxury 3 BHK in Sector 86",
        location: "Sector 86, Greater Faridabad",
        sector: "86",
        price: 9000000,
        priceDisplay: "90 Lakh",
        type: "residential",
        bhk: 3,
        size: 1900,
        floor: 9,
        totalFloors: 14,
        propertyAge: "New Construction",
        images: [
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9d5a8324a1fc?w=800&h=500&fit=crop"
        ],
        amenities: ["gym", "pool", "parking", "security"],
        features: ["3 Bathrooms", "Jacuzzi", "Modular Kitchen", "Smart Home"],
        description: "Exclusive 3-4 BHK homes with resort-style amenities, high-end finishes, and premium lifestyle.",
        builder: "Omaxe Heights",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 17,
        title: "Residential Plot in Sector 81",
        location: "Sector 81, Greater Faridabad",
        sector: "81",
        price: 3800000,
        priceDisplay: "38 Lakh",
        type: "plot",
        bhk: null,
        size: 450,
        floor: null,
        totalFloors: null,
        propertyAge: "Vacant Land",
        images: [
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1595255707802-e92b5a74e5b7?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop"
        ],
        amenities: [],
        features: ["Corner Plot", "Fenced", "Road Frontage"],
        description: "Excellent residential plot in well-planned sector with multiple projects and good connectivity.",
        builder: "BP Homes Pvt. Ltd",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 18,
        title: "1 BHK Affordable Home in Sector 81",
        location: "Sector 81, Greater Faridabad",
        sector: "81",
        price: 2500000,
        priceDisplay: "25 Lakh",
        type: "residential",
        bhk: 1,
        size: 650,
        floor: 2,
        totalFloors: 8,
        propertyAge: "1 Year Old",
        images: [
            "https://images.unsplash.com/photo-1462874149175-446339e2e1d8?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1549399542-7e3f8b83ad45?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=500&fit=crop"
        ],
        amenities: ["parking", "security"],
        features: ["1 Bathroom", "Balcony", "Well Designed"],
        description: "Budget-friendly 1 BHK perfect for first-time buyers and young professionals in growing sector.",
        builder: "BP Homes Pvt. Ltd",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 19,
        title: "2 BHK in Sector 86",
        location: "Sector 86, Greater Faridabad",
        sector: "86",
        price: 6800000,
        priceDisplay: "68 Lakh",
        type: "residential",
        bhk: 2,
        size: 1400,
        floor: 7,
        totalFloors: 13,
        propertyAge: "New Construction",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop"
        ],
        amenities: ["gym", "pool", "parking", "security"],
        features: ["2 Bathrooms", "Balcony", "Modular Kitchen", "Lift"],
        description: "Luxury 2 BHK apartment offering ultimate comfort with premium finishes and modern design.",
        builder: "Shiv Sai",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
        id: 20,
        title: "4 BHK Luxury Penthouse in Sector 86",
        location: "Sector 86, Greater Faridabad",
        sector: "86",
        price: 14500000,
        priceDisplay: "1.45 Cr",
        type: "residential",
        bhk: 4,
        size: 2400,
        floor: 12,
        totalFloors: 15,
        propertyAge: "New Construction",
        images: [
            "https://images.unsplash.com/photo-1512917774080-9d5a8324a1fc?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1546439999-a7e0b75ceaea?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1559592413-915581eaa923?w=800&h=500&fit=crop"
        ],
        amenities: ["gym", "pool", "parking", "security", "concierge"],
        features: ["4 Bathrooms", "Terrace", "Modular Kitchen", "Smart Home", "View"],
        description: "Ultra-luxury 4 BHK penthouse with premium finishes, exclusive amenities, and panoramic views.",
        builder: "Shiv Sai",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    }
];

// For backwards compatibility
const propertiesData = buyPropertiesData;
// Builders data
const buildersData = [
    {
        name: "Mansha Group",
        description: "Leading construction company with 10+ years of experience in delivering quality residential and commercial projects.",
        properties: 3
    },
    {
        name: "Shiv Sai",
        description: "Premium builder known for luxury apartments and modern architectural designs.",
        properties: 2
    },
    {
        name: "RSI Buildcon",
        description: "Innovative builder focusing on sustainable and eco-friendly construction.",
        properties: 2
    },
    {
        name: "Mawals Builders",
        description: "Trusted name in real estate with a portfolio of successful residential projects.",
        properties: 2
    },
    {
        name: "JRD Properties",
        description: "Specialized in affordable and mid-range residential properties.",
        properties: 2
    },
    {
        name: "AQ Buildtech",
        description: "Modern builder with expertise in modern amenities and smart features.",
        properties: 3
    },
    {
        name: "Land Solutions",
        description: "Expert in plot development and land conversion projects.",
        properties: 2
    },
    {
        name: "Pragati Associates",
        description: "Committed to building sustainable communities with quality construction.",
        properties: 2
    }
];