import { Coffee, Award, Smile, Users, DollarSign, Clock } from 'lucide-react';

const benefits = [
  {
    icon: Coffee,
    title: 'Breakfast Served All Day',
    description: 'Craving pancakes at noon? We got you covered. Enjoy breakfast favorites any time we\'re open.',
  },
  {
    icon: Award,
    title: 'Authentic Diner Classics',
    description: 'Time-tested recipes and home-style cooking that reminds you of comfort and tradition.',
  },
  {
    icon: Smile,
    title: 'Friendly, Fast Service',
    description: 'Our staff treats you like family. Quick service with a smile, every single time.',
  },
  {
    icon: Users,
    title: 'Family-Friendly Atmosphere',
    description: 'A warm, welcoming environment perfect for families, friends, and solo diners alike.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Comfort Food',
    description: 'Generous portions at prices that won\'t break the bank. Great value for great food.',
  },
  {
    icon: Clock,
    title: 'Open 7 Days a Week',
    description: 'Mon-Sat from 6am and Sundays from 7am. We\'re here when you need a great meal.',
  },
];

export default function WhyLoveUs() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why People Love Pioneer Restaurant
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover what makes us Arlington's favorite diner for over 40 years
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-all transform hover:scale-105 hover:shadow-2xl border border-gray-700"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-amber-600 rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-600 to-amber-600 rounded-2xl p-12 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Experience the Pioneer Difference
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Join the thousands of satisfied customers who make us part of their routine
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8176334433"
                className="px-8 py-4 bg-white text-red-600 text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Call (817) 633-4433
              </a>
              <a
                href="https://maps.google.com/?q=306+109th+Street,+Arlington,+TX+76011"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-900 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition-all transform hover:scale-105"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
