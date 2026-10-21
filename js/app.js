const app = document.getElementById('app');
const isFile = location.protocol === 'file:' || /github\.io$/.test(location.hostname); // hash routing: no server rewrites needed
const hashRoute = isFile ? (location.hash.slice(1) || '/') : '';
const queryString = isFile ? (hashRoute.split('?')[1] || '') : location.search.slice(1);
const cleanPath = isFile
  ? ((hashRoute.split('?')[0].replace(/\/+$/, '') + '/') || '/')
  : (location.pathname.replace(/\/+$/, '/') || '/');
if (isFile) window.addEventListener('hashchange', () => location.reload());

const legacyRoutes = {
  '/services/google-ads/':'/services/paid-traffic/', '/services/meta-ads/':'/services/paid-traffic/',
  '/services/tiktok-ads/':'/services/paid-traffic/', '/services/pinterest-ads/':'/services/paid-traffic/',
  '/services/programmatic/':'/services/paid-traffic/', '/services/creative-strategy/':'/services/production/',
  '/services/analytics/':'/services/', '/services/automation/':'/services/', '/services/consulting/':'/services/'
};
if (legacyRoutes[cleanPath]) location.replace(isFile ? '#' + legacyRoutes[cleanPath] : legacyRoutes[cleanPath]);

const supported = ['en','pl','ru'];
const browserCode = (navigator.language || 'en').slice(0,2).toLowerCase();
let stored = null;
try { stored = localStorage.getItem('artemida-language'); } catch (e) {}
let lang = supported.includes(stored) ? stored : (supported.includes(browserCode) ? browserCode : 'en');
document.documentElement.lang = lang;

const copy = {
  en: {
    nav:{home:'Home',services:'Services',production:'Production',portfolio:'Portfolio',pricing:'Pricing',about:'About Us',contact:'Contact',cta:'Contact us',telegram:'Telegram'},
    common:{learn:'Explore service',prices:'View pricing',apply:'Send an enquiry',back:'All services',contactEyebrow:'CONTACT',servicesEyebrow:'SERVICES',productionEyebrow:'PRODUCTION',portfolioEyebrow:'PORTFOLIO'},
    home:{
      title:'Your new <em>Growth Marketing</em> partner',intro:'We help B2C & E-Commerce brands scale with a data-driven, creative, and full-funnel marketing approach.',
      servicesTitle:'Everything your brand needs to grow',servicesIntro:'Digital marketing experts focused on converting business goals into strategy and execution. Clear thinking, transparent work, measurable progress.',
      workLabel:'HOW WE WORK',workTitle:'A clear path from question to progress.',
      steps:[['Audit & Alignment','We map your current metrics, economics, target audience, and growth drivers to lay a clear foundation.'],['Strategy & Prioritization','We identify high-leverage channels and design actionable tests tailored to your current stage and budget.'],['Integrated Execution','Media buying, creative production, and tracking setup execute in sync for maximum velocity.'],['Optimization & Scaling','Performance data directly dictates iteration, channel expansion, and budget allocation.']]},
    services:{title:'A complete ecosystem of digital services aligned with your growth goals',intro:'Choose the capabilities that match your goals. Each discipline can stand alone or work as part of one connected growth plan.'},
    pricing:{label:'PRICING',title:'Paid Media pricing',intro:'Clear plans for Google Ads, Meta Ads, TikTok Ads, or coordinated omnichannel management.',plans:[['Audit Ads','€169 +% of ad budget','A review of campaign performance and the clearest growth opportunities.'],['Starter Plan','€179 +% of ad budget','A focused launch plan with testing for your first campaigns.'],['Scaling Plan','€179 +% of ad budget','Expand proven campaigns and the channels delivering the best results.'],['Optimum Plan','€219 +% of ad budget','Ongoing optimization, creative testing, and clear reporting.']]},
    portfolio:{title:'Selected work',intro:'We are preparing a concise selection of campaigns, products, and creative work. Contact us for relevant examples from your industry.',note:'Cases are shared privately when client agreements require confidentiality.'},
    about:{
      title:'About Artemida Group', paragraphs:[
        'Founded in 2025 by Artem Vitiuk, Artemida Group is a modern digital agency born at the intersection of deep-rooted expertise and bold, next-generation marketing strategies.',
        'Our foundation is built on solid experience. With over 7 years in the marketing industry, Artem has led high-impact performance campaigns, spoken at top-tier marketing events in Ukraine, and mentored hundreds of ambitious marketers through his own educational programs. Having navigated every stage of growth—from early hypotheses to scaling complex businesses—he brings a level of strategic clarity and technical precision that sets our quality bar exceptionally high.',
        'While our leadership is backed by years of proven results, Artemida Group itself represents a new, energetic chapter. We are an agile team of sharp, creative minds driven by curiosity and fresh perspectives.',
        'We do not limit ourselves to rigid templates or single niches. We are passionate about working across diverse industries, testing untamed angles, and building tailored growth systems for businesses ready to scale. For us, every campaign is an opportunity to challenge the status quo and deliver measurable ROI.'
      ], why:'Why Brands Partner With Us', points:[
        ['Senior Strategic Direction','Guided by a founder who understands performance, economics, and consumer psychology inside out.'],
        ['Fresh & Dynamic Mindset','Driven by an ambitious team that stays ahead of algorithms, creative trends, and emerging platforms.'],
        ['Full-Spectrum Curiosity','Whether it is E-commerce, SaaS, Web3, or local services—we dive deep into every industry with total commitment.'],
        ['Data-First Execution','We merge high-end production and creative experimentation with transparent tracking and strict financial metrics.']
      ]
    },
    contact:{title:'Submit your details, and our team will get back to you',name:'Name',email:'Email address',company:'Company URL',message:'Message',messagePh:'Tell us about your goals',messenger:'Where should we contact you?',messengerContact:'Telegram username or WhatsApp number',telegram:'Telegram',whatsapp:'WhatsApp',submit:'Send',sending:'Sending…',success:'Thank you. Your enquiry has been sent.',error:'The message could not be sent. Please try again.',botStart:'Send /start to the Telegram bot once, then try again.'}
  },
  pl: {
    nav:{home:'Strona główna',services:'Usługi',production:'Produkcja',portfolio:'Portfolio',pricing:'Cennik',about:'O nas',contact:'Kontakt',cta:'Skontaktuj się',telegram:'Telegram'},
    common:{learn:'Zobacz usługę',prices:'Zobacz ceny',apply:'Wyślij zapytanie',back:'Wszystkie usługi',contactEyebrow:'KONTAKT',servicesEyebrow:'USŁUGI',productionEyebrow:'PRODUKCJA',portfolioEyebrow:'PORTFOLIO'},
    home:{title:'Twój nowy partner w <em>Growth Marketingu</em>',intro:'Pomagamy markom B2C i E-Commerce rosnąć dzięki podejściu opartemu na danych, kreacji i pełnym lejku marketingowym.',servicesTitle:'Wszystko, czego potrzebuje Twoja marka, aby rosnąć',servicesIntro:'Eksperci digital marketingu, którzy przekładają cele biznesowe na strategię i realizację. Jasne myślenie, przejrzysta praca i mierzalny postęp.',workLabel:'JAK PRACUJEMY',workTitle:'Jasna droga od pytania do postępu.',steps:[['Audyt i dopasowanie','Analizujemy obecne wyniki, ekonomię, grupę docelową i motory wzrostu, aby stworzyć solidną podstawę.'],['Strategia i priorytety','Wybieramy kanały o największym potencjale i projektujemy konkretne testy dopasowane do etapu oraz budżetu.'],['Zintegrowana realizacja','Zakup mediów, produkcja kreacji i analityka działają razem, aby zwiększyć tempo wzrostu.'],['Optymalizacja i skalowanie','Dane z kampanii bezpośrednio wyznaczają kolejne iteracje, nowe kanały i podział budżetu.']]},
    services:{title:'Kompletny ekosystem usług cyfrowych dopasowanych do celów wzrostu Twojej firmy.',intro:'Wybierz kompetencje dopasowane do swoich celów. Każda usługa może działać samodzielnie lub jako część połączonego planu wzrostu.'},
    pricing:{label:'CENNIK',title:'Cennik Paid Media',intro:'Przejrzyste plany dla Google Ads, Meta Ads, TikTok Ads lub ich połączonej obsługi.',plans:[['Audit Ads','€169 +% budżetu','Przegląd kampanii, wyników i najważniejszych możliwości wzrostu.'],['Starter Plan','€179 +% budżetu','Skupiony plan uruchomienia i testów pierwszych kampanii.'],['Scaling Plan','€179 +% budżetu','Rozwijaj sprawdzone kampanie i kanały z najlepszymi wynikami.'],['Optimum Plan','€219 +% budżetu','Stała optymalizacja, testy kreacji i czytelne raporty.']]},
    portfolio:{title:'Wybrane realizacje.',intro:'Przygotowujemy zwięzły wybór kampanii, produktów i prac kreatywnych. Skontaktuj się z nami, aby zobaczyć przykłady z Twojej branży.',note:'Część realizacji udostępniamy prywatnie ze względu na poufność umów.'},
    about:{title:'O Artemida Group',paragraphs:['Artemida Group została założona w 2025 roku przez Artema Vitiuka. To nowoczesna agencja digitalowa, która łączy wieloletnie doświadczenie z odważnymi strategiami marketingu nowej generacji.','Naszą podstawą jest solidne doświadczenie. Przez ponad 7 lat w marketingu Artem prowadził skuteczne kampanie performance, występował na czołowych wydarzeniach marketingowych w Ukrainie i szkolił setki ambitnych marketerów. Przeszedł każdy etap wzrostu — od pierwszych hipotez po skalowanie złożonych biznesów — dzięki czemu wnosi strategiczną klarowność i techniczną precyzję.','Choć nasze przywództwo opiera się na latach sprawdzonych wyników, sama Artemida Group otwiera nowy, energiczny rozdział. Jesteśmy zwinnym zespołem kreatywnych ludzi napędzanych ciekawością i świeżym spojrzeniem.','Nie zamykamy się w sztywnych szablonach ani jednej branży. Pracujemy w różnych sektorach, testujemy odważne kierunki i budujemy dopasowane systemy wzrostu dla firm gotowych skalować działalność. Każda kampania jest dla nas okazją do podważenia schematów i dostarczenia mierzalnego ROI.'],why:'Dlaczego marki wybierają nas',points:[['Doświadczone kierownictwo strategiczne','Za strategią stoi founder, który dogłębnie rozumie performance, ekonomię i psychologię konsumenta.'],['Świeże i dynamiczne podejście','Ambitny zespół wyprzedza zmiany algorytmów, trendy kreacyjne i nowe platformy.'],['Ciekawość bez ograniczeń','E-commerce, SaaS, Web3 czy usługi lokalne — w każdą branżę wchodzimy z pełnym zaangażowaniem.'],['Realizacja oparta na danych','Łączymy jakościową produkcję i eksperymenty kreatywne z przejrzystym pomiarem i dyscypliną finansową.']]},
    contact:{title:'Prześlij swoje dane, a nasz zespół się z Tobą skontaktuje',name:'Imię',email:'Adres e-mail',company:'Strona firmy',message:'Wiadomość',messagePh:'Opowiedz nam o swoich celach',messenger:'Gdzie możemy się z Tobą skontaktować?',messengerContact:'Nazwa użytkownika lub numer telefonu',telegram:'Telegram',whatsapp:'WhatsApp',submit:'Wyślij',sending:'Wysyłanie…',success:'Dziękujemy. Twoje zapytanie zostało wysłane.',error:'Nie udało się wysłać wiadomości. Spróbuj ponownie.',botStart:'Wyślij raz /start do bota Telegram i spróbuj ponownie.'}
  },
  ru: {
    nav:{home:'Главная',services:'Услуги',production:'Продакшн',portfolio:'Портфолио',pricing:'Цены',about:'О нас',contact:'Контакты',cta:'Связаться',telegram:'Telegram'},
    common:{learn:'Подробнее',prices:'Посмотреть цены',apply:'Оставить заявку',back:'Все услуги',contactEyebrow:'КОНТАКТЫ',servicesEyebrow:'УСЛУГИ',productionEyebrow:'ПРОДАКШН',portfolioEyebrow:'ПОРТФОЛИО'},
    home:{title:'Ваш новый партнер по <em>Growth Marketing</em>',intro:'Помогаем B2C и E-Commerce брендам расти с помощью данных, креатива и системной работы со всей воронкой.',servicesTitle:'Всё, что нужно вашему бренду для роста',servicesIntro:'Эксперты по digital-маркетингу, которые превращают бизнес-цели в стратегию и реализацию. Ясные решения, прозрачная работа и измеримый прогресс.',workLabel:'КАК МЫ РАБОТАЕМ',workTitle:'Понятный путь от вопроса к результату.',steps:[['Аудит и синхронизация','Изучаем текущие показатели, экономику, целевую аудиторию и драйверы роста, чтобы заложить прочную основу.'],['Стратегия и приоритеты','Определяем самые эффективные каналы и проектируем конкретные тесты под ваш этап и бюджет.'],['Комплексная реализация','Медиабаинг, производство креативов и настройка аналитики работают синхронно для максимальной скорости.'],['Оптимизация и масштабирование','Данные напрямую определяют следующие итерации, расширение каналов и распределение бюджета.']]},
    services:{title:'Полная экосистема цифровых услуг, выстроенная под цели роста вашего бизнеса.',intro:'Выберите компетенции под ваши задачи. Каждая услуга может работать отдельно или как часть единой системы роста.'},
    pricing:{label:'ЦЕНЫ',title:'Стоимость Paid Media',intro:'Понятные планы для Google Ads, Meta Ads, TikTok Ads или их комплексного ведения.',plans:[['Audit Ads','€169 +% от бюджета','Разбор кампаний, результатов и ключевых возможностей для роста.'],['Starter Plan','€179 +% от бюджета','План запуска и первых тестов рекламных кампаний.'],['Scaling Plan','€179 +% от бюджета','Развиваем проверенные кампании и самые эффективные каналы.'],['Optimum Plan','€219 +% от бюджета','Постоянная оптимизация, тесты креативов и понятная отчетность.']]},
    portfolio:{title:'Избранные работы.',intro:'Мы готовим лаконичную подборку кампаний, продуктов и креативов. Свяжитесь с нами, чтобы получить релевантные примеры из вашей отрасли.',note:'Некоторые кейсы показываем лично из-за условий конфиденциальности.'},
    about:{title:'Об Artemida Group',paragraphs:['Artemida Group основана Артемом Витюком в 2025 году. Это современное digital-агентство на пересечении глубокого опыта и смелых маркетинговых стратегий нового поколения.','В основе агентства — серьезная экспертиза. За более чем 7 лет в маркетинге Артем руководил результативными performance-кампаниями, выступал на ведущих маркетинговых мероприятиях Украины и обучил сотни амбициозных маркетологов. Пройдя все этапы роста — от первых гипотез до масштабирования сложных бизнесов — он задает высокий стандарт стратегической ясности и технической точности.','При этом Artemida Group открывает новую, энергичную главу. Мы — гибкая команда сильных и креативных специалистов, которыми движут любопытство и свежий взгляд.','Мы не ограничиваем себя жесткими шаблонами или одной нишей. Нам интересно работать в разных индустриях, проверять смелые гипотезы и строить индивидуальные системы роста для компаний, готовых масштабироваться. Каждая кампания для нас — возможность изменить привычный подход и обеспечить измеримый ROI.'],why:'Почему бренды выбирают нас',points:[['Сильное стратегическое руководство','Основатель глубоко понимает performance, экономику и психологию потребителя.'],['Свежий и динамичный подход','Амбициозная команда следит за алгоритмами, креативными трендами и новыми платформами.'],['Интерес к разным индустриям','E-commerce, SaaS, Web3 или локальные услуги — в каждую сферу мы погружаемся полностью.'],['Работа на основе данных','Соединяем качественный продакшн и креативные эксперименты с прозрачной аналитикой и строгими финансовыми метриками.']]},
    contact:{title:'Оставьте свои данные, и наша команда свяжется с вами',name:'Имя',email:'Email',company:'Сайт компании',message:'Сообщение',messagePh:'Расскажите о своих целях',messenger:'Где с вами лучше связаться?',messengerContact:'Имя пользователя или номер телефона',telegram:'Telegram',whatsapp:'WhatsApp',submit:'Отправить',sending:'Отправляем…',success:'Спасибо. Ваша заявка отправлена.',error:'Не удалось отправить сообщение. Попробуйте ещё раз.',botStart:'Один раз отправьте /start Telegram-боту и повторите попытку.'}
  }
};

const serviceCopy = {
  en:{
    paid:{slug:'paid-traffic',chip:'Paid Media',hero:'Paid Media',heroIntro:'Reach the right audience with focused Google, Meta, and TikTok campaigns.',title:'Paid Media & Performance Acquisition',intro:'We design, run, and scale end-to-end paid campaign ecosystems—turning ad spend into predictable growth. From top-of-funnel reach to high-intent conversions, we manage every channel under one strategy.',sections:[['Channels We Manage',[['Social & Search','Meta Ads (Facebook & Instagram), Google Ads, TikTok Ads, LinkedIn Ads'],['Messenger & Niche Growth','Telegram Ads, Reddit Ads, Twitter (X) Ads'],['Programmatic & Native','Outbrain, Taboola, and custom network placements']]],['What We Take Care Of',[['Full-Funnel Strategy','Channel selection, audience segmentation, and budget allocation tailored to your CAC & LTV targets.'],['High-Converting Creatives','Ad copy, static visuals, and video/UGC concepts designed to hook and convert.'],['End-to-End Execution','Setup, A/B testing, bidding management, and continuous scaling.'],['Analytics & Attribution','Custom dashboards and tracking setup so every dollar spent is accounted for.']]]]},
    ux:{slug:'ux-ui',chip:'UX & UI',hero:'UX & UI',heroIntro:'Intuitive digital interfaces built around user needs and business goals.',title:'UI/UX & Product Design',intro:'We create intuitive, high-converting digital interfaces that merge user experience with your business goals. From rapid wireframing to polished visual systems, we design products that turn visitors into loyal customers.',sections:[['What We Design',[['Websites & Landing Pages','High-impact promotional sites and conversion-optimized sales pages.'],['Web & Mobile Apps','Intuitive iOS, Android, and SaaS platform interfaces built for seamless navigation.'],['Design Systems','Scalable UI kits, component libraries, and style guides for consistent branding.']]],['Our Process',[['Research & Wireframing','User flows, competitor analysis, and low-fidelity prototypes to map the optimal user journey.'],['Visual UI Design','Modern, brand-aligned interfaces crafted with precision, motion, and visual hierarchy.'],['Prototyping & Testing','Interactive prototypes to test usability and refine mechanics before development.'],['Dev Handoff','Production-ready Figma files with organized assets and clean specifications for seamless coding.']]]]},
    web:{slug:'web-development',chip:'Web Development',hero:'Web Development',heroIntro:'Fast digital products designed for acquisition, conversion, and growth.',title:'Web & Software Development',intro:'We build fast, scalable, and secure web solutions engineered for high performance and seamless user experience. From responsive landing pages to complex web applications, we write clean code that scales with your business.',sections:[['What We Build',[['Custom Websites & Landing Pages','Pixel-perfect, responsive sites built for speed and maximum conversion.'],['Web Applications & SaaS','Scalable custom web platforms with complex logic and smooth user interactions.'],['E-Commerce Solutions','High-performing online stores optimized for checkout conversion and seamless payments.'],['CMS & Headless Builds','Flexible content management setups (WordPress, Webflow, or Headless CMS) for easy client edits.']]],['Our Engineering Standard',[['Clean & Scalable Code','Modern tech stack ensuring long-term stability and easy future maintenance.'],['Speed & Performance','Blazing-fast load times optimized for Core Web Vitals and SEO performance.'],['Seamless Integrations','Third-party APIs, payment gateways, CRM connections, and analytics tracking.'],['Cross-Browser & Mobile First','Flawless rendering and responsiveness across all screen sizes and devices.']]]]},
    seo:{slug:'seo',chip:'SEO',hero:'SEO',heroIntro:'Build lasting organic visibility and attract high-intent search traffic.',title:'Search Engine Optimization (SEO)',intro:'We drive sustainable organic traffic, elevate search rankings, and capture high-intent users looking for your solutions. We build search presence that delivers compounding ROI over time.',sections:[['What We Do',[['Technical SEO','Site architecture audits, crawlability optimization, Core Web Vitals, and mobile indexing.'],['On-Page & Content Optimization','Keyword research, content strategy, semantic mapping, and meta tag optimization.'],['Off-Page & Authority Building','High-quality link acquisition, digital PR, and authority building strategies.'],['Local & Programmatic SEO','Location-based targeting, schema markup, and scalable landing page frameworks.']]],['Our Approach',[['Data-Driven Audits','Deep-dive analysis of your current rank status, backlink profile, and technical bottlenecks.'],['Intent-Based Keyword Strategy','Focus on high-converting, commercial keywords—not just vanity search volume.'],['Content Engine','Strategic content briefs designed to satisfy user intent and rank at the top of search results.'],['Transparent Reporting','Clear rank tracking, organic traffic insights, and revenue attribution dashboards.']]]]},
    ugc:{slug:'ugc',chip:'UGC & Influencer Marketing',hero:'UGC & Influencer Marketing',heroIntro:'Creator content and campaigns that build trust and drive results.',title:'UGC & Influencer Marketing',intro:'We scale brand trust and conversions through authentic content and strategic creator partnerships. We pair high-converting UGC with performance media buying to lower your CAC and maximize ROAS.',sections:[['What We Do',[['UGC Production','End-to-end creation of direct-response video and static ad assets (unboxings, reviews, hooks, product demos).'],['Creator Sourcing & Management','Vetting, outreach, contract negotiation, and briefing creators aligned with your niche.'],['Whitelisting & Spark Ads','Running paid campaigns directly through creator handles (Meta Whitelisting, TikTok Spark Ads) for higher CTR.'],['Performance Scaling','Testing creative variations, hooks, and CTAs to turn winning organic assets into scalable ad campaigns.']]],['Why It Works',[['Conversion-Focused Briefs','We do not just ask for “pretty videos”—every piece of content is scripted to tackle user objections and sell.'],['Full Rights & Usage','Complete licensing rights to reuse all creator assets across your paid channels, website, and emails.'],['Data-Driven Matchmaking','We select influencers based on audience demographics, engagement rates, and historical conversion performance.'],['Measurable ROI','Full tracking and attribution to measure exact revenue generated by each creator and creative asset.']]]]},
    production:{slug:'production',chip:'Production',hero:'Creative Production',heroIntro:'Video and visual assets built for attention, trust, and measurable action.',title:'Creative Production',intro:'We produce high-impact video and visual assets designed to capture attention, build trust, and drive measurable actions. From high-converting performance ads to brand storytelling, we handle full-cycle media creation tailored to your growth goals.',sections:[['What We Produce',[['Performance Video Ads','Scroll-stopping UGC, product breakdown videos, motion graphics, and high-converting video ads for TikTok, Meta, and YouTube.'],['Static & Display Assets','High-converting banner suites, carousel cards, product renders, and ad graphics optimized for social and programmatic media.'],['Brand & Promotional Videos','High-quality corporate videos, brand stories, product launches, and explainer videos that elevate market positioning.'],['Post-Production & Localization','Video editing, color grading, sound design, voiceovers, multi-language subtitling, and multi-format adaptations.']]],['Why Our Assets Perform',[['Conversion-First Mindset','We do not just create “pretty visuals”—every framework, script, and visual hook is engineered around user psychology and conversion goals.'],['Platform-Native Aesthetics','Content is produced natively for each channel (TikTok, Instagram, YouTube) to feel organic, maximize engagement, and reduce CPMs.'],['Batch Production & Scaling','We shoot and design in modular batches, giving you dozens of creative variations (hooks, CTAs, visuals) for rapid A/B testing.'],['Full-Cycle Execution','From storyboards and scriptwriting to filming, talent sourcing, editing, and final delivery—we manage the entire pipeline.']]]]}
  }
};

const translatedServiceText = {
  pl:{
    paid:['Paid Media i pozyskiwanie klientów','Projektujemy, prowadzimy i skalujemy pełne ekosystemy płatnych kampanii, zamieniając budżet reklamowy w przewidywalny wzrost. Od budowania zasięgu po konwersje o wysokiej intencji zarządzamy wszystkimi kanałami w ramach jednej strategii.',['Kanały, którymi zarządzamy','Zakres naszej pracy']],
    ux:['UI/UX i projektowanie produktów','Tworzymy intuicyjne interfejsy o wysokiej konwersji, które łączą potrzeby użytkowników z celami biznesowymi. Od szybkich makiet po dopracowane systemy wizualne projektujemy produkty zmieniające odwiedzających w lojalnych klientów.',['Co projektujemy','Nasz proces']],
    web:['Web i Software Development','Budujemy szybkie, skalowalne i bezpieczne rozwiązania internetowe zapewniające wysoką wydajność i płynną obsługę. Od responsywnych landing page’y po złożone aplikacje tworzymy czysty kod, który rośnie razem z firmą.',['Co budujemy','Nasz standard inżynieryjny']],
    seo:['Optymalizacja dla wyszukiwarek (SEO)','Budujemy trwały ruch organiczny, poprawiamy pozycje i docieramy do użytkowników aktywnie szukających Twoich rozwiązań. Tworzymy widoczność, która z czasem generuje coraz większy zwrot.',['Co robimy','Nasze podejście']],
    ugc:['UGC i Influencer Marketing','Zwiększamy zaufanie i konwersję dzięki autentycznym treściom oraz strategicznym współpracom z twórcami. Łączymy skuteczne UGC z performance marketingiem, aby obniżać CAC i maksymalizować ROAS.',['Co robimy','Dlaczego to działa']],
    production:['Produkcja kreatywna','Produkujemy skuteczne materiały wideo i wizualne, które przyciągają uwagę, budują zaufanie i prowadzą do mierzalnych działań. Od reklam performance po storytelling marki prowadzimy cały proces produkcji zgodnie z celami wzrostu.',['Co produkujemy','Dlaczego nasze materiały działają']]
  },
  ru:{
    paid:['Paid Media и привлечение клиентов','Проектируем, запускаем и масштабируем полноценные экосистемы платных кампаний, превращая рекламный бюджет в предсказуемый рост. От верхней части воронки до конверсий с высоким намерением управляем всеми каналами в рамках единой стратегии.',['Каналы, которыми мы управляем','Что мы берем на себя']],
    ux:['UI/UX и продуктовый дизайн','Создаем понятные интерфейсы с высокой конверсией, объединяя удобство пользователей и бизнес-цели. От быстрых вайрфреймов до продуманных визуальных систем проектируем продукты, которые превращают посетителей в лояльных клиентов.',['Что мы проектируем','Наш процесс']],
    web:['Веб и программная разработка','Создаем быстрые, масштабируемые и безопасные веб-решения с высокой производительностью и удобным пользовательским опытом. От адаптивных лендингов до сложных приложений пишем чистый код, который растет вместе с бизнесом.',['Что мы создаем','Наш инженерный стандарт']],
    seo:['Поисковая оптимизация (SEO)','Привлекаем стабильный органический трафик, повышаем позиции и приводим пользователей, которые уже ищут ваши решения. Создаем поисковое присутствие с растущей отдачей со временем.',['Что мы делаем','Наш подход']],
    ugc:['UGC и маркетинг влияния','Усиливаем доверие к бренду и конверсию с помощью аутентичного контента и стратегических партнерств с авторами. Соединяем эффективный UGC с performance-рекламой, чтобы снижать CAC и увеличивать ROAS.',['Что мы делаем','Почему это работает']],
    production:['Креативный продакшн','Создаем сильные видео и визуальные материалы, которые привлекают внимание, формируют доверие и ведут к измеримым действиям. От performance-рекламы до историй бренда берем на себя полный цикл производства под ваши цели роста.',['Что мы создаем','Почему наши материалы работают']]
  }
};

const serviceBodyTranslations = {
  pl:{
    paid:{hero:'Paid Media',heroIntro:'Skuteczne kampanie Google, Meta i TikTok dopasowane do Twoich celów.',items:[['Meta Ads (Facebook i Instagram), Google Ads, TikTok Ads oraz LinkedIn Ads','Telegram Ads, Reddit Ads oraz Twitter (X) Ads','Outbrain, Taboola i dedykowane sieci reklamowe'],['Dobór kanałów, segmentacja odbiorców i podział budżetu dopasowane do celów CAC i LTV.','Copy reklamowe, statyczne kreacje oraz koncepcje wideo i UGC zaprojektowane tak, by przyciągać i konwertować.','Konfiguracja, testy A/B, zarządzanie stawkami i stałe skalowanie.','Dedykowane dashboardy i tracking, dzięki którym każde wydane euro jest policzona.']]},
    ux:{hero:'UX & UI',heroIntro:'Intuicyjne interfejsy dopasowane do potrzeb użytkowników i celów firmy.',items:[['Efektowne strony promocyjne i landing page’e zoptymalizowane pod konwersję.','Intuicyjne interfejsy iOS, Android i SaaS stworzone do płynnej nawigacji.','Skalowalne UI kit’y, biblioteki komponentów i style guide’y zapewniające spójność marki.'],['Ścieżki użytkownika, analiza konkurencji i prototypy low-fi mapujące optymalną podróż klienta.','Nowoczesne interfejsy zgodne z marką, dopracowane pod kątem hierarchii, ruchu i detalu.','Interaktywne prototypy do testowania użyteczności i dopracowania mechaniki przed developmentem.','Gotowe do produkcji pliki Figma z uporządkowanymi assetami i czytelną specyfikacją.']]},
    web:{hero:'Web Development',heroIntro:'Szybkie produkty cyfrowe wspierające pozyskiwanie klientów i wzrost.',items:[['Dopasowane, responsywne strony przygotowane pod szybkość i maksymalną konwersję.','Skalowalne platformy webowe z zaawansowaną logiką i płynnymi interakcjami.','Wydajne sklepy internetowe zoptymalizowane pod finalizację zakupu i płatności.','Elastyczne wdrożenia WordPress, Webflow lub Headless CMS umożliwiające łatwą edycję.'],['Nowoczesny stack zapewniający stabilność i łatwy rozwój w przyszłości.','Bardzo szybkie ładowanie zoptymalizowane pod Core Web Vitals i SEO.','Integracje z API, płatnościami, CRM i narzędziami analitycznymi.','Perfekcyjne działanie i responsywność na każdej przeglądarce i urządzeniu.']]},
    seo:{hero:'SEO',heroIntro:'Budujemy widoczność organiczną i pozyskujemy wartościowy ruch z wyszukiwarki.',items:[['Audyty architektury, optymalizacja crawlowania, Core Web Vitals i indeksowanie mobilne.','Analiza słów kluczowych, strategia treści, mapowanie semantyczne i optymalizacja meta tagów.','Pozyskiwanie jakościowych linków, digital PR i budowanie autorytetu.','Targetowanie lokalne, schema markup i skalowalne frameworki landing page’y.'],['Dogłębna analiza pozycji, profilu linków i barier technicznych.','Skupienie na komercyjnych frazach o wysokiej konwersji, a nie tylko na wolumenie.','Strategiczne briefy treści odpowiadające intencji użytkownika i pomagające zdobywać wysokie pozycje.','Czytelny monitoring pozycji, ruchu organicznego i wpływu na przychód.']]},
    ugc:{hero:'UGC & Influencer Marketing',heroIntro:'Treści twórców, które budują zaufanie i wspierają wyniki.',items:[['Kompleksowa produkcja wideo i statycznych reklam direct-response: unboxingi, recenzje, hooki i demo produktów.','Weryfikacja, outreach, negocjacje umów i briefing twórców dopasowanych do niszy.','Prowadzenie kampanii z kont twórców przez Meta Whitelisting i TikTok Spark Ads w celu zwiększenia CTR.','Testowanie wariantów, hooków i CTA oraz skalowanie najlepszych materiałów.'],['Każdy materiał powstaje według scenariusza, który odpowiada na obiekcje i sprzedaje.','Pełne prawa licencyjne do wykorzystania materiałów w reklamach, na stronie i w e-mailach.','Dobieramy influencerów według demografii, zaangażowania i historii konwersji.','Pełny tracking pozwala mierzyć przychód generowany przez każdego twórcę i materiał.']]},
    production:{hero:'Produkcja kreatywna',heroIntro:'Wideo i materiały wizualne, które przyciągają uwagę i budują zaufanie.',items:[['UGC, prezentacje produktu, motion graphics i skuteczne reklamy wideo dla TikToka, Meta i YouTube.','Zestawy bannerów, karuzele, rendery produktów i grafiki do social oraz programmatic.','Filmy korporacyjne, historie marki, premiery produktów i explainery wzmacniające pozycjonowanie.','Montaż, color grading, sound design, voice-over, napisy w wielu językach i adaptacje formatów.'],['Każdy scenariusz i hook wizualny jest projektowany wokół psychologii użytkownika i celu konwersji.','Treści powstają natywnie dla TikToka, Instagrama i YouTube, aby zwiększać zaangażowanie i obniżać CPM.','Modułowa produkcja daje wiele wariantów hooków, CTA i wizuali do szybkich testów A/B.','Prowadzimy cały proces: storyboard, scenariusz, zdjęcia, dobór talentów, montaż i dostawę.']]}
  },
  ru:{
    paid:{hero:'Paid Media',heroIntro:'Эффективные кампании Google, Meta и TikTok под ваши цели.',items:[['Meta Ads (Facebook и Instagram), Google Ads, TikTok Ads и LinkedIn Ads','Telegram Ads, Reddit Ads и Twitter (X) Ads','Outbrain, Taboola и индивидуальные рекламные сети'],['Выбор каналов, сегментация аудиторий и распределение бюджета под цели CAC и LTV.','Рекламные тексты, статичные материалы и видео или UGC-концепции, которые цепляют и конвертируют.','Настройка, A/B-тесты, управление ставками и постоянное масштабирование.','Индивидуальные дашборды и трекинг, чтобы учитывать каждое вложенное евро.']]},
    ux:{hero:'UX & UI',heroIntro:'Понятные интерфейсы под потребности пользователей и бизнеса.',items:[['Эффектные промо-сайты и продающие страницы, оптимизированные под конверсию.','Интуитивные интерфейсы iOS, Android и SaaS для удобной навигации.','Масштабируемые UI-киты, библиотеки компонентов и гайдлайны для целостного бренда.'],['Пользовательские сценарии, анализ конкурентов и low-fi прототипы оптимального пути клиента.','Современные интерфейсы в стиле бренда с точной иерархией, движением и деталями.','Интерактивные прототипы для проверки удобства до начала разработки.','Готовые Figma-файлы с организованными ресурсами и чистой спецификацией.']]},
    web:{hero:'Web Development',heroIntro:'Быстрые цифровые продукты для привлечения клиентов и роста.',items:[['Адаптивные сайты с точной версткой, высокой скоростью и фокусом на конверсию.','Масштабируемые веб-платформы со сложной логикой и плавными взаимодействиями.','Производительные интернет-магазины с удобным оформлением заказа и оплатой.','Гибкие решения на WordPress, Webflow или Headless CMS для простого редактирования.'],['Современный стек для стабильности и удобного развития продукта.','Быстрая загрузка с оптимизацией Core Web Vitals и SEO.','Интеграции с API, платежами, CRM и системами аналитики.','Стабильное отображение и адаптивность на всех устройствах и в браузерах.']]},
    seo:{hero:'SEO',heroIntro:'Повышаем органическую видимость и привлекаем целевой трафик.',items:[['Аудит архитектуры сайта, оптимизация сканирования, Core Web Vitals и мобильная индексация.','Исследование ключей, контент-стратегия, семантическое планирование и оптимизация метатегов.','Качественные ссылки, digital PR и стратегии роста авторитета.','Локальный таргетинг, schema-разметка и масштабируемые шаблоны страниц.'],['Глубокий анализ позиций, ссылочного профиля и технических ограничений.','Фокус на коммерческих запросах с высокой конверсией, а не только на объеме поиска.','Стратегические брифы, которые отвечают намерению пользователя и помогают занимать верхние позиции.','Понятный контроль позиций, органического трафика и влияния на выручку.']]},
    ugc:{hero:'UGC & Influencer Marketing',heroIntro:'Контент авторов, который укрепляет доверие и помогает продажам.',items:[['Полный цикл direct-response видео и статичных материалов: распаковки, отзывы, хуки и демонстрации продукта.','Проверка, поиск, переговоры и брифинг авторов, подходящих вашей нише.','Запуск рекламы через аккаунты авторов с Meta Whitelisting и TikTok Spark Ads для высокого CTR.','Тесты вариаций, хуков и CTA с масштабированием лучших органических материалов.'],['Каждый материал строится по сценарию, который снимает возражения и помогает продавать.','Полные права на использование материалов в рекламе, на сайте и в email.','Выбираем авторов по демографии аудитории, вовлеченности и прошлым конверсиям.','Полная аналитика показывает точную выручку каждого автора и креатива.']]},
    production:{hero:'Креативный продакшн',heroIntro:'Видео и визуальные материалы для внимания и доверия.',items:[['UGC, обзоры продуктов, моушн-графика и конверсионные видео для TikTok, Meta и YouTube.','Баннеры, карусели, рендеры продукта и графика для социальных и programmatic-каналов.','Корпоративные ролики, истории бренда, запуски продуктов и объясняющие видео.','Монтаж, цветокоррекция, звук, озвучка, многоязычные субтитры и адаптация форматов.'],['Каждый сценарий и визуальный хук строится вокруг психологии пользователя и цели конверсии.','Контент создается нативно для TikTok, Instagram и YouTube, чтобы повышать вовлеченность и снижать CPM.','Модульное производство дает десятки вариантов хуков, CTA и визуалов для быстрых A/B-тестов.','Берем на себя весь цикл: сториборд, сценарий, съемка, подбор талантов, монтаж и финальная выдача.']]}
  }
};

const labelTranslations = {
  pl:{'Social & Search':'Social i Search','Messenger & Niche Growth':'Messengery i kanały niszowe','Programmatic & Native':'Programmatic i Native','Full-Funnel Strategy':'Strategia pełnego lejka','High-Converting Creatives':'Kreacje o wysokiej konwersji','End-to-End Execution':'Pełna realizacja','Analytics & Attribution':'Analityka i atrybucja','Websites & Landing Pages':'Strony i landing page’e','Web & Mobile Apps':'Aplikacje webowe i mobilne','Design Systems':'Systemy projektowe','Research & Wireframing':'Badania i makiety','Visual UI Design':'Projekt interfejsu','Prototyping & Testing':'Prototypowanie i testy','Dev Handoff':'Przekazanie do developmentu','Custom Websites & Landing Pages':'Dedykowane strony i landing page’e','Web Applications & SaaS':'Aplikacje webowe i SaaS','E-Commerce Solutions':'Rozwiązania E-Commerce','CMS & Headless Builds':'CMS i rozwiązania Headless','Clean & Scalable Code':'Czysty i skalowalny kod','Speed & Performance':'Szybkość i wydajność','Seamless Integrations':'Spójne integracje','Cross-Browser & Mobile First':'Cross-browser i Mobile First','Technical SEO':'SEO techniczne','On-Page & Content Optimization':'Optymalizacja On-Page i treści','Off-Page & Authority Building':'Off-Page i budowa autorytetu','Local & Programmatic SEO':'SEO lokalne i programmatic','Data-Driven Audits':'Audyty oparte na danych','Intent-Based Keyword Strategy':'Strategia słów według intencji','Content Engine':'System treści','Transparent Reporting':'Przejrzyste raportowanie','UGC Production':'Produkcja UGC','Creator Sourcing & Management':'Dobór i zarządzanie twórcami','Whitelisting & Spark Ads':'Whitelisting i Spark Ads','Performance Scaling':'Skalowanie wyników','Conversion-Focused Briefs':'Briefy nastawione na konwersję','Full Rights & Usage':'Pełne prawa do użycia','Data-Driven Matchmaking':'Dobór oparty na danych','Measurable ROI':'Mierzalny ROI','Performance Video Ads':'Reklamy wideo performance','Static & Display Assets':'Materiały statyczne i display','Brand & Promotional Videos':'Filmy brandowe i promocyjne','Post-Production & Localization':'Postprodukcja i lokalizacja','Conversion-First Mindset':'Podejście conversion-first','Platform-Native Aesthetics':'Estetyka natywna dla platform','Batch Production & Scaling':'Produkcja seriami i skalowanie','Full-Cycle Execution':'Pełny cykl realizacji'},
  ru:{'Social & Search':'Соцсети и поиск','Messenger & Niche Growth':'Мессенджеры и нишевые каналы','Programmatic & Native':'Programmatic и Native','Full-Funnel Strategy':'Стратегия полной воронки','High-Converting Creatives':'Креативы с высокой конверсией','End-to-End Execution':'Полная реализация','Analytics & Attribution':'Аналитика и атрибуция','Websites & Landing Pages':'Сайты и лендинги','Web & Mobile Apps':'Веб и мобильные приложения','Design Systems':'Дизайн-системы','Research & Wireframing':'Исследования и вайрфреймы','Visual UI Design':'Визуальный UI-дизайн','Prototyping & Testing':'Прототипирование и тесты','Dev Handoff':'Передача в разработку','Custom Websites & Landing Pages':'Индивидуальные сайты и лендинги','Web Applications & SaaS':'Веб-приложения и SaaS','E-Commerce Solutions':'Решения для E-Commerce','CMS & Headless Builds':'CMS и Headless-разработка','Clean & Scalable Code':'Чистый масштабируемый код','Speed & Performance':'Скорость и производительность','Seamless Integrations':'Бесшовные интеграции','Cross-Browser & Mobile First':'Кроссбраузерность и Mobile First','Technical SEO':'Техническое SEO','On-Page & Content Optimization':'On-Page и контент-оптимизация','Off-Page & Authority Building':'Off-Page и развитие авторитета','Local & Programmatic SEO':'Локальное и программное SEO','Data-Driven Audits':'Аудиты на основе данных','Intent-Based Keyword Strategy':'Семантика по намерению','Content Engine':'Контент-система','Transparent Reporting':'Прозрачная отчетность','UGC Production':'Производство UGC','Creator Sourcing & Management':'Поиск и управление авторами','Whitelisting & Spark Ads':'Whitelisting и Spark Ads','Performance Scaling':'Масштабирование результатов','Conversion-Focused Briefs':'Брифы под конверсию','Full Rights & Usage':'Полные права на использование','Data-Driven Matchmaking':'Подбор на основе данных','Measurable ROI':'Измеримый ROI','Performance Video Ads':'Performance-видеореклама','Static & Display Assets':'Статичные и display-материалы','Brand & Promotional Videos':'Брендовые и промо-видео','Post-Production & Localization':'Постпродакшн и локализация','Conversion-First Mindset':'Фокус на конверсии','Platform-Native Aesthetics':'Нативная эстетика платформ','Batch Production & Scaling':'Серийное производство и масштабирование','Full-Cycle Execution':'Полный цикл производства'}
};

function localizedServices(){
  const base = serviceCopy.en;
  if(lang === 'en') return base;
  const locale = translatedServiceText[lang];
  const labels = labelTranslations[lang];
  const body = serviceBodyTranslations[lang];
  const result = {};
  Object.entries(base).forEach(([key,item])=>{
    const tr=locale[key];
    result[key]={...item,hero:body[key].hero,heroIntro:body[key].heroIntro,title:tr[0],intro:tr[1],sections:item.sections.map((section,i)=>[tr[2][i],section[1].map(([label,text],j)=>[labels[label]||label,body[key].items[i][j]||text])])};
  });
  return result;
}

function languageSwitch(){return `<div class="language-switch" aria-label="Language">${supported.map(code=>`<button type="button" data-lang="${code}" ${lang===code?'aria-current="true"':''}>${code.toUpperCase()}</button>`).join('')}</div>`}
function brandMark(){return `<span class="brand-mark" aria-hidden="true"><img src="/assets/artemida-group-logo.png" alt=""></span>`}
function brandLockup(label='Artemida Group',className=''){return `<span class="brand-lockup ${className}">${brandMark()}<span>${label}</span></span>`}
function telegramButton(){return `<a class="telegram-button" href="https://t.me/artemida_marketing" target="_blank" rel="noreferrer" aria-label="Telegram"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.7 3.5 3.8 10c-1.15.46-1.14 1.1-.2 1.39l4.34 1.35 1.66 5.1c.2.55.1.77.7.77.46 0 .67-.21.93-.46l2.08-2.02 4.33 3.2c.8.44 1.37.21 1.57-.74l2.84-13.4c.29-1.16-.44-1.69-1.35-1.69ZM9.52 12.43l8.48-5.35c.42-.26.8-.12.49.16l-7 6.32-.27 2.86-1.7-3.99Z"/></svg></a>`}
function header(){
  const n=copy[lang].nav;
  const links=[['/',n.home],['/services/',n.services],['/services/production/',n.production],['/portfolio/',n.portfolio],['/pricing/',n.pricing],['/about/',n.about],['/contact/',n.contact]];
  return `<a class="skip" href="#main">${n.home}</a><header class="site-header"><a class="brand" href="/" aria-label="Artemida Group">${brandLockup()}</a><nav class="desktop-nav" aria-label="Main navigation">${links.slice(0,-1).map(([href,label])=>`<a href="${href}" ${cleanPath===href?'aria-current="page"':''}>${label}</a>`).join('')}<a class="button button-small" href="/contact/">${n.cta}</a>${languageSwitch()}</nav><button class="menu-toggle" type="button" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button></header><aside class="mobile-menu" aria-hidden="true"><div class="mobile-menu-inner"><nav>${links.map(([href,label])=>`<a href="${href}" ${cleanPath===href?'aria-current="page"':''}>${label}</a>`).join('')}</nav><div class="mobile-menu-actions"><a class="button" href="/contact/">${n.cta}</a>${languageSwitch()}</div></div></aside>`;
}
function footer(){
  const n=copy[lang].nav;
  return `<footer class="footer"><div class="wrap footer-grid"><div><address><strong>${brandLockup()}</strong><br>ul. Gen. Józefa Longina Sowińskiego 46 lok.1c<br>40-018 Katowice<br>NIP: 9542915634</address></div><div class="footer-links"><a href="mailto:info@artemidagroup.eu">info@artemidagroup.eu</a><a href="tel:+48795657830">+48 795 657 830</a></div></div><div class="wrap footer-bottom"><span class="copyright"><span>© ${new Date().getFullYear()}</span>${brandLockup()}</span>${languageSwitch()}</div></footer>`;
}
function layout(main){
  app.innerHTML=header()+main+footer();
  if(isFile){
    app.querySelectorAll('a[href^="/"]').forEach(a=>{const h=a.getAttribute('href');if(!h.startsWith('//'))a.setAttribute('href','#'+h)});
    app.querySelectorAll('img[src^="/"]').forEach(i=>i.setAttribute('src',i.getAttribute('src').slice(1)));
  }
  bindGlobal();
}
function eyebrow(text){return `<p class="eyebrow">${text}</p>`}
function icon(kind){
  const paths={paid:'<path d="M5 25v-7h5v7m3 0v-9h5v9m3 0v-6h5v6M7 13l6-5 5 3 7-6"/>',ux:'<rect x="4" y="6" width="24" height="20" rx="3"/><path d="M4 12h24M9 16h7v6H9zm11 1h5m-5 4h5"/>',web:'<rect x="5" y="5" width="22" height="18" rx="2"/><path d="M3 27h26M13 11l-3 3 3 3m6-6 3 3-3 3"/>',seo:'<circle cx="16" cy="16" r="11"/><path d="M5 16h22M16 5c-4 4-4 18 0 22m0-22c4 4 4 18 0 22"/>',ugc:'<path d="M6 7h20v15H15l-5 4v-4H6z"/><path d="m14 11 7 4-7 4z"/>',production:'<path d="M6 8h20v16H6zM3 12h3m20 0h3M3 20h3m20 0h3"/><path d="m14 12 6 4-6 4z"/>'};
  return `<span class="service-icon icon-${kind}" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths[kind]}</svg></span>`;
}

function homePage(){
  const c=copy[lang], s=localizedServices();
  const chips=['paid','ux','web','seo','ugc'];
  document.title='Artemida Group — Growth Marketing';
  return `<main id="main"><section class="hero"><div class="wrap hero-inner"><h1>${c.home.title}</h1><p>${c.home.intro}</p><a class="button button-large" href="/contact/">${c.nav.cta}</a></div></section><section class="home-services section"><div class="wrap"><div class="measure"><h2>${c.home.servicesTitle}</h2><p>${c.home.servicesIntro}</p></div><div class="service-chips">${chips.map(k=>`<a href="/services/${s[k].slug}/">${icon(k)}<span>${s[k].chip}</span></a>`).join('')}</div></div></section><section class="work section"><div class="wrap"><div class="measure">${eyebrow(c.home.workLabel)}<h2>${c.home.workTitle}</h2></div><ol class="work-list">${c.home.steps.map((step,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span><div><h3>${step[0]}</h3><p>${step[1]}</p></div></li>`).join('')}</ol></div></section></main>`;
}

function servicesPage(){
  const c=copy[lang], s=localizedServices();
  const order=['paid','ux','web','seo','ugc','production'];
  document.title=`${c.nav.services} — Artemida Group`;
  return `<main id="main"><section class="page-hero"><div class="wrap measure">${eyebrow(c.common.servicesEyebrow)}<h1>${c.services.title}</h1><p>${c.services.intro}</p></div></section><section class="service-index section"><div class="wrap">${order.map((key,i)=>{const item=s[key];return `<article><span class="index-number">${String(i+1).padStart(2,'0')}</span><div><h2>${item.title}</h2><p>${item.heroIntro}</p></div><div class="row-actions"><a href="/services/${item.slug}/">${c.common.learn} ↗</a><a href="/pricing/">${c.common.prices}</a></div></article>`}).join('')}</div></section></main>`;
}

function servicePage(key){
  const c=copy[lang], s=localizedServices()[key];
  const isProduction=key==='production';
  document.title=`${s.title} — Artemida Group`;
  const contactButton=`<a class="button service-contact-button" href="/contact/?service=${encodeURIComponent(s.chip)}">${c.nav.cta}</a>`;
  return `<main id="main"><section class="page-hero service-hero${isProduction?' production-page-hero':''}"><div class="wrap measure">${eyebrow(isProduction?c.common.productionEyebrow:`${c.common.servicesEyebrow} · ARTEMIDA GROUP`)}<h1>${s.hero}</h1><p>${s.heroIntro}</p>${contactButton}</div></section><section class="service-detail section${isProduction?' production-detail':''}"><div class="wrap detail-grid"><header>${isProduction?'':`<h2>${s.title}</h2>`}<p>${s.intro}</p></header><div class="detail-sections">${s.sections.map(([title,items])=>`<section><h3>${title}</h3><dl>${items.map(([label,text])=>`<div><dt>${label}</dt><dd>${text}</dd></div>`).join('')}</dl></section>`).join('')}</div></div></section></main>`;
}

const pricingLabels={
  en:{title:'Choose the type of service',paid:'Paid Media',production:'Production',seo:'SEO',combined:'Omnichannel Ads',start:'Get started',who:'Who is it for?',how:'How does it work?',swipe:'Pricing plans. Swipe horizontally to view more.'},
  pl:{title:'Wybierz rodzaj usługi',paid:'Paid Media',production:'Produkcja',seo:'SEO',combined:'Omnichannel Ads',start:'Zacznijmy',who:'Dla kogo?',how:'Jak to działa?',swipe:'Plany cenowe. Przesuń poziomo, aby zobaczyć więcej.'},
  ru:{title:'Выберите тип услуги',paid:'Paid Media',production:'Продакшн',seo:'SEO',combined:'Omnichannel Ads',start:'Оставить заявку',who:'Для кого?',how:'Как это работает?',swipe:'Тарифы. Листайте вбок, чтобы увидеть больше.'}
};

const paidPlanDetails={
  en:[
    ['For brands that want to check how well their paid campaigns are performing — whether they work with an agency, in-house team, or manage ads on their own.','We analyze campaign structure, goal setup, results, and budget allocation. Then we show what works, what needs improvement, and where potential is being lost.'],
    ['For smaller e-commerce brands starting with paid advertising and testing an initial budget.','A predictable monthly fee covers one channel and a focused campaign scope suited to the size of the account.'],
    ['For businesses that have tested paid advertising and are ready to increase activity and budget.','We expand testing and optimization as spend grows. The final calculation and scope are confirmed in the proposal.'],
    ['For brands ready to improve proven campaigns and grow their strongest channels.','We refine targeting, bids, and creative based on campaign performance.'],
    ['For established advertisers who need consistent optimization across paid media.','We combine ongoing optimization, creative experiments, tracking checks, and clear reporting.']
  ],
  pl:[
    ['Dla marek, które chcą sprawdzić skuteczność kampanii prowadzonych przez agencję, zespół wewnętrzny lub samodzielnie.','Analizujemy strukturę kampanii, cele, wyniki i podział budżetu. Pokazujemy, co działa, co wymaga poprawy i gdzie tracony jest potencjał.'],
    ['Dla mniejszych marek e-commerce, które zaczynają płatne działania i testują pierwszy budżet.','Stała miesięczna opłata obejmuje jeden kanał i skupiony zakres kampanii dopasowany do wielkości konta.'],
    ['Dla firm, które przetestowały płatne kampanie i są gotowe zwiększać aktywność oraz budżet.','Rozszerzamy testy i optymalizację wraz ze wzrostem wydatków. Ostateczny zakres potwierdzamy w ofercie.'],
    ['Dla marek gotowych rozwijać sprawdzone kampanie i najlepsze kanały.','Dopracowujemy targetowanie, stawki i kreacje na podstawie wyników.'],
    ['Dla reklamodawców potrzebujących stałej optymalizacji paid media.','Łączymy optymalizację, testy kreacji, kontrolę pomiaru i czytelne raporty.']
  ],
  ru:[
    ['Для брендов, которые хотят проверить эффективность рекламы — независимо от того, ведёт её агентство, внутренняя команда или сам бизнес.','Анализируем структуру кампаний, цели, результаты и распределение бюджета. Показываем, что работает, что нужно улучшить и где теряется потенциал.'],
    ['Для небольших e-commerce брендов, которые запускают платную рекламу и тестируют первый бюджет.','Фиксированная ежемесячная оплата покрывает один канал и понятный объём работ под размер аккаунта.'],
    ['Для бизнеса, который уже протестировал платную рекламу и готов увеличивать активность и бюджет.','Расширяем тесты и оптимизацию по мере роста расходов. Итоговый расчёт и объём работ фиксируем в предложении.'],
    ['Для брендов, готовых развивать проверенные кампании и лучшие каналы.','Улучшаем таргетинг, ставки и креативы по результатам рекламы.'],
    ['Для рекламодателей, которым нужна постоянная оптимизация paid media.','Объединяем оптимизацию, тесты креативов, проверку аналитики и отчёты.']
  ]
};

const combinedPlanDetails={
  en:[
    ['For brands that want a clear growth plan across Google Ads, Meta Ads, and TikTok Ads.','We review account structure, audiences, creative, tracking, and results, then map the highest-priority opportunities across all three platforms.'],
    ['For teams looking to coordinate their first campaigns across Google, Meta, and TikTok.','We build a focused cross-platform plan, launch agreed campaign tests, and report on results. The channel mix and monthly scope are tailored to your goals.'],
    ['For brands ready to scale proven campaigns across Google Ads, Meta Ads, and TikTok Ads.','We expand winning tests, refine creative and audiences, and shift investment toward the channels producing the strongest results.'],
    ['For brands growing campaigns across Google, Meta, and TikTok together.','We coordinate budgets, creative tests, and optimization across all three platforms.'],
    ['For advertisers who want one partner across Google Ads, Meta Ads, and TikTok Ads.','We align performance goals and manage the complete cross-platform plan.']
  ],
  pl:[
    ['Dla marek, które chcą zaplanować wzrost w Google Ads, Meta Ads i TikTok Ads.','Analizujemy strukturę kont, grupy odbiorców, kreacje, pomiar i wyniki, a następnie wskazujemy najważniejsze możliwości na wszystkich trzech platformach.'],
    ['Dla zespołów, które chcą skoordynować pierwsze kampanie w Google, Meta i TikToku.','Przygotowujemy dopasowany plan działań, uruchamiamy uzgodnione testy i raportujemy wyniki. Dobór kanałów i miesięczny zakres zależą od celów.'],
    ['Dla marek gotowych skalować sprawdzone kampanie w Google Ads, Meta Ads i TikTok Ads.','Rozwijamy skuteczne testy, dopracowujemy kreacje i grupy odbiorców oraz przesuwamy budżet do kanałów z najlepszymi wynikami.'],
    ['Dla marek rozwijających kampanie równolegle w Google, Meta i TikToku.','Koordynujemy budżety, testy kreacji i optymalizację na trzech platformach.'],
    ['Dla firm szukających jednego partnera do Google Ads, Meta Ads i TikTok Ads.','Ustalamy cele skuteczności i prowadzimy wspólny plan działań.']
  ],
  ru:[
    ['Для брендов, которым нужен единый план роста в Google Ads, Meta Ads и TikTok Ads.','Проверяем структуру аккаунтов, аудитории, креативы, аналитику и результаты, затем определяем главные точки роста на всех трёх платформах.'],
    ['Для команд, которые хотят согласованно запустить кампании в Google, Meta и TikTok.','Составляем общий план, запускаем согласованные тесты и отслеживаем результаты. Состав каналов и ежемесячный объём работ подбираем под ваши цели.'],
    ['Для брендов, готовых масштабировать успешные кампании в Google Ads, Meta Ads и TikTok Ads.','Расширяем удачные тесты, улучшаем креативы и аудитории, направляя бюджет в каналы с лучшими результатами.'],
    ['Для брендов, которые развивают кампании сразу в Google, Meta и TikTok.','Координируем бюджеты, тесты креативов и оптимизацию на всех трёх платформах.'],
    ['Для компаний, которым нужен один партнёр по Google Ads, Meta Ads и TikTok Ads.','Согласуем цели и ведём общий план работы во всех рекламных каналах.']
  ]
};

const extraPricing={
  en:{production:[['Creative Strategy',[['Creative Add-on','Included with paid campaigns','Creative direction informed by campaign results.'],['Creative Kickstarter','€189','Brand review, creative briefs, and consultation.'],['Creative Growth','€329','Deeper analysis, more briefs, and regular consultation.'],['Creative Consulting','€129','Focused creative guidance for your next campaign.']]],['Ad Creatives',[['Ad Creatives','€229','Campaign-ready visual and copy concepts for your ads.'],['Creatives Optimum','€379','A broader set of creative variations for ongoing testing.'],['Creatives Pro','Custom quote','Volume and delivery pace agreed for your campaigns.']]]],seo:[['SEO',[['Audit','€100','A prioritized technical and structural review.'],['Content','€159','Search-led content planning for your audience.'],['Kickstarter','€419','A focused SEO foundation and first implementation cycle.'],['Ongoing','€219','Continuous search optimization and measurement.']]]]},
  pl:{production:[['Strategia kreatywna',[['Creative Add-on','W cenie kampanii płatnych','Kierunek kreatywny oparty na wynikach kampanii.'],['Creative Kickstarter','€189','Przegląd marki, briefy kreatywne i konsultacja.'],['Creative Growth','€329','Pogłębiona analiza i regularne konsultacje.'],['Creative Consulting','€129','Wsparcie kreatywne dla kolejnej kampanii.']]],['Kreacje reklamowe',[['Ad Creatives','€229','Koncepcje wizualne i teksty do reklam.'],['Creatives Optimum','€379','Więcej wariantów kreacji do regularnych testów.'],['Creatives Pro','Wycena indywidualna','Zakres i tempo dostaw ustalane pod kampanię.']]]],seo:[['SEO',[['Audit','€100','Priorytetowy audyt techniczny i strukturalny.'],['Content','€159','Plan treści dopasowany do odbiorców i wyszukiwania.'],['Kickstarter','€419','Podstawa SEO i pierwszy cykl wdrożeniowy.'],['Ongoing','€219','Ciągła optymalizacja i pomiar wyników.']]]]},
  ru:{production:[['Креативная стратегия',[['Creative Add-on','Входит в платные кампании','Креативное направление на основе результатов кампаний.'],['Creative Kickstarter','€189','Анализ бренда, креативные брифы и консультация.'],['Creative Growth','€329','Расширенная стратегия и регулярные консультации.'],['Creative Consulting','€129','Креативная поддержка для следующей кампании.']]],['Рекламные креативы',[['Ad Creatives','€229','Идеи визуалов и текстов для рекламных кампаний.'],['Creatives Optimum','€379','Больше вариантов креативов для постоянных тестов.'],['Creatives Pro','Индивидуальный расчёт','Объём и темп производства согласуем под кампании.']]]],seo:[['SEO',[['Audit','€100','Приоритетный технический и структурный аудит.'],['Content','€159','План контента с учетом аудитории и поискового спроса.'],['Kickstarter','€419','Основа SEO и первый цикл внедрения.'],['Ongoing','€219','Регулярная оптимизация и аналитика.']]]]}
};

// 5 detail blocks exist for 4 plans; Optimum Plan uses the 'ongoing optimization' block.
const planDetailMap=[0,1,2,4];
function pricingCatalog(){
  const c=copy[lang], labels=pricingLabels[lang], paidDetails=paidPlanDetails[lang];
  const paidPlans=c.pricing.plans.map((p,i)=>({name:p[0],price:p[1],desc:p[2],who:paidDetails[planDetailMap[i]][0],how:paidDetails[planDetailMap[i]][1]}));
  const combinedQualifier=lang==='pl'?'+% budżetu':lang==='ru'?'+% от бюджета':'+% of ad budget';
  const combinedPrices=['€319','€329','€329','€419'].map(price=>`${price} ${combinedQualifier}`);
  const combinedPlans=c.pricing.plans.map((p,i)=>({name:p[0],price:combinedPrices[i],desc:p[2],who:combinedPlanDetails[lang][planDetailMap[i]][0],how:combinedPlanDetails[lang][planDetailMap[i]][1]}));
  const normalize=groups=>groups.map(([name,plans])=>({name,plans:plans.map(p=>({name:p[0],price:p[1],desc:p[2],who:lang==='pl'?`Dla zespołów, które potrzebują wsparcia w obszarze ${name.toLowerCase()}.`:lang==='ru'?`Для команд, которым нужна поддержка по направлению «${name}».`:`For teams that need ${name.toLowerCase()} support at their current stage.`,how:p[2]}))}));
  return [
    {key:'paid',label:labels.paid,groups:['Google Ads','Meta Ads','TikTok Ads'].map(name=>({name,plans:paidPlans})).concat([{name:labels.combined,plans:combinedPlans}])},
    {key:'production',label:labels.production,groups:normalize(extraPricing[lang].production)},
    {key:'seo',label:labels.seo,groups:normalize(extraPricing[lang].seo)}
  ];
}

function splitPrice(price){const match=price.match(/^(€[\d,]+)(.*)$/);return match?[match[1],match[2].replace(/^\s*[·/]\s*/,'')]:[price,'']}
function pricingCard(plan,service){
  const labels=pricingLabels[lang], [amount,qualifier]=splitPrice(plan.price), query=new URLSearchParams({service,plan:plan.name}), who=plan.who||plan.desc||'', how=plan.how||plan.desc||'';
  return `<article class="pricing-card"><div class="pricing-card-top"><span class="plan-badge">${plan.name}</span></div><div class="pricing-card-price"><strong>${amount}</strong>${qualifier?`<span>${qualifier}</span>`:''}</div><a class="button pricing-cta" href="/contact/?${query.toString()}">${labels.start}</a><div class="pricing-card-info"><strong><span class="check-icon">✓</span>${labels.who}</strong><p>${who}</p></div><div class="pricing-card-info"><strong><span class="check-icon">✓</span>${labels.how}</strong><p>${how}</p></div></article>`;
}
function pricingPage(){
  const c=copy[lang], labels=pricingLabels[lang], catalog=pricingCatalog(), first=catalog[0], group=first.groups[0];
  document.title=`${c.nav.pricing} — Artemida Group`;
  return `<main id="main"><section class="pricing-section section"><div class="wrap"><header class="pricing-heading"><h1>${labels.title}</h1></header><div id="pricing-ui"><div class="pricing-tabs" role="tablist" aria-label="${labels.title}">${catalog.map((item,i)=>`<button class="pricing-tab" type="button" role="tab" aria-selected="${i===0}" data-pricing-category="${item.key}">${item.label}</button>`).join('')}</div><div class="pricing-subtabs" role="tablist" style="--subtab-count:${first.groups.length}">${first.groups.map((item,i)=>`<button class="pricing-subtab" type="button" role="tab" aria-selected="${i===0}" data-pricing-group="${i}">${item.name}</button>`).join('')}</div><div class="plan-track" id="plan-track" tabindex="0" aria-label="${labels.swipe}">${group.plans.map(plan=>pricingCard(plan,group.name)).join('')}</div></div></div></section></main>`;
}

function aboutPage(){const c=copy[lang];document.title=`${c.nav.about} — Artemida Group`;return `<main id="main"><section class="page-hero about-hero"><div class="wrap measure">${eyebrow(c.nav.about.toUpperCase())}<h1 class="about-brand-title">${c.about.title}</h1></div></section><section class="editorial section about-editorial"><div class="wrap editorial-grid"><div class="long-copy">${c.about.paragraphs.map(p=>`<p>${p}</p>`).join('')}</div><aside><h2>${c.about.why}</h2><dl>${c.about.points.map(([title,text])=>`<div><dt>${title}</dt><dd>${text}</dd></div>`).join('')}</dl></div></section></main>`}

const portfolioContent={
  en:{title:'Selected work',intro:'A selection of campaigns, digital products, and brand work from Artemida Group.',groups:['Growth campaigns','Websites & commerce'],telegram:'Full video on Telegram',website:'Visit website',source:'Case details',cases:[
    ['video','video-ice','Video production · TikTok','From zero to 2M views in a month','Launched an ice cream brand’s TikTok with character-led, nostalgic short-form videos. The first video brought more than 9,000 targeted followers.','2M views','+14K followers','105K likes'],
    ['video','video-exchange','Video production · SMM','4.2M views for a currency exchange brand','Built a one-month TikTok format around vivid characters and a blogger, turning a location-free financial service into a recognizable brand.','4.2M views','+14K followers','263K likes'],
    ['image','portfolio-aurum.jpg','Web development · Interiors','AURUM Interior','A full-cycle interior studio site for a Barcelona team, bringing design, fit-out, furniture sourcing, and author supervision together.','Interior design','Barcelona','Full cycle'],
    ['image','portfolio-lumen.jpg','E-commerce · Bathroom','Lumen Bath Co.','A refined online storefront for premium bathroom fixtures, brassware, tiles, and stone.','E-commerce','Product UX','Premium'],
    ['image','portfolio-nl.jpg','E-commerce · Nutrition','NL International','A conversion-focused product experience for DrainEffect Low Carb Green, with ingredient details, reviews, FAQs, and a quick WhatsApp purchase path.','D2C','Product landing','WhatsApp'],
  ]},
  pl:{title:'Wybrane realizacje.',intro:'Wybrane kampanie, produkty cyfrowe i projekty brandingowe Artemida Group.',groups:['Kampanie wzrostowe','Strony i e-commerce'],telegram:'Pełne wideo na Telegramie',website:'Otwórz stronę',source:'Szczegóły realizacji',cases:[
    ['video','video-ice','Produkcja wideo · TikTok','Od zera do 2 mln wyświetleń w miesiąc','Uruchomiliśmy TikToka marki lodów serią krótkich filmów z wyrazistym bohaterem i nutą nostalgii. Pierwszy film przyniósł ponad 9 tys. docelowych obserwujących.','2 mln wyświetleń','+14 tys. obserwujących','105 tys. polubień'],
    ['video','video-exchange','Produkcja wideo · SMM','4,2 mln wyświetleń dla kantoru online','Stworzyliśmy miesięczny format TikToka z barwnymi postaciami i influencerem, promując usługę finansową bez fizycznej lokalizacji.','4,2 mln wyświetleń','+14 tys. obserwujących','263 tys. polubień'],
    ['image','portfolio-aurum.jpg','Tworzenie stron · Wnętrza','AURUM Interior','Strona studia wnętrz z Barcelony łączy projekt, realizację, dobór mebli i nadzór autorski.','Projekt wnętrz','Barcelona','Pełny zakres'],
    ['image','portfolio-lumen.jpg','E-commerce · Łazienki','Lumen Bath Co.','Dopracowany sklep internetowy z armaturą, bateriami, płytkami i kamieniem z wyższej półki.','E-commerce','UX produktu','Premium'],
    ['image','portfolio-nl.jpg','E-commerce · Odżywianie','NL International','Strona DrainEffect Low Carb Green z informacjami o składzie, opiniami, FAQ i szybką ścieżką zakupu przez WhatsApp.','D2C','Strona produktu','WhatsApp'],
  ]},
  ru:{title:'Избранные работы.',intro:'Подборка кампаний, цифровых продуктов и брендинга Artemida Group.',groups:['Кампании роста','Сайты и e-commerce'],telegram:'Полное видео в Telegram',website:'Открыть сайт',source:'Детали кейса',cases:[
    ['video','video-ice','Видеопродакшн · TikTok','С нуля до 2 млн просмотров за месяц','Запустили TikTok бренда мороженого серией коротких роликов с ярким героем и ностальгической подачей. Первый ролик привёл более 9 000 целевых подписчиков.','2 млн просмотров','+14 тыс. подписчиков','105 тыс. лайков'],
    ['video','video-exchange','Видеопродакшн · SMM','4,2 млн просмотров для онлайн-обменника','Придумали месячный формат TikTok с яркими персонажами и блогером, чтобы сделать финансовый сервис узнаваемым без съёмочной локации.','4,2 млн просмотров','+14 тыс. подписчиков','263 тыс. лайков'],
    ['image','portfolio-aurum.jpg','Разработка сайта · Интерьеры','AURUM Interior','Сайт студии из Барселоны объединил дизайн интерьера, реализацию, подбор мебели и авторский надзор.','Дизайн интерьера','Барселона','Полный цикл'],
    ['image','portfolio-lumen.jpg','E-commerce · Ванная комната','Lumen Bath Co.','Лаконичный интернет-магазин премиальной сантехники, смесителей, плитки и камня.','E-commerce','Каталог','Премиум'],
    ['image','portfolio-nl.jpg','E-commerce · Питание','NL International','Конверсионная страница DrainEffect Low Carb Green с разбором состава, отзывами, FAQ и быстрым заказом через WhatsApp.','D2C','Страница продукта','WhatsApp'],
  ]}
};
// Telegram URLs are keyed by each case's stable visual ID, so localized copies
// of the same portfolio item always lead to the same source post.
const portfolioTelegramCaseLinks={
  'video-ice':'https://t.me/artemida_portfolio/14/177',
  'video-exchange':'https://t.me/artemida_portfolio/14/178',
  'portfolio-aurum.jpg':'https://t.me/artemida_portfolio/6/27',
  'portfolio-lumen.jpg':'https://t.me/artemida_portfolio/6/132',
  'portfolio-nl.jpg':'https://t.me/artemida_portfolio/6/176',
};
function portfolioCard(item,labels){
  const [kind,visual,category,title,description,...stats]=item;
  const telegramCaseUrl=portfolioTelegramCaseLinks[visual]||'https://t.me/artemida_portfolio';
  const media=kind==='image'?`<img src="/assets/${visual}" alt="${escapeHtml(title)}" loading="lazy" onerror="this.hidden=true">`:`<div class="portfolio-art ${visual}" aria-hidden="true">${kind==='video'?`<span class="art-kicker">ARTEMIDA GROUP · CASE</span><strong>${stats[0]}</strong><span>${title}</span>`:`<span class="art-kicker">ARTEMIDA GROUP · DESIGN</span><strong>${title}</strong><span>${stats.slice(0,2).join(' · ')}</span><i class="art-shape"></i>`}</div>`;
  const metrics=kind==='video'?`<ul class="portfolio-stats">${stats.map(stat=>`<li>${stat}</li>`).join('')}</ul>`:`<ul class="portfolio-tags">${stats.map(stat=>`<li>${stat}</li>`).join('')}</ul>`;
  const links=kind==='video'?`<a class="portfolio-source" href="${telegramCaseUrl}" target="_blank" rel="noreferrer">${labels.source}</a>`:`<div class="portfolio-links">${kind==='image'?`<a class="portfolio-link" href="${visual==='portfolio-lumen.jpg'?'https://lumen-bath-co.vercel.app/':visual==='portfolio-nl.jpg'?'https://nl-ae.com/':'https://auruminterior.es/'}" target="_blank" rel="noreferrer">${labels.website}</a>`:''}<a class="portfolio-source" href="${telegramCaseUrl}" target="_blank" rel="noreferrer">${labels.source}</a></div>`;
  return `<article class="portfolio-card ${kind==='video'?'is-video':''}"><div class="portfolio-media">${media}</div><div class="portfolio-card-body"><p class="portfolio-category">${category}</p><h3>${title}</h3><p class="portfolio-description">${description}</p>${metrics}<div class="portfolio-card-links">${links}</div></div></article>`;
}
function portfolioPage(){
  const c=copy[lang],p=portfolioContent[lang];document.title=`${c.nav.portfolio} — Artemida Group`;
  const groups=[p.cases.slice(0,2),p.cases.slice(2,5)];
  return `<main id="main"><section class="page-hero portfolio-hero"><div class="wrap">${eyebrow(c.common.portfolioEyebrow)}<h1>${p.title}</h1><p>${p.intro}</p></div></section><section class="portfolio-work section"><div class="wrap">${groups.map((items,index)=>`<section class="portfolio-group"><div class="portfolio-group-heading"><h2>${p.groups[index]}</h2></div><div class="portfolio-grid">${items.map(item=>portfolioCard(item,p)).join('')}</div></section>`).join('')}</div></section></main>`;
}

function contactPage(){
  const c=copy[lang], q=new URLSearchParams(queryString), context=[q.get('service'),q.get('plan')].filter(Boolean).join(' — ');
  document.title=`${c.nav.contact} — Artemida Group`;
  const telegramIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.7 3.5 3.8 10c-1.15.46-1.14 1.1-.2 1.39l4.34 1.35 1.66 5.1c.2.55.1.77.7.77.46 0 .67-.21.93-.46l2.08-2.02 4.33 3.2c.8.44 1.37.21 1.57-.74l2.84-13.4c.29-1.16-.44-1.69-1.35-1.69ZM9.52 12.43l8.48-5.35c.42-.26.8-.12.49.16l-7 6.32-.27 2.86-1.7-3.99Z"/></svg>';
  const whatsappIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a9.8 9.8 0 0 0-8.46 14.75L2.2 22l5.4-1.3A9.9 9.9 0 1 0 12 2Zm0 17.9a8 8 0 0 1-4.07-1.1l-.29-.17-3.2.77.83-3.11-.19-.31A8 8 0 1 1 12 19.9Zm4.4-5.98c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.2-1.44-1.34-1.68-.14-.24-.02-.37.1-.49.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.3.98 2.46c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.15 1.51.09.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z"/></svg>';
  return `<main id="main"><section class="page-hero contact-hero"><div class="wrap measure">${eyebrow(c.common.contactEyebrow)}<h1>${c.contact.title}</h1></div></section><section class="contact-section section"><div class="wrap contact-grid"><form id="contact-form"><input type="hidden" name="context" value="${escapeHtml(context)}"><label>${c.contact.name}<input name="name" autocomplete="name" required></label><label>${c.contact.email}<input name="email" type="email" autocomplete="email" required></label><label>${c.contact.company}<input name="company" inputmode="url"></label><fieldset class="contact-messenger"><legend>${c.contact.messenger}</legend><label class="messenger-option"><input type="radio" name="messenger" value="telegram" checked><span class="messenger-icon">${telegramIcon}</span><span>${c.contact.telegram}</span></label><label class="messenger-option"><input type="radio" name="messenger" value="whatsapp"><span class="messenger-icon">${whatsappIcon}</span><span>${c.contact.whatsapp}</span></label></fieldset><label class="messenger-contact">${c.contact.messengerContact}<input name="messenger_contact" autocomplete="off" placeholder="${lang==='en'?'@username or +48 795 657 830':lang==='pl'?'@nazwa lub +48 795 657 830':'@username или +48 795 657 830'}"></label><label class="contact-message">${c.contact.message}<textarea name="message" rows="5" placeholder="${c.contact.messagePh}" required></textarea></label><button class="button" type="submit">${c.contact.submit}</button><p class="form-status" role="status" aria-live="polite"></p></form></div></section></main>`;
}

function notFound(){return `<main id="main"><section class="page-hero"><div class="wrap measure"><p class="eyebrow">404</p><h1>Page not found</h1><a class="button" href="/">Home</a></div></section></main>`}
function escapeHtml(value){return String(value).replace(/[&<>'"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));}

function bindGlobal(){
  document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>{try{localStorage.setItem('artemida-language',button.dataset.lang)}catch(e){}location.reload()}));
  const toggle=document.querySelector('.menu-toggle'), menu=document.querySelector('.mobile-menu');
  if(toggle&&menu){
    let lockedScrollY=0;
    const root=document.documentElement;
    const readScrollY=()=>window.scrollY||root.scrollTop||document.body.scrollTop||0;
    const restorePage=()=>{
      if(toggle.getAttribute('aria-expanded')==='true'||menu.getAttribute('aria-hidden')!=='true')return;
      document.body.style.top='';
      document.body.classList.remove('menu-open');
      root.classList.remove('menu-open');
      const scrollBehavior=document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior='auto';
      window.scrollTo(0,lockedScrollY);
      document.documentElement.style.scrollBehavior=scrollBehavior;
    };
    toggle.addEventListener('click',()=>{
      const opening=toggle.getAttribute('aria-expanded')!=='true';
      if(opening&&!document.body.classList.contains('menu-open')){
        lockedScrollY=readScrollY();
        root.style.setProperty('--menu-header-height',`${document.querySelector('.site-header').getBoundingClientRect().height}px`);
        document.body.style.top=`-${lockedScrollY}px`;
        document.body.classList.add('menu-open');
        root.classList.add('menu-open');
      }
      toggle.setAttribute('aria-expanded',String(opening));menu.setAttribute('aria-hidden',String(!opening));
      if(!opening)restorePage();
    });
  }
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle&&toggle.getAttribute('aria-expanded')==='true')toggle.click()});
  const pricing=document.getElementById('pricing-ui');
  if(pricing){
    const catalog=pricingCatalog(), tabs=pricing.querySelector('.pricing-tabs'), subtabs=pricing.querySelector('.pricing-subtabs'), track=pricing.querySelector('.plan-track');
    let activeCategory=0, activeGroup=0;
    const renderPricing=()=>{
      const category=catalog[activeCategory], group=category.groups[activeGroup];
      tabs.querySelectorAll('[data-pricing-category]').forEach((button,i)=>button.setAttribute('aria-selected',String(i===activeCategory)));
      subtabs.style.setProperty('--subtab-count',category.groups.length); subtabs.innerHTML=category.groups.length>1?category.groups.map((item,i)=>`<button class="pricing-subtab" type="button" role="tab" aria-selected="${i===activeGroup}" data-pricing-group="${i}">${item.name}</button>`).join(''):'';
      track.innerHTML=group.plans.map(plan=>pricingCard(plan,group.name)).join(''); track.scrollLeft=0;
    };
    tabs.addEventListener('click',event=>{const button=event.target.closest('[data-pricing-category]');if(!button)return;activeCategory=[...tabs.children].indexOf(button);activeGroup=0;renderPricing();button.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'});});
    subtabs.addEventListener('click',event=>{const button=event.target.closest('[data-pricing-group]');if(!button)return;activeGroup=Number(button.dataset.pricingGroup);renderPricing();});
  }
  const form=document.getElementById('contact-form');
  if(form) form.addEventListener('submit',async event=>{
    event.preventDefault(); const c=copy[lang].contact, button=form.querySelector('button'), status=form.querySelector('.form-status');
    button.disabled=true; button.textContent=c.sending; status.textContent='';
    try{
      const formData=new FormData(form); const payload={name:formData.get('name'),email:formData.get('email'),company:formData.get('company'),messenger:formData.get('messenger'),messenger_contact:formData.get('messenger_contact'),context:formData.get('context'),message:formData.get('message')};
      const response=await fetch('/api/contact',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(payload)});
      const data=await response.json().catch(()=>({}));
      if(!response.ok) throw new Error(data.code||'SEND_FAILED');
      form.reset(); status.textContent=c.success; status.className='form-status success';
    }catch(error){status.textContent=error.message==='BOT_CHAT_NOT_READY'?c.botStart:c.error;status.className='form-status error';}
    finally{button.disabled=false;button.textContent=c.submit;}
  });
}

function render(){
  let content;
  if(cleanPath==='/') content=homePage();
  else if(cleanPath==='/services/') content=servicesPage();
  else if(cleanPath==='/pricing/') content=pricingPage();
  else if(cleanPath==='/about/') content=aboutPage();
  else if(cleanPath==='/contact/') content=contactPage();
  else if(cleanPath==='/portfolio/') content=portfolioPage();
  else {
    const match=Object.entries(localizedServices()).find(([,service])=>cleanPath===`/services/${service.slug}/`);
    content=match?servicePage(match[0]):notFound();
  }
  layout(content);
}
render();
