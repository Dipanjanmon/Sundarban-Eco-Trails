export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    image: string;
    category: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "5 Reasons Why Winter is the Best Time to Visit the Sundarbans",
        excerpt: "From misty mornings perfect for photography to the highest chances of spotting the elusive Royal Bengal Tiger basking in the sun on the muddy banks.",
        content: `Winter in the Sundarbans is entirely different from the sweltering heat of the monsoon. The crisp air clears away the humidity, revealing the vivid greens of the mangrove canopy against a bright blue sky.

Firstly, wildlife spotting peaks during these months. As temperatures drop, cold-blooded reptiles like saltwater crocodiles can be frequently seen sunbathing on the muddy riverbanks. The elusive Royal Bengal Tiger, famously stealthy in the dense foliage, is also more likely to be spotted seeking warmth along the creeks.

Secondly, the weather is perfect for full-day boat safaris. With an average temperature lingering around a pleasant 20°C (68°F), you can comfortably sit on the open deck for hours without the exhaustion of the summer heat.

Lastly, the migratory birds arrive. The mudflats become a vibrant feeding ground for flocks of rare avian species, making it an absolute paradise for bird watchers and photographers alike. Booking your trip between November and February guarantees the most comfortable and visually stunning experience the delta has to offer.`,
        date: "Dec 12, 2025",
        author: "Arunava Chatterjee",
        image: "/imagegaller/andibreit-tiger-2535888_1280.jpg",
        category: "Travel Guide"
    },
    {
        id: 2,
        title: "Understanding the Mangrove Ecosystem",
        excerpt: "The Sundarbans is not just a forest; it's a dynamic, breathing barrier that protects the mainland from cyclones. Learn how these unique trees survive in saltwater.",
        content: `The Sundarbans, a UNESCO World Heritage site, is the largest contiguous mangrove forest in the world. But what exactly makes a mangrove ecosystem so special?

Mangroves are unique trees that have adapted to live in harsh coastal conditions where most plants would die. They thrive in saltwater and muddy soils lacking oxygen. To survive, species like the 'Sundari' (from which the forest gets its name) have developed pneumatophores—specialized root structures that stick up out of the mud like snorkels to absorb oxygen directly from the air.

Beyond their biological marvels, mangroves are the ultimate natural defenders. Their dense root systems act as a buffer zone, dissipating the phenomenal energy of storm surges and tidal waves caused by cyclones that frequently brew in the Bay of Bengal, protecting millions of people living inland.

Furthermore, these roots filter pollutants from the water and provide a safe nursery for myriad species of fish and crustaceans, cementing the Sundarbans as one of India's most ecologically vital habitats.`,
        date: "Nov 28, 2025",
        author: "Dr. Sen",
        image: "/imagegaller/mamun-srizon-qay3lNDSHzc-unsplash.jpg",
        category: "Conservation"
    },
    {
        id: 3,
        title: "A Photographer's Guide to the Sundarbans",
        excerpt: "What lenses to pack, how to handle the humidity, and the best watchtowers for capturing endemic bird species and crocodiles.",
        content: `Photographing the Sundarbans is both immensely rewarding and incredibly challenging. The dense foliage, shifting light on the water, and sheer unpredictability of wildlife require preparation.

**Gear Recommendations:**
A telephoto lens is non-negotiable. Wildlife will almost always be spotted from the boat across a river channel. A 400mm or 600mm lens is ideal for capturing the detail of a Kingfisher hovering over the water or a tiger resting in the distant shadows. Also, carry a wide-angle lens to capture the vast, winding network of the river delta and stunning sunsets.

**Handling the Environment:**
The humidity here, especially outside the winter months, can wreak havoc on camera sensors and lenses. Keep your gear in dry bags with silica gel packets when not in use. Be incredibly careful when moving around the boat deck to avoid accidental bumps against the railings.

**Best Watchtowers:**
Sajnekhali and Sudhanyakhali watchtowers offer panoramic views and are overlooking fresh water ponds that attract animals. Early mornings are best for lighting and activity. Patience is your greatest tool; the forest rewards those who wait quietly.`,
        date: "Oct 15, 2025",
        author: "Priya Sharma",
        image: "/imagegaller/ashique-anan-abir-saEnr4oJ950-unsplash.jpg",
        category: "Photography"
    },
    {
        id: 4,
        title: "The Legend of Bonbibi: Guardian of the Forest",
        excerpt: "Before entering the deep forest, honey collectors and fishermen pray to Bonbibi. Discover the fascinating folklore that unites communities across the delta.",
        content: `Life in the Sundarbans is profoundly intertwined with the ever-present danger of the wilderness. To cope with this reality, the inhabitants—regardless of their religion—share a deep-rooted faith in Bonbibi, the 'Lady of the Forest'.

The legend of Bonbibi tells the story of a divine young woman sent by the almighty to protect the pure of heart from Dakshin Rai, an ancient shape-shifting demon who often takes the form of the Royal Bengal Tiger. 

Before the local Moualis (honey collectors) and Baules (woodcutters) venture into the dense, tiger-inhabited core areas, they perform rituals and tie small pennants at shrines dedicated to Bonbibi situated on the edges of the forest. They believe that as long as they enter the forest with respect, take only what they need, and carry no greed in their hearts, Bonbibi will shield them from Dakshin Rai's wrath.

This beautiful syncretic tradition highlights the delicate balance and respect the local communities maintain with nature, recognizing the forest as a provider that must be revered rather than conquered.`,
        date: "Sep 02, 2025",
        author: "Local Voice",
        image: "/imagegaller/sohan-rahat-CvZ2MQu5_wY-unsplash.jpg",
        category: "Culture"
    }
];

// Helper to fetch a specific blog post
export function getBlogById(id: number | string): BlogPost | undefined {
    return blogPosts.find(post => post.id.toString() === id.toString());
}
