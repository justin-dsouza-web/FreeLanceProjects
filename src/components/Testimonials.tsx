import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    text: "Great service. Great food. Like an old family diner — 10/10.",
    author: "Michael R.",
    rating: 5,
  },
  {
    text: "Fantastic breakfast and friendly staff! The pancakes are the best I've ever had.",
    author: "Sarah T.",
    rating: 5,
  },
  {
    text: "Been coming here for over 20 years. Consistently delicious food and warm atmosphere.",
    author: "David L.",
    rating: 5,
  },
  {
    text: "The daily specials are amazing! Never disappointed. A true Arlington gem.",
    author: "Jennifer M.",
    rating: 5,
  },
  {
    text: "Best chicken fried steak in Texas! Generous portions and great prices.",
    author: "Robert K.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Guests Say
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">4.4/5</span>
          </div>
          <p className="text-gray-600">Based on hundreds of satisfied customers</p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <Quote className="w-16 h-16 text-amber-200 absolute top-6 left-6" />

          <div className="relative z-10 text-center pt-8">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <p className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed min-h-[120px] flex items-center justify-center">
              "{testimonials[currentIndex].text}"
            </p>

            <p className="text-lg font-semibold text-gray-900">
              — {testimonials[currentIndex].author}
            </p>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white transition-all flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-red-600 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white transition-all flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Join hundreds of happy customers</p>
          <a
            href="tel:8176334433"
            className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            Visit Us Today
          </a>
        </div>
      </div>
    </section>
  );
}
