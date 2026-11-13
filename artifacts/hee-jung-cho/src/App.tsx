import { ArrowDown, ArrowUpRight, BookOpen, Brain, Download, ExternalLink, Eye, Mail, Menu, Radio, X } from 'lucide-react';
import { useEffect, useState, type ReactNode } from 'react';

const assetUrl = (filename: string) =>
  `${import.meta.env.BASE_URL}assets/${filename}`;

const publications = [
  {
    year: '2026',
    type: 'Journal of Communication',
    title: 'Memory Inception through Gaze-contingent Message Exposure: Using Virtual Reality to Study Media Influence',
    authors: 'Cho, H. J., Lim, S., Saenz, M., & Schmälzle, R.',
    details: '76(3), 223–235.',
    doi: 'https://doi.org/10.1093/joc/jqaf048',
  },
  {
    year: '2026',
    type: 'Communication Research',
    title: 'The Bio-Functional Audience: Shared Physiological Alignment to Narrative Media',
    authors: 'Schmälzle, R., Cho, H. J., & Turner, M. M.',
    details: '',
    doi: 'https://doi.org/10.1177/009365022614720',
  },
  {
    year: '2025',
    type: 'Human Behavior and Emerging Technologies',
    title: 'Eyes on VR: Unpacking the Causal Chain Between Exposure, Reception, and Retention for Emotional Billboard Messages',
    authors: 'Cho, H. J., Lim, S., Turner, M. M., Bente, G., & Schmälzle, R.',
    details: '2025(1), 3619411.',
    doi: 'https://doi.org/10.1155/hbe2/3619411',
  },
  {
    year: 'In press',
    type: 'Health Promotion Practice',
    title: 'The Use of Effective Persuasive Strategies in Obesity Prevention Campaigns: A Content Analysis',
    authors: 'Cho, H. J., Jeon, M., & Turner, M. M.',
    details: 'In press.',
    doi: '',
  },
];

const profiles = [
  { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=NRr5wsoAAAAJ&hl=en&oi=ao' },
  { name: 'ORCID', url: 'https://orcid.org/0009-0004-1817-1657' },
  { name: 'ResearchGate', url: 'https://www.researchgate.net/profile/Hee-Jung-Cho-2' },
];

const labs = [
  { name: 'NoM Lab', url: 'https://nomcomm.github.io/' },
  { name: 'CASE Lab', url: 'https://caselab.msu.edu/' },
  { name: 'CARISMA Lab', url: 'https://www.carismalab.com/' },
];

function ExternalAnchor({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const sectionId = window.location.hash.slice(1);
    if (!sectionId) return;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(decodeURIComponent(sectionId))?.scrollIntoView();
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="site-shell spartan-green-page min-h-[100dvh] bg-white text-[#263631]">
      <header className="sticky top-0 z-50 border-b border-[#dce6e1] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-4 md:px-10">
          <a href="#top" onClick={closeMenu} className="flex items-center gap-3" aria-label="Hee Jung Cho, home">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#18453B] font-serif text-lg text-white">H</span>
            <span className="text-[13px] font-semibold tracking-[.01em]">Hee Jung Cho</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {['About', 'Research', 'Publications', 'Teaching', 'CV'].map((item) => (
              <a key={item} className="nav-link text-[12px] font-medium text-[#40534d] transition-colors hover:text-[#18453B]" href={`#${item.toLowerCase()}`}>{item}</a>
            ))}
            <a href="#contact" className="rounded-full bg-[#18453B] px-4 py-2.5 text-[11px] font-semibold text-white transition hover:bg-[#10372f]">Get in touch <ArrowUpRight className="ml-1 inline" size={13} /></a>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dce6e1] text-[#18453B] md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {menuOpen && <nav className="grid gap-1 border-t border-[#dce6e1] bg-white px-5 py-4 md:hidden" aria-label="Mobile navigation">
          {['About', 'Research', 'Publications', 'Teaching', 'CV', 'Contact'].map((item) => <a onClick={closeMenu} key={item} href={`#${item.toLowerCase()}`} className="rounded-lg px-3 py-2.5 text-sm hover:bg-[#f1f5f3]">{item}</a>)}
        </nav>}
      </header>

      <main id="top">
        <section className="relative mx-auto grid max-w-[1320px] items-center gap-14 px-5 pb-20 pt-16 md:grid-cols-[1.1fr_.9fr] md:px-10 md:pb-28 md:pt-24">
          <div className="reveal relative z-10">
            <div className="eyebrow mb-7 flex items-center gap-3 text-[#18453B]"><span className="h-px w-8 bg-[#18453B]" /> Communication · Michigan State University</div>
            <h1 className="serif max-w-[780px] text-[clamp(3.5rem,8.5vw,7.4rem)] leading-[.91] tracking-[-.055em] text-[#18453B]">
              How messages<br />move us<span className="text-[#18453B]">.</span>
            </h1>
            <p className="mt-8 max-w-[550px] text-[16px] leading-[1.8] text-[#46564f] md:text-[18px]">
              I study the full trajectory of message processing, from initial exposure and attention to message reception and persuasive effects.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#research" className="group inline-flex items-center gap-3 rounded-full bg-[#18453B] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#10372f]">
                Explore my research <ArrowDown className="transition-transform group-hover:translate-y-1" size={15} />
              </a>
              <a href={assetUrl('hee-jung-cho-cv.pdf')} download className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-[#18453B] hover:text-[#10372f]">
                <Download size={15} /> Download CV
              </a>
            </div>
            <div className="mt-12 flex items-center gap-3 border-t border-[#dce6e1] pt-5">
              <span className="h-2 w-2 rounded-full bg-[#18453B]" />
              <span className="text-sm text-[#46564f]">PhD candidate in Communication</span>
              <span className="text-[#9aa9a1]">·</span>
              <span className="text-sm text-[#46564f]">Expected 2027</span>
            </div>
          </div>
          <div className="reveal reveal-delay mx-auto w-full max-w-[440px]">
            <div className="aspect-[.89] overflow-hidden rounded-t-[46%] rounded-b-[46%] bg-[#f1f5f3]">
              <img src={assetUrl('profile-photo.jpg')} alt="Hee Jung Cho" className="h-full w-full object-cover object-top" />
            </div>
          </div>
        </section>

        <div className="border-y border-[#e2eae6] bg-[#f7f9f8]">
          <div className="mx-auto grid max-w-[1320px] gap-0 px-5 py-6 sm:grid-cols-3 md:px-10">
            <div className="flex items-center gap-3 py-2 sm:border-r sm:border-[#dce6e1] sm:pl-1"><Eye className="text-[#18453B]" size={19} /><span className="text-sm font-medium">Immersive media</span></div>
            <div className="flex items-center gap-3 py-2 sm:justify-center sm:border-r sm:border-[#dce6e1]"><Brain className="text-[#18453B]" size={19} /><span className="text-sm font-medium">Emotion & cognition</span></div>
            <div className="flex items-center gap-3 py-2 sm:justify-end"><Radio className="text-[#18453B]" size={19} /><span className="text-sm font-medium">Physiological methods</span></div>
          </div>
        </div>

        <section id="about" className="mx-auto grid max-w-[1320px] gap-10 px-5 py-20 md:grid-cols-[.7fr_1.3fr] md:px-10 md:py-28">
          <div>
            <span className="eyebrow text-[#18453B]">01 — A little context</span>
            <h2 className="serif mt-5 max-w-sm text-4xl leading-[1.08] tracking-[-.03em] text-[#18453B] md:text-5xl">The person behind the questions.</h2>
          </div>
          <div className="max-w-[760px]">
            <p className="serif text-[25px] leading-[1.48] text-[#18453B] md:text-[31px]">
              My research lies at the intersection of persuasion, health communication, and emerging technologies—including virtual reality and artificial intelligence.
            </p>
            <p className="mt-6 max-w-[670px] text-[15px] leading-[1.9] text-[#46564f]">
              I examine how people process messages, from what captures attention to how they experience emotions and form memories. Using immersive technologies and physiological measures, I explore how cognitive and emotional responses unfold during message exposure.
            </p>
            <div className="mt-9 flex flex-wrap gap-2">
              {['Media psychology', 'VR & AI', 'Persuasion', 'Health communication', 'Emotion & cognition', 'Psychophysiology'].map((tag) => <span key={tag} className="rounded-full border border-[#dce6e1] px-3.5 py-2 text-[11px] font-medium tracking-wide text-[#40534d]">{tag}</span>)}
            </div>
          </div>
        </section>

        <section id="research" className="border-y border-[#e2eae6] bg-white text-[#263631]">
          <div className="mx-auto max-w-[1320px] px-5 py-20 md:px-10 md:py-28">
            <div className="grid gap-12 md:grid-cols-[.75fr_1.25fr]">
              <div>
                <span className="eyebrow text-[#18453B]">02 — Research</span>
                <h2 className="serif mt-5 max-w-sm text-4xl leading-[1.08] tracking-[-.03em] text-[#18453B] md:text-5xl">A message is never just a message.</h2>
                <p className="mt-6 max-w-sm text-[14px] leading-[1.85] text-[#46564f]">I bring controlled experiments into vivid, lifelike contexts to understand what communication does as it happens.</p>
              </div>
              <div className="grid gap-0 sm:grid-cols-2">
                <article className="border-b border-[#dce6e1] pb-7 sm:border-r sm:pr-8">
                  <span className="mono text-[11px] text-[#18453B]">01 / EXPOSURE</span>
                  <h3 className="serif mt-4 text-2xl text-[#18453B]">What gets noticed?</h3>
                  <p className="mt-3 text-sm leading-7 text-[#46564f]">Eye-tracking and gaze-contingent VR help reveal how attention meets a message in a richly immersive world.</p>
                </article>
                <article className="border-b border-[#dce6e1] pb-7 pt-7 sm:pl-8 sm:pt-0">
                  <span className="mono text-[11px] text-[#18453B]">02 / RECEPTION</span>
                  <h3 className="serif mt-4 text-2xl text-[#18453B]">What is felt?</h3>
                  <p className="mt-3 text-sm leading-7 text-[#46564f]">Physiological responses offer a window into the emotional experience of stories and persuasive content.</p>
                </article>
                <article className="pb-7 pt-7 sm:border-r sm:border-[#dce6e1] sm:pr-8 sm:pt-8">
                  <span className="mono text-[11px] text-[#18453B]">03 / RETENTION</span>
                  <h3 className="serif mt-4 text-2xl text-[#18453B]">What stays with us?</h3>
                  <p className="mt-3 text-sm leading-7 text-[#46564f]">I trace how exposure and reception contribute to memory—connecting what people see and feel with what they remember.</p>
                </article>
                <article className="border-t border-[#dce6e1] pt-7 sm:pl-8 sm:pt-8">
                  <span className="mono text-[11px] text-[#18453B]">04 / APPLICATION</span>
                  <h3 className="serif mt-4 text-2xl text-[#18453B]">How can messages help?</h3>
                  <p className="mt-3 text-sm leading-7 text-[#46564f]">This work speaks to health communication and the design of messages that can make a meaningful difference.</p>
                </article>
              </div>
            </div>

            <div className="mt-16 grid overflow-hidden rounded-sm border border-[#dce6e1] bg-white text-[#263631] md:grid-cols-[1.15fr_.85fr]">
              <div className="flex flex-col justify-between p-7 md:p-10">
                <div>
                  <span className="eyebrow text-[#18453B]">Featured study · Virtual reality</span>
                  <h3 className="serif mt-5 max-w-lg text-3xl leading-[1.13] text-[#18453B] md:text-[42px]">The message in your line of sight.</h3>
                  <p className="mt-5 max-w-lg text-sm leading-7 text-[#46564f]">In a virtual city, eye-tracking makes it possible to study how gaze-contingent exposure shapes what people notice, process, and remember.</p>
                </div>
                <div className="mt-8">
                  <p className="text-[12px] font-semibold leading-6">Memory Inception through Gaze-contingent Message Exposure: Using Virtual Reality to Study Media Influence</p>
                  <p className="mt-1 text-[12px] text-[#5c6b64]">Cho, H. J., Lim, S., Saenz, M., & Schmälzle, R. · Journal of Communication, 2026</p>
                  <a href={assetUrl('featured-study.pdf')} download className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#18453B] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#10372f]"><Download size={14} /> Download featured study</a>
                </div>
              </div>
              <div className="flex min-h-[260px] items-center justify-center border-t border-[#dce6e1] bg-[#f7f9f8] p-5 md:border-l md:border-t-0 md:p-8">
                <img src={assetUrl('vr-eye-tracking-study.png')} alt="Study illustration: a participant wearing a VR headset with eye-tracking in a virtual city environment" className="h-full max-h-[370px] w-full object-contain" />
              </div>
            </div>
          </div>
        </section>

        <section id="publications" className="mx-auto max-w-[1320px] px-5 py-20 md:px-10 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="eyebrow text-[#d36c50]">03 — Selected writing</span>
              <h2 className="serif mt-5 text-4xl tracking-[-.03em] md:text-5xl">Publications</h2>
            </div>
            <ExternalAnchor href={profiles[0].url} className="inline-flex items-center gap-2 text-sm font-semibold text-[#247366] hover:text-[#d36c50]">More on Google Scholar <ExternalLink size={14} /></ExternalAnchor>
          </div>
          <div className="mt-10 border-t border-[#d9d2c5]">
            {publications.map((paper) => (
              <article key={paper.title} className="grid gap-3 border-b border-[#d9d2c5] py-6 md:grid-cols-[90px_1fr_120px] md:gap-8 md:py-8">
                <div className="mono pt-1 text-[11px] text-[#247366]">{paper.year}</div>
                <div>
                  <div className="eyebrow text-[10px] text-[#8a8174]">{paper.type}</div>
                  <h3 className="serif mt-2 max-w-[780px] text-[22px] leading-[1.25] text-[#20323a] md:text-[25px]">{paper.title}</h3>
                  <p className="mt-3 text-[12px] leading-6 text-[#687578]">{paper.authors}{paper.details ? ` ${paper.details}` : ''}</p>
                </div>
                <div className="md:pt-1 md:text-right">
                  {paper.doi ? <ExternalAnchor href={paper.doi} className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#247366] hover:text-[#d36c50]">View DOI <ArrowUpRight size={13} /></ExternalAnchor> : <span className="text-[11px] text-[#8a8174]">In press</span>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="teaching" className="border-y border-[#d9d2c5] bg-[#eee9de]">
          <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-20 md:grid-cols-[.7fr_1.3fr] md:px-10 md:py-24">
            <div>
              <span className="eyebrow text-[#d36c50]">04 — Teaching</span>
              <h2 className="serif mt-5 text-4xl leading-tight tracking-[-.03em] md:text-5xl">Learning by asking better questions.</h2>
            </div>
            <div>
              <p className="max-w-xl text-[15px] leading-8 text-[#59676a]">At Michigan State University, I teach communication as a way to investigate how people connect, make meaning, and create change.</p>
              <div className="mt-8 grid gap-x-8 sm:grid-cols-2">
                {['Human Communication', 'Communication Campaign Design and Analysis', 'Methods of Communication Inquiry', 'Interpersonal Communication'].map((course, index) => <div key={course} className="flex items-start gap-4 border-t border-[#d4ccbd] py-4"><span className="mono pt-1 text-[10px] text-[#247366]">0{index + 1}</span><span className="text-sm font-medium leading-6">{course}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="cv" className="mx-auto grid max-w-[1320px] items-center gap-8 px-5 py-16 md:grid-cols-[1fr_auto] md:px-10 md:py-20">
          <div>
            <span className="eyebrow text-[#247366]">Academic profile</span>
            <h2 className="serif mt-3 text-3xl tracking-[-.02em]">PhD candidate, Communication</h2>
            <p className="mt-2 text-sm text-[#687578]">Michigan State University · Expected 2027</p>
          </div>
          <a href={assetUrl('hee-jung-cho-cv.pdf')} download className="inline-flex w-fit items-center gap-3 rounded-full border border-[#247366] px-6 py-3.5 text-sm font-semibold text-[#247366] transition hover:bg-[#247366] hover:text-[#f6f2e9]"><BookOpen size={16} /> Download curriculum vitae <Download size={14} /></a>
        </section>

        <footer id="contact" className="bg-[#203b3c] text-[#f6f2e9]">
          <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-20">
            <div className="grid gap-12 md:grid-cols-[1.1fr_.9fr]">
              <div>
                <span className="eyebrow text-[#df9778]">Let's connect</span>
                <h2 className="serif mt-5 max-w-lg text-4xl leading-[1.06] tracking-[-.03em] md:text-6xl">Curious about what messages can do?</h2>
                <a href="mailto:chohee1@msu.edu" className="mt-7 inline-flex items-center gap-3 text-[16px] font-medium text-[#f6f2e9] hover:text-[#df9778]"><Mail size={18} /> chohee1@msu.edu <ArrowUpRight size={16} /></a>
              </div>
              <div className="grid grid-cols-2 gap-8 md:pt-10">
                <div>
                  <div className="eyebrow mb-4 text-[#df9778]">Profiles</div>
                  <div className="grid gap-3">{profiles.map((profile) => <ExternalAnchor key={profile.name} href={profile.url} className="inline-flex items-center gap-2 text-sm text-[#d3ddd6] hover:text-white">{profile.name}<ArrowUpRight size={12} /></ExternalAnchor>)}</div>
                </div>
                <div>
                  <div className="eyebrow mb-4 text-[#df9778]">Research groups</div>
                  <div className="grid gap-3">{labs.map((lab) => <ExternalAnchor key={lab.name} href={lab.url} className="inline-flex items-center gap-2 text-sm text-[#d3ddd6] hover:text-white">{lab.name}<ArrowUpRight size={12} /></ExternalAnchor>)}</div>
                </div>
              </div>
            </div>
            <div className="mt-14 flex flex-col justify-between gap-3 border-t border-[#ffffff]/20 pt-5 text-[11px] text-[#b9c8c1] sm:flex-row">
              <span>Hee Jung Cho · Communication · Michigan State University</span>
              <a href="#top" className="inline-flex items-center gap-2 hover:text-white">Back to top <ArrowUpRight size={12} /></a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
