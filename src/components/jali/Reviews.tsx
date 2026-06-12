const reviews = [
  {
    name: "Cynthia Joma",
    text: "It was an exciting and challenging experience at the same time. I had to put myself on camera which was not easy for me but I did it. I've learned a lot from the challenge and it has helped me revamp my business.",
  },
  {
    name: "Aisha Modu",
    text: "The global niche is amazing, I used it all through. We have been checked whether we have posted or not everyday and even though I didn't appear on the spotlight, I have been so consistent and no more scared of the camera. Introducing us to Mainstack is one of the amazing things I have learned on this challenge. This challenge is more than worth it. Thank you.",
  },
  {
    name: "Glory Eziukwu",
    text: "It's a worthy self rediscovery adventure. At first I was nervous thinking of how best to share my story, as I naturally prefer to keep unique experiences to myself, but the guidance from The Jali Group made a huge difference. I deeply appreciate the effort, the in-depth attention to details, and giving room for authenticity and creativity all at once.",
  },
  {
    name: "James Ajala",
    text: "Tailored template that really encouraged posting really helped me position better to attract clients.",
  },
];

interface ReviewsProps {
  alt?: boolean;
  eyebrow?: string;
  heading?: string;
  sub?: string;
}

const Reviews = ({
  alt = false,
  eyebrow = "In Their Words",
  heading = "Straight From The People Who Did It",
  sub = "Real reviews from creators and founders who took the challenge and put themselves out there.",
}: ReviewsProps) => {
  return (
    <section className={`section${alt ? " section-alt" : ""}`}>
      <div className="wrap-wide" style={{ textAlign: "center" }}>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="h2">{heading}</h2>
        <p className="sub sub-center">{sub}</p>

        <div className="reviews-grid">
          {reviews.map((r) => (
            <div className="review-card" key={r.name}>
              <p className="review-text">“{r.text}”</p>
              <div className="review-name">{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
