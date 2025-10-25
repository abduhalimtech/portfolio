"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">abduhalim</h3>
            <p className="text-sm text-muted-foreground">
              Laravel Backend Developer building scalable systems and real-time applications.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-sky-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-sky-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-sky-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://github.com/abduhalimtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/abduhalimdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/abduhalim5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a href="mailto:abduhalimdev@gmail.com" className="hover:text-sky-400 transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Abduhalim Abdulhamidov. All rights reserved.</p>
          <p>Designed & Built with Next.js and TailwindCSS</p>
        </div>
      </div>
    </footer>
  )
}
