import Heading from "../main-page/main-page-components/components/Heading";
import ShadowWrapper from "../main-page/main-page-components/components/ShadowWrapper";
import classes from "./OurPolicies.module.css";
import hero from "../../assets/Pictures/hotel/enterance_3.jpg";
import Button from "../../components/subComponents/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const OurPolicies = ({ lan }) => {
  const navigate = useNavigate();

  useEffect(() => window.scrollTo(0, 0));
  if (lan === "tr") {
    return (
      <>
        <section className={classes.turbine}>
          <ShadowWrapper img={hero}>
            <div className={classes.headingBackground}>
              <h3> POLITIKALARIMIZ </h3>
            </div>
          </ShadowWrapper>
        </section>
        <section className={classes.container}>
          {" "}
          <div className={classes.main}>
            <h4> Kuruluş Politikamız </h4>
            <h5> VİZYONUMUZ </h5>
            <p>
              {" "}
              Mq Hotel Suites olarak, Kuruluşumuz ve çalışanlarımız için
              öncelikli hedefimiz hizmet kalitemizi artırmak ve koşulsuz misafir
              memnuniyetini sağlamaktır. Mükemmellik ve kalite var olma
              amacımızdır. Kalite bir seçim değil işimizin bir gereğidir ve
              işletmemizin kurulduğu ilk günden itibaren bu amaca ulaşmak için
              tüm Mq Hotel Suites çalışanları üstün bir çaba sarf etmektedir.
              Ayrıca Kuruluşumuz doğal çevrenin korunmasını, gelecek nesillerden
              ödünç aldığımız çevre ile ilgili olarak aşağıdaki ilkeleri hayata
              geçirmeyi taahhüt etmektedir.{" "}
            </p>
            <h5> MİSYONUMUZ </h5>
            <p>
              {" "}
              Misafir ihtiyaç ve beklentilerini en iyi şekilde algılayarak arzu
              edilen hizmeti yerine getirmede kararlı davranmak, Verilen
              hizmetler sırasında, tasarım, malzeme ve hizmet kalitesi
              bakımından en yüksek kalite seviyesine ulaşarak sektörün aranan
              isimleri arasında bulunmak, Tecrübelerimizi ilkelerimiz ve
              gelişime açık yeteneklerimizle birleştirerek faaliyet alanımızdaki
              kalite anlayışını yukarı çekmek, Kuruluş içi eğitimlerde Kalite
              Yönetim Sistemi, Çevre Yönetim Sistemi ve Misafir Memnuniyeti
              unsurlarını ön plana çıkarmak suretiyle, bireysel gelişmeyi çağdaş
              gereksinimlere uygun hale getirmek, Yasal şartlara, kanunlara,
              ilgili yönetmelik ve mevzuatlara uymak, Çevre dostu teknoloji
              girdileriyle doğal kaynakları etkin şekilde kullanmak ve kaynak
              tasarrufu ve yeniden kazanım hususlarına gereken özeni göstermek,
              Verdiğimiz hizmetin her safhasında çevre etkilerini en aza
              indirecek şekilde gerçekleştirilmesini sağlamak, Kamu, özel sektör
              kuruluşları ve sivil toplum örgütleri ile edinilen çevre
              tecrübelerini karşılıklı olarak paylaşmak; Doğal dengenin ve
              küresel kaynakların korunması amacıyla, kirlenmenin önemsenmesini
              ve gerekli tedbirlerin alınması sağlanmak, Misafirlerinin talep ve
              memnuniyetsizliklerini kolayca iletebilmesini sağlamak, Misafir
              talep ve memnuniyetsizliklerini objektif, adil, dikkatli ve
              gizlice ele alınmasını sağlamak, Aynı memnuniyetsizliklerin tekrar
              oluşmaması için gerekli iyileştirmelerin ve kontrollerin
              sürekliliğini sağlamak, Misafirler ile olan ilişkilerde şeffaflığı
              esas almış, bütün misafir memnuniyetsizliklerinin çözülmesini ana
              ilke olarak kabul etmiş, müşteri odaklı bir yaklaşımı takip etmek,
              Sürekli iyileştirmeyi ve şartlara uygunluğu sağlayarak Kalite,
              Çevre ve Misafir memnuniyeti hedeflerine ulaşmak,{" "}
            </p>
            <hr />
            <h4>Kalite Politikamız</h4>
            <p>
              Mq Hotel Suites olarak öncelikli hedefimiz hizmet kalitemizi
              sürekli artırmak ve koşulsuz misafir memnuniyetini sağlamaktır.
              Kalite bir seçim değil işimizin bir gereğidir ve kuruluşumuzdan
              itibaren bu amaca ulaşmak üstün bir çaba sarf edilmektedir. Turizm
              sektöründe, güvenilir, tercih edilen ve yükselen bir marka olarak
              yeni iş ortaklarını Mq Hotel Suites altında buluşmaya davet
              ediyoruz.
            </p>
            <hr />
            <h4>EĞİTİM POLİTİKAMIZ</h4>
            <p>
              Kuruluş içi eğitimlerde tecrübelerimizi ilkelerimiz ve gelişime
              açık yeteneklerimizle birleştirerek faaliyet alanımızdaki kalite
              anlayışımızı, Kalite Yönetim Sistemi, Çevre Yönetim Sistemi ve
              misafir memnuniyeti unsurlarını ön plana çıkarmak suretiyle,
              bireysel gelişmeyi çağdaş gereksinimlere uygun hale getirmek amacı
              ile her birim müdürü tarafından çalışanlarına senede dört(4) defa
              olmak üzere hizmetiçi eğitimler planlanmaktadır. Bu eğitimlerin
              konuları bölümün gereksinimlerine göre belirlenerek sürekli
              gelişim hedeflenmektedir. Ayrıca ihtiyaca göre de personele
              dışarıdan eğitimler verdirilerek kazanımlar artırılarak kalite
              standartlarımız ve kuruluş politikamızdaki gereksinimler
              karşılanmaktadır.
            </p>
            <hr />
            <h4>KALİTE VE STANDARTLARIMIZ</h4>
            <p>
              Mq Hotel Suites olarak, Kuruluşumuz ve çalışanlarımız için
              öncelikli hedefimiz hizmet kalitemizi artırmak ve koşulsuz misafir
              memnuniyetini sağlamaktır. Mükemmellik ve kalite var olma
              amacımızdır. Kalite bir seçim değil işimizin bir gereğidir ve
              işletmemizin kurulduğu ilk günden itibaren bu amaca ulaşmak için
              tüm Mq Hotel Suites çalışanları üstün bir çaba sarf etmektedir.
              Çevre dostu teknoloji girdileriyle doğal kaynakları etkin şekilde
              kullanarak, kaynak tasarrufu ve yeniden kazanım hususlarına
              gereken özeni göstererek verdiğimiz hizmetin her safhasında çevre
              etkilerini en aza indirecek şekilde gerçekleştirilmesi
              sağlanmaktadır.
            </p>
            <hr />
            <h4>İNSAN KAYNAKLARI</h4>
            <p>
              Otelimiz bünyesinde açılan pozisyonlar için ilk olarak CV
              veritabanımız incelenmektedir. Bu doğrultuda lütfen CV’nizi
              aşağıdaki adresimize gönderiniz.
            </p>
            <Button
              text={"KARİYER"}
              position={"relative"}
              color="#fff"
              backgroundImage="linear-gradient(180deg, #7B0000,#AF0000,#7B0000)"
              width={"120px"}
              height={"40px"}
              fontSize="16px"
              top="50px"
              left="calc(50% - 60px)"
              action={() => navigate(`/tr/kariyer`)}
            />
          </div>
        </section>
      </>
    );
  } else if (lan === "en") {
    return (
      <>
        <section className={classes.turbine}>
          <ShadowWrapper img={hero}>
            <div className={classes.headingBackground}>
              <h3> OUR POLICIES </h3>
            </div>
          </ShadowWrapper>
        </section>
        <section className={classes.container}>
          {" "}
          <div className={classes.main}>
            <h4> Our Founding Principles </h4>
            <h5> Our Vision </h5>
            <p>
              {" "}
              As MQ Hotel Suites, our primary goal for our organization and our
              employees is to increase our service quality and ensure
              unconditional guest satisfaction. Excellence and quality is our
              purpose of existence. Quality is not a choice, it is a requirement
              of our business, and all MQ Hotel Suites employees have made a
              great effort to achieve this goal since the first day. In
              addition, our organization undertakes to protect the natural
              environment and to implement the following principles regarding
              the environment we borrow from future generations.{" "}
            </p>
            <h5> Our Mission </h5>
            <p>
              {" "}
              Perceiving the needs and expectations of our guests in the best
              way possible , to act decisively in fulfilling the desired
              service, To be among the sought-after names of the sector by
              reaching the highest quality level in terms of design, material
              and service quality, To raise the understanding of quality in our
              field of activity by combining our experience with our principles
              and talents open to development, Bringing forth the elements of
              Quality Management System, Environmental Management System and
              Guest Satisfaction in in-house training, making individual
              development suitable for contemporary needs, To comply with legal
              requirements, laws, relevant regulations and legislations, To use
              natural resources effectively with environmentally friendly
              technologies and to pay attention to resource saving and
              recycling, To ensure that the service we provide is carried out in
              a way that minimizes environmental impacts at every stage, To
              mutually share environmental experiences with public, private
              sector organizations and non-governmental organizations; Ensuring
              that pollution is given importance and necessary precautions are
              taken in order to protect the natural balance and global
              resources, To ensure that guests can easily convey their demands
              and dissatisfaction, pay attention to their requests and
              dissatisfaction, ensuring that they are handled fairly, carefully
              and confidentially, To ensure the continuity of the necessary
              regulations and controls so that the same dissatisfaction is not
              repeated, To follow a customer-oriented approach, based on
              transparency in the narrative with the guests, accepting all guest
              dissatisfaction as the main principle, To ensure Quality and Guest
              satisfaction by fulfilling the continuous quality control.{" "}
            </p>
            <hr />
            <h4> Our Quality Policies </h4>
            <p>
              As MQ Hotel Suites, our primary goal is to constantly improve our
              service quality and ensure unconditional guest satisfaction.
              Quality is not a choice but a requirement of our business, and a
              superior effort has been made to achieve this goal since our
              establishment. As a reliable, preferred and rising brand in the
              tourism sector, we invite new business partners to join under MQ
              Hotel Suites.
            </p>
            <hr />
            <h4>Our Training Policies</h4>
            <p>
              By combining our experiences with our principles and skills open
              to development in in-house training, by highlighting our
              understanding of quality in our field of activity, Quality
              Management System, Environmental Management System and guest
              satisfaction elements, each unit manager provides four (4)
              training sessions per year to his employees in order to make
              individual development compatible with contemporary needs.
              In-service trainings are planned once in a while. The subjects of
              these trainings are determined according to the needs of the
              department and aimed at continuous development. In addition, our
              quality standards and the requirements in our establishment policy
              are met by increasing the gains by providing external training to
              the personnel according to the need.
            </p>
            <hr />
            <h4>Our Quality And Standards</h4>
            <p>
              As MQ Hotel Suites, our primary goal for our organization and
              employees is to increase our service quality and ensure
              unconditional guest satisfaction. Excellence and quality are our
              purpose of existence. Quality is not a choice but a necessity of
              our business, and all MQ Hotel Suites employees have been making a
              superior effort to achieve this goal since the first day our
              business was established. By using natural resources effectively
              with environmentally friendly technology inputs and paying due
              attention to resource saving and recycling, we ensure that the
              service we provide is carried out in a way that minimizes
              environmental impacts at every stage.
            </p>
            <hr />
            <h4>Human Resources</h4>
            <p>
              For the available positions at our hotel, We examine your CV
              first. please send your CV to the address below.
            </p>

            <Button
              text={"CAREER"}
              position={"relative"}
              color="#fff"
              backgroundImage="linear-gradient(180deg, #7B0000,#AF0000,#7B0000)"
              width={"120px"}
              height={"40px"}
              fontSize="16px"
              top="50px"
              left="calc(50% - 60px)"
              action={() => navigate(`/en/en/career`)}
            />
          </div>
        </section>
      </>
    );
  }
};

export default OurPolicies;
