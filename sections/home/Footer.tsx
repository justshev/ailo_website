import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer text-gray-300 py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-medium mb-6">Structure</h3>
            <div className="space-y-3">
              <Link
                href="/about"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                About us
              </Link>
              <Link
                href="/projects"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Projects
              </Link>
              <Link
                href="/publications"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Publications
              </Link>
            </div>
          </div>

          {/* Social Section */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-medium mb-6">Social</h3>
            <div className="space-y-3">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Twitter/X
              </Link>
            </div>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-medium mb-6"> Company</h3>
            <div className="space-y-3">
              <Link
                href="/about#roadmap"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Roadmap
              </Link>
              <Link
                href="/about#maps"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Locations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
