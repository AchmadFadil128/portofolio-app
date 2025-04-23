// src/app/page.tsx

export const metadata = {
  title: 'Profile Achmad Fadil Nur Ramdhani',
};

export default function HomePage() {
  return (
    <main className="bg-gray-900 text-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Achmad Fadil Nur Ramdhani
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-4 auto-rows-[minmax(200px,auto)] gap-6">
        {/* Profile Section */}
        <a
          href="/profile"
          className="col-span-2 row-span-2 bg-gray-800 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="h-full flex flex-col justify-between">
            <h2 className="text-2xl font-semibold mb-4">Jennifer Chuks</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Transform complex brand challenges into intuitive digital
              experiences
            </p>
          </div>
        </a>

        {/* Testimonial */}
        <div className="col-span-2 bg-gray-800 rounded-2xl p-6">
          <blockquote className="text-gray-300 italic text-xl mb-4">
            "Jennifer's work is exceptional - she combines efficiency with
            creative problem solving"
          </blockquote>
          <p className="text-gray-400 font-medium">
            Patrick Duru
            <br />
            <span className="text-gray-500 text-sm">CEO ©Meritox</span>
          </p>
        </div>

        {/* Services */}
        <a
          href="/services"
          className="bg-gray-800 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="h-full flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-2">U/LIX Design</h3>
            <p className="text-gray-400">User-centered interface solutions</p>
          </div>
        </a>

        {/* Project Showcase */}
        <a
          href="/projects"
          className="row-span-2 bg-gray-700 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="h-full flex flex-col justify-between">
            <h3 className="text-2xl font-semibold mb-4">
              Food Delivery Ecosystem
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Revolutionizing last-mile delivery through intuitive interface
              design
            </p>
          </div>
        </a>

        {/* Contact */}
        <a
          href="#contact"
          className="bg-gray-800 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="h-full flex flex-col justify-between">
            <h3 className="text-xl font-semibold">Contact</h3>
            <p className="text-gray-400">Let's collaborate</p>
          </div>
        </a>

        {/* Stats */}
        <div className="col-span-2 bg-gray-800 rounded-2xl p-6 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">150+</div>
            <p className="text-gray-400">Projects Completed</p>
          </div>
        </div>
      </div>
    </main>
  );
}
