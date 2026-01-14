import { Facebook, MapPin, Phone, Clock, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-amber-400">Pioneer Restaurant</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Serving Arlington's best comfort food and breakfast classics since 1982. A family tradition for over 40 years.
            </p>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Facebook className="w-6 h-6" />
              <span>Follow us on Facebook</span>
            </a>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">Quick Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">
                    306 109th Street<br />
                    Arlington, TX 76011
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href="tel:8176334433" className="text-gray-300 hover:text-white transition-colors">
                  (817) 633-4433
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <p>Mon-Sat: 6:00 AM – 2:00 PM</p>
                  <p>Sun: 7:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">What We Offer</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Breakfast All Day
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Daily Lunch Specials
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Classic American Comfort Food
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Family-Friendly Dining
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Takeout Available
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Pioneer Restaurant. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 fill-red-500 text-red-500" />
              <span>in Arlington, Texas</span>
            </div>
          </div>
          <p className="text-gray-500 text-xs text-center mt-4">
            Prices may vary. Please call ahead for current pricing and availability.
          </p>
        </div>
      </div>
    </footer>
  );
}
