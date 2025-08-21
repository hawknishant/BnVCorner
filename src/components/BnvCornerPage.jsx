import React from "react";
import { motion } from "framer-motion";

// BnV Corner – Where Balance Meets Vitality
// Single-page React site with TailwindCSS classes
// Sections: Nav, Hero, About, USPs, Menu, Gallery, Testimonials, Contact, Footer

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "menu", label: "Menu" },
  { id: "gallery", label: "Gallery" },
  { id: "testimonials", label: "Love" },
  { id: "contact", label: "Contact" },
];

// Final menu with categories and launch timing (prices removed)
const menu = [
  // Toasts & Sandwiches (Immediate)
  { name: "Avocado Toast", desc: "Feta • tomato • chili flakes", kcal: 250, protein: 6, category: "Toasts & Sandwiches", launch: "Immediate", signature: true, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop" },
  { name: "Tomato & Cheese Grilled Sandwich", desc: "Simple, classic, always a hit", kcal: 280, protein: 9, category: "Toasts & Sandwiches", launch: "Immediate", img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop" },
  { name: "Hummus & Veggie Sandwich", desc: "Hummus, lettuce, bell peppers, olives, cucumber", kcal: 260, protein: 7, category: "Toasts & Sandwiches", launch: "Immediate", img: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=1200&auto=format&fit=crop" },
  { name: "Hummus & Falafel Sandwich", desc: "Crunchy falafel with creamy hummus", kcal: 300, protein: 10, category: "Toasts & Sandwiches", launch: "Immediate", img: "https://images.unsplash.com/photo-1604908176997-431b4f584e3a?q=80&w=1200&auto=format&fit=crop" },
  { name: "Paneer Sandwich", desc: "Spicy, protein‑rich Indian twist", kcal: 320, protein: 12, category: "Toasts & Sandwiches", launch: "Immediate", img: "https://images.unsplash.com/photo-1606756790138-261d2b21cd31?q=80&w=1200&auto=format&fit=crop" },
  { name: "Peanut Butter Banana Toast", desc: "Quick, filling, healthy", kcal: 300, protein: 8, category: "Toasts & Sandwiches", launch: "Immediate", img: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=1200&auto=format&fit=crop" },

  // Breakfast & Light Snacks (Immediate)
  { name: "Muesli with Milk/Yogurt", desc: "Optional toppings: dry fruits, honey", kcal: 280, protein: 10, category: "Breakfast & Light Snacks", launch: "Immediate", img: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1200&auto=format&fit=crop" },

  // Wraps (Immediate)
  { name: "Falafel Wrap", desc: "Falafel, lettuce, tahini or yogurt sauce", kcal: 350, protein: 12, category: "Wraps", launch: "Immediate", img: "https://images.unsplash.com/photo-1617191518008-6d19121d6cfc?q=80&w=1200&auto=format&fit=crop" },
  { name: "Paneer Tikka Wrap", desc: "Marinated paneer, onions, mint chutney", kcal: 400, protein: 14, category: "Wraps", launch: "Immediate", img: "https://images.unsplash.com/photo-1625944528286-21d6fdbb8f1a?q=80&w=1200&auto=format&fit=crop" },
  { name: "Grilled Veg Wrap", desc: "Zucchini, capsicum, onions, hummus base", kcal: 330, protein: 10, category: "Wraps", launch: "Immediate", img: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1200&auto=format&fit=crop" },

  // Healthy Bowls & Salads (2nd Stage/Week)
  { name: "Chickpea Masala Salad", desc: "Boiled chickpeas, onion, tomato, chaat masala", kcal: 220, protein: 10, category: "Healthy Bowls & Salads", launch: "2nd Stage/Week", img: "https://images.unsplash.com/photo-1604908554007-0270e43b3f5c?q=80&w=1200&auto=format&fit=crop" },
  { name: "Veggie Bowl", desc: "Lettuce, cucumber, cherry tomato, dressing", kcal: 180, protein: 6, category: "Healthy Bowls & Salads", launch: "2nd Stage/Week", img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=1200&auto=format&fit=crop" },
  { name: "Protein Bowl", desc: "Paneer, Falafel, cherry tomato, dressing", kcal: 400, protein: 18, category: "Healthy Bowls & Salads", launch: "2nd Stage/Week", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop" },

  // Beverages (2nd Stage/Week)
  { name: "Iced Coffee / Cold Coffee", desc: "With or without milk, optional jaggery syrup", kcal: 150, protein: 3, category: "Beverages", launch: "2nd Stage/Week", img: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1200&auto=format&fit=crop" },
  { name: "Hot Coffee", desc: "With or without milk, optional jaggery syrup", kcal: 100, protein: 2, category: "Beverages", launch: "2nd Stage/Week", img: "https://images.unsplash.com/photo-1509043759401-136742328bb3?q=80&w=1200&auto=format&fit=crop" },
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
  { name: "Ananya", role: "Runner", quote: "Balanced, tasty and fast. The Avocado Toast is my pre‑race ritual now." },
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
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white text-gray-900">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-green-600 flex items-center justify-center text-white font-bold shadow">
              BnV
            </div>
            <div>
              <p className="font-semibold leading-tight">BnV Corner</p>
              <p className="text-xs text-gray-500 -mt-0.5">Where Balance Meets Vitality</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center text-sm">
            {navItems.map((n) => (
              <Anchor key={n.id} id={n.id} label={n.label} />
            ))}
          </nav>
          <a href="#contact" className="hidden md:inline-flex rounded-2xl px-4 py-2 bg-green-600 text-white hover:bg-green-700 shadow">Order / Enquire</a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Eat Clean. <span className="text-green-700">Feel Vital.</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Chef‑crafted toasts, wraps and bowls using whole ingredients. Designed for
              balance, built for performance.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#menu" className="rounded-2xl px-5 py-3 bg-green-600 text-white hover:bg-green-700 shadow">Explore Menu</a>
              <a href="#about" className="rounded-2xl px-5 py-3 border border-gray-300 hover:border-gray-400">Why BnV?</a>
            </div>
            <ul className="mt-8 grid xs:grid-cols-3 grid-cols-2 gap-4 text-sm">
              {["High‑protein options", "Whole grains", "No refined sugar", "Cold‑pressed dressings", "100% vegetarian", "Fresh daily"].map((f) => (
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
            <div className="aspect-[4/3] rounded-3xl shadow-xl bg-white overflow-hidden">
              {/* Hero image most relatable to the name/signature dish: Avocado Toast */}
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1600&auto=format&fit=crop" alt="Avocado Toast" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 -right-4 bg-white/90 backdrop-blur rounded-2xl shadow p-4 w-56">
              <p className="text-xs text-gray-500">Signature</p>
              <p className="font-semibold">Avocado Toast</p>
              <p className="text-sm text-gray-600">Feta • Tomato • Chili Flakes</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold">About BnV Corner</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                BnV Corner stands for <span className="font-semibold">Balance & Vitality</span>. We craft food that’s as nourishing as it is delicious — using whole ingredients, smart cooking and transparent nutrition. Whether you’re powering through a workday or recovering after a workout, our menu keeps you light, focused and energised.
              </p>
              <div className="mt-6 grid sm:grid-cols-3 grid-cols-2 gap-4">
                {[{ k: "Avg. Protein", v: "6–18g" }, { k: "Prep Oil", v: "Cold‑pressed" }, { k: "Sugar", v: "No refined" }, { k: "Veg Options", v: "100%" }, { k: "Freshness", v: "Daily" }, { k: "Sourcing", v: "Local" }].map((it) => (
                  <div key={it.k} className="rounded-2xl bg-white shadow p-4">
                    <p className="text-xs text-gray-500">{it.k}</p>
                    <p className="font-semibold">{it.v}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl p-6 bg-green-600 text-white shadow-2xl">
              <h3 className="text-2xl font-semibold">Why you’ll love us</h3>
              <ul className="mt-4 space-y-3 text-green-50">
                <li>✔️ Thoughtful macros for everyday performance</li>
                <li>✔️ Whole grains, legumes, nuts and seasonal produce</li>
                <li>✔️ House dressings, minimal processing</li>
                <li>✔️ 100% vegetarian and Jain‑friendly options</li>
                <li>✔️ Transparent ingredients & calories</li>
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
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {menu.map((m) => (
              <div key={m.name} className="flex items-start gap-4 rounded-2xl border p-4 hover:shadow">
                <div className="min-w-16 min-h-16 w-16 h-16 rounded-xl overflow-hidden bg-green-100">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-semibold text-lg">{m.name}{m.signature ? " ⭐" : ""}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{m.desc}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">{m.category}</span>
                    <span className="px-2 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">{m.launch}</span>
                    <span className="text-gray-500">~{m.kcal} kcal · {m.protein}g protein</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-sm text-gray-500">*Nutrition values are indicative.</div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 md:py-20">
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
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">What people say</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl p-6 border hover:shadow bg-gradient-to-br from-white to-green-50">
                <p className="text-gray-700">“{t.quote}”</p>
                <div className="mt-4 text-sm text-gray-600">— <span className="font-medium">{t.name}</span>, {t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-gray-600 mt-2">Pre‑order, catering or franchise enquiries — we’d love to hear from you.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border p-6 bg-white shadow-sm">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="text-sm text-gray-600">Your name</label>
                  <input className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="e.g., Prateek" />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Phone / WhatsApp</label>
                  <input className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="+91 …" />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Message</label>
                  <textarea className="mt-1 w-full rounded-xl border px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="Tell us what you need…" />
                </div>
                <button className="rounded-2xl px-5 py-3 bg-green-600 text-white hover:bg-green-700 shadow w-max">Send</button>
              </div>
            </form>

            <div className="rounded-2xl overflow-hidden shadow border bg-white">
              <iframe title="map" className="w-full h-full min-h-[360px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.335439473642!2d88.363895!3d22.568946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a3b84a4a8d%3A0x8f0f8b0e2c4ddf2!2sKolkata%20City%20Centre!5e0!3m2!1sen!2sin!4v1714828800000" />
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
            <div className="rounded-2xl p-4 border bg-white">
              <p className="text-gray-500">Call / WhatsApp</p>
              <p className="font-semibold">+91 90000 00000</p>
            </div>
            <div className="rounded-2xl p-4 border bg-white">
              <p className="text-gray-500">Email</p>
              <p className="font-semibold">hello@bnvcorner.com</p>
            </div>
            <div className="rounded-2xl p-4 border bg-white">
              <p className="text-gray-500">Hours</p>
              <p className="font-semibold">Mon–Sun · 8am–10pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t bg-white/70">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} BnV Corner · Where Balance Meets Vitality</p>
          <div className="flex items-center gap-3 text-sm">
            <a href="#menu" className="underline underline-offset-4">Menu</a>
            <span>·</span>
            <a href="#contact" className="underline underline-offset-4">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
