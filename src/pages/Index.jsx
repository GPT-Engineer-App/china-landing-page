import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="relative h-[60vh] flex items-center justify-center text-white">
        <img src="/placeholder.svg" alt="Great Wall of China" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Discover China</h1>
          <p className="text-2xl">A Journey Through the Middle Kingdom</p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Welcome to China</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            China, with its rich tapestry of history spanning over 5,000 years, is a land of captivating contrasts. From ancient wonders to modern marvels, traditional customs to cutting-edge innovations, China offers a unique blend of the old and the new. Embark on a journey through this vast and diverse country, where every step reveals a new facet of its cultural, historical, and natural wonders.
          </p>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index}>
                <CardHeader>
                  <img src="/placeholder.svg" alt={highlight.title} className="w-full h-48 object-cover mb-4 rounded-t-lg" />
                  <CardTitle>{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Insights Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Cultural Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Chinese culture is one of the world's oldest and most complex. The concept of harmony is central to Chinese philosophy and is reflected in various aspects of daily life, from traditional medicine to feng shui.
              </p>
              <p className="text-lg mb-4">
                Family plays a crucial role in Chinese society, with respect for elders and ancestors being a cornerstone of social values. This is evident in traditions like the annual Qingming Festival, where families honor their ancestors.
              </p>
              <p className="text-lg">
                Chinese art forms, such as calligraphy, painting, and poetry, have evolved over thousands of years and continue to be practiced and admired today. These art forms often blend aesthetics with philosophy, creating works that are both beautiful and deeply meaningful.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/placeholder.svg" alt="Chinese Calligraphy" className="w-full h-48 object-cover rounded-lg" />
              <img src="/placeholder.svg" alt="Traditional Chinese Painting" className="w-full h-48 object-cover rounded-lg" />
              <img src="/placeholder.svg" alt="Chinese Tea Ceremony" className="w-full h-48 object-cover rounded-lg" />
              <img src="/placeholder.svg" alt="Chinese Opera" className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <nav className="mb-4">
            <ul className="flex justify-center space-x-6">
              <li><a href="#" className="hover:text-gray-300">Learn More</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Plan Your Trip</a></li>
            </ul>
          </nav>
          <p>&copy; 2024 Discover China. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const highlights = [
  {
    title: "The Great Wall of China",
    description: "One of the world's most iconic landmarks, stretching over 13,000 miles across China's northern borders."
  },
  {
    title: "The Forbidden City",
    description: "The imperial palace complex in Beijing, home to Chinese emperors for nearly 500 years."
  },
  {
    title: "Terracotta Army",
    description: "Thousands of life-sized clay soldiers guarding the tomb of China's first emperor, Qin Shi Huang."
  },
  {
    title: "Chinese Cuisine",
    description: "A diverse culinary tradition with regional specialties, from Sichuan spice to Cantonese dim sum."
  },
  {
    title: "Traditional Festivals",
    description: "Colorful celebrations like Chinese New Year and the Mid-Autumn Festival, rich in tradition and symbolism."
  },
  {
    title: "Modern Cities",
    description: "Bustling metropolises like Shanghai and Beijing, showcasing China's rapid modernization and economic growth."
  }
];

export default Index;