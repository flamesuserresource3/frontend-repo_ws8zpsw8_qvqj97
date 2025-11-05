import { FileText, ExternalLink, BookOpen } from 'lucide-react';

const publications = [
  {
    type: 'Policy Brief',
    title: 'Mempercepat Ekonomi Digital: Rekomendasi Kebijakan untuk Layanan Publik',
    outlet: 'Policy Lab',
    link: '#',
  },
  {
    type: 'Opini',
    title: 'Ketimpangan dan Produktivitas: Tantangan Struktural Indonesia',
    outlet: 'Media Ekonomi',
    link: '#',
  },
  {
    type: 'Publikasi Akademik',
    title: 'Impact Evaluation of Cash Transfer on Poverty Alleviation',
    outlet: 'Journal of Public Economics',
    link: '#',
  },
];

export default function Publications() {
  return (
    <section id="publications" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <div className="mb-10 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Publikasi & Tulisan</h2>
          <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-400">
            Kumpulan artikel opini, policy brief, dan publikasi akademik terpilih.
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
        >
          <BookOpen size={16} /> Lihat Semua
        </a>
      </div>

      <div className="divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900">
        {publications.map((p) => (
          <a
            key={p.title}
            href={p.link}
            className="flex items-start justify-between gap-4 p-5 transition hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 inline-flex rounded-md bg-blue-50 p-2 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
                <FileText size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{p.type}</p>
                <h3 className="mt-1 text-base font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{p.outlet}</p>
              </div>
            </div>
            <ExternalLink className="mt-1 shrink-0 text-slate-400" size={18} />
          </a>
        ))}
      </div>
    </section>
  );
}
