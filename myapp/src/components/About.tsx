import React from 'react';
import { GraduationCap, Award, Heart, Users, BookOpen, Coffee } from 'lucide-react';

const About = () => {
  const credentials = [
    { icon: Award, title: '15 Years Pro Basketball', description: 'NBA & International Leagues' },
    { icon: GraduationCap, title: 'Jay Shetty Certified Coach', description: 'International Coaching Federation' },
    { icon: BookOpen, title: '3yrs Psychology', description: 'Indiana University South East' },
    { icon: Users, title: '50,000+ Engaged Globally', description: 'Across Italy, France, and other parts of the world' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Mental Strength',
      description: 'I help you develop the same mental resilience that champions use to overcome any obstacle.'
    },
    {
      icon: Users,
      title: 'Winning Strategies',
      description: 'Success in life, like in sports, requires proven strategies, discipline, and consistent execution.'
    },
    {
      icon: Coffee,
      title: 'Team Mindset',
      description: 'Great achievements happen when we work together. I am your teammate in creating the life you want.'
    }
  ];

  return (
    <section id="about" className="py-20  bg-gradient-to-br from-stone-50/50 via-amber-50/30 to-yellow-50/40 border-t-1 border-amber-200 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Meet
                <span className="block leading-[1.5] text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-yellow-700">
                 Jazz Ferguson
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I’m a 15 year professional basketball player, currently competing at the international level with experience in Italy, France, and Australia with strong ties to NBA players through training and relationships. My career has been built on discipline, confidence, and resilience the same principles I now share as a certified life coach and mentor. My company Reps With Jazz, helps individuals strengthen their mindset, build unshakable confidence, and reach ambitious goals.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My coaching blends the lessons of an elite leader with proven strategies for personal growth, empowering both professionals and young individuals alike. For aspiring individuals, my Elite Mentorship develops pro-level habits and mindsets through consistency, accountability, and repetition - the same formula that has defined my career.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((credential, index) => (
                <div
                  key={credential.title}
                  className="bg-stone-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <credential.icon className="w-8 h-8 text-amber-700 mb-2" />
                  <h4 className="font-semibold text-gray-900 text-sm">{credential.title}</h4>
                  <p className="text-xs text-gray-600">{credential.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dczt652u9/image/upload/v1771304460/AboutJazz_kqoauq.jpg"
                alt="Jazz Ferguson - Former Professional Basketball Player"
                className="w-full h-96 md:h-[500px] md:mt-2 object-cover rounded-2xl shadow-2xl hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>

        {/* My Values */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">My Coaching Values</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These champion principles guide my coaching and will help you develop the mindset needed for extraordinary success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-amber-700" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Touch */}
        <div className="mt-16 bg-stone-100 rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">A Little More About Me</h3>
            <p className="text-gray-600 leading-relaxed md:max-w-3xl mx-auto">
              When I’m not coaching, the same focus, consistency, discipline, and self-accountability that fueled my career as a pro athlete continue to drive me. My approach to preparation keeps me aligned with my core values, whether I’m training in the gym, getting reps on the court, or guiding others in their personal growth. I’ve learned that success is built in the quiet moments of repetition and discipline. That’s why I bring the same intensity and passion to creating safe spaces for lifestyle development as I do to my own training. Every rep, on and off the court - is a step toward building the champion mindset.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;