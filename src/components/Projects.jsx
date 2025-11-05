import { BarChart, Users, Globe } from 'lucide-react';

const items = [
  {
    icon: BarChart,
    title: 'Evaluasi Dampak Program Bantuan Sosial',
    summary:
      'Analisis kuasi-eksperimental terhadap efektivitas program dalam mengurangi kemiskinan dan ketimpangan.',
    tags: ['Evaluasi Kebijakan', 'Ekonometrika', 'Ketimpangan'],
  },
  {
    icon: Users,
    title: 'Strategi Transformasi Digital Layanan Publik',
    summary:
      'Pemetaan proses, analisis cost-benefit, dan roadmap digitalisasi untuk meningkatkan kualitas layanan.',
    tags: ['Transformasi Digital', 'Pelayanan Publik', 'Roadmap'],
  },
  {
    icon: Globe,
    title: 'Analisis Ketahanan Pangan Daerah',
    summary:
      'Dashboard indikator dan pemodelan supply-demand untuk perencanaan kebijakan berbasis bukti.',
    tags: ['Ketahanan Pangan', 'Data Visualization', 'Perencanaan'],
  },
];

export default function Projects() {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Portofolio & Proyek</h2>
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-400">
          Cuplikan studi kasus dan proyek lintas sektor yang menyoroti dampak kebijakan dan solusi berbasis data.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, summary, tags }) => (
          <article
            key={title}
            className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mb-4 inline-flex rounded-md bg-blue-50 p-2 text-blue-700 transition group-hover:scale-105 dark:bg-blue-950/40 dark:text-blue-300">
              <Icon size={20} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
