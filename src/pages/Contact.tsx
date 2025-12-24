import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  ArrowRight,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";
import CustomButton from "@/components/ui/CustomButton";
import SEOHead from "@/components/ui/SEOHead";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const services = [
    "Public Speaking Engagement",
    "Business Growth Consulting",
    "1:1 Coaching",
    "Online Course Inquiry",
    "Custom Workshop",
    "Other",
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@jaliafrica.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+234 123 456 7890",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Lagos, Nigeria",
      description: "Available for global engagements",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Contact Jali Africa - Book Speaking Engagements & Consulting"
        description="Get in touch with Jali Africa for public speaking engagements, business consulting, or course inquiries. We respond within 24 hours."
        keywords="contact jali africa, book speaker, business consulting inquiry, storytelling expert contact, victor okafor contact"
      />

      <Section variant="hero" spacing="large">
        <div className="text-center animate-fadeIn">
          <span className="text-small uppercase tracking-widest text-muted-foreground mb-4 block">
            Get In Touch
          </span>
          <h1 className="text-hero mb-6 animate-slideUp">
            Let's Start a
            <br />
            <span className="italic">Conversation</span>
          </h1>
          <p className="text-subhead text-muted-foreground max-w-3xl mx-auto animate-slideUp">
            Ready to transform your story? Let's discuss how we can help you
            achieve your goals through our speaking, consulting, and educational
            services.
          </p>
        </div>
      </Section>

      <Section variant="dark" spacing="normal">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="animate-slideUp">
            <h2 className="text-display mb-6">Send Us a Message</h2>
            <p className="text-body text-muted-foreground mb-8">
              Fill out the form below and we'll get back to you within 24 hours.
              For urgent matters, feel free to call us directly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2"
                  >
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium mb-2"
                  >
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-vertical"
                  placeholder="Tell us about your project, event, or how we can help you..."
                />
              </div>

              <CustomButton
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                icon={isSubmitting ? Clock : Send}
                iconPosition="right"
                className="w-full"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </CustomButton>
            </form>
          </div>

          {/* Contact Information */}
          <div className="animate-scaleIn">
            <h2 className="text-display mb-6">Get In Touch</h2>
            <p className="text-body text-muted-foreground mb-8">
              Prefer to reach out directly? Here are the best ways to contact
              us.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="card-minimal">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-lg font-medium mb-1">{info.details}</p>
                      <p className="text-small text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-minimal mt-8">
              <div className="flex items-center">
                <CheckCircle size={24} className="text-foreground mr-3" />
                <div>
                  <h4 className="font-semibold">Quick Response Time</h4>
                  <p className="text-small text-muted-foreground">
                    We typically respond within 24 hours on business days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section spacing="normal">
        <div className="text-center mb-16">
          <h2 className="text-display mb-6 animate-slideUp">
            Frequently Asked Questions
          </h2>
          <p className="text-subhead text-muted-foreground max-w-2xl mx-auto animate-slideUp">
            Quick answers to common questions about our services and process.
          </p>
        </div>

        <div className="content-width space-y-6">
          {[
            {
              question:
                "How far in advance should I book a speaking engagement?",
              answer:
                "We recommend booking at least 2-3 months in advance to ensure availability, especially for keynote presentations. However, we can sometimes accommodate shorter notice for the right opportunity.",
            },
            {
              question: "Do you provide consulting services internationally?",
              answer:
                "Yes, we work with clients globally. We offer virtual consulting sessions and can travel internationally for speaking engagements and workshops, subject to availability and terms.",
            },
            {
              question: "What's included in your consulting packages?",
              answer:
                "Our consulting packages are customized based on your needs but typically include strategy development, implementation support, progress tracking, and ongoing communication. We'll discuss specifics during our discovery call.",
            },
            {
              question:
                "Can I get a custom course developed for my organization?",
              answer:
                "Absolutely! We create custom training programs and workshops tailored to your organization's specific needs, culture, and goals. Contact us to discuss your requirements.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="card-minimal animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-semibold mb-3">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="dark" spacing="normal" className="text-center">
        <div className="content-width animate-scaleIn">
          <h2 className="text-display mb-6">Ready to Transform Your Story?</h2>
          <p className="text-subhead text-muted-foreground mb-8">
            Whether you need a speaker for your next event or want to grow your
            business, we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton
              variant="primary"
              size="lg"
              href="/services"
              icon={ArrowRight}
              iconPosition="right"
            >
              View Our Services
            </CustomButton>
            <CustomButton variant="secondary" size="lg" href="/courses">
              Browse Courses
            </CustomButton>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
