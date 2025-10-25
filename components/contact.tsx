"use client";

import { Mail, Github, Linkedin, Send } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">Get In Touch</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full" />
        </div>

        {/* Contact Info only — no form */}
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Channels</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="mailto:abduhalimdev@gmail.com"
                className="flex items-center gap-3 rounded-lg border border-border bg-background p-4 hover:border-sky-400 hover:bg-sky-400/5 transition-colors"
              >
                <Mail size={20} className="text-sky-400" />
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <div className="text-sm text-muted-foreground">abduhalimdev@gmail.com</div>
                </div>
              </a>
              <a
                href="https://t.me/abduhalim5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border bg-background p-4 hover:border-sky-400 hover:bg-sky-400/5 transition-colors"
              >
                <FaTelegramPlane size={20} className="text-sky-400" />
                <div>
                  <div className="text-sm font-medium">Telegram DM</div>
                  <div className="text-sm text-muted-foreground">@abduhalim5</div>
                </div>
              </a>

              <a
                href="https://github.com/abduhalimtech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border bg-background p-4 hover:border-sky-400 hover:bg-sky-400/5 transition-colors"
              >
                <Github size={20} className="text-sky-400" />
                <div>
                  <div className="text-sm font-medium">GitHub</div>
                  <div className="text-sm text-muted-foreground">github.com/abduhalimtech</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/abduhalimdev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border bg-background p-4 hover:border-sky-400 hover:bg-sky-400/5 transition-colors"
              >
                <Linkedin size={20} className="text-sky-400" />
                <div>
                  <div className="text-sm font-medium">LinkedIn</div>
                  <div className="text-sm text-muted-foreground">linkedin.com/in/abduhalimdev</div>
                </div>
              </a>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-sky-400/5 border border-sky-400/20">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Prefer quick chat? Telegram DM is fastest. For formal inquiries, email works best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
