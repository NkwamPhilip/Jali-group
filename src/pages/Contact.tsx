import { useState, useRef, useEffect } from "react";
import { Mail, MessageSquare, Globe, Sparkles, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";
import CustomButton from "@/components/ui/CustomButton";
import SEOHead from "@/components/ui/SEOHead";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Initialize EmailJS with your Public Key
  useEffect(() => {
    emailjs.init("myEjwOlLjAuFtcsoG");
  }, []);

  const pillButtonStyle = "w-full bg-white text-black rounded-full py-8 font-black text-[11px] uppercase tracking-[0.3em] transition-all duration-500 hover:bg-white/90 hover:scale-[1.02] shadow-[0_0_40px_rgba(255,255,255,0.1)]";
  const glassInput = "w-full px-8 py-5 bg-white/[0.02] border border-white/5 rounded-[2rem] focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all text-white placeholder:text-white/10 text-sm font-light tracking-wide";

  const services = [
    "FounderSignal Management",
    "Brand Relevance Stack",
    "Public Speaking",
    "Corporate Workshop",
  ];

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Audio Feedback Logic
    const playSuccessSound = () => {
      const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2358/2358-preview.mp3");
      audio.volume = 0.2;
      audio.play().catch(() => console.log("Audio play blocked"));
    };

    const SERVICE_ID = "service_3aqdc3g";
    const TEMPLATE_ID = "template_hq7kir4";
    const PUBLIC_KEY = "myEjwOlLjAuFtcsoG";

    try {
      if (formRef.current) {
        const result = await emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          formRef.current,
          PUBLIC_KEY
        );

        if (result.status === 200) {
          // --- HAPTIC & AUDIO FEEDBACK ---
          if ("vibrate" in navigator) {
            navigator.vibrate([30, 50, 30]); // Subtle double-tap pulse
          }
          playSuccessSound();

          toast({
            title: "TRANSMISSION SUCCESSFUL",
            description: "Your inquiry has been logged. Jali's team will contact you shortly."
          });
          
          formRef.current.reset();
        }
      }
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      
      // Error vibration (one long pulse)
      if ("vibrate" in navigator) navigator.vibrate(200);

      toast({
        variant: "destructive",
        title: "CONNECTION ERROR",
        description: error?.text || "System failed to transmit. Please email Jaliafriq@gmail.com directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEOHead title="Contact - Victor Okafo | Jali Group" />

      {/* Hero Section */}
      <Section variant="dark" className="relative pt-32 pb-20 overflow-hidden bg-[#020202]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
          <h2 className="text-[20vw] font-black uppercase tracking-tighter">Inquiry</h2>
        </div>

        <div className="text-center max-w-5xl mx-auto relative z-10 px-6">
          <ScrollReveal variant="fade">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full mb-10">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              <span className="text-white/40 font-black tracking-[0.4em] uppercase text-[9px]">Direct Access</span>
            </div>
            <h1 className="text-6xl md:text-[7rem] font-bold text-white mb-10 tracking-tighter leading-[0.85] uppercase">
              Start a <br />
              <span className="italic font-light text-white/10 lowercase">Conversation</span>
            </h1>
          </ScrollReveal>
        </div>
      </Section>

      {/* Main Form Section */}
      <Section variant="dark" className="bg-[#020202] pt-0 pb-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-20">

          <ScrollReveal variant="slideUp">
            <div className="bg-white/[0.01] border border-white/5 backdrop-blur-3xl rounded-[3.5rem] p-10 md:p-16">
              <h2 className="text-3xl font-black text-white mb-12 tracking-tighter uppercase">Inquiry Dossier</h2>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.3em] text-white/20 ml-4 font-black">Identify Yourself</label>
                    <input name="from_name" type="text" placeholder="Full Name" className={glassInput} required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.3em] text-white/20 ml-4 font-black">Return Path</label>
                    <input name="reply_to" type="email" placeholder="Email Address" className={glassInput} required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.3em] text-white/20 ml-4 font-black">Organization</label>
                    <input name="company" type="text" placeholder="Company Name" className={glassInput} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.3em] text-white/20 ml-4 font-black">Interest</label>
                    <select name="service_type" className={`${glassInput} appearance-none cursor-pointer`} required>
                      <option value="" className="bg-black text-white/40">Select Pillar</option>
                      {services.map(s => <option key={s} value={s} className="bg-black text-white">{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.3em] text-white/20 ml-4 font-black">Objectives</label>
                  <textarea name="message" placeholder="Briefly describe your goals..." rows={6} className={`${glassInput} resize-none`} required />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={pillButtonStyle}
                  >
                    {isSubmitting ? "TRANSMITTING..." : "SUBMIT INQUIRY"}
                  </button>
                </div>
              </form>
            </div>
          </ScrollReveal>

          <div className="space-y-16">
            <div className="space-y-12">
              {[
                { icon: Mail, label: "Correspondence", val: "Jaliafriq@gmail.com" },
                { icon: Globe, label: "Presence", val: "Operating Globally" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-8 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-black">
                    <item.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 mb-2">{item.label}</p>
                    <p className="text-xl text-white font-light tracking-tight">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white text-black rounded-[3rem] p-12 relative overflow-hidden group">
              <Sparkles size={24} className="mb-6" />
              <h4 className="font-black text-2xl tracking-tighter uppercase mb-2">Serious Inquiries Only</h4>
              <p className="text-black/60 text-sm font-medium leading-relaxed">
                We specialize in high-stakes brand relevance. If you're ready to scale trust, we're ready to talk.
              </p>
              {/* Visual Decorative Layer */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-black/[0.03] rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;