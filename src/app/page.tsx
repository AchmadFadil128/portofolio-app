// src/app/page.tsx
import Image from "next/image";

// src/app/page.tsx
export const metadata = {
  title: "Achmad Fadil | Fullstack Developer",
  description: "Portofolio dan projek dari Achmad Fadil Nur Ramdhani, siswa SIJA yang ingin jadi fullstack developer.",
  keywords: ["Achmad Fadil","Achmad Fadil Nur Ramdhani","Portofolio", "Fullstack Developer", "SIJA", "Projek Sekolah","SMK Negeri 1 Cimahi"],
  openGraph: {
    title: "Achmad Fadil | Fullstack Developer",
    description: "Projek dan karya Achmad Fadil dari Cimahi.",
    url: "https://achmadfadil128.my.id",
    siteName: "Portofolio Achmad Fadil",
    images: [
      {
        url: "/profilefoto.jpg", // sediakan gambar ini
        width: 1200,
        height: 630,
        alt: "Preview Portofolio Achmad Fadil",
      },
    ],
    type: "website",
  },
};


export default function HomePage() {
  return (
    <main className="bg-gray-900 text-gray-100 min-h-screen p-8">

      <div className="max-w-7xl mx-auto grid grid-cols-4 auto-rows-[minmax(200px,auto)] gap-6">
        {/* Profile Section */}
        <a
          href="/profile"
          className="col-span-2 row-span-2 bg-gray-800 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="h-full flex flex-col justify-between">
            <div className="mb-4">
              <Image
                src="/profilefoto.jpg"
                alt="Foto Profil"
                width={300} // bisa kamu sesuaikan
                height={300}
                className="w-70 h-70 rounded-full object-cover mb-4 border-4 border-gray-700"
              />
              <h2 className="text-2xl font-semibold">Achmad Fadil Nur Ramdhani</h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Siswa biasa SIJA yang ingin menjadi fullstack developer
            </p>
          </div>
        </a>


        {/* Quotes */}
        <div className="col-span-2 bg-gray-800 rounded-2xl p-6">
          <blockquote className="text-gray-300 italic text-xl mb-4">
            &ldquo;Al-Quran adalah alasan saya agar tidak stress saat debugging&rdquo;
          </blockquote>
          <blockquote className="text-gray-300 italic text-lg mb-4">
            &ldquo;Ingatlah, hanya dengan mengingat Allah hati menjadi
            tenteram.&rdquo;
            <br />
            <span className="text-gray-500 text-sm">– QS Ar-Ra&apos;d: 28</span>
          </blockquote>
          <p className="text-gray-400 font-medium">Achmad Fadil Nur Ramdhani</p>
        </div>

        {/* Services */}
        <a
          href="/skills"
          className="bg-gray-800 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="h-full flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <h3 className="text-xl font-semibold mb-2">IT Support</h3>
            <h3 className="text-xl font-semibold mb-2">MC</h3>
          </div>
        </a>

        {/* Project Showcase */}
        <a
          href="/ongoing-projects"
          className="row-span-2 bg-gray-700 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="h-full flex flex-col justify-between">
            <h3 className="text-2xl font-semibold mb-4">Forum Kesiswaan</h3>
            
            {/* Gambar proyek */}
            <Image
              src="/forum-kesiswaan.jpg"
              alt="Tampilan Forum Kesiswaan"
              width={300} // bisa kamu sesuaikan
              height={300}
              className="w-full h-full object-cover rounded-lg mb-4 border-2 border-gray-600"
            />

            <p className="text-gray-400 text-lg leading-relaxed">
              Membantu Kesiswaan di sekolah-sekolah Kota Cimahi dalam pengelolaan dokumentasi kegiatan.
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
            <p className="text-gray-400">Let&apos;s collaborate</p>
          </div>
        </a>

        {/* Stats */}

        <a
          href="/projects"
          className="col-span-2 bg-gray-800 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="h-full flex flex-col justify-between">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2 mt-5">150+</div>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          </div>
        </a>
      </div>
    </main>
  );
}
