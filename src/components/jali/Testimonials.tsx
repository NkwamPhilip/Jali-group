const testimonials = [
  {
    image: "/steph.jpeg",
    name: "Stephanie Obiano",
    role: "Travel Industry Icon · Silverbird Entrepreneur of the Year",
    quote:
      "From being overlooked, Stephanie was repositioned as a female icon in the travel management industry using the Signature Belief & Framework by Jali.",
  },
  {
    image: "/iya.jpeg",
    name: "Iyobosa Sorae",
    role: "Ex-Global Head of Treasury, Coronation",
    quote:
      "Launched a signature book & community with captains of industry in attendance. In her words: “This program gave me a head start. It was worth it 1000%.”",
  },
  {
    image: "/grace.jpeg",
    name: "Grace Vanderpuye",
    role: "United Nations Staff",
    quote:
      "Working with the Jali team in 2025 was incredible. Communicating my value was made very easy and I had a structure for consistency.",
  },
  {
    image: "/dre.jpg",
    name: "Dr. Emmanuel Okafor",
    role: "Medical Doctor · Influencer",
    quote:
      "Using the Jali Framework, Dr. E completely restructured his digital persona — pivoting from a standard practitioner to a sought-after industry authority. From 88 followers to 10,000 in 14 days, with 5M+ organic views.",
  },
];

interface TestimonialsProps {
  alt?: boolean;
  eyebrow?: string;
  heading?: string;
  sub?: string;
}

const Testimonials = ({
  alt = false,
  eyebrow = "Proof, Not Promises",
  heading = "Real People. Real Repositioning.",
  sub = "A few of the founders and creators who turned their story into authority, income, and opportunity with Jali.",
}: TestimonialsProps) => {
  return (
    <section className={`section${alt ? " section-alt" : ""}`}>
      <div className="wrap-wide" style={{ textAlign: "center" }}>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="h2">{heading}</h2>
        <p className="sub sub-center">{sub}</p>

        <div className="testi-grid" style={{ textAlign: "left" }}>
          {testimonials.map((t) => (
            <div className="testi-card" key={t.name}>
              <div className="testi-photo">
                <img src={t.image} alt={t.name} loading="lazy" />
              </div>
              <div className="testi-body">
                <p className="testi-quote">{t.quote}</p>
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
