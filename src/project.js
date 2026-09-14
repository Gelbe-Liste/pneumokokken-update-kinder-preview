/**
 * med.i.scroll – Projekt: pneumokokken-update-kinder
 * ------------------------------------------------------------
 * Arbeitsstand auf Basis des med.i.scroll Mastertemplate v2.
 * Inhaltliche Basis: med-i-scroll_Pneumokokken_Inhaltskonzept_Abstimmung_2026-08-28.docx
 * v0.10: Umsetzung der inhaltlichen Änderungs-/Ergänzungswünsche aus v0.7_Korr (04.09.2026)
 *        auf Basis der sponsorneutralen v0.9: Versorgungslücke stärker gewichtet, Praxis-FAQ erweitert,
 *        Risikokinder individualisiert eingeordnet, Praxisnavigator durch 7-Schritte-Workflow ersetzt,
 *        Praxisfälle auf Versorgungssituationen umgestellt.
 * v0.11: Interaktive Kapitelergänzungen: Praxis-FAQ als aufklappbare Antworten, Praxis-Workflow als swipebare
 *        Einzelslides, Praxis-Fälle mit ausklappbaren Antworten, klickbare Literaturhinweise sowie aktualisiertes Impressum.
 * v0.12: PDF-Export korrigiert: Unicode-kompatible PDF-Ausgabe, erhaltene Zeilenumbrüche, Accordion-Inhalte,
 * v0.13: Mobile-Optimierung für Kapitel Praxis-Workflow sowie abgerundete Ecken für Swipe- und Aufklapp-Module.
 * v0.14: Mobile-Fix Praxis-Workflow: harte Breitenbegrenzung für Card, Inline-Grafik und Swipe-Komponenten gegen intrinsischen Horizontal-Overflow.
 * v0.15: Swipe-Richtung Praxis-Workflow auf Standard-Geste umgestellt: links = vorwärts, rechts = rückwärts; Hinweis unterhalb des Grafik-Elements zentriert.
 *        sauberere Seitenumbrüche, klickbare Quellen und aktualisierte Impressumsdaten im PDF.
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
    contentVersion: "v0.15",
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
      text: "Rieck T et al.: Impfquoten in Deutschland. Epidemiologisches Bulletin 50/2025. KV-Impfsurveillance zur Pneumokokken-Impfung im Kindesalter.",
      url: "https://www.rki.de/DE/Themen/Infektionskrankheiten/Impfen/Impfquoten/KV-Impfsurveillance/kv-impfsurveillance-node.html"
    },
    {
      id: "VAC-2",
      text: "Laurenz M et al.: Impact of the change in vaccination schedules for term infants on the completeness of vaccination series for preterm infants. ESPID 2026; ergänzende InGef-Routinedaten zu Vollständigkeit und Zeitgerechtigkeit der PCV-Impfung.",
      url: "https://link.springer.com/article/10.1007/s40121-025-01173-8"
    },
    {
      id: "SURV-2",
      text: "Itzek A, van der Linden M: Serotypendynamik invasiver Pneumokokken-Erkrankungen bei Kindern und Jugendlichen <18 Jahren in Deutschland, Saison 2025/26; Referenzlabor für Streptokokken / ISPPD 2026. Nutzung von Referenzlabor-Daten und Abbildungen vor Veröffentlichung freigeben lassen.",
      url: "https://www.ukaachen.de/kliniken-institute/institut-fuer-medizinische-mikrobiologie/forschung/nationales-referenzzentrum-fuer-streptokokken/"
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
  ],

  imprint: {
    brandHeading: "Gelbe Liste Online",
    editorialHeading: "Corporate Publishing",
    editorialRoleLabel: "Konzeption, Redaktion und Umsetzung",
    editorialName: "Guido Strehlau",
    company: "Vidal MMI Germany GmbH",
    street: "Monzastraße 4",
    city: "63225 Langen",
    phone: "06103 2076-0",
    phoneHref: "+49610320760",
    email: "info@mmi.de",
    editorialEmail: "RedaktionOnline@mmi.de",
    representatives: "Michael Schösser, Vincent Bouvier",
    register: "Amtsgericht Offenbach/Main, HRB 8014",
    vatId: "DE113524692",
    responsibleEditorial: "Michael Schösser, Vincent Bouvier",
    sponsoring: {
      heading: "Sponsoring & redaktionelle Unabhängigkeit",
      text: "Dieses Informationsangebot wird von MSD und Pfizer unterstützt. Auswahl, Bewertung, Gewichtung und redaktionelle Darstellung der Inhalte liegen bei Vidal MMI Germany GmbH.",
      note: "Arbeitsstand v0.13: finale Sponsorennennung, Logos und Pflichttexte vor Go-live mit Medical/Compliance abstimmen."
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
      subtitle: "Vom zeitgerechten Schutz im Säuglingsalter zur individuellen Impfentscheidung bei Risikokindern",
      background: "/assets/backgrounds/01_hero_kind-impfung-bg.jpg",
      focal: "right center",
      tone: "dark",
      align: "left",
      kind: "hero",
      quote: "Zu viele Kinder bleiben ohne vollständigen Impfschutz.",
      attribution: "Redaktion Gelbe Liste"
    },
    {
      id: "kernaussagen",
      number: "02",
      nav: "Kernaussagen",
      kicker: "Kernaussagen in 60 Sekunden",
      title: "Zu viele Kinder bleiben ohne vollständigen Impfschutz",
      subtitle: "Versorgungslücken zuerst sichtbar machen – Krankheitslast und Risikoprofil anschließend medizinisch einordnen.",
      background: "/assets/backgrounds/02_keyfacts_pneumokokken-bg.jpg",
      inlineImage: "/assets/images/02_keyfacts_ipd.png",
      inlineImageAlt: "Arbeitsgrafik zu Versorgungslücken, zeitgerechtem Impfschutz und medizinischer IPD-Einordnung bei Kindern",
      focal: "right center",
      tone: "light",
      align: "left",
      kind: "stats",
      wide: true,
      long: true,
      zoomable: true,
      stats: [
        { value: "73 %", label: "waren laut KV-Impfsurveillance im Alter von 24 Monaten vollständig gegen Pneumokokken geimpft" },
        { value: "ca. 8 %", label: "der reifgeborenen Kinder der Geburtskohorte 2022 erhielten bis 23 Monate keine PCV-Impfung" },
        { value: "10,6 %", label: "erhielten in ergänzenden Routinedaten die Boosterimpfung zeitgerecht" }
      ],
      quote: "Vollständig ist nicht automatisch zeitgerecht – Versorgungslücken sollten bei jedem geeigneten Kontakt aktiv adressiert werden.",
      bullets: [
        "Zur medizinischen Einordnung: 685 gemeldete IPD-Fälle bei 2–17-Jährigen von Januar 2023 bis Mitte Dezember 2025",
        "18 Todesfälle im genannten Meldezeitraum",
        "Jüngere und vorerkrankte Kinder sind für schwere Verläufe besonders relevant",
        "Impfstatus, Risikoprofil und nächster fälliger Impftermin gemeinsam prüfen"
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
      inlineImageAlt: "Arbeitsgrafik zu Besiedelung, Transmission sowie unterschiedlicher Häufigkeit und Schwere klinischer Pneumokokken-Erkrankungen",
      tone: "dark",
      align: "right",
      kind: "standard",
      long: true,
      zoomable: true,
      paragraphs: [
        "Streptococcus pneumoniae kann den oberen Respirationstrakt asymptomatisch besiedeln. Kinder unter 5 Jahren sind das Hauptreservoir: Im Durchschnitt sind 40–60 % dieser Altersgruppe besiedelt. Damit spielen Kinder eine wichtige Rolle bei der Weitergabe des Erregers.",
        "Aus der Kolonisation kann – abhängig von Alter, Serotyp und individuellen Risikofaktoren – eine Erkrankung entstehen. Die klinischen Manifestationen unterscheiden sich dabei in Häufigkeit und Schwere: Pneumonien sind im Versorgungskontext häufiger relevant; invasive Verläufe wie Sepsis und Meningitis sind seltener, können jedoch besonders schwer verlaufen.",
        "Kinder unter 2 Jahren sowie Kinder mit bestimmten Grunderkrankungen sind besonders vulnerabel. Für die Prävention sind deshalb sowohl die Krankheitslast als auch das individuelle Risikoprofil entscheidend."
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
      note: "Arbeitsstand v0.13: Für Referenzlabor-Daten bzw. daraus abgeleitete Visuals ist vor Veröffentlichung die erforderliche Nutzungsfreigabe zu klären."
    },
    {
      id: "valenz-evidenz",
      number: "05",
      nav: "Valenz & Evidenz",
      kicker: "Valenz & Evidenz",
      title: "Impfstoffkonzepte, Valenz & Serotypenabdeckung einordnen",
      subtitle: "PCV15 als Evidenzbeispiel: zusätzliche Serotypenabdeckung im Kontext von Immunogenität, Epidemiologie und klinischem Nutzen.",
      background: "/assets/backgrounds/05_pcv15_erweiterung-bg.jpg",
      focal: "left center",
      inlineImage: "/assets/images/05_valenz_evidenz.png",
      inlineImageAlt: "Arbeitsgrafik zur Einordnung von Serotypenabdeckung, Immunogenität, Epidemiologie und klinischem Nutzen mit PCV15 als Evidenzbeispiel",
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
      quote: "Valenz, Immunogenität, aktuelle Epidemiologie und klinischer Nutzen müssen getrennt betrachtet und gemeinsam eingeordnet werden."
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
        "Die Versorgungslücke bleibt relevant: Laut KV-Impfsurveillance waren mit 24 Monaten 73 % vollständig gegen Pneumokokken geimpft. In ergänzenden Routinedaten zur Geburtskohorte 2022 erhielten rund 8 % der reifgeborenen Kinder bis 23 Monate keine PCV-Impfung; 79,7 % erreichten eine vollständige Impfserie, die zeitgerechte Boosterimpfung jedoch nur 10,6 %.",
        "Werden geplante Impftermine – beispielsweise im Zusammenhang mit akuten Erkrankungen – verschoben, sollte der Impfstatus beim nächsten geeigneten Kontakt aktiv geprüft werden: fehlende Dosis erkennen, altersgerechtes Nachholschema prüfen und den nächsten Impftermin verbindlich planen."
      ],
      quote: "Vollständig ist nicht automatisch zeitgerecht – beide Ziele gehören zur guten Impfversorgung."
    },
    {
      id: "impfserie-wechsel",
      number: "07",
      nav: "Praxis-FAQ",
      kicker: "Praxis-FAQ",
      title: "Häufige Fragen zur Impfversorgung",
      subtitle: "Vom begonnenen Impfschema bis zur Risikokonstellation: kurze Antworten für typische Situationen im Praxisalltag.",
      background: "/assets/backgrounds/07_impfserie_fortsetzen-bg.jpg",
      focal: "left center",
      inlineImage: "/assets/images/07_impfserie_wechsel.png",
      inlineImageAlt: "Arbeitsgrafik mit sechs häufigen Fragen zur Pneumokokken-Impfversorgung bei Kindern",
      tone: "dark",
      align: "right",
      kind: "standard",
      long: true,
      zoomable: true,
      accordionVariant: "faq",
      accordionItems: [
        {
          id: "faq-1",
          heading: "1 · Mit PCV13 begonnen – kann mit PCV15 weitergeimpft werden?",
          answer: "Ja. Nach der STIKO-Stellungnahme kann eine mit PCV10 oder PCV13 begonnene Säuglings-Impfserie mit PCV15 vervollständigt werden, ohne zusätzliche Dosen über das altersentsprechende Schema hinaus."
        },
        {
          id: "faq-2",
          heading: "2 · Was tun, wenn die Grundimmunisierung nicht rechtzeitig abgeschlossen wurde?",
          answer: "Impfstatus aktiv prüfen und fehlende Dosen nach dem aktuellen altersentsprechenden STIKO-Schema nachholen. Die Impfserie wird nicht pauschal neu begonnen; entscheidend sind Alter, bisherige Dosen und der aktuelle Impfstatus."
        },
        {
          id: "faq-3",
          heading: "3 · Was verändert sich ab dem Alter von zwei Jahren?",
          answer: "Bei Kindern und Jugendlichen von 2 bis 17 Jahren ist zunächst zu prüfen, ob ein definierter STIKO-Risikofaktor vorliegt. Für diese Risikogruppe empfiehlt die STIKO seit 2026 PCV20 als Indikationsimpfung."
        },
        {
          id: "faq-4",
          heading: "4 · Wie gehe ich bei unklarem Impfstatus oder unklaren Vorimpfungen vor?",
          answer: "Vorimpfungen sollten soweit möglich anhand vorhandener Impfdokumente geklärt werden. Die weitere Planung richtet sich nach Alter, Risikoprofil und verifizierter Vorimpfung; unklare Konstellationen erfordern eine individuelle ärztliche Prüfung."
        },
        {
          id: "faq-5",
          heading: "5 · Wann verändern Grunderkrankung, Therapie oder Immunsuppression die Impfstrategie?",
          answer: "Nicht die Diagnose allein entscheidet. Relevant sind unter anderem Art und Schwere der Grunderkrankung, Therapie bzw. Immunsuppression, Alter und bisheriger Impfstatus sowie die aktuelle STIKO-Indikation."
        },
        {
          id: "faq-6",
          heading: "6 · Wie wird sichergestellt, dass notwendige Risikoimpfungen im Alltag umgesetzt werden?",
          answer: "Risikokinder aktiv identifizieren, Impfstatus dokumentieren, Reminder nutzen, Patient:innen einbestellen und Verantwortlichkeiten zwischen Pädiatrie und Facharztpraxis klar abstimmen."
        }
      ],
      note: "Arbeitsstand v0.13: Die FAQ-Antworten werden vor Go-live nochmals gegen die aktuelle STIKO-Empfehlung und die jeweiligen Fachinformationen geprüft.",
      quote: "Praxisrelevanz entsteht dort, wo aus einer Frage ein klarer nächster Handlungsschritt wird."
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
      inlineImageAlt: "Arbeitsgrafik zu den drei STIKO-Risikogruppen und zusätzlichen Faktoren der individuellen Risikobewertung",
      tone: "light",
      align: "left",
      kind: "standard",
      long: true,
      zoomable: true,
      paragraphs: [
        "Kinder und Jugendliche mit bestimmten Grunderkrankungen tragen ein erhöhtes Risiko für schwere Pneumokokken-Erkrankungen. Die STIKO fasst die relevanten Konstellationen in drei Gruppen zusammen:",
        "Für die individuelle Risikobewertung reicht die Diagnose allein jedoch nicht aus. Zu berücksichtigen sind Grunderkrankung und deren Schwere, Therapie, mögliche Immunsuppression, Alter, bisheriger Impfstatus und die konkrete Versorgungssituation des Kindes."
      ],
      numbered: [
        "Angeborene oder erworbene Immundefekte.",
        "Sonstige chronische Krankheiten mit erhöhter Gefährdung für Pneumokokken-Infektionen.",
        "Anatomische oder fremdkörperassoziierte Risiken für eine Pneumokokken-Meningitis."
      ],
      paragraphsAfter: [
        "Bei der Immunsuppression ist zu unterscheiden, ob sie durch die Erkrankung selbst oder durch die Therapie entsteht. Diese Einordnung kann die Impfplanung und den geeigneten Zeitpunkt beeinflussen und gehört deshalb in die individuelle ärztliche Bewertung.",
        "Als praxisnahes Beispiel für häufige chronische Erkrankungen kann Asthma dienen; weitere Erkrankungen und Risikosituationen werden nach klinischer Relevanz eingeordnet. Die Beispiele sind bewusst nicht vollständig – maßgeblich ist die jeweils aktuelle STIKO-Indikationsliste.",
        "Eine zusätzliche Versorgungslücke entsteht an Schnittstellen: Fachärzt:innen kennen häufig die Grunderkrankung, verfügen aber nicht immer über den vollständigen Impfstatus; Pädiater:innen sehen das Kind unter Umständen erst wieder im akuten Anlass. Dokumentation, Austausch und eine klare Zuständigkeit helfen, dass Risikokinder nicht zwischen den Versorgungsbereichen durchrutschen."
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
      nav: "Praxis-Workflow",
      kicker: "Praxis-Workflow",
      title: "Praxis-Workflow: Risikokinder erkennen – Impfversorgung aktiv steuern",
      subtitle: "Sieben Schritte für eine verlässliche Versorgung im Praxisalltag.",
      background: "/assets/backgrounds/10_praxisnavigator-bg.jpg",
      focal: "right center",
      inlineImage: "/assets/images/10_impfnavigator_wireframe.png",
      inlineImageAlt: "Arbeitsgrafik mit sieben Schritten zur Identifikation und Versorgung von Risikokindern",
      tone: "light",
      align: "left",
      kind: "steps",
      long: true,
      zoomable: true,
      intro: "Der Praxisworkflow ist bewusst kein Mini-Algorithmus für die individuelle Impfentscheidung. Er strukturiert vielmehr die organisatorischen Schritte, mit denen Risikokinder erkannt, ihr Impfstatus geprüft und notwendige Impfungen zuverlässig umgesetzt werden können.",
      steps: [
        { title: "Risikokinder identifizieren", items: ["Patientenkollektiv aktiv auf chronische Erkrankungen und relevante Risikokonstellationen prüfen."] },
        { title: "Impfstatus kontrollieren", items: ["Prüfen, ob notwendige Standard- und Risikoimpfungen vollständig und zeitgerecht dokumentiert sind."] },
        { title: "Risikokinder dokumentieren", items: ["Geeignete Kodierung bzw. Dokumentation im Praxisverwaltungssystem nutzen."] },
        { title: "Reminder einsetzen", items: ["Vorhandene Reminder-Funktionen nutzen, um ausstehende Impfungen sichtbar zu machen."] },
        { title: "Aktiv einbestellen", items: ["Eltern bzw. Patient:innen gezielt kontaktieren und einen konkreten Impftermin vereinbaren."] },
        { title: "Pädiatrie und Facharzt abstimmen", items: ["Verantwortlichkeiten klären und Impfstatus zwischen den beteiligten Praxen austauschen."] },
        { title: "Impfung durchführen", items: ["Notwendige Impfungen nicht allein an die Pädiatrie delegieren; auch Fachärzt:innen können im Rahmen ihrer Versorgung impfen."] }
      ],
      quote: "Risikokinder dürfen nicht zwischen Diagnostik, Therapie und Impfversorgung verloren gehen."
    },
    {
      id: "praxisfaelle",
      number: "11",
      nav: "Praxis-Fälle",
      kicker: "Praxis-Fälle",
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
      accordionVariant: "cases",
      accordionItems: [
        {
          id: "case-a",
          heading: "Fall A · Grundimmunisierung verspätet oder unvollständig",
          teaser: [
            "Ausgangssituation: Bei einem Säugling oder Kleinkind fehlen Impfungen beziehungsweise Termine wurden verschoben.",
            "Frage: Welche Dosis fehlt, welches altersgerechte Nachholschema ist relevant und wie wird der nächste Termin verbindlich organisiert?"
          ],
          answer: "Antwort: Impfstatus prüfen, fehlende Dosen nach dem altersentsprechenden STIKO-Nachholschema ergänzen und die Impfserie nicht pauschal neu beginnen. Entscheidend sind Alter, dokumentierte Vorimpfungen und ein konkret vereinbarter nächster Impftermin."
        },
        {
          id: "case-b",
          heading: "Fall B · Kind mit Asthma",
          teaser: [
            "Ausgangssituation: Ein Kind mit chronischer Atemwegserkrankung wird in der Praxis betreut.",
            "Frage: Liegt in der konkreten Situation eine STIKO-Risikokonstellation vor und ist der Pneumokokken-Impfstatus vollständig?"
          ],
          answer: "Antwort: Nicht das Schlagwort Asthma allein entscheidet, sondern die konkrete klinische Situation. Erkrankung, Begleittherapie, möglicher Risikostatus und dokumentierter Impfstatus sollten gemeinsam bewertet werden; bei vorliegender STIKO-Indikation ist ab dem Alter von 2 Jahren die Indikationsimpfung mit PCV20 zu prüfen."
        },
        {
          id: "case-c",
          heading: "Fall C · Kind mit Psoriasis",
          teaser: [
            "Ausgangssituation: Psoriasis mit möglicher systemischer beziehungsweise immunsuppressiver Therapie.",
            "Frage: Welche Bedeutung haben Grunderkrankung, Therapie und daraus resultierende Immunsuppression für die Risikobewertung und die Impfplanung?"
          ],
          answer: "Antwort: Die Impfplanung orientiert sich an der individuellen Risikokonstellation. Relevant sind die Grunderkrankung selbst, eine mögliche systemische oder immunsuppressive Therapie, das Alter des Kindes und der dokumentierte Impfstatus; die weitere Planung sollte bei Bedarf interdisziplinär abgestimmt werden."
        },
        {
          id: "case-d",
          heading: "Fall D · Kind mit Cochlea-Implantat",
          teaser: [
            "Ausgangssituation: Anatomische beziehungsweise fremdkörperassoziierte Risikosituation.",
            "Frage: Welche Vorimpfungen sind dokumentiert und welche weiteren Schritte sind nach aktueller STIKO erforderlich?"
          ],
          answer: "Antwort: Das Cochlea-Implantat gehört zu den anatomischen beziehungsweise fremdkörperassoziierten Risikokonstellationen für Pneumokokken-Meningitis. Deshalb sollten Vorimpfungen aktiv geprüft, fehlende Standardimpfungen ergänzt und – bei gegebener Alters- und Indikationslage – die empfohlene Indikationsimpfung umgesetzt werden."
        }
      ],
      quote: "Ausgangssituation, konkrete Frage und nächster Schritt – die Fälle übertragen die Empfehlung in typische Versorgungssituationen."
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
        "Sie möchten die Einordnung von zeitgerechtem Impfschutz, Serotypen, Impfstoffkonzepten und Risikokonstellationen vertiefen? Im CME-Modul „Pneumokokkenimpfung bei Kindern“ führen zwei pädiatrische Experten von der Evidenz zur konkreten Versorgungssituation.",
        "Die CME verbindet drei Perspektiven: Standardimpfung und zeitgerechter Schutz im Säuglingsalter, Impfstoffkonzepte und sich wandelnde Serotypen-Epidemiologie sowie Risikokinder, Indikationsimpfung und individuelle Versorgungssituationen. Praxisfälle übertragen diese Themen in den kinderärztlichen Alltag."
      ],
      bullets: [
        "Standardimpfung im Säuglingsalter, zeitgerechter Impfschutz und Versorgungslücken",
        "Impfstoffkonzepte, Serotypenabdeckung und sich wandelnde Epidemiologie",
        "Risikokinder, Indikationsimpfung und individuelle Versorgungssituationen",
        "aktuelle STIKO 2026, Impfintervalle, Praxisfälle und FAQ",
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
