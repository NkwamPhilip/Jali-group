import { useState, useRef, useEffect } from "react";
import { Mail, Phone, Globe } from "lucide-react";
import JaliLayout from "@/components/jali/JaliLayout";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const services = [
  "The Jali Tribe",
  "Creator-Founder Service",
  "WAMC Growth Challenge",
  "Public Speaking / Workshop",
];

const JaliContact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    emailjs.init("myEjwOlLjAuFtcsoG");
  }, []);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = "service_3aqdc3g";
    const TEMPLATE_ID = "template_hq7kir4";
    const PUBLIC_KEY = "myEjwOlLjAuFtcsoG";

    try {
      if (formRef.current) {
        const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
        if (result.status === 200) {
          toast({
            title: "Message sent",
            description: "Thank you — Jali's team will be in touch shortly.",
          });
          formRef.current.reset();
        }
      }
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: error?.text || "Please email hello@jaliafriq.com directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <JaliLayout
      page="contact"
      title="Contact — Jali Group"
      description="Start a conversation with the Jali Group team. Tell us about your goals and we'll show you how to turn your story into growth."
    >
      {/* HERO */}
      <section className="hero" style={{ paddingBottom: "40px" }}>
        <div className="hero-line" />
        <p className="eyebrow">Direct Access</p>
        <h1 className="h1">Start A Conversation</h1>
        <p className="sub">
          Tell us where you are and where you want to be. We'll show you how to turn your story into audience,
          authority, and revenue.
        </p>
      </section>

      {/* FORM + INFO */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap-wide">
          <div className="contact-grid">
            {/* FORM */}
            <div className="form-card">
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="form-row">
                  <div className="field">
                    <label>Full Name</label>
                    <input name="from_name" type="text" placeholder="Your name" required />
                  </div>
                  <div className="field">
                    <label>Email Address</label>
                    <input name="reply_to" type="email" placeholder="you@email.com" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="field">
                    <label>Company (optional)</label>
                    <input name="company" type="text" placeholder="Company name" />
                  </div>
                  <div className="field">
                    <label>I'm Interested In</label>
                    <select name="service_type" defaultValue="" required>
                      <option value="" disabled>Select an option</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label>Your Goals</label>
                  <textarea name="message" placeholder="Briefly describe what you're looking to achieve…" required />
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? "Sending…" : "Send Message"}
                </button>
              </form>
            </div>

            {/* INFO */}
            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon"><Mail size={20} strokeWidth={1.6} /></div>
                <div>
                  <div className="info-label">Email</div>
                  <a className="info-val" href="mailto:hello@jaliafriq.com">hello@jaliafriq.com</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Phone size={20} strokeWidth={1.6} /></div>
                <div>
                  <div className="info-label">Phone</div>
                  <a className="info-val" href="tel:+447549561046">+44 7549 561046</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Globe size={20} strokeWidth={1.6} /></div>
                <div>
                  <div className="info-label">Presence</div>
                  <div className="info-val">Lagos · London · Global</div>
                </div>
              </div>

              <div className="serious-card">
                <h4>Serious Inquiries Only</h4>
                <p>
                  We specialise in high-stakes brand relevance. If you're ready to scale trust and turn your
                  story into revenue, we're ready to talk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </JaliLayout>
  );
};

export default JaliContact;
