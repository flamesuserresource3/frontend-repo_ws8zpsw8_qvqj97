import { User, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white py-16 text-slate-800">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <User className="h-5 w-5 text-blue-600" />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Tentang Saya</h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-4xl font-bold text-white shadow-lg md:mx-0">
              AD
            </div>
          </div>

          <div className="md:col-span-2 space-y-5 leading-relaxed">
            <p>
              Saya adalah seorang ekonom dengan pengalaman dalam riset kebijakan publik, perumusan rekomendasi berbasis bukti,
              serta komunikasi hasil analisis kepada publik dan pemangku kepentingan. Fokus saya meliputi pembangunan ekonomi,
              transformasi digital sektor publik, dan tata kelola kebijakan yang adaptif.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 p-5 shadow-sm">
                <div className="mb-2 flex items-center gap-2 text-slate-700">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-semibold">Latar Belakang</span>
                </div>
                <ul className="list-inside list-disc text-sm text-slate-600">
                  <li>Ekonomi & Kebijakan Publik</li>
                  <li>Metodologi kuantitatif & kualitatif</li>
                  <li>Komunikasi kebijakan untuk publik</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 p-5 shadow-sm">
                <div className="mb-2 flex items-center gap-2 text-slate-700">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-semibold">Nilai & Pendekatan</span>
                </div>
                <ul className="list-inside list-disc text-sm text-slate-600">
                  <li>Berbasis data dan bukti</li>
                  <li>Transparan, akuntabel, berorientasi hasil</li>
                  <li>Kolaboratif lintas sektor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
