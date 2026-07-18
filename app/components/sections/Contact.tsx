"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import SectionContainer from "../layout/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import { socials } from "../../data/socials";
import {
  cardVariants,
  fadeInLeftVariants,
  fadeInRightVariants,
  gridVariants,
  headerVariants,
  viewport,
} from "../../lib/motion";

const contactInfo = {
  email: "prabodaharshani94@gmail.com",
  phone: "+94 70 584 5755",
  location: "Colombo, Sri Lanka",
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: contactInfo.location,
  },
];

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status === "error" || status === "sent") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("sent");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send message."
      );
    }
  }

  return (
    <section id="contact" className="py-24">
      <SectionContainer>
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <SectionHeader
            title="Contact Me"
            description="Have a question or want to work together? Send me a message and I&apos;ll get back to you as soon as possible."
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch mt-12 md:mt-16">
          <motion.div
            className="flex flex-col justify-between gap-5 h-full"
            variants={fadeInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div
              className="flex flex-col justify-between gap-5 flex-1"
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {contactDetails.map((item) => {
                const Icon = item.icon;
                const content = (
                  <motion.div
                    variants={cardVariants}
                    whileHover={{ y: -2 }}
                    className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl border border-[#00df82]/10 bg-[#0a1530] hover:border-[#00df82]/30 transition-colors min-w-0"
                  >
                    <span className="shrink-0 w-11 h-11 rounded-full border border-[#00df82]/30 flex items-center justify-center text-[#00df82]">
                      <Icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[var(--muted)] text-sm mb-1">{item.label}</p>
                      <p className="text-white font-medium break-words">{item.value}</p>
                    </div>
                  </motion.div>
                );

                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00df82] rounded-2xl"
                    >
                      {content}
                    </a>
                  );
                }

                return <div key={item.label}>{content}</div>;
              })}
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="p-5 sm:p-6 rounded-2xl border border-[#00df82]/10 bg-[#0a1530]"
            >
              <p className="text-[var(--muted)] text-sm mb-4">Social Media</p>
              <div className="flex flex-wrap items-center gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      whileHover={{ scale: 1.12, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 rounded-full border border-[#00df82] flex items-center justify-center text-[#00df82] hover:bg-[#00df82] hover:text-[#010a1f] btn-glow transition-colors duration-300"
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            variants={fadeInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="h-full flex flex-col p-6 sm:p-8 rounded-2xl border border-[#00df82]/10 bg-[#0a1530] space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-md font-medium text-white mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-[#00df82]/20 bg-[#010a1f] px-4 py-3 text-white placeholder:text-[var(--muted)]/60 focus:outline-none focus:border-[#00df82] transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-md font-medium text-white mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-[#00df82]/20 bg-[#010a1f] px-4 py-3 text-white placeholder:text-[var(--muted)]/60 focus:outline-none focus:border-[#00df82] transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-md font-medium text-white mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={form.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                className="w-full rounded-xl border border-[#00df82]/20 bg-[#010a1f] px-4 py-3 text-white placeholder:text-[var(--muted)]/60 focus:outline-none focus:border-[#00df82] transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                  className="block text-md font-medium text-white mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full resize-y rounded-xl border border-[#00df82]/20 bg-[#010a1f] px-4 py-3 text-white placeholder:text-[var(--muted)]/60 focus:outline-none focus:border-[#00df82] transition-colors"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={status === "sending" ? undefined : { scale: 1.03 }}
              whileTap={status === "sending" ? undefined : { scale: 0.97 }}
              className="cursor-pointer group inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#00df82] text-[#010a1f] font-semibold px-8 py-3 rounded-full transition-colors duration-300 hover:bg-[#00df82]/90 btn-glow btn-glow-solid disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
              {status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>

            {status === "sent" && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[#00df82] text-sm"
              >
                Message sent successfully. I&apos;ll get back to you soon.
              </motion.p>
            )}

            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm"
              >
                {errorMessage} You can also email me at {contactInfo.email}.
              </motion.p>
            )}
          </motion.form>
        </div>
      </SectionContainer>
    </section>
  );
}
