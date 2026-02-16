import React, { useState } from 'react';

import { 
  Users, 
  Building2, 
  GraduationCap, 
  Mic, 
  ArrowRight,
  CheckCircle,
  Star,
  Quote,
  Calendar,
  Clock,
  Sparkles,
  Target,
  Award,
  TrendingUp
} from 'lucide-react';

const MotivationalSpeaking = () => {
  const [activeTab, setActiveTab] = useState('schools');
  const [hoveredCard, setHoveredCard] = useState(null);

  const speakingServices = {
    schools: {
      icon: GraduationCap,
      title: 'School Presentations',
      description: 'Inspiring young minds to embrace discipline, build confidence, and pursue their dreams with champion mentality.',
      topics: [
        'Building Unshakeable Confidence',
        'The Power of Discipline and Consistency',
        'Overcoming Adversity and Setbacks',
        'Goal Setting and Achievement',
        'Leadership and Teamwork',
        'Mental Toughness in Academics and Sports'
      ],
      audiences: ['Elementary Schools', 'Middle Schools', 'High Schools', 'Student Athletes', 'Athletic Programs'],
      color: 'amber',
      accent: 'yellow'
    },
    corporate: {
      icon: Building2,
      title: 'Corporate Events',
      description: 'Bringing champion mindset principles to the workplace for enhanced performance, leadership, and team dynamics.',
      topics: [
        'Leadership Under Pressure',
        'Team Performance and Collaboration',
        'Resilience in Business Challenges',
        'Goal Achievement Strategies',
        'Mental Toughness for Executives',
        'Creating Winning Company Culture'
      ],
      audiences: ['Executive Teams', 'Sales Organizations', 'Corporate Retreats', 'Leadership Conferences', 'Team Building Events'],
      color: 'amber',
      accent: 'yellow'
    },
    groups: {
      icon: Users,
      title: 'Group Events & Workshops',
      description: 'Interactive workshops and speaking engagements for organizations, communities, and special events.',
      topics: [
        'Confidence Building Workshops',
        'Mental Strength Training Sessions',
        'Performance Mindset Development',
        'Accountability and Consistency',
        'Overcoming Self-Doubt',
        'Creating Champion Habits'
      ],
      audiences: ['Community Organizations', 'Sports Teams', 'Youth Groups', 'Professional Associations', 'Special Events'],
      color: 'amber',
      accent: 'yellow'
    }
  };

  const testimonials = [
    {
      name: "Sarah Martinez",
      title: "High School Principal",
      text: "Our students were completely engaged. The 'reps remove all doubt' message resonated deeply, and we've seen real changes in their confidence and effort.",
      rating: 5,
      avatar: "👩‍🏫"
    },
    {
      name: "David Chen",
      title: "Corporate Training Director", 
      text: "Powerful presentation that transformed how our sales team approaches challenges. The champion mindset principles are now part of our daily culture.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Lisa Thompson",
      title: "Youth Program Coordinator",
      text: "The kids are still talking about the workshop weeks later. The practical strategies for building mental toughness were exactly what our program needed.",
      rating: 5,
      avatar: "👩‍🎓"
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Students Inspired", color: "amber" },
    { icon: Building2, number: "5", label: "Companies Served", color: "yellow" },
    { icon: Award, number: "98%", label: "Satisfaction Rate", color: "orange" },
    { icon: TrendingUp, number: "2 Years", label: "Speaking Experience", color: "amber" }
  ];

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="speaking" className="relative border-t-1 border-amber-200 py-20 bg-gradient-to-br from-stone-50/50 via-amber-50/30 to-yellow-50/50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-200/20 to-yellow-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-amber-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-yellow-200/10 to-amber-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-stone-100/80 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-amber-800 border-2 border-amber-300/60 mb-6 sm:mb-8 shadow-lg">
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></div>
            <Mic className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Motivational Speaking & Workshops</span>
            <span className="sm:hidden">Speaking & Workshops</span>
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight px-2">
            Inspire. Motivate.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-yellow-700 to-orange-700 animate-gradient">
              Transform Lives
            </span>
          </h2>
          
          <p className="text-base sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 font-light px-4">
            As an active professional athlete and certified life coach, I bring authentic champion mindset principles 
            to schools, corporations, and organizations. Every rep builds confidence, and every story shared creates impact.
          </p>

          {/* Key Message */}
          <div className="relative bg-gradient-to-r from-stone-100/90 to-amber-50/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-8 max-w-3xl mx-auto border-2 border-amber-300/50 shadow-xl mx-4 sm:mx-auto">
            <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-full flex items-center justify-center">
              <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
            <p className="text-lg sm:text-2xl font-bold text-gray-900 italic mb-2 sm:mb-4">
              "Reps Remove All Doubt"
            </p>
            <p className="text-gray-600 text-sm sm:text-lg">
              Whether it's on the court, in the classroom, or in the boardroom.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16 px-2">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-stone-100/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 text-center border-2 border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-${stat.color}-600 to-${stat.color}-700 rounded-xl sm:rounded-2xl mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="text-xl sm:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-xs sm:text-base text-gray-600 font-medium leading-tight">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Service Tabs */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-6 mb-8 sm:mb-12 px-2">
            {Object.entries(speakingServices).map(([key, service]) => {
              const IconComponent = service.icon;
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`relative flex items-center justify-center space-x-2 sm:space-x-3 px-4 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-lg transition-all duration-300 transform ${
                    isActive
                      ? `bg-gradient-to-r from-${service.color}-600 to-${service.accent}-600 text-white shadow-xl scale-105`
                      : 'bg-stone-100/80 backdrop-blur-sm text-gray-700 border-2 border-amber-300/50 hover:bg-amber-50 hover:border-amber-400 hover:scale-102 shadow-lg w-full sm:w-auto'
                  }`}
                >
                  <div className={`p-1 rounded-lg ${isActive ? 'bg-white/20' : `bg-${service.color}-100`}`}>
                    <IconComponent className={`w-4 h-4 sm:w-6 sm:h-6 ${isActive ? 'text-white' : `text-${service.color}-700`}`} />
                  </div>
                  <span className="text-center">{service.title}</span>
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Service Content */}
          <div className="bg-white backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-10 shadow-2xl border-2 border-amber-200/50 transform transition-all duration-500 mx-2 sm:mx-0">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-12">
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    <div className={`p-2 sm:p-3 bg-gradient-to-br from-${speakingServices[activeTab].color}-600 to-${speakingServices[activeTab].accent}-600 rounded-xl sm:rounded-2xl flex-shrink-0`}>
                      {React.createElement(speakingServices[activeTab].icon, { className: "w-6 h-6 sm:w-8 sm:h-8 text-white" })}
                    </div>
                    <h3 className="text-xl sm:text-3xl font-bold text-gray-900 leading-tight">
                      {speakingServices[activeTab].title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-lg leading-relaxed">
                    {speakingServices[activeTab].description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center space-x-2">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700" />
                    <span>Speaking Topics:</span>
                  </h4>
                  <div className="grid gap-2 sm:gap-3">
                    {speakingServices[activeTab].topics.map((topic, index) => (
                      <div 
                        key={index} 
                        className="flex items-start space-x-2 sm:space-x-3 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-amber-300/50 hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex-shrink-0">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
                        </div>
                        <span className="text-gray-800 font-medium text-sm sm:text-base leading-tight">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center space-x-2">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-700" />
                    <span>Perfect For:</span>
                  </h4>
                  <div className="space-y-3 sm:space-y-4">
                    {speakingServices[activeTab].audiences.map((audience, index) => (
                      <div 
                        key={index} 
                        className="bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 border-amber-300/50 hover:border-amber-400/70 transition-all duration-300 transform hover:scale-105"
                      >
                        <span className="text-gray-800 font-semibold text-sm sm:text-lg leading-tight">{audience}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Session Details */}
                <div className="bg-gradient-to-br from-amber-100/50 via-yellow-100/50 to-orange-100/50 rounded-xl sm:rounded-2xl p-4 sm:p-8 border-2 border-amber-300/50 shadow-lg">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700" />
                    <span>Session Options:</span>
                  </h4>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-3 sm:space-x-4 bg-stone-100/60 rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <div className="p-1.5 sm:p-2 bg-amber-600 rounded-lg sm:rounded-xl flex-shrink-0">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm sm:text-base">45-90 minute presentations</span>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4 bg-stone-100/60 rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <div className="p-1.5 sm:p-2 bg-yellow-600 rounded-lg sm:rounded-xl flex-shrink-0">
                        <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm sm:text-base">Interactive workshops available</span>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4 bg-stone-100/60 rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <div className="p-1.5 sm:p-2 bg-orange-600 rounded-lg sm:rounded-xl flex-shrink-0">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm sm:text-base">Virtual and in-person options</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        


      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease-in-out infinite;
        }
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};



export default MotivationalSpeaking;