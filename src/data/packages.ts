export interface ItineraryDay {
    day: number;
    title: string;
    activities: string[];
}

export interface TourPackage {
    id: string;
    title: string;
    slug: string;
    duration: string;
    basePrice: number;
    discountedPrice: number;
    image: string;
    shortDescription: string;
    inclusions: string[];
    exclusions: string[];
    itinerary: ItineraryDay[];
    isPopular?: boolean;
}

export const tourPackages: TourPackage[] = [
    {
        id: "pkg-1",
        title: "Standard Sundarban Tour",
        slug: "standard-sundarban-tour-3d-2n",
        duration: "3 Days / 2 Nights",
        basePrice: 5999,
        discountedPrice: 4999,
        image: "https://images.unsplash.com/photo-1544490809-b68a8677aebb?q=80&w=2070&auto=format&fit=crop",
        shortDescription: "Our most popular package offering a comprehensive tour of the mangrove forest, watchtowers, and local islands.",
        isPopular: true,
        inclusions: [
            "Pickup and drop-from Kolkata",
            "Non-AC Accommodation",
            "All meals (Breakfast, Lunch, Dinner, Evening Snacks)",
            "Dedicated local guide",
            "Boat Safari charges"
        ],
        exclusions: [
            "Personal expenses",
            "Camera fees",
            "Alcoholic beverages"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival & Gosaba Island",
                activities: [
                    "Departure from Kolkata early morning.",
                    "Board the boat at Godhkhali.",
                    "Visit Gosaba Island (Hamilton Bungalow & Beacon Bungalow).",
                    "Evening cultural program and dinner."
                ]
            },
            {
                day: 2,
                title: "Deep Forest Safari",
                activities: [
                    "Early morning boat safari into the dense forest.",
                    "Visit Sajnekhali Watchtower and Museum.",
                    "Explore Sudhanyakhali Watchtower (high probability of tiger sighting).",
                    "Navigate through narrow creeks and canals."
                ]
            },
            {
                day: 3,
                title: "Village Walk & Departure",
                activities: [
                    "Morning village walk to understand local life.",
                    "Visit local handicraft centers.",
                    "Lunch on the boat while returning to Godhkhali.",
                    "Transfer back to Kolkata."
                ]
            }
        ]
    },
    {
        id: "pkg-2",
        title: "Sundarban 1 Day Trip",
        slug: "sundarban-1-day-trip",
        duration: "1 Day",
        basePrice: 2499,
        discountedPrice: 1999,
        image: "https://images.unsplash.com/photo-1582695507963-4ee9143ddec5?q=80&w=2070&auto=format&fit=crop",
        shortDescription: "Short on time? Experience the essence of Sundarbans with this packed one-day excursion.",
        inclusions: [
            "Transport from Canning Station",
            "Breakfast and Lunch",
            "Boat Safari",
            "Guide charges"
        ],
        exclusions: [
            "Accommodation",
            "Personal expenses"
        ],
        itinerary: [
            {
                day: 1,
                title: "Express Safari",
                activities: [
                    "8:30 AM: Arrival at Godhkhali.",
                    "9:00 AM: Start boat safari. Visit Sajnekhali.",
                    "1:00 PM: Lunch on boat.",
                    "3:00 PM: Sudhanyakhali Watchtower visit.",
                    "5:00 PM: Return to Godhkhali and depart for home."
                ]
            }
        ]
    },
    {
        id: "pkg-3",
        title: "Premium luxury Tour",
        slug: "premium-sundarban-tour-3d-2n",
        duration: "3 Days / 2 Nights",
        basePrice: 8999,
        discountedPrice: 7499,
        image: "https://images.unsplash.com/photo-1621646039564-9f89fe20dfb9?q=80&w=2070&auto=format&fit=crop",
        shortDescription: "Experience the wild in absolute comfort. AC transports, premium resorts, and exclusive boat cabins.",
        inclusions: [
            "AC Transport from Kolkata",
            "Premium AC Resort Accommodation",
            "Deluxe menu including premium local seafood",
            "Exclusive private boat (AC cabin optional)",
            "Expert Naturalist Guide"
        ],
        exclusions: [
            "Camera/Video fees",
            "Tips and gratuities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Luxury Arrival",
                activities: [
                    "AC vehicle pick up from Kolkata.",
                    "Welcome drink upon luxury boat boarding.",
                    "Check-in to premium eco-resort.",
                    "Evening private wildlife documentary screening."
                ]
            },
            {
                day: 2,
                title: "Exclusive Safari",
                activities: [
                    "Full day forest cruise with expert naturalist.",
                    "Gourmet lunch spread on the boat.",
                    "Visit multiple watchtowers with specialized spotting equipment.",
                ]
            },
            {
                day: 3,
                title: "Leisure & Departure",
                activities: [
                    "Late morning checkout.",
                    "Short leisure cruise through creeks.",
                    "Drop off at Kolkata via AC vehicle."
                ]
            }
        ]
    },
    {
        id: "pkg-4",
        title: "Wild Classroom Trip",
        slug: "sundarban-wild-classroom-trip",
        duration: "2 Days / 1 Night",
        basePrice: 3999,
        discountedPrice: 3499,
        image: "https://images.unsplash.com/photo-1542640244-7e672d6cb466?q=80&w=2070&auto=format&fit=crop",
        shortDescription: "An educational journey designed for students and nature enthusiasts focusing on ecosystem conservation.",
        inclusions: [
            "Educational materials",
            "Forest Department expert session",
            "Basic accommodation",
            "All meals"
        ],
        exclusions: [
            "Personal expenses"
        ],
        itinerary: [
            {
                day: 1,
                title: "Introduction to Mangroves",
                activities: [
                    "Arrival and basic briefing.",
                    "Session on Mangrove root systems and adaptation.",
                    "Evening presentation on Tiger conservation."
                ]
            },
            {
                day: 2,
                title: "Field Study",
                activities: [
                    "Practical demonstration of diverse flora at watchtowers.",
                    "Bird watching session.",
                    "Return journey."
                ]
            }
        ]
    },
    {
        id: "pkg-5",
        title: "Women Only Tour",
        slug: "women-only-sundarban-tour",
        duration: "3 Days / 2 Nights",
        basePrice: 6499,
        discountedPrice: 5499,
        image: "https://images.unsplash.com/photo-1534062143496-e1e35e985869?q=80&w=2070&auto=format&fit=crop",
        shortDescription: "A safe, empowering, and culturally immersive experience exclusively for women travelers, led by female guides.",
        inclusions: [
            "Female guide and female resort staff where possible",
            "Secure accommodation",
            "Cultural interaction with local women's cooperatives",
            "All meals and transport"
        ],
        exclusions: [
            "Personal shopping expenses"
        ],
        itinerary: [
            {
                day: 1,
                title: "Safe Arrival & Culture",
                activities: [
                    "Group pick up from specific safe points in Kolkata.",
                    "Boat journey to resort.",
                    "Evening interaction with local village women artisans."
                ]
            },
            {
                day: 2,
                title: "Wildlife & Empowerment",
                activities: [
                    "Forest safari led by expert female guides.",
                    "Watchtower visits.",
                    "Discussion on the role of women in forest conservation."
                ]
            },
            {
                day: 3,
                title: "Crafts & Return",
                activities: [
                    "Visit to honey collection and craft centers run by local women.",
                    "Safe transfer back to Kolkata."
                ]
            }
        ]
    },
    {
        id: "pkg-6",
        title: "Photography Expedition",
        slug: "sundarban-photography-tour",
        duration: "4 Days / 3 Nights",
        basePrice: 12999,
        discountedPrice: 10999,
        image: "https://images.unsplash.com/photo-1549608276-5786777e6587?q=80&w=2070&auto=format&fit=crop",
        shortDescription: "Optimized for photographers. We chase the light, wait at prime locations, and provide custom boats.",
        inclusions: [
            "Permits for professional cameras",
            "Custom boat with varied angles",
            "Extended hours in the forest",
            "Accommodation and meals"
        ],
        exclusions: [
            "Drone permits (must be arranged separately)"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival & Setup",
                activities: [
                    "Arrival and gear setup.",
                    "Evening golden hour shoot near the village."
                ]
            },
            {
                day: 2,
                title: "The Deep Creeks",
                activities: [
                    "Pre-dawn departure for misty morning shots.",
                    "Focus on bird photography (Kingfishers, Eagles).",
                    "Sunset silhouettes at Dobanki."
                ]
            },
            {
                day: 3,
                title: "Tiger Tracking",
                activities: [
                    "Full day dedicated to tracking apex predators based on pugmarks.",
                    "Extended waits at core area watchtowers."
                ]
            },
            {
                day: 4,
                title: "Final Review & Departure",
                activities: [
                    "Morning shoot.",
                    "Review session of shots taken on the boat.",
                    "Departure."
                ]
            }
        ]
    }
];

export function getPackageBySlug(slug: string): TourPackage | undefined {
    return tourPackages.find(pkg => pkg.slug === slug);
}
