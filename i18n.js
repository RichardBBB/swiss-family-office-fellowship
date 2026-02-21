/* ============================================================
   SWISS FAMILY OFFICE FELLOWSHIP — i18n.js
   Arabic / English language switcher
   ============================================================ */

(function () {
  'use strict';

  /* ── Translation dictionary ── */
  const translations = {

    /* ── Navigation ── */
    'nav-home':           { en: 'Home',                   ar: 'الرئيسية' },
    'nav-fellowship':     { en: 'Fellowship',             ar: 'الزمالة' },
    'nav-curation':       { en: 'Curation',               ar: 'الانتقاء' },
    'nav-switzerland':    { en: 'Why Switzerland',        ar: 'لماذا سويسرا' },
    'nav-family-offices': { en: 'For Family Offices',     ar: 'لمكاتب العائلة' },
    'nav-partners':       { en: 'Partners',               ar: 'الشركاء' },
    'nav-faq':            { en: 'FAQ',                    ar: 'الأسئلة الشائعة' },
    'nav-invitation':     { en: 'Request an invitation',  ar: 'طلب دعوة' },

    /* ── Hero ── */
    'hero-label':         { en: 'Invite-only · Zurich + Swiss Alps', ar: 'بدعوة خاصة · زيورخ + جبال الألب السويسرية' },
    'hero-h1':            { en: 'Swiss Family Office<br>Fellowship', ar: 'زمالة مكاتب العائلة<br>السويسرية' },
    'hero-sub1':          { en: 'Private access to Switzerland\'s innovation and investment ecosystem — curated for Middle East family offices.', ar: 'وصول خاص إلى منظومة الابتكار والاستثمار في سويسرا — منتقاة خصيصاً لمكاتب العائلة في الشرق الأوسط.' },
    'hero-sub2':          { en: 'A five-day, invite-only program combining jurisdiction-grade briefings, curated investment case deep dives, and discreet relationship building in Zurich and the Swiss Alps.', ar: 'برنامج خمسة أيام بدعوة خاصة يجمع بين إحاطات على مستوى الاختصاص القضائي، وجلسات تحليل معمّقة لفرص الاستثمار المنتقاة، وبناء علاقات رفيعة في زيورخ وجبال الألب السويسرية.' },
    'hero-cta1':          { en: 'Request an invitation',      ar: 'طلب دعوة' },
    'hero-cta2':          { en: 'Receive the program overview', ar: 'استلام نظرة عامة على البرنامج' },
    'hero-micro':         { en: '1–5 December 2026 · Zurich & Swiss Alps · Closed-door format · Chatham House Rule', ar: '١–٥ ديسمبر ٢٠٢٦ · زيورخ وجبال الألب السويسرية · صيغة مغلقة · قاعدة تشاتام هاوس' },
    'hero-h2':            { en: 'Zurich briefings.<br>Alpine retreat.', ar: 'إحاطات زيورخ.<br>الملاذ الجبلي.' },

    /* ── At a glance ── */
    'glance-label':       { en: 'At a glance',            ar: 'لمحة سريعة' },
    'glance-h2':          { en: 'In one view',            ar: 'في نظرة واحدة' },
    'glance-p':           { en: 'A tightly curated, closed-door program for a small cohort of family offices with a genuine mandate for Swiss innovation.', ar: 'برنامج منتقى بدقة، مغلق الأبواب، لمجموعة صغيرة من مكاتب العائلة ذات التفويض الحقيقي للاستثمار في الابتكار السويسري.' },
    'glance-link':        { en: 'Explore the fellowship →', ar: 'استكشف الزمالة ←' },
    'fact-label1':        { en: 'Family offices per cohort', ar: 'مكتب عائلة لكل دفعة' },
    'fact-label2':        { en: 'Days duration',           ar: 'أيام المدة' },
    'fact-label3':        { en: 'Locations: Zurich + Alps', ar: 'موقعان: زيورخ + الألب' },
    'fact-label4':        { en: 'Focus sectors',           ar: 'قطاعات التركيز' },

    /* ── What you gain ── */
    'gain-label':         { en: 'What you gain',          ar: 'ما ستكسبه' },
    'gain-h2':            { en: 'Designed for long-term capital', ar: 'مصمم لرأس المال طويل الأجل' },
    'gain-card1-num':     { en: '01',                     ar: '٠١' },
    'gain-card1-h3':      { en: 'Clarity',                ar: 'الوضوح' },
    'gain-card1-p':       { en: 'Understand how investing in Switzerland works in practice — structures, governance norms, and how trusted circles co-invest.', ar: 'افهم كيف يعمل الاستثمار في سويسرا عملياً — الهياكل، ومعايير الحوكمة، وكيف تستثمر الدوائر الموثوقة بشكل مشترك.' },
    'gain-card2-num':     { en: '02',                     ar: '٠٢' },
    'gain-card2-h3':      { en: 'Access',                 ar: 'الوصول' },
    'gain-card2-p':       { en: 'Meet a carefully selected group of Swiss family offices, lead angels, strategic capital, and founders — in settings designed for depth.', ar: 'التقِ بمجموعة منتقاة بعناية من مكاتب العائلة السويسرية والمستثمرين الملائكيين ورأس المال الاستراتيجي والمؤسسين — في بيئات مصممة للعمق.' },
    'gain-card3-num':     { en: '03',                     ar: '٠٣' },
    'gain-card3-h3':      { en: 'Continuity',             ar: 'الاستمرارية' },
    'gain-card3-p':       { en: 'Join an alumni circle with optional follow-up access to curated introductions and private briefings.', ar: 'انضم إلى دائرة الخريجين مع إمكانية الوصول الاختياري إلى تعريفات منتقاة وإحاطات خاصة.' },

    /* ── Confidentiality ── */
    'conf-label':         { en: 'Confidentiality',        ar: 'السرية' },
    'conf-h2':            { en: 'Discretion is structural, not aspirational.', ar: 'السرية هيكلية، وليست تطلعية.' },
    'conf-li1':           { en: 'Closed-door sessions under Chatham House Rule', ar: 'جلسات مغلقة وفق قاعدة تشاتام هاوس' },
    'conf-li2':           { en: 'No media, no public guest list', ar: 'لا وسائل إعلام، لا قائمة ضيوف علنية' },
    'conf-li3':           { en: 'No recordings during case discussions', ar: 'لا تسجيلات خلال مناقشات الحالات' },
    'conf-li4':           { en: 'NDA available for case materials', ar: 'اتفاقية عدم إفصاح متاحة لمواد الحالات' },
    'conf-li5':           { en: 'Participant list shared only within the cohort', ar: 'قائمة المشاركين تُشارك داخل الدفعة فقط' },

    /* ── Statement section ── */
    'stmt-label':         { en: 'The format',             ar: 'الصيغة' },
    'stmt-h2':            { en: 'Not a conference. Not a roadshow. A fellowship.', ar: 'ليس مؤتمراً. ليس جولة ترويجية. إنها زمالة.' },
    'stmt-p':             { en: 'Private peer exchange and an alumni circle enabling long-term access and repeat collaboration.', ar: 'تبادل أقران خاص ودائرة خريجين تتيح الوصول طويل الأمد والتعاون المتكرر.' },

    /* ── The City ── */
    'city-label':         { en: 'THE CITY',               ar: 'المدينة' },
    'city-h2':            { en: 'Zurich: where governance meets innovation', ar: 'زيورخ: حيث تلتقي الحوكمة بالابتكار' },
    'city-p':             { en: 'One of the world\'s most stable financial centres, home to world-class research institutions, disciplined capital, and a culture of long-term stewardship.', ar: 'أحد أكثر المراكز المالية استقراراً في العالم، موطن مؤسسات بحثية عالمية المستوى، ورأس مال منضبط، وثقافة الإشراف طويل الأمد.' },

    /* ── The Alps ── */
    'alps-label':         { en: 'THE ALPS',               ar: 'جبال الألب' },
    'alps-h2':            { en: 'The Alpine retreat: where decisions are made.', ar: 'الملاذ الجبلي: حيث تُتخذ القرارات.' },
    'alps-p':             { en: 'A private setting above the noise — for long-form peer exchange, portfolio reflection, and the kind of conversation that requires altitude and altitude alone.', ar: 'بيئة خاصة فوق الضجيج — لتبادل الأقران المعمّق، ومراجعة المحافظ الاستثمارية، ونوع المحادثات التي تستلزم العزلة والهدوء.' },

    /* ── Home footer CTA ── */
    'home-cta-h2':        { en: 'A small cohort. A significant opportunity.', ar: 'دفعة صغيرة. فرصة كبيرة.' },
    'home-cta-p':         { en: 'Request an invitation to begin the conversation.', ar: 'اطلب دعوة لبدء الحوار.' },
    'respond-note':       { en: 'We respond personally. No newsletters.', ar: 'نرد شخصياً. لا رسائل إخبارية.' },

    /* ── Fellowship page ── */
    'fell-label':         { en: 'The Fellowship',         ar: 'الزمالة' },
    'fell-h1':            { en: 'Five days. One cohort. No noise.', ar: 'خمسة أيام. دفعة واحدة. لا ضجيج.' },
    'fell-micro':         { en: '1–5 December 2026 · Zurich + Alpine retreat · Invite-only cohort', ar: '١–٥ ديسمبر ٢٠٢٦ · زيورخ + الملاذ الجبلي · دفعة بدعوة خاصة' },
    'fell-arch-label':    { en: 'Architecture',           ar: 'الهيكل' },
    'fell-arch-h2':       { en: 'Three layers, one program', ar: 'ثلاث طبقات، برنامج واحد' },
    'fell-layer1-h3':     { en: 'Jurisdiction briefings', ar: 'إحاطات الاختصاص القضائي' },
    'fell-layer1-p':      { en: 'Legal structures, governance standards, and cross-border practicalities — presented by practitioners, not promoters.', ar: 'الهياكل القانونية ومعايير الحوكمة والجوانب العملية عبر الحدود — يقدمها الممارسون، لا المروّجون.' },
    'fell-layer2-h3':     { en: 'Curated deal access',   ar: 'وصول منتقى للصفقات' },
    'fell-layer2-p':      { en: 'Six to eight cases presented as investor conversations — not pitches. Long-form Q&A. No stage theatre.', ar: 'ست إلى ثماني حالات تُقدَّم كمحادثات مستثمرين — لا عروض ترويجية. نقاش مطوّل. لا مسرحية منصة.' },
    'fell-layer3-h3':     { en: 'Peer exchange',         ar: 'تبادل الأقران' },
    'fell-layer3-p':      { en: 'Structured and informal sessions for relationship building — including an Alpine retreat for long-form conversation.', ar: 'جلسات منظمة وغير رسمية لبناء العلاقات — تشمل ملاذاً جبلياً للمحادثات المعمّقة.' },
    'fell-gov-label':     { en: 'Governance',            ar: 'الحوكمة' },
    'fell-gov-h2':        { en: 'Governance-first. Depth over volume.', ar: 'الحوكمة أولاً. العمق على حساب الحجم.' },
    'fell-gov-p':         { en: 'Every session is designed to protect confidentiality and enable informed decision-making.', ar: 'كل جلسة مصممة لحماية السرية وتمكين اتخاذ القرارات المستنيرة.' },
    'fell-day-label':     { en: 'Program',               ar: 'البرنامج' },
    'fell-day-h2':        { en: 'Day by day',            ar: 'يوماً بيوم' },
    'day0-title':         { en: 'Arrival & alignment',   ar: 'الوصول والتوافق' },
    'day0-p':             { en: 'Private welcome dinner. Peer introductions. Confidentiality framework. Mandate alignment.', ar: 'عشاء ترحيب خاص. تعريف الأقران. إطار السرية. توافق التفويض.' },
    'day1-title':         { en: 'Switzerland investment reality (family-office lens)', ar: 'واقع الاستثمار في سويسرا (منظور مكتب العائلة)' },
    'day1-p':             { en: 'Legal structures (equity, convertibles, preferred), governance standards, typical term dynamics, cross-border practicalities (high level).', ar: 'الهياكل القانونية (الأسهم، الأوراق القابلة للتحويل، الأسهم الممتازة)، معايير الحوكمة، ديناميكيات الشروط النموذجية، الجوانب العملية عبر الحدود (على مستوى عالٍ).' },
    'day2-title':         { en: 'Curated investment case deep dives', ar: 'تحليل معمّق لحالات الاستثمار المنتقاة' },
    'day2-p':             { en: 'Six to eight cases presented as investor conversations: market logic, IP position, governance readiness, capital needs, risk disclosure. Optional 1:1 sessions.', ar: 'ست إلى ثماني حالات تُقدَّم كمحادثات مستثمرين: منطق السوق، موقع الملكية الفكرية، جاهزية الحوكمة، احتياجات رأس المال، الإفصاح عن المخاطر. جلسات فردية اختيارية.' },
    'day3-title':         { en: 'Institutions & strategic capital', ar: 'المؤسسات ورأس المال الاستراتيجي' },
    'day3-p':             { en: 'Meet key ecosystem gatekeepers. Understand how corporate and public mechanisms interact with private capital. Transfer to the alpine setting.', ar: 'لقاء حراس البوابات الرئيسيين في المنظومة. فهم كيفية تفاعل الآليات المؤسسية والعامة مع رأس المال الخاص. الانتقال إلى البيئة الجبلية.' },
    'day4-title':         { en: 'Alpine family office retreat', ar: 'ملاذ مكتب العائلة الجبلي' },
    'day4-p':             { en: 'Closed-door FO sessions: portfolio construction, risk management in private markets, long-term optionality. Peer exchange. Alumni induction.', ar: 'جلسات مكتب العائلة المغلقة: بناء المحفظة، إدارة المخاطر في الأسواق الخاصة، الخيارات طويلة الأمد. تبادل الأقران. استقبال الخريجين.' },
    'day5-title':         { en: 'Optional private extensions', ar: 'امتدادات خاصة اختيارية' },
    'day5-p':             { en: 'Follow-up meetings, structuring clinics, selected visits (by relevance).', ar: 'اجتماعات متابعة، عيادات هيكلة، زيارات مختارة (حسب الصلة).' },
    'fell-schedule-note': { en: 'The final schedule is shared after invitation to preserve discretion.', ar: 'يُشارك الجدول الزمني النهائي بعد الدعوة للحفاظ على السرية.' },
    'fell-included-label':{ en: 'Included',              ar: 'المشمول' },
    'fell-included-h2':   { en: 'What is included',      ar: 'ما هو مشمول' },
    'fell-inc-li1':       { en: 'Fellowship sessions and private convenings', ar: 'جلسات الزمالة والاجتماعات الخاصة' },
    'fell-inc-li2':       { en: 'Curated access to vetted cases and relevant counterparties', ar: 'وصول منتقى إلى حالات موثّقة وأطراف مقابلة ذات صلة' },
    'fell-inc-li3':       { en: 'Local coordination during program days', ar: 'التنسيق المحلي خلال أيام البرنامج' },
    'fell-inc-note':      { en: 'International travel and accommodation are shared upon invitation (venue options vary by cohort).', ar: 'يُشارك السفر الدولي والإقامة عند الدعوة (تتفاوت خيارات المكان حسب الدفعة).' },
    'fell-cta-h2':        { en: 'Ready to explore the fellowship?', ar: 'هل أنت مستعد لاستكشاف الزمالة؟' },
    'fell-cta-p':         { en: 'Request an invitation and we will confirm fit and next steps personally.', ar: 'اطلب دعوة وسنؤكد الملاءمة والخطوات التالية شخصياً.' },

    /* ── Curation page ── */
    'cur-label':          { en: 'Curation & Deal Access', ar: 'الانتقاء والوصول للصفقات' },
    'cur-h1':             { en: 'Curation is the product.', ar: 'الانتقاء هو المنتج.' },
    'cur-p':              { en: 'We limit the number of cases to protect confidentiality and maximise depth.', ar: 'نحدّ من عدد الحالات لحماية السرية وتعظيم العمق.' },
    'cur-std-label':      { en: 'Our standard',           ar: 'معيارنا' },
    'cur-std-h2':         { en: 'Our curation standard',  ar: 'معيار الانتقاء لدينا' },
    'cur-gov-h3':         { en: 'Governance readiness',   ar: 'جاهزية الحوكمة' },
    'cur-gov-p':          { en: 'Clear decision-making, clean cap-table logic, and investor-grade documentation.', ar: 'اتخاذ قرارات واضح، ومنطق جدول رأس المال نظيف، وتوثيق على مستوى المستثمرين.' },
    'cur-ip-h3':          { en: 'IP & defensibility',     ar: 'الملكية الفكرية والقابلية للدفاع' },
    'cur-ip-p':           { en: 'Clarity on ownership, assignment, and protection strategy (especially for spin-outs).', ar: 'وضوح في الملكية والتنازل واستراتيجية الحماية (خاصة للشركات المنبثقة).' },
    'cur-fin-h3':         { en: 'Financing logic',        ar: 'منطق التمويل' },
    'cur-fin-p':          { en: 'Defined capital needs, milestones, and follow-on scenarios.', ar: 'احتياجات رأس مال محددة، ومعالم، وسيناريوهات المتابعة.' },
    'cur-rel-h3':         { en: 'Relevance',              ar: 'الصلة' },
    'cur-rel-p':          { en: 'Fit to cohort mandates and risk tolerance — not popularity.', ar: 'ملاءمة لتفويضات الدفعة وتحمّل المخاطر — لا الشعبية.' },
    'cur-deep-label':     { en: 'Deep dives',             ar: 'التحليل المعمّق' },
    'cur-deep-h2':        { en: 'Case deep dives are investor conversations', ar: 'التحليلات المعمّقة للحالات هي محادثات مستثمرين' },
    'cur-li1':            { en: 'Market thesis & timing', ar: 'أطروحة السوق والتوقيت' },
    'cur-li2':            { en: 'Product moat and IP position', ar: 'الخندق الدفاعي للمنتج وموقع الملكية الفكرية' },
    'cur-li3':            { en: 'Commercial traction and economics (where applicable)', ar: 'الزخم التجاري والاقتصاديات (حيثما ينطبق)' },
    'cur-li4':            { en: 'Governance and team structure', ar: 'الحوكمة وهيكل الفريق' },
    'cur-li5':            { en: 'Financing history and round logic', ar: 'تاريخ التمويل ومنطق الجولة' },
    'cur-li6':            { en: 'Risk register and mitigation', ar: 'سجل المخاطر والتخفيف' },
    'cur-note':           { en: 'No stage pitching. No demo theatre. Time is allocated for long-form Q&A.', ar: 'لا عروض على المنصة. لا مسرحية تجريبية. يُخصص الوقت لنقاش مطوّل.' },
    'cur-stmt':           { en: 'Where precision meets possibility.', ar: 'حيث تلتقي الدقة بالإمكانية.' },
    'cur-what-label':     { en: 'What we cover',          ar: 'ما نغطيه' },
    'cur-what-h2':        { en: 'What the fellowship clarifies', ar: 'ما توضحه الزمالة' },
    'cur-what-li1':       { en: 'How private investing typically works in Switzerland', ar: 'كيف يعمل الاستثمار الخاص عادةً في سويسرا' },
    'cur-what-li2':       { en: 'What "good governance" looks like locally', ar: 'كيف تبدو "الحوكمة الجيدة" محلياً' },
    'cur-what-li3':       { en: 'How trusted circles co-invest and build long-term access', ar: 'كيف تستثمر الدوائر الموثوقة بشكل مشترك وتبني وصولاً طويل الأمد' },
    'cur-cta-h2':         { en: 'Switzerland is ready. Are you?', ar: 'سويسرا جاهزة. وأنت؟' },
    'cur-cta-p':          { en: 'Join a small cohort of family offices exploring Switzerland\'s most compelling investment opportunities.', ar: 'انضم إلى دفعة صغيرة من مكاتب العائلة لاستكشاف أكثر فرص الاستثمار إثارةً في سويسرا.' },

    /* ── Why Switzerland page ── */
    'ch-label':           { en: 'Why Switzerland',        ar: 'لماذا سويسرا' },
    'ch-h1':              { en: 'Switzerland is not a backdrop. It is the thesis.', ar: 'سويسرا ليست خلفية. إنها الأطروحة.' },
    'ch-p':               { en: 'Jurisdiction, infrastructure, and culture — aligned.', ar: 'الاختصاص القضائي والبنية التحتية والثقافة — متوافقة.' },
    'ch-pillar-label':    { en: 'The pillars',            ar: 'الركائز' },
    'ch-pillar-h2':       { en: 'Four reasons Switzerland is different', ar: 'أربعة أسباب تجعل سويسرا مختلفة' },
    'ch-p1-h3':           { en: 'Legal & structural clarity', ar: 'الوضوح القانوني والهيكلي' },
    'ch-p1-p':            { en: 'Predictable legal environment, strong IP protection, and investor-friendly structures that have been tested across decades.', ar: 'بيئة قانونية يمكن التنبؤ بها، وحماية قوية للملكية الفكرية، وهياكل صديقة للمستثمرين جرى اختبارها عبر عقود.' },
    'ch-p2-h3':           { en: 'World-class research base', ar: 'قاعدة بحثية عالمية المستوى' },
    'ch-p2-p':            { en: 'ETH Zurich, EPFL, and a dense network of applied research institutions generating investable IP across deeptech, medtech, and energy.', ar: 'معهد ETH زيورخ، وEPFL، وشبكة كثيفة من مؤسسات البحث التطبيقي تولّد ملكية فكرية قابلة للاستثمار في التكنولوجيا العميقة والتكنولوجيا الطبية والطاقة.' },
    'ch-p3-h3':           { en: 'Governance culture',     ar: 'ثقافة الحوكمة' },
    'ch-p3-p':            { en: 'A culture of long-term stewardship, discretion, and structured decision-making — aligned with how family offices prefer to operate.', ar: 'ثقافة الإشراف طويل الأمد والسرية واتخاذ القرارات المنظّمة — متوافقة مع الطريقة التي تفضل مكاتب العائلة العمل بها.' },
    'ch-p4-h3':           { en: 'Neutral, stable jurisdiction', ar: 'اختصاص قضائي محايد ومستقر' },
    'ch-p4-p':            { en: 'Political neutrality, currency stability, and a track record of honouring cross-border commitments across generations.', ar: 'الحياد السياسي واستقرار العملة وسجل حافل بالوفاء بالالتزامات عبر الحدود عبر الأجيال.' },
    'ch-stmt':            { en: 'Where precision meets possibility.', ar: 'حيث تلتقي الدقة بالإمكانية.' },
    'ch-clarify-label':   { en: 'What we cover',          ar: 'ما نغطيه' },
    'ch-clarify-h2':      { en: 'What the fellowship clarifies', ar: 'ما توضحه الزمالة' },
    'ch-clarify-li1':     { en: 'How private investing typically works in Switzerland', ar: 'كيف يعمل الاستثمار الخاص عادةً في سويسرا' },
    'ch-clarify-li2':     { en: 'What "good governance" looks like locally', ar: 'كيف تبدو "الحوكمة الجيدة" محلياً' },
    'ch-clarify-li3':     { en: 'How trusted circles co-invest and build long-term access', ar: 'كيف تستثمر الدوائر الموثوقة بشكل مشترك وتبني وصولاً طويل الأمد' },
    'ch-cta-h2':          { en: 'Switzerland is ready. Are you?', ar: 'سويسرا جاهزة. وأنت؟' },
    'ch-cta-p':           { en: 'Join a small cohort of family offices exploring Switzerland\'s most compelling investment opportunities.', ar: 'انضم إلى دفعة صغيرة من مكاتب العائلة لاستكشاف أكثر فرص الاستثمار إثارةً في سويسرا.' },

    /* ── For Family Offices page ── */
    'fo-label':           { en: 'For Family Offices',     ar: 'لمكاتب العائلة' },
    'fo-h1':              { en: 'Designed for family offices seeking governed access to innovation.', ar: 'مصمم لمكاتب العائلة الساعية إلى وصول محكوم للابتكار.' },
    'fo-micro':           { en: '8–12 family offices · Invite-only', ar: '٨–١٢ مكتب عائلة · بدعوة خاصة' },
    'fo-fit-label':       { en: 'Fit',                    ar: 'الملاءمة' },
    'fo-fit-h2':          { en: 'Is this the right program for you?', ar: 'هل هذا البرنامج المناسب لك؟' },
    'fo-fit-yes-h3':      { en: 'A strong fit if you…',  ar: 'ملاءمة قوية إذا كنت…' },
    'fo-fit-yes-li1':     { en: 'invest privately with a long-term horizon', ar: 'تستثمر بشكل خاص بأفق طويل الأمد' },
    'fo-fit-yes-li2':     { en: 'value governance and discretion', ar: 'تقدّر الحوكمة والسرية' },
    'fo-fit-yes-li3':     { en: 'allocate selectively to innovation (direct or co-invest)', ar: 'تخصص بشكل انتقائي للابتكار (مباشر أو مشترك)' },
    'fo-fit-yes-li4':     { en: 'prefer depth over volume', ar: 'تفضل العمق على الحجم' },
    'fo-fit-no-h3':       { en: 'Not designed for',       ar: 'غير مصمم لـ' },
    'fo-fit-no-li1':      { en: 'delegations seeking visibility or public exposure', ar: 'الوفود الساعية إلى الظهور أو التعرض العام' },
    'fo-fit-no-li2':      { en: 'intermediaries focused on volume dealflow', ar: 'الوسطاء المركّزون على حجم تدفق الصفقات' },
    'fo-fit-no-li3':      { en: 'large groups without mandate clarity', ar: 'المجموعات الكبيرة دون وضوح التفويض' },
    'fo-sel-label':       { en: 'Selection',              ar: 'الاختيار' },
    'fo-sel-h2':          { en: 'Selection and cohort matching', ar: 'الاختيار ومطابقة الدفعة' },
    'fo-sel-p':           { en: 'We keep cohorts intentionally small. Invitations are based on mandate alignment, ticket range, sector relevance, and long-term engagement potential.', ar: 'نحافظ على الدفعات صغيرة عن قصد. تستند الدعوات إلى توافق التفويض ونطاق التذكرة وصلة القطاع وإمكانية المشاركة طويلة الأمد.' },
    'fo-sel-note':        { en: 'We respond personally. No automated marketing.', ar: 'نرد شخصياً. لا تسويق آلي.' },
    'fo-cta-h2':          { en: 'The right cohort matters.', ar: 'الدفعة المناسبة مهمة.' },
    'fo-cta-p':           { en: 'We confirm fit before sharing program details. Request an invitation to begin.', ar: 'نؤكد الملاءمة قبل مشاركة تفاصيل البرنامج. اطلب دعوة للبدء.' },

    /* ── Partners page ── */
    'par-label':          { en: 'Partners & Governance',  ar: 'الشركاء والحوكمة' },
    'par-h1':             { en: 'Anchored by trusted institutions.<br>Designed for neutrality.', ar: 'مرتكزة على مؤسسات موثوقة.<br>مصممة للحياد.' },
    'par-neut-label':     { en: 'Neutrality',             ar: 'الحياد' },
    'par-neut-h2':        { en: 'Neutral by design',      ar: 'محايد بالتصميم' },
    'par-neut-p1':        { en: 'The fellowship is not affiliated with any single fund, accelerator, or investment platform. Our role is to curate access — not to channel capital toward any specific vehicle.', ar: 'الزمالة غير منتسبة لأي صندوق أو مسرّع أو منصة استثمارية واحدة. دورنا هو تنظيم الوصول — لا توجيه رأس المال نحو أي وسيلة محددة.' },
    'par-neut-p2':        { en: 'Participants are never obligated to invest. All introductions are made at the discretion of the participant.', ar: 'لا يُلزَم المشاركون أبداً بالاستثمار. تتم جميع التعريفات وفق تقدير المشارك.' },
    'par-conf-label':     { en: 'Conduct',                ar: 'السلوك' },
    'par-conf-h2':        { en: 'Confidentiality conduct', ar: 'سلوك السرية' },
    'par-conf-li1':       { en: 'No media coverage or public documentation of sessions', ar: 'لا تغطية إعلامية أو توثيق علني للجلسات' },
    'par-conf-li2':       { en: 'Participant list is not shared externally', ar: 'قائمة المشاركين لا تُشارك خارجياً' },
    'par-conf-li3':       { en: 'Case materials distributed under NDA where requested', ar: 'مواد الحالات موزّعة تحت اتفاقية عدم إفصاح عند الطلب' },
    'par-conf-li4':       { en: 'Chatham House Rule applies to all sessions', ar: 'قاعدة تشاتام هاوس تنطبق على جميع الجلسات' },
    'par-conf-li5':       { en: 'No recordings without explicit consent', ar: 'لا تسجيلات دون موافقة صريحة' },
    'par-curated-label':  { en: 'Curated by trusted partners', ar: 'منتقى من قِبل شركاء موثوقين' },
    'par-curated-h2':     { en: 'Our partners',           ar: 'شركاؤنا' },
    'par-fh-role':        { en: 'Ecosystem Partner',      ar: 'شريك المنظومة' },
    'par-fh-p':           { en: 'A curated network connecting founders, investors, and family offices across Europe and the Middle East.', ar: 'شبكة منتقاة تربط المؤسسين والمستثمرين ومكاتب العائلة عبر أوروبا والشرق الأوسط.' },
    'par-fc-role':        { en: 'Investment Partner',     ar: 'شريك الاستثمار' },
    'par-fc-p':           { en: 'Specialist in connecting family office capital with European innovation ecosystems.', ar: 'متخصص في ربط رأس مال مكاتب العائلة بمنظومات الابتكار الأوروبية.' },
    'par-cta-h2':         { en: 'Interested in a partnership conversation?', ar: 'هل أنت مهتم بمحادثة شراكة؟' },
    'par-cta-p':          { en: 'Reach out directly through the invitation form.', ar: 'تواصل مباشرة عبر نموذج الدعوة.' },

    /* ── Invitation / Request form ── */
    'inv-label':          { en: 'Request an Invitation',  ar: 'طلب دعوة' },
    'inv-h1':             { en: 'Begin the conversation.', ar: 'ابدأ الحوار.' },
    'inv-p':              { en: 'We review each request personally. If there is a fit, we will respond with next steps and, where relevant, a detailed program overview.', ar: 'نراجع كل طلب شخصياً. إذا كانت هناك ملاءمة، سنرد بالخطوات التالية وعند الاقتضاء نظرة عامة مفصّلة على البرنامج.' },
    'inv-form-label':     { en: 'Invitation Request',     ar: 'طلب الدعوة' },
    'inv-form-note':      { en: 'All information is treated with full discretion.', ar: 'تُعامَل جميع المعلومات بسرية تامة.' },
    'form-name-label':    { en: 'Full name',              ar: 'الاسم الكامل' },
    'form-name-ph':       { en: 'Your full name',         ar: 'اسمك الكامل' },
    'form-title-label':   { en: 'Title / Role',           ar: 'اللقب / الدور' },
    'form-title-ph':      { en: 'e.g. Principal, CIO, Managing Director', ar: 'مثال: مدير، مدير الاستثمار، المدير العام' },
    'form-org-label':     { en: 'Organisation',           ar: 'المؤسسة' },
    'form-org-ph':        { en: 'Family office or institution name', ar: 'اسم مكتب العائلة أو المؤسسة' },
    'form-aum-label':     { en: 'AUM range (approximate)', ar: 'نطاق الأصول المدارة (تقريبي)' },
    'form-aum-opt0':      { en: 'Select range',           ar: 'اختر النطاق' },
    'form-aum-opt1':      { en: 'Under $100M',            ar: 'أقل من ١٠٠ مليون دولار' },
    'form-aum-opt2':      { en: '$100M – $500M',          ar: '١٠٠ – ٥٠٠ مليون دولار' },
    'form-aum-opt3':      { en: '$500M – $1B',            ar: '٥٠٠ مليون – ١ مليار دولار' },
    'form-aum-opt4':      { en: 'Over $1B',               ar: 'أكثر من ١ مليار دولار' },
    'form-aum-opt5':      { en: 'Prefer not to say',      ar: 'أفضل عدم الإفصاح' },
    'form-juris-label':   { en: 'Primary jurisdiction',   ar: 'الاختصاص القضائي الأساسي' },
    'form-juris-ph':      { en: 'e.g. UAE, Saudi Arabia, Qatar, Kuwait', ar: 'مثال: الإمارات، المملكة العربية السعودية، قطر، الكويت' },
    'form-ref-label':     { en: 'How did you hear about us?', ar: 'كيف سمعت عنا؟' },
    'form-ref-ph':        { en: 'Referral, event, LinkedIn…', ar: 'إحالة، حدث، لينكدإن…' },
    'form-sectors-label': { en: 'Sectors of interest',   ar: 'القطاعات ذات الاهتمام' },
    'form-sectors-ph':    { en: 'e.g. Deeptech, Medtech, Energy', ar: 'مثال: التكنولوجيا العميقة، التكنولوجيا الطبية، الطاقة' },
    'form-horizon-label': { en: 'Investment horizon',     ar: 'أفق الاستثمار' },
    'form-horizon-opt0':  { en: 'Select horizon',         ar: 'اختر الأفق' },
    'form-horizon-opt1':  { en: '3–5 years',              ar: '٣–٥ سنوات' },
    'form-horizon-opt2':  { en: '5–10 years',             ar: '٥–١٠ سنوات' },
    'form-horizon-opt3':  { en: '10+ years',              ar: '١٠+ سنوات' },
    'form-contact-label': { en: 'Preferred contact',      ar: 'طريقة التواصل المفضلة' },
    'form-contact-opt0':  { en: 'Select preference',      ar: 'اختر التفضيل' },
    'form-contact-opt1':  { en: 'Email',                  ar: 'البريد الإلكتروني' },
    'form-contact-opt2':  { en: 'Phone',                  ar: 'الهاتف' },
    'form-msg-label':     { en: 'Optional message',       ar: 'رسالة اختيارية' },
    'form-msg-ph':        { en: 'Any context you would like to share…', ar: 'أي سياق تودّ مشاركته…' },
    'form-ack':           { en: 'I acknowledge this is an invite-only, confidential format.', ar: 'أقرّ بأن هذا تنسيق سري بدعوة خاصة.' },
    'form-submit':        { en: 'Request invitation',     ar: 'طلب الدعوة' },
    'form-success-h3':    { en: 'Thank you.',             ar: 'شكراً لك.' },
    'form-success-p':     { en: 'We will respond with next steps and, where relevant, share a detailed program overview and confidentiality terms.', ar: 'سنرد بالخطوات التالية وعند الاقتضاء نشارك نظرة عامة مفصّلة على البرنامج وشروط السرية.' },

    /* ── FAQ page ── */
    'faq-label':          { en: 'Questions',              ar: 'أسئلة' },
    'faq-h1':             { en: 'Frequently asked questions', ar: 'الأسئلة الشائعة' },
    'faq-q1':             { en: 'Is this a pitching event?', ar: 'هل هذا حدث عروض ترويجية؟' },
    'faq-a1':             { en: 'No. Case sessions are structured as investor conversations with long-form Q&A. We limit volume to protect depth.', ar: 'لا. جلسات الحالات منظّمة كمحادثات مستثمرين مع نقاش مطوّل. نحدّ الحجم لحماية العمق.' },
    'faq-q2':             { en: 'How is confidentiality handled?', ar: 'كيف تُعالَج السرية؟' },
    'faq-a2':             { en: 'Closed-door sessions under Chatham House Rule. No media, no public guest list, no recordings during case discussions. NDA can be provided for case materials.', ar: 'جلسات مغلقة وفق قاعدة تشاتام هاوس. لا وسائل إعلام، لا قائمة ضيوف علنية، لا تسجيلات خلال مناقشات الحالات. يمكن توفير اتفاقية عدم إفصاح لمواد الحالات.' },
    'faq-q3':             { en: 'How are cases selected?', ar: 'كيف تُختار الحالات؟' },
    'faq-a3':             { en: 'We curate for governance readiness, IP clarity, financing logic, and relevance to the cohort\'s mandates.', ar: 'ننتقي بناءً على جاهزية الحوكمة ووضوح الملكية الفكرية ومنطق التمويل والصلة بتفويضات الدفعة.' },
    'faq-q4':             { en: 'Who attends?',           ar: 'من يحضر؟' },
    'faq-a4':             { en: 'An invite-only cohort of 8–12 family offices. Additional counterparties may join selected dinners or private sessions based on relevance.', ar: 'دفعة بدعوة خاصة من ٨–١٢ مكتب عائلة. قد تنضم أطراف مقابلة إضافية إلى عشاء مختار أو جلسات خاصة بناءً على الصلة.' },
    'faq-q5':             { en: 'What stages do you cover?', ar: 'ما المراحل التي تغطونها؟' },
    'faq-a5':             { en: 'Selective early and early-growth opportunities where governance and documentation are investor-grade.', ar: 'فرص مبكرة ونمو مبكر منتقاة حيث تكون الحوكمة والتوثيق على مستوى المستثمرين.' },
    'faq-q6':             { en: 'What sectors do you focus on?', ar: 'ما القطاعات التي تركزون عليها؟' },
    'faq-a6':             { en: 'Deeptech, Energy & Climate, Medtech & Life Sciences, and select B2B platforms.', ar: 'التكنولوجيا العميقة، الطاقة والمناخ، التكنولوجيا الطبية وعلوم الحياة، ومنصات B2B المختارة.' },
    'faq-q7':             { en: 'What happens after the fellowship?', ar: 'ماذا يحدث بعد الزمالة؟' },
    'faq-a7':             { en: 'Where there is alignment, we facilitate selective follow-up access and introductions. Alumni may also receive private briefings.', ar: 'حيث يوجد توافق، نيسّر الوصول الانتقائي للمتابعة والتعريفات. قد يتلقى الخريجون أيضاً إحاطات خاصة.' },
    'faq-q8':             { en: 'Is an NDA available?',   ar: 'هل تتوفر اتفاقية عدم إفصاح؟' },
    'faq-a8':             { en: 'Yes — upon request, for case materials and follow-up discussions.', ar: 'نعم — عند الطلب، لمواد الحالات ومناقشات المتابعة.' },
    'faq-q9':             { en: 'Can we bring a next-gen family member or advisor?', ar: 'هل يمكننا إحضار فرد من الجيل القادم أو مستشار؟' },
    'faq-a9':             { en: 'In many cases yes, subject to cohort size and fit.', ar: 'في كثير من الحالات نعم، رهناً بحجم الدفعة والملاءمة.' },
    'faq-q10':            { en: 'How do we receive dates and venue options?', ar: 'كيف نتلقى التواريخ وخيارات المكان؟' },
    'faq-a10':            { en: 'We share these after invitation to preserve discretion and relevance.', ar: 'نشارك هذه بعد الدعوة للحفاظ على السرية والصلة.' },
    'faq-cta-h2':         { en: 'Still have questions?',  ar: 'لا تزال لديك أسئلة؟' },
    'faq-cta-p':          { en: 'Request an invitation and we will respond personally with any further information you need.', ar: 'اطلب دعوة وسنرد شخصياً بأي معلومات إضافية تحتاجها.' },

    /* ── Contact page ── */
    'con-label':          { en: 'Contact',                ar: 'التواصل' },
    'con-h1':             { en: 'Private inquiry',        ar: 'استفسار خاص' },
    'con-p':              { en: 'For partnership conversations or confidential questions, reach out directly.', ar: 'لمحادثات الشراكة أو الأسئلة السرية، تواصل مباشرة.' },
    'con-micro':          { en: 'We respond personally.',  ar: 'نرد شخصياً.' },
    'con-body1':          { en: 'The Swiss Family Office Fellowship operates on a strictly invite-only, closed-door basis. All inquiries are handled personally and with full discretion.', ar: 'تعمل زمالة مكاتب العائلة السويسرية على أساس صارم بدعوة خاصة ومغلق الأبواب. تُعالَج جميع الاستفسارات شخصياً وبسرية تامة.' },
    'con-body2':          { en: 'If you represent a family office, institution, or potential partner and would like to explore a conversation, please use the invitation request form or reach out directly.', ar: 'إذا كنت تمثل مكتب عائلة أو مؤسسة أو شريكاً محتملاً وتودّ استكشاف محادثة، يرجى استخدام نموذج طلب الدعوة أو التواصل مباشرة.' },
    'con-direct-label':   { en: 'Direct contact',         ar: 'التواصل المباشر' },
    'con-direct-note':    { en: 'Please use the invitation form to get in touch. We respond personally.', ar: 'يرجى استخدام نموذج الدعوة للتواصل. نرد شخصياً.' },
    'con-cohort-note':    { en: 'Next cohort: 1–5 December 2026 · Zurich & Swiss Alps', ar: 'الدفعة القادمة: ١–٥ ديسمبر ٢٠٢٦ · زيورخ وجبال الألب السويسرية' },

    /* ── Footer ── */
    'footer-fellowship':  { en: 'Fellowship',             ar: 'الزمالة' },
    'footer-curation':    { en: 'Curation',               ar: 'الانتقاء' },
    'footer-switzerland': { en: 'Why Switzerland',        ar: 'لماذا سويسرا' },
    'footer-invitation':  { en: 'Request an invitation',  ar: 'طلب دعوة' },
    'footer-contact':     { en: 'Private inquiry',        ar: 'استفسار خاص' },
    'footer-faq':         { en: 'FAQ',                    ar: 'الأسئلة الشائعة' },
    'footer-micro':       { en: 'Contact: Dr. Richard Bläse · Next cohort: 1–5 December 2026 · We respond personally. No newsletters. · © 2026 Swiss Family Office Fellowship. All rights reserved.', ar: 'التواصل: د. ريتشارد بليزه · الدفعة القادمة: ١–٥ ديسمبر ٢٠٢٦ · نرد شخصياً. لا رسائل إخبارية. · © ٢٠٢٦ زمالة مكاتب العائلة السويسرية. جميع الحقوق محفوظة.' },
  };

  /* ── Language state ── */
  let currentLang = localStorage.getItem('sfof-lang') || 'en';

  /* ── Apply translations ── */
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('sfof-lang', lang);

    // Set HTML dir and lang attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', lang === 'ar');

    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (!translations[key]) return;
      const text = translations[key][lang];
      if (text === undefined) return;

      // Handle innerHTML vs textContent
      if (el.dataset.i18nHtml !== undefined) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (translations[key] && translations[key][lang]) {
        el.placeholder = translations[key][lang];
      }
    });

    // Update language switcher button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update page title
    if (lang === 'ar') {
      document.title = 'زمالة مكاتب العائلة السويسرية | وصول خاص للابتكار والاستثمار السويسري';
    } else {
      document.title = 'Swiss Family Office Fellowship | Private Access to Swiss Innovation & Investment';
    }
  }

   /* ── Global setLang for onclick attributes ── */
  window.setLang = function(lang) {
    if (lang !== currentLang) {
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 250ms ease';
      setTimeout(() => {
        applyLang(lang);
        document.body.style.opacity = '1';
      }, 250);
    }
  };

  /* ── Init ── */
  function init() {
    applyLang(currentLang);
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
