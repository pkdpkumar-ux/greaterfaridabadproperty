// Greater Faridabad Property - Sample Data
// This file contains sample property listings for demonstration

const propertiesData = [
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
        description: "Beautiful 2 BHK apartment with modern amenities and excellent ventilation. Situated in the heart of Sector 23 with proximity to schools, hospitals, and shopping malls.",
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
        description: "Modern 2 BHK offering 2-4 BHK options with resort-style amenities in Omaxe Heights project.",
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
    { name: "Sector 66", count: 2 },
    { name: "Sector 69", count: 2 },
    { name: "Sector 71", count: 2 },
    { name: "Sector 75", count: 2 },
    { name: "Sector 78", count: 2 },
    { name: "Sector 81", count: 2 },
    { name: "Sector 82", count: 2 },
    { name: "Sector 84", count: 2 },
    { name: "Sector 85", count: 2 },
    { name: "Sector 86", count: 2 },
    { name: "Sector 87", count: 2 },
    { name: "Sector 88", count: 2 },
    { name: "Sector 89", count: 2 }
];

// Builders Data
const buildersData = [
    { 
        name: "Mansha Group",
        description: "Known for residential developments like Puri The Pranayam (Sector 82) and other planned societies in Greater Faridabad.",
        properties: 4
    },
    { 
        name: "RPS Palms",
        description: "Large residential society in Sector 88 with multiple apartment towers.",
        properties: 3
    },
    { 
        name: "Omaxe Heights",
        description: "Project in Sector 86 offering 2–4 BHK homes with resort-style amenities.",
        properties: 3
    },
    { 
        name: "BP Homes Pvt. Ltd",
        description: "Builder with multiple residential projects, especially in Sector 81 and surrounding areas.",
        properties: 4
    },
    { 
        name: "Nest Dwelling Concept (P) Ltd.",
        description: "Focused on Greenfield Colony and nearby residential projects.",
        properties: 2
    },
    { 
        name: "Amolik Housing Pvt. Ltd.",
        description: "Developer of projects like Amolik Park View and Amolik Heights in Sectors 84 & 88.",
        properties: 3
    },
    { 
        name: "Raghav Nanda Estate & Builders",
        description: "Real estate developer/agent active across Sectors 75–81 & Neharpar.",
        properties: 3
    },
    { 
        name: "Skyline Properties & Buildcon",
        description: "Known in BPTP Parkland, Sector 85 area.",
        properties: 2
    },
    { 
        name: "Desires The Property Hub",
        description: "Developer active around Sector 85.",
        properties: 2
    },
    { 
        name: "NDR GROUP",
        description: "Regional builder in central Faridabad.",
        properties: 2
    },
    { 
        name: "M M Developers",
        description: "Local builder in Old Faridabad.",
        properties: 2
    },
    { 
        name: "Anushree Builders & Developers",
        description: "Developer in Sector 87.",
        properties: 2
    },
    { 
        name: "Adore Prosperity homes",
        description: "Near Omaxe Heights; part of Adore real-estate brand presence.",
        properties: 2
    },
    { 
        name: "SDS India Real Tech",
        description: "Local contractors/consultants with projects across sectors.",
        properties: 2
    },
    { 
        name: "Azad Real Estate & Developers",
        description: "Local contractors/consultants with projects across sectors.",
        properties: 2
    },
    { 
        name: "Bhasin Estate & Construction",
        description: "Local contractors/consultants with projects across sectors.",
        properties: 2
    },
    { 
        name: "Shiv Sai",
        description: "Luxury housing in sector 86.",
        properties: 2
    }
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

// Rental Properties Data
const rentalPropertiesData = [
    {
        id: 101,
        title: "2 BHK Apartment on Rent in Sector 78",
        location: "Sector 78, Greater Faridabad",
        sector: "78",
        monthlyRent: 15000,
        securityDeposit: 300000,
        type: "residential",
        bhk: 2,
        size: 1200,
        furnishing: "unfurnished",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop"
        ],
        amenities: ["gym", "pool", "parking", "security"],
        features: ["2 Bathrooms", "Balcony", "Modular Kitchen", "Water Tank"],
        description: "Spacious 2 BHK unfurnished apartment in well-maintained residential complex with excellent amenities.",
        dateAdded: Date.now(),
        views: 234
    },
    {
        id: 102,
        title: "1 BHK Semi-Furnished Flat in Sector 82",
        location: "Sector 82, Greater Faridabad",
        sector: "82",
        monthlyRent: 10000,
        securityDeposit: 200000,
        type: "residential",
        bhk: 1,
        size: 650,
        furnishing: "semi-furnished",
        images: [
            "https://images.unsplash.com/photo-1462874149175-446339e2e1d8?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1549399542-7e3f8b83ad45?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=500&fit=crop"
        ],
        amenities: ["parking", "security"],
        features: ["1 Bathroom", "Balcony", "Built-in Wardrobes"],
        description: "Comfortable 1 BHK semi-furnished flat perfect for bachelor or couple. Near metro and shopping areas.",
        dateAdded: Date.now() - 86400000,
        views: 156
    },
    {
        id: 103,
        title: "3 BHK Fully Furnished Apartment in Sector 86",
        location: "Sector 86, Greater Faridabad",
        sector: "86",
        monthlyRent: 25000,
        securityDeposit: 500000,
        type: "residential",
        bhk: 3,
        size: 1600,
        furnishing: "fully-furnished",
        images: [
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9d5a8324a1fc?w=800&h=500&fit=crop"
        ],
        amenities: ["gym", "pool", "parking", "security"],
        features: ["3 Bathrooms", "Fully Furnished", "Modular Kitchen", "Washer/Dryer"],
        description: "Luxurious 3 BHK fully furnished apartment ready to move in. Premium furnishings and appliances included.",
        dateAdded: Date.now() - 172800000,
        views: 412
    },
    {
        id: 104,
        title: "2 BHK Unfurnished Villa in Sector 88",
        location: "Sector 88, Greater Faridabad",
        sector: "88",
        monthlyRent: 18000,
        securityDeposit: 360000,
        type: "residential",
        bhk: 2,
        size: 1100,
        furnishing: "unfurnished",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop"
        ],
        amenities: ["parking", "security", "garden"],
        features: ["2 Bathrooms", "Garden", "Carport", "Independent"],
        description: "Independent 2 BHK villa with private garden and dedicated parking. Peaceful residential locality.",
        dateAdded: Date.now(),
        views: 189
    },
    {
        id: 105,
        title: "1 BHK Unfurnished in Sector 75",
        location: "Sector 75, Greater Faridabad",
        sector: "75",
        monthlyRent: 8000,
        securityDeposit: 160000,
        type: "residential",
        bhk: 1,
        size: 550,
        furnishing: "unfurnished",
        images: [
            "https://images.unsplash.com/photo-1462874149175-446339e2e1d8?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1549399542-7e3f8b83ad45?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=500&fit=crop"
        ],
        amenities: ["parking"],
        features: ["1 Bathroom", "Balcony"],
        description: "Budget-friendly 1 BHK unfurnished apartment. Great location with easy access to schools and market.",
        dateAdded: Date.now() - 259200000,
        views: 127
    },
    {
        id: 106,
        title: "Commercial Space for Rent in Sector 85",
        location: "Sector 85, Greater Faridabad",
        sector: "85",
        monthlyRent: 30000,
        securityDeposit: 600000,
        type: "commercial",
        bhk: null,
        size: 800,
        furnishing: "unfurnished",
        images: [
            "https://images.unsplash.com/photo-1560607592-735ee62f507f?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1576267423446-16c0db7b63e2?w=800&h=500&fit=crop"
        ],
        amenities: ["parking", "security"],
        features: ["Good Visibility", "High Traffic", "Corner Shop"],
        description: "Well-located commercial space suitable for retail, office, or service business. High footfall area.",
        dateAdded: Date.now(),
        views: 298
    },
    {
        id: 107,
        title: "2 BHK Semi-Furnished in Sector 81",
        location: "Sector 81, Greater Faridabad",
        sector: "81",
        monthlyRent: 12000,
        securityDeposit: 240000,
        type: "residential",
        bhk: 2,
        size: 1050,
        furnishing: "semi-furnished",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop"
        ],
        amenities: ["gym", "parking", "security"],
        features: ["2 Bathrooms", "Balcony", "Kitchen Cabinets"],
        description: "Well-maintained 2 BHK semi-furnished with basic amenities. Perfect for small families.",
        dateAdded: Date.now() - 345600000,
        views: 203
    },
    {
        id: 108,
        title: "3 BHK Unfurnished Villa in Sector 86",
        location: "Sector 86, Greater Faridabad",
        sector: "86",
        monthlyRent: 28000,
        securityDeposit: 560000,
        type: "residential",
        bhk: 3,
        size: 1500,
        furnishing: "unfurnished",
        images: [
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9d5a8324a1fc?w=800&h=500&fit=crop"
        ],
        amenities: ["gym", "pool", "parking", "security", "garden"],
        features: ["3 Bathrooms", "Garden", "Carport", "Spacious"],
        description: "Spacious 3 BHK unfurnished villa in premium gated community with excellent amenities.",
        dateAdded: Date.now() - 432000000,
        views: 356
    },
    {
        id: 109,
        title: "1 BHK Fully Furnished in Sector 78",
        location: "Sector 78, Greater Faridabad",
        sector: "78",
        monthlyRent: 12000,
        securityDeposit: 240000,
        type: "residential",
        bhk: 1,
        size: 700,
        furnishing: "fully-furnished",
        images: [
            "https://images.unsplash.com/photo-1462874149175-446339e2e1d8?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1549399542-7e3f8b83ad45?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=500&fit=crop"
        ],
        amenities: ["gym", "parking", "security"],
        features: ["1 Bathroom", "Fully Furnished", "AC"],
        description: "Ready to move 1 BHK fully furnished apartment. All utilities and furnishings included.",
        dateAdded: Date.now() - 518400000,
        views: 167
    },
    {
        id: 110,
        title: "Office Space in Sector 84",
        location: "Sector 84, Greater Faridabad",
        sector: "84",
        monthlyRent: 40000,
        securityDeposit: 800000,
        type: "commercial",
        bhk: null,
        size: 1200,
        furnishing: "unfurnished",
        images: [
            "https://images.unsplash.com/photo-1560707566-d4a1d4410495?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&h=500&fit=crop"
        ],
        amenities: ["parking", "security"],
        features: ["Open Plan", "Cabins Ready", "Lift"],
        description: "Premium office space with modern infrastructure. Suitable for corporate offices and consultancies.",
        dateAdded: Date.now(),
        views: 445,
        builder: "Azad Real Estate & Developers"
    },
    {
        id: 111,
        title: "2 BHK Apartment in Sector 69",
        location: "Sector 69, Greater Faridabad",
        sector: "69",
        monthlyRent: 16000,
        securityDeposit: 320000,
        type: "residential",
        bhk: 2,
        size: 1150,
        furnishing: "semi-furnished",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop"
        ],
        amenities: ["gym", "parking", "security"],
        features: ["2 Bathrooms", "Balcony", "Kitchen Cabinets"],
        description: "Well-appointed 2 BHK semi-furnished apartment with modern amenities in prime location.",
        dateAdded: Date.now() - 172800000,
        views: 278,
        builder: "Skyline Properties & Buildcon"
    },
    {
        id: 112,
        title: "3 BHK Villa on Rent in Sector 82",
        location: "Sector 82, Greater Faridabad",
        sector: "82",
        monthlyRent: 22000,
        securityDeposit: 440000,
        type: "residential",
        bhk: 3,
        size: 1500,
        furnishing: "unfurnished",
        images: [
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9d5a8324a1fc?w=800&h=500&fit=crop"
        ],
        amenities: ["gym", "pool", "parking", "security"],
        features: ["3 Bathrooms", "Garden", "Carport", "Spacious"],
        description: "Spacious 3 BHK unfurnished villa with private garden in premium gated community.",
        dateAdded: Date.now() - 259200000,
        views: 356,
        builder: "Mansha Group"
    },
    {
        id: 113,
        title: "1 BHK Unfurnished in Sector 75",
        location: "Sector 75, Greater Faridabad",
        sector: "75",
        monthlyRent: 9000,
        securityDeposit: 180000,
        type: "residential",
        bhk: 1,
        size: 600,
        furnishing: "unfurnished",
        images: [
            "https://images.unsplash.com/photo-1462874149175-446339e2e1d8?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1549399542-7e3f8b83ad45?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=500&fit=crop"
        ],
        amenities: ["parking", "security"],
        features: ["1 Bathroom", "Balcony", "Well Connected"],
        description: "Affordable 1 BHK unfurnished apartment in developing sector with good connectivity.",
        dateAdded: Date.now() - 345600000,
        views: 145,
        builder: "BP Homes Pvt. Ltd"
    },
    {
        id: 114,
        title: "2 BHK Fully Furnished in Sector 86",
        location: "Sector 86, Greater Faridabad",
        sector: "86",
        monthlyRent: 26000,
        securityDeposit: 520000,
        type: "residential",
        bhk: 2,
        size: 1250,
        furnishing: "fully-furnished",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop"
        ],
        amenities: ["gym", "pool", "parking", "security"],
        features: ["2 Bathrooms", "Fully Furnished", "Modern Appliances"],
        description: "Ready to move 2 BHK fully furnished apartment with all premium amenities included.",
        dateAdded: Date.now() - 432000000,
        views: 389,
        builder: "Omaxe Heights"
    },
    {
        id: 115,
        title: "Commercial Shop in Sector 85",
        location: "Sector 85, Greater Faridabad",
        sector: "85",
        monthlyRent: 35000,
        securityDeposit: 700000,
        type: "commercial",
        bhk: null,
        size: 600,
        furnishing: "unfurnished",
        images: [
            "https://images.unsplash.com/photo-1560607592-735ee62f507f?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1576267423446-16c0db7b63e2?w=800&h=500&fit=crop"
        ],
        amenities: ["parking", "security"],
        features: ["High Traffic Area", "Good Visibility", "Corner Shop"],
        description: "Prime commercial shop with excellent visibility and high footfall location.",
        dateAdded: Date.now() - 518400000,
        views: 512,
        builder: "Shiv Sai"
    },
    {
        id: 116,
        title: "2 BHK Semi-Furnished in Sector 88",
        location: "Sector 88, Greater Faridabad",
        sector: "88",
        monthlyRent: 17000,
        securityDeposit: 340000,
        type: "residential",
        bhk: 2,
        size: 1100,
        furnishing: "semi-furnished",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop"
        ],
        amenities: ["gym", "parking", "security"],
        features: ["2 Bathrooms", "Balcony", "Kitchen Setup"],
        description: "Well-maintained 2 BHK semi-furnished with kitchen setup and basic furniture.",
        dateAdded: Date.now() - 604800000,
        views: 234,
        builder: "RPS Palms"
    },
    {
        id: 117,
        title: "1 BHK Fully Furnished in Sector 81",
        location: "Sector 81, Greater Faridabad",
        sector: "81",
        monthlyRent: 11500,
        securityDeposit: 230000,
        type: "residential",
        bhk: 1,
        size: 700,
        furnishing: "fully-furnished",
        images: [
            "https://images.unsplash.com/photo-1462874149175-446339e2e1d8?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1549399542-7e3f8b83ad45?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=500&fit=crop"
        ],
        amenities: ["gym", "parking", "security"],
        features: ["1 Bathroom", "AC", "Fully Furnished"],
        description: "Compact 1 BHK fully furnished apartment ideal for professionals and bachelors.",
        dateAdded: Date.now() - 691200000,
        views: 178,
        builder: "Nest Dwelling Concept (P) Ltd."
    },
    {
        id: 118,
        title: "3 BHK Unfurnished in Sector 86",
        location: "Sector 86, Greater Faridabad",
        sector: "86",
        monthlyRent: 32000,
        securityDeposit: 640000,
        type: "residential",
        bhk: 3,
        size: 1700,
        furnishing: "unfurnished",
        images: [
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9d5a8324a1fc?w=800&h=500&fit=crop"
        ],
        amenities: ["gym", "pool", "parking", "security", "garden"],
        features: ["3 Bathrooms", "Garden", "Parking", "Spacious Layout"],
        description: "Spacious 3 BHK unfurnished apartment with garden and premium amenities.",
        dateAdded: Date.now() - 777600000,
        views: 445,
        builder: "Amolik Housing Pvt. Ltd."
    },
    {
        id: 119,
        title: "Office Space in Sector 82",
        location: "Sector 82, Greater Faridabad",
        sector: "82",
        monthlyRent: 38000,
        securityDeposit: 760000,
        type: "commercial",
        bhk: null,
        size: 1000,
        furnishing: "unfurnished",
        images: [
            "https://images.unsplash.com/photo-1560707566-d4a1d4410495?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&h=500&fit=crop"
        ],
        amenities: ["parking", "security"],
        features: ["Open Plan", "Well Lit", "Washrooms"],
        description: "Professional office space with good infrastructure and connectivity.",
        dateAdded: Date.now() - 864000000,
        views: 389,
        builder: "Raghav Nanda Estate & Builders"
    },
    {
        id: 120,
        title: "2 BHK Apartment in Sector 75",
        location: "Sector 75, Greater Faridabad",
        sector: "75",
        monthlyRent: 13500,
        securityDeposit: 270000,
        type: "residential",
        bhk: 2,
        size: 1050,
        furnishing: "unfurnished",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop"
        ],
        amenities: ["parking", "security"],
        features: ["2 Bathrooms", "Balcony", "Well Maintained"],
        description: "Budget-friendly 2 BHK unfurnished apartment in established residential area.",
        dateAdded: Date.now() - 950400000,
        views: 267,
        builder: "M M Developers"
    }
];

// Make data accessible globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        propertiesData,
        rentalPropertiesData,
        testimonialsData,
        sectorsData,
        buildersData,
        formatPrice,
        getPropertyById,
        filterProperties,
        getStarRating
    };
}
// Confirm file loaded successfully
if (typeof window !== 'undefined') {
    window.propertiesDataLoaded = true;
    console.log('properties.js loaded successfully!');
    console.log('propertiesData count:', typeof propertiesData !== 'undefined' ? propertiesData.length : 'undefined');
    console.log('rentalPropertiesData count:', typeof rentalPropertiesData !== 'undefined' ? rentalPropertiesData.length : 'undefined');
}