import ShadowWrapper from "../main-page/main-page-components/components/ShadowWrapper";
import Heading from "../main-page/main-page-components/components/Heading";
import classes from "./SustainableManagementSystem.module.css";
import hero from "../../assets/Pictures/sustainable-turism/sustainable-turism.jpg";
import { useEffect } from "react";

const SustainableManagementSystem = ({ lan }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  if (lan === "tr") {
    return (
      <>
        <section className={classes.turbine}>
          <ShadowWrapper img={hero}>
            <Heading
              marginTop="100px"
              text="SÜRDÜRÜLEBİLİRLİK YÖNETİM SİSTEMİ"
            />
          </ShadowWrapper>
        </section>
        <section className={classes.container}>
          {" "}
          <div className={classes.main}>
            <div className="room-container-img"></div>
            <h4>Sürdürülebilirlik Yönetim Sistemi</h4>
            <h5> Yönetim Sistemi (TR-I Kriter A1) </h5>
            <p>
              Bu belge, otelimizin tüm yönetim süreçlerini kapsayacak şekilde
              uyarlanabilen ve geliştirilebilen bir Sürdürülebilirlik Yönetim
              Sistemi (SYS)’nin temel çerçevesini oluşturmakta ve politikalarını
              ortaya koymaktadır. Bu belge, otelin yönetimi ve personeline
              yönelik hazırlanmıştır. Sistemimiz otelimizin büyüklüğüne ve
              kapsamına uygun olacak şekilde geliştirilmiştir.
            </p>
            <p>
              {" "}
              Yönetim sistemimizin temeli risk analizine dayanmaktadır. Çevre,
              doğal afetler, toplum, kültür, ekonomi, kalite, insan hakları,
              sağlık, güvenlik başlıklarında risk analizi yapılmaktadır.
              Gerekmesi halinde yeni başlıklar da eklenebilmektedir.{" "}
            </p>
            <p>
              {" "}
              Riskler analiz edildikten sonra risklerin gerçekleşmesi durumunda
              yapılacakları belirleyen bir kriz yönetim politikamız ve
              sistemimiz de bulunmaktadır. Bu belgenin ekinde risk analizi ve
              kriz yönetiminin nasıl yapılacağı yer almaktadır.{" "}
            </p>
            <h5>
              {" "}
              Risk analizi, Tablo-1’de belirtilen yöntemle yapılmaktadır.{" "}
            </h5>
            <p>
              {" "}
              SYS kalite, ekonomi, yönetim, çevre, kültür, insan hakları, sağlık
              ve güvenlik konularında tüm çalışanlar tarafından belli
              politikaların uygulanmasını, hedefler belirlenmesini ve hedeflere
              ulaşılıp ulaşılamadığının izlenerek işletme yönetim süreçlerinin
              sürekli iyileştirilmesini içermektedir.{" "}
            </p>
            <p>
              Belirlenen hedeflere ulaşılması halinde yeni hedefler
              belirlenmektedir. Ulaşılamaması durumunda, hedeflerimiz, politika
              ve uygulamalarımız gözden geçirilir. Bu sayede sürekli
              iyileştirmeyi sağlamaya gayret gösteririz.
            </p>
            <p>
              Otelimizin yönetim sistemine ilişkin hedefler ve hedeflere uyumun
              takip edildiği performans göstergeleri bu belgenin ekinde yer
              almaktadır.
            </p>
            <h5>
              {" "}
              Otelimizin hedefleri ve performans göstergeleri Tablo-2’de yer
              almaktadır.{" "}
            </h5>
            <p>
              {" "}
              Otelimiz, sürdürülebilirlikle ilgili olarak, Türkiye
              Sürdürülebilir Turizm Programı’nın birinci aşama yükümlülüklerini
              yerine getireceğini ve sürdürülebilirlik performansının
              artırılması için sürdürülebilir yönetim sisteminin sürekli
              iyileştirilmesini taahhüt eder.{" "}
            </p>
            <p>
              {" "}
              Sektörün durumu, çevresel, toplumsal, teknolojik, ekonomik ve
              kültürel riskler, mevzuat kaynaklı değişiklik ve güncellemeler
              dolayısıyla yönetim sistemimiz sürekli gözden geçirilmekte,
              gerekli olması durumunda sistem ve politikalar güncellenmektedir.{" "}
            </p>
            <p>
              {" "}
              Yukarıda belirtilen adımlar özetle Planla-Uygula-Kontrol Et-Önlem
              Al (PUKÖ) yaklaşımı olarak ifade edilebilir (Şekil 1).{" "}
            </p>
            <p>
              {" "}
              <b> Planla: </b> Otelimiz çevre, toplum, kültür, ülke ekonomisi ve
              yönetim sistemi konularına önem vermekte ve hedefler
              belirlemektedir. Belirlenen hedeflere ulaşabilmek için izlenecek
              yol haritası ve eylemleri planlamaktadır.
            </p>
            <p>
              {" "}
              <b> Uygula: </b> Otelimiz çevresel, kültürel, sosyal, insan
              hakları, sağlık ve güvenlik ile ilgili temel politikalarını ve
              uygulamalarını belirler. Bunları, ilgili personel tarafından
              tanımlanan aralıklarla izler, ölçer ve kaydeder.
            </p>
            <p>
              {" "}
              <b> Kontrol et: </b> Otelimizde hem personel hem de müşterilerden
              gelen geri bildirimler izlenir ve kaydedilir. Gerekmesi halinde
              düzeltici önlemler alınır.
            </p>
            <p>
              {" "}
              <b> Önlem al: </b> Otelimizin kontrol et adımında belirlenen
              sorunları düzeltmek için harekete geçtiği adımdır. Düzeltici önlem
              ve işlemler kayıt altına alınarak arşivlenir.
            </p>
            <h5> Yasal Uyum (TR-I Kriter A2) </h5>
            <p>
              {" "}
              Otelimiz, yürürlükteki yasa, mevzuat ve uluslararası sözleşmelere
              uymayı taahhüt eder, bunların güncel bir listesini bulundurur ve
              bunlarla ilgili personelini düzenli olarak bilgilendirir,
              personele gerekli eğitimleri sağlar.{" "}
            </p>
            <h5> Uyulması gereken temel mevzuat Tablo-3’te yer almaktadır. </h5>
            <p>
              {" "}
              Sorulması veya ibraz edilmesinin istenmesi halinde otelimiz
              gerekli tüm izin, sertifika ve belgeleri ilgili kişi ve kurumlara
              ibraz eder.{" "}
            </p>
            <p>
              {" "}
              Bu belgeler, Turizm İşletme Belgesi, Basit Konaklama Turizm
              İşletmesi Belgesi, İşyeri Açma ve Çalışma Ruhsatı, son aya ait
              personel sigorta bildirgesi, vergi levhası, acil durum eylem
              planı, personel eğitimleri ve sertifikaları, varsa işyeri hekimi
              ile yapılan sözleşme, belediyeden alınan kanalizasyon bağlantı
              belgesi, varsa arıtma tesisi kimlik belgesi ve kontrol belgeleri,
              varsa yeraltı suyu kullanımına ilişkin belgeler, termal su
              kullanım izni, varsa havuz suyu ölçümleri ve kontrol belgeleri,
              haşere ile mücadele yapıldığına ilişkin belgeler ve diğer gerekli
              belgelerdir.{" "}
            </p>
            <h5> Paydaşlar ve iletişim </h5>
            <p>
              {" "}
              Otelimiz, tanıtımda tüm kesimlere doğru bilgi verir. Tanıtımda her
              zaman gerçek görsel materyal kullanır. İnternet sitesinde, sosyal
              medya hesaplarında ve diğer basılı ve yazılı tanıtım kanallarında
              ve pazarlama iletişiminde otelimiz, ürün ve hizmetleri açısından
              şeffaf ve gerçekçi bir yapıya sahiptir.{" "}
            </p>
            <p>
              {" "}
              Otelimiz aynı zamanda politika ve sürdürülebilirlik ile ilgili
              yaptıklarını, eylem ve işlemlerini de çalışanları ve müşterileri
              ile açık ve şeffaf şeklide paylaşmaktadır. Hedeflerimiz arasında
              bunu yapmak için otelimizin internet sitesini kullanılmakta
              bulunmaktadır. İnternet sitemizde sürdürülebilirlik performansı
              hakkında periyodik raporlar yayımlanabilir. Bu raporlar konusuna
              uygun periyotlarda düzenlenebilir.{" "}
            </p>
            <h5> Performans raporlaması örneği Tablo-4’te yer almaktadır. </h5>
            <p>
              {" "}
              Otelimizde sürdürülebilirlik performansımız, politikalarımız ve
              uygulamalarımız ile ilgili olarak müşterilerimizden, kamu
              kurumlarından, belediyelerden, çalışanlardan, çevre halkından ve
              diğer ilgili tüm kişi ve kurumlardan geri bildirim almayı
              hedefleyen bir sistem mevcuttur. Bu sistem aracılığıyla hem
              personelimizin hem de müşterilerimizin geri bildirimlerini alırız.{" "}
            </p>
            <p>
              {" "}
              Sistemimiz müşterilerimizin ve personelimizin hızlı, basit ve
              etkili şekilde geri bildirim yapabilmesini sağlayacak ve teşvik
              edecek şekilde düzenlenmiştir.{" "}
            </p>
            <p>
              {" "}
              Bu sistem, misafirler için anket uygulamaları, sosyal medya
              hesaplarının düzenli takibi, çalışanlar için e-posta, mesajlaşma
              servisleri ve diğer iletişim kanalları, diğer tüm paydaşlar için
              ise e-posta ile iletişim ve bunların düzenli takibini içerir.{" "}
            </p>
            <h5> Anket uygulaması örneği Tablo-5’te yer almaktadır. </h5>
            <p>
              {" "}
              <b> Müşteri deneyimi: </b> Otelimizde müşteri memnuniyetine önem
              verilir. Müşteri memnuniyeti, sürdürülebilirlik ile ilgili
              yukarıda açıklanan sistemden gelen geri bildirimleri içerir.
              Alınan sonuçların analizi yapılır. Olumsuz geri bildirim ve buna
              verilen yanıtlar kaydedilir ve gerekli önlemler alınır.
            </p>
            <p>
              {" "}
              <b> Personel katılımı: </b> Otelimizin yönetim sisteminin en
              önemli unsuru çalışanlarımızdır.
            </p>
            <p>
              {" "}
              Çalışanlarımız yönetim sistemimizde ve sürdürülebilirlikle ilgili
              politika ve uygulamalarımızda neler yapmaları gerektiğini
              bilmektedirler. Çalışanlarımızın yapmaları gerekenler yazılı
              olarak tanımlanmış, kendilerine iletilmiş ve gerekli eğitim ve
              yönlendirmeler düzenli olarak yapılmaktadır. Bu konudaki eğitimler
              kayıt altına alınır.{" "}
            </p>
            <p>
              {" "}
              Çalışanlarımız yönetim sistemimizin ve sürdürülebilirlik
              performansımızın geliştirilmesi ve sürekli iyileştirilmesinde
              aktif rol alırlar. Çalışanlarımızdan gelen geri bildirimler
              doğrultusunda sistemimizi gözden geçiririz ve iyileştiririz.{" "}
            </p>
            <p>
              {" "}
              Sürdürülebilirlik politikalarımız ve yönetim sistemimiz
              doğrultusunda oryantasyon eğitimleri dahil; çalışanlara
              sürdürülebilirlikle ilgili ve çalışma alanlarına ilişkin periyodik
              eğitim programları, işbaşı eğitimleri, yasal mevzuat gereği
              alınması gereken eğitimler ve rehberlik destekleri verilir. İş
              Sağlığı ve Güvenliği eğitimleri, Mutfak/servis/masaj vb. personel
              için hijyen eğitimleri, su ve enerji tasarrufu, kimyasal madde
              kullanım kuralları, yangından korunma, ilk yardım, vb. konularında
              yıllık eğitim planları uygulamaktayız.{" "}
            </p>
            <p>
              {" "}
              Çalışanlarımız tüm eğitim materyallerimize ücretsiz ve açık bir
              şekilde erişebilmektedir.{" "}
            </p>
            <p>
              {" "}
              Otelimiz 4857 sayılı İş Kanunu’nun ilgili hükümlerine uymayı
              taahhüt etmektedir ve çalışana en az asgari ücret vermektedir.
              Ayrıca 5510 Sayılı Sosyal Sigortalar ve Genel Sağlık Sigortası
              kanununa ve 6331 Sayılı İş Sağlığı ve Güvenliği Kanununa uyumu da
              otelimiz taahhüt eder.{" "}
            </p>
            <p>
              {" "}
              Otelimiz, sürdürülebilirlik faaliyetlerini yönetmek için bir
              “Sürdürülebilirlik Ekibi” oluşturmuştur.{" "}
            </p>
            <h5>
              {" "}
              Sürdürülebilirlik Ekibi görev dağılımı Tablo-6’da yer almaktadır.{" "}
            </h5>
            <h5> Erişilebilirlik </h5>
            <p>
              {" "}
              Otelimiz, imkanları dahilinde herkes için erişilebilir turizm
              hizmetleri sunmayı taahhüt eder ve erişilebilirlik düzeyi hakkında
              müşterileri ve paydaşlarını internet sitesi aracılığıyla açık ve
              doğru şekilde bilgilendirir.{" "}
            </p>
            <p>
              {" "}
              Otelimiz ayrıca erişilebilirlikle ilgili yasal düzenlemelere tam
              uyum sağlamayı ve bu konuda sürekli iyileştirmeyi takip ve taahhüt
              etmektedir.{" "}
            </p>
            <p>
              {" "}
              Yalnızca fiziksel engelliler değil, görme, işitme gibi engeller
              dolayısıyla turizm faaliyetlerine katılamayan misafirlerimiz için
              de sürekli iyileştirmeler yapmaya gayret göstermekteyiz.{" "}
            </p>
            <p>
              {" "}
              Otelimiz erişilebilirlik düzenlemelerinin ve altyapısının bakım ve
              onarımını düzenli olarak gerçekleştirmekte ve gerekmesi halinde
              iyileştirmeler sağlamaktadır. Ayrıca erişilebilirlikle ilgili
              olarak çalışanlarımızı düzenli olarak bilgilendirmekteyiz.{" "}
            </p>
            <h5> Satın alma </h5>
            <p>
              {" "}
              Satın alma politikamız yerel, çevreye duyarlı, adil ticarete
              dayalı ve verimli satın almaya yönelik politikaları içermektedir.{" "}
            </p>
            <p>
              {" "}
              Otelimiz tarafından mal ve hizmet kaynaklarımız izlenmektedir.
              Tedarikçilerimiz ile belirli aralıklarla görüşmeler yapmaktayız.
              Onların sürdürülebilirlikle ilgili sertifikalarını, bilgi ve
              belgelerini kontrol etmekteyiz.{" "}
            </p>
            <p>
              {" "}
              <b> Yerel satın alma: </b> Otelimiz mal ve hizmet satın alırken
              kaliteli ve makul fiyatlı olması kaydıyla yerel tedarikçilere
              öncelik vermektedir. Bu nedenle tedarikçilerini düzenli olarak
              denetlemekte, tedarikçi listesini güncellemekte ve tedarikçilerini
              bilgilendirmektedir. Bölge halkından alınan mal ve hizmetlerin
              oranı ölçülmektedir.
            </p>
            <p>
              {" "}
              <b> Çevreye duyarlı satın alma: </b> Otelimiz satın alımda çevreye
              duyarlı bir politika izlemektedir, gıda ve katı atığı azaltmak
              üzere verimli satın alma, enerji tasarrufu ve su tasarrufuna önem
              vermektedir.
            </p>
            <p>
              {" "}
              Otelimiz, satın alımlarında çevreye duyarlı ürünlere (çevre
              etiketli ürünlere) öncelik vermektedir. Satın alınacak ürün
              grubunda çevre etiketli ürünler yoksa ilgili ürünlerini, üretimi
              ve diğer tüm süreçleri çevreye zarar vermeyen tedarikçi ve
              üreticilerden seçer.{" "}
            </p>
            <p>
              {" "}
              Otelimiz bu çerçevede, satın alımlarını yaparken sürdürülebilirlik
              sertifikalarına sahip tedarikçilerin seçilmesini önceliklendirir.
              Tedarikçilerde aranabilecek örnek sertifikalar{" "}
            </p>
            <p> ISO14001, ISO50001, ISO14064, ISO20400 gibi belgelerdir. </p>
            <p>
              {" "}
              Ahşap, balık, kâğıt ve diğer gıdalar için çevre sertifikalı (FSC,
              MSC, AB-EcoLabel, vb.) veya kaynağı takip edilebilen ürünler
              tercih edilmektedir.{" "}
            </p>
            <p>
              {" "}
              Tehdit altındaki türler ve satılması yasak olan türler (balık,
              ağaç, bitki, av hayvanı, vb.) otelimizde alınmamakta ve
              kullanılmamaktadır.{" "}
            </p>
            <p>
              {" "}
              Çevre sertifikalı, yerel üretici ve tedarikçilerden, adil ticaret
              tedarikçilerinden satın alımlarımızın toplam satın alımlara oranı
              ölçülmektedir.{" "}
            </p>
            <p>
              {" "}
              Otelimizin çevre sertifikalı, yerel ve adil ticaretle satın alma
              ile ilgili hedefleri bulunmaktadır. Bu çerçevede, satın
              alımlarımızda yerel ve adil ticaret tedarikçilerinin oranının ve
              sayısının artmasını hedeflemekte ve buna özen göstermekteyiz.{" "}
            </p>
            <h5> Tedarikçi değerlendirme formu Tablo-7’de yer almaktadır. </h5>
            <h5> Onaylı tedarikçi listesi Tablo-8’de yer almaktadır. </h5>
            <p>
              {" "}
              <b> Verimli satın alma: </b> Satın alma politikamız, yeniden
              kullanılabilir, iade edilebilir ve geri dönüştürülmüş malları
              tercih etmektedir.
            </p>
            <p>
              {" "}
              Otelimiz ayrıca, toplu alıma ve dökme ürün alımına öncelik
              vermektedir. Bu sayede otelimize daha az sayıda nakliyat
              yapılmakta, daha az sera gazı emisyonu üretilmektedir.{" "}
            </p>
            <p>
              {" "}
              Otelimize gelen ürünlerde gereksiz ve fazla plastik, naylon,
              kağıt, cam, ahşap ambalajların olmaması temel önceliğimiz ve
              tercihimizdir.{" "}
            </p>
            <p>
              {" "}
              Sarf malzemesi ve buklet ürünlerin satın alımında tek kullanımlık
              ürünlerden ve gereksiz ambalajdan (özellikle plastikten)
              kaçınılmaktadır. Sarf malzemeleri ve tek kullanımlık ürünlerin
              satın alınması ve kullanımı izlenmekte ve yönetilmektedir.{" "}
            </p>
            <h5>
              {" "}
              Tek kullanımlık, plastik, ambalajlı ürünlerin izlenmesi için
              Tablo-9 kullanılmaktadır.{" "}
            </h5>
            <h5> Kültürel Sürdürülebilirlik Politikası </h5>
            <p>
              {" "}
              <b> Kültürel mirasın sunulması: </b> Otelimiz, yerel halkının
              fikri mülkiyet haklarına saygı gösterir.
            </p>
            <p>
              {" "}
              Geleneksel ve çağdaş yerel kültürün otantik unsurları
              mutfağımızda, tasarımımızda, dekorasyonda değerlendirir.{" "}
            </p>
            <p>
              {" "}
              <b> Eserler: </b> Otelimiz, tarihsel ve arkeolojik eserleri alıp
              satmaz, ticaretine aracılık etmez ve bunları sergilemez.
            </p>
            <p>
              {" "}
              <b> Sürdürülebilir yerel gastronominin tanıtımı: </b> Otelimiz
              yerel ürünlerin tanıtılması ve tüketimine öncelik vermektedir. Tüm
              faaliyetlerinde gastronomide sürdürülebilirliği sağlamak için
              yenilikçi ve yaratıcı uygulamalar ortaya koymaktadır.
            </p>
            <h5> Enerji ve çevre </h5>
            <p>
              {" "}
              <b> Enerji tasarrufu: </b> Otelimizin enerji tasarrufu politikası
              bulunmaktadır. Politika, enerji tüketiminin düzenli ölçülmesini,
              izlenmesini, azaltılmasını ve yenilenebilir enerji kullanımını
              içermektedir.
            </p>
            <p>
              {" "}
              Otelimiz mümkün olduğunca yenilenebilir enerji kullanımına öncelik
              vermektedir.{" "}
            </p>
            <p>
              {" "}
              Otelimiz enerji tüketimini enerji türüne göre gruplamaktadır,
              farklı birimlerin enerji tüketimleri izlenmektedir.{" "}
            </p>
            <p>
              {" "}
              Otelimizde kullanılan toplam enerji türe göre ölçülmektedir. Ölçüm
              için ekteki tablo kullanılmaktadır.{" "}
            </p>
            <p>
              {" "}
              Otelimizin yenilebilir kaynaklardan elde ettiği enerji
              izlenmektedir.{" "}
            </p>
            <h5> Elektrik tüketim takibi için Tablo-10 kullanılmaktadır. </h5>
            <h5>
              {" "}
              Toplam enerji kullanımının takibi için Tablo-11 kullanılmaktadır.{" "}
            </h5>
            <p>
              {" "}
              Otelimiz, enerji tüketiminin yüksek olduğu faaliyetleri
              belirlemekte, bu alan ve faaliyetlerde enerji tüketimini azaltmak
              için düzeltici önlemler planlamakta ve uygulamaktadır (ısı yalıtım
              sistemleri, enerji tüketim sınıfı bulunan cihazlardan düşük
              tüketimlilerin tercih edilmesi, akkor gibi yüksek enerji tüketimli
              aydınlatmalar yerine led ampullerin kullanımı vs.). Ayrıca
              otelimiz enerji tasarruflu ekipmanlar kullanmaktadır.{" "}
            </p>
            <p>
              {" "}
              Otelimiz enerji tasarrufu konusunda çalışanlarını ve paydaşlarını
              bilgilendirmekte ve eğitmektedir.{" "}
            </p>
            <h5> Su yönetimi ve atık su </h5>
            <p>
              {" "}
              Otelimizin, su tasarrufu politikası bulunmaktadır. Politikamız, su
              tüketiminin düzenli ölçülmesini, izlenmesini, azaltılmasını
              içermektedir.{" "}
            </p>
            <p>
              {" "}
              Otelimizin bulunduğu bölgede su riski durumu belirlenmiştir. Bunun
              için World Resources Institute tarafından hazırlanan Water Risk
              Atlas kullanılmaktadır.{" "}
            </p>
            <p>
              {" "}
              Risk analizinde su riski ayrıca değerlendirilmiştir, su yönetimi
              planı yapılmıştır. Bu plan, su kullanımının ölçümü ve takibi ile
              su tüketiminin azaltılmasına yönelik hedef ve raporlamaları
              içermektedir.{" "}
            </p>
            <p>
              {" "}
              Otelimizin su kullanım faaliyetleri nedeni ile deniz, göl gibi
              sularda yaşayan canlılar zarar görmemektedir. Yine de bu
              canlıların zarar görme ihtimali risk analizinde
              değerlendirilmiştir ve gerekli önlemler alınmıştır.{" "}
            </p>
            <p>
              {" "}
              Otelimiz, suyun kullanımında tüm yasal gereklilik ve düzenlemelere
              uymaktadır.{" "}
            </p>
            <p>
              {" "}
              Su, yasal ve sürdürülebilir bir kaynaktan gelmektedir. Suyumuz
              şebeke suyu veya izinli kuyu suyundan gelmektedir.{" "}
            </p>
            <p>
              {" "}
              Su tüketimimizi ölçmekteyiz. Misafir veya geceleme başına
              kullanılan toplam su hesaplanmakta ve raporlanmaktadır. Bu
              belgenin ekindeki dosya ölçüm için kullanılmaktadır.{" "}
            </p>
            <h5> Su tüketiminin ölçülmesi için Tablo-12 kullanılmaktadır. </h5>
            <p>
              {" "}
              Su tüketimini azaltma hedeflerimiz bulunmaktadır. Buna yönelik
              olarak otelimiz düzeltici önlemler planlamakta ve uygulamaktadır.
              Otelimizde su tasarruflu ekipmanlar kullanılmaktadır. Otelimizde
              çarşaf ve havluların misafir isteğine bağlı olarak değiştirilmesi
              gibi iyi uygulamalar kullanılmaktadır.{" "}
            </p>
            <p>
              {" "}
              Otelimiz su tasarrufu konusunda çalışanlarını ve paydaşlarını
              bilgilendirmekte ve yönlendirmektedir. Otelimiz atık suyunun
              çevreye zarar vermemesi için tüm imkanlarını seferber etmektedir.{" "}
            </p>
            <p>
              {" "}
              Atık suyun bertarafı için yerel yönetimin belirlediği
              düzenlemelere uyulmaktadır. Bu konuda yasal gerekliliklere
              uyulmaktadır.{" "}
            </p>
            <h5> Gıda atığı ve katı atık </h5>
            <p>
              {" "}
              Otelimizde bir Katı Atık Yönetim Planı vardır. Plan, atık
              üretiminin düzenli ölçülmesini, izlenmesini, atıkların
              azaltılmasını, yeniden kullanımını, geri dönüşümü ve atık
              bertarafını içermektedir.{" "}
            </p>
            <h5> Atık takibi için Tablo-13 kullanılmaktadır. </h5>
            <p>
              {" "}
              Katı atıklar gıda, geri dönüşebilir, zehirli/tehlikeli ve organik
              gibi türlerine göre ayrıştırılmakta, ayrıştırılırken geri dönüşüm
              ve yeniden kullanım durumları gözetilmektedir.{" "}
            </p>
            <p>
              {" "}
              Otelimiz atık yönetimi konusunda çalışanlarını ve paydaşlarını
              düzenli olarak ve çeşitli görsel ve iletişim materyalleri ile
              bilgilendirmekte ve yönlendirmektedir.{" "}
            </p>
            <p>
              {" "}
              Otelimizde türlerine göre ayrıştırılan katı atıklar yetkili ve
              lisanslı firmalar tarafından alınmaktadır.{" "}
            </p>
            <p>
              {" "}
              Gıda atıkları da dahil olmak üzere katı atıklar türe göre
              ölçülmektedir. Otelimizde misafir veya geceleme başına katı atık
              miktarı hesaplanmakta ve raporlanmaktadır.{" "}
            </p>
            <p>
              {" "}
              Otelimiz ayrıca, katı atık oluşumunun yüksek olduğu faaliyetleri
              ve risk alanlarını belirlemiştir. Gıda atıklarını ve israfı
              azaltmak için düzeltici önlemler planlamakta ve uygulamaktadır.{" "}
            </p>
            <p>
              {" "}
              Katı atık bertarafının yerel nüfus veya çevre üzerinde olumsuz bir
              etkisi olmaması hedeflenmektedir. Katı atık yönetimi ile ilgili
              “Sıfır Atık Yönetmeliği” mevzuatına uyum sağlanmaktadır.{" "}
            </p>
          </div>
        </section>
      </>
    );
  } else if (lan === "en") {
    return (
      <>
        <section className={classes.turbine}>
          <ShadowWrapper img={hero}>
            <Heading
              marginTop="100px"
              text="SUSTAINABILITY MANAGEMENT SYSTEM"
            />
          </ShadowWrapper>
        </section>
        <section className={classes.container}>
          {" "}
          <div className={classes.main}>
            <div className="room-container-img"></div>

            <h5> Management System (TR-I Criterion A1) </h5>
            <p>
              This document establishes the fundamental framework of a
              Sustainability Management System (SMS) that can be adapted to and
              developed to encompass all management processes of our hotel. It
              outlines the policies. This document is prepared for the
              management and staff of the hotel. Our system has been developed
              to be appropriate for the size and scope of our hotel.
            </p>
            <p>
              {" "}
              The foundation of our management system is based on risk analysis.
              Risk analysis is conducted in the areas of environment, natural
              disasters, community, culture, economy, quality, human rights,
              health, and safety. If necessary, new categories can also be
              added.{" "}
            </p>
            <p>
              {" "}
              After analyzing the risks, our management system includes a crisis
              management policy and system that determine actions to be taken in
              the event of risks occurring. Attached to this document are
              guidelines on how risk analysis and crisis management will be
              conducted.{" "}
            </p>
            <h5>
              {" "}
              Risk analysis is conducted using the method specified in Table-1.{" "}
            </h5>
            <p>
              {" "}
              The Sustainability Management System (SMS) entails the
              implementation of specific policies by all employees in the areas
              of quality, economy, management, environment, culture, human
              rights, health, and safety. It involves setting objectives,
              monitoring the achievement of these objectives, and continuously
              improving business management processes.{" "}
            </p>
            <p>
              If the set objectives are achieved, new objectives are determined.
              In case of failure to achieve them, our objectives, policies, and
              practices are reviewed. This way, we strive to ensure continuous
              improvement.
            </p>
            <p>
              The objectives related to our hotel's management system and the
              performance indicators tracking compliance with these objectives
              are included as an attachment to this document.
            </p>
            <h5>
              {" "}
              OThe objectives and performance indicators of our hotel are
              included in Table-2.{" "}
            </h5>
            <p>
              {" "}
              Our hotel commits to fulfilling the first stage obligations of the
              Turkey Sustainable Tourism Program regarding sustainability and
              pledges to continuously improve the sustainable management system
              to enhance sustainability performance.{" "}
            </p>
            <p>
              {" "}
              Due to the status of the sector, environmental, social,
              technological, economic, and cultural risks, as well as changes
              and updates due to legislation, our management system is
              constantly reviewed. If necessary, the system and policies are
              updated accordingly.{" "}
            </p>
            <p>
              {" "}
              he steps mentioned above can be summarized as the
              Plan-Do-Check-Act (PDCA) approach, as shown in Figure 1.{" "}
            </p>
            <p>
              {" "}
              <b> Plan: </b>Our hotel values environmental, societal, cultural,
              national economy, and management system issues and sets
              objectives. To achieve these objectives, it plans a roadmap and
              actions to follow.
            </p>
            <p>
              {" "}
              <b> Do: </b> Our hotel establishes its fundamental policies and
              practices regarding environmental, cultural, social, human rights,
              health, and safety. It monitors, measures, and records these at
              intervals defined by relevant personnel.
            </p>
            <p>
              {" "}
              <b> Check: </b> Both staff and customer feedback are monitored and
              recorded in our hotel. Corrective measures are taken if necessary.
            </p>
            <p>
              {" "}
              <b> Act: </b> The "Act" step in our hotel's control process is
              when it takes action to correct the identified issues. Corrective
              measures and actions are documented and archived.
            </p>
            <h5> Legal Compliance (TR-I Criterion A2) </h5>
            <p>
              {" "}
              Our hotel commits to complying with current laws, regulations, and
              international agreements, maintains an up-to-date list of these,
              and regularly informs its staff about them, providing necessary
              training to personnel.{" "}
            </p>
            <h5>
              The essential regulations to be complied with are listed in
              Table-3.{" "}
            </h5>
            <p>
              {" "}
              Upon request or requirement, our hotel presents all necessary
              permits, certificates, and documents to the relevant individuals
              and institutions.{" "}
            </p>
            <p>
              {" "}
              These documents include Tourism Operation License, Simple
              Accommodation Tourism Operation License, Workplace Opening and
              Operating Permit, personnel insurance declaration for the last
              month, tax certificate, emergency action plan, personnel trainings
              and certificates, if any, contract with the workplace doctor,
              sewage connection certificate obtained from the municipality, if
              any, identification and inspection documents for the treatment
              facility, if any, documents related to groundwater use, permission
              for thermal water use, if any, pool water measurements and
              inspection documents, documents indicating pest control measures,
              and other necessary documents.{" "}
            </p>
            <h5> Stakeholders and Communication </h5>
            <p>
              {" "}
              Our hotel provides accurate information to all sectors in its
              promotion. It always uses authentic visual materials in its
              promotion. In our hotel's website, social media accounts, and
              other printed and written promotional channels, as well as in
              marketing communications, we maintain a transparent and realistic
              approach regarding our products and services.{" "}
            </p>
            <p>
              {" "}
              Our hotel also openly and transparently shares its actions and
              operations related to policy and sustainability with its employees
              and customers. Among our goals is to utilize our hotel's website
              for this purpose. Periodic reports on sustainability performance
              may be published on our website. These reports can be prepared at
              appropriate intervals according to the subject matter.{" "}
            </p>
            <h5>
              {" "}
              An example of performance reporting is provided in Table-4.{" "}
            </h5>
            <p>
              {" "}
              In our hotel, we have a system aimed at receiving feedback from
              our customers, public institutions, municipalities, employees,
              local communities, and other relevant individuals and institutions
              regarding our sustainability performance, policies, and practices.
              Through this system, we gather feedback from both our staff and
              customers.{" "}
            </p>
            <p>
              {" "}
              Our system is designed to enable and encourage our customers and
              staff to provide feedback quickly, simply, and effectively.{" "}
            </p>
            <p>
              {" "}
              This system includes survey applications for guests, regular
              monitoring of social media accounts, email, messaging services,
              and other communication channels for employees, and email
              communication for all other stakeholders, along with regular
              monitoring of these channels.{" "}
            </p>
            <h5>
              {" "}
              An example of a survey application is provided in Table-5.{" "}
            </h5>
            <p>
              {" "}
              <b> Customer Experience: </b> Customer satisfaction is prioritized
              in our hotel. Customer satisfaction includes feedback received
              from the sustainability-related system described above. The
              results are analyzed. Negative feedback and responses to it are
              recorded, and necessary measures are taken.
            </p>
            <p>
              {" "}
              <b> Personnel Participation: </b>The most important element of our
              hotel's management system is our employees.
            </p>
            <p>
              {" "}
              Our employees are aware of what they need to do in our management
              system and regarding our sustainability policies and practices.
              Their responsibilities are clearly defined in writing,
              communicated to them, and necessary training and guidance are
              provided to them regularly. Trainings on this matter are recorded.{" "}
            </p>
            <p>
              {" "}
              Our employees actively participate in the improvement and
              continuous enhancement of our management system and sustainability
              performance. We review and improve our system based on feedback
              received from our employees.{" "}
            </p>
            <p>
              {" "}
              In line with our sustainability policies and management system, we
              provide employees with periodic training programs related to
              sustainability and their work areas, including orientation
              training, on-the-job training, legal compliance training, and
              guidance support. We implement annual training plans on topics
              such as Occupational Health and Safety, hygiene training for
              kitchen/service/massage staff, water and energy conservation,
              chemical usage rules, fire safety, first aid, etc.{" "}
            </p>
            <p>
              {" "}
              Our employees have free and open access to all our training
              materials.{" "}
            </p>
            <p>
              {" "}
              Our hotel commits to complying with the relevant provisions of Law
              No. 4857, the Labor Law, and pays its employees at least the
              minimum wage. Additionally, our hotel pledges compliance with Law
              No. 5510 on Social Security and General Health Insurance and Law
              No. 6331 on Occupational Health and Safety.{" "}
            </p>
            <p>
              {" "}
              Our hotel has established a "Sustainability Team" to manage
              sustainability activities.{" "}
            </p>
            <h5>
              {" "}
              The task distribution of the Sustainability Team is provided in
              Table-6.{" "}
            </h5>
            <h5> Accessibility </h5>
            <p>
              {" "}
              Our hotel commits to providing accessible tourism services for
              everyone within its means and informs customers and stakeholders
              about the level of accessibility accurately and openly through its
              website.{" "}
            </p>
            <p>
              {" "}
              Our hotel also commits to full compliance with legal regulations
              regarding accessibility and to continuously monitoring and
              improving in this regard..{" "}
            </p>
            <p>
              {" "}
              YWe strive to make continuous improvements not only for guests
              with physical disabilities but also for those who cannot
              participate in tourism activities due to visual or hearing
              impairments.{" "}
            </p>
            <p>
              {" "}
              Our hotel regularly conducts maintenance and repairs of its
              accessibility arrangements and infrastructure and makes
              improvements as necessary. Additionally, we regularly inform our
              employees about accessibility-related matters.{" "}
            </p>
            <h5> Purchasing </h5>
            <p>
              {" "}
              Our purchasing policy includes local, environmentally friendly,
              fair trade-based, and efficient procurement policies.{" "}
            </p>
            <p>
              {" "}
              Our hotel monitors our goods and service resources. We conduct
              regular meetings with our suppliers and verify their
              sustainability certificates, information, and documents.{" "}
            </p>
            <p>
              {" "}
              <b> Local Procurement: </b> Our hotel prioritizes local suppliers,
              provided that they offer quality and reasonably priced goods and
              services. Therefore, we regularly inspect our suppliers, update
              the supplier list, and inform our suppliers. The proportion of
              goods and services obtained from the local community is measured.
            </p>
            <p>
              {" "}
              <b> Environmentally Friendly Procurement:</b> Our hotel follows an
              environmentally friendly purchasing policy, emphasizing efficient
              procurement to reduce food and solid waste, energy conservation,
              and water conservation.
            </p>
            <p>
              {" "}
              Our hotel prioritizes environmentally friendly products
              (eco-labeled products) in its purchases. If eco-labeled products
              are not available in the product category to be purchased, we
              select the relevant products from suppliers and producers whose
              production and other processes do not harm the environment.{" "}
            </p>
            <p>
              {" "}
              n this context, our hotel prioritizes the selection of suppliers
              with sustainability certificates when making purchases. Example
              certificates that can be sought in suppliers{" "}
            </p>
            <p>
              {" "}
              Those are documents such as ISO14001, ISO50001, ISO14064, and
              ISO20400.
            </p>
            <p>
              {" "}
              Environmentally certified (FSC, MSC, EU EcoLabel, etc.) or
              traceable source products are preferred for wood, fish, paper, and
              other food items.{" "}
            </p>
            <p>
              {" "}
              Endangered species and species that are prohibited from sale
              (fish, trees, plants, game animals, etc.) are not acquired or used
              at our hotel.{" "}
            </p>
            <p>
              {" "}
              The ratio of our purchases from environmentally certified, local
              producers, and suppliers, as well as fair trade suppliers, to
              total purchases, is measured.{" "}
            </p>
            <p>
              {" "}
              Our hotel has goals related to environmentally certified, local,
              and fair trade purchasing. Within this framework, we aim to
              increase the proportion and number of local and fair trade
              suppliers in our purchases and strive for this.{" "}
            </p>
            <h5> The supplier evaluation form is included in Table-7. </h5>
            <h5> The approved supplier list is included in Table-8.</h5>
            <p>
              {" "}
              <b> Efficient procurement: </b> Our procurement policy prioritizes
              the purchase of reusable, returnable, and recycled goods.
            </p>
            <p>
              {" "}
              Additionally, our hotel prioritizes bulk purchasing and purchasing
              of bulk products. This results in fewer transportation trips to
              our hotel and reduces greenhouse gas emissions.{" "}
            </p>
            <p>
              {" "}
              Our primary priority and preference are to have minimal
              unnecessary plastic, nylon, paper, glass, and wooden packaging in
              the products delivered to our hotel.{" "}
            </p>
            <p>
              {" "}
              Disposable items and unnecessary packaging (especially plastic)
              are avoided in the procurement of consumables and brochure
              products. The procurement and usage of consumables and disposable
              items are monitored and managed.{" "}
            </p>
            <h5>
              {" "}
              Table-9 is used for tracking single-use, plastic, packaged
              products.{" "}
            </h5>
            <h5> Cultural Sustainability Policy </h5>
            <p>
              {" "}
              <b> Presentation of Cultural Heritage </b> Our hotel respects the
              intellectual property rights of the local community.
            </p>
            <p>
              {" "}
              The authentic elements of traditional and contemporary local
              culture are incorporated into our cuisine, design, and decoration.{" "}
            </p>
            <p>
              {" "}
              <b> Artifacts: </b>Our hotel does not buy or sell historical and
              archaeological artifacts, nor do we facilitate their trade or
              display.
            </p>
            <p>
              {" "}
              <b> Promotion of Sustainable Local Gastronomy: </b> Our hotel
              prioritizes the promotion and consumption of local products. It
              implements innovative and creative practices to ensure
              sustainability in gastronomy throughout all its activities.
            </p>
            <h5> Energy and Environment </h5>
            <p>
              {" "}
              <b> Energy Efficiency:</b> Our hotel has an energy efficiency
              policy. The policy includes regular measurement, monitoring,
              reduction of energy consumption, and the use of renewable energy.
            </p>
            <p>
              {" "}
              Our hotel prioritizes the use of renewable energy whenever
              possible.{" "}
            </p>
            <p>
              {" "}
              Our hotel categorizes energy consumption by type and monitors the
              energy consumption of different units.{" "}
            </p>
            <p>
              {" "}
              The total energy used in our hotel is measured according to energy
              type. The attached table is used for measurement.{" "}
            </p>
            <p>
              {" "}
              The energy obtained from renewable sources in our hotel is
              monitored.{" "}
            </p>
            <h5> Table-10 is used for tracking electricity consumption. </h5>
            <h5> Table-11 is used for tracking total energy usage </h5>
            <p>
              {" "}
              Our hotel identifies activities with high energy consumption,
              plans and implements corrective measures to reduce energy
              consumption in these areas and activities (such as insulation
              systems, preference for appliances with energy consumption class
              labels, use of low-consumption devices instead of high-consumption
              lighting such as incandescent bulbs, LED bulbs, etc.).
              Additionally, our hotel uses energy-efficient equipment.{" "}
            </p>
            <p>
              {" "}
              We also inform and educate our employees and stakeholders about
              energy conservation.{" "}
            </p>
            <h5>Water Management and Wastewater</h5>
            <p>
              {" "}
              Our hotel has a water conservation policy. Our policy includes
              regular measurement, monitoring, and reduction of water
              consumption.{" "}
            </p>
            <p>
              {" "}
              The water risk situation in the area where our hotel is located
              has been determined. For this purpose, the Water Risk Atlas
              prepared by the World Resources Institute is used.{" "}
            </p>
            <p>
              {" "}
              In addition to water risk assessment, a water management plan has
              been developed. This plan includes targets and reporting for
              measuring and monitoring water usage and reducing water
              consumption{" "}
            </p>
            <p>
              {" "}
              The marine and freshwater ecosystems are not harmed by our hotel's
              water usage activities. However, the possibility of harm to these
              organisms has been evaluated in the risk analysis, and necessary
              precautions have been taken.{" "}
            </p>
            <p>
              {" "}
              Our hotel complies with all legal requirements and regulations
              regarding water usage.{" "}
            </p>
            <p>
              {" "}
              The water comes from a legal and sustainable source. Our water is
              sourced from municipal water or permitted well water.{" "}
            </p>
            <p>
              {" "}
              We measure our water consumption. The total water used per guest
              or per overnight stay is calculated and reported. The file
              attached to this document is used for measurement.{" "}
            </p>
            <h5> Table-12 is used for measuring water consumption. </h5>
            <p>
              {" "}
              We have goals to reduce water consumption. Accordingly, our hotel
              plans and implements corrective measures. We use water-efficient
              equipment in our hotel. Good practices such as changing bed sheets
              and towels upon guest request are implemented in our hotel.{" "}
            </p>
            <p>
              {" "}
              Our hotel informs and guides its employees and stakeholders on
              water conservation. We deploy all available means to ensure that
              wastewater does not harm the environment.{" "}
            </p>
            <p>
              {" "}
              The disposal of wastewater complies with the regulations set by
              the local authorities. Legal requirements regarding this matter
              are adhered to.{" "}
            </p>
            <h5>Food Waste and Solid Waste </h5>
            <p>
              {" "}
              Our hotel has a Solid Waste Management Plan. The plan includes
              regular measurement, monitoring, waste reduction, reuse,
              recycling, and disposal of waste.{" "}
            </p>
            <h5>Table-13 is used for waste tracking. </h5>
            <p>
              {" "}
              Solid waste is separated according to types such as food,
              recyclable, hazardous, and organic, considering recycling and
              reuse possibilities during separation.{" "}
            </p>
            <p>
              {" "}
              Our hotel regularly informs and guides its employees and
              stakeholders on waste management through various visual and
              communication materials.{" "}
            </p>
            <p>
              {" "}
              Solid wastes separated by types are collected by authorized and
              licensed companies.{" "}
            </p>
            <p>
              {" "}
              Solid wastes, including food waste, are measured by type. The
              amount of solid waste per guest or per overnight stay is
              calculated and reported.{" "}
            </p>
            <p>
              {" "}
              Additionally, our hotel has identified activities and areas with
              high solid waste generation and risk. Corrective measures are
              planned and implemented to reduce food waste and wastage.{" "}
            </p>
            <p>
              {" "}
              The aim is to ensure that solid waste disposal does not have a
              negative impact on the local population or the environment.
              Compliance with the "Zero Waste Regulation" related to solid waste
              management is ensured.{" "}
            </p>
          </div>
        </section>
      </>
    );
  }
};

export default SustainableManagementSystem;
