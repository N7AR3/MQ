import "./App.css";
import { useState } from "react";
import languageContext from "./contexts/languageContext";
import IndexPageEn from "./pages/main-page/IndexPageEn";
import IndexPageTr from "./pages/main-page/IndexPageTr";
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Career from "./pages/otherPages/Career";
import OutletPageTr from "./pages/outletPages/OutletPageTr";
import Suites from "./pages/otherPages/Suites";
import Suite from "./pages/otherPages/Suite";
import ShuttleService from "./pages/otherPages/ShuttleService";
import OurPolicies from "./pages/otherPages/OurPolicies";
import ContactUs from "./pages/otherPages/ContactUs";
import OutletPageEn from "./pages/outletPages/OutletPageEn";
import SatisfactionSurvey from "./pages/otherPages/Satisfaction_survey";
import IframeWrapper from "./pages/Components/IframeWrapper";
import linksContext from "./data/Links";
import NotFound404 from "./pages/otherPages/NotFound404";
import SustainableTurismReport from "./pages/otherPages/SustainableTurismReport";
import ScrollUp from "./components/ScrollUp";
import SustainableManagementSystem from "./pages/otherPages/SustainableManagementSystem";
import career from "./data/Career";
import Survey from "./pages/otherPages/Survey";
import Dining from "./pages/otherPages/Dining";
import indexRoomLinks from "./data/IndexRoomLinks";
import certificates from "./data/Certificates";

function App() {
  const [lan, setLan] = useState(() => {
    const url = window.location.href;
    if (url.includes("/tr")) {
      return "tr";
    } else if (url.includes("/en")) {
      return "en";
    } else {
      return "tr";
    }
  });

  return (
    <>
      {" "}
      <HashRouter>
        <languageContext.Provider value={{ lan, setLan }}>
          <div className="main">
            <Routes>
              {/* Turkish paths and elements */}

              <Route
                path="/"
                index
                element={
                  <IndexPageTr
                    certificates={certificates.tr}
                    lan={lan}
                    rooms={indexRoomLinks.tr}
                  />
                }
              />
              <Route
                path="/tr/rezervasyon"
                element={
                  <IframeWrapper
                    booking={true}
                    lan={lan}
                    links={linksContext.TR}
                    homeBtn={"ANA SAYFA"}
                    ifrmaeSrc={
                      "https://mqhotelsuites.rezervasyonal.com/mqhotelsuites.html"
                    }
                  />
                }
              />
              <Route
                path="/tr/restoran"
                element={
                  <IframeWrapper
                    lan={lan}
                    links={linksContext.TR}
                    homeBtn={"ANA SAYFA"}
                    ifrmaeSrc={
                      "https://mqhotelsuites.bisiparis.com/restaurant-55337"
                    }
                  />
                }
              />
              <Route
                path="/tr/spa"
                element={
                  <IframeWrapper
                    lan={lan}
                    links={linksContext.TR}
                    homeBtn={"ANA SAYFA"}
                    ifrmaeSrc={"https://mqhotelsuites.bisiparis.com/spa-61365"}
                  />
                }
              />
              <Route path="/tr" element={<OutletPageTr />}>
                <Route path="test" element={<Dining />} />
                <Route path="suitler" element={<Suites l={lan} />} />
                <Route path="suitler/:id" element={<Suite />} />
                <Route path="transfer" element={<ShuttleService lan={lan} />} />
                <Route
                  path="surdurebilirlik-raporu"
                  element={<SustainableTurismReport lan={lan} />}
                />
                <Route
                  path="surdurebilir-yonetim-sistemi"
                  element={<SustainableManagementSystem lan={lan} />}
                />
                <Route path="anket" element={<Survey lan={lan} />} />
                <Route path="memnuniyet-anketi" element={<SatisfactionSurvey lan={lan} />}/>
                <Route
                  path="politikalarimiz"
                  element={<OurPolicies lan={lan} />}
                />
                <Route
                  path="kariyer"
                  element={
                    <Career
                      lan={lan}
                      career={career.tr}
                      pageTitle="KARİYER"
                      title={
                        "MQ’da üçünü de önemsiyoruz: Seni, İşimizi ve Çevremizi!"
                      }
                      text={
                        "Çalışanlarımıza verdiğimiz söz çok güçlü: Birlikte keşfederiz, işimizden her daim keyif alırız ve birbirimize ilham veririz. Bize katıl ve farkı hisset!"
                      }
                      formTitle={"ÖZGEÇMİŞİNİZ İLE BAŞVURUN"}
                      formInfo={{
                        name: "Ad",
                        lastName: "Soyad",
                        email: "E-posta",
                        department: "Departman",
                        duty: "Görev",
                        cv: "Özgeçmiş",
                        send: "Gönder",
                      }}
                    />
                  }
                />
              </Route>
              <Route path="/tr/iletisim" element={<ContactUs lan={lan} />} />

              {/* English paths and elements */}

              <Route
                path="/en"
                element={
                  <IndexPageEn
                    certificates={certificates.en}
                    lan={lan}
                    rooms={indexRoomLinks.en}
                  />
                }
              />
              <Route
                path="/en/booking"
                element={
                  <IframeWrapper
                    lan={lan}
                    links={linksContext.EN}
                    booking={true}
                    homeBtn={"HOME"}
                    ifrmaeSrc={
                      "https://mqhotelsuites.rezervasyonal.com/mqhotelsuites.html"
                    }
                  />
                }
              />
              <Route
                path="/en/dining"
                element={
                  <IframeWrapper
                    lan={lan}
                    links={linksContext.EN}
                    homeBtn={"HOME"}
                    ifrmaeSrc={
                      "https://mqhotelsuites.bisiparis.com/restaurant-55337"
                    }
                  />
                }
              />
              <Route
                path="/en/spa"
                element={
                  <IframeWrapper
                    lan={lan}
                    links={linksContext.EN}
                    homeBtn={"HOME"}
                    ifrmaeSrc={"https://mqhotelsuites.bisiparis.com/spa-61365"}
                  />
                }
              />
              <Route path="/en/en" element={<OutletPageEn />}>
                <Route path="suites" element={<Suites l={lan} />} />
                <Route path="suites/:id" element={<Suite />} />
                <Route
                  path="shuttle-service"
                  element={<ShuttleService lan={lan} />}
                />
                <Route
                  path="career"
                  element={
                    <Career
                      lan={lan}
                      career={career.en}
                      pageTitle="CAREER"
                      title={
                        " At MQ, We care about all three: You, Our Business and Our Environment! "
                      }
                      text={
                        "The promise we make to our employees is very strong: We discover together, we always enjoy our work and we inspire each other. Join us and feel the difference!"
                      }
                      formTitle={"APPLY WITH YOUR RESUME"}
                      formInfo={{
                        name: "Name",
                        lastName: "Last Name",
                        email: "Email",
                        department: "Department",
                        duty: "Duty",
                        cv: "CV",
                        send: "Send",
                      }}
                    />
                  }
                />
                <Route
                  path="sustainable-tourism-report"
                  element={<SustainableTurismReport lan={lan} />}
                />
                <Route
                  path="sustainable-management"
                  element={<SustainableManagementSystem lan={lan} />}
                />
                <Route path="survey" element={<Survey lan={lan} />} />
                <Route path="satisfaction-survey" element={<SatisfactionSurvey lan={lan} />}/>
                <Route path="policies" element={<OurPolicies lan={lan} />} />
              </Route>
              <Route
                path="/en/en/contact-us"
                element={<ContactUs lan={lan} />}
              />
              {/* Russia paths and elements */}

              {/* <Route path="/ru" element={<IndexPageEn />}></Route> */}
              <Route path="*" element={<NotFound404 lan={lan} />} />
            </Routes>
          </div>
          <ScrollUp />
        </languageContext.Provider>{" "}
      </HashRouter>
    </>
  );
}

export default App;
