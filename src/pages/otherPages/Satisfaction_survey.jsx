import { useEffect } from "react";
import "./Survey.css";


const satisfaction_survey = {
  tr: {
    RESEPSİYON :[
      "Giriş Çıkış İşlemlerinin Çabukluğu",
      "BellBoy ve Bagaj Hizmetleri",
      "Tesis Hakkında Bilgilendirme",
      "Personelin İlgi ve Nezaketi"
    ],
    "KAT HİZMETLERİ": [
      "İlk Varışınızda Oda Temizliği",
      "Oda Fiziki Görünümü ve Konforu",
      "Konaklama Süresince Oda Temizliği ve Düzeni",
      "Çamaşırhane",
      "Personelin İlgi ve Nezaketi"
    ],
    "TEKNİK SERVİS": [
      "Havuzun Temizliği",
      "Arıza Giderme",
      "Personelin İlgi ve Nezaketi"
    ],
    "YİYECEK VE İÇECEK" : [
      "Kahvaltı Kalitesi",
      "Öğle ve Akşam Yemeği Kalitesi Ve Lezzeti",
      "Personelin İlgi ve Nezaketi"
    ],
    "Genel olarak otelimizi değerlendirirmisiniz?": [
        "Personel",
        "Restoran ve yemekler",
        "Oda",
        "SPA & Wellness",
        "Havuz"
    ]
  },
  en : {
    "RECEPTION": [
      "Speed of Check-in and Check-out Procedures",
      "Bellboy and Luggage Services",
      "Information About the Facility",
      "Courtesy and Attentiveness of Staff"
    ],
    "HOUSEKEEPING": [
      "Room Cleanliness Upon First Arrival",
      "Physical Appearance and Comfort of the Room",
      "Room Cleanliness and Tidiness During Stay",
      "Laundry Service",
      "Courtesy and Attentiveness of Staff"
    ],
    "TECHNICAL SERVICE": [
      "Pool Cleanliness",
      "Troubleshooting and Repairs",
      "Courtesy and Attentiveness of Staff"
    ],
    "FOOD AND BEVERAGE": [
      "Breakfast Quality",
      "Quality and Taste of Lunch and Dinner",
      "Courtesy and Attentiveness of Staff"
    ],
    "Could you please evaluate our hotel in general?": [
      "Staff",
      "Restaurant and food",
      "Room",
      "SPA & Wellness",
      "Swimming Pool"
  ]
  }
}



const SatisfactionSurvey = ({lan}) => {
    useEffect(() => window.scrollTo(0, 0), []);

    const keys = Object.keys(satisfaction_survey[lan])
    const f = lan === 'tr' ? "Yorumlarınız / Tavsiyeleriniz" : lan === 'en' ? "Your Comments / Suggestions" : "Yorumlarınız / Tavsiyeleriniz"

    return (
        <div className="form-container ">
          <form
            className="rating-form"
            action="https://formsubmit.co/ayberksogucak@mqhotelsuites.com"
            encType="multipart/form-data"
            method="POST"
          >
             <h2> {lan === 'tr' ? "MÜŞTERİ MEMNUNİYET ANKETİ" : 'SATISFACTION SURVEY'} </h2>
             <hr/>
         <section className="heading">
          <label htmlFor="name"> {lan === "tr" ? "Ad" : 'Name'} </label>
          <input type="text" name="name" id="name" required/>
          <label htmlFor="lastName"> {lan === "tr" ? "Soyad" : 'Last Name'} </label>
          <input type="text" name="Lastname" id="Lastname" required/>
          <label htmlFor="date"> {lan === "tr" ? "Giriş Tarihi" : 'Check in Date'} </label>
          <input type="date" name="date" id="date" required/>
          <label htmlFor="Cdate"> {lan === "tr" ? "Çıkış Tarihi" : 'Check out Date'} </label>
          <input type="date" name="Cdate" id="Cdate" required/>
          </section>
         <hr/>
            {keys.map((dep, i) => {
                
                return <div key={i}> 
                <h2> {dep} </h2>
                {satisfaction_survey[lan][dep].map((q, j) => {
                    return  <section key={j}>
                    <h4> {q} </h4>
                    <fieldset className="rating-container">
                      <input
                        type="radio"
                        name={q}
                        id={`rate5_${j + 1}_${i}`}
                        value="5"
                        required
                      />
                      <label htmlFor={`rate5_${j + 1}_${i}`}>
                        <svg
                          id="Object"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1122 1122"
                        >
                          <path
                            className="cls-2"
                            d="m570.497,252.536l93.771,190c1.543,3.126,4.525,5.292,7.974,5.794l209.678,30.468c8.687,1.262,12.156,11.938,5.87,18.065l-151.724,147.895c-2.496,2.433-3.635,5.939-3.046,9.374l35.817,208.831c1.484,8.652-7.597,15.25-15.367,11.165l-187.542-98.596c-3.085-1.622-6.771-1.622-9.857,0l-187.542,98.596c-7.77,4.085-16.851-2.513-15.367-11.165l35.817-208.831c.589-3.436-.55-6.941-3.046-9.374l-151.724-147.895c-6.286-6.127-2.817-16.803,5.87-18.065l209.678-30.468c3.45-.501,6.432-2.668,7.974-5.794l93.771-190c3.885-7.872,15.11-7.872,18.995,0Z"
                          />
                          <path
                            className="cls-1"
                            d="m561,296.423l-83.563,161.857c-4.383,8.49-12.797,14.155-22.312,15.024l-181.433,16.562,191.688,8.964c12.175.569,23.317-6.81,27.543-18.243l68.077-184.164Z"
                          />
                          <path
                            className="cls-3"
                            d="m357.284,838.933l-4.121,24.03c-1.484,8.652,7.597,15.25,15.367,11.165l187.541-98.596c3.086-1.622,6.771-1.622,9.857,0l187.541,98.596c7.77,4.085,16.851-2.513,15.367-11.165l-35.817-208.831c-.589-3.435.55-6.941,3.046-9.374l151.724-147.894c6.287-6.127,2.818-16.802-5.87-18.065l-70.23-10.205c-113.59,203.853-287.527,311.181-454.405,370.34Z"
                          />
                        </svg>
                      </label>
                      <input type="radio" name={q} id={`rate4_${j + 1}_${i}`} value="4" />
                      <label htmlFor={`rate4_${j + 1}_${i}`}>
                        <svg
                          id="Object"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1122 1122"
                        >
                          <path
                            className="cls-2"
                            d="m570.497,252.536l93.771,190c1.543,3.126,4.525,5.292,7.974,5.794l209.678,30.468c8.687,1.262,12.156,11.938,5.87,18.065l-151.724,147.895c-2.496,2.433-3.635,5.939-3.046,9.374l35.817,208.831c1.484,8.652-7.597,15.25-15.367,11.165l-187.542-98.596c-3.085-1.622-6.771-1.622-9.857,0l-187.542,98.596c-7.77,4.085-16.851-2.513-15.367-11.165l35.817-208.831c.589-3.436-.55-6.941-3.046-9.374l-151.724-147.895c-6.286-6.127-2.817-16.803,5.87-18.065l209.678-30.468c3.45-.501,6.432-2.668,7.974-5.794l93.771-190c3.885-7.872,15.11-7.872,18.995,0Z"
                          />
                          <path
                            className="cls-1"
                            d="m561,296.423l-83.563,161.857c-4.383,8.49-12.797,14.155-22.312,15.024l-181.433,16.562,191.688,8.964c12.175.569,23.317-6.81,27.543-18.243l68.077-184.164Z"
                          />
                          <path
                            className="cls-3"
                            d="m357.284,838.933l-4.121,24.03c-1.484,8.652,7.597,15.25,15.367,11.165l187.541-98.596c3.086-1.622,6.771-1.622,9.857,0l187.541,98.596c7.77,4.085,16.851-2.513,15.367-11.165l-35.817-208.831c-.589-3.435.55-6.941,3.046-9.374l151.724-147.894c6.287-6.127,2.818-16.802-5.87-18.065l-70.23-10.205c-113.59,203.853-287.527,311.181-454.405,370.34Z"
                          />
                        </svg>
                      </label>
                      <input type="radio" name={q} id={`rate3_${j + 1}_${i}`} value="3" />
                      <label htmlFor={`rate3_${j + 1}_${i}`}>
                        <svg
                          id="Object"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1122 1122"
                        >
                          <path
                            className="cls-2"
                            d="m570.497,252.536l93.771,190c1.543,3.126,4.525,5.292,7.974,5.794l209.678,30.468c8.687,1.262,12.156,11.938,5.87,18.065l-151.724,147.895c-2.496,2.433-3.635,5.939-3.046,9.374l35.817,208.831c1.484,8.652-7.597,15.25-15.367,11.165l-187.542-98.596c-3.085-1.622-6.771-1.622-9.857,0l-187.542,98.596c-7.77,4.085-16.851-2.513-15.367-11.165l35.817-208.831c.589-3.436-.55-6.941-3.046-9.374l-151.724-147.895c-6.286-6.127-2.817-16.803,5.87-18.065l209.678-30.468c3.45-.501,6.432-2.668,7.974-5.794l93.771-190c3.885-7.872,15.11-7.872,18.995,0Z"
                          />
                          <path
                            className="cls-1"
                            d="m561,296.423l-83.563,161.857c-4.383,8.49-12.797,14.155-22.312,15.024l-181.433,16.562,191.688,8.964c12.175.569,23.317-6.81,27.543-18.243l68.077-184.164Z"
                          />
                          <path
                            className="cls-3"
                            d="m357.284,838.933l-4.121,24.03c-1.484,8.652,7.597,15.25,15.367,11.165l187.541-98.596c3.086-1.622,6.771-1.622,9.857,0l187.541,98.596c7.77,4.085,16.851-2.513,15.367-11.165l-35.817-208.831c-.589-3.435.55-6.941,3.046-9.374l151.724-147.894c6.287-6.127,2.818-16.802-5.87-18.065l-70.23-10.205c-113.59,203.853-287.527,311.181-454.405,370.34Z"
                          />
                        </svg>
                      </label>
                      <input type="radio" name={q} id={`rate2_${j + 1}_${i}`} value="2" />
                      <label htmlFor={`rate2_${j + 1}_${i}`}>
                        <svg
                          id="Object"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1122 1122"
                        >
                          <path
                            className="cls-2"
                            d="m570.497,252.536l93.771,190c1.543,3.126,4.525,5.292,7.974,5.794l209.678,30.468c8.687,1.262,12.156,11.938,5.87,18.065l-151.724,147.895c-2.496,2.433-3.635,5.939-3.046,9.374l35.817,208.831c1.484,8.652-7.597,15.25-15.367,11.165l-187.542-98.596c-3.085-1.622-6.771-1.622-9.857,0l-187.542,98.596c-7.77,4.085-16.851-2.513-15.367-11.165l35.817-208.831c.589-3.436-.55-6.941-3.046-9.374l-151.724-147.895c-6.286-6.127-2.817-16.803,5.87-18.065l209.678-30.468c3.45-.501,6.432-2.668,7.974-5.794l93.771-190c3.885-7.872,15.11-7.872,18.995,0Z"
                          />
                          <path
                            className="cls-1"
                            d="m561,296.423l-83.563,161.857c-4.383,8.49-12.797,14.155-22.312,15.024l-181.433,16.562,191.688,8.964c12.175.569,23.317-6.81,27.543-18.243l68.077-184.164Z"
                          />
                          <path
                            className="cls-3"
                            d="m357.284,838.933l-4.121,24.03c-1.484,8.652,7.597,15.25,15.367,11.165l187.541-98.596c3.086-1.622,6.771-1.622,9.857,0l187.541,98.596c7.77,4.085,16.851-2.513,15.367-11.165l-35.817-208.831c-.589-3.435.55-6.941,3.046-9.374l151.724-147.894c6.287-6.127,2.818-16.802-5.87-18.065l-70.23-10.205c-113.59,203.853-287.527,311.181-454.405,370.34Z"
                          />
                        </svg>
                      </label>
                      <input type="radio" name={q} id={`rate1_${j + 1}_${i}`} value="1" />
                      <label htmlFor={`rate1_${j + 1}_${i}`}>
                        <svg
                          id="Object"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1122 1122"
                        >
                          <path
                            className="cls-2"
                            d="m570.497,252.536l93.771,190c1.543,3.126,4.525,5.292,7.974,5.794l209.678,30.468c8.687,1.262,12.156,11.938,5.87,18.065l-151.724,147.895c-2.496,2.433-3.635,5.939-3.046,9.374l35.817,208.831c1.484,8.652-7.597,15.25-15.367,11.165l-187.542-98.596c-3.085-1.622-6.771-1.622-9.857,0l-187.542,98.596c-7.77,4.085-16.851-2.513-15.367-11.165l35.817-208.831c.589-3.436-.55-6.941-3.046-9.374l-151.724-147.895c-6.286-6.127-2.817-16.803,5.87-18.065l209.678-30.468c3.45-.501,6.432-2.668,7.974-5.794l93.771-190c3.885-7.872,15.11-7.872,18.995,0Z"
                          />
                          <path
                            className="cls-1"
                            d="m561,296.423l-83.563,161.857c-4.383,8.49-12.797,14.155-22.312,15.024l-181.433,16.562,191.688,8.964c12.175.569,23.317-6.81,27.543-18.243l68.077-184.164Z"
                          />
                          <path
                            className="cls-3"
                            d="m357.284,838.933l-4.121,24.03c-1.484,8.652,7.597,15.25,15.367,11.165l187.541-98.596c3.086-1.622,6.771-1.622,9.857,0l187.541,98.596c7.77,4.085,16.851-2.513,15.367-11.165l-35.817-208.831c-.589-3.435.55-6.941,3.046-9.374l151.724-147.894c6.287-6.127,2.818-16.802-5.87-18.065l-70.23-10.205c-113.59,203.853-287.527,311.181-454.405,370.34Z"
                          />
                        </svg>
                      </label>
                    </fieldset>
                  </section>
                  
                })} 
                <section>
              <label htmlFor={`${i}`}>
                <h4> {f} </h4>
                <textarea
                  name={f + i}
                  id={i}
                ></textarea>
              </label>
            </section>
            <hr/>
            </div>
            })}
            
            <input
              className="rating-form-submit"
              type="submit"
              value={lan === "tr" ? "Gönder" : lan === "en" ? "Send" : "Gönder"}
              id="send_1"
            />
          </form>
        </div>
      );
    };


export default SatisfactionSurvey