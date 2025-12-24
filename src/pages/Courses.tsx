import { BookOpen, Clock, Users, Star, Play, Download, ArrowRight, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";
import CustomButton from "@/components/ui/CustomButton";
import SEOHead from "@/components/ui/SEOHead";

const Courses = () => {
  const courses = [
    {
      id: "story-training",
      title: "Story Training (One-on-One)",
      description: "Master the art of storytelling for personal and professional transformation through personalized coaching.",
      price: "$1,997",
      duration: "8 weeks",
      students: "200+",
      rating: 4.9,
      features: [
        "8 one-on-one coaching sessions",
        "Personalized story development framework",
        "Public speaking practice and feedback",
        "Brand storytelling strategy",
        "Lifetime access to resources",
        "Direct access to Victor Okafor"
      ],
      category: "Premium Coaching"
    },
    {
      id: "public-speaking",
      title: "Public Speaking Mastery Course",
      description: "Overcome fear and master the art of public speaking with confidence and authenticity.",
      price: "$497",
      duration: "6 weeks",
      students: "1,500+",
      rating: 4.8,
      features: [
        "Comprehensive video modules",
        "Weekly live Q&A sessions",
        "Practice exercises and assignments",
        "Confidence building techniques",
        "Community support group",
        "Certificate of completion"
      ],
      category: "Self-Paced Course"
    },
    {
      id: "business-marketing",
      title: "Finding Story X (Business Marketing)",
      description: "Discover your brand's unique story and use it to drive marketing success and business growth.",
      price: "$897",
      duration: "10 weeks",
      students: "800+",
      rating: 4.9,
      features: [
        "Story-driven marketing framework",
        "Brand positioning strategies",
        "Content creation templates",
        "Case study analysis",
        "Marketing campaign planning",
        "Ongoing community access"
      ],
      category: "Business Course"
    },
    {
      id: "founder-x",
      title: "Founder X (Lead Your Industry)",
      description: "Transform into an industry leader through strategic positioning, thought leadership, and influence building.",
      price: "$2,997",
      duration: "12 weeks",
      students: "300+",
      rating: 5.0,
      features: [
        "Industry leadership framework",
        "Thought leadership content strategy",
        "Personal brand development",
        "Network building strategies",
        "Monthly mastermind calls",
        "1:1 strategy session with Victor"
      ],
      category: "Premium Program"
    }
  ];

  const benefits = [
    {
      icon: Play,
      title: "Self-Paced Learning",
      description: "Learn at your own pace with lifetime access to all course materials and updates."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a vibrant community of learners and get support from peers and instructors."
    },
    {
      icon: Download,
      title: "Practical Resources",
      description: "Get templates, worksheets, and tools you can immediately apply to your situation."
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Online Courses - Transform Your Story & Business | Jali Africa"
        description="Master storytelling, public speaking, and business growth with Jali Africa's transformational online courses. From beginner to expert level programs available."
        keywords="online courses, storytelling course, public speaking training, business marketing course, founder program, leadership development"
      />

      <Section variant="hero" spacing="large">
        <div className="text-center animate-fadeIn">
          <span className="text-small uppercase tracking-widest text-muted-foreground mb-4 block">
            Online Courses
          </span>
          <h1 className="text-hero mb-6 animate-slideUp">
            Transform Your
            <br />
            <span className="italic">Story</span>
          </h1>
          <p className="text-subhead text-muted-foreground max-w-3xl mx-auto animate-slideUp">
            Comprehensive learning experiences that transform mindsets and build practical skills 
            for personal and professional growth.
          </p>
        </div>
      </Section>

      <Section variant="dark" spacing="normal">
        <div className="text-center mb-16">
          <h2 className="text-display mb-6 animate-slideUp">
            Why Choose Our Courses?
          </h2>
          <p className="text-subhead text-muted-foreground max-w-3xl mx-auto animate-slideUp">
            Our courses combine proven frameworks with practical application to deliver real results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="text-center animate-fadeIn" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="card-feature">
                <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-headline mb-4">{benefit.title}</h3>
                <p className="text-body text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Courses Section */}
      <Section spacing="normal">
        <div className="text-center mb-16">
          <h2 className="text-display mb-6 animate-slideUp">
            Our Course Catalog
          </h2>
          <p className="text-subhead text-muted-foreground max-w-3xl mx-auto animate-slideUp">
            From storytelling fundamentals to advanced leadership programs, 
            find the perfect course for your growth journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div key={course.id} className="card-feature animate-fadeIn" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-small text-muted-foreground uppercase tracking-wide">
                    {course.category}
                  </span>
                  <h3 className="text-headline mt-1 mb-2">{course.title}</h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{course.price}</div>
                </div>
              </div>

              <p className="text-body text-muted-foreground mb-6">{course.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div className="bg-surface rounded-lg p-3">
                  <Clock size={20} className="mx-auto mb-1 text-muted-foreground" />
                  <div className="text-small font-medium">{course.duration}</div>
                </div>
                <div className="bg-surface rounded-lg p-3">
                  <Users size={20} className="mx-auto mb-1 text-muted-foreground" />
                  <div className="text-small font-medium">{course.students}</div>
                </div>
                <div className="bg-surface rounded-lg p-3">
                  <Star size={20} className="mx-auto mb-1 text-muted-foreground" />
                  <div className="text-small font-medium">{course.rating}/5</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={16} className="text-foreground mr-2 mt-1 flex-shrink-0" />
                      <span className="text-small text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <CustomButton 
                  variant="primary"
                  href="/contact"
                  className="flex-1"
                >
                  Enroll Now
                </CustomButton>
                <CustomButton 
                  variant="secondary"
                  href="/contact"
                  className="flex-1"
                >
                  Learn More
                </CustomButton>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section variant="dark" spacing="normal">
        <div className="text-center mb-16">
          <h2 className="text-display mb-6 animate-slideUp">
            What Our Students Say
          </h2>
          <p className="text-subhead text-muted-foreground max-w-2xl mx-auto animate-slideUp">
            Real transformations from real people who've taken our courses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="card-feature animate-fadeIn">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-surface rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold">Student Name</div>
                  <div className="text-small text-muted-foreground">Course Graduate</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="text-foreground fill-current" />
                ))}
              </div>
              <p className="text-body text-muted-foreground">
                "This course completely transformed how I approach storytelling in my business. 
                The results have been incredible."
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section spacing="normal" className="text-center">
        <div className="content-width animate-scaleIn">
          <h2 className="text-display mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-subhead text-muted-foreground mb-8">
            Join thousands of students who have transformed their lives and businesses through our courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton 
              variant="primary" 
              size="lg"
              href="/contact"
              icon={ArrowRight}
              iconPosition="right"
            >
              Browse All Courses
            </CustomButton>
            <CustomButton 
              variant="secondary" 
              size="lg"
              href="/contact"
            >
              Get Course Recommendations
            </CustomButton>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Courses;