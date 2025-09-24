import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "ydapo50@gmail.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-tr from-pink-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Send me a message and let's discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-fadeInLeft">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Let's Connect
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm always interested in new opportunities, interesting projects,
              and meeting fellow developers. Whether you have a question or just
              want to say hi, feel free to reach out!
            </p>

            {/* Animated Contact Methods */}
            <div className="space-y-6">
              <div className="group flex items-center p-4 bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <FaEnvelope className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a
                    href="mailto:ydapo50@gmail.com"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    ydapo50@gmail.com
                  </a>
                </div>
              </div>

              <div className="group flex items-center p-4 bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <FaGithub className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">GitHub</p>
                  <a
                    href="https://github.com/oladapo-cyber/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    github.com/oladapo-cyber
                  </a>
                </div>
              </div>

              <div className="group flex items-center p-4 bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <FaLinkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/oladapo-yinusa-26615b33a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    linkedin.com/in/oladapo-yinusa
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form now with glass */}
          <div className="animate-fadeInRight">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 bg-white/40 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:bg-white/70"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:bg-white/70"
                  placeholder="youremail@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:bg-white/70 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-400/20 backdrop-blur-sm border border-green-400/30 text-green-700 rounded-xl animate-fadeInUp">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-400/20 backdrop-blur-sm border border-red-400/30 text-red-700 rounded-xl animate-fadeInUp">
                  Sorry, there was an error sending your message. Please try
                  again or email me directly.
                </div>
              )}

              {/* Submit Button with glass */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group w-full font-medium py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center overflow-hidden relative ${
                  isSubmitting
                    ? "bg-gray-400/50 backdrop-blur-sm cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm hover:from-blue-700/90 hover:to-purple-700/90 text-white shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/20 to-blue-400/0 -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                <div className="relative flex items-center">
                  <FaPaperPlane
                    className={`mr-2 ${
                      !isSubmitting && "group-hover:rotate-12"
                    } transition-transform duration-300`}
                  />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </div>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/20 text-center animate-fadeInUp">
          <p className="text-gray-600">© Daps inc | All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
