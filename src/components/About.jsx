import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { Film, Clapperboard, ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';
import first from "../assets/first.jpeg"
import second from "../assets/second.jpeg"
import third from "../assets/third.jpeg"

import gym1 from "../assets/gym1.jpeg"
import gym2 from "../assets/gym2.jpeg"

const images = [
  first,
  second,
  third
];

const image = [
  gym1,
  gym2

]

// Placeholder username - user needs to update this
const LETTERBOXD_USERNAME = "kaushal1619s";

function About() {
  const [currentImage, setCurrentImage] = useState(0);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Auto-scroll for header carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Fetch Letterboxd RSS Feed
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        // Use proxy in dev to avoid CORS and get real-time data
        const feedUrl = `/letterboxd-feed/kaushal_s/rss/?t=${new Date().getTime()}`;

        const response = await fetch(feedUrl);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "text/xml");
        const items = xmlDoc.querySelectorAll("item");

        const parsedMovies = Array.from(items).slice(0, 5).map(item => {
          const description = item.getElementsByTagName("description")[0]?.textContent || "";
          const title = item.getElementsByTagName("title")[0]?.textContent || "";
          const link = item.getElementsByTagName("link")[0]?.textContent || "";
          const pubDate = item.getElementsByTagName("pubDate")[0]?.textContent || "";

          const imgMatch = description.match(/src="([^"]+)"/);

          let rating = "";
          const ratingMatch = title.match(/★+/);
          if (ratingMatch) {
            rating = ratingMatch[0];
          } else {
            const descRating = description.match(/★+/);
            if (descRating) rating = descRating[0];
          }

          const cleanTitle = title.replace(/★+/g, '').trim();

          return {
            title: cleanTitle,
            link,
            pubDate,
            image: imgMatch ? imgMatch[1] : null,
            rating,
            description
          };
        });

        setMovies(parsedMovies);
      } catch (error) {
        console.error("Error fetching Letterboxd feed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Carousel Controls
  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % image.length);
  };
  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + image.length) % image.length);
  };

  return (
    <div className="bg-black text-white w-full">

      {/* SECTION 1: HEADER (Full Screen) */}
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-6rem)] relative z-10">
        <div className="text-center">
          <h1 className="text-[12vw] sm:text-[15vw] font-display font-medium leading-none tracking-tight text-white">
            ABOUT ME
          </h1>

          <div className="mt-4 space-y-2">
            <p className="text-neutral-400 font-sans tracking-[0.2em] text-sm sm:text-base uppercase">
              GET TO KNOW MORE ABOUT ME
            </p>
            <p className="font-serif italic text-3xl sm:text-4xl text-white">
              who i am
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: CONTENT (Scroll to see) */}

      <div className="scroll-smooth delay-100">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24 pb-32 sm:pb-48">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

            {/* Left Column: Text Content */}
            <div className="space-y-10">
              <div>
                <h5 className="text-neutral-500 text-xs font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-neutral-700"></span>
                  A Little About Me
                </h5>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                  Nice to meet you. <br />
                  I'm <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">Kaushal</span>
                </h1>
              </div>

              <div className="text-neutral-400 text-lg leading-relaxed space-y-6 font-light">
                <p>
                  I transform complex ideas into high-speed, scalable web products.
                  As an engineering-driven developer, I focus on the entire stack—prioritizing
                  clean architecture, seamless performance, and modern solutions that drive real value.
                  
                </p>
                <p>
                  With a foundation in Software Systems and a deep interest in data-driven thinking, I design full-stack solutions that balance performance, structure, and clarity.Beyond writing code, I understand the product lifecycle.
                </p>
              </div>
            </div>

            {/* Right Column: Photo Carousel (Original) */}
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  alt="Kaushal"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                />
              </AnimatePresence>

            </div>

          </div>

          {/* SECTION 3: PASSIONS (2 Cards) */}
          <div className="mt-48">
            <div className="text-center mb-16">
              <h5 className="text-neutral-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                BEHIND THE CURTAINS
              </h5>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Decoding Logic <span className="font-serif italic bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">& The ME</span>
              </h2>
              <p className="text-neutral-400 text-lg mt-4">Here's a peek into my passions and interests.</p>
              <span className="text-neutral-400 text-lg mt-4">Outside the screen, filmmaking, fitness, and cinema shape <br />
                the way I think: discipline, aesthetics, and precision.</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-auto md:h-[500px]">

              {/* Card 1: Letterboxd Integration */}
              <motion.div
                whileHover={{ y: -5 }}
                className="relative rounded-3xl overflow-hidden group bg-[#14181c] border border-white/10 p-8 flex flex-col"
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    {/* Letterboxd Logo / Icon */}
                    <div className="w-10 h-10 rounded-full bg-[#202830] flex items-center justify-center">
                      <Clapperboard className="text-[#00e054]" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Letterboxd</h3>
                      <p className="text-xs text-[#9ab] uppercase tracking-wider">LATEST WATCHES</p>
                    </div>
                  </div>
                  <a
                    href={`https://letterboxd.com/kaushal_s/`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink className="text-white/60" size={18} />
                  </a>
                </div>

                {/* Movies List */}
                <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                  {loading ? (
                    <div className="animate-pulse space-y-4">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="h-20 bg-white/5 rounded-xl w-full" />
                      ))}
                    </div>
                  ) : movies.length > 0 ? (
                    movies.map((movie, index) => (
                      <a
                        key={index}
                        href={movie.link} target="_blank" rel="noreferrer"
                        className="flex gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                      >
                        <div className="w-12 h-16 bg-neutral-800 rounded-md overflow-hidden flex-shrink-0">
                          {movie.image ? (
                            <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-neutral-600"><Film size={16} /></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-medium truncate group-hover/item:text-[#00e054] transition-colors">{movie.title.replace(/ \((\d{4})\)$/, "")}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[#00e054] text-xs">Watched</span>
                            <span className="text-orange-400 text-sm">{movie.rating}</span>
                          </div>
                          <p className="text-xs text-neutral-500 mt-1">{new Date(movie.pubDate).toLocaleDateString()}</p>
                        </div>
                      </a>
                    ))
                  ) : (
                    <div className="text-center py-12 text-neutral-500">
                      <Film className="mx-auto mb-2 opacity-50" />
                      <p>No recent activity found.</p>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Card 2: Image Carousel */}
              <motion.div
                whileHover={{ y: -5 }}
                className="relative rounded-3xl overflow-hidden group bg-neutral-900 border border-white/10"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={carouselIndex}
                    src={image[carouselIndex]}
                    alt="Gallery"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">Moments in Frame</h3>
                  <p className="text-neutral-300 text-sm line-clamp-2">
                    Capturing life, one shutter at a time. A glimpse into my world through photography.
                  </p>

                  {/* Controls */}
                  <div className="flex items-center gap-4 mt-6">
                    <button
                      onClick={prevSlide}
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all active:scale-95"
                    >
                      <ChevronLeft size={20} className="text-white" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all active:scale-95"
                    >
                      <ChevronRight size={20} className="text-white" />
                    </button>
                  </div>
                </div>

              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About