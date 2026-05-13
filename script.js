const reasons = [
  'Rask levering','Mobil først','SEO optimalisert','Rent design','Skreddersydd',
  'Pålitelig kode','Premium utseende','Brukervennlig','Moderne stil','Alltid oppdatert',
  'Sikre sider','Klart merkevare','Unike ideer','Smidige animasjoner','Responsivt oppsett',
  'Frisk UI','Skarpe visuelle','Fokusert UX','Fremtidssikker','Grundig testet',
  'Solid support','Hjelp 24/7','Rask respons','Innen 24t','Klar prosess',
  'Ærlig rådgivning','Ingen skjulte gebyrer','Klare kontrakter','Vennlig service','Direkte kontakt',
  'En-til-en','Kreativ touch','Egendefinerte farger','Logo-vennlig','Lett kode',
  'Rask lasting','Optimaliserte bilder','Enkel å bruke','Skaler lett','Bygget for vekst',
  'Klare CTAer','Klar for markedsføring','Profesjonelt utseende','Merkevare konsekvent','Klar for globalt',
  'Enkel vedlikehold','Klar struktur','Smidig navigasjon','Typografi kjærlighet','Skreddersydd layout',
  'Dynamisk innhold','Raske endringer','Oppdateringsvennlig','Klar prising','Direkte tilbakemelding',
  'Visuell effekt','Konverteringsfokus','Testet UX','Reelle resultater','Sterk identitet',
  'Autentisk stemme','Personlig preg','Transparent arbeid','Topp verktøy','Bygget for hånd',
  'Friske konsepter','Inspirert design','Bruker først','Trendbevisst','Alltid forbedring',
  'Smidig scroll','Elegante farger','Merkevareharmoni','Visuell balanse','Fokuserte mål',
  'Direkte strategi','Ekte lidenskap','Tidsriktige oppdateringer','Raske feilrettinger','Klare rapporter',
  'Enkel overlevering','Fleksible planer','Enkle oppgraderinger','Opplæring inkludert','Hjelp etter lansering',
  'Dedikert omsorg','Nøye testing','Klar tidslinje','Oppdateringer ved milepæler','Levering i tide',
  'Ærlig tilbakemelding','Ekte samarbeid','Ingen outsourcing','Direkte utvikler','Kvalitetsfokus',
  'Høye standarder','Ekte håndverk','Beviste metoder','Tillit fra kunder','Bygget med hjerte'
];

/* Build ticker rows — text duplicated so -50% translation loops seamlessly */
function buildTicker() {
  const bg = document.getElementById('tickerBg');
  if (!bg) return;
  const ROW_COUNT = 15;
  const speeds = [18,24,20,26,16,22,28,19,23,17,25,21,27,15,20];
  const chunk = Math.ceil(reasons.length / ROW_COUNT);
  for (let i = 0; i < ROW_COUNT; i++) {
    const slice = reasons.slice(i * chunk, (i + 1) * chunk);
    const items = slice.length ? slice : reasons;
    const text  = items.join(' · ') + ' · ';
    const row   = document.createElement('div');
    row.className = 'ticker-row';
    const span = document.createElement('span');
    span.textContent = text + text;
    span.style.animationDuration  = speeds[i] + 's';
    span.style.animationDirection = i % 2 === 0 ? 'normal' : 'reverse';
    row.appendChild(span);
    bg.appendChild(row);
  }
}

/* Nav — transparent on hero, white when scrolled */
function initNav() {
  const nav       = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const links     = document.getElementById('navLinks');
  if (!nav) return;

  function updateNav() {
    if (window.scrollY > 50) {
      nav.classList.remove('on-hero');
      nav.classList.add('scrolled');
    } else {
      nav.classList.add('on-hero');
      nav.classList.remove('scrolled');
    }
  }
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });

  hamburger?.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    hamburger.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  links?.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      links.classList.remove('open');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
    })
  );
}

/* Smooth scroll for anchor links */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* Reveal on scroll */
function initReveal() {
  const targets = document.querySelectorAll(
    '.card, .price-card, .why-item, .tl-item, .about-left, .contact-info, .contact-form'
  );
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

  targets.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 5) * 0.055 + 's';
    io.observe(el);
  });
}

/* "Se mer" — expand service cards on mobile */
function initShowMoreCards() {
  const btn = document.getElementById('showMoreCards');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const cards = document.querySelector('.cards');
    cards.classList.add('expanded');
    cards.querySelectorAll('.card.reveal:not(.visible)').forEach(card => {
      card.classList.add('visible');
    });
  });
}

/* Contact form — Formspree */
function initForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sender…';
    btn.disabled = true;

    fetch('https://formspree.io/f/xpwlwpow', {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    })
      .then(r => r.json())
      .then(d => {
        if (d.ok) {
          form.reset();
          document.getElementById('formMessage').style.display = 'block';
        } else {
          alert('Noe gikk galt. Prøv igjen.');
        }
      })
      .catch(() => alert('Noe gikk galt. Prøv igjen.'))
      .finally(() => { btn.textContent = 'Send melding'; btn.disabled = false; });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  buildTicker();
  initNav();
  initSmoothScroll();
  initReveal();
  initForm();
  initShowMoreCards();
});
