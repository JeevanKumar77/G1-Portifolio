
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        "service_eyrqt8e", // Service ID
        "template_c3s5po5", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "-OG5vAZA9GSbpVISj" // Public Key
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "nanijeevan552@gmail.com",
      link: "mailto:nanijeevan552@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+91 79939 83603",
      link: "tel:+917993983603",
    },
    {
      icon: <Github className="w-5 h-5" />,
      title: "GitHub",
      value: "github.com/JeevanKumar77",
      link: "https://github.com/JeevanKumar77",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: "LinkedIn",
      value: "jeevan-kumar-chippala",
      link: "https://linkedin.com/in/jeevan-kumar-chippala-0ba246357",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-6">
            Feel free to reach out to me for collaborations, projects, or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card border border-teal-900/50 hover:border-teal-500 transition-all duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-md bg-teal-500/20 text-teal-400">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">{item.title}</h4>
                    <p className="text-base font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
              
              <Card className="border-teal-900/50 bg-teal-500/5 mt-10">
                <CardContent className="p-6">
                  <h4 className="font-medium mb-2">Need a talented developer?</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    I'm currently available for freelance work and collaborations.
                  </p>
                  <Button className="btn btn-primary group w-full">
                    Hire Me
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <Card className="bg-card border border-teal-900/50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      className="bg-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={5}
                      required
                      className="bg-background"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
