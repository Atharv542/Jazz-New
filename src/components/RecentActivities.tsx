import React, { useState, useEffect, useRef } from 'react';
import { Calendar, ExternalLink, Play, FileText, Radio, ChevronDown, ChevronUp } from 'lucide-react';
import blog4 from "../assets/blog4.png"
interface Activity {
  id: string;
  type: 'podcast' | 'news' | 'blog';
  title: string;
  description: string;
  thumbnail: string;
  date: string;
  url: string;
  source: string;
  duration?: string;
}

const RecentActivities = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [filter, setFilter] = useState<'all' | 'podcast' | 'news' | 'blog'>('all');
  const [showAll, setShowAll] = useState(false);
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const activities: Activity[] = [
    {
      id: '1',
      type: 'podcast',
      title: 'The Matrix Green Pill',
      description:
        'Host Hilmarie Hutchison talks with Jazzmarr about how discipline and purpose shaped his journey from Louisville to international basketball, and how that same mindset fuels Reps with Jazz. He shares defining career moments, why "reps remove all doubt," the difference between coaching teens and adults, and practical ways to beat comparison, improve focus, and turn habits into confidence.',
      thumbnail: 'https://res.cloudinary.com/dczt652u9/image/upload/v1771305453/PodcastImage1_rcfbac.png',
      date: 'October 22, 2025',
      url: 'https://thematrixgreenpill.com/episodes/episode-267/',
      source: 'The Matrix Green Pill',
      duration: '27:14',
    },
    {
      id: '2',
      type: 'podcast',
      title: 'Around The Emirates With Sara Mousa',
      description:
        'Jazz Ferguson is a professional basketball player turned mental performance coach who empowers ambitious teens and adult leaders to unlock their potential! Founder of Reps With Jazz, he delivers mentorship programs that build resilience, confidence, and the winning mindset needed to succeed in sports and life.',
      thumbnail: 'https://athletesuntapped.com/browse/wp-content/uploads/2024/08/MPC-City-2.jpg',
      date: 'October 18, 2025',
      url: 'https://www.buzzsprout.com/1689514/episodes/18031434?brid=fOUaQuzyyy2BEJqwweAHzw',
      source: 'Around The Emirates',
      duration: '9:48',
    },
    {
      id: '3',
      type: 'news',
      title: 'Talking it through — and leading by example',
      description:
        'Sports is such an emotional roller coaster. Parents sometimes become more invested than their children and let their own emotions control the dialogue. Disappointment should be seen as an opportunity to develop resilience — it builds character and tests a child’s spirit.',
      thumbnail: 'https://res.cloudinary.com/dczt652u9/image/upload/v1771305298/News1_vrdzsa.png',
      date: 'October 21, 2025',
      url: 'https://gulfnews.com/lifestyle/how-dubai-mums-help-kids-rise-stronger-after-sports-team-rejection-its-not-about-medals-1.500315333 ',
      source: 'Gulf News',
    },
    {
      id: '4',
      type: 'blog',
      title: 'Why Your Words Matter As A Parent?',
      description:
        "Your words carry immense weight in the lives of your children, especially in the pre-teen and teen years.",
      thumbnail: 'https://res.cloudinary.com/dczt652u9/image/upload/v1771305221/Blog-1_xacaul.png',
      date: 'November 6, 2025',
      url: 'https://www.raemini.com/post/why-your-words-matter-as-a-parent',
      source: 'Raemini Magazine',
    },
    {
      id: '5',
      type: 'news',
      title: 'Money & Me',
      description:
        'Jazz Ferguson, a professional basketball player, learnt the value of money the hard way after splurging cash during the early stages of his career.Today, he is a life coach who advises on consistency, discipline and perseverance. Through his company, Reps With Jazz, he mentors young people and leaders to manage social pressures.',
      thumbnail: 'https://res.cloudinary.com/dczt652u9/image/upload/v1771305297/News2_t72jlq.png',
      date: 'November 09, 2025',
      url: 'https://www.thenationalnews.com/business/money/2025/11/07/dubai-basketball-coach-uae-business-personal-finance/',
      source: 'The National',
    },
    {
      id: '6',
      type: 'podcast',
      title: 'Mindset Secrets',
      description:
        'They discuss Jazz’s Journey from leaving the projects of Louisville and how the death of a childhood friend affected him. How one of his early coaches ignited his self-belief and the dream of the NBA, how, as a pro-athlete, all he needed was one opportunity, and how having the right mindset, habits and commitment, can propel anyone to achieving maximum capacity.',
      thumbnail: 'https://res.cloudinary.com/dczt652u9/image/upload/v1771306607/Podcast3_vliskm.png',
      date: 'November 27, 2025',
      url: 'https://youtu.be/ptn9TuYGiJ0?si=s_yOrzppjlhzFyUg',
      source: 'Tasty Humans Podcast',
      duration: '1:03:19',
    },
    {
      id: '7',
      type: 'blog',
      title: 'The Power of Quiet Consistency ',
      description:
        "The glory of a big win never gets old. When your company achieves major milestone,the recognition and rewards make all the hard work worthwhile.",
      thumbnail: 'https://res.cloudinary.com/dczt652u9/image/upload/v1771305105/Blog-2_uat091.png',
      date: 'November 30, 2025',
      url: 'https://mags.itp.com/CEOME/2025/234-CEO-16-30-NOV-2025/#page=68',
      source: 'CEO MIDDLE EAST',
    },
    {
      id: '8',
      type: 'news',
      title: 'Court To Mind',
      description:
        "For Jazz Ferguson, the decision to bring his basketball career and mentorship journey to the UAE was rooted in both purpose and possibility.Mainly, it was a decision to find more stability for my family,” he says, adding that the UAE represents “a real land of opportunity right now.",
      thumbnail: 'https://res.cloudinary.com/dczt652u9/image/upload/v1771305300/News3_y8mkbp.png',
      date: 'December 16, 2025',
      url: 'https://www.thefinance360.com/inside-jazz-fergusons-mission-to-shape-basketball-champions-in-uae/',
      source: 'FINANCE 360',
    },
    {
      id: '9',
      type: 'blog',
      title: 'Teen Thrive',
      description:
        "Dubai’s New Workshop Prepares Young Minds for Life’s Challenges Through Aviation Simulation",
      thumbnail: 'https://res.cloudinary.com/djkmvvviu/image/upload/v1772092896/Screenshot_2026-02-26_133104_uh0sgi.png',
      date: 'January 28, 2026',
      url: 'https://feelingoodglobal.com/teen-thrive-dubais-new-workshop-prepares-young-minds/',
      source: `feelin'good`,
    },
    {
      id: '10',
      type: 'blog',
      title: 'Top 5 Skills Teens Need to Thrive in Today’s Fast-Changing World',
      description:
        "Today’s teenagers are growing up in a world that looks nothing like the one their parents knew – digitally connected, constantly stimulated and under new kinds of social pressure. Rather than comparing generations, the real question is how we equip young people with the tools they need now.",
      thumbnail: 'https://res.cloudinary.com/djkmvvviu/image/upload/v1772092617/blog4_qrk4u6.png',
      date: 'February 25, 2026',
      url: 'https://www.raemini.com/post/5-skills-today-s-teens-need-to-thrive-we-chat-to-an-expert',
      source: `Raemini Magazine`,
    },
    
  ];

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredActivities =
    filter === 'all' ? activities : activities.filter((activity) => activity.type === filter);

  const visibleCount = 3;
  const displayedActivities = showAll ? filteredActivities : filteredActivities.slice(0, visibleCount);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            if (id) {
              setVisibleItems((prev) => new Set(prev).add(id));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    Object.values(itemRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [displayedActivities]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'podcast':
        return <Radio className="w-5 h-5" />;
      case 'news':
      case 'blog':
        return <FileText className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'podcast':
        return 'from-amber-600 to-yellow-600';
      case 'news':
        return 'from-orange-600 to-amber-600';
      case 'blog':
        return 'from-yellow-600 to-orange-600';
      default:
        return 'from-amber-600 to-yellow-600';
    }
  };

  return (
    <section
      id="activities"
      className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-stone-50 via-amber-50 to-yellow-50 border-t border-amber-200 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-200/30 to-yellow-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-amber-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-stone-100/80 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-amber-800 border-2 border-amber-300/60 mb-6 sm:mb-8 shadow-lg">
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></div>
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Recent Activities & Media</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
            Latest Appearances
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-yellow-700 to-orange-700">
              & Featured Content
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Stay updated with my latest podcast appearances, news features, and blog posts. Follow my
            journey as I share insights on mental performance, leadership, and the champion mindset.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
          {['all', 'podcast', 'news', 'blog'].map((filterType) => (
            <button
              key={filterType}
              onClick={() => {
                setFilter(filterType as any);
                setShowAll(false);
                setVisibleItems(new Set());
              }}
              className={`px-4 sm:px-6 py-2 sm:py-3 cursor-pointer rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 ${
                filter === filterType
                  ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-lg'
                  : 'bg-stone-100 text-gray-700 hover:bg-amber-50 border-2 border-amber-200'
              }`}
            >
              {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            </button>
          ))}
        </div>

        <div className="mr-5 md:mr-0 max-w-5xl mx-auto ">
          <div className="relative">
            <div className="absolute hidden md:block left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-amber-300 via-yellow-300 to-orange-300 rounded-full"></div>

            <div className="space-y-8 sm:space-y-12">
              {displayedActivities.map((activity, index) => (
                <div
                  key={activity.id}
                  ref={(el) => (itemRefs.current[activity.id] = el)}
                  data-id={activity.id}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  } items-center gap-4 sm:gap-8 transition-all duration-700 ${
                    visibleItems.has(activity.id)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: `${Math.min(index * 150, 600)}ms`,
                  }}
                >
                  <div
                    className={`absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br ${getTypeColor(
                      activity.type
                    )} border-2 sm:border-4 border-white shadow-lg z-10 flex items-center justify-center transition-all duration-500 ${
                      visibleItems.has(activity.id) ? 'scale-100' : 'scale-0'
                    }`}
                    style={{
                      transitionDelay: `${Math.min(index * 150 + 200, 800)}ms`,
                    }}
                  >
                    <div className="w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
                  </div>

                  <div
                    className={`w-full md:w-[calc(50%-3rem)] ml-12 sm:ml-16 md:ml-0 ${
                      index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-amber-200/50 group">
                      <div className="relative h-60 sm:h-48 overflow-hidden">
                        <img
                          src={activity.thumbnail}
                          alt={activity.title}
                          className="w-full h-full object-contain md:object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>

                        

                        {activity.duration && (
                          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                            <Play className="w-3 h-3" />
                            <span>{activity.duration}</span>
                          </div>
                        )}
                      </div>

                      <div className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <span className="text-xs sm:text-sm text-amber-700 font-semibold flex items-center space-x-2">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{activity.date}</span>
                          </span>
                          <span className="text-xs text-gray-500 bg-amber-50 px-2 sm:px-3 py-1 rounded-full w-fit">
                            {activity.source}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                          {activity.title}
                        </h3>

                        <div
                          className={`text-sm sm:text-base text-gray-600 leading-relaxed mb-4 overflow-hidden transition-all duration-300 ${
                            expandedItems.includes(activity.id) ? 'max-h-96' : 'max-h-20 sm:max-h-12'
                          }`}
                        >
                          <p className={expandedItems.includes(activity.id) ? '' : 'line-clamp-2'}>
                            {activity.description}
                          </p>
                        </div>

                        {activity.description.length > 150 && (
                          <button
                            onClick={() => toggleExpanded(activity.id)}
                            className="text-amber-700 hover:text-amber-800 text-xs sm:text-sm font-semibold flex items-center space-x-1 mb-4 transition-colors"
                          >
                            <span>
                              {expandedItems.includes(activity.id) ? 'Show less' : 'Read more'}
                            </span>
                            {expandedItems.includes(activity.id) ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </button>
                        )}

                        <a
                          href={activity.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:from-amber-700 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          {activity.type === 'podcast' ? (
                            <>
                              <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                              <span>Listen Now</span>
                            </>
                          ) : (
                            <>
                              <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                              <span>Read More</span>
                            </>
                          )}
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-[calc(50%-3rem)]"></div>
                </div>
              ))}

              {filteredActivities.length > visibleCount && (
                <div className="flex justify-end mt-8 sm:mt-12 px-4">
                  <button
                    onClick={() => {
                      setShowAll(!showAll);
                      if (!showAll) {
                        setTimeout(() => {
                          const element = document.getElementById('activities');
                          if (element && window.innerWidth < 768) {
                            const offset = element.getBoundingClientRect().top + window.scrollY - 100;
                            window.scrollTo({ top: offset, behavior: 'smooth' });
                          }
                        }, 100);
                      }
                    }}
                    className=" mr-10 inline-flex cursor-pointer items-center space-x-2 bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:from-amber-700 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    {showAll ? (
                      <>
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Show Less</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Show More</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="text-center mt-12 sm:mt-16 md:mt-20 px-4">
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto shadow-lg border-2 border-amber-300">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Want to Feature Me?
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
              I'm available for podcast interviews, speaking engagements, and media features. Let's
              share the champion mindset with your audience.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('booking');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-amber-600 to-yellow-600 cursor-pointer text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:from-amber-700 hover:to-yellow-700 transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Get In Touch</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentActivities;
