import React, { useRef, useState } from "react";
import { SendHorizonal, CheckCircle } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const senderNameRef = useRef("");
  const senderEmailRef = useRef("");
  const messageRef = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailBody = {
      subject: `antdoan - Message from ${senderNameRef.current.value} (${senderEmailRef.current.value})`,
      text: messageRef.current.value,
    };
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailBody),
      });
      setSent(true);
    } catch (err) {
      console.error("Failed to send message");
    }
  };

  return (
    <section className="bg-neutral-50 py-24 px-4 min-h-screen font-sans">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-serif mb-4">Let&apos;s Connect</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-10">
          Interested in working together or have a question? Send me a message.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 px-6 py-8 shadow-md space-y-6 text-left"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              ref={senderNameRef}
              placeholder="Your Name"
              className="w-full bg-white border border-gray-300 px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-black"
              required
            />
            <input
              type="email"
              ref={senderEmailRef}
              placeholder="Your Email"
              className="w-full bg-white border border-gray-300 px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-black"
              required
            />
          </div>
          <textarea
            ref={messageRef}
            placeholder="Your Message"
            rows="6"
            className="w-full bg-white border border-gray-300 px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-black"
            required
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-3 uppercase tracking-wider text-sm hover:bg-neutral-800 transition-all flex items-center justify-center gap-2"
          >
            Send Message <SendHorizonal className="w-4 h-4" />
          </button>

          {sent && (
            <p className="flex items-center gap-2 text-green-600 italic text-sm pt-2">
              <CheckCircle className="w-4 h-4" />
              Your message has been sent. I&apos;ll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
