import { ScholarData } from '../types';

export const SCHOLARS_DATA: ScholarData[] = [
  {
    id: 'ahmed-yesevi',
    number: 1,
    name: 'Hoca Ahmed Yesevi',
    period: '? – 1166 (12. Yüzyıl)',
    field: 'Tasavvuf / Düşünce / Kültür',
    work: 'Dîvân-ı Hikmet, Fakrnâme, Risâle der Âdâb-ı Tarîkat',
    quote: 'Sakın yalancı olma hem âşık, hem sâdık ol, Hile-hurda işlerden, çirkinlikten uzak ol, "Allâh!" deyip gönlünü saf tutarak, nurla dol...',
    clue1: {
      id: 'clue1',
      type: 'ESER',
      label: 'Eser İpucu',
      badge: 'Eseri',
      text: 'O dönemin hâkim dilleri olan Arapça ve Farsça yerine kendi ana dili olan Türkçeyi kullanarak halkın anlayacağı sade dille yazılan ve "Hikmet" adı verilen şiirlerin yer aldığı Dîvân-ı Hikmet’in müellifidir.'
    },
    clue2: {
      id: 'clue2',
      type: 'DÜŞÜNCE / ÇALIŞMA',
      label: 'Düşünce İpucu',
      badge: 'Düşüncesi',
      text: 'Sayram kasabasında doğup Yesi’de irşat faaliyetlerini sürdüren "Pîr-i Türkistan", sohbetlerinde Allah ve peygamber sevgisini, yetimleri himaye etmeyi ve güzel ahlakı esas almıştır.'
    },
    clue3: {
      id: 'clue3',
      type: 'ETKİ',
      label: 'Etki İpucu',
      badge: 'Medeniyete Katkısı',
      text: 'Yetiştirdiği dervişler (Horasan erenleri); Türkistan, İran, Hindistan, Anadolu ve Balkanlara göç ederek Yunus Emre, Mevlana ve Hacı Bektaş Veli gibi bilgelerin yetişeceği zeminini hazırlamıştır.'
    },
    contribution: 'Türkçenin ilim, aşk ve irfan dili olmasını sağlamış; ahlaki ilkeleri, dayanışmayı ve insan sevgisini temel alan tasavvufi düşünceyi geniş kitlelere ulaştırmıştır.',
    anatoliaImpact: 'Yesevi dervişlerinin batıya göçüyle birlikte Anadolu’da kurulan tekkeler ve zaviyeler, Türkmen boyları arasında toplumsal kaynaşmayı sağlamış ve yeni yerleşimlerin kurulmasına öncülük etmiştir.',
    geography: 'Batı Türkistan’daki Sayram kasabasında doğdu; irşat ve eğitim faaliyetlerini Yesi şehrinde sürdürdü.',
    influence: 'Yetiştirdiği Horasan erenleri Anadolu ve Balkanların İslamlaşmasına öncülük etti; Yunus Emre, Mevlana ve Hacı Bektaş Veli gibi bilgelerin yetişeceği zeminini hazırladı.',
    curatorQuestion: 'Hoca Ahmed Yesevi’nin medeniyet birikimine en önemli katkısı nedir?',
    curatorOptions: [
      'Gökbilim ve matematik alanında Arapça risaleler yazarak medreselerde kuramsal dersler vermesi',
      'Dini ve ahlaki ilkeleri ana dili olan Türkçe ile hikmetler halinde halkın anlayışına sunması',
      'Saray bürokrasisine yönelik Farsça siyasetnameler kaleme alarak devlet teşkilatını düzenlemesi',
      'Eski Yunan felsefesinden çeviriler yaparak mantık kurallarını saray çevresinde yaygınlaştırması'
    ],
    curatorFeedbacks: [
      'Gökbilim ve matematik çalışmaları fen âlimlerinin alanıdır. Bu mutasavvıfın halkın anlayacağı dille ahlaki şiirler (hikmetler) yazdığını dikkate alınız.',
      'Doğru! Dîvân-ı Hikmet ile Türkçeyi bir irfan dili haline getirme başarısını doğru tespit ettiniz.',
      'Bu mutasavvıf saray bürokrasisine değil; geniş halk kitlelerine seslenen irşat ve ahlak eğitimiyle tanınmıştır. Dil ve hitap boyutunu inceleyiniz.',
      'Bu bilge Yunan felsefesi çevirmeni değil; İslam irfanını ana diliyle halkın vicdanında kökleştiren bir pîrdir. İpuçlarındaki dil tercihini gözden geçiriniz.'
    ],
    correctCuratorOption: 1,
    anatoliaQuestion: 'Bu katkının Anadolu’nun imar ve iskân sürecindeki rolünü nasıl değerlendirirsiniz?',
    anatoliaOptions: [
      'Akdeniz limanlarında serbest ticaret bölgeleri kurarak yabancı tüccarlara vergi muafiyeti sağlaması',
      'Anadolu Selçuklu ordusunun başına geçerek Doğu Roma sınırındaki savunma kalelerini doğrudan yönetmesi',
      'Horasan erenlerinin açtığı tekkelerle Türkmen boylarını kaynaştırıp toplumsal dayanışmayı güçlendirmesi',
      'Konya sarayında resmi divan dili olarak yalnızca Farsça ve Arapçanın kullanılmasını zorunlu kılması'
    ],
    anatoliaFeedbacks: [
      'Bu mutasavvıf ticari gümrük politikaları yöneten bir maliyeci değildir. Dervişlerin Anadolu’ya göçündeki toplumsal kaynaşma rolünü düşününüz.',
      'Türkistan sahasında yaşayan bu mutasavvıfın sınır komutanlığı faaliyeti bulunmamaktadır. Anadolu’da kurulan tekkelerin manevi etkisini değerlendiriniz.',
      'Doğru! Yesevi dervişlerinin Anadolu’nun yurt edinilmesindeki kaynaştırıcı rolünü doğru tespit ettiniz.',
      'Yesevi geleneği saray dillerini zorunlu kılmamış; tam tersine Türkçeyi irfan dili yaparak halkı birleştirmiştir. Kültürel kaynaşma boyutuna odaklanınız.'
    ],
    correctAnatoliaOption: 2,
    evidenceQuestion: 'Bu çıkarıma ulaşmanızı sağlayan kanıt hangisidir?',
    evidenceOptions: [
      {
        text: 'Anadolu Selçuklu sultanlarının adına bastırdığı hükümdarlık fermanları ve madeni paralar',
        isCorrect: false,
        explanation: 'Bu mutasavvıfın hükümdar değil, manevi bir yol gösterici olduğunu; adına ferman basılmadığını hatırlayınız.'
      },
      {
        text: 'Dîvân-ı Hikmet’in yalın Türkçesi ve dervişlerinin Anadolu’daki zaviye ve iskân faaliyetleri',
        isCorrect: true,
        explanation: 'Dîvân-ı Hikmet’in Türkçe kaleme alınmış olması ve Yesevi dervişlerinin Anadolu iskânındaki rolü birincil kaynaklarla sabittir.'
      },
      {
        text: 'Doğu Roma imparatoruyla bizzat imzaladığı sınır güvenliği ve ticaret vergisi muahedeleri',
        isCorrect: false,
        explanation: 'Bu mutasavvıfın diplomatik antlaşmalar imzalayan bir elçi değil, manevi önder olduğunu anımsayınız.'
      },
      {
        text: 'İsfahan Rasathanesi’nde yıldızların koordinatlarını gösteren gökbilim cetveli kayıtları',
        isCorrect: false,
        explanation: 'Gözlemevi kayıtlarının astronomi bilginlerine ait olduğunu göz önünde bulundurunuz.'
      }
    ],
    dimensions: {
      bilim: false,
      egitim: true,
      dilVeKultur: true,
      sanat: true,
      dusunce: true,
      islamlasma: true,
      anadoluTurklesmesi: true
    },
    accentColor: '#10b981',
    symbolName: 'Hikmet Meşalesi'
  },
  {
    id: 'kasgarli-mahmud',
    number: 2,
    name: 'Kaşgarlı Mahmud',
    period: 'XI. Yüzyıl',
    field: 'Dil / Kültür / Türkoloji',
    work: 'Dîvânu Lugâti’t-Türk',
    quote: 'Konuya komşuya iyilik et, onlara saygı duy... Damlaya damlaya göl olur; iki kılıç bir kına sığmaz.',
    clue1: {
      id: 'clue1',
      type: 'ESER',
      label: 'Eser İpucu',
      badge: 'Eseri',
      text: '1072-1074 yılları arasında Bağdat’ta kaleme alınan, Türkçenin bilinen ilk sözlüğü ve dilbilgisi çalışması olan anıt eserin müellifidir.'
    },
    clue2: {
      id: 'clue2',
      type: 'DÜŞÜNCE / ÇALIŞMA',
      label: 'Düşünce İpucu',
      badge: 'Düşüncesi',
      text: 'Türk boylarını gezerek "tama tama köl bolur" (damlaya damlaya göl olur) ve "qoş qılıç qınqa sıgmas" (iki kılıç bir kına sığmaz) gibi özgün atasözlerini derlemiş ve ilk Türk dünyası haritasını çizmiştir.'
    },
    clue3: {
      id: 'clue3',
      type: 'ETKİ',
      label: 'Etki İpucu',
      badge: 'Medeniyete Katkısı',
      text: 'Türkçenin dönemin hâkim dili olan Arapça ile boy ölçüşebilecek zenginlikte olduğunu kanıtlayarak milletlerarası saygınlığını belgelemiştir.'
    },
    contribution: 'Dîvânu Lugâti’t-Türk ile Türk dilinin zenginliğini, boy lehçelerini ve özgün atasözlerini (savlar) ilk kez ansiklopedik yöntemle derleyerek Türk dünyası kültür hafızasını korumuştur.',
    anatoliaImpact: 'XI. yüzyılda Anadolu’ya yönelen Türk boylarının ortak söz varlığını, edebiyatını ve atasözlerini koruyarak Anadolu’da Türkçe konuşan toplumların ortak aidiyet bilincini güçlendirmiştir.',
    geography: 'Doğu Türkistan’ın Kaşgar şehrinde doğdu; Türk boylarının yaşadığı bozkırları dolaştıktan sonra eserini sunmak üzere Bağdat’a gitti.',
    influence: 'Türkçenin zenginliğini ilk kez bilimsel metotla ortaya koyarak dünya Türkolojisinin kurucusu oldu; ilk Türk dünyası haritasıyla dil ve kültür hafızasını korudu.',
    curatorQuestion: 'Kaşgarlı Mahmud’un insanlığın ortak mirasına en önemli katkısı nedir?',
    curatorOptions: [
      'Türk dilinin zenginliğini, boy lehçelerini ve özgün atasözlerini ansiklopedik yöntem ve haritayla belgelemesi',
      'İslam dünyasında tıp ve cerrahi yöntemlerini sınıflandırarak anatomi üzerine kapsamlı risaleler yazması',
      'Saray bürokrasisi ve devlet teşkilatını düzenleyen diplomatik muahedeler ve siyasetnameler kaleme alması',
      'Bozkır ordularının savaş ve süvari taktiklerini sistemleştiren askerî talimnameler ve kanunlar hazırlaması'
    ],
    curatorFeedbacks: [
      'Doğru! Dîvânu Lugâti’t-Türk’ün dünya kültür ve dil mirasına sağladığı eşsiz katkıyı doğru belirlediniz.',
      'Tıp ve anatomi risaleleri hekimlerin çalışma alanıdır. Bu bilim insanının dil, kültür ve söz varlığı üzerine yaptığı araştırmaları düşününüz.',
      'Bu bilim insanı bir diplomat veya bürokrat değildir. Türk boylarını gezerek derlediği kelime ve atasözlerini hatırlayınız.',
      'Bu bilim insanı askerî talimnameler yazmamış; dilimizin zenginliğini kanıtlayan ansiklopedik bir sözlük kaleme almıştır. İpuçlarını inceleyiniz.'
    ],
    correctCuratorOption: 0,
    anatoliaQuestion: 'Bu çalışmanın Anadolu sahasındaki yansıması nasıl açıklanabilir?',
    anatoliaOptions: [
      'Akdeniz limanlarında serbest pazar alanları açarak uluslararası ticaret yollarını doğrudan yönetmesi',
      'Doğu Roma sınır boylarında taştan kale ve surlar inşa ettirerek askerî savunma hattını güçlendirmesi',
      'Konya sarayında ve medreselerde Türkçe yerine yalnızca yabancı dillerin kullanılmasını şart koşması',
      'Anadolu’ya yerleşen farklı boyların ortak dil ve atasözleri etrafında kültürel birliğini koruması'
    ],
    anatoliaFeedbacks: [
      'Bu bilim insanı liman ticareti veya gümrük alanında çalışmamıştır. Türk boylarının ortak kültürel ve dilsel mirasına odaklanınız.',
      'Bu bilim insanı kale veya sur inşa eden bir mimar ya da asker değildir. Dilin ve ortak hafızanın toplum üzerindeki etkisini değerlendiriniz.',
      'Bu bilim insanı yabancı dilleri zorunlu kılmamış; tam aksine Türkçenin büyüklüğünü ve zenginliğini savunmuştur. Dil birliği boyutunu düşününüz.',
      'Doğru! Ortak dil ve atasözlerinin Anadolu’daki Türkmen boyları arasındaki kültürel birleştirici etkisini doğru tespit ettiniz.'
    ],
    correctAnatoliaOption: 3,
    evidenceQuestion: 'Bu çıkarıma ulaşmanızı sağlayan kanıt hangisidir?',
    evidenceOptions: [
      {
        text: 'Malazgirt Zaferi sırasında Selçuklu ordusunda süvari birliklerine kumandanlık yaptığını bildiren kitabeler',
        isCorrect: false,
        explanation: 'Bu bilim insanının askerî bir komutan değil, büyük bir dilbilimci ve kültür araştırmacısı olduğunu hatırlayınız.'
      },
      {
        text: 'Konya medreselerinde felsefe müderrisliği yaparak vakıf arazilerini bizzat idare ettiğini gösteren vakfiyeler',
        isCorrect: false,
        explanation: 'Bu bilim insanı eserini Bağdat’ta halifeye sunmuştur; Anadolu’da medrese yöneticiliği yapmamıştır. Eserine ait somut belgelere odaklanınız.'
      },
      {
        text: 'Dîvânu Lugâti’t-Türk’te yer alan boy lehçeleri derlemeleri, özgün atasözleri ve ilk Türk dünyası haritası',
        isCorrect: true,
        explanation: 'Eserdeki 7500’den fazla kelime, atasözleri ve dairevi dünya haritası bu bilimsel başarının somut kanıtıdır.'
      },
      {
        text: 'Saray eğlencelerinde icra edilmek üzere yalnızca lirik şiirler içeren müstakil bir divan kaleme alması',
        isCorrect: false,
        explanation: 'Bu bilim insanının eserinin bir şiir mecmuası değil, ilk Türkçe sözlük ve kapsamlı bir kültür ansiklopedisi olduğunu anımsayınız.'
      }
    ],
    dimensions: {
      bilim: true,
      egitim: true,
      dilVeKultur: true,
      sanat: false,
      dusunce: true,
      islamlasma: false,
      anadoluTurklesmesi: true
    },
    accentColor: '#3b82f6',
    symbolName: 'Lugat ve Harita'
  },
  {
    id: 'omer-hayyam',
    number: 3,
    name: 'Ömer Hayyam',
    period: '1039? – 1123? (11. - 12. Yüzyıl)',
    field: 'Matematik / Astronomi / Düşünce',
    work: 'Zîc-i Melikşahî, Celali Takvimi, Cebir Risalesi, Rubailer',
    quote: 'Ey aymaz! Gördüğün bu beden bir hiçtir, Şu şatafatlı gökkubbe de bir hiçtir. Hoş ol ki bu Kurulup-Dağılma Yurdu’nda: Bir nefestir alacağın, o da hiçtir.',
    clue1: {
      id: 'clue1',
      type: 'ESER',
      label: 'Eser İpucu',
      badge: 'Eseri',
      text: 'Cebirsel denklemleri 25 ayrı türe ayırmış; 3. dereceden kübik denklemleri koni kesitleri yardımıyla çözmüş ve Sultan Melikşah için Celali Takvimi ile Zîc-i Melikşahî’yi hazırlamıştır.'
    },
    clue2: {
      id: 'clue2',
      type: 'DÜŞÜNCE / ÇALIŞMA',
      label: 'Düşünce İpucu',
      badge: 'Düşüncesi',
      text: 'İsfahan Gözlemevi’ni yönetmiş, denklemleri 25 sınıfa ayırarak geometrik yöntemle çözmüş ve Descartes’tan asırlar önce koordinat sisteminin temellerini kurmuştur.'
    },
    clue3: {
      id: 'clue3',
      type: 'ETKİ',
      label: 'Etki İpucu',
      badge: 'Medeniyete Katkısı',
      text: 'Matematikte analitik geometrinin temellerini atmış; felsefede İbn Sina ekolünü izleyerek yazdığı rubailerle Doğu ve Batı edebiyatını derinden etkilemiştir.'
    },
    contribution: 'Denklemleri 25 sınıfa ayırıp 3. derece denklemleri koni kesitleriyle çözerek analitik geometriye öncülük etmiş; gökbilimde ise hatasız Celali Takvimi’ni geliştirmiştir.',
    anatoliaImpact: 'Büyük Selçuklu Devleti’nde kurduğu rasathane ve cebir geleneği, Anadolu Selçuklu medreselerindeki akli ilimler ve astronomi müfredatına doğrudan kaynaklık etmiştir.',
    geography: 'Horasan’ın Nişabur şehrinde doğdu ve yaşadı; Büyük Selçuklu Devleti başkenti İsfahan ve Merv’de bilimsel çalışmalar yaptı.',
    influence: 'İsfahan’da kurduğu rasathanede Celali Takvimi’ni hazırladı; analitik geometride koni kesitleri yöntemiyle Batı’da Descartes’a kadar aşılamayan cebirsel yeniliklere imza attı.',
    curatorQuestion: 'Ömer Hayyam’ın bilim mirasına yaptığı en belirgin katkı nedir?',
    curatorOptions: [
      'Tasavvufi tekkeler açarak dervişlerin terbiyesi için ahlaki öğütler içeren ilmihal risaleleri kaleme alması',
      'Kuşatma savaşlarında kullanılmak üzere yüksek menzilli mancınıklar ve yeni istihkâm sistemleri geliştirmesi',
      'Üçüncü derece denklemleri koni kesitleriyle çözerek geometriye öncülük etmesi ve Celali Takvimi’ni hazırlaması',
      'Kervan yollarının güvenliğini sağlamak amacıyla posta menzil teşkilatını ve gümrük nizamnamesini kurması'
    ],
    curatorFeedbacks: [
      'Bu bilim insanı rubaileriyle tanınmakla birlikte; dünya bilim mirasına matematik ve gökbilim alanında çığır açıcı yenilikler kazandırmıştır. İpuçlarını inceleyiniz.',
      'Bu bilim insanı kuşatma silahları değil; kuramsal matematik, cebir ve takvim bilimi üzerine yoğunlaşmıştır. İpuçlarındaki cebirsel yöntemleri anımsayınız.',
      'Doğru! Kübik denklemleri koni kesitleriyle çözme ve Celali Takvimi’ni geliştirme katkısını başarıyla belirlediniz.',
      'Posta teşkilatı devlet idaresinin bir kurumudur. Bu bilim insanının rasathane ve cebir risalelerindeki buluşlarını göz önünde bulundurunuz.'
    ],
    correctCuratorOption: 2,
    anatoliaQuestion: 'Bu bilimsel birikimin Selçuklu coğrafyasına etkisi nasıl özetlenebilir?',
    anatoliaOptions: [
      'Bozkır tarımının tamamen terk edilerek tüm toplumun yalnızca Akdeniz liman ticaretine yönlendirilmesi',
      'İsfahan’daki rasathane ve cebir birikiminin Anadolu medreselerindeki akli ilimler eğitimini zenginleştirmesi',
      'Geliştirilen takvim ve gökbilim cetvellerinin medreseler yerine yalnızca saray bürokrasisine hapsedilmesi',
      'Medrese müfredatında fen bilimlerinin tamamen kaldırılarak sadece dilbilgisi kurallarının okutulması'
    ],
    anatoliaFeedbacks: [
      'Bilimsel gelişmeler üretimi durdurmaz; takvim çalışmaları zamanlamayı düzenler. Medreselerdeki akli ilimler eğitimine odaklanınız.',
      'Doğru! Selçuklu rasathane geleneğinin Anadolu medreselerindeki matematik ve astronomi müfredatına katkısını doğru tespit ettiniz.',
      'Geliştirilen takvim ve bilimsel bilgiler saraya hapsedilmemiş, medreseler yoluyla geniş bir eğitim ağına yayılmıştır. Eğitime olan katkıyı değerlendiriniz.',
      'Selçuklu medreselerinde akli ilimler ve nakli ilimler birlikte okutulmuştur. Medreselerdeki fen bilimleri etkisini düşününüz.'
    ],
    correctAnatoliaOption: 1,
    evidenceQuestion: 'Bu çıkarıma ulaşmanızı sağlayan kanıt hangisidir?',
    evidenceOptions: [
      {
        text: 'Cebir Risalesi nüshaları, Zîc-i Melikşahî yıldız koordinat tabloları ve Celali Takvimi kayıtları',
        isCorrect: true,
        explanation: 'Hayyam’ın kübik denklemleri koni kesitleriyle çözdüğü Cebir Risalesi ve hazırladığı Zîc-i Melikşahî bilim tarihindeki somut belgelerdir.'
      },
      {
        text: 'Doğu Roma İmparatorluğu ile Selçuklu ordusu arasında imzalanan sınır güvenliği ve ittifak muahedeleri',
        isCorrect: false,
        explanation: 'Bu bilim insanının bir devlet başkanı veya elçi değil, bilgin ve matematikçi olduğunu hatırlayınız.'
      },
      {
        text: 'Mısır Piramitlerinin restorasyonunda başmühendis sıfatıyla çalıştığını öne süren seyahatname notları',
        isCorrect: false,
        explanation: 'Bu bilim insanının araştırmalarını Selçuklu coğrafyasında (Nişabur, Semerkant, İsfahan) yürüttüğünü anımsayınız.'
      },
      {
        text: 'Dönemin saray meclislerinde yalnızca eğlence kasideleri okuyan bir şair olduğunu iddia eden rivayetler',
        isCorrect: false,
        explanation: 'Bu bilim insanının fen ve felsefe alanındaki derin yetkinliğini ve rasathane çalışmalarını göz önünde bulundurunuz.'
      }
    ],
    dimensions: {
      bilim: true,
      egitim: true,
      dilVeKultur: false,
      sanat: true,
      dusunce: true,
      islamlasma: false,
      anadoluTurklesmesi: false
    },
    accentColor: '#f59e0b',
    symbolName: 'Usturlap ve Cebir'
  },
  {
    id: 'cezeri',
    number: 4,
    name: 'Cezeri (El-Cezerî)',
    period: 'XII. - XIII. Yüzyıl',
    field: 'Bilim / Mühendislik / Sibernetik',
    work: 'el-Câmi‘ Beyne’l-‘İlmi ve’l-‘Ameli’n-Nâfi‘ fî Sınâ‘ati’l-Hiyel (Kitab-ül Hiyel)',
    quote: 'Uygulamaya dökülmeyen her bilgi, doğru ile yanlış arasında asılı kalır.',
    clue1: {
      id: 'clue1',
      type: 'ESER',
      label: 'Eser İpucu',
      badge: 'Eseri',
      text: 'Diyarbakır Artuklu Sarayı’nda 25 yıl başmühendislik yaparak Artuklu Emîri Nâsırüddin Mahmud’un isteğiyle elliden fazla mekanik aracın ayrıntılı çizimlerini içeren Kitab-ül Hiyel’i yazmıştır.'
    },
    clue2: {
      id: 'clue2',
      type: 'DÜŞÜNCE / ÇALIŞMA',
      label: 'Düşünce İpucu',
      badge: 'Düşüncesi',
      text: 'Hava ve su dengesiyle çalışan elliden fazla otomat tasarlamıştır. En ünlü eseri Fil Su Saati’nde; filin sırtındaki kâtip, şahinlerin ağzından düşen bronz toplar ve çan sesleriyle zamanı bildiren kusursuz bir mekanizma kurmuştur.'
    },
    clue3: {
      id: 'clue3',
      type: 'ETKİ',
      label: 'Etki İpucu',
      badge: 'Medeniyete Katkısı',
      text: 'Dönme hareketini doğrusal harekete çeviren krank mili ve kam mekanizmalarını sistemli uygulayarak sibernetik ve robotik biliminin öncüsü kabul edilmiştir.'
    },
    contribution: 'Otomasyon ve hidrolik alanında suyun gücünü mekanik dişlilere aktarmıştır; Fil Su Saati’ndeki kâtip, şahinler, düşen bronz toplar ve çan düzenekleriyle programlanabilir otomatların ilk örneklerini vermiştir.',
    anatoliaImpact: 'Artuklu Devleti döneminde Diyarbakır ve Cizre havzasını ileri mühendislik ve mekanik üretim merkezi haline getirmiş, Anadolu medeniyetinin teknolojik düzeyini sergilemiştir.',
    geography: 'Cizre’de doğdu; Güneydoğu Anadolu’daki Artuklu Devleti sarayında (Âmid/Diyarbakır) 25 yıl başmühendis olarak görev yaptı.',
    influence: 'Mekanik, sibernetik ve robotik biliminin ilk kurucusu oldu; su saatleri ve otomatik makineleriyle Leonardo da Vinci başta olmak üzere modern mühendislik tarihine öncülük etti.',
    curatorQuestion: 'Cezeri’nin dünya teknoloji mirasına kazandırdığı en önemli yenilik nedir?',
    curatorOptions: [
      'Hukuk kurallarını derleyerek kanunnameler yazması',
      'Okyanus aşırı deniz haritaları çizmesi',
      'Yalnızca madenleri altına dönüştürme deneyleri yapması',
      'Krank mili ve otomatlar tasarlayarak sibernetik ve robotik biliminin temellerini kurması'
    ],
    curatorFeedbacks: [
      'Kanunnameler hukukçuların ve vezirlerin alanıdır. Bu bilim insanının mekanik aletler ve su gücüyle çalışan makineler tasarladığını hatırlayınız.',
      'Deniz haritacılığı coğrafyacıların ve kaptanların alanıdır. Bu başmühendisin otomatlar ve saat düzenekleri geliştirdiğini göz önünde bulundurunuz.',
      'Bu bilim insanı simyacı değil; dönme hareketini doğrusal harekete çeviren mekanizmaları kuran bir başmühendistir. İpuçlarını inceleyiniz.',
      'Doğru! Krank mili ve programlanabilir otomatlarla sibernetik ve robotik biliminin temellerini atışını doğru tespit ettiniz.'
    ],
    correctCuratorOption: 3,
    anatoliaQuestion: 'Cezeri’nin Anadolu topraklarındaki bu çalışmaları neyin göstergesidir?',
    anatoliaOptions: [
      'Türk-İslam hâkimiyetindeki Anadolu’nun yüksek teknoloji ve mekanik mühendisliğinde öncü bir merkez olduğunu',
      'Anadolu’da tarım ve zanaatın gerilediğini',
      'Mekanik araçların halk arasında yasaklandığını',
      'Bilimin yalnızca yabancı ülkelerden kopyalandığını'
    ],
    anatoliaFeedbacks: [
      'Doğru! Artuklular döneminde Diyarbakır ve Cizre’nin ileri mühendislik merkezi konumunda olduğunu başarıyla belirlediniz.',
      'Gelişmiş su kaldırma araçları ve makineler aksine üretime ve zanaata katkı sağlamıştır. Anadolu’nun teknolojik düzeyini değerlendiriniz.',
      'Makinelerin yasaklanması söz konusu değildir; sultanların ve toplumun hizmetine sunulmuştur. Bilimsel öncülük boyutunu düşününüz.',
      'Cezeri özgün tasarımlar ve dünyada ilk kez uygulanan krank mili sistemleri geliştirmiştir. Öncü niteliğini dikkate alınız.'
    ],
    correctAnatoliaOption: 0,
    evidenceQuestion: 'Bu çıkarıma ulaşmanızı sağlayan kanıt hangisidir?',
    evidenceOptions: [
      {
        text: 'Diyarbakır surlarını tek başına taş bloklarla ördüğü rivayeti',
        isCorrect: false,
        explanation: 'Bu bilim insanının bir inşaat ustası değil; sarayın başmühendisi, tasarımcısı ve mucidi olduğunu hatırlayınız.'
      },
      {
        text: 'Haçlı ordularına karşı deniz birliklerini yönettiğine dair belgeler',
        isCorrect: false,
        explanation: 'Bu bilim insanının askerî bir komutan değil; mekanik biliminin öncüsü olduğunu anımsayınız.'
      },
      {
        text: 'Yalnızca masal ve destan türünde hikâyeler yazmış olması',
        isCorrect: false,
        explanation: 'Bu bilim insanının eserinin masal değil; bizzat imal edilen araçların ayrıntılı teknik çizimlerini içeren bilimsel bir kitap olduğunu göz önünde bulundurunuz.'
      },
      {
        text: 'Kitab-ül Hiyel’deki elliden fazla aracın ayrıntılı teknik çizimleri ve Fil Su Saati tasarımı',
        isCorrect: true,
        explanation: 'Eserindeki Fil Su Saati, mum saatleri ve krank mili mekanizmalarına ait teknik çizimler birincil kaynak niteliğindedir.'
      }
    ],
    dimensions: {
      bilim: true,
      egitim: true,
      dilVeKultur: false,
      sanat: true,
      dusunce: true,
      islamlasma: false,
      anadoluTurklesmesi: true
    },
    accentColor: '#06b6d4',
    symbolName: 'Mekanik Çark ve Fil Saati'
  },
  {
    id: 'ibnularabi',
    number: 5,
    name: 'Muhyiddin İbnülarabi',
    period: '1165 – 1240 (12. - 13. Yüzyıl)',
    field: 'Tasavvuf / Düşünce / Felsefe',
    work: 'Füsûsu’l-Hikem, el-Fütûhâtü’l-Mekkiyye, Tercümânü’l-Eşvâk',
    quote: 'Câhil olduğunu bilen, sâdece bir defa câhildir; fakat câhil olduğunu bilmeyen ise, iki defa câhildir!',
    clue1: {
      id: 'clue1',
      type: 'ESER',
      label: 'Eser İpucu',
      badge: 'Eseri',
      text: 'Peygamberlerin hikmetlerini anlattığı Füsûsu’l-Hikem’i ve İslam düşünce dünyasının temel kaynaklarından kabul edilen el-Fütûhâtü’l-Mekkiyye’yi kaleme almıştır.'
    },
    clue2: {
      id: 'clue2',
      type: 'DÜŞÜNCE / ÇALIŞMA',
      label: 'Düşünce İpucu',
      badge: 'Düşüncesi',
      text: 'Endülüs’ün Mürsiye (Murcia) şehrinde doğup dinî ilimlerdeki yetkinliği sebebiyle "Muhyiddin" lakabını almış; bilginin değerine vurgu yaparak bilgisizliğe ölüm, bilgili olmaya hayat adını vermiştir.'
    },
    clue3: {
      id: 'clue3',
      type: 'ETKİ',
      label: 'Etki İpucu',
      badge: 'Medeniyete Katkısı',
      text: 'XIII. yüzyıl başlarında Anadolu’ya gelerek Malatya ve Konya’da dersler vermiş, Selçuklu sultanlarıyla iyi ilişkiler kurmuş ve yetiştirdiği talebelerle Anadolu irfanını derinleştirmiştir.'
    },
    contribution: 'İlim ve tefekkür anlayışıyla varoluşu derinlemesine ele almış, cehaletle mücadeleyi ve bilginin erdemini düşünce dünyasının merkezine yerleştirmiştir.',
    anatoliaImpact: 'Malatya ve Konya’da meclisler düzenleyerek Selçuklu ulemasını ve yöneticilerini etkilemiş, yetiştirdiği öğrenciler vasıtasıyla Anadolu’daki felsefi ve irfani geleneğe köklü bir derinlik kazandırmıştır.',
    geography: 'Endülüs’ün Mürsiye (Murcia) şehrinde doğdu; 13. yüzyıl başlarında Anadolu’ya gelerek Malatya ve Konya’da dersler verdi, Şam’da vefat etti.',
    influence: 'Selçuklu sultanlarına yöneticilik tavsiyelerinde bulundu; Sadreddin Konevi ve Davud-i Kayseri gibi talebeleri üzerinden hem Anadolu Selçuklu hem de Osmanlı düşünce dünyasını derinden şekillendirdi.',
    curatorQuestion: 'İbnülarabi’nin düşünce dünyasına kazandırdığı temel yaklaşım nedir?',
    curatorOptions: [
      'Deniz ticareti için gümrük vergisi cetvelleri hazırlaması',
      'Bilginin hayat, cehaletin ölüm olduğunu belirterek ilim ve tefekkür merkezli bir anlayış inşa etmesi',
      'Yalnızca temel dört işlem hesaplamaları yapması',
      'Kale kuşatmaları için mancınıklar geliştirmesi'
    ],
    curatorFeedbacks: [
      'Gümrük vergileri maliye ve ticaret memurlarının alanıdır. Bu mutasavvıfın bilgi, varlık ve tefekkür üzerine derin eserler verdiğini hatırlayınız.',
      'Doğru! İlim ve tefekkürü düşünce dünyasının merkezine alan irfani yaklaşımı doğru belirlediniz.',
      'Dört işlem temel aritmetiktir; oysa bu mutasavvıf felsefe, metafizik ve varlık anlayışı üzerine yüzlerce eser vermiştir. İpuçlarını inceleyiniz.',
      'Mancınık askerî bir silahtır. Bu mutasavvıfın fikirleri, talebeleri ve yazılı mirasını göz önünde bulundurunuz.'
    ],
    correctCuratorOption: 1,
    anatoliaQuestion: 'İbnülarabi’nin Anadolu’daki faaliyetlerinin kültürel etkisi nasıl açıklanabilir?',
    anatoliaOptions: [
      'Tarım vergilerinin iki katına çıkarılmasını sağlaması',
      'Konya’daki tüm kütüphanelerin kapatılmasını emretmesi',
      'Malatya ve Konya’da talebeler yetiştirip yöneticilere tavsiyelerde bulunarak Anadolu düşünce hayatına derinlik kazandırması',
      'Yalnızca yabancı tüccarlara imtiyaz verilmesini savunması'
    ],
    anatoliaFeedbacks: [
      'Bu mutasavvıf vergi toplayan bir maliyeci değildir. Malatya ve Konya’da verdiği derslerin düşünce hayatına etkisini düşününüz.',
      'Bilgiye hayat diyen bir mutasavvıf kütüphaneleri kapatmaz; tam aksine ilmi meclisleri zenginleştirmiştir. İlim geleneğine odaklanınız.',
      'Doğru! Sadreddin Konevi gibi talebeleriyle Anadolu ve Osmanlı tefekkürüne kazandırdığı derinliği başarıyla tespit ettiniz.',
      'Bu mutasavvıf ticaret politikalarıyla değil, ahlak, ilim ve yöneticilere adalet tavsiyeleriyle öne çıkmıştır. Düşünce boyutunu değerlendiriniz.'
    ],
    correctAnatoliaOption: 2,
    evidenceQuestion: 'Bu çıkarıma ulaşmanızı sağlayan kanıt hangisidir?',
    evidenceOptions: [
      {
        text: 'Roma Kolezyumu’nda felsefe dersleri verdiğine dair Batı kayıtları',
        isCorrect: false,
        explanation: 'Bu mutasavvıfın Endülüs, Hicaz, Şam ve Anadolu’da (Malatya-Konya) dersler verdiğini hatırlayınız.'
      },
      {
        text: 'Fütûhât-ı Mekkiyye’deki ilim tahlilleri ve Selçuklu sultanlarıyla mektuplaşarak Konya’da talebe yetiştirmesi',
        isCorrect: true,
        explanation: 'Eserlerindeki metinler ve Selçuklu sultanlarıyla olan mektuplaşmaları, onun Anadolu’daki düşünce etkisinin somut kanıtıdır.'
      },
      {
        text: 'Selçuklu ordusunun başkumandanı sıfatıyla sefere katılması',
        isCorrect: false,
        explanation: 'Bu mutasavvıfın askerî kumandan değil, manevi bir önder ve mütefekkir olduğunu göz önünde bulundurunuz.'
      },
      {
        text: 'Sadece İspanyolca eserler verip Doğu dillerini reddetmesi',
        isCorrect: false,
        explanation: 'Bu mutasavvıfın eserlerini dönemin ortak ilim dili olan Arapça ile yazdığını ve İslam coğrafyasında dersler verdiğini anımsayınız.'
      }
    ],
    dimensions: {
      bilim: false,
      egitim: true,
      dilVeKultur: false,
      sanat: false,
      dusunce: true,
      islamlasma: true,
      anadoluTurklesmesi: true
    },
    accentColor: '#8b5cf6',
    symbolName: 'Hikmet Parşömeni'
  },
  {
    id: 'mevlana',
    number: 6,
    name: 'Mevlana Celaleddin Rumi',
    period: '1207 – 1273 (13. Yüzyıl)',
    field: 'Tasavvuf / Edebiyat / Düşünce',
    work: 'Mesnevi, Divan-ı Kebir, Fihi Ma Fih, Mecalis-i Seb’a',
    quote: 'Biz pergel gibiyiz. Bir ayağımız din üzerinde sağlamca durur, öteki ayağımız yetmiş iki milleti dolaşır.',
    clue1: {
      id: 'clue1',
      type: 'ESER',
      label: 'Eser İpucu',
      badge: 'Eseri',
      text: 'Konya’da kaleme alınan Mesnevi, Divan-ı Kebir, Fihi Ma Fih ve Mecalis-i Seb’a gibi edebî ve irfani şaheserlerin müellifidir.'
    },
    clue2: {
      id: 'clue2',
      type: 'DÜŞÜNCE / ÇALIŞMA',
      label: 'Düşünce İpucu',
      badge: 'Düşüncesi',
      text: 'Horasan’ın Belh şehrinde doğmuş; düşüncelerini Kur’an ve sünnete dayandırarak Allah ve peygamber sevgisinin yanı sıra evrensel insan sevgisini ve hoşgörüyü savunmuştur.'
    },
    clue3: {
      id: 'clue3',
      type: 'ETKİ',
      label: 'Etki İpucu',
      badge: 'Medeniyete Katkısı',
      text: 'Vefat gününü "şeb-i arûs" (düğün gecesi) olarak adlandırmış; doğumunun 800. yılı olan 2007 yılı UNESCO tarafından "Mevlana ve Hoşgörü Yılı" ilan edilmiştir.'
    },
    contribution: 'İyiliği, adaleti, hoşgörüyü ve birlik çağrısını şiir ve hikmetle dile getirerek tüm insanlığı kucaklayan evrensel bir ahlak mirası bırakmıştır.',
    anatoliaImpact: 'Türkiye Selçuklu Devleti’nin Moğol istilasıyla zayıfladığı zorlu devirde Anadolu halkına moral, umut ve dayanma gücü vermiş; Konya’yı manevi ve kültürel bir çekim merkezine dönüştürmüştür.',
    geography: 'Horasan’ın Belh şehrinde doğdu; ailesiyle Anadolu’ya göç ederek Türkiye Selçuklularının başkenti Konya’ya yerleşti.',
    influence: 'Moğol istilası ve Haçlı saldırılarıyla sarsılan Anadolu halkına manevi birlik ve direnç aşıladı; hoşgörü ve sevgi anlayışıyla 2007 yılında UNESCO tarafından dünya çapında anıldı.',
    curatorQuestion: 'Mevlana’nın evrensel kültür mirasına yaptığı en temel katkı nedir?',
    curatorOptions: [
      'Yalnızca saray protokol kurallarını düzenlemesi',
      'Matematiksel logaritma tabloları hazırlaması',
      'Kur’an ve sünnete dayalı birlik, sevgi ve hoşgörü çağrısıyla insanları ortak ahlaki değerlerde buluşturması',
      'Ticari kervan filoları donatması'
    ],
    curatorFeedbacks: [
      'Bu mutasavvıfın etkisi dar bir saray protokolüyle sınırlı kalmamış; her kesimden insanı kucaklayan evrensel bir ahlak ve hoşgörü çağrısı yapmıştır. İpuçlarındaki düşünce ve eser boyutlarını yeniden inceleyiniz.',
      'Bu mutasavvıf fen ve matematik alanından ziyade; edebiyat, şiir ve tasavvufi düşünce yoluyla gönüllere hitap etmiştir. Eserlerini ve manevi mirasını dikkate alınız.',
      'Doğru! Mesnevi ve Divan-ı Kebir ile insanlığı ortak ahlaki değerlerde buluşturma misyonunu doğru tespit ettiniz.',
      'Bu mutasavvıf tüccarlık değil; insanları manevi ve ahlaki değerler etrafında birleştiren bir fikir önderliği yapmıştır. İpuçlarındaki sevgi ve hoşgörü anlayışına odaklanınız.'
    ],
    correctCuratorOption: 2,
    anatoliaQuestion: 'Mevlana’nın öğretilerinin Anadolu toplumuna sağladığı en belirgin katkı nedir?',
    anatoliaOptions: [
      'Moğol istilasının yarattığı siyasi ve sosyal buhran döneminde halka umut ve dayanma gücü aşılayarak toplumsal birliği koruması',
      'Şehirlerin etrafına hendekler kazdırarak ticareti durdurması',
      'Yalnızca Konya halkıyla iletişim kurup diğer şehirleri ihmal etmesi',
      'Doğu Roma tüccarlarının dükkânlarını kapatmasını emretmesi'
    ],
    anatoliaFeedbacks: [
      'Doğru! Buhran döneminde Anadolu halkına aşıladığı moral ve dayanma gücünü başarıyla belirlediniz.',
      'Bu mutasavvıf askerî savunma inşaatları yapmak yerine, insanları manevi açıdan güçlendirip teselli etmiştir. Topluma nasıl moral verdiğini düşününüz.',
      'Bu mutasavvıfın fikirleri ve eserleri sadece Konya ile sınırlı kalmamış, tüm Anadolu ve İslam dünyasında derin yankı uyandırmıştır. Ulaştığı geniş etki alanını değerlendiriniz.',
      'Bu bilge hiçbir zaman ticari yasaklamalar getiren bir yönetici olmamış; ayrım gözetmeksizin herkese adalet ve hoşgörüyle yaklaşmıştır. Sevgi merkezli yaklaşımını göz önünde bulundurunuz.'
    ],
    correctAnatoliaOption: 0,
    evidenceQuestion: 'Bu çıkarıma ulaşmanızı sağlayan kanıt hangisidir?',
    evidenceOptions: [
      {
        text: 'Moğol ordusuna karşı kılıç kuşanıp süvari ordusu komutanlığı yapması',
        isCorrect: false,
        explanation: 'Bu mutasavvıfın kılıçla savaşan bir askerî komutan değil; sözleri ve eserleriyle gönülleri fetheden manevi bir bilge olduğunu hatırlayınız.'
      },
      {
        text: 'Yalnızca astronomi rasathaneleri inşa ettirdiğini gösteren belgeler',
        isCorrect: false,
        explanation: 'Gözlemevi kayıtlarının gökbilimcilerine ait olduğunu; bu mutasavvıfın ise tasavvufi eserleriyle tanındığını anımsayınız.'
      },
      {
        text: 'Mesnevi’deki birleştirici öğütler, Şeb-i Arûs anlayışı ve 2007 UNESCO Mevlana ve Hoşgörü Yılı kararı',
        isCorrect: true,
        explanation: 'Mesnevi’deki öğütler ve UNESCO’nun 2007 kararı bu evrensel etkinin somut kanıtıdır.'
      },
      {
        text: 'Anadolu dışındaki coğrafyaları hiç tanımayan yerel bir köylü olması',
        isCorrect: false,
        explanation: 'Bu mutasavvıfın Belh’ten Şam’a ve Anadolu’ya uzanan geniş bir medeniyet havzasında yetişmiş evrensel bir mütefekkir olduğunu göz önünde bulundurunuz.'
      }
    ],
    dimensions: {
      bilim: false,
      egitim: true,
      dilVeKultur: true,
      sanat: true,
      dusunce: true,
      islamlasma: true,
      anadoluTurklesmesi: true
    },
    accentColor: '#14b8a6',
    symbolName: 'Semazen ve Ney'
  },
  {
    id: 'haci-bektas',
    number: 7,
    name: 'Hacı Bektaş Veli',
    period: 'XIII. Yüzyıl',
    field: 'Tasavvuf / Kültür / Toplumsal Barış',
    work: 'Makâlât, Kitâbü’l-Fevâid, Fatiha Tefsiri, Vilâyetnâme',
    quote: 'Sevgi muhabbeti kaynar yanan ocağımızda, Bülbüller şevkle gelir, gül açar bağımızda, Hırslar, kinler yok olur aşkla meydanımızda, Arslanlar, ceylanlar dosttur kucağımızda.',
    clue1: {
      id: 'clue1',
      type: 'ESER',
      label: 'Eser İpucu',
      badge: 'Eseri',
      text: 'Ahlaki nefis terbiyesini anlattığı Makâlât, Kitâbü’l-Fevâid ve Fatiha Sûresi Tefsiri gibi eserleriyle ve hakkında yazılan Vilâyetnâme ile tanınan mutasavvıftır.'
    },
    clue2: {
      id: 'clue2',
      type: 'DÜŞÜNCE / ÇALIŞMA',
      label: 'Düşünce İpucu',
      badge: 'Düşüncesi',
      text: 'Horasan’dan gelerek Suluca Karahöyük’te halkı aydınlatmış; Makâlât eserinde kalbin yedi kalesini koruyan yedi muhafızı (ilim, cömertlik, hayâ, sabır, perhizkârlık, korku ve edep) ahlakın temeli saymıştır.'
    },
    clue3: {
      id: 'clue3',
      type: 'ETKİ',
      label: 'Etki İpucu',
      badge: 'Medeniyete Katkısı',
      text: 'Dervişleri Anadolu ve Balkanlarda Bektaşilik anlayışını yaymış; vefatından sonra kurulan Osmanlı Devleti’nde Yeniçeri Ocağının piri kabul edilmiştir.'
    },
    contribution: 'Makâlât eserinde kalbin yedi kalesini koruyan yedi muhafız (ilim, cömertlik, hayâ, sabır, perhizkârlık, korku, edep) alegorisiyle erdemli ve birleştirici bir insan modeli inşa etmiştir.',
    anatoliaImpact: 'Türkiye Selçuklu Devleti’nin zayıfladığı dönemde göçebe ve yerleşik Türkmenleri irşat ederek toplumsal direnç kazandırmış, Balkanlar ve Anadolu’da kaynaşmayı sağlamıştır.',
    geography: 'Horasan’ın Nişabur şehrinde doğdu; Anadolu’ya gelerek Nevşehir civarındaki Suluca Karahöyük’e (Hacımköy) yerleşti.',
    influence: 'Selçuklu’nun zayıfladığı dönemde Anadolu Türkmenlerini kaynaştırdı, esnaf ve Ahilik teşkilatını destekledi; dervişleri Balkanları aydınlatırken Osmanlı’da Yeniçeri Ocağının pîri kabul edildi.',
    curatorQuestion: 'Hacı Bektaş Veli’nin toplumsal hayata kazandırdığı en belirgin ilke nedir?',
    curatorOptions: [
      'Sevgi, hoşgörü, edep ve kardeşlik anlayışıyla farklı toplumsal kesimleri barış içinde birleştirmesi',
      'Deniz aşırı baharat ticareti filoları kurması',
      'Astrolojik burç yorumları kaleme alması',
      'Doğu Roma kiliselerinin mimari restorasyonunu yapması'
    ],
    curatorFeedbacks: [
      'Doğru! "Bir olalım, iri olalım, diri olalım" anlayışıyla toplumsal barış ve kardeşliğe yaptığı katkıyı başarıyla belirlediniz.',
      'Baharat filoları deniz tüccarlarının alanıdır. Bu mutasavvıfın Nevşehir Karahöyük’teki zaviyesinde halkı irşat ettiğini hatırlayınız.',
      'Bu mutasavvıf astrolojiyle değil; ahlaki olgunlaşma, nefis terbiyesi ve edep ilkeleriyle topluma rehberlik etmiştir. İpuçlarındaki ilkeleri inceleyiniz.',
      'Bu bilge bir mimar veya restoratör değildir. Türkmen boylarını kardeşlik ve ahlak ilkeleri etrafında birleştiren rolünü dikkate alınız.'
    ],
    correctCuratorOption: 0,
    anatoliaQuestion: 'Hacı Bektaş Veli’nin öğretileri Anadolu ve Balkan coğrafyasını nasıl etkilemiştir?',
    anatoliaOptions: [
      'Boylar arası çatışmaları artırması',
      'Halkı yalnızca göçebe kalmaya zorlaması',
      'Yalnızca yabancı dilde eğitim verilmesini şart koşması',
      'Yetiştirdiği dervişlerin Anadolu ve Balkanlarda barış ve adalet temelinde iskân hareketlerine rehberlik etmesi'
    ],
    anatoliaFeedbacks: [
      'Bu mutasavvıfın öğretileri ayrılıkları değil; tam tersine birlik, dayanışma ve kaynaşmayı esas almıştır. Hoşgörü ve barış boyutunu düşününüz.',
      'Karahöyük’teki tekke yerleşik hayatı, tarımı ve üretimi teşvik etmiştir. Toplumsal düzen ve iskân hareketlerine etkisini değerlendiriniz.',
      'Bu mutasavvıf halkın anlayacağı dille ve Türkçe nefeslerle irşat yapmıştır. Dervişlerin kültür ve iskân faaliyetlerine odaklanınız.',
      'Doğru! Dervişlerin Anadolu ve Balkanların iskân ve imar sürecindeki öncü rolünü doğru tespit ettiniz.'
    ],
    correctAnatoliaOption: 3,
    evidenceQuestion: 'Bu çıkarıma ulaşmanızı sağlayan kanıt hangisidir?',
    evidenceOptions: [
      {
        text: 'Haçlı krallarıyla imzaladığı ticari senetler',
        isCorrect: false,
        explanation: 'Bu mutasavvıfın tüccar veya diplomat değil, Anadolu’da halkı irşat eden manevi bir mürşit olduğunu anımsayınız.'
      },
      {
        text: 'Makâlât’taki edep ve ahlak ilkeleri, Suluca Karahöyük zaviyesi ve Vilâyetnâme’deki tarihi kayıtlar',
        isCorrect: true,
        explanation: 'Makâlât eseri ve XV. yüzyılda kaleme alınan Vilâyetnâme, onun Anadolu ve Balkanlardaki etkisini belgeleyen birincil kaynaklardır.'
      },
      {
        text: 'Moğol ordusuna vergi toplayıcılığı yaptığı iddiaları',
        isCorrect: false,
        explanation: 'Bu bilgenin vergi memuru değil; Moğol baskısı altındaki halkın maneviyatını ve birliğini koruyan bir önder olduğunu hatırlayınız.'
      },
      {
        text: 'Sadece maden ocaklarında çalışarak münzevi bir hayat yaşaması',
        isCorrect: false,
        explanation: 'Bu mutasavvıfın inzivaya çekilmediğini; zaviyesi ve yetiştirdiği talebeleriyle toplumsal hayatın merkezinde yer aldığını göz önünde bulundurunuz.'
      }
    ],
    dimensions: {
      bilim: false,
      egitim: true,
      dilVeKultur: true,
      sanat: false,
      dusunce: true,
      islamlasma: true,
      anadoluTurklesmesi: true
    },
    accentColor: '#eab308',
    symbolName: 'Güvercin ve Ahilik Meşalesi'
  },
  {
    id: 'yunus-emre',
    number: 8,
    name: 'Yunus Emre',
    period: '1241 – 1321 (13. - 14. Yüzyıl)',
    field: 'Edebiyat / Tasavvuf / Dil / Kültür',
    work: 'Divan, Risaletü’n-Nushiyye',
    quote: 'Gönül Çalab’ın tahtı, Çalap gönüle baktı. İki cihan bedbahtı, kim gönül yıkar ise.',
    clue1: {
      id: 'clue1',
      type: 'ESER',
      label: 'Eser İpucu',
      badge: 'Eseri',
      text: 'Ahlaki öğütler içeren mesnevi tarzındaki "Risaletü’n-Nushiyye" ve halkın arı Türkçesiyle ilahi aşkı anlattığı "Divan"ın sahibidir.'
    },
    clue2: {
      id: 'clue2',
      type: 'DÜŞÜNCE / ÇALIŞMA',
      label: 'Düşünce İpucu',
      badge: 'Düşüncesi',
      text: 'Hoca Ahmed Yesevi’nin tasavvuf öğretisini benimseyerek dönemin edebiyat dili olan Farsça yerine sade Türkçeyi tercih etmiş; alçak gönüllülük, sabır ve cömertliği öne çıkarmıştır.'
    },
    clue3: {
      id: 'clue3',
      type: 'ETKİ',
      label: 'Etki İpucu',
      badge: 'Medeniyete Katkısı',
      text: '"Sen sana ne sanırsan ayruğa da anı san" diyerek tüm insanları sevgi ve kardeşlikte birleştirmiş, Türkçenin Anadolu’da kökleşmesine büyük katkı sağlamıştır.'
    },
    contribution: 'Türkçeyi yüksek bir şiir, edebiyat ve irfan dili haline getirerek evrensel insan sevgisini ve ahlaki olgunluğu halk edebiyatının zirvesine taşımıştır.',
    anatoliaImpact: 'Şiirlerinin Anadolu’nun her köyünde dilden dile söylenmesiyle Türkçenin ortak vicdan ve iletişim dili olmasını sağlamış, Türkmenlerin birlik ve beraberliğini pekiştirmiştir.',
    geography: 'Anadolu’da (Eskişehir Sivrihisar / Sakarya havzası) doğdu ve yaşadı; Tapduk Emre’nin dergâhında olgunlaştı.',
    influence: 'Moğol baskısı altındaki Anadolu Türkmenlerine duru bir Türkçe ile seslenerek toplumsal barışı tazeledi; Türkçenin Anadolu’da kökleşmesini ve millî kimliğin korunmasını sağladı.',
    curatorQuestion: 'Yunus Emre’nin kültür dünyamıza kazandırdığı en büyük değer nedir?',
    curatorOptions: [
      'Askerî savunma planları hazırlaması',
      'Yalnızca saray fermanları kâtipliği yapması',
      'Yabancı tüccarlara para basma imtiyazı vermesi',
      'Türkçeyi yüksek bir sevgi, hoşgörü ve ahlak dili yaparak halkın gönlünde ölümsüzleştirmesi'
    ],
    curatorFeedbacks: [
      'Askerî savunma ordu komutanlarının görevidir. Bu mutasavvıfın duru Türkçeyle yazılan tasavvufi şiirlerini hatırlayınız.',
      'Bu mutasavvıf saray bürokrasisine değil; Anadolu halkına ve gönüllere hitap eden bir halk ozanıdır. Edebi mirasını inceleyiniz.',
      'Para basma devlet hükümdarlarının yetkisindedir. Bu mutasavvıfın dil ve gönül dünyamıza yaptığı katkıyı düşününüz.',
      'Doğru! Türkçeyi duru ve zengin bir irfan dili olarak halkın vicdanında kökleştirme başarısını doğru tespit ettiniz.'
    ],
    correctCuratorOption: 3,
    anatoliaQuestion: 'Yunus Emre’nin Türkçeyi tercih etmesinin Anadolu medeniyeti açısından sonucu nedir?',
    anatoliaOptions: [
      'Halkın edebiyattan tamamen uzaklaşması',
      'Anadolu’da Türkçenin yazı, edebiyat ve kültür dili olarak kökleşip kalıcı hale gelmesi',
      'Yalnızca Latince metinlerin okunmasının zorunlu tutulması',
      'Kervansaraylardaki konaklama ücretlerinin belirlenmesi'
    ],
    anatoliaFeedbacks: [
      'Tam aksine sade Türkçe sayesinde şiirler köy köy, dilden dile dolaşmıştır. Dilin kalıcılığı ve kültürel birlik boyutunu düşününüz.',
      'Doğru! Türkçenin Anadolu’da edebiyat ve kültür dili olarak kalıcı hale geldiğini doğru belirlediniz.',
      'Anadolu’da Latince zorunluluğu hiçbir zaman olmamıştır. Yunus Emre ana dilimiz olan Türkçeyi yüceltmiştir. Millî kültür boyutuna odaklanınız.',
      'Konaklama ücretleri ticari nizamlardır. Bu bilge şairin dil, edebiyat ve ortak kimliğin korunmasına etkisini değerlendiriniz.'
    ],
    correctAnatoliaOption: 1,
    evidenceQuestion: 'Bu çıkarıma ulaşmanızı sağlayan kanıt hangisidir?',
    evidenceOptions: [
      {
        text: 'Divan ve Risaletü’n-Nushiyye’deki arı Türkçe dörtlüklerin yüzyıllardır dilden dile aktarılması',
        isCorrect: true,
        explanation: 'Yunus Emre Divanı’ndaki şiirler ve Risaletü’n-Nushiyye nüshaları, Türkçenin nasıl bir edebiyat dili olduğunu belgeleyen somut kanıtlardır.'
      },
      {
        text: 'Karamanoğlu Mehmet Bey’in ordusunda süvari yüzbaşılığı yaptığı iddiası',
        isCorrect: false,
        explanation: 'Bu mutasavvıfın asker değil; Taptuk Emre ocağında yetişmiş bir gönül şairi ve derviş olduğunu hatırlayınız.'
      },
      {
        text: 'İstanbul surlarını kuşatan donanmada kaptanlık yapması',
        isCorrect: false,
        explanation: 'Bu mutasavvıfın Sakarya ve Orta Anadolu havzasında yaşadığını; deniz donanmasıyla ilgisi bulunmadığını anımsayınız.'
      },
      {
        text: 'Yalnızca mekanik saatler ve usturlaplar imal etmiş olması',
        isCorrect: false,
        explanation: 'Bu bilge şairin fen araçları üreticisi değil, edebiyatımızın ve tasavvufumuzun en büyük ozanlarından olduğunu göz önünde bulundurunuz.'
      }
    ],
    dimensions: {
      bilim: false,
      egitim: true,
      dilVeKultur: true,
      sanat: true,
      dusunce: true,
      islamlasma: true,
      anadoluTurklesmesi: true
    },
    accentColor: '#f97316',
    symbolName: 'Sarı Çiçek ve Şiir Levhası'
  },
  {
    id: 'ibni-bibi',
    number: 9,
    name: 'İbni Bibi (İbn Bîbî)',
    period: 'XIII. Yüzyıl',
    field: 'Tarih / Kültür / Devlet Teşkilatı',
    work: 'el-Evâmirü’l-Alâiyye fi’l-Umûri’l-Alâiyye (Selçuknâme)',
    quote: 'Çalışıp çabalamadan kimseye bir şey vermezler. Zaten kazancın yolu da ancak çalışıp çabalamaktan geçer.',
    clue1: {
      id: 'clue1',
      type: 'ESER',
      label: 'Eser İpucu',
      badge: 'Eseri',
      text: 'Alâeddin Ata Melik Cüveyni’nin isteği üzerine kaleme aldığı ve Türkiye Selçuklu Devleti’nin yaklaşık yüz yıllık tarihini anlatan el-Evâmirü’l-Alâiyye adlı vakayinamenin müellifidir.'
    },
    clue2: {
      id: 'clue2',
      type: 'DÜŞÜNCE / ÇALIŞMA',
      label: 'Düşünce İpucu',
      badge: 'Düşüncesi',
      text: 'I. Alâeddin Keykubad dönemini kapsamlı şekilde ele almış; Türkiye Selçuklularında ikta, mülk ve hibe türü toprak yapısını ilk kez kayda geçirip dadgâh (adalet divanı) işleyişini belgelemiştir.'
    },
    clue3: {
      id: 'clue3',
      type: 'ETKİ',
      label: 'Etki İpucu',
      badge: 'Medeniyete Katkısı',
      text: 'Sultan Gıyaseddin Keyhüsrev’in Antalya fethini ve soyulan tüccarların zararını bizzat devlet hazinesinden ödeyerek tarihteki ilk devlet ticaret sigortası adaletini uygulayışını kaydetmiştir.'
    },
    contribution: 'Türkiye Selçuklularında ikta, mülk ve hibe toprak düzenini ilk kez sınıflandırmış; Antalya’da tüccarların zararını devlet hazinesinden karşılayan adalet nizamını birinci elden günümüze aktarmıştır.',
    anatoliaImpact: 'Selçukluların Anadolu’da kurduğu adalet teşkilatını, ticari güvenceleri ve imar faaliyetlerini belgeleyerek Anadolu’nun bir Türk-İslam yurdu olarak nasıl teşkilatlandığını aydınlatmıştır.',
    geography: 'Nişabur kökenli bir ailede doğdu; Türkiye Selçuklu başkenti Konya’da yetişti ve Selçuklu Dîvânı’nda resmî devlet tarihçisi olarak görev yaptı.',
    influence: 'Türkiye Selçuklularının 1192-1280 arasındaki siyasi, ticari, iskân ve toprak yapısını (ikta, mülk, hibe) birinci elden günümüze aktaran en temel ana kaynak olan Selçuknâme’yi yazdı.',
    curatorQuestion: 'İbni Bibi’nin medeniyet hafızasına en önemli katkısı nedir?',
    curatorOptions: [
      'Yalnızca eczacılık formülleri geliştirmesi',
      'Türkiye Selçuklu Devleti’nin siyasi, idari, toprak ve adalet nizamını belgelere ve tanıklıklara dayalı vakayinameyle kaydetmesi',
      'Top döküm ocakları kurarak kale kuşatması planlaması',
      'Atlas Okyanusu kıyı haritasını çizmesi'
    ],
    curatorFeedbacks: [
      'Eczacılık tıp ve şifa hekimlerinin alanıdır. Bu bilim insanının Türkiye Selçuklu divanında devlet tarihçisi olduğunu hatırlayınız.',
      'Doğru! el-Evâmirü’l-Alâiyye (Selçuknâme) eseriyle Selçuklu idari ve sosyal hafızasını belgeleme başarısını doğru tespit ettiniz.',
      'Bu bilim insanı bir topçu komutanı değil; devletin arşiv belgelerini ve olaylarını kaydeden bir müelliftir. Eserini dikkate alınız.',
      'Okyanus haritaları coğrafyacı denizcilerin alanıdır. Bu bilim insanının Selçuklu sarayındaki idari ve hukuki kayıtlarına odaklanınız.'
    ],
    correctCuratorOption: 1,
    anatoliaQuestion: 'Bu eserde anlatılan adalet ve vakıf nizamı Anadolu için ne anlam ifade eder?',
    anatoliaOptions: [
      'Anadolu’da hiçbir ticaret yapılmadığını göstermesi',
      'Selçuklu devletinin sadece savaştan ibaret olduğunu savunması',
      'Devletin tüccarı ve mazlumu koruyan adalet anlayışıyla Anadolu’yu güvenli bir ticaret ve yerleşim yurduna dönüştürdüğünü belgelemesi',
      'Tarih yazıcılığının tamamen hayal ürünü olduğunu iddia etmesi'
    ],
    anatoliaFeedbacks: [
      'Tam tersine eserde Antalya’nın fethi ve tüccarların mallarının devlet güvencesine alınması anlatılır. Ticari güven boyutunu düşününüz.',
      'Eserde yalnızca savaşlar değil; vakıflar, ikta toprak düzeni, imar ve dadgâh adalet divanları ayrıntıyla anlatılır. Sosyal nizamı inceleyiniz.',
      'Doğru! Selçuklu adalet teşkilatı ve devlet sigortasının Anadolu’yu güvenli bir yurda dönüştürdüğü tespitini başarıyla yaptınız.',
      'Bu bilim insanı bizzat şahit olduğu olayları ve resmî devlet evraklarını kaynak alarak gerçekçi bir yöntem izlemiştir. Belgeye dayalı anlatımı dikkate alınız.'
    ],
    correctAnatoliaOption: 2,
    evidenceQuestion: 'Bu çıkarıma ulaşmanızı sağlayan kanıt hangisidir?',
    evidenceOptions: [
      {
        text: 'Yalnızca masal ve efsanelerden oluşan hayali bir destan yazmış olması',
        isCorrect: false,
        explanation: 'Bu bilim insanının masalcı değil; Selçuklu divanında görev yapmış, resmî belgelere dayanan bir vakanüvis olduğunu hatırlayınız.'
      },
      {
        text: 'Haçlı ordularının komutanı olarak Anadolu’ya sefer düzenlemesi',
        isCorrect: false,
        explanation: 'Bu bilim insanının Selçuklu bürokratı ve müellifi olduğunu; Haçlı ordularıyla komutanlık ilişkisi bulunmadığını anımsayınız.'
      },
      {
        text: 'Roma İmparatoru Jüstinyen’in hayatını anlatan Latince bir risale yazması',
        isCorrect: false,
        explanation: 'Bu bilim insanının Türkiye Selçuklularının XIII. yüzyıldaki tarihini anlatan Selçuknâme’yi kaleme aldığını göz önünde bulundurunuz.'
      },
      {
        text: 'el-Evâmirü’l-Alâiyye’de yer alan ikta-mülk toprak kayıtları, Antalya fethi ve dadgâh adalet divanı anlatımları',
        isCorrect: true,
        explanation: 'Eserinde yer alan I. Alâeddin Keykubad dönemi kayıtları, toprak teşkilatı ve Sultan’ın adalet fermanları birincil kanıtlardır.'
      }
    ],
    dimensions: {
      bilim: true,
      egitim: true,
      dilVeKultur: true,
      sanat: false,
      dusunce: true,
      islamlasma: true,
      anadoluTurklesmesi: true
    },
    accentColor: '#d97706',
    symbolName: 'Selçuklu Çift Başlı Kartalı ve Tarih Tomarı'
  }
];
