export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Regular Customer",
      rating: 5,
      text: "The custom cake I ordered for my daughter's birthday was absolutely stunning! Not only did it look perfect, but it tasted divine too.",
      initial: "P",
    },
    {
      name: "Rahul Verma",
      role: "Foodie",
      rating: 5,
      text: "Best cakes in town! Fresh, soft, and perfectly sweet. Definitely my go-to spot for evening snacks and celebrations.",
      initial: "R",
    },
    {
      name: "Anita Desai",
      role: "Event Planner",
      rating: 4,
      text: "Professional service and on-time delivery. The variety of toppings for custom cakes is impressive. Highly recommended!",
      reply: "Thank you Anita! Glad we could help.",
      initial: "A",
    },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <p className="subtitle">Don't just take our word for it</p>

      <div className="testimonial-grid">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="stars">
              {"★".repeat(t.rating)}
            
            </div>

            <p className="text">"{t.text}"</p>

            {t.reply && (
              <p className="reply">
                <strong>Reply:</strong> {t.reply}
              </p>
            )}

            <div className="user">
              <div className="avatar">{t.initial}</div>
              <div>
                <h4>{t.name}</h4>
                <span>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
