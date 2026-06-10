// links for navifation (all pages except indexes)

const linksContext = {
  TR: [
    { name: "SUITLER", link: "/tr/suitler" },
    { name: "RESTORAN", link: "/tr/restoran" },
    { name: "SHUTTLE SERVIS", link: "/tr/transfer" },
    { name: "SPA & WELLNESS", link: "/tr/spa" },
    { name: "KARİYER", link: "/tr/kariyer" },
    {
      name: "HAKKIMIZDA",
      children: [
        {
          name: " SÜRDÜREBİLİRLİK RAPORU",
          link: "/tr/surdurebilirlik-raporu",
        },
        {
          name: " SÜRDÜREBİLİR YÖNETİM SİSTEMİ",
          link: "/tr/surdurebilir-yonetim-sistemi",
        },
        {
          name: "SÜRDÜREBİLİRLİK ANKETİ",
          link: "/tr/anket",
        },
        {
          name : "MÜŞTERİ MEMNUNİYETİ ANKETİ",
          link : "/tr/memnuniyet-anketi"
        },
        { name: "POLİTİKALARİMİZ", link: "/tr/politikalarimiz" },
        { name: "İLETİŞİM", link: "/tr/iletisim" },
      ],
    },
  ],
  EN: [
    { name: "SUITES", link: "/en/en/suites" },
    { name: "DINING", link: "/en/dining" },
    { name: "SHUTTLE SERVICE", link: "/en/en/shuttle-service" },
    { name: "SPA & WELLNESS", link: "/en/spa" },
    { name: "CAREER", link: "/en/en/career" },
    {
      name: "ABOUT US",
      children: [
        {
          name: "SUSTAINABILITY REPORT",
          link: "/en/en/sustainable-tourism-report",
        },
        {
          name: "SUSTAINABLE MANAGEMENT SYSTEM",
          link: "/en/en/sustainable-management",
        },
        {
          name: "SUSTAINABILITY SURVEY",
          link: "/en/en/survey",
        },
        {
          name: 'SATISFACTION SURVEY',
          link: '/en/en/satisfaction-survey'
        },
        { name: "OUR POLICIES", link: "/en/en/policies" },
        { name: "CONTACT US", link: "/en/en/contact-us" },
      ],
    },
  ],
};

export default linksContext;
