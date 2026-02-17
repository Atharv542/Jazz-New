import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Play } from 'lucide-react';

interface Testimonial {
  type: 'text' | 'video';
  name: string;
  title: string;
  image: string;
  rating: number;
  text?: string;
  result: string;
  videoUrl?: string;
  videoCover?: string;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonials: Testimonial[] = [
    {
      type: 'text',
      name: 'Polina Hohonova',
      title: 'Business Executive',
      image: 'https://res.cloudinary.com/dczt652u9/image/upload/v1771304951/nopp_uvr68h.jpg',
      rating: 5,
      text: 'Working with Jazz has been a truly transformative experience. His positive energy and genuine presence created a safe, welcoming space where I felt completely supported. Jazz has an incredible ability to listen deeply, helping me uncover blind spots I had not even realized were there. What stood out most was his flexibility in tuning into my personality and views on life. This made me feel completely like myself while also empowering me to shift perspectives and make meaningful changes to improve my life. I am so grateful for the growth I have achieved with Jazz\'s help—he\'s truly exceptional at what he does.',
      result: 'Helped in making meaningful changes to improve life'
    },
    {
      type: 'text',
      name: 'Tina Allen',
      title: 'Entrepreneur',
      image: 'https://res.cloudinary.com/dczt652u9/image/upload/v1771304951/nopp_uvr68h.jpg',
      rating: 5,
      text: 'Jazz has a truly unique way of pointing you in the right direction—not by telling you what to do, but by gently guiding you toward your own clarity. His perspective is refreshing and often exactly what I need to shift how I see a situation. Through his thoughtful encouragement and intuitive insight, I\'ve discovered my niche and gained a deeper understanding of myself. Jazz does not just coach—he creates space for transformation. I\'m so grateful for his presence and the way he leads with both wisdom and heart.',
      result: 'Helped in understanding self and finding niche'
    },
    {
      type: 'video',
      name: 'Gina Potter',
      title: 'Business Owner, Writer, Health Advocate',
      image: 'https://res.cloudinary.com/dczt652u9/image/upload/v1771304873/Video-1_odaie9.jpg',
      rating: 5,
      videoCover: 'https://res.cloudinary.com/dczt652u9/image/upload/v1771304873/Video-1_odaie9.jpg',
      videoUrl: 'https://res.cloudinary.com/dczt652u9/video/upload/v1771270557/testi1_bkhyjm.mp4',
      result: 'Helped in resolving personal issues'
    },
    {

      type: 'video',
      name: 'Keke Elenga',
      title: '15+ years Professional Basketball Player',
      image: 'https://res.cloudinary.com/dczt652u9/image/upload/v1771304874/Video-2_emehkh.jpg',
      rating: 5,
      videoCover: 'https://res.cloudinary.com/dczt652u9/image/upload/v1771304874/Video-2_emehkh.jpg',
      videoUrl: 'https://res.cloudinary.com/dczt652u9/video/upload/v1771270545/testi4_m9gcwb.mp4',
      result: 'Helped in making champion comeback after recovering from big injury'
    },
     {

      type: 'video',
      name: 'Sandy Florea',
      title: 'Policy Advisor at the European Parliament',
      image: 'https://res.cloudinary.com/dczt652u9/image/upload/v1771304894/Video-3_widt8u.jpg',
      rating: 5,
      videoCover: 'https://res.cloudinary.com/dczt652u9/image/upload/v1771304894/Video-3_widt8u.jpg',
      videoUrl: 'https://res.cloudinary.com/dczt652u9/video/upload/v1771270543/testi2_zdlpia.mp4',
      result: 'Helped in developing essential skills to perform in high-pressure situations.'
    },
     {
      type: 'text',
      name: 'Cory Martin',
      title: '',
      image: 'https://res.cloudinary.com/dczt652u9/image/upload/v1771304898/Cory_rgxwdd.jpg',
      rating: 5,
      text: 'My wife and I are grateful for the incredible work Jazz is doing with our teenage athletes. Jazz’s commitment to helping young athletes strengthen their mentality and develop a clear understanding of what it takes to succeed is truly life-changing. Through mentorship and guidance, Jazz is elevating values such as discipline, perseverance, and resilience—qualities that are essential for those aspiring to play at the collegiate level. By focusing not only on physical skills but also on mental preparation, Jazz is equipping our athletes with the tools they need to thrive both on and off the field/court. This type of leadership and dedication from Jazz is making a lasting impact on our kids and we are grateful! ',
      result: 'The type of leadership and dedication helped in making a lasting impact on  kids and we are grateful! '
    },
      {
      type: 'text',
      name: 'Samantha Armstrong',
      title: '',
      image: 'https://res.cloudinary.com/dczt652u9/image/upload/v1771304874/Samantha_jtvv7b.jpg',
      rating: 5,
      text: 'My 14-year-old son started working with Jazz 6 months ago, and the impact has been significant. His mentorship has really shown how much of a role mindset plays in building confidence, establishing good habits, and, ultimately, achieving better results on court. It can be hard for parents to know the right things to say or how best to support their child through the highs and lows of a sport they love. As a professional athlete and performance coach, Jazz is able to create an instant connection and be a real inspiration to teens. ',
      result: 'Helped in building confidence, establishing good habits, and, ultimately, achieving better results on court. '
    },
     {

      type: 'video',
      name: 'Amy Martin',
      title: 'Parent of two teenage athletes',
      image: 'https://res.cloudinary.com/dczt652u9/image/upload/v1771304853/Amy_onjp0e.jpg',
      rating: 5,
      videoCover: 'https://res.cloudinary.com/dczt652u9/image/upload/v1771304853/Amy_onjp0e.jpg',
      videoUrl: 'https://res.cloudinary.com/dczt652u9/video/upload/v1771270549/testi5_okms0x.mp4',
      result: 'Helped in making huge positive impact and changes in young teenage athletes.'
    },
  ];

  const nextTestimonial = () => {
    setIsPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsPlaying(false);
    setCurrentIndex(index);
  };

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 border-t border-amber-200 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Client
            <span className="block leading-[1.5] text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-yellow-700">
              Victory Stories
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real champions, real results. These victory stories represent the mental toughness, dedication,
            and champion mindset that my clients developed to achieve extraordinary success.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {currentTestimonial.type === 'text' ? (
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 md:p-12 shadow-lg border border-amber-200 min-h-[400px] flex flex-col justify-center">
              <Quote className="w-12 h-12 text-amber-300 mb-6" />

              <div className="space-y-6">
                <p className="text-md md:text-xl text-gray-700 leading-relaxed font-medium">
                  {currentTestimonial.text}
                </p>

                <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg p-2 md:p-4 border-l-4 border-amber-500">
                  <p className="text-[12px] font-semibold text-amber-800 mb-1">Victory Achieved:</p>
                  <p className="text-[12px] text-gray-700">{currentTestimonial.result}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-amber-300"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-gray-600">{currentTestimonial.title}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex md:items-center md:space-x-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 md:p-12 shadow-lg border border-amber-200 min-h-[550px] flex flex-col justify-center">
              <div className="flex flex-col md:flex-row gap-8 items-center h-full">
                <div className="w-full md:w-1/2 h-80 md:h-96">
                  {!isPlaying ? (
                    <div className="relative group cursor-pointer w-full h-full" onClick={handlePlayVideo}>
                      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800">
                        <img
                          src={currentTestimonial.videoCover}
                          alt={`${currentTestimonial.name} testimonial`}
                          className="w-full h-full object-fit"
                        />
                        <div className="absolute inset-0 bg-transparent bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                          <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                            <Play className="w-10 h-10 text-white fill-current ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800">
                      <video
                        src={currentTestimonial.videoUrl}
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                        onEnded={() => setIsPlaying(false)}
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                </div>

                <div className="w-full md:w-1/2 space-y-4">
                  <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg p-3 md:p-4 border-l-4 border-amber-500">
                    <p className="text-xs font-semibold text-amber-800 mb-1">Victory Achieved:</p>
                    <p className="text-sm text-gray-700">{currentTestimonial.result}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-amber-300"
                    />
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">{currentTestimonial.title}</p>
                    </div>

                    <div className="flex items-center space-x-1">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={prevTestimonial}
            className="absolute cursor-pointer -left-4 md:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-amber-300 flex items-center justify-center hover:bg-amber-50 transition-colors duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-amber-700" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute cursor-pointer -right-4 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-amber-300 flex items-center justify-center hover:bg-amber-50 transition-colors duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6 text-amber-700" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-amber-600 w-8'
                  : 'bg-amber-200 hover:bg-amber-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">40+</div>
            <div className="text-sm text-gray-600">Champions Created</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">4.9/5</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">98%</div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">15 Years</div>
            <div className="text-sm text-gray-600">Pro Basketball</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
