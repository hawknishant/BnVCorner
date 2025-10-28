import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// ---- Navigation ----
const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "menu", label: "Menu" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

// ---- Hero Carousel Images ----
const heroImages = [
  { src: "/images/avocado toast.jpeg", title: "Avocado Toast", desc: "Feta • Tomato • Chili Flakes" },
  { src: "/images/hummus and veggie sandwich.jpeg", title: "Hummus & Veggie Sandwich", desc: "Fresh & Wholesome" },
  { src: "/images/paneer sandwich.jpeg", title: "Paneer Sandwich", desc: "Spicy Indian Delight" },
  { src: "/images/fafafel wrap.jpeg", title: "Falafel Wrap", desc: "Crispy & Delicious" },
  { src: "/images/chickpea salad.jpeg", title: "Chickpea Masala Salad", desc: "Healthy & Tasty" },
];

// ---- Menu ----
const menu = [
  { name: "Avocado Toast", desc: "Feta • tomato • chili flakes", kcal: 250, protein: 6, signature: true, img: "/images/avocado toast.jpeg" },
  { name: "Hummus & Veggie Sandwich", desc: "Hummus, lettuce, bell peppers, olives, cucumber", kcal: 260, protein: 7, img: "/images/hummus and veggie sandwich.jpeg" },
  { name: "Paneer Sandwich", desc: "Spicy, protein‑rich Indian twist", kcal: 320, protein: 12, img: "/images/paneer sandwich.jpeg" },
  { name: "Falafel Wrap", desc: "Falafel, lettuce, tahini or yogurt sauce", kcal: 350, protein: 12, img: "/images/fafafel wrap.jpeg" },
  { name: "Paneer Tikka Wrap", desc: "Marinated paneer, onions, mint chutney", kcal: 400, protein: 14, img: "/images/paneerTikkaWrap.jpeg" },
  { name: "Chickpea Masala Salad", desc: "Boiled chickpeas, onion, tomato, chaat masala", kcal: 220, protein: 10, img: "/images/chickpea salad.jpeg" },
  { name: "Green Detox Juice", desc: "Spinach, cucumber, apple, lemon", kcal: 80, protein: 2, img: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=1200&auto=format&fit=crop" },
  { name: "Beetroot Detox Juice", desc: "Beetroot, carrot, ginger, orange", kcal: 95, protein: 2, img: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?q=80&w=1200&auto=format&fit=crop" },
];

// Gallery updated to show menu-related items
const gallery = [
  // Avocado Toast
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1400&auto=format&fit=crop",
  // Falafel Wrap
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1400&auto=format&fit=crop",
  // Coffee
  "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1400&auto=format&fit=crop",
  // Paneer Sandwich
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1400&auto=format&fit=crop",
  // Hummus & Veggie Sandwich
  "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1400&auto=format&fit=crop",
  // Protein/Salad Bowl
  "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop",
];

const testimonials = [
  { name: "Nishant Singh", role: "Manager", quote: "Balanced, tasty and fast. The Avocado Toast is my pre‑race ritual now." },
  { name: "Vikram", role: "Startup Founder", quote: "Finally a place that respects macros without compromising on flavour." },
  { name: "Ritika", role: "Nutrition Coach", quote: "Thoughtful menu, clean ingredients, consistent quality. Love the hummus trio!" },
];

function Anchor({ id, label }) {
  return (
    <a href={`#${id}`} className="px-3 py-2 rounded-xl hover:bg-green-100 transition">
      {label}
    </a>
  );
}

export default function BnvCornerPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white text-gray-900">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Left side - Mobile Menu Button + Logo */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button - only visible on mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Open mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* Logo and Brand */}
            <img src="/images/logo.png" alt="BnV Corner Logo" className="h-12 w-auto" fetchpriority="high" />
            <div>
              <p className="font-semibold leading-tight">BnV Corner</p>
              <p className="text-xs text-gray-500 -mt-0.5">Where Balance Meets Vitality</p>
            </div>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center text-sm">
            {navItems.map((n) => (
              <Anchor key={n.id} id={n.id} label={n.label} />
            ))}
          </nav>

          {/* Right side - Order Now Button */}
          <a 
            href="https://bnvcorner.petpooja.com/orders/menu" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Order food online from BnV Corner menu"
            className="inline-flex rounded-2xl px-4 py-2 bg-orange-600 text-white hover:bg-orange-700 shadow text-sm"
          >
            <span className="hidden sm:inline">Order Now</span>
            <span className="sm:hidden">Order</span>
          </a>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-3">
                <img src="/images/logo.png" alt="BnV Corner Logo" className="h-10 w-auto" />
                <div>
                  <p className="font-semibold text-sm leading-tight">BnV Corner</p>
                  <p className="text-xs text-gray-500 -mt-0.5">Where Balance Meets Vitality</p>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 px-4 py-6">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-xl transition-colors text-base font-medium"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <div className="p-4 border-t">
              <a 
                href="https://bnvcorner.petpooja.com/menu" 
                target="_blank" 
                className="block w-full text-center rounded-2xl px-4 py-3 bg-orange-600 text-white hover:bg-orange-700 shadow font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Order Now
              </a>
              <div className="mt-4 flex justify-center gap-4">
                <a href="https://www.instagram.com/bnv_corner/" target="_blank" rel="noopener noreferrer" aria-label="Visit BnV Corner on Instagram" className="text-gray-600 hover:text-orange-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61579945761174" target="_blank" rel="noopener noreferrer" aria-label="Visit BnV Corner on Facebook" className="text-gray-600 hover:text-orange-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://wa.me/918961618111" target="_blank" rel="noopener noreferrer" aria-label="Contact BnV Corner on WhatsApp" className="text-gray-600 hover:text-orange-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Eat Clean. <span className="text-orange-600">Feel Vital.</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Chef-crafted toasts, wraps and bowls using whole ingredients. Designed for
              balance, built for performance.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#menu" className="rounded-2xl px-5 py-3 bg-orange-600 text-white hover:bg-orange-700 shadow">Explore Menu</a>
              <a href="#about" className="rounded-2xl px-5 py-3 border border-orange-600 text-orange-600 hover:bg-orange-50">Why BnV?</a>
            </div>
            <ul className="mt-8 grid xs:grid-cols-3 grid-cols-2 gap-4 text-sm">
              {["High-protein options", "No Maida", "No refined sugar", "Sourdough options", "100% Vegetarian", "Vegan options"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-600">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-2.59a.75.75 0 1 0-1.22-.86l-3.223 4.57-1.58-1.58a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.1l3.693-5.34Z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="relative">
            <div className="aspect-[4/3] rounded-3xl shadow-xl bg-white overflow-hidden relative group">
              {/* Carousel Images */}
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img src={image.src} alt={image.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}

              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-orange-600 w-6' : 'bg-white/60 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -right-4 bg-white/90 backdrop-blur rounded-2xl shadow p-4 w-56">
              <p className="text-xs text-gray-500">Featured</p>
              <p className="font-semibold">{heroImages[currentImageIndex].title}</p>
              <p className="text-sm text-gray-600">{heroImages[currentImageIndex].desc}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold">About BnV Corner</h2>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  At BnV Corner, we believe that good food should do more than just satisfy cravings. Today, most choices are driven by taste, often at the cost of health. We're here to change that dynamic. BnV stands for <span className="font-semibold">Balance & Vitality</span> — a promise that every bite you take is both wholesome and flavorful. Our menu is designed to deliver clean, one-of-a-kind options that bring together nourishing ingredients and uncompromising taste. Whether it's a busy workday or a mindful break, our food helps you stay light, energized, and in sync with your body.
                </p>
              </div>
              <div className="grid sm:grid-cols-3 grid-cols-2 gap-4">
                {[{ k: "Avg. Protein", v: "6–18g" }, { k: "Prep Oil", v: "Cold‑pressed" }, { k: "Sugar", v: "No refined" }, { k: "Veg Options", v: "100%" }, { k: "Freshness", v: "Daily" }, { k: "Sourcing", v: "Local" }].map((it) => (
                  <div key={it.k} className="rounded-2xl bg-white shadow p-4">
                    <p className="text-xs text-gray-500">{it.k}</p>
                    <p className="font-semibold">{it.v}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl p-8 bg-green-600 text-white shadow-2xl h-fit">
              <h3 className="text-2xl font-semibold mb-6">Why you'll love us</h3>
              <ul className="space-y-4 text-green-50">
                <li className="flex items-start gap-3">
                  <span className="text-green-200 mt-0.5">✔️</span>
                  <span>Thoughtful macros for everyday performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-200 mt-0.5">✔️</span>
                  <span>Whole grains, legumes, nuts and seasonal produce</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-200 mt-0.5">✔️</span>
                  <span>House dressings, minimal processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-200 mt-0.5">✔️</span>
                  <span>100% vegetarian & vegan options</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-200 mt-0.5">✔️</span>
                  <span>Transparent ingredients & calories</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Menu Highlights</h2>
          <p className="text-gray-600 mt-2">Balanced plates designed for taste and vitality.</p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menu.map((m) => (
              <div key={m.name} className="rounded-2xl border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden bg-green-100">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{m.name}{m.signature ? " ⭐" : ""}</h3>
                  <p className="text-sm text-gray-600 mb-3">{m.desc}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>~{m.kcal} kcal</span>
                    <span>•</span>
                    <span>{m.protein}g protein</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a 
              href="https://bnvcorner.petpooja.com/orders/menu" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="View complete menu and order food online from BnV Corner"
              className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-green-600 text-white hover:bg-green-700 shadow-lg transition-all duration-200 font-medium"
            >
              <span>View More Items</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-500">*Nutrition values are indicative.</div>
        </div>
      </section>

      {/* Gallery - Hidden for now */}
      {/* <section id="gallery" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Gallery</h2>
          <p className="text-gray-600 mt-2">A peek into our fresh bowls, wraps and brews.</p>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {gallery.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow">
                <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-56 object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">What Our Customers Say</h2>
          <p className="text-gray-600 text-center mb-10">Real experiences from our valued customers</p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl p-6 bg-white border hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-semibold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-gray-600 mt-2">Pre-order, catering or franchise enquiries — we’d love to hear from you.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="rounded-2xl border p-8 bg-white shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {/* <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Call / WhatsApp</h4>
                    <p className="text-gray-600 mt-1">+91 90000 00000</p>
                    <p className="text-sm text-gray-500 mt-1">Available Mon-Sat, 9am-7pm</p>
                  </div>
                </div> */}
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600 mt-1">bnvcorner@gmail.com</p>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Visit Us</h4>
                    <p className="text-gray-600 mt-1">Sector V, Kolkata</p>
                    <p className="text-sm text-gray-500 mt-1">Near TCS Delta park</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Opening Hours</h4>
                    <p className="text-gray-600 mt-1">Monday - Saturday</p>
                    <p className="text-sm text-gray-500 mt-1">9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow border bg-white">
              <iframe
                title="map"
                className="w-full h-full min-h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=22.572667,88.436389&hl=en&z=16&output=embed"
              />
            </div>
          </div>

          {/* Additional Info */}
             <div className="mt-8 text-center">
               <p className="text-gray-600">For pre-orders, catering, or franchise enquiries, please reach out to us directly.</p>
               <div className="mt-4 flex justify-center gap-4">
                 <a href="mailto:bnvcorner@gmail.com" aria-label="Send email to BnV Corner" className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                   </svg>
                   Send Email
                 </a>
              {/* <a href="mailto:bnvcorner@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 transition">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t bg-white/70">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <p className="text-sm">© {new Date().getFullYear()} BnV Corner · Where Balance Meets Vitality</p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/bnv_corner/" target="_blank" rel="noopener noreferrer" aria-label="Visit BnV Corner on Instagram" className="text-gray-600 hover:text-orange-600 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61579945761174" target="_blank" rel="noopener noreferrer" aria-label="Visit BnV Corner on Facebook" className="text-gray-600 hover:text-orange-600 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://wa.me/918961618111" target="_blank" rel="noopener noreferrer" aria-label="Contact BnV Corner on WhatsApp" className="text-gray-600 hover:text-orange-600 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <a href="#menu" className="underline underline-offset-4 hover:text-orange-600">Menu</a>
              <span>·</span>
              <a href="#contact" className="underline underline-offset-4 hover:text-orange-600">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
