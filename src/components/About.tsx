import { Award, Heart, Users } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to Pioneer Restaurant
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Classic diner interior"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Pioneer Restaurant is a beloved Arlington institution serving wholesome breakfast and classic American comfort dishes since 1982. Locals and visitors alike come here for hearty portions, friendly service, and a welcoming atmosphere — it feels just like home.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              For over four decades, we've been proud to serve our community with the kind of honest, delicious food that brings families together. Whether you're starting your day with our famous breakfast or enjoying one of our rotating daily specials, you'll always find something made with care.
            </p>

            <p className="text-lg font-semibold text-red-600">
              A community favorite spot with a loyal following
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Since 1982</h3>
            <p className="text-gray-600">
              Over 40 years of serving Arlington's best comfort food
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Made with Love</h3>
            <p className="text-gray-600">
              Every dish prepared fresh with quality ingredients
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Family Friendly</h3>
            <p className="text-gray-600">
              A warm, welcoming atmosphere for all generations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
