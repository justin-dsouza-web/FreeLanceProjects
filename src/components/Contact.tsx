import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const hours = [
  { days: 'Monday - Saturday', time: '6:00 AM – 2:00 PM' },
  { days: 'Sunday', time: '7:00 AM – 2:00 PM' },
];

export default function Contact() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit Us Today
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600">
            We're ready to serve you with a smile
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-xl p-8 border-l-4 border-red-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    306 109th Street<br />
                    Arlington, TX 76011
                  </p>
                  <a
                    href="https://maps.google.com/?q=306+109th+Street,+Arlington,+TX+76011"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-red-600 font-semibold hover:text-red-700 transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 border-l-4 border-amber-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                  <a
                    href="tel:8176334433"
                    className="text-gray-700 text-2xl font-semibold hover:text-red-600 transition-colors"
                  >
                    (817) 633-4433
                  </a>
                  <p className="text-gray-600 mt-2">
                    Call ahead for takeout orders
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Hours of Operation</h3>
                  <div className="space-y-3">
                    {hours.map((schedule) => (
                      <div key={schedule.days} className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{schedule.days}</span>
                        <span className="text-gray-900 font-semibold">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-red-600 font-semibold mt-4 text-sm">
                    Breakfast Served All Day
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-amber-600 rounded-xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Experience Great Food?</h3>
              <p className="text-white/90 mb-6">
                Stop by for breakfast, lunch, or our famous daily specials. We're looking forward to serving you!
              </p>
              <a
                href="tel:8176334433"
                className="inline-block px-8 py-4 bg-white text-red-600 text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Call to Order Now
              </a>
            </div>
          </div>

          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="aspect-[4/3] bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.8961234567!2d-97.1234567!3d32.7654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDQ1JzU1LjYiTiA5N8KwMDcnMjQuNCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pioneer Restaurant Location"
                ></iframe>
              </div>
              <div className="p-6 bg-gray-50">
                <p className="text-sm text-gray-600 text-center">
                  Located in the heart of Arlington, easy to find and plenty of parking available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
