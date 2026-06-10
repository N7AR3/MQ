import iso9001 from "../assets/logoes/iso-9001.png";
import iso10002 from "../assets/logoes/iso-10002.png";
import iso45001 from "../assets/logoes/iso-45001.png";
import logo from "../assets/logoes/sustainable-turism.png";

const certificates = {
  tr: [
    { title: "Kalite yönetim sistemi", src: iso9001 },
    { title: "iş sağlığı ve güvenliği yönetim sistemi", src: iso45001 },
    {
      title: "Müşteri Memnuniyeti yönetim sistemi",
      src: iso10002,
    },
    {
      title: "Sürdürülebilir Turizm Onaylı",
      src: logo,
    },
  ],

  en: [
    { title: "Quality Management System", src: iso9001 },
    {
      title: "Occupational Health and Safety Management System",
      src: iso45001,
    },
    {
      title: "Customer Satisfaction and Complaints Handling ",
      src: iso10002,
    },
    {
      title: "Sustainable Turism Verified",
      src: logo,
    },
  ],
};

export default certificates;
