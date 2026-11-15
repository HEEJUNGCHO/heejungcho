import { useEffect, useState, type ReactNode } from 'react';
import { Link, Route, Router, Switch, useLocation } from 'wouter';
import { useHashLocation } from 'wouter/use-hash-location';
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Download,
  ExternalLink,
  FileText,
  Mail,
  Menu,
  X,
} from 'lucide-react';
import './academic-site.css';

type Page = 'home' | 'about' | 'research' | 'publications' | 'teaching' | 'cv' | 'contact';

const pages: { id: Page; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'cv', label: 'CV' },
  { id: 'contact', label: 'Contact' },
];

const publications = [
  {
    year: '2026',
    journal: 'Journal of Communication',
    title: 'Memory Inception through Gaze-contingent Message Exposure: Using Virtual Reality to Study Media Influence',
    authors: 'Cho, H. J., Lim, S., Saenz, M., & Schmälzle, R.',
    details: '76(3), 223–235.',
    doi: 'https://doi.org/10.1093/joc/jqaf048',
  },
  {
    year: '2026',
    journal: 'Communication Research',
    title: 'The Bio-Functional Audience: Shared Physiological Alignment to Narrative Media',
    authors: 'Schmälzle, R., Cho, H. J., & Turner, M. M.',
    details: '',
    doi: 'https://doi.org/10.1177/009365022614720',
  },
  {
    year: '2025',
    journal: 'Human Behavior and Emerging Technologies',
    title: 'Eyes on VR: Unpacking the Causal Chain Between Exposure, Reception, and Retention for Emotional Billboard Messages',
    authors: 'Cho, H. J., Lim, S., Turner, M. M., Bente, G., & Schmälzle, R.',
    details: '2025(1), 3619411.',
    doi: 'https://doi.org/10.1155/hbe2/3619411',
  },
  {
    year: 'In press',
    journal: 'Health Promotion Practice',
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

const statement =
  'I study the full trajectory of message processing, from initial exposure and attention to message reception and persuasive effects.';

const assetUrl = (filename: string) => `${import.meta.env.BASE_URL}assets/${filename}`;
const cvUrl = assetUrl('hee-jung-cho-cv.pdf');
const featuredPdfUrl = assetUrl('featured-study.pdf');

function pageFromLocation(location: string): Page {
  const route = location.replace(/^\/+/, '').split('/')[0].toLowerCase();
  return pages.some((page) => page.id === route) ? (route as Page) : 'home';
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function ExternalLinkItem({
  href,
  children,
  className = '',
  testId,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  testId?: string;
}) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
      data-testid={testId ?? `link-external-${slugify(href)}`}
    >
      {children}
    </a>
  );
}

function PageIntro({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mp-page-intro">
      <div className="mp-kicker">
        <span>{number}</span>
        {eyebrow}
      </div>
      <h1 className="mp-display">{title}</h1>
      <p>{description}</p>
    </div>
  );
}

function PageLink({
  to,
  children,
  className = '',
  testId,
}: {
  to: Page;
  children: ReactNode;
  className?: string;
  testId: string;
}) {
  return (
    <Link className={className} href={`/${to}`} data-testid={testId}>
      {children}
    </Link>
  );
}

function SitePage() {
  const [location] = useLocation();
  const activePage = pageFromLocation(location);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title =
      activePage === 'home'
        ? 'Hee Jung Cho | Academic Website'
        : `${pages.find((page) => page.id === activePage)?.label} | Hee Jung Cho`;
  }, [activePage, location]);

  const navLinks = pages.map(({ id, label }) => (
    <Link
      key={id}
      href={`/${id}`}
      className={`mp-nav-link ${activePage === id ? 'is-active' : ''}`}
      aria-current={activePage === id ? 'page' : undefined}
      data-testid={`nav-${id}`}
      onClick={() => setMenuOpen(false)}
    >
      {label}
    </Link>
  ));

  return (
    <div className="mp-site spartan-green-page">
      <a
        className="mp-skip"
        href={`#/${activePage}`}
        data-testid="link-skip-content"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById('mp-main')?.focus();
        }}
      >
        Skip to content
      </a>
      <header className="mp-header">
        <div className="mp-header-inner">
          <Link href="/home" className="mp-brand" aria-label="Hee Jung Cho, Home" data-testid="link-brand-home">
            <span className="mp-brand-mark">HJ</span>
            <span className="mp-brand-name">Hee Jung Cho</span>
          </Link>
          <nav className="mp-desktop-nav" aria-label="Main navigation">
            {navLinks}
          </nav>
          <button
            type="button"
            className="mp-menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mp-mobile-nav"
            data-testid="button-toggle-navigation"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mp-mobile-nav" id="mp-mobile-nav" aria-label="Mobile navigation">
            {navLinks}
          </nav>
        )}
      </header>

      <main id="mp-main" className="mp-main" key={activePage} tabIndex={-1} data-testid={`page-${activePage}`}>
        {activePage === 'home' && (
          <>
            <section className="mp-home-hero">
              <div className="mp-home-copy">
                <div className="mp-kicker">
                  <span>MSU</span>
                  Department of Communication
                </div>
                <p className="mp-home-name">Hee Jung Cho</p>
                <h1 className="mp-display mp-home-title">How messages<br />move us.</h1>
                <p className="mp-home-statement">{statement}</p>
                <div className="mp-home-actions">
                  <PageLink
                    to="research"
                    className="mp-button mp-button-primary"
                    testId="link-home-research"
                  >
                    Explore my research <ArrowRight size={16} />
                  </PageLink>
                  <PageLink to="about" className="mp-text-link" testId="link-home-about">
                    About Hee Jung <ArrowUpRight size={15} />
                  </PageLink>
                </div>
                <div className="mp-home-meta">
                  <span>PhD candidate in Communication</span>
                  <i aria-hidden="true" />
                  <span>Michigan State University · Expected 2027</span>
                </div>
              </div>
              <div className="mp-home-portrait-wrap">
                <div className="mp-portrait-oval">
                  <img src={assetUrl('profile-photo.jpg')} alt="Hee Jung Cho" data-testid="img-profile-photo" />
                </div>
                <div className="mp-photo-caption">
                  <span>PhD candidate</span>
                  <span>Michigan State University</span>
                </div>
              </div>
            </section>
            <section className="mp-home-areas" aria-label="Research areas">
              <div><span className="mp-index">01</span><span>Immersive media</span></div>
              <div><span className="mp-index">02</span><span>Emotion &amp; cognition</span></div>
              <div><span className="mp-index">03</span><span>Physiological methods</span></div>
            </section>
            <section className="mp-home-directory">
              <div className="mp-directory-heading">
                <div className="mp-kicker"><span>Explore</span>Academic profile</div>
                <h2 className="mp-display">A closer look at the work.</h2>
              </div>
              <div className="mp-directory-links">
                {[
                  { id: 'about' as Page, label: 'About', note: 'Research identity and areas of interest' },
                  { id: 'research' as Page, label: 'Research', note: 'Questions, methods, and featured study' },
                  { id: 'publications' as Page, label: 'Publications', note: 'Selected scholarly writing' },
                  { id: 'teaching' as Page, label: 'Teaching', note: 'Statement and courses' },
                  { id: 'cv' as Page, label: 'CV', note: 'Academic profile and downloadable PDF' },
                  { id: 'contact' as Page, label: 'Contact', note: 'Email, profiles, and research groups' },
                ].map((item, index) => (
                  <PageLink
                    key={item.id}
                    to={item.id}
                    className="mp-directory-item"
                    testId={`link-home-directory-${item.id}`}
                  >
                    <span className="mp-index">0{index + 1}</span>
                    <span className="mp-directory-text">
                      <strong>{item.label}</strong>
                      <small>{item.note}</small>
                    </span>
                    <ArrowUpRight size={17} />
                  </PageLink>
                ))}
              </div>
            </section>
          </>
        )}

        {activePage === 'about' && (
          <section className="mp-page">
            <PageIntro
              number="01"
              eyebrow="About"
              title="The person behind the questions."
              description="Research identity shaped by communication, psychology, and emerging technologies."
            />
            <div className="mp-about-layout">
              <div className="mp-about-lead">
                <p className="mp-serif-lead">
                  My research lies at the intersection of persuasion, health communication, and emerging technologies—including virtual reality and artificial intelligence.
                </p>
                <div className="mp-about-facts">
                  <span>Academic home</span>
                  <strong>Department of Communication<br />Michigan State University</strong>
                </div>
              </div>
              <div className="mp-prose">
                <p>
                  I examine how people process messages, from what captures attention to how they experience emotions and form memories. Using immersive technologies and physiological measures, I explore how cognitive and emotional responses unfold during message exposure.
                </p>
                <div className="mp-tags" aria-label="Research topics">
                  {['Media psychology', 'VR & AI', 'Persuasion', 'Health communication', 'Emotion & cognition', 'Psychophysiology'].map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <PageLink to="research" className="mp-inline-cta" testId="link-about-research">
                  See research themes <ArrowRight size={15} />
                </PageLink>
              </div>
            </div>
          </section>
        )}

        {activePage === 'research' && (
          <section className="mp-page">
            <PageIntro
              number="02"
              eyebrow="Research"
              title="A message is never just a message."
              description="I bring controlled experiments into vivid, lifelike contexts to understand what communication does as it happens."
            />
            <div className="mp-research-grid">
              {[
                ['01 / EXPOSURE', 'What gets noticed?', 'Eye-tracking and gaze-contingent VR help reveal how attention meets a message in a richly immersive world.'],
                ['02 / RECEPTION', 'What is felt?', 'Physiological responses offer a window into the emotional experience of stories and persuasive content.'],
                ['03 / RETENTION', 'What stays with us?', 'I trace how exposure and reception contribute to memory—connecting what people see and feel with what they remember.'],
                ['04 / APPLICATION', 'How can messages help?', 'This work speaks to health communication and the design of messages that can make a meaningful difference.'],
              ].map(([stage, title, text]) => (
                <article className="mp-research-stage" key={stage} data-testid={`research-stage-${slugify(stage)}`}>
                  <div className="mp-mono">{stage}</div>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <article className="mp-feature-study">
              <div className="mp-study-copy">
                <div className="mp-kicker"><span>Featured study</span>Virtual reality</div>
                <h2 className="mp-display">The message in your line of sight.</h2>
                <p>
                  In a virtual city, eye-tracking makes it possible to study how gaze-contingent exposure shapes what people notice, process, and remember.
                </p>
                <div className="mp-citation">
                  <strong>Memory Inception through Gaze-contingent Message Exposure: Using Virtual Reality to Study Media Influence</strong>
                  <span>Cho, H. J., Lim, S., Saenz, M., &amp; Schmälzle, R. · <em>Journal of Communication</em>, 2026 · 76(3), 223–235.</span>
                  <ExternalLinkItem href="https://doi.org/10.1093/joc/jqaf048" className="mp-inline-cta" testId="link-feature-study-doi">
                    View DOI <ArrowUpRight size={14} />
                  </ExternalLinkItem>
                </div>
                <a
                  className="mp-button mp-button-primary"
                  href={featuredPdfUrl}
                  download
                  data-testid="link-download-featured-study"
                >
                  <Download size={15} /> Download featured study
                </a>
              </div>
              <div className="mp-study-visual">
                <img
                  src={assetUrl('vr-eye-tracking-study.png')}
                  alt="Study illustration: a participant wearing a VR headset with eye-tracking in a virtual city environment"
                  data-testid="img-featured-vr-study"
                />
                <span>Gaze-contingent message exposure in a virtual city</span>
              </div>
            </article>
          </section>
        )}

        {activePage === 'publications' && (
          <section className="mp-page">
            <div className="mp-publications-top">
              <PageIntro
                number="03"
                eyebrow="Selected writing"
                title="Publications."
                description="Selected scholarship on immersive media, message processing, physiological alignment, and health persuasion."
              />
              <ExternalLinkItem href={profiles[0].url} className="mp-scholar-link" testId="link-google-scholar-publications">
                More on Google Scholar <ExternalLink size={15} />
              </ExternalLinkItem>
            </div>
            <div className="mp-publication-list">
              {publications.map((paper) => (
                <article className="mp-publication" key={paper.title} data-testid={`publication-${slugify(paper.title)}`}>
                  <div className="mp-publication-year">{paper.year}</div>
                  <div className="mp-publication-body">
                    <div className="mp-journal">{paper.journal}</div>
                    <h2>{paper.title}</h2>
                    <p>{paper.authors}{paper.details ? ` ${paper.details}` : ''}</p>
                  </div>
                  <div className="mp-publication-link">
                    {paper.doi ? (
                      <ExternalLinkItem href={paper.doi} className="mp-inline-cta">
                        View DOI <ArrowUpRight size={14} />
                      </ExternalLinkItem>
                    ) : (
                      <span>In press</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <div className="mp-note-line">
              <span className="mp-index">Selected publications</span>
              <span>For additional work, visit Google Scholar.</span>
            </div>
          </section>
        )}

        {activePage === 'teaching' && (
          <section className="mp-page">
            <PageIntro
              number="04"
              eyebrow="Teaching"
              title="Learning by asking better questions."
              description="Communication as a way to investigate how people connect, make meaning, and create change."
            />
            <div className="mp-teaching-content">
              <div className="mp-teaching-quote">
                <span className="mp-kicker"><span>Teaching statement</span>Michigan State University</span>
                <p>At Michigan State University, I teach communication as a way to investigate how people connect, make meaning, and create change.</p>
              </div>
              <div className="mp-course-list">
                <div className="mp-kicker"><span>Courses</span>Course names as listed</div>
                {['Human Communication', 'Communication Campaign Design and Analysis', 'Methods of Communication Inquiry', 'Interpersonal Communication'].map((course, index) => (
                  <div className="mp-course" key={course} data-testid={`course-${index + 1}`}>
                    <span className="mp-index">0{index + 1}</span>
                    <strong>{course}</strong>
                    <ArrowDownRight size={16} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activePage === 'cv' && (
          <section className="mp-page mp-cv-page">
            <PageIntro
              number="05"
              eyebrow="Curriculum vitae"
              title="Academic profile."
              description="A concise overview of current affiliation, with the supplied curriculum vitae available to view or download."
            />
            <div className="mp-cv-card">
              <div className="mp-cv-card-top">
                <div className="mp-cv-symbol"><FileText size={26} strokeWidth={1.4} /></div>
                <span className="mp-mono">ACADEMIC PROFILE · 2027</span>
              </div>
              <h2>Hee Jung Cho</h2>
              <p className="mp-cv-role">PhD candidate, Communication</p>
              <p className="mp-cv-school">Michigan State University · Expected 2027</p>
              <div className="mp-cv-rule" />
              <p className="mp-cv-description">View the supplied CV PDF for full academic details.</p>
              <div className="mp-cv-actions">
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mp-button mp-button-primary"
                  data-testid="link-view-cv"
                >
                  <BookOpen size={16} /> View CV <ArrowUpRight size={15} />
                </a>
                <a
                  href={cvUrl}
                  download
                  className="mp-button mp-button-secondary"
                  data-testid="link-download-cv"
                >
                  <Download size={15} /> Download PDF
                </a>
              </div>
            </div>
            <div className="mp-next-link">
              <span>For scholarly profiles and questions</span>
              <PageLink to="contact" testId="link-cv-contact">
                Get in touch <ArrowRight size={15} />
              </PageLink>
            </div>
          </section>
        )}

        {activePage === 'contact' && (
          <section className="mp-page">
            <PageIntro
              number="06"
              eyebrow="Contact"
              title="Let’s connect."
              description="For scholarly conversations and professional inquiries."
            />
            <div className="mp-contact-layout">
              <div className="mp-contact-primary">
                <span className="mp-kicker"><span>Email</span>Michigan State University</span>
                <h2 className="mp-display">Curious about what messages can do?</h2>
                <a href="mailto:chohee1@msu.edu" className="mp-email" data-testid="link-contact-email">
                  <Mail size={19} /> chohee1@msu.edu <ArrowUpRight size={17} />
                </a>
              </div>
              <div className="mp-contact-side">
                <div className="mp-link-group">
                  <h3>Profiles</h3>
                  {profiles.map((profile) => (
                    <ExternalLinkItem key={profile.name} href={profile.url} className="mp-resource-link">
                      {profile.name}<ArrowUpRight size={15} />
                    </ExternalLinkItem>
                  ))}
                </div>
                <div className="mp-link-group">
                  <h3>Research groups</h3>
                  {labs.map((lab) => (
                    <ExternalLinkItem key={lab.name} href={lab.url} className="mp-resource-link">
                      {lab.name}<ArrowUpRight size={15} />
                    </ExternalLinkItem>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="mp-footer">
        <div className="mp-footer-inner">
          <div className="mp-footer-id">
            <span className="mp-brand-mark">HJ</span>
            <span>Hee Jung Cho <small>Communication · Michigan State University</small></span>
          </div>
          <div className="mp-footer-nav">
            <PageLink to="home" testId="link-footer-home">Home</PageLink>
            <PageLink to="publications" testId="link-footer-publications">Publications</PageLink>
            <PageLink to="cv" testId="link-footer-cv">CV</PageLink>
            <PageLink to="contact" testId="link-footer-contact">Contact</PageLink>
          </div>
          <PageLink to="home" className="mp-back-top" testId="link-footer-back-to-home">
            Back to top <ArrowLeft size={14} />
          </PageLink>
        </div>
      </footer>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="mp-site spartan-green-page">
      <header className="mp-header">
        <div className="mp-header-inner">
          <Link href="/home" className="mp-brand" aria-label="Hee Jung Cho, Home" data-testid="link-not-found-home">
            <span className="mp-brand-mark">HJ</span>
            <span className="mp-brand-name">Hee Jung Cho</span>
          </Link>
          <nav className="mp-desktop-nav" aria-label="Main navigation">
            {pages.map(({ id, label }) => (
              <Link key={id} href={`/${id}`} className="mp-nav-link" data-testid={`not-found-nav-${id}`}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="mp-page mp-not-found" id="mp-main">
        <div className="mp-kicker"><span>404</span>Page not found</div>
        <h1 className="mp-display">This page isn’t available.</h1>
        <Link href="/home" className="mp-button mp-button-primary" data-testid="link-not-found-return-home">
          Return to Home <ArrowRight size={16} />
        </Link>
      </main>
    </div>
  );
}

export default function AcademicSite() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/" component={SitePage} />
        <Route path="/home" component={SitePage} />
        <Route path="/about" component={SitePage} />
        <Route path="/research" component={SitePage} />
        <Route path="/publications" component={SitePage} />
        <Route path="/teaching" component={SitePage} />
        <Route path="/cv" component={SitePage} />
        <Route path="/contact" component={SitePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
