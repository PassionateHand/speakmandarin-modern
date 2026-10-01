import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight, BookOpen, BriefcaseBusiness, CalendarCheck, Check,
  ChevronDown, Globe2, GraduationCap, Languages, MapPin, Menu,
  MessageCircle, Play, Sparkles, Target, Users, X, Baby, Plane,
  ShieldCheck, Quote, Clock3
} from 'lucide-react';
import './styles.css';

const siteImages = {
  hero: 'https://res.cloudinary.com/dzzl28aef/video/upload/v1790791179/Teacher_teaching_Mandarin_charac__20260930184832_btvrzb.mp4',
  mandarin: 'https://res.cloudinary.com/dzzl28aef/image/upload/v1790798036/Mandarin_Foundations_omvlk3.png',
  elementary: 'https://res.cloudinary.com/dzzl28aef/image/upload/v1790798060/Elementary_Mandarin_omv2uw.png',
  intermediate: 'https://res.cloudinary.com/dzzl28aef/image/upload/v1790798029/Intermediate_Mandarin_syzrhy.png',
  advanced: 'https://res.cloudinary.com/dzzl28aef/image/upload/v1790798038/Advanced_Mandarin_mujc02.png',
  hskExam: 'https://res.cloudinary.com/dzzl28aef/image/upload/v1790798052/HSK_Exam_Preparation_jffdi7.png',
  business: 'https://res.cloudinary.com/dzzl28aef/image/upload/v1790798055/Business_Mandarin_fi6llu.png',
  kids: 'https://res.cloudinary.com/dzzl28aef/image/upload/v1790798029/Intermediate_Mandarin_syzrhy.png',
  travel: 'https://res.cloudinary.com/dzzl28aef/image/upload/v1790799438/Practical_Travel_Mandarin_edsb51.png',

};

const programs = [
  {
    title: 'Mandarin Foundations',
    level: 'Beginner',
    duration: '4 weeks',
    online: '$100', physical: '$200',
    audience: 'Complete beginners',
    description: 'Start from zero with pronunciation, tones, greetings and everyday Mandarin.',
    features: ['Pinyin & pronunciation', 'Four Mandarin tones', 'Basic conversations', 'Everyday expressions'],
    image: siteImages.mandarin,
  },
  {
    title: 'Elementary Mandarin',
    level: 'A1 / A2',
    duration: '3 months',
    online: '$185', physical: '$280',
    audience: 'Beginners with a foundation',
    description: 'Build practical conversational Mandarin for everyday life, school and social situations.',
    features: ['300+ essential words', 'Characters & grammar', 'Speaking & listening', 'Reading short texts'],
    image: siteImages.elementary,
  },
  {
    title: 'Intermediate Mandarin',
    level: 'B1 / B2',
    duration: '4 months',
    online: '$260', physical: '$400',
    audience: 'Learners with basic Mandarin',
    description: 'Move into longer conversations, stronger grammar and more independent communication.',
    features: ['Expanded vocabulary', 'Intermediate grammar', 'Listening comprehension', 'Real-life communication'],
    image: siteImages.intermediate,
  },
  {
    title: 'Advanced Mandarin',
    level: 'Advanced',
    duration: '6 months',
    online: '$500', physical: '$800',
    audience: 'Intermediate learners',
    description: 'Develop confidence for complex academic, professional and social conversations.',
    features: ['1,000+ characters & words', 'Advanced grammar', 'Authentic Chinese texts', 'Fluency-focused practice'],
    image: siteImages.advanced,
  },
  {
    title: 'HSK Exam Preparation',
    level: 'HSK 1–6',
    duration: '12–18 months',
    online: '$445', physical: '$665',
    audience: 'HSK candidates',
    description: 'Focused preparation for HSK vocabulary, grammar, reading, listening, writing and mock exams.',
    features: ['HSK 1–6 pathway', 'Placement assessment', 'Mock examinations', 'Exam strategies'],
    image: siteImages.hskExam,
    featured: true,
  },
  {
    title: 'Business Mandarin',
    level: 'Professional',
    duration: '8 weeks',
    online: '$150', physical: '$250',
    audience: 'Entrepreneurs & professionals',
    description: 'Communicate more effectively with Chinese-speaking partners in business and trade.',
    features: ['Business introductions', 'Meetings & presentations', 'Negotiations & trade', 'Business etiquette'],
    image: siteImages.business,
  },
  {
    title: 'Mandarin for Kids & Teens',
    level: 'Young Learners',
    duration: '8 weeks',
    online: '$90', physical: '$150',
    audience: 'Children & teenagers',
    description: 'Fun, interactive Mandarin lessons built around songs, stories, games and speaking.',
    features: ['Songs & stories', 'Flashcards & characters', 'Speaking practice', 'Chinese culture'],
    image: siteImages.kids,
  },
  {
    title: 'Practical & Travel Mandarin',
    level: 'Travel',
    duration: '4 weeks',
    online: '$70', physical: '$100',
    audience: 'Travellers & expatriates',
    description: 'Learn the Mandarin you need for real situations in China and Chinese-speaking environments.',
    features: ['Ordering food', 'Shopping & transport', 'Directions', 'Hotels & daily needs'],
    image: siteImages.travel,
  },
];

const audiences = [
  { icon: GraduationCap, title: 'Students', text: 'Build a strong foundation, prepare for HSK and open academic opportunities.' },
  { icon: Baby, title: 'Kids & Teens', text: 'Age-appropriate classes that make Mandarin fun, interactive and memorable.' },
  { icon: BriefcaseBusiness, title: 'Professionals & Entrepreneurs', text: 'Learn business-focused Mandarin for meetings, trade and Chinese partnerships.' },
  { icon: Plane, title: 'Travellers', text: 'Practical Mandarin for airports, hotels, shopping, food and everyday conversations.' },
];

const testimonials = [
  { tag: 'HSK SUCCESS', title: '293/300 — HSK PASS', quote: 'Thank you so much for being a good teacher, ma’am.' },
  { tag: 'HSK 1 SUCCESS', title: '200/200 — PERFECT SCORE', quote: 'Chinese result… Damn am good!' },
  { tag: 'PARENT FEEDBACK', title: 'Happy Learners. Happy Parents.', quote: 'She likes you very much and how your engagement with her makes her want to do more.' },
  { tag: 'STUDENT LOVE', title: 'Learning Mandarin With Confidence', quote: 'To be honest, I’m really happy I’m your student.' },
];

const faqs = [
  ['Who are the classes for?', 'Children and teenagers, adults and professionals, business professionals working with Chinese partners, beginners and learners who want stronger speaking confidence.'],
  ['Do I need prior knowledge of Mandarin?', 'No. The Foundation Program starts at beginner level. Learners with prior knowledge can be assessed and placed appropriately.'],
  ['Are classes online or physical?', 'Both. Online lessons are designed for flexibility, while physical classes may be arranged in Abuja depending on availability.'],
  ['How long is each lesson?', 'Each lesson lasts 60 minutes and includes speaking practice, vocabulary, sentence structure, listening exercises and interactive conversation.'],
  ['Is there a trial or consultation?', 'Yes. An introductory consultation can be used to understand your goals, assess your level and recommend a learning plan.'],
  ['Do students receive certificates?', 'Yes. Students who complete programs receive a Certificate of Completion showing their progress.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState('online');
  const [faqOpen, setFaqOpen] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const visiblePrograms = useMemo(() => showAll ? programs : programs.slice(0, 6), [showAll]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <div className="topbar">
        <div className="shell topbar-inner">
          <span>🇳🇬 Abuja, Nigeria</span>
          <span className="topbar-dot">•</span>
          <span>Online classes available worldwide</span>
          <a href="tel:+2348130229168">+234 813 022 9168</a>
        </div>
      </div>

      <header className="nav-wrap">
        <div className="shell nav">
          <button className="brand" onClick={() => scrollTo('home')} aria-label="SpeakMandarinNG home">
            <span className="brand-mark"><Languages size={21} /></span>
            <span>
              <strong>SpeakMandarinNG</strong>
              <small>Mandarin Language Academy</small>
            </span>
          </button>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <button onClick={() => scrollTo('programs')}>Programs</button>
            <button onClick={() => scrollTo('why')}>Why Mandarin</button>
            <button onClick={() => scrollTo('about')}>About</button>
            <button onClick={() => scrollTo('faq')}>FAQ</button>
            <button className="nav-cta" onClick={() => scrollTo('booking')}>Book a Class <ArrowRight size={16} /></button>
          </nav>
          <button className="menu-btn" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle navigation">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-orb orb-1" />
          <div className="hero-orb orb-2" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><Sparkles size={15} /> Learn Mandarin. Connect with China. Go further.</div>
              <h1>Learn Chinese with <span>confidence.</span></h1>
              <p className="hero-text">Structured Mandarin lessons for beginners, students, professionals, kids and travellers — taught online or in person in Abuja.</p>
              <div className="hero-actions">
                <button className="btn primary" onClick={() => scrollTo('booking')}>Book a Consultation <ArrowRight size={18} /></button>
                <button className="btn secondary" onClick={() => scrollTo('programs')}><Play size={17} /> Explore Programs</button>
              </div>
              <div className="hero-proof">
                <div className="avatar-stack"><span>中</span><span>你</span><span>我</span><span>学</span></div>
                <div><strong>1,200+ students</strong><small>learning with SpeakMandarinNG</small></div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-card glass">
                <div className="hero-image-wrap">
                  <video src={siteImages.hero} aria-label="Learn Mandarin with SpeakMandarinNG" autoPlay loop playsInline muted />
                  <div className="image-badge"><span className="live-dot" /> ONLINE + ONSITE</div>
                </div>
                <div className="hero-floating hf-one"><div className="mini-icon"><ShieldCheck size={16} /></div><span><strong>Structured learning</strong><small>Beginner → Advanced</small></span></div>
                <div className="hero-floating hf-two"><div className="mini-icon red"><Target size={16} /></div><span><strong>Speak, not memorize</strong><small>Communication-focused</small></span></div>
              </div>
              <div className="chinese-stamp">学<br /><small>LEARN</small></div>
            </div>
          </div>
        </section>

        <section className="stats-strip">
          <div className="shell stats-grid">
            <div><strong>1,200+</strong><span>Students</span></div>
            <div><strong>25+</strong><span>Courses</span></div>
            <div><strong>10+</strong><span>Instructors</span></div>
            <div><strong>60 min</strong><span>Interactive lessons</span></div>
          </div>
        </section>

        <section id="programs" className="section-pad">
          <div className="shell">
            <div className="section-heading centered">
              <div className="eyebrow soft">Programs designed around your goal</div>
              <h2>Choose your <span>Mandarin path.</span></h2>
              <p>From your first “nǐ hǎo” to confident professional conversations, follow a structured pathway that fits your level and lifestyle.</p>
            </div>

            <div className="mode-switch">
              <button className={mode === 'online' ? 'active' : ''} onClick={() => setMode('online')}><Globe2 size={16} /> Online</button>
              <button className={mode === 'physical' ? 'active' : ''} onClick={() => setMode('physical')}><MapPin size={16} /> Physical in Abuja</button>
            </div>

            <div className="program-grid">
              {visiblePrograms.map((p) => (
                <article className={p.featured ? 'program-card featured' : 'program-card'} key={p.title}>
                  <div className="program-img"><img src={p.image} alt="" /><span>{p.level}</span></div>
                  <div className="program-body">
                    <div className="program-top"><span><Clock3 size={14} /> {p.duration}</span><span>{p.audience}</span></div>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <ul>{p.features.map(f => <li key={f}><Check size={15} /> {f}</li>)}</ul>
                    <div className="program-footer">
                      <div><small>{mode === 'online' ? 'Online' : 'Physical'} tuition</small><strong>{mode === 'online' ? p.online : p.physical}</strong></div>
                      <button onClick={() => scrollTo('booking')}>Enrol <ArrowRight size={16} /></button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="center-btn"><button className="btn secondary" onClick={() => setShowAll(v => !v)}>{showAll ? 'Show fewer programs' : 'View all programs'} <ChevronDown size={18} className={showAll ? 'rotate' : ''} /></button></div>
          </div>
        </section>

        <section id="why" className="section-pad dark-section">
          <div className="shell">
            <div className="section-heading centered light">
              <div className="eyebrow">Who are you learning for?</div>
              <h2>Mandarin for <span>real life.</span></h2>
              <p>Whether your goal is education, business, travel, career growth or personal development, the learning path starts with where you are.</p>
            </div>
            <div className="audience-grid">
              {audiences.map(({ icon: Icon, title, text }) => (
                <div className="audience-card" key={title}><div className="audience-icon"><Icon size={22} /></div><h3>{title}</h3><p>{text}</p><button onClick={() => scrollTo('programs')}>Find a program <ArrowRight size={15} /></button></div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-pad">
          <div className="shell split-section">
            <div className="about-art">
              <div className="about-photo"><img src={siteImages.mandarin} alt="Mandarin learning illustration" /></div>
              <div className="quote-card glass"><Quote size={22} /><strong>Speak confidently, not just memorize.</strong><span>Communication-focused learning</span></div>
            </div>
            <div className="about-copy">
              <div className="eyebrow soft">Why SpeakMandarinNG?</div>
              <h2>A structured academy for learners who want to <span>actually use Mandarin.</span></h2>
              <p>SpeakMandarinNG is a Mandarin language academy offering online and on-site Chinese classes for children, teenagers and adults in Nigeria and internationally.</p>
              <p>The curriculum combines clear grammar progression, practical conversation and cultural immersion to build speaking confidence, listening skills and exam readiness.</p>
              <div className="check-list">
                <div><Check size={17} /> Beginner to advanced pathways</div>
                <div><Check size={17} /> HSK 1–6 exam preparation</div>
                <div><Check size={17} /> Live online and in-person learning</div>
                <div><Check size={17} /> Private and small-group options</div>
                <div><Check size={17} /> Certificates of completion</div>
              </div>
              <div className="mission-grid"><div><small>MISSION</small><strong>Empowering Africans to learn Mandarin, connect with China and succeed globally.</strong></div><div><small>VISION</small><strong>To become Africa’s leading Mandarin language and cultural education platform.</strong></div></div>
            </div>
          </div>
        </section>

        <section className="section-pad soft-section">
          <div className="shell">
            <div className="section-heading centered">
              <div className="eyebrow soft">Real progress. Real confidence.</div>
              <h2>Learners are <span>speaking up.</span></h2>
            </div>
            <div className="testimonial-grid">
              {testimonials.map(t => <article className="testimonial" key={t.title}><div className="t-tag">{t.tag}</div><h3>{t.title}</h3><p>“{t.quote}”</p><div className="stars">★★★★★</div></article>)}
            </div>
          </div>
        </section>

        <section id="booking" className="section-pad booking-section">
          <div className="shell booking-wrap">
            <div className="booking-copy"><div className="eyebrow">Start with a consultation</div><h2>Not sure where to start? <span>We’ll help you choose.</span></h2><p>Tell us your age, current level and goal. We’ll recommend the right Mandarin pathway — online or physical in Abuja.</p><div className="booking-points"><span><Check size={16} /> Level assessment</span><span><Check size={16} /> Personalised recommendation</span><span><Check size={16} /> Schedule options</span></div></div>
            <form
              className="booking-card"
              action="https://formspree.io/f/xaenzvee"
              method="POST"
            >
              {/* Email subject */}
              <input
                type="hidden"
                name="_subject"
                value="New SpeakMandarinNG Website Enquiry"
              />

              {/* Name + Phone */}
              <div className="form-row">
                <label>
                  Full Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                  />
                </label>

                <label>
                  WhatsApp / Phone
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+234 ...."
                    autoComplete="tel"
                    required
                  />
                </label>
              </div>

              {/* Email */}
              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </label>

              {/* Programme + Mode */}
              <div className="form-row">
                <label>
                  What would you like to learn?
                  <select name="course" required>
                    <option value="">Select a programme</option>

                    <option value="Mandarin Foundations">
                      Mandarin Foundations
                    </option>

                    <option value="Elementary Mandarin">
                      Elementary Mandarin
                    </option>

                    <option value="Intermediate Mandarin">
                      Intermediate Mandarin
                    </option>

                    <option value="Advanced Mandarin">
                      Advanced Mandarin
                    </option>

                    <option value="HSK Exam Preparation">
                      HSK Exam Preparation
                    </option>

                    <option value="Business Mandarin">
                      Business Mandarin
                    </option>

                    <option value="Mandarin for Kids & Teens">
                      Mandarin for Kids & Teens
                    </option>

                    <option value="Practical & Travel Mandarin">
                      Practical & Travel Mandarin
                    </option>
                  </select>
                </label>

                <label>
                  Preferred Learning Mode
                  <select name="learning_mode" required>
                    <option value="">Select mode</option>
                    <option value="Online">Online</option>
                    <option value="Physical in Abuja">Physical in Abuja</option>
                  </select>
                </label>
              </div>

              {/* Preferred class time */}
              <label>
                Preferred Class Time
                <select name="preferred_time">
                  <option value="">Select a preferred time</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                  <option value="Flexible">I'm flexible</option>
                </select>
              </label>

              {/* Message */}
              <label>
                Tell us about your goal
                <textarea
                  name="message"
                  rows="5"
                  placeholder="For example: I want to learn Mandarin for business, travel, studying in China, communicating with Chinese clients, or personal development..."
                  required
                />
              </label>

              {/* Submit */}
              <button
                className="btn primary full"
                type="submit"
              >
                Request Consultation
                <ArrowRight size={18} />
              </button>

              <small className="form-note">
                Your information is kept private and will only be used to respond
                to your enquiry.
              </small>
            </form>
          </div>
        </section>

        <section id="faq" className="section-pad faq-section">
          <div className="shell faq-grid">
            <div><div className="eyebrow soft">Questions, answered</div><h2>Everything you need to know <span>before you begin.</span></h2><p>Still unsure which program fits? Start with a consultation and we can guide you.</p><button className="btn secondary" onClick={() => scrollTo('booking')}>Talk to SpeakMandarinNG <MessageCircle size={17} /></button></div>
            <div className="faq-list">{faqs.map(([q, a], i) => <div className={faqOpen === i ? 'faq-item open' : 'faq-item'} key={q}><button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}><span>{q}</span><ChevronDown size={18} /></button>{faqOpen === i && <p>{a}</p>}</div>)}</div>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell final-inner"><div><div className="eyebrow">Your Mandarin journey starts here</div><h2>Learn the language. Build the connection.</h2></div><button className="btn light" onClick={() => scrollTo('booking')}>Book a Class <ArrowRight size={18} /></button></div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer-grid">
          <div><div className="brand footer-brand"><span className="brand-mark"><Languages size={21} /></span><span><strong>SpeakMandarinNG</strong><small>Mandarin Language Academy</small></span></div><p>Empowering Africans to learn Mandarin, connect with China and succeed globally.</p></div>
          <div><h4>Explore</h4><button onClick={() => scrollTo('programs')}>Programs</button><button onClick={() => scrollTo('about')}>About</button><button onClick={() => scrollTo('faq')}>FAQs</button></div>
          <div><h4>Learn</h4><button onClick={() => scrollTo('programs')}>HSK Preparation</button><button onClick={() => scrollTo('programs')}>Business Mandarin</button><button onClick={() => scrollTo('programs')}>Kids & Teens</button></div>
          <div><h4>Contact</h4><a href="tel:+2348130229168">+234 813 022 9168</a><span>Abuja, Nigeria</span><a href="https://instagram.com/SpeakMandarinNg" target="_blank" rel="noreferrer">Instagram @SpeakMandarinNg</a></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 SpeakMandarinNG</span><span>Online worldwide · Physical classes in Abuja</span></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
