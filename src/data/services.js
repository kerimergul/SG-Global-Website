// S&G Global hizmet kataloğu — kaynak: sgglobal-websitesi-metinler.xlsx
import {
  IconShield, IconChart, IconLayers, IconUsers,
} from '../components/Icons'

export const services = [
  {
    slug: 'sgk-sosyal-guvenlik',
    icon: IconShield,
    title: 'SGK & Sosyal Güvenlik',
    tagline: 'İstihdam teşvikleri ve sosyal güvenlik müşavirliği',
    summary:
      'SGK istihdam teşviklerinden eksiksiz yararlanmanızı sağlar, sosyal güvenlik ve iş hukuku süreçlerinizi uçtan uca yönetiriz.',
    intro:
      'Maliye ve SGK mevzuatına hakim uzman kadromuzla; istihdam teşviklerinin tespiti, başvurusu ve takibinden iş hukuku müşavirliğine kadar tüm sosyal güvenlik süreçlerinizde yanınızdayız. Geriye dönük teşvik haklarınızı analiz eder, prim maliyetlerinizi yasal çerçevede en aza indiririz.',
    items: [
      { name: 'SGK İstihdam Teşvikleri', desc: 'Yararlanabileceğiniz tüm teşviklerin tespiti, başvurusu ve geriye dönük hak edişlerin kazanılması.' },
      { name: 'Sosyal Güvenlik Müşavirliği', desc: 'Bildirge, işe giriş–çıkış ve SGK mevzuat süreçlerinin profesyonel yönetimi.' },
      { name: 'SGK İnceleme Danışmanlığı', desc: 'SGK denetim ve inceleme süreçlerinde uzman temsil ve danışmanlık.' },
      { name: 'İstihdam Maliyet Yönetimi', desc: 'Personel maliyetlerinin analizi ve teşviklerle optimize edilmesi.' },
      { name: 'İş Hukuku Müşavirliği', desc: 'İş sözleşmeleri, fesih süreçleri ve iş hukuku uyumunda danışmanlık.' },
      { name: 'Emeklilik İşlemleri', desc: 'Emeklilik hesaplama ve başvuru süreçlerinin yürütülmesi.' },
    ],
  },
  {
    slug: 'vergi',
    icon: IconChart,
    title: 'Vergi Hizmetleri',
    tagline: 'Vergi planlama, tam tasdik ve inceleme danışmanlığı',
    summary:
      'Vergi yükünüzü yasal sınırlar içinde optimize eder, tam tasdik ve inceleme süreçlerinde Yeminli Mali Müşavir güvencesi sunarız.',
    intro:
      'Maliye Bakanlığı’nda uzun yıllar vergi müfettişi, idareci ve inceleme koordinatörü olarak görev yapmış uzmanlarımızla, işletmenizin vergi süreçlerini risksiz ve avantajlı şekilde yönetiyoruz.',
    items: [
      {
        name: 'Vergi Planlama Danışmanlığı',
        desc: 'Vergi planlaması; işletmelerin tüm vergi kanunları ve mevzuatın sağladığı imkânlar dahilinde vergi yükünün yasal çerçevede optimize edilmesidir. Sürekli mevzuat desteği, finansal uygulamaların vergi maliyeti analizi, uygun istisna/indirim/muafiyetlerin tespiti, risk analizi ve uluslararası vergi planlama danışmanlığı sunuyoruz.',
      },
      {
        name: 'Kurumlar Vergisi Tam Tasdik, Denetim ve Danışmanlık',
        desc: 'Yeminli Mali Müşavirlerimizce hesap ve mali tablolarınız vergisel doğruluk ve uygunluk açısından denetlenir. Geçici vergi dönemlerinde fiili denetim, mevzuata uygunluk değerlendirmesi, defter ve mali tablo kontrolü, beyanname doğruluğunun teyidi ve tam tasdik raporunun düzenlenmesi kapsanır.',
      },
      {
        name: 'Vergi İnceleme Danışmanlığı',
        desc: '213 sayılı VUK uyarınca yürütülen vergi incelemelerinin her aşamasında danışmanlık veriyoruz. İncelemeye katılım, yasal hakların savunulması, tutanak ve uzlaşma süreçlerinin yönetimi ile sürecin hakkaniyetli ve hızlı sonuçlanmasını sağlıyoruz.',
      },
    ],
  },
  {
    slug: 'devlet-tesvik-destek-hibe',
    icon: IconLayers,
    title: 'Devlet Teşvik, Destek ve Hibeleri',
    tagline: 'KOSGEB, TÜBİTAK, Ticaret & Sanayi Bakanlığı destekleri',
    summary:
      'KOSGEB, TÜBİTAK, Ticaret ve Sanayi Bakanlığı, Kalkınma Ajansı ve AB programları dahil tüm devlet destek ve hibelerine erişiminizi sağlarız.',
    intro:
      'İşletmenizin uygun olduğu ulusal ve uluslararası destek, teşvik ve hibe programlarını tespit eder; başvuru, proje hazırlama ve takip süreçlerini uçtan uca yönetiriz.',
    items: [
      { name: 'KOSGEB Teşvik ve Hibeleri', desc: 'Girişimcilik, Ar-Ge/Ür-Ge, işletme geliştirme ve finansman destek programları.' },
      { name: 'Ticaret Bakanlığı Destekleri', desc: 'İhracat, e-ihracat, hizmet sektörü ve yurt dışı teknik müşavirlik destekleri.' },
      { name: 'TÜBİTAK Destekleri', desc: 'Sanayi Ar-Ge, KOBİ Ar-Ge, üniversite-sanayi iş birliği ve patent destek programları.' },
      { name: 'Sanayi ve Teknoloji Bakanlığı Destekleri', desc: 'Yatırım Teşvik Sistemi: KDV istisnası, vergi indirimi, SGK prim desteği ve daha fazlası.' },
      { name: 'TURQUALITY', desc: 'Marka ve markalaşma desteği programı danışmanlığı.' },
      { name: 'Kalkınma Ajansı Destekleri', desc: 'Bölgesel kalkınma ve proje bazlı hibe programları.' },
      { name: 'Ar-Ge ve Ür-Ge Danışmanlığı', desc: '5746 ve 4691 sayılı kanunlar kapsamında Ar-Ge/Tasarım merkezi ve TGB süreçleri.' },
      { name: 'İŞKUR İşbaşı Eğitim Programları', desc: 'İşbaşı eğitim ve istihdam destek programları.' },
      { name: 'Ustalık Telafi Programı', desc: 'Mesleki yeterlilik ve ustalık telafi destekleri.' },
      { name: 'Avrupa Birliği Hibe ve Teşvik Programları', desc: 'AB fonlu hibe ve teşvik programlarına başvuru danışmanlığı.' },
      { name: 'KGF Destek Kredileri', desc: 'Kredi Garanti Fonu kefaletli finansman çözümleri.' },
      { name: 'GES ve RES Yatırım Teşvikleri', desc: 'Güneş ve rüzgâr enerjisi yatırımlarına yönelik teşvik danışmanlığı.' },
    ],
    groups: [
      {
        title: 'Sanayi ve Teknoloji Bakanlığı — Yatırım Teşvik Sistemi',
        list: [
          'KDV İstisnası', 'Gümrük Vergisi Muafiyeti', 'Vergi İndirimi',
          'Sigorta Primi İşveren Payı Desteği', 'Sigorta Primi İşçi Payı Desteği',
          'Faiz veya Kâr Payı Desteği', 'Yatırım Yeri Tahsisi', 'KDV İadesi',
        ],
      },
      {
        title: 'TÜBİTAK Destek Programları',
        list: [
          'Sanayi Ar-Ge Projeleri Destekleme Programı',
          'Proje Pazarları Destekleme Programı',
          'Üniversite-Sanayi İşbirliği Destek Programı',
          'KOBİ Ar-Ge Başlangıç Destek Programı',
          'Girişimcilik Destek Programı',
          'Teknoloji Transfer Ofisleri Destekleme Programı',
          'Girişim Sermayesi Destekleme Programı',
          'Öncül Ar-Ge Laboratuvarları Destekleme Programı',
          'TÜBİTAK Patent Destek Programı',
        ],
      },
      {
        title: 'Ticaret Bakanlığı Destekleri',
        list: [
          'İhracat Destekleri', 'E-İhracat Destekleri', 'Hizmet Sektörü Destekleri',
          'Yurt Dışı Teknik Müşavirlik Destekleri', 'Turquality',
        ],
      },
      {
        title: 'KOSGEB Teşvik ve Hibeleri',
        list: [
          'Geleneksel Girişimci Destek Programı',
          'İleri Girişimci Destek Programı',
          'İş Planı Ödüllü Destek Programı',
          'Ar-Ge, Ür-Ge ve İnovasyon Destek Programı',
          'KOBİ Teknoyatırım Destek Programı',
          'Stratejik Ürün Destek Programı',
          'İşletme Geliştirme Destek Programı',
          'İş Birliği Destek Programı',
          'KOBİGEL - KOBİ Gelişim Destek Programı',
          'KOBİ Enerji Verimliliği Destek Programı',
          'Yurt Dışı Pazar Destek Programı',
          'KOBİ Finansman Destek Programı',
          'Mikro ve Küçük İşletmelere Hızlı Destek Programı',
        ],
      },
    ],
  },
  {
    slug: 'egitim',
    icon: IconUsers,
    title: 'Eğitim Hizmetleri',
    tagline: 'SGK, vergi, İK ve iş hukuku eğitimleri',
    summary:
      'Kurumunuzun ihtiyaçlarına özel; SGK, vergi, insan kaynakları ve iş hukuku alanlarında uzman eğitim programları sunarız.',
    intro:
      'Mevzuata hakim uzman kadromuzla, ekiplerinizin güncel mevzuat ve uygulama bilgisini güçlendiren kurumsal eğitim programları düzenliyoruz.',
    items: [
      { name: 'SGK Mevzuatı Eğitimleri', desc: 'Güncel SGK mevzuatı ve uygulama eğitimleri.' },
      { name: 'Vergi Mevzuat Eğitimleri', desc: 'Vergi kanunları ve uygulamaları üzerine eğitimler.' },
      { name: 'İnsan Kaynakları Eğitimleri', desc: 'İK süreçleri, bordro ve özlük yönetimi eğitimleri.' },
      { name: 'İş Hukuku Eğitimleri', desc: 'İş hukuku mevzuatı ve uygulama eğitimleri.' },
    ],
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
