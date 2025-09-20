// src/components/ui/HomePage/Footer/Footer.jsx

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 px-6 flex flex-col items-center border-t border-gray-700">
      <div className="w-full max-w-5xl flex justify-between items-center flex-wrap gap-4">
        <p className="text-sm text-gray-400">
          © {currentYear} /{" "}
          <span className="text-white font-medium">Your Name</span> / Build your portfolio with{" "}
          <a
            href="https://once-ui.com/templates/magic-portfolio"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Once UI
          </a>
        </p>

        <div className="flex gap-4">
          {/* Example social icons */}
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.svg" alt="GitHub" className="w-5 h-5" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/twitter.svg" alt="Twitter" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
