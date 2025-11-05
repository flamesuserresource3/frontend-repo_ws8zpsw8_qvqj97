import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] md:h-screen w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/70 via-slate-950/30 to-slate-950/70" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <span className="mb-4 inline-flex items-center rounded-full bg-blue-600/10 px-3 py-1 text-xs font-medium text-blue-300 ring-1 ring-inset ring-blue-500/30">
          Ekonom & Analis Kebijakan Publik
        </span>
        <h1 className="text-3xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          Andra Dp
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
          “Menerjemahkan Data dan Kebijakan menjadi Dampak Nyata.” Saya fokus pada analisis kebijakan publik,
          pembangunan ekonomi, dan transformasi digital sektor publik—menghubungkan temuan riset dengan
          keputusan strategis yang berdampak.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#portfolio" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950">
            Lihat Portofolio
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-slate-950">
            Hubungi Saya
          </a>
        </div>

        <blockquote className="mt-8 max-w-xl border-l-2 border-blue-400/50 pl-4 text-sm text-blue-100">
          “Tujuan kebijakan publik adalah membuat pilihan yang lebih baik, bukan sekadar melakukan lebih banyak.”
        </blockquote>
      </div>
    </section>
  );
}
