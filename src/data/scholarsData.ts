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
      'Güneş takvimini hazırlayarak gözlemevleri kurması',
      'Ahlak ve inanç ilkelerini ana dili olan arı Türkçe ile ifade ederek halkın anlayışına sunması',
      'Askerî savunma taktikleri ve kuşatma makineleri geliştirmesi',
      'Yabancı dillerden felsefe metinlerini saray için çevirmesi'
    ],
    correctCuratorOption: 1,
    anatoliaQuestion: 'Bu katkının Anadolu’nun imar ve iskân sürecindeki rolünü nasıl değerlendirirsiniz?',
    anatoliaOptions: [
      'Bizans sarayı ile ticari antlaşmalar imzalanmasını sağlaması',
      'Anadolu Selçuklu ordusunun deniz donanmasını yönetmesi',
      'Horasan erenlerinin Anadolu’da kurdukları tekkelerle göçmen boyları kaynaştırıp toplumsal dayanışmayı güçlendirmesi',
      'Yalnızca saray çevresinde edebi sohbetler düzenlemesi'
    ],
    correctAnatoliaOption: 2,
    evidenceQuestion: 'Bu çıkarıma ulaşmanızı sağlayan kanıt hangisidir?',
    evidenceOptions: [
      {
        text: 'Anadolu’da bizzat siyasi fermanlar yayımlayarak ordu komutanlığı yapması',
        isCorrect: false,
        explanation: 'Ahmed Yesevi devlet başkanı veya askerî komutan değil, Türkistan’da yaşamış manevi bir önder ve düşünürdür.'
      },
      {
        text: 'Dîvân-ı Hikmet’in yalın Türkçesi ve yetiştirdiği Horasan erenlerinin Anadolu’daki zaviye faaliyetleri',
        isCorrect: true,
        explanation: 'Dîvân-ı Hikmet’in Türkçe kaleme alınmış olması ve Yesevi dervişlerinin Anadolu iskânındaki rolü birincil kaynaklarla sabittir.'
      },
      {
        text: 'Haçlı ordularına karşı deniz savaşları yönettiğini gösteren kronikler',
        isCorrect: false,
        explanation: 'Ahmed Yesevi Orta Asya sahasında yaşamıştır; deniz komutanlığı söz konusu değildir.'
      },
      {
        text: 'Sadece Arapça terimler kullanarak seçkin zümreye hitap etmesi',
        isCorrect: false,
        explanation: 'Ahmed Yesevi Arapça veya Farsça yerine halkın ana dili olan Türkçeyi tercih etmiştir.'
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
      text: 'Türk boylarının yaşadığı coğrafyaları gezerek lehçeleri, söz varlığını, atasözlerini (sav), şiirleri (koşuk) toplamış ve Türk dünyasının ilk renkli haritasını çizmiştir.'
    },
    clue3: {
      id: 'clue3',
      type: 'ETKİ',
      label: 'Etki İpucu',
      badge: 'Medeniyete Katkısı',
      text: 'Türkçenin dönemin hâkim dili olan Arapça ile boy ölçüşebilecek zenginlikte olduğunu kanıtlayarak milletlerarası saygınlığını belgelemiştir.'
    },
    contribution: 'Türk dilinin, folklorunun, geleneklerinin ve coğrafi yayılımının ilk kapsamlı ansiklopedik envanterini çıkararak dünya Türkolojisinin kurucusu olmuştur.',
    anatoliaImpact: 'XI. yüzyılda Anadolu’ya yönelen Türk boylarının ortak söz varlığını, edebiyatını ve atasözlerini koruyarak Anadolu’da Türkçe konuşan toplumların ortak aidiyet bilincini güçlendirmiştir.',
    geography: 'Doğu Türkistan’ın Kaşgar şehrinde doğdu; Türk boylarının yaşadığı bozkırları dolaştıktan sonra eserini sunmak üzere Bağdat’a gitti.',
    influence: 'Türkçenin zenginliğini ilk kez bilimsel metotla ortaya koyarak dünya Türkolojisinin kurucusu oldu; ilk Türk dünyası haritasıyla dil ve kültür hafızasını korudu.',
    curatorQuestion: 'Kaşgarlı Mahmud’un insanlığın ortak mirasına en önemli katkısı nedir?',
    curatorOptions: [
      'Türk dilinin söz varlığını, atasözlerini ve lehçelerini ilk kez ansiklopedik bir yöntem ve haritayla belgelemesi',
      'Gökbilim rasathaneleri kurarak yıldız cetvelleri hazırlaması',
      'Devletler hukuku ilkelerini belirleyen diplomatik fermanlar yazması',
      'Ordunun süvari taktiklerini anlatan nizamnameler kaleme alması'
    ],
    correctCuratorOption: 0,
    anatoliaQuestion: 'Bu çalışmanın Anadolu sahasındaki yansıması nasıl açıklanabilir?',
    anatoliaOptions: [
      'Anadolu maden yataklarının haritasını çıkararak işletmeye açması',
      'Bizans sınırında yeni taş surlar inşa ettirmesi',
      'Yalnızca sarayda kullanılan yabancı yazı dilini zorunlu kılması',
      'Anadolu’ya yerleşen farklı boyların ortak dil, edebiyat ve atasözleri etrafında kültürel birliklerini korumalarını sağlaması'
    ],
    correctAnatoliaOption: 3,
    evidenceQuestion: 'Bu çıkarıma ulaşmanızı sağlayan kanıt hangisidir?',
    evidenceOptions: [
      {
        text: 'Malazgirt Meydan Muharebesi’nde süvari komutanı olarak görev yapması',
        isCorrect: false,
        explanation: 'Kaşgarlı Mahmud askerî komutan değil, Karahanlı soyundan gelen büyük bir dilbilimcidir.'
      },
      {
        text: 'Konya medreselerinde bizzat yöneticilik yaptığına dair vakfiyeler',
        isCorrect: false,
        explanation: 'Kaşgarlı Mahmud eserini Bağdat’ta tamamlamış olup Anadolu’da medrese yöneticiliği yapmamıştır.'
      },
      {
        text: 'Dîvânu Lugâti’t-Türk’teki boy lehçeleri derlemeleri, atasözleri ve ilk Türk dünyası haritası',
        isCorrect: true,
        explanation: 'Eserdeki 7500’den fazla kelime, atasözleri ve dairevi dünya haritası bu bilimsel başarının somut kanıtıdır.'
      },
      {
        text: 'Yalnızca aşk konulu şiirler içeren bağımsız bir divan yazmış olması',
        isCorrect: false,
        explanation: 'Dîvânu Lugâti’t-Türk bir şiir mecmuası değil, ilk Türkçe sözlük ve kapsamlı bir kültür ansiklopedisidir.'
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
      text: 'Üçüncü dereceden cebirsel denklemleri koni kesitleri yardımıyla çözen eserin ve Sultan Melikşah için hazırlanan "Celali Takvimi" ile "Zîc-i Melikşahî"nin baş mimarıdır.'
    },
    clue2: {
      id: 'clue2',
      type: 'DÜŞÜNCE / ÇALIŞMA',
      label: 'Düşünce İpucu',
      badge: 'Düşüncesi',
      text: 'İsfahan Gözlemevi’ni yönetmiş, denklemleri 25 tipe ayırmış ve Descartes’tan asırlar önce koordinat sisteminin avantajlarını fark etmiştir.'
    },
    clue3: {
      id: 'clue3',
      type: 'ETKİ',
      label: 'Etki İpucu',
      badge: 'Medeniyete Katkısı',
      text: 'Matematikte analitik geometrinin temellerini atmış; felsefede İbn Sina ekolünü izleyerek yazdığı rubailerle Doğu ve Batı edebiyatını derinden etkilemiştir.'
    },
    contribution: 'Kübik denklemleri geometrik metotlarla çözmüş, 100 civarında sabit yıldızın konumunu belirlemiş ve güneş yılı esasına dayalı hatasız takvim geliştirmiştir.',
    anatoliaImpact: 'Büyük Selçuklu Devleti’nde kurduğu rasathane ve cebir geleneği, Anadolu Selçuklu medreselerindeki akli ilimler ve astronomi müfredatına doğrudan kaynaklık etmiştir.',
    geography: 'Horasan’ın Nişabur şehrinde doğdu ve yaşadı; Büyük Selçuklu Devleti başkenti İsfahan ve Merv’de bilimsel çalışmalar yaptı.',
    influence: 'İsfahan’da kurduğu rasathanede Celali Takvimi’ni hazırladı; analitik geometride koni kesitleri yöntemiyle Batı’da Descartes’a kadar aşılamayan cebirsel yeniliklere imza attı.',
    curatorQuestion: 'Ömer Hayyam’ın bilim mirasına yaptığı en belirgin katkı nedir?',
    curatorOptions: [
      'Yalnızca tasavvufi şiirler kaleme alması',
      'Top döküm yöntemleri geliştirerek kuşatma makineleri üretmesi',
      'Üçüncü dereceden denklemleri geometrik yolla çözmesi ve hassas güneş takvimi (Celali) geliştirmesi',
      'Kervanların güvenliği için posta teşkilatı kurması'
    ],
    correctCuratorOption: 2,
    anatoliaQuestion: 'Bu bilimsel birikimin Selçuklu coğrafyasına etkisi nasıl özetlenebilir?',
    anatoliaOptions: [
      'Tarımsal faaliyetlerin durdurulup sadece ticarete yönelinmesi',
      'İsfahan’daki rasathane ve matematik birikiminin Anadolu medreselerindeki akli bilim eğitimini zenginleştirmesi',
      'Yalnızca saray çevresinde takvim kullanımına izin verilmesi',
      'Edebi metinlerin fen bilimlerinden tamamen ayrıştırılması'
    ],
    correctAnatoliaOption: 1,
    evidenceQuestion: 'Bu çıkarıma ulaşmanızı sağlayan kanıt hangisidir?',
    evidenceOptions: [
      {
        text: 'Cebir Risalesi yazmaları, Zîc-i Melikşahî yıldız koordinat tablosu ve Celali Takvimi kayıtları',
        isCorrect: true,
        explanation: 'Hayyam’ın kübik denklemleri koni kesitleriyle çözdüğü Cebir Risalesi ve hazırladığı Zîc-i Melikşahî bilim tarihindeki somut belgelerdir.'
      },
      {
        text: 'Bizans İmparatorluğu ile imzalanan askeri ittifak metinleri',
        isCorrect: false,
        explanation: 'Ömer Hayyam bir devlet başkanı veya elçi değil, bilgin ve matematikçidir.'
      },
      {
        text: 'Mısır Piramitlerinin onarımında mühendis olarak çalıştığına dair iddialar',
        isCorrect: false,
        explanation: 'Hayyam Selçuklu coğrafyasında (Nişabur, Semerkant, İsfahan) yaşamış ve araştırmalarını burada yürütmüştür.'
      },
      {
        text: 'Sadece eğlence ve meclis şiirleri yazan bir saray şairi olduğunu belirten dedikodular',
        isCorrect: false,
        explanation: 'Hayyam çağının en yetkin matematik, astronomi ve felsefe bilginlerinden biridir.'
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
      text: 'Hava ve su dengesi ilkesini kullanarak su saatleri, mum saatleri, kan alma tekneleri, suyu yukarı çıkaran mekanizmalar ve saray kapısı gibi otomatik düzenekler tasarlamıştır.'
    },
    clue3: {
      id: 'clue3',
      type: 'ETKİ',
      label: 'Etki İpucu',
      badge: 'Medeniyete Katkısı',
      text: 'Dönme hareketini doğrusal harekete çeviren krank mili ve kam mekanizmalarını sistemli uygulayarak sibernetik ve robotik biliminin öncüsü kabul edilmiştir.'
    },
    contribution: 'Otomasyon ve hidrolik mühendisliği alanında suyun gücünü programlanabilir mekanik sistemlere dönüştürmüş, modern makine yapımının temel prensiplerini ortaya koymuştur.',
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
    correctCuratorOption: 3,
    anatoliaQuestion: 'Cezeri’nin Anadolu topraklarındaki bu çalışmaları neyin göstergesidir?',
    anatoliaOptions: [
      'Türk-İslam hâkimiyetindeki Anadolu’nun yüksek teknoloji ve mekanik mühendisliğinde öncü bir merkez olduğunu',
      'Anadolu’da tarım ve zanaatın gerilediğini',
      'Mekanik araçların halk arasında yasaklandığını',
      'Bilimin yalnızca yabancı ülkelerden kopyalandığını'
    ],
    correctAnatoliaOption: 0,
    evidenceQuestion: 'Bu çıkarıma ulaşmanızı sağlayan kanıt hangisidir?',
    evidenceOptions: [
      {
        text: 'Diyarbakır surlarını tek başına taş bloklarla ördüğü rivayeti',
        isCorrect: false,
        explanation: 'Cezeri inşaat ustası değil; sarayın başmühendisi, tasarımcısı ve mucididir.'
      },
      {
        text: 'Haçlı ordularına karşı deniz birliklerini yönettiğine dair belgeler',
        isCorrect: false,
        explanation: 'Cezeri askerî bir kumandan değil; sarayda çalışan bir mekanik bilginidir.'
      },
      {
        text: 'Yalnızca masal ve destan türünde hikâyeler yazmış olması',
        isCorrect: false,
        explanation: 'Cezeri’nin eseri masal değil; bizzat imal edilen araçların ayrıntılı teknik çizimlerini içeren bilimsel kitaptır.'
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
    correctCuratorOption: 1,
    anatoliaQuestion: 'İbnülarabi’nin Anadolu’daki faaliyetlerinin kültürel etkisi nasıl açıklanabilir?',
    anatoliaOptions: [
      'Tarım vergilerinin iki katına çıkarılmasını sağlaması',
      'Konya’daki tüm kütüphanelerin kapatılmasını emretmesi',
      'Malatya ve Konya’da talebeler yetiştirip yöneticilere tavsiyelerde bulunarak Anadolu düşünce hayatına derinlik kazandırması',
      'Yalnızca yabancı tüccarlara imtiyaz verilmesini savunması'
    ],
    correctAnatoliaOption: 2,
    evidenceQuestion: 'Bu çıkarıma ulaşmanızı sağlayan kanıt hangisidir?',
    evidenceOptions: [
      {
        text: 'Roma Kolezyumu’nda felsefe dersleri verdiğine dair Batı kayıtları',
        isCorrect: false,
        explanation: 'İbnülarabi Endülüs, Kuzey Afrika, Hicaz, Şam ve Anadolu’da (Malatya-Konya) bulunmuştur.'
      },
      {
        text: 'Fütûhât-ı Mekkiyye’deki ilim tahlilleri ve Selçuklu sultanlarıyla mektuplaşarak Konya’da talebe yetiştirmesi',
        isCorrect: true,
        explanation: 'Eserlerindeki metinler ve Selçuklu sultanlarıyla olan mektuplaşmaları, onun Anadolu’daki düşünce etkisinin somut kanıtıdır.'
      },
      {
        text: 'Selçuklu ordusunun başkumandanı sıfatıyla sefere katılması',
        isCorrect: false,
        explanation: 'İbnülarabi devlet yöneticisi veya asker değil; din âlimi ve düşünürdür.'
      },
      {
        text: 'Sadece İspanyolca eserler verip Doğu dillerini reddetmesi',
        isCorrect: false,
        explanation: 'Eserlerini dönemin ortak ilim dili olan Arapça ile yazmış ve İslam coğrafyasında dersler vermiştir.'
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
    influence: 'Moğol istilası ve Haçlı seferleriyle sarsılan Anadolu halkına manevi birlik ve direnç aşıladı; hoşgörü ve sevgi anlayışıyla 2007 yılında UNESCO tarafından dünya çapında anıldı.',
    curatorQuestion: 'Mevlana’nın evrensel kültür mirasına yaptığı en temel katkı nedir?',
    curatorOptions: [
      'Yalnızca saray protokol kurallarını düzenlemesi',
      'Matematiksel logaritma tabloları hazırlaması',
      'Kur’an ve sünnete dayalı birlik, sevgi ve hoşgörü çağrısıyla insanları ortak ahlaki değerlerde buluşturması',
      'Ticari kervan filoları donatması'
    ],
    correctCuratorOption: 2,
    anatoliaQuestion: 'Mevlana’nın öğretilerinin Anadolu toplumuna sağladığı en belirgin katkı nedir?',
    anatoliaOptions: [
      'Moğol istilasının yarattığı siyasi ve sosyal buhran döneminde halka umut ve dayanma gücü aşılayarak toplumsal birliği koruması',
      'Şehirlerin etrafına hendekler kazdırarak ticareti durdurması',
      'Yalnızca Konya halkıyla iletişim kurup diğer şehirleri ihmal etmesi',
      'Bizans tüccarlarının dükkânlarını kapatmasını emretmesi'
    ],
    correctAnatoliaOption: 0,
    evidenceQuestion: 'Bu çıkarıma ulaşmanızı sağlayan kanıt hangisidir?',
    evidenceOptions: [
      {
        text: 'Moğol ordusuna karşı kılıç kuşanıp süvari ordusu komutanlığı yapması',
        isCorrect: false,
        explanation: 'Mevlana askerî kumandan değil; halka öğüt veren manevi bir rehber ve bilgindir.'
      },
      {
        text: 'Yalnızca astronomi rasathaneleri inşa ettirdiğini gösteren belgeler',
        isCorrect: false,
        explanation: 'Mevlana rasathane kurucusu değil, tasavvufi ve edebi eserleriyle tanınan bir mutasavvıftır.'
      },
      {
        text: 'Mesnevi’deki birleştirici öğütler, Şeb-i Arûs anlayışı ve 2007 UNESCO Mevlana ve Hoşgörü Yılı kararı',
        isCorrect: true,
        explanation: 'Eserlerindeki pergel metaforu, iyilik öğütleri ve UNESCO’nun 2007 kararı bu evrensel etkinin somut kanıtıdır.'
      },
      {
        text: 'Anadolu dışındaki coğrafyaları hiç tanımayan yerel bir köylü olması',
        isCorrect: false,
        explanation: 'Mevlana Belh’ten Şam’a ve Konya’ya kadar geniş bir coğrafyayı görmüş evrensel bir düşünürdür.'
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
      text: 'Horasan’dan Anadolu’ya gelerek Suluca Karahöyük (Hacımköy) civarında halkı bilinçlendirmiş; ilim, cömertlik, hayâ, sabır ve edep gibi erdemleri savunmuştur.'
    },
    clue3: {
      id: 'clue3',
      type: 'ETKİ',
      label: 'Etki İpucu',
      badge: 'Medeniyete Katkısı',
      text: 'Dervişleri Anadolu ve Balkanlarda Bektaşilik anlayışını yaymış; vefatından sonra kurulan Osmanlı Devleti’nde Yeniçeri Ocağının piri kabul edilmiştir.'
    },
    contribution: 'İnsan sevgisini, barışı, nefis terbiyesini ve ahlaki olgunlaşmayı öne çıkararak toplumsal birliğin ve hoşgörünün temellerini inşa etmiştir.',
    anatoliaImpact: 'Türkiye Selçuklu Devleti’nin zayıfladığı dönemde göçebe ve yerleşik Türkmenleri irşat ederek toplumsal direnç kazandırmış, Balkanlar ve Anadolu’da kaynaşmayı sağlamıştır.',
    geography: 'Horasan’ın Nişabur şehrinde doğdu; Anadolu’ya gelerek Nevşehir civarındaki Suluca Karahöyük’e (Hacımköy) yerleşti.',
    influence: 'Selçuklu’nun zayıfladığı dönemde Anadolu Türkmenlerini kaynaştırdı, esnaf ve Ahilik teşkilatını destekledi; dervişleri Balkanları aydınlatırken Osmanlı’da Yeniçeri Ocağının pîri kabul edildi.',
    curatorQuestion: 'Hacı Bektaş Veli’nin toplumsal hayata kazandırdığı en belirgin ilke nedir?',
    curatorOptions: [
      'Sevgi, hoşgörü, edep ve kardeşlik anlayışıyla farklı toplumsal kesimleri barış içinde birleştirmesi',
      'Deniz aşırı baharat ticareti filoları kurması',
      'Astrolojik burç yorumları kaleme alması',
      'Bizans kiliselerinin mimari restorasyonunu yapması'
    ],
    correctCuratorOption: 0,
    anatoliaQuestion: 'Hacı Bektaş Veli’nin öğretileri Anadolu ve Balkan coğrafyasını nasıl etkilemiştir?',
    anatoliaOptions: [
      'Boylar arası çatışmaları artırması',
      'Halkı yalnızca göçebe kalmaya zorlaması',
      'Yalnızca yabancı dilde eğitim verilmesini şart koşması',
      'Yetiştirdiği dervişlerin Anadolu ve Balkanlarda barış ve adalet temelinde iskân hareketlerine rehberlik etmesi'
    ],
    correctAnatoliaOption: 3,
    evidenceQuestion: 'Bu çıkarıma ulaşmanızı sağlayan kanıt hangisidir?',
    evidenceOptions: [
      {
        text: 'Haçlı krallarıyla imzaladığı ticari senetler',
        isCorrect: false,
        explanation: 'Hacı Bektaş Veli tüccar veya diplomat değil, Anadolu’da halkı irşat eden manevi bir mürşittir.'
      },
      {
        text: 'Makâlât’taki edep ve ahlak ilkeleri, Suluca Karahöyük zaviyesi ve Vilâyetnâme’deki tarihi kayıtlar',
        isCorrect: true,
        explanation: 'Makâlât eseri ve XV. yüzyılda kaleme alınan Vilâyetnâme, onun Anadolu ve Balkanlardaki etkisini belgeleyen birincil kaynaklardır.'
      },
      {
        text: 'Moğol ordusuna vergi toplayıcılığı yaptığı iddiaları',
        isCorrect: false,
        explanation: 'Hacı Bektaş Veli Moğol baskısına karşı halkın maneviyatını ve dayanışmasını korumuştur.'
      },
      {
        text: 'Sadece maden ocaklarında çalışarak münzevi bir hayat yaşaması',
        isCorrect: false,
        explanation: 'Hacı Bektaş Veli zaviyesiyle binlerce derviş yetiştirmiş ve toplumsal hayatın merkezinde yer almıştır.'
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
    correctCuratorOption: 3,
    anatoliaQuestion: 'Yunus Emre’nin Türkçeyi tercih etmesinin Anadolu medeniyeti açısından sonucu nedir?',
    anatoliaOptions: [
      'Halkın edebiyattan tamamen uzaklaşması',
      'Anadolu’da Türkçenin yazı, edebiyat ve kültür dili olarak kökleşip kalıcı hale gelmesi',
      'Yalnızca Latince metinlerin okunmasının zorunlu tutulması',
      'Kervansaraylardaki konaklama ücretlerinin belirlenmesi'
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
        explanation: 'Yunus Emre asker değil; Taptuk Emre ocağında yetişmiş bir gönül şairi ve derviştir.'
      },
      {
        text: 'İstanbul surlarını kuşatan donanmada kaptanlık yapması',
        isCorrect: false,
        explanation: 'Yunus Emre Sakarya ve Orta Anadolu havzasında yaşamıştır; deniz donanmasıyla ilgisi yoktur.'
      },
      {
        text: 'Yalnızca mekanik saatler ve usturlaplar imal etmiş olması',
        isCorrect: false,
        explanation: 'Yunus Emre fen araçları üreticisi değil, edebiyatımızın ve tasavvufumuzun en büyük ozanlarındandır.'
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
      text: 'I. Alâeddin Keykubad dönemini kapsamlı şekilde ele almış; siyasi olayların yanında ilk kez ikta, mülk ve hibe türü toprak yönetimi ile adalet (dadgâh) işleyişini kaydetmiştir.'
    },
    clue3: {
      id: 'clue3',
      type: 'ETKİ',
      label: 'Etki İpucu',
      badge: 'Medeniyete Katkısı',
      text: 'Sultan Gıyaseddin Keyhüsrev’in Antalya fethini, soyulan tüccarların zararını devlet hazinesinden karşılayarak sağladığı adaleti anlatmış ve Selçuklu idari hafızasını günümüze ulaştırmıştır.'
    },
    contribution: 'Türkiye Selçuklularının devlet yönetimini, toprak düzenini, sosyal adaletini ve şehirleşmesini birinci elden kaydederek Anadolu tarih yazıcılığının en temel kaynağını bırakmıştır.',
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
    correctCuratorOption: 1,
    anatoliaQuestion: 'Bu eserde anlatılan adalet ve vakıf nizamı Anadolu için ne anlam ifade eder?',
    anatoliaOptions: [
      'Anadolu’da hiçbir ticaret yapılmadığını göstermesi',
      'Selçuklu devletinin sadece savaştan ibaret olduğunu savunması',
      'Devletin tüccarı ve mazlumu koruyan adalet anlayışıyla Anadolu’yu güvenli bir ticaret ve yerleşim yurduna dönüştürdüğünü belgelemesi',
      'Tarih yazıcılığının tamamen hayal ürünü olduğunu iddia etmesi'
    ],
    correctAnatoliaOption: 2,
    evidenceQuestion: 'Bu çıkarıma ulaşmanızı sağlayan kanıt hangisidir?',
    evidenceOptions: [
      {
        text: 'Yalnızca masal ve efsanelerden oluşan hayali bir destan yazmış olması',
        isCorrect: false,
        explanation: 'İbni Bibi masalcı değil; Selçuklu divanında görev yapmış, resmî belgelere ve tanıklıklara dayanan bir vakanüvistir.'
      },
      {
        text: 'Haçlı ordularının komutanı olarak Anadolu’ya sefer düzenlemesi',
        isCorrect: false,
        explanation: 'İbni Bibi Selçuklu bürokratı ve müellifidir; Haçlılarla komutanlık ilişkisi yoktur.'
      },
      {
        text: 'Roma İmparatoru Jüstinyen’in hayatını anlatan Latince bir risale yazması',
        isCorrect: false,
        explanation: 'İbni Bibi Türkiye Selçuklularının XIII. yüzyıldaki tarihini anlatan Selçuknâme’yi yazmıştır.'
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
