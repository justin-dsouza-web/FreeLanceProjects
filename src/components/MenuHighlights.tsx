import { Coffee, Calendar, UtensilsCrossed } from 'lucide-react';

const dailySpecials = [
  { day: 'Monday', special: 'Chicken & Dumplins', image: 'https://images.pexels.com/photos/8477586/pexels-photo-8477586.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { day: 'Tuesday', special: 'Spaghetti & Meatballs', image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { day: 'Wednesday', special: 'Turkey & Dressing', image: 'https://images.pexels.com/photos/3662118/pexels-photo-3662118.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { day: 'Thursday', special: 'Pot Roast', image: 'https://images.pexels.com/photos/6646297/pexels-photo-6646297.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { day: 'Friday', special: 'Roasted Chicken', image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const menuCategories = [
  {
    title: 'Breakfast Favorites',
    description: 'Served All Day, Every Day',
    icon: Coffee,
    items: ['Fluffy Pancakes & Waffles', 'Custom Omelets', 'French Toast', 'Biscuits & Gravy'],
    image: 'https://images.pexels.com/photos/101533/pexels-photo-101533.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Classic Comfort Dishes',
    description: 'Home-Style Favorites',
    icon: UtensilsCrossed,
    items: ['Chicken Fried Steak', 'Pioneer Special', 'Sausage & Eggs', 'Country Ham'],
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function MenuHighlights() {
  const today = new Date().getDay();
  const todaySpecial = dailySpecials[today === 0 ? 4 : today - 1];

  return (
    <section id="menu-highlights" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Menu Highlights
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300">
            Fresh, hearty meals made just the way you like them
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {menuCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.title} className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                      <p className="text-amber-400 text-sm">{category.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-300">
                        <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 shadow-2xl mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-10 h-10 text-white" />
            <h3 className="text-3xl font-bold">Daily Specials Calendar</h3>
          </div>
          <p className="text-lg mb-8 text-red-100">
            Every weekday brings a new classic comfort dish
          </p>

          {todaySpecial && (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border-2 border-amber-400">
              <p className="text-amber-400 font-semibold text-sm mb-2">TODAY'S SPECIAL</p>
              <p className="text-3xl font-bold">{todaySpecial.special}</p>
            </div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {dailySpecials.map((item) => (
              <div
                key={item.day}
                className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition-all"
              >
                <img
                  src={item.image}
                  alt={item.special}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <p className="font-semibold text-amber-400 text-sm mb-1">{item.day}</p>
                  <p className="text-white font-medium">{item.special}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-400 text-sm mb-4">
            All specials come with your choice of sides and fresh-baked rolls
          </p>
          <a
            href="tel:8176334433"
            className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white text-lg font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            Call to Order: (817) 633-4433
          </a>
        </div>
      </div>
    </section>
  );
}
