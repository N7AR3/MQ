import ShadowWrapper from "../main-page/main-page-components/components/ShadowWrapper";
import turbine1 from "../../assets/Pictures/turbine/turbine1.png";
import column from "../../assets/Pictures/turbine/column.png";
import Heading from "../main-page/main-page-components/components/Heading";
import classes from "./SustainableTurismReport.module.css";
import hero from "../../assets/Pictures/turbine/valley.jpg";
import picture2 from "../../assets/Pictures/sustainable-turism/Picture2.png";
import picture3 from "../../assets/Pictures/sustainable-turism/Picture3.jpg";
import picture4 from "../../assets/Pictures/sustainable-turism/Picture4.jpg";
import picture5 from "../../assets/Pictures/sustainable-turism/Picture5.jpg";
import picture6 from "../../assets/Pictures/sustainable-turism/Picture6.png";
import picture7 from "../../assets/Pictures/sustainable-turism/Picture7.jpg";

import "./SustainableTurismReport.css";
import { useEffect, useState } from "react";

const SustainableTurismReport = ({ lan }) => {
  const [scrollTo, setScrollTo] = useState("");

  useEffect(() => {
    document.getElementById(scrollTo)?.scrollIntoView({
      behavior: "smooth",
    });
    setScrollTo("");
  });
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <section className={classes.turbine}>
        <div className={classes.imgContainer}>
          <img src={column} alt="" />
        </div>
        <div className={classes.imgContainer}>
          <img
            className="turbine"
            src={turbine1}
            alt="turbine"
            loading="lazy"
          />
        </div>
        <div className={classes.imgContainer2}>
          <img src={column} alt="" />
        </div>
        <div className={classes.imgContainer2}>
          <img
            className="turbine"
            src={turbine1}
            alt="turbine"
            loading="lazy"
          />
        </div>
        <div className={classes.imgContainer3}>
          <img src={column} alt="" />
        </div>
        <div className={classes.imgContainer3}>
          <img
            className="turbine"
            src={turbine1}
            alt="turbine"
            loading="lazy"
          />
        </div>
        <ShadowWrapper img={hero}>
          <Heading
            marginTop="100px"
            text={
              lan === "tr"
                ? "SÜRDÜRÜLEBİLİRLİK RAPORLAMASI"
                : lan === "en"
                ? "SUSTAINABILITY REPORT"
                : "SÜRDÜRÜLEBİLİRLİK RAPORLAMASI"
            }
          />
        </ShadowWrapper>
      </section>
      {lan === "tr" && (
        <section className={classes.container}>
          <div className={classes.main}>
            <div>
              <h4>İçerik</h4>
              <ol className="icerik">
                <li onClick={() => setScrollTo("1")}>Rapor Hakkında</li>
                <li onClick={() => setScrollTo("2")}>
                  Tesis Tanıtımı ve Tesis Özellikleri
                </li>
                <li onClick={() => setScrollTo("3")}>
                  Sürdürülebilirlik Ekibi
                </li>
                <li onClick={() => setScrollTo("4")}>
                  Çevre Etkilerinin Azaltılması
                </li>
                <li onClick={() => setScrollTo("5")}>
                  Personel ve Çalışma Hayatı
                </li>
                <li onClick={() => setScrollTo("6")}>
                  Yapılan Sosyal Çalışmalar
                </li>
                <li onClick={() => setScrollTo("7")}>Kültürel Çalışmalar</li>
              </ol>
              <p id="1"></p>
              <hr />

              <h5>1. Rapor Hakkında </h5>
              <p>
                2022 yılı itibariyle sürdürülebilirlik çalışmalarımıza başladık.
                Bu doğrultuda gerçekleştirdiğimiz gelişmeyi; yönetimimiz,
                çalışanlarımız, konuklarımız, tedarikçilerimiz ve diğer tüm
                partnerlerimiz ile paylaşmayı ve böylece bu noktada
                yaratacağımız farkındalığı artırarak, ortak hedef ve başarılara
                dönüştürebilmeyi amaçlamaktayız.
              </p>
              <p>
                Bu hazırlanan sürdürülebilirlik raporu 2022-2024 yıl
                aralığındaki verileri içermektedir.
              </p>
              <p>
                {" "}
                <b> MQ Hotel Suites </b> olarak ilk amacımız; doğa ile iç içe,
                huzur dolu bir dinlenme imkanı misafirlerimize sunmak!{" "}
              </p>
              <p>
                Bu mottomuz ile başlayan çalışmalarımız doğrultusunda bünyemiz
                içerisinde yer alan tüm sistem ve yapılarımızı geri dönüşüm,
                çevreye duyarlı, doğal kaynakları koruyarak ve öncelikle ihtiyaç
                kadar kullanarak akdi kullanım ile zarar verecek (Katı ve Sıvı
                atık, harfiyat, ozon emilimi gibi..) yarınlarımıza doğru bir
                gelecek bırakmak ve çevreci bir yapı sistemi inşaat etmek
                üzerine kurulmuştur.
              </p>
              <p>
                Tüm faaliyetlerimiz gerek çalışanlarımız gerekse yerel halkın
                daha sağlıklı ve temiz bir çevrede yaşaması stratejimizin
                temelini oluşturmaktadır.
              </p>
              <h5> Sürdürülebilirlik kapsamında otelimizin sorumlulukları: </h5>
              <ul>
                <li>
                  {" "}
                  Geri dönüşüm ve yeniden kullanım fırsatlarını yaratmak ve
                  değerlendirmek,{" "}
                </li>
                <li>
                  Enerji verimliliğini sürekli iyileştirmek ve karbon
                  salınımından dolayı oluşan olumsuz etkiyi minimize etmek,{" "}
                </li>
                <li>
                  {" "}
                  Su yönetiminin sağlanması,Kültürel ve sosyal mirasın
                  korunması,{" "}
                </li>
                <li>Yerel halka ekonomik ve sosyal olarak fayda sağlama,</li>
                <li>
                  Neden olunan her türlü çevresel etkiyi azaltmak temel
                  noktalarında şekillenmektedir.
                </li>
              </ul>

              <div className={classes.imgBox}>
                <img
                  className="sekil_1"
                  src={picture2}
                  alt="sekil_1"
                  loading="lazy"
                />
              </div>
              <p id="2"></p>
              <hr />
              <h5> 2. Tesis Tanıtımı ve Tesis Özellikleri </h5>
              <p>
                <b> MQ Hotel Suites </b> markamız içerisinde 25 oda kapasitesi
                ile konaklama imkanı sağlayan ve oda içerisinde ki tüm buklet
                malzemelerimiz “kimyasalsız-doğal” ve geri dönüşümlü
                malzemelerden imal edilmektedir.{" "}
              </p>

              <p>
                {" "}
                Otelimiz içerisinde bulunan restoranımız en iyi ve taze ürünler
                ile 46 masa (92 kişi.) kapasitesi ile hizmet verirken mutfak
                içerisinde ki tüm katı ve temel atıklar ilgili
                şirketler/kurumlar ile çalışılarak kısmen geri dönüşüm kısmen de
                kontrollü atıklar ile çevre dostu kalmaktadır.{" "}
              </p>
              <p>
                Bünyesi içerisinde yer alan havuz sistemi; sıfır (0) kimyasal
                sistemi ile çalışmakta ve sahil şeridimiz ve mevkimiz
                neticesinde yer alan karadeniz suyu kullanılmaktadır. Altyapı
                sistemi sayesinde hem filtre edilmekte, mevcut tuz oranı normal
                seviyelerde sınırlı tutulmuş ve rutin kontrol döngüleri ile
                takip edilmekte olan <b>DENİZ SU HAVUZU</b>’dur.
              </p>

              <h5> VİZYONUMUZ </h5>
              <p>
                {" "}
                <b> MQ Hotel Suites ailesi olarak; </b>{" "}
              </p>
              <p>
                {" "}
                Takım ruhu içinde tüm çalışanları ile birlikte üstün hizmet
                kalitesinden vazgeçmeden, ‘‘ Doğayı Tüketmek değil Koruyarak
                Kullanma '' ilkesi doğrultusunda, Çevreye Duyarlılığı ve
                Anlayışı ile konukların her zaman tercih ettiği, misafir
                memnuniyetini esas alarak aile sıcaklığı ile örnek bir tesis
                olmak. Tercih ettiğimiz ürünler ve sergilediğimiz
                yaklaşımlarımız ile sürdürülebilir turizm için çalışıyoruz.{" "}
              </p>

              <h5> MİSYONUMUZ </h5>

              <p>
                {" "}
                Yüksek seviyede misafir memnuniyeti için kaliteli hizmet
                ilkelerimizden asla vazgeçmeden, Doğal Tarihi ve Kültürel
                Değerleri Koruyan, Çevreye Duyarlı ve Güler Yüzlü misafirperver
                hizmetimizle; misafirlerimiz tarafından devamlı tavsiye edilen
                ve sürekli tercih edilen, " Blue Bay Platinum Otel
                Misafirperverliği " ile anılarınıza ev sahipliği yapmaktır.
                Değerler;{" "}
              </p>

              <ul>
                <li>İnsan</li>
                <li>Doğa</li>
                <li>Misafirperverlik</li>
                <li>Adanmışlık</li>
              </ul>

              <div className={classes.imgBox}>
                <img src={picture3} alt="" loading="lazy" />
              </div>
              <hr />
              <p>
                {" "}
                <b> MQ Hotel Suites </b> olarak; sürdürülebilir turizm
                yaklaşımında Birleşmiş Milletler Dünya Turizm Organizasyonun
                amaçlarını ve bu kapsamda 12 temel ilkeyi model aldık.{" "}
              </p>
              <ul>
                <li>Ekonomik Süreklilik</li>
                <li>Yerel Refah</li>
                <li>İstihdam Kalitesi</li>
                <li>Sosyal Eşitlik</li>
                <li>Ziyaretçi Memnuniyeti</li>
                <li>Yerel Kontrol</li>
                <li>Toplumsal Refah</li>
                <li>Kültürel Zenginlik</li>
                <li>Fiziksel Bütünlük</li>
                <li>Biyolojik Çeşitlilik</li>
                <li>Kaynak Verimliliği</li>
                <li>Çevresel Saflık</li>
              </ul>

              <p>
                {" "}
                <b> Bu kapsamda; </b>{" "}
              </p>
              <ul>
                <li>
                  Çevresel Sürdürülebilirlik Politikası çerçevesinde hareket
                  ediyoruz,{" "}
                </li>
                <li>Yerel/bölgesel kalkınma ve istihdamı destekliyoruz, </li>
                <li>
                  İstihdam, ilerleme, ödüllendirme sürecinde ayrım yapılmaksızın
                  yönetim pozisyonları dahil olmak üzere performans analizi
                  yaparak tüm çalışanlarımıza eşit fırsatlar sunuyoruz.
                </li>
                <li>
                  Çalışanlarımızın çalışma haklarına saygı duyuyor, yasal
                  mevzuat hükümleri çerçevesinde takip ediyoruz.{" "}
                </li>
                <li>Çocuk işçiliğin kaldırılmasını destekliyoruz.</li>
                <li>
                  Çalışanlarımıza düzenli eğitimler vererek gelişim ve ilerleme
                  fırsatı sunuyoruz.{" "}
                </li>
                <li>
                  Çalışanlarımıza sağlıklı, güvenli çalışma ortamı sunuyor,
                  istek, öneri ve şikayetlerini iletebilecekleri çeşitli
                  imkanlar sunuyoruz. Çalışanlarımızdan gelen geri bildirimleri
                  değerlendirerek yönetim sistemlerimizin gelişimine katkı
                  sağlıyoruz.
                </li>
                <li>
                  Sıfır kaza ilkesiyle çalışarak, iş sağlığı ve güvenliğini
                  kurumsal kültür haline getirmek istiyoruz.{" "}
                </li>
                <li>
                  Politikamızı işletirken ilgili taraflarımızın katılımına önem
                  veriyor, gerektiğinde şeffaf bilgi sunuyoruz.
                </li>
                <li>
                  Yerel/Bölgenin doğal ve kültürel mirasının ilgili
                  misafirlerimizi ve çalışanlarımızı bilgilendiriyoruz,
                </li>
              </ul>
              <hr />
              <p id="3"></p>
              <h5> 3. Sürdürülebilirlik Ekibi </h5>

              <div className={classes.imgBox}>
                <img src={picture4} alt="" loading="lazy" />
              </div>

              <p>
                {" "}
                Misafirlerimizin tüm geri bildirimlerini değerlendiriyoruz. Elde
                ettiğimiz veriler doğrultusunda süreçlerimizi iyileştiriyoruz,{" "}
              </p>
              <ul>
                <li>
                  Yatırımlarımızı planlarken; binalarımızın ve alt yapı
                  sistemlerimizin; korunan hassas alanlara, tarihi mirasa, doğal
                  ve kültürel çevrenin bütünlüğüne olan risklerini dikkate
                  alıyoruz. Arazi kullanımı, inşaat, bakım onarım işlemleri,
                  tasarım, peyzaj düzenlemesiyle ilgili çalışmalarımızda
                  yerel/bölgeye uygun, sürdürülebilir uygulamalar ve materyaller
                  tercih ediyoruz.{" "}
                </li>
                <li>
                  Binalarımızı ve konseptimizi tasarlarken, özel ihtiyacı olan
                  misafir ve çalışanlarımızın ihtiyaçlarını düşünüyor, herkes
                  için erişilebilir hizmet anlayışını benimsiyoruz.
                </li>
                <li>
                  Tarihi, arkeolojik, kültürel ve manevi öneme sahip
                  yerel/bölgesel mülklerin, alanların ve geleneklerin
                  korunmasına ve gelişmesine katkı sağlıyoruz.
                </li>
                <li>
                  • Ürün/hizmet alımlarında niteliği ve kalitesini
                  kullanıcılarla değerlendiriyor ve analiz ediyoruz. Tedarikçi
                  seçiminde adil, dürüst ve tarafsız davranıyoruz.{" "}
                </li>
                <li>
                  İnsan haklarına saygı duyuyor; dil, din, ırk, cinsiyet vb. her
                  türlü ayrımcılığı reddediyoruz. Özel korumalı gruplar ve diğer
                  savunmasız gruplara yönelik, ticari, cinsel veya başka
                  herhangi bir istismar veya tacize karşıyız. Aile içi şiddet ve
                  çocuk istismarına karşı alınacak tedbirleri destekliyoruz.
                </li>
                <li>
                  Tüm süreçlerimizi temel değerlerimize bağlı kalarak, uymakla
                  yükümlü olduğumuz yasal ve diğer şartlara uyum anlayışı ile
                  sürekli geliştiriyoruz.
                </li>
                <li>
                  Bilgi güvenliği ile ilgili mevzuata uygun hareket ediyor,
                  süreçlerimizi geliştiriyoruz.
                </li>
                <li>
                  {" "}
                  Sektöre yön veren inovasyon çalışmaları ile teknolojik
                  sistemlere yatırım yapıyoruz.
                </li>
                <li>
                  Faaliyetlerimizi, kendi iç dış hususlarımız, ilgili
                  taraflarımızın ihtiyaç ve beklentilerini ele alarak potansiyel
                  riskleri önceden analiz ediyor, sürekli iyileştirme hedefi
                  doğrultusunda geliştiriyoruz. Risk Yönetimi Sürecini tüm iş
                  süreçlerimizde ele alıyor, yeni fırsatlar elde etmeyi
                  amaçlıyoruz.
                </li>
                <li>
                  Sürdürülebilir kalkınma doğrultusunda, Turizm sektöründe öncü,
                  uzun vadeli değer yaratmayı hedefliyoruz.
                </li>
              </ul>
              <hr />
              <p id="4"></p>
              <h5> 4. Çevre Etkilerinin Azaltılması </h5>
              <p>
                {" "}
                MQ Hotel Suites çevreye verdiği etkilerin ve bu olguların
                sonuçlarının tam anlamıyla farkındadır.{" "}
              </p>
              <ul>
                <li>
                  {" "}
                  Çevre mevzuatı gerekliliklerine uyarak çevremizi koruma
                  konusunda bilinçli olmak,{" "}
                </li>
                <li>
                  {" "}
                  Çevreye en az zarar veren teknolojiyi araştırarak uygulamak,
                </li>
                <li>
                  {" "}
                  Çevre konusunda sürekli iyileştirme ilkesini benimseyerek
                  elektrik,su,yakıt ve diğer birimlerde enerji tasarrufu yapmak.
                </li>
                <li>
                  {" "}
                  Atık, enerji ve su yönetimi ile çevreye verdiği zararları en
                  aza indirgemek üzere üzerine düşen tüm sorumlulukları
                  tanımlar, kabul eder, paylaşır ve çözüm üretir.{" "}
                </li>
                <li>
                  {" "}
                  Sürdürülebilir bir çevresel hayat için tüm çalışmalarını
                  geliştirerek devam ettirmekte kesin kararlıdır.{" "}
                </li>
                <li>
                  {" "}
                  Kirliliği ve atıkları en aza indirir ve tehlikeli
                  atıklarımızın çevresel etkisi en aza indirgenmiş olarak
                  bertaraf edilmesini sağlar. Bu doğrultuda amaç ve hedefleri
                  belirler, her yıl gözden geçirir, ilerlemelerini kayıt altına
                  almak,{" "}
                </li>
                <li>
                  {" "}
                  Atıkları doğru şekilde, özelliklerine göre ayrı alanlarda
                  depolar, yasal depolama süre sınırlarını aşmadan
                  lisanslı/yetkili firmalara teslim ederek, kayıtları muhafaza
                  altına almak,{" "}
                </li>
                <li>
                  {" "}
                  İklim değişikliğinin azaltılması ile Biyoçeşitlilik ve
                  ekosistemlerin korunması için ihtiyaç duyulan kaynakları
                  sağlamak,
                </li>
                <li>
                  {" "}
                  Çevresel ayak izini en aza indirmek ve bu alanda stratejik
                  hedeflere ulaşmayı amaçlar.
                </li>
                <li>
                  {" "}
                  Otelimizin tasarımında çevre bilinci ile hareket etmek, İş
                  sağlığı ve güvenliği kuralları ışığında oluşabilecek riskleri
                  önceden belirleyerek önlem almak ve böylece sağlık, güvenlik,
                  çevre bütünlüğünü oluşturmak,
                </li>
                <li>
                  {" "}
                  Çalışanlarımıza çevre konusunda eğitimler vermek ve
                  duyarlılıklarını artırmayı amaçlamak,{" "}
                </li>
                <li>
                  {" "}
                  İlke ve hedeflerimiz, yerel kuruluş ve topluluklar ile
                  paylaşıma ve her tür öneriye açıktır.
                </li>
              </ul>

              <div className={classes.imgBox}>
                <img src={picture5} alt="" loading="lazy" />
              </div>
              <hr />
              <p id="5"></p>
              <h5> 5. Personel ve Çalışma Hayatı </h5>
              <p>
                {" "}
                <b> Lojman Kullanımı </b>{" "}
              </p>
              <p>
                {" "}
                Personel lojmanı MQ Hotel Suites’te çalışan , Karaburun’da
                ikameti bulunmayan personelin kullanımına açıktır.{" "}
              </p>
              <p>
                {" "}
                <b> Sağlık Hizmetleri </b>{" "}
              </p>
              <p>
                {" "}
                Otelimizde ki tüm departman yöneticileri öncelikli ilk yardım
                eğitimi verilmektedir. Tüm çalışanlarımızın departmanlarında ve
                ilgili çalışma alanlarında ilk yardım kitleri ve dolapları
                bulunmaktadır. İç ürünleri eksiksiz temin edilerek sürekli temin
                edilmektedir. Bununla beraber tüm çalışanlarımızın sağlık
                hizmeti alma ihtiyaçlarında en yakında bulunan özel hastaneye
                otelin kendi aracı ile görülmekte, tedavisi yapılmakta ve uygun
                bulunan ilaçları temin edilerek tekrar otele veya evine
                bırakılmakta ve süreci hassasiyetle takip edilmektedir. Bu
                olanakların tamamı ücretsizdir, otelimiz tarafından
                karşılanmaktadır.{" "}
              </p>
              <p>
                {" "}
                <b> Çamaşırhane Kullanımı </b>{" "}
              </p>
              <p>
                {" "}
                Tüm çalışanlarımızın iş üniformaları ve şahsi eşyaları ücretsiz
                olarak otel çamaşırhanesinde yıkanmaktadır.{" "}
              </p>
              <p>
                {" "}
                <b> Personel Yemekhanesi </b>{" "}
              </p>
              <p>
                {" "}
                Çalışanlar için personel yemekhanesinde çıkan yemekler
                ücretsizdir. 15 günlük menüler dahilinde en az dört çeşit yemek
                çıkmaktadır.{" "}
              </p>
              <p>
                {" "}
                <b> Kariyer Yönetimi </b>{" "}
              </p>
              <p>
                {" "}
                Turizm öğrencilerinin veya tecrübesiz ama meslek edinme çabası
                olan tüm çalışanlarımızın mesleki eğitimleri desteklenmektedir.
                Ayrıca çalışma tecrübesi kazanmaları adına staj imkanı
                yaratıyoruz.{" "}
              </p>
              <p>
                {" "}
                <b> Yeni Yıl Kutlaması </b>{" "}
              </p>
              <p>
                {" "}
                MQ Hotel Suites ailesi olarak en güzel dilekleri paylaşarak yeni
                yıl kutlamaları gerçekleştiririz.Doğum Günü Kutlaması Her ay
                başında, personellerimizden o ay doğanların doğum günleri için
                doğum günü kutlaması yapılmaktadır.{" "}
              </p>
              <p>
                {" "}
                <b> Personel Ödüllendirmesi </b>{" "}
              </p>
              <p>
                {" "}
                MQ Hotel Suites ailesi olarak tüm çalışanlarımızın başarıları
                destekleriz! Her ay başarılı bir personelimize gram altın ödülü
                verir ve bunu kutlarız.
              </p>
              <p>
                {" "}
                <b> Maaş İkramiyesi </b>{" "}
              </p>
              <p>
                {" "}
                Tüm değerli çalışanlarımıza her yıl bir maaş ikramiye veririz.
                Yıl süresi içerisinde markamıza kattıkları değer ve ailenin bir
                parçası olmak en önemsediğimiz başarıdır. MQ Hotel’de insana
                değer veririz!{" "}
              </p>
              <p>
                {" "}
                <b> Personel Servis ve Ulaşım </b>{" "}
              </p>
              <p>
                {" "}
                Lojman hizmetinden yararlanmayan tüm çalışanlarımız vardiya
                öncesi ve sonrasında otelimize ait VİP araç ve şoförümüz ile
                evlerine kadar “Güvenle” ve sosyal sorunlara maruz kalmadan
                ulaşımları sağlanır. Şoförlerimizin en büyük hassasiyeti
                özellikle akşam vardiyasında çalışan bayan personellerimizin ev
                kapısından içeri girene kadar araç ile kapıdan ayrılmadan
                beklemesidir.
              </p>
              <p>
                {" "}
                <b> Sosyalleşme </b>{" "}
              </p>
              <p>
                {" "}
                MQ Hotel Suites markamızın bir değeri ve ailemizin parçası olan
                çalışanlarımızın sosyal yaşantısını önemseriz. Otelimizin
                bünyesinde yer alan bahçeli yerimiz hem mola zamanları
                dinlenmeleri hem de çeşitli sosyal imkanlar yaratabilmeleri
                adına imkanlarına sunulmuştur.{" "}
              </p>
              <p>
                {" "}
                <b>
                  {" "}
                  (Personel yemekhanesine dilek, öneri ve şikâyet kutusu
                  koyulmuştur. Bu kutunun anahtarı üst yönetimde olup,
                  personelin dilek, şikâyet ve önerilerinin bu şekilde üst
                  yönetime ulaştırılması kolaylaştırılmıştır. Personel anketleri
                  düzenlenmekte olup, sonuçlara göre personellerimizin memnun
                  olmadıkları hususlar (Örneğin; personel yemekhanesi
                  yemeklerinin beğenilmemesi, bununla ilgili olarak menü
                  değişikliğine gidilmesi gibi.) düzeltilmektedir.){" "}
                </b>{" "}
              </p>
              <hr />
              <p id="6"></p>
              <h5> 6. Yapılan Sosyal Çalışmalar </h5>
              <p>
                {" "}
                Mq Hotel Suites işletmesi çevrenin, çalışanların ve içinde
                bulunduğu toplumun gelişimine katkıda bulunmayı sorumlulukları
                içinde görür.{" "}
              </p>

              <p>
                MQ Hotel Suites yöresel toplum ile pozitif ilişkiler kurarak,
                personelleri arasında yaş, cinsiyet, ırk ayrımcılığı yapmamayı,
                yöre insanını sosyal ve ekonomik olarak geliştirmeyi, yöre
                ekonomisini desteklemek adına yerel tedarikçilerle çalışmayı
                taahhüt eder.
              </p>

              <p>
                {" "}
                <b> Bu amaçla; </b>{" "}
              </p>
              <ul>
                <li>
                  {" "}
                  İşletmemiz, yerel, ulusal turizm ve sürdürülebilir çevre ile
                  ilgili sivil toplum kuruluşu üyeliklerini ve ilişkilerini
                  arttırarak sürdürmekte kararlıdır. Bölgede kültürel
                  zenginliğin ve yerel üreticilerin destekler, yerel ekonomiye
                  katkı sağlar. Yerel ürünleri tercih eder ve tesisin bulunduğu
                  bölgelerde yaşayan insanlara iş imkânı sağlar. Mevcut personel
                  ile uzun süreli çalışmayı hedefler. Bilgi, görgü ve
                  becerilerinin arttırılması ile ilgili eğitim programları
                  uygular. İşletmemizde engelli personel istihdam edilmesine
                  önem verilir.{" "}
                </li>
                <li>
                  {" "}
                  İşletmemiz, turizmin gelişmesi sonucu ortaya çıkabilecek
                  olumsuz etkileri ortadan kaldırmak için yerel yönetim ve kamu
                  kuruluşları ile sıkı bir işbirliği içindedir ve yerel halkı ve
                  öğrencileri imkanları dahilin de destekler.
                </li>
                <li>
                  Otelimizde kullanılan çoğu ürün yöremizden temin edilmekte ve
                  karbondioksit emisyonu azaltılmaktadır.{" "}
                </li>
                <li>
                  Türk geceleri düzenleyerek 7 coğrafi bölgemizin lezzetleri,
                  kültürel yapısı misafirlere tanıtılır.{" "}
                </li>
                <li>
                  Hotel, misafirlerden ulaşımda toplu taşımayı veya bisikletleri
                  kullanarak çevreye olan zararı en aza indirmede yardım
                  istemektedir.{" "}
                </li>
                <li>
                  İşletmemiz, sosyal sorumluluk projelerine katkıda
                  bulunmaktadır.
                </li>
                <li>
                  MQ Hotel Suites bulunduğu destinasyonu geliştirmektedir.
                </li>
                <li>
                  {" "}
                  Personellerimizi kendimiz yetiştiririz !. MQ Hotel Suites
                  çalışanları, genç kadrosu ve bayan personel ağırlıklı istihdam
                  edilerek çalışmaktadır. Mesleki eğitimi olmayan veya yarım
                  kalmış gençlerimizin önünde bir gelecek inşaat etmek ve
                  Turizm’e kazandırmak için “tecrübe” şartı koşmayız.{" "}
                </li>
              </ul>
              <p>
                {" "}
                Bu bağlamda çalışan işçi bay, bayan ve yaş olarak istatistik
                raporumuz aşağıdadır;{" "}
              </p>

              <div className={classes.imgBox}>
                <img src={picture6} alt="" loading="lazy" />
              </div>
              <hr />
              <p id="7"></p>
              <h5> 7. Kültürel Çalışmalar </h5>
              <p>
                {" "}
                Tüm misafirlerimize check-in prosedürleri sırasında
                bilgilendirme yapılmaktadır.{" "}
              </p>
              <p>
                {" "}
                Otelimizin konumu neticesiyle bölgesel özelliklerini ve
                imkanlarını anlatırız. Karadeniz’in önemli noktalarından ve doğa
                ile iç içe olması nedeni ile özellikle şehir içi kirliliği ve
                emisyonun en aza indiği bu bölgemizin bilgilendirmeleri ve
                karadenizin özellikleri anlatılır.{" "}
              </p>
              <p>
                {" "}
                Tamamen deniz suyu kullanımı ve sağlıklı olarak tasarlanan
                havuzumuz tamamen kimyasalsız ve bölgemizin en önemli konumsal
                farklığını anlatmak hedefimiz.{" "}
              </p>

              <div className={classes.imgBox}>
                <img src={picture7} alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </section>
      )}
      {lan === "en" && (
        <section className={classes.container}>
          <div className={classes.main}>
            <div>
              <h4>Contents</h4>
              <ol className="icerik">
                <li onClick={() => setScrollTo("1")}>About THe Report</li>
                <li onClick={() => setScrollTo("2")}>
                  Facility Introduction and Features
                </li>
                <li onClick={() => setScrollTo("3")}>Sustainability Team</li>
                <li onClick={() => setScrollTo("4")}>
                  Reducing Environmental Impacts
                </li>
                <li onClick={() => setScrollTo("5")}>
                  Personnel and Work Life
                </li>
                <li onClick={() => setScrollTo("6")}>
                  Social Studies Conducted
                </li>
                <li onClick={() => setScrollTo("7")}>Cultural Studies</li>
              </ol>
              <p id="1"></p>
              <hr />

              <h5>1. About The Report </h5>
              <p>
                As of 2022, we began our sustainability efforts. In line with
                this, we aim to share the progress we have made with our
                management, employees, guests, suppliers, and all other
                partners. By doing so, we aim to increase awareness and
                transform it into shared goals and achievements.
              </p>
              <p>
                This sustainability report covers data from the years 2022 to
                2024.
              </p>
              <p>
                {" "}
                As <b> MQ Hotel Suites </b> our primary goal is to offer our
                guests a peaceful retreat close to nature. Our efforts,
                initiated with this motto, focus on recycling, environmental
                sensitivity, conserving natural resources, and using resources
                judiciously to minimize harm, such as solid and liquid waste,
                excavation, ozone depletion, etc., thus building a
                future-oriented eco-friendly construction system.{" "}
              </p>
              <p>
                All our activities are rooted in the strategy of providing both
                our employees and the local community with a healthier and
                cleaner environment to live in.
              </p>

              <h5>
                {" "}
                Our hotel's responsibilities under sustainability include:
              </h5>
              <ul>
                <li>
                  {" "}
                  Creating and utilizing recycling and reuse opportunities,{" "}
                </li>
                <li>
                  Continuously improving energy efficiency and minimizing the
                  negative impact of carbon emissions,{" "}
                </li>
                <li>
                  {" "}
                  Ensuring water management and preserving cultural and social
                  heritage,{" "}
                </li>
                <li>
                  Providing economic and social benefits to the local community,
                </li>
                <li>
                  Shaping around reducing any environmental impact caused.
                </li>
              </ul>

              <div className={classes.imgBox}>
                <img
                  className="sekil_1"
                  src={picture2}
                  alt="sekil_1"
                  loading="lazy"
                />
              </div>
              <p id="2"></p>
              <hr />
              <h5> 2. Facility Introduction and Features </h5>
              <p>
                <b> MQ Hotel Suites </b> within our brand offers accommodation
                with a capacity of 25 rooms. All the amenities provided in the
                rooms are made from "chemical-free natural" and recyclable
                materials.{" "}
              </p>

              <p>
                {" "}
                Our restaurant, located within the hotel, serves with 46 tables
                (92 people) capacity, offering the best and freshest products.
                The solid and basic wastes within the kitchen are partially
                recycled through collaboration with relevant
                companies/institutions, and the remaining controlled wastes are
                kept environmentally friendly.{" "}
              </p>
              <p>
                The pool system within our premises operates with a zero (0)
                chemical system, and we utilize Black Sea water due to our
                location. Through our infrastructure, the water is filtered, the
                existing salt level is kept within normal levels, and it is
                monitored through routine checks. It is a<b>SEA WATER POOL</b>
              </p>

              <h5> Our Vision </h5>
              <p>
                {" "}
                <b>As MQ Hotel Suites family; </b>{" "}
              </p>
              <p>
                {" "}
                In collaboration with all our employees within a team spirit,
                our goal is to maintain superior service quality without
                compromising on "Using Nature by Preserving, Not Consuming"
                principle. With our Environmental Sensitivity and Understanding,
                we strive to be an exemplary facility where guests always prefer
                to stay, prioritizing guest satisfaction with a family-like
                warmth. We work towards sustainable tourism through our chosen
                products and exhibited approaches.{" "}
              </p>

              <h5> OUR MISSION </h5>

              <p>
                {" "}
                Without ever compromising on our quality service principles for
                high guest satisfaction, we aim to host your memories with our
                Natural, Historical, and Cultural Value Preserving,
                Environmentally Sensitive, and Friendly hospitality,
                continuously recommended and preferred by our guests, known for
                "Blue Bay Platinum Hotel Hospitality". Our values include:{" "}
              </p>

              <ul>
                <li>Humanity</li>
                <li>Nature</li>
                <li>Hospitality</li>
                <li>Dedication</li>
              </ul>

              <div className={classes.imgBox}>
                <img src={picture3} alt="" loading="lazy" />
              </div>
              <hr />
              <p>
                {" "}
                <b>As MQ Hotel Suites</b>, we have modeled our approach to
                sustainable tourism on the objectives of the United Nations
                World Tourism Organization and its 12 fundamental principles:
              </p>
              <ul>
                <li>Economic Sustainability</li>
                <li>Local Prosperity</li>
                <li>Quality Employment</li>
                <li>Social Equity</li>
                <li>Visitor Satisfaction</li>
                <li>Local Control</li>
                <li>Community Well-being</li>
                <li>Cultural Richness</li>
                <li>Physical Integrity</li>
                <li>Biological Diversity</li>
                <li>Resource Efficiency</li>
                <li>Environmental Purity</li>
              </ul>
              <p>
                {" "}
                <b> Bu In this context: </b>{" "}
              </p>
              <ul>
                <li>
                  We operate within the framework of an Environmental
                  Sustainability Policy,
                </li>
                <li>We support local/regional development and employment,</li>
                <li>
                  We provide equal opportunities to all our employees, including
                  management positions, by conducting performance analysis
                  without discrimination in employment, advancement, and reward
                  processes.
                </li>
                <li>
                  {" "}
                  We respect the rights of our employees and adhere to legal
                  regulations.{" "}
                </li>
                <li> We support the elimination of child labor. </li>
                <li>
                  {" "}
                  We provide regular training to our employees, offering
                  opportunities for development and advancement.{" "}
                </li>
                <li>
                  {" "}
                  We provide our employees with a healthy and safe working
                  environment, offering various channels for expressing their
                  desires, suggestions, and complaints. We evaluate the feedback
                  from our employees to contribute to the development of our
                  management systems.{" "}
                </li>
                <li>
                  {" "}
                  By working with a zero-accident policy, we aim to
                  institutionalize occupational health and safety as part of our
                  corporate culture.{" "}
                </li>
                <li>
                  {" "}
                  We value the participation of relevant stakeholders in
                  implementing our policies and provide transparent information
                  when necessary.{" "}
                </li>
                <li>
                  {" "}
                  We inform our guests and employees about the natural and
                  cultural heritage of the local/region.{" "}
                </li>
              </ul>
              <hr />
              <p id="3"></p>
              <h5> 3. Sustainability Team </h5>

              <div className={classes.imgBox}>
                <img src={picture4} alt="" loading="lazy" />
              </div>

              <p>
                We evaluate all feedback from our guests. Based on the data we
                gather, we improve our processes.
              </p>
              <ul>
                <li>
                  When planning our investments, we consider the risks to the
                  integrity of protected sensitive areas, historical heritage,
                  and the natural and cultural environment. In our land use,
                  construction, maintenance and repair operations, design, and
                  landscaping, we prefer sustainable practices and materials
                  suitable for the local/region.
                </li>
                <li>
                  When designing our buildings and concepts, we consider the
                  needs of guests and employees with special needs, and we adopt
                  an accessible service approach for everyone.
                </li>
                <li>
                  We contribute to the preservation and development of
                  local/regional properties, areas, and traditions that have
                  historical, archaeological, cultural, and spiritual
                  significance.
                </li>
                <li>
                  • We evaluate and analyze the quality of products/services
                  with users. We select suppliers fairly, honestly, and
                  impartially.
                </li>
                <li>
                  We respect human rights and reject all forms of discrimination
                  based on language, religion, race, gender, etc. We oppose any
                  form of commercial, sexual, or other exploitation or
                  harassment against protected and other vulnerable groups. We
                  support measures against domestic violence and child abuse.
                </li>
                <li>
                  We continuously improve our processes with an understanding of
                  compliance with the legal and other obligations to which we
                  are bound, adhering to our core values.
                </li>
                <li>
                  We act in accordance with information security regulations and
                  improve our processes.
                </li>
                <li>
                  We invest in technological systems through innovative work
                  that shapes the industry.
                </li>
                <li>
                  We analyze potential risks by addressing our internal and
                  external issues, as well as the needs and expectations of our
                  stakeholders, aiming for continuous improvement. We
                  incorporate Risk Management Processes into all our business
                  processes, aiming to seize new opportunities.
                </li>
                <li>
                  We aim to be a pioneer in the tourism sector, creating
                  long-term value in line with sustainable development.
                </li>
              </ul>
              <hr />
              <p id="4"></p>
              <h5>4. Reducing Environmental Impacts</h5>
              <p>
                MQ Hotel Suites is fully aware of the impacts it has on the
                environment and the consequences of these factors.
              </p>
              <ul>
                <li>
                  Being mindful of protecting our environment by complying with
                  environmental legislation requirements,
                </li>
                <li>
                  Implementing technologies that cause the least harm to the
                  environment,
                </li>
                <li>
                  Embracing the principle of continuous improvement in
                  environmental matters to conserve energy in electricity,
                  water, fuel, and other units,
                </li>
                <li>
                  Defining, accepting, sharing, and resolving all
                  responsibilities to minimize the harm to the environment
                  through waste, energy, and water management,
                </li>
                <li>
                  Being firmly committed to enhancing all efforts for a
                  sustainable environmental life,
                </li>
                <li>
                  Minimizing pollution and waste, ensuring that our hazardous
                  waste is disposed of with minimal environmental impact. In
                  this regard, we set goals and objectives, review them
                  annually, and record their progress,
                </li>
                <li>
                  Storing wastes properly in separate areas according to their
                  characteristics, delivering them to licensed/authorized
                  companies without exceeding the legal storage time limits, and
                  keeping records,
                </li>
                <li>
                  Providing the necessary resources to reduce climate change and
                  preserve biodiversity and ecosystems,
                </li>
                <li>
                  Aiming to minimize our environmental footprint and achieve
                  strategic objectives in this area,
                </li>
                <li>
                  Operating our hotel with environmental awareness in mind,
                  identifying and taking preventive measures against potential
                  risks in light of occupational health and safety rules to
                  ensure health, safety, and environmental integrity,
                </li>
                <li>
                  Providing environmental training to our employees and aiming
                  to increase their awareness,
                </li>
                <li>
                  Our principles and objectives are open to sharing with local
                  organizations and communities and open to all kinds of
                  suggestions.
                </li>
              </ul>
              <div className={classes.imgBox}>
                <img src={picture5} alt="" loading="lazy" />
              </div>
              <hr />
              <p id="5"></p>
              <h5>5. Personnel and Working Life</h5>
              <p>
                <b>Residence Usage</b>
              </p>
              <p>
                The staff residence is open to employees of MQ Hotel Suites who
                do not reside in Karaburun.
              </p>
              <p>
                <b>Health Services</b>
              </p>
              <p>
                All department managers at our hotel are given priority first
                aid training. First aid kits and cabinets are available in all
                departments and relevant work areas for our employees. Internal
                products are provided in full and continuously. In addition,
                when any of our employees need health services, they are taken
                to the nearest private hospital by the hotel's own vehicle,
                where they receive treatment and obtain the necessary
                medications, and then they are either taken back to the hotel or
                their home, with the process being closely monitored. All these
                facilities are provided free of charge and covered by our hotel.
              </p>
              <p>
                <b>Laundry Usage</b>
              </p>
              <p>
                All our employees' work uniforms and personal items are washed
                free of charge in the hotel laundry.
              </p>
              <p>
                <b>Staff Canteen</b>
              </p>
              <p>
                Meals served in the staff canteen are free for employees. At
                least four types of meals are served within a 15-day menu cycle.
              </p>
              <p>
                <b>Career Management</b>
              </p>
              <p>
                We support the professional training of tourism students or all
                our employees who are inexperienced but striving to acquire a
                profession. Additionally, we provide internship opportunities
                for them to gain work experience.
              </p>
              <p>
                <b>New Year Celebration</b>
              </p>
              <p>
                As the MQ Hotel Suites family, we celebrate the New Year by
                sharing the best wishes. Birthday Celebration: At the beginning
                of each month, birthday celebrations are held for employees born
                that month.
              </p>
              <p>
                <b>Employee Reward System</b>
              </p>
              <p>
                As the MQ Hotel Suites family, we support the achievements of
                all our employees! Every month, we award a gram of gold to a
                successful employee and celebrate their success.
              </p>
              <p>
                <b>Salary Bonus</b>
              </p>
              <p>
                We give an annual salary bonus to all our valuable employees.
                The most important achievement for us is the value they add to
                our brand and being part of our family. At MQ Hotel, we value
                people!
              </p>
              <p>
                <b>Staff Shuttle and Transportation</b>
              </p>
              <p>
                For all employees who do not benefit from the residence service,
                transportation to their homes is provided safely by our hotel's
                VIP vehicle and driver before and after shifts, without being
                exposed to social problems. Our drivers' biggest concern is to
                wait with the vehicle until our female employees working the
                evening shift enter their homes.
              </p>
              <p>
                <b>Socializing</b>
              </p>
              <p>
                We value the social lives of our employees, who are a value of
                our MQ Hotel Suites brand and a part of our family. Our garden
                area within the hotel premises has been provided for them to
                rest during break times and to create various social
                opportunities.
              </p>
              <p>
                <b>
                  (A suggestion, feedback, and complaint box has been placed in
                  the staff canteen. The key to this box is held by the top
                  management, facilitating the transmission of employees'
                  wishes, complaints, and suggestions to the top management in
                  this way. Staff surveys are conducted, and based on the
                  results, issues that employees are not satisfied with (e.g.,
                  dissatisfaction with the staff canteen meals, leading to menu
                  changes) are addressed.)
                </b>
              </p>
              <hr />
              <p id="6"></p>
              <h5>6. Social Activities</h5>
              <p>
                MQ Hotel Suites sees contributing to the development of the
                environment, employees, and the community in which it operates
                as part of its responsibilities.
              </p>

              <p>
                MQ Hotel Suites commits to establishing positive relationships
                with the local community, avoiding age, gender, or race
                discrimination among its staff, developing the local population
                socially and economically, and supporting the local economy by
                working with local suppliers.
              </p>

              <p>
                <b>For this purpose;</b>
              </p>
              <ul>
                <li>
                  Our establishment is committed to increasing its membership
                  and relationships with civil society organizations related to
                  local, national tourism, and sustainable environment. It
                  supports the cultural richness and local producers in the
                  region, contributing to the local economy. It prefers local
                  products and provides job opportunities for people living in
                  the regions where the facility is located. It aims for
                  long-term employment with existing staff. It implements
                  training programs for increasing knowledge, culture, and
                  skills. Our establishment attaches importance to employing
                  disabled personnel.
                </li>
                <li>
                  Our establishment collaborates closely with local governments
                  and public institutions to eliminate the negative effects that
                  may arise as a result of the development of tourism, and
                  supports the local people and students within its
                  capabilities.
                </li>
                <li>
                  Most of the products used in our hotel are sourced from our
                  region, reducing carbon dioxide emissions.
                </li>
                <li>
                  Turkish nights are organized to introduce the flavors and
                  cultural structure of the 7 geographical regions to guests.
                </li>
                <li>
                  The hotel requests guests to use public transportation or
                  bicycles to minimize environmental damage during
                  transportation.
                </li>
                <li>
                  Our establishment contributes to social responsibility
                  projects.
                </li>
                <li>
                  MQ Hotel Suites contributes to the development of its
                  destination.
                </li>
                <li>
                  We cultivate our own employees! MQ Hotel Suites employees are
                  predominantly young and female, without the requirement of
                  "experience" for young people without vocational education or
                  those whose education has been incomplete, aiming to build a
                  future for them and contribute them to the tourism sector.
                </li>
              </ul>
              <p>
                In this context, below is the statistical report of our employed
                workers, both male and female, categorized by age;
              </p>
              <div className={classes.imgBox}>
                <img src={picture6} alt="" loading="lazy" />
              </div>
              <hr />
              <p id="7"></p>
              <h5>7. Cultural Studies</h5>
              <p>All our guests are informed during the check-in procedures.</p>
              <p>
                We describe the regional characteristics and opportunities of
                our hotel due to its location. We inform about the important
                points of the Black Sea and the features of the Black Sea
                region, especially emphasizing the minimal urban pollution and
                emissions in this region due to its integration with nature.
              </p>
              <p>
                Our goal is to highlight the unique geographical advantage of
                our region with our pool, which is designed entirely using sea
                water and is completely chemical-free and healthy.
              </p>

              <div className={classes.imgBox}>
                <img src={picture7} alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SustainableTurismReport;
