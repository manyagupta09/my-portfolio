import { RevealOnScroll } from "../RevealOnScroll";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-0">
        <div className="border-t-1 m-6 text-white/10 shadow-lg"></div>
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4 px-4">
        {/* Copyright */}
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Manya Gupta. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/manyagupta09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/manya-gupta-b9448322a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:gmanya024@gmail.com"
            className="hover:text-blue-500 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};


