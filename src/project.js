/**
 * med.i.scroll – Projekt: pneumokokken-update-kinder
 * ------------------------------------------------------------
 * Arbeitsstand auf Basis des med.i.scroll Mastertemplate v2.
 * Inhaltliche Basis: med-i-scroll_Pneumokokken_Inhaltskonzept_Abstimmung_2026-08-28.docx
 * v0.9: redaktionelle Einordnung der am 11.09.2026 von Pfizer gelieferten Daten;
 *       klare Trennung Standardimpfung (PCV13/PCV15) vs. Indikationsimpfung (PCV20).
 *
 * WICHTIG VOR GO-LIVE:
 * - medizinische Angaben / STIKO-Empfehlungen nochmals gegen aktuelle Primärquellen prüfen
 * - finale CME-Modul-URL einsetzen
 * - CME-Punkte erst nach Zertifizierung verbindlich ausspielen
 * - Referentennamen erst nach verbindlicher Zusage im CTA nennen
 */

export const project = {
  meta: {
    title: "Pneumokokken-Impfung bei Kindern",
    eyebrow: "Pädiatrie · Impfprävention",
    medicalField: "Kinder- und Jugendmedizin",
    indication: "Pneumokokken-Impfung bei Kindern",
    description: "med.i.scroll – Pneumokokken-Impfung bei Kindern: alters- und risikoadaptiert zur passenden Impfstrategie",
    logo: "/assets/images/glo-logo.png",
    logoUrl: "https://www.gelbe-liste.de/",
    moduleId: "pneumokokken-update-kinder", // Legacy-Alias; für neue Analytics projectId verwenden
    analyticsPage: "med-i-scroll-pneumokokken-update-kinder", // Legacy-Alias
    analyticsChapter1: "paediatrie-impfpraevention", // Legacy-Alias
    projectId: "pneumokokken-update-kinder",
    contentVersion: "v0.9",
    analytics: {
      page: "med.i.scroll | Pneumokokken-Impfung bei Kindern",
      pageType: "Microsite",
      visitorType: "Not logged",
      medicalField: "Kinder- und Jugendmedizin",
      indication: "Pneumokokken-Impfung bei Kindern",
      articleCategory: ["MED.I.SCROLL", "IMPFPRÄVENTION"],
      tags: ["med.i.scroll", "Gelbe Liste", "Pneumokokken", "Pädiatrie", "Impfprävention"],
      product: {
        name: "",
        molecules: [],
        titulaire: "",
        atcClassCodes: [],
        atcClassNames: [],
        ucd10Codes: []
      }
    },
    pdfFileName: "Pneumokokken-Update-Kinder_Gelbe-Liste.pdf",
    pdfSubject: "Pneumokokken-Impfung bei Kindern | Gelbe Liste",
    pdfAuthor: "Vidal MMI Germany GmbH",
    // Arbeitsstand: vor Go-live durch die direkte Modul-URL ersetzen.
    cmeUrl: "https://campus.gelbe-liste.de/"
  },

  sources: [
    {
      id: "RKI-1",
      text: "STIKO / Robert Koch-Institut: Beschluss und Wissenschaftliche Begründung zur Aktualisierung der Indikationsimpfung für Kinder und Jugendliche mit Risikofaktoren im Alter von ≥2 bis 17 Jahren gegen Pneumokokken-Erkrankungen. Epidemiologisches Bulletin 2/2026.",
      url: "https://doi.org/10.25646/13603.2"
    },
    {
      id: "RKI-2",
      text: "Robert Koch-Institut: Empfehlungen der Ständigen Impfkommission (STIKO) 2026, aktuelle Version 5 (09.07.2026).",
      url: "https://edoc.rki.de/handle/176904/13181.5"
    },
    {
      id: "RKI-3",
      text: "STIKO: PCV20 im Säuglings- und Kleinkindalter – erneute Evaluierung unter Berücksichtigung einer dynamischen Transmissionsmodellierung. Epidemiologisches Bulletin 33/2025.",
      url: "https://doi.org/10.25646/13340"
    },
    {
      id: "RKI-4",
      text: "STIKO: Stellungnahme zum Einsatz von Pneumokokken-Konjugatimpfstoffen im Säuglings-, Kindes- und Jugendalter. Epidemiologisches Bulletin 20/2023.",
      url: "https://doi.org/10.25646/11419"
    },
    {
      id: "GBA-1",
      text: "Gemeinsamer Bundesausschuss: Schutzimpfungs-Richtlinie – Umsetzung der STIKO-Indikationsimpfempfehlung für Kinder und Jugendliche mit Risikofaktoren im Alter von ≥2 bis 17 Jahren gegen Pneumokokken-Erkrankungen, Beschluss vom 05.03.2026.",
      url: "https://www.g-ba.de/beschluesse/7721/"
    },
    {
      id: "VAC-1",
      text: "Rieck T et al.: Impfquoten in Deutschland. Epidemiologisches Bulletin 50/2025. KV-Impfsurveillance zur Pneumokokken-Impfung im Kindesalter."
    },
    {
      id: "VAC-2",
      text: "Laurenz M et al.: Impact of the change in vaccination schedules for term infants on the completeness of vaccination series for preterm infants. ESPID 2026; ergänzende InGef-Routinedaten zu Vollständigkeit und Zeitgerechtigkeit der PCV-Impfung."
    },
    {
      id: "SURV-2",
      text: "Itzek A, van der Linden M: Serotypendynamik invasiver Pneumokokken-Erkrankungen bei Kindern und Jugendlichen <18 Jahren in Deutschland, Saison 2025/26; Referenzlabor für Streptokokken / ISPPD 2026. Nutzung von Referenzlabor-Daten und Abbildungen vor Veröffentlichung freigeben lassen."
    },
    {
      id: "EMA-1",
      text: "European Medicines Agency: Vaxneuvance EPAR – Zusammensetzung, Indikation und pädiatrische Studien.",
      url: "https://www.ema.europa.eu/en/medicines/human/EPAR/vaxneuvance"
    },
    {
      id: "SR-1",
      text: "Wagner G et al. Immunogenicity and safety of the 15-valent pneumococcal conjugate vaccine, a systematic review and meta-analysis. NPJ Vaccines. 2024;9:257.",
      url: "https://pubmed.ncbi.nlm.nih.gov/39738219/"
    },
    {
      id: "SR-2",
      text: "Abo Zeid M et al. Comparative immunogenicity and safety of PCV15 versus PCV13 for pneumococcal serotypes 22F and 33F: systematic review and meta-analysis. Infection. 2026.",
      url: "https://pubmed.ncbi.nlm.nih.gov/42467175/"
    },
    {
      id: "SURV-1",
      text: "Deutschland/Polen/Niederlande Surveillance: Streptococcus pneumoniae serotype 38 emerges as one of the dominant serotypes causing IPD in Germany and Poland.",
      url: "https://pubmed.ncbi.nlm.nih.gov/40436150/"
    }
  ],

  imprint: {
    editorialHeading: "Corporate Publishing",
    editorialName: "Guido Strehlau",
    company: "Vidal MMI Germany GmbH",
    street: "Monzastraße 4",
    city: "63225 Langen",
    phone: "06103 2076-0",
    phoneHref: "+49610320760",
    email: "info@mmi.de",
    representatives: "Michael Schösser, Vincent Bouvier",
    register: "Amtsgericht Offenbach/Main, HRB 8014",
    vatId: "DE113524692",
    responsibleEditorial: "Michael Schösser, Vincent Bouvier",
    sponsoring: {
      heading: "Sponsoring & redaktionelle Unabhängigkeit",
      text: "Dieses Informationsangebot wird von MSD und Pfizer unterstützt. Auswahl, Bewertung, Gewichtung und redaktionelle Darstellung der Inhalte liegen bei Vidal MMI Germany GmbH.",
      note: "Arbeitsstand v0.9: finale Sponsorennennung, Logos und Pflichttexte vor Go-live mit Medical/Compliance abstimmen."
    },
    imageCredits: [
      "Die in diesem Informationsangebot verwendeten Hintergrundmotive wurden teilweise KI-gestützt für dieses Projekt erstellt.",
      "Grafiken, Illustrationen und redaktionelle Visualisierungen: Vidal MMI Germany GmbH.",
      "Auswahl, Bearbeitung und Einbindung der Bildmotive erfolgen redaktionell durch Vidal MMI Germany GmbH."
    ]
  },

  pages: [
    {
      id: "intro",
      number: "01",
      nav: "Pneumokokken-Impfung",
      kicker: "Pädiatrie · Impfprävention",
      title: "Pneumokokken-Impfung bei Kindern",
      subtitle: "Vom Serotyp zur individuellen Impfentscheidung",
      background: "/assets/backgrounds/01_hero_kind-impfung-bg.jpg",
      focal: "right center",
      tone: "dark",
      align: "left",
      kind: "hero",
      quote: "Alter, Risikoprofil und bisheriger Impfstatus bestimmen die passende Impfstrategie – nicht die Valenz allein.",
      attribution: "Redaktion Gelbe Liste"
    },
    {
      id: "kernaussagen",
      number: "02",
      nav: "Kernaussagen",
      kicker: "Kernaussagen in 60 Sekunden",
      title: "Pneumokokken bleiben klinisch relevant",
      subtitle: "Schwere Verläufe sind selten, aber für jüngere und vorerkrankte Kinder besonders relevant – zugleich bestehen weiterhin Impflücken.",
      background: "/assets/backgrounds/02_keyfacts_pneumokokken-bg.jpg",
      inlineImage: "/assets/images/02_keyfacts_ipd.png",
      inlineImageAlt: "Arbeitsgrafik mit Key Facts zu invasiven Pneumokokken-Erkrankungen bei Kindern und Jugendlichen",
      focal: "right center",
      tone: "light",
      align: "left",
      kind: "stats",
      wide: true,
      long: true,
      zoomable: true,
      stats: [
        { value: "685", label: "gemeldete IPD-Fälle bei 2–17-Jährigen von Januar 2023 bis Mitte Dezember 2025" },
        { value: "1,8", label: "Fälle pro 100.000 pro Jahr im Durchschnitt" },
        { value: "5,0", label: "Fälle pro 100.000 pro Jahr bei 2-Jährigen" }
      ],
      quote: "Krankheitsrisiko und Impfversorgung zusammen denken: Risikostratifizierung und zeitgerechte Impfung bleiben zentrale Präventionsaufgaben.",
      bullets: [
        "18 Todesfälle im genannten Meldezeitraum",
        "Im Alter von 24 Monaten waren laut KV-Impfsurveillance 73 % vollständig gegen Pneumokokken geimpft",
        "Altersangabe beachten: die IPD-Meldedaten beziehen sich hier auf 2–17-Jährige",
        "Risikostratifizierung und Impfzeitpunkt bleiben zentrale Bestandteile der Prävention"
      ]
    },
    {
      id: "pneumokokken-verstehen",
      number: "03",
      nav: "Pneumokokken verstehen",
      kicker: "Pneumokokken verstehen",
      title: "Besiedelung ist häufig – invasive Erkrankung selten, aber potenziell schwer",
      subtitle: "Warum Kinder für Transmission und Prävention eine zentrale Rolle spielen.",
      background: "/assets/backgrounds/03_besiedelung_pneumokokken-bg.jpg",
      focal: "left center",
      inlineImage: "/assets/images/03_reservoir_transmission.png",
      inlineImageAlt: "Arbeitsgrafik zu Besiedelung, Transmission und möglichen Pneumokokken-Erkrankungen",
      tone: "dark",
      align: "right",
      kind: "standard",
      long: true,
      zoomable: true,
      paragraphs: [
        "Streptococcus pneumoniae kann den oberen Respirationstrakt asymptomatisch besiedeln. Kinder unter 5 Jahren sind das Hauptreservoir: Im Durchschnitt sind 40–60 % dieser Altersgruppe besiedelt. Damit spielen Kinder eine wichtige Rolle bei der Weitergabe des Erregers.",
        "Aus der Kolonisation kann – abhängig von Alter, Serotyp und individuellen Risikofaktoren – eine Erkrankung entstehen. Klinisch relevant sind neben Pneumonien insbesondere invasive Verläufe wie Sepsis und Meningitis. Kinder unter 2 Jahren sowie Kinder mit bestimmten Grunderkrankungen sind besonders vulnerabel."
      ],
      quote: "Die Impfstrategie adressiert nicht nur den Erreger, sondern unterschiedliche Risiken entlang des Kindesalters."
    },
    {
      id: "serotypen-im-wandel",
      number: "04",
      nav: "Serotypen im Wandel",
      kicker: "Serotypen im Wandel",
      title: "Die Impfstofflandschaft verändert die Serotypenlandschaft",
      subtitle: "Warum die aktuelle Epidemiologie kontinuierlich neu bewertet werden muss.",
      background: "/assets/backgrounds/04_serotypenlandschaft_wandel-bg.jpg",
      focal: "right center",
      inlineImage: "/assets/images/04_serotypen_im_wandel.png",
      inlineImageAlt: "Arbeitsgrafik zu Impfprogramm, Serotypenverschiebung und Surveillance",
      tone: "light",
      align: "left",
      kind: "standard",
      long: true,
      zoomable: true,
      paragraphs: [
        "Pneumokokken umfassen mehr als 100 bekannte Serotypen. Impfprogramme reduzieren Erkrankungen durch abgedeckte Serotypen – gleichzeitig kann sich die relative Bedeutung anderer Serotypen verändern. Dieses „Serotype Replacement“ macht eine kontinuierliche Surveillance erforderlich.",
        "In den deutschen Meldedaten 2023–2025 lag für 104 IPD-Fälle bei 2–17-Jährigen eine Serotypangabe vor. 50 % entfielen auf PCV13-Serotypen; Serotyp 3 war mit 24 % der häufigste einzelne Serotyp. Das RKI weist wegen der kleinen Fallzahlen ausdrücklich auf vorsichtige Interpretation hin.",
        "Ergänzende Referenzlabor-Daten für die Saison 2025/26 berichten 198 bestätigte IPD-Isolate bei Kindern und Jugendlichen <18 Jahren. Bezogen auf die enthaltenen Serotypen lag die theoretische Abdeckung bei 34,8 % für PCV13, 36,4 % für PCV15 und 53,0 % für PCV20.",
        "Diese Prozentwerte beschreiben ausschließlich, welcher Anteil der nachgewiesenen Serotypen in den jeweiligen Impfstoffen enthalten ist. Sie sind keine Aussage zur klinischen Impfstoffwirksamkeit und ersetzen nicht die alters- und indikationsspezifische STIKO-Empfehlung."
      ],
      quote: "Serotypenabdeckung ist eine epidemiologische Kenngröße – keine Rangliste der Impfstoffe.",
      note: "Arbeitsstand v0.9: Für Referenzlabor-Daten bzw. daraus abgeleitete Visuals ist vor Veröffentlichung die erforderliche Nutzungsfreigabe zu klären."
    },
    {
      id: "valenz-evidenz",
      number: "05",
      nav: "Valenz & Evidenz",
      kicker: "Valenz & Evidenz",
      title: "PCV15 erweitert PCV13 um 22F und 33F",
      subtitle: "Was zusätzliche Serotypenabdeckung bedeutet – und was sie allein noch nicht beantwortet.",
      background: "/assets/backgrounds/05_pcv15_erweiterung-bg.jpg",
      focal: "left center",
      inlineImage: "/assets/images/05_valenz_evidenz.png",
      inlineImageAlt: "Arbeitsgrafik zur Serotypenabdeckung von PCV13 und PCV15 sowie zur Evidenzeinordnung",
      tone: "dark",
      align: "right",
      kind: "standard",
      long: true,
      zoomable: true,
      paragraphs: [
        "PCV15 enthält die 13 Serotypen von PCV13 und zusätzlich die Serotypen 22F und 33F. In der aktuellen STIKO-Empfehlung ist PCV15 – neben PCV13 – eine Option für die Standardimpfung von Säuglingen.",
        "Systematische Reviews zeigen für die zusätzlichen Serotypen 22F und 33F stärkere Immunantworten unter PCV15. Eine 2026 publizierte Meta-Analyse schloss 19 randomisierte Studien mit insgesamt 16.046 Teilnehmenden ein. Gleichzeitig betonen die Autoren, dass klinische Effektivitätsdaten erforderlich sind, um zu klären, in welchem Umfang immunologische Unterschiede tatsächlich zu weniger Pneumokokken-Erkrankungen führen.",
        "Für die Einordnung ist deshalb die Trennung wichtig: Valenz beschreibt Serotypenabdeckung; Immunogenität beschreibt die Immunantwort; klinischer Nutzen hängt zusätzlich von Epidemiologie, Wirksamkeit und der konkreten Zielgruppe ab. Für Risikokinder von 2 bis einschließlich 17 Jahren gilt seit 2026 eine eigene STIKO-Strategie mit PCV20."
      ],
      quote: "Nicht PCV15 gegen PCV20 vergleichen – sondern die jeweilige STIKO-Rolle in Standard- und Indikationsimpfung korrekt einordnen."
    },
    {
      id: "standardimpfung",
      number: "06",
      nav: "Standardimpfung",
      kicker: "Standardimpfung",
      title: "Säuglinge zeitgerecht schützen",
      subtitle: "PCV13 oder PCV15 – das Impfschema hängt insbesondere vom Gestationsalter ab.",
      background: "/assets/backgrounds/06_saeuglinge_zeitgerecht-bg.jpg",
      focal: "right center",
      inlineImage: "/assets/images/06_standardimpfung_timeline.png",
      inlineImageAlt: "Arbeitsgrafik zum 2+1- und 3+1-Impfschema bei Pneumokokken",
      tone: "light",
      align: "left",
      kind: "standard",
      long: true,
      zoomable: true,
      paragraphs: [
        "Die STIKO hält auch 2026 an PCV13 oder PCV15 für die Grundimmunisierung fest. Gesunde reifgeborene Säuglinge erhalten die Pneumokokken-Impfung im 2+1-Schema: im Alter von 2, 4 und 11 Monaten.",
        "Frühgeborene – Geburt vor vollendeter 37. Schwangerschaftswoche – erhalten eine zusätzliche Dosis im Alter von 3 Monaten und werden im 3+1-Schema mit 2, 3, 4 und 11 Monaten geimpft.",
        "Eine Nachholimpfung wird bis zum Alter von unter 24 Monaten empfohlen. Bei Kindern ab 12 Monaten sind für die Nachholimpfung zwei Dosen im Abstand von mindestens 8 Wochen ausreichend.",
        "Die Versorgungslücke bleibt relevant: Laut KV-Impfsurveillance waren mit 24 Monaten 73 % vollständig gegen Pneumokokken geimpft. In ergänzenden Routinedaten zur Geburtskohorte 2022 erhielten rund 8 % der reifgeborenen Kinder bis 23 Monate keine PCV-Impfung; 79,7 % erreichten eine vollständige Impfserie, die zeitgerechte Boosterimpfung jedoch nur 10,6 %."
      ],
      quote: "Vollständig ist nicht automatisch zeitgerecht – beide Ziele gehören zur guten Impfversorgung."
    },
    {
      id: "impfserie-wechsel",
      number: "07",
      nav: "Praxis-FAQ",
      kicker: "Praxis-FAQ",
      title: "Impfserie mit PCV13 begonnen – kann mit PCV15 weitergeimpft werden?",
      subtitle: "Eine häufige Frage aus der kinderärztlichen Versorgung.",
      background: "/assets/backgrounds/07_impfserie_fortsetzen-bg.jpg",
      focal: "left center",
      inlineImage: "/assets/images/07_impfserie_wechsel.png",
      inlineImageAlt: "Arbeitsgrafik zum Wechsel von PCV13 auf PCV15 innerhalb einer begonnenen Impfserie",
      tone: "dark",
      align: "right",
      kind: "standard",
      long: true,
      zoomable: true,
      paragraphs: [
        "Ja. In ihrer Stellungnahme zum Einsatz von Pneumokokken-Konjugatimpfstoffen hat die STIKO festgehalten, dass mit PCV10 oder PCV13 begonnene Säuglings-Impfserien mit PCV15 vervollständigt werden können.",
        "Dafür sind keine zusätzlichen Impfstoffdosen über das altersentsprechende 2+1-Schema bei reifgeborenen beziehungsweise 3+1-Schema bei frühgeborenen Säuglingen hinaus erforderlich."
      ],
      note: "Diese konkrete Wechsel-Aussage stammt aus der STIKO-Stellungnahme 2023. Sie betrifft die Vervollständigung einer begonnenen Säuglings-Impfserie und wird vor Go-live nochmals gegen aktuelle STIKO-Empfehlung und Fachinformation geprüft.",
      quote: "Impfstoffwechsel heißt nicht: Impfserie neu beginnen."
    },
    {
      id: "risikogruppen",
      number: "08",
      nav: "Risikogruppen",
      kicker: "Risikokinder",
      title: "Risikokind ist nicht gleich Risikokind",
      subtitle: "Drei Gruppen strukturieren die Indikationsimpfung – entscheidend ist die konkrete STIKO-Indikation.",
      background: "/assets/backgrounds/08_risikokinder_profile-bg.jpg",
      focal: "right center",
      inlineImage: "/assets/images/08_risikogruppen.png",
      inlineImageAlt: "Arbeitsgrafik zu drei Gruppen der Pneumokokken-Indikationsimpfung bei Risikokindern",
      tone: "light",
      align: "left",
      kind: "standard",
      long: true,
      zoomable: true,
      paragraphs: [
        "Kinder und Jugendliche mit bestimmten Grunderkrankungen tragen ein erhöhtes Risiko für schwere Pneumokokken-Erkrankungen. Die STIKO fasst die relevanten Konstellationen in drei Gruppen zusammen:"
      ],
      numbered: [
        "Angeborene oder erworbene Immundefekte.",
        "Sonstige chronische Krankheiten mit erhöhter Gefährdung für Pneumokokken-Infektionen.",
        "Anatomische oder fremdkörperassoziierte Risiken für eine Pneumokokken-Meningitis."
      ],
      paragraphsAfter: [
        "Dazu gehören je nach konkreter Situation beispielsweise chronische Atemwegs- oder Herz-Kreislauf-Erkrankungen, Immundefekte bzw. immunsuppressive Therapien, Asplenie sowie Liquorfisteln oder Cochlea-Implantate. Die Beispiele sind bewusst nicht vollständig; maßgeblich ist die jeweils aktuelle STIKO-Indikationsliste.",
        "Für die redaktionelle Darstellung gilt: Risikofaktoren werden nach klinischer Relevanz und Versorgungspraxis erläutert – nicht danach, welcher Sponsorimpfstoff dadurch häufiger genannt wird."
      ],
      quote: "Die zentrale Praxisfrage lautet: Verändert die Grunderkrankung die Impfstrategie dieses Kindes?"
    },
    {
      id: "stiko-2026",
      number: "09",
      nav: "STIKO 2026",
      kicker: "STIKO 2026",
      title: "Risikokinder von 2 bis 17 Jahren: STIKO empfiehlt PCV20",
      subtitle: "Die Indikationsimpfung folgt damit bewusst einer anderen Strategie als die Standardimpfung im Säuglingsalter.",
      background: "/assets/backgrounds/09_stiko_pcv20_risikokinder-bg.jpg",
      focal: "left center",
      inlineImage: "/assets/images/09_stiko_2026_pathway.png",
      inlineImageAlt: "Arbeitsgrafik zur Trennung von Standardimpfung und Indikationsimpfung nach STIKO 2026",
      tone: "dark",
      align: "right",
      kind: "standard",
      long: true,
      zoomable: true,
      paragraphs: [
        "Seit Januar 2026 empfiehlt die STIKO für Kinder und Jugendliche im Alter von 2 bis einschließlich 17 Jahren mit definierten Risikofaktoren die Verwendung von PCV20. Die alleinige Anwendung von PPSV23 beziehungsweise das bisherige sequenzielle Schema wird für diese Gruppe nicht mehr empfohlen.",
        "Die STIKO begründet die Aktualisierung unter anderem mit der bei Risikokindern relevanten Serotypenabdeckung: Rund 70 % der IPD-Fälle dieser Altersgruppe wurden Serotypen zugeordnet, die in PCV20 enthalten sind. Zugleich vereinfacht die Empfehlung die bisherige sequenzielle Strategie.",
        "Anwendungshinweise: Ungeimpfte Risikokinder erhalten PCV20. Wurde zuvor mindestens eine Dosis PCV13 oder PCV15 gegeben, wird PCV20 im Abstand von 1 Jahr empfohlen. Nach früherer PPSV23-Impfung beziehungsweise früherem sequenziellen Schema gilt grundsätzlich ein Abstand von 6 Jahren; bei ausgeprägter Immundefizienz ist 1 Jahr möglich."
      ],
      note: "Für Wiederholungsimpfungen nach PCV20 spricht die STIKO derzeit keine Empfehlung aus, da entsprechende Daten fehlen.",
      quote: "PCV20 wird hier nicht als Alternative zur Säuglingsstandardimpfung dargestellt, sondern als STIKO-Empfehlung für eine klar definierte Risikogruppe."
    },
    {
      id: "praxisnavigator",
      number: "10",
      nav: "Praxisnavigator",
      kicker: "Praxisnavigator",
      title: "Von drei Fragen zur nächsten Handlung",
      subtitle: "Alter, Risikoprofil und bisheriger Impfstatus zusammenführen.",
      background: "/assets/backgrounds/10_praxisnavigator-bg.jpg",
      focal: "right center",
      inlineImage: "/assets/images/10_impfnavigator_wireframe.png",
      inlineImageAlt: "Arbeitsgrafik für einen Pneumokokken-Impfnavigator mit drei Entscheidungsfragen",
      tone: "light",
      align: "left",
      kind: "steps",
      long: true,
      zoomable: true,
      intro: "Der Navigator soll keine eigenständige Leitlinie ersetzen, sondern die aktuelle STIKO-Systematik verständlich strukturieren. Kernlogik: Standardimpfung im Säuglingsalter und Indikationsimpfung bei Risikokindern ab 2 Jahren sauber trennen.",
      steps: [
        { title: "Alter", items: ["Unter 2 Jahre oder 2–17 Jahre?"] },
        { title: "Risikofaktor", items: ["Liegt eine STIKO-Indikation vor?"] },
        { title: "Vorimpfung", items: ["PCV13, PCV15, PPSV23, Kombination oder unklar?"] },
        { title: "Nächste Handlung", items: ["Standardimpfung: PCV13 oder PCV15 nach Alter und Gestationsalter.", "STIKO-Risikofaktor im Alter 2–17 Jahre: PCV20 unter Beachtung von Vorimpfung und Impfintervall."] }
      ],
      quote: "Der Navigator macht die Logik sichtbar – die konkrete Impfentscheidung bleibt leitlinien- und patientenbezogen."
    },
    {
      id: "praxisfaelle",
      number: "11",
      nav: "Praxisfälle",
      kicker: "Praxisfälle",
      title: "Vier Situationen, die die Empfehlung greifbar machen",
      subtitle: "Der Scroll endet mit der Frage – das CME liefert die vertiefte Diskussion.",
      background: "/assets/backgrounds/11_praxisfaelle-bg.jpg",
      focal: "left center",
      inlineImage: "/assets/images/11_praxisfaelle.png",
      inlineImageAlt: "Arbeitsgrafik mit vier pädiatrischen Praxisfällen zur Pneumokokken-Impfung",
      tone: "dark",
      align: "right",
      kind: "standard",
      long: true,
      zoomable: true,
      blocks: [
        {
          heading: "Fall A · 4 Monate",
          text: "Erste Pneumokokken-Dosis mit PCV13. Frage: Kann die Serie mit PCV15 fortgeführt werden? Kurzantwort: grundsätzlich ja, ohne zusätzliche Dosen über das altersentsprechende Schema hinaus."
        },
        {
          heading: "Fall B · Frühgeborenes",
          text: "Begonnenes Impfschema. Frage: Welche zusätzliche Dosis ist im Vergleich zum reifgeborenen Säugling vorgesehen? Kurzantwort: 3+1 statt 2+1."
        },
        {
          heading: "Fall C · 3 Jahre + chronische Erkrankung",
          text: "Grundimmunisiertes Kind mit einer in der STIKO definierten chronischen Risikokonstellation. Frage: Folgt daraus die PCV20-Indikationsimpfung – und welcher Abstand zur bisherigen PCV-Impfung ist einzuhalten?"
        },
        {
          heading: "Fall D · 8 Jahre + Risikofaktor",
          text: "Frühere PCV-/PPSV23-Impfung bei bestehendem Risikofaktor. Frage: Welcher Abstand bis PCV20 gilt? Hier sollte der Scroll bewusst in den CME-Deep-Dive überleiten."
        }
      ],
      quote: "Die einfache Regel endet dort, wo Vorimpfung, Risiko und Timing zusammenkommen – genau hier beginnt die CME-Vertiefung."
    },
    {
      id: "cme-vertiefung",
      number: "12",
      nav: "CME vertiefen",
      kicker: "CME vertiefen",
      title: "Pneumokokkenimpfung bei Kindern – Fachwissen vertiefen",
      subtitle: "Zwei Experten, klinische Einordnung, Fallbeispiele und Lernerfolgskontrolle.",
      background: "/assets/backgrounds/12_cme_fachwissen-bg.jpg",
      focal: "right center",
      inlineImage: "/assets/images/12_cme_cta_mockup.png",
      inlineImageAlt: "Arbeitsmockup für den CTA zum CME-Modul Pneumokokkenimpfung bei Kindern",
      tone: "light",
      align: "left",
      kind: "cta",
      long: true,
      paragraphs: [
        "Sie möchten die Einordnung von Serotypen, Impfstrategien und Risikokonstellationen vertiefen? Im CME-Modul „Pneumokokkenimpfung bei Kindern“ führen zwei pädiatrische Experten von der Evidenz zur konkreten Versorgungssituation.",
        "Geplant sind zwei aufeinander abgestimmte Expertenvorträge: ein evidenz-/impfmedizinischer Schwerpunkt und ein klinischer Schwerpunkt zu Risikogruppen und individueller Impfentscheidung. Im Anschluss vertiefen Fallbeispiele typische Fragen aus der pädiatrischen Praxis."
      ],
      bullets: [
        "Evidenz, Serotypen und Impfstoffkonzepte",
        "Standardimpfung mit PCV13/PCV15 und Indikationsimpfung mit PCV20",
        "aktuelle STIKO 2026 und Impfintervalle",
        "Praxisfälle und FAQ",
        "Lernerfolgskontrolle"
      ],
      badges: ["2 Expertenvorträge", "geplant 2–3 CME-Punkte*", "Lernerfolgskontrolle"],
      note: "* Die CME-Punkte sind abhängig vom finalen Vortrags- und Lernumfang und stehen bis zur Zertifizierung unter Vorbehalt. Arbeitsstand: Der Button führt zunächst auf den Gelbe-Liste Campus; vor Go-live die direkte Modul-URL einsetzen.",
      primaryCta: {
        label: "Jetzt CME-Fortbildung starten",
        url: "https://campus.gelbe-liste.de/",
        destinationId: "cme-pneumokokken-kinder"
      }
    },
    {
      id: "literatur",
      number: "13",
      nav: "Literatur & Download",
      kicker: "Quellen",
      title: "Literatur & weiterführende Informationen",
      background: "/assets/backgrounds/13_literatur_weiterfuehrend-bg.jpg",
      focal: "right center",
      tone: "light",
      align: "left",
      kind: "sources",
      long: true,
      primaryCta: {
        label: "Aktuelle STIKO-Empfehlungen öffnen",
        url: "https://www.rki.de/DE/Themen/Infektionskrankheiten/Impfen/Staendige-Impfkommission/Empfehlungen/empfehlungen-node.html"
      },
      pdfCtaLabel: "Inhalte als PDF erstellen"
    },
    {
      id: "impressum",
      number: "14",
      nav: "Impressum",
      kicker: "Rechtliche Angaben",
      title: "Impressum",
      background: "/assets/backgrounds/14_impressum_gelbe_liste-bg.jpg",
      focal: "right center",
      tone: "light",
      align: "left",
      kind: "imprint",
      long: true
    }
  ]
};

export const pages = project.pages;
