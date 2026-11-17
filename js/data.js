/* =========================================================
   XƏMSƏ — ДАННЫЕ САЙТА (легко редактировать)
   ---------------------------------------------------------
   Здесь лежат номера и цены, меню, команда, отзывы и FAQ.
   У каждого текста три варианта: az / ru / en.
   Цены указаны в AZN (манатах) за ночь. Меняйте числа как угодно.
   Чтобы добавить фото номера: положите файл в папку img/
   и впишите путь в поле img, например img: "img/room-deluxe.jpg".
   ========================================================= */

const SITE = {
  currency: "AZN",
  phone: "+994 12 000 00 00",
  whatsapp: "994500000000",          // номер для WhatsApp без «+» и пробелов
  email: "info@xemse.az",
  address: { az: "Bakı şəhəri, Azərbaycan", ru: "г. Баку, Азербайджан", en: "Baku, Azerbaijan" },
  mapQuery: "Baku, Azerbaijan",       // что показывать на карте Google
  socials: { instagram: "#", facebook: "#", tiktok: "#", youtube: "#" }
};

/* ---------------- 5 ЗДАНИЙ КОМПЛЕКСА ---------------- */
const BUILDINGS = [
  {
    id: "hotel", img: "img/hotel.jpg", color: "#c0283a",
    name: { az: "Nar Otel", ru: "Отель «Гранат»", en: "Pomegranate Hotel" },
    tag:  { az: "Nar — bolluq və sevgi rəmzi", ru: "Гранат — символ изобилия и любви", en: "The pomegranate: a symbol of abundance and love" },
    short: {
      az: "Nəhəng nar formasında otel: panoram şüşə panellər meyvənin parlaq qabığını, daxili zonalar isə nar dənələrini xatırladır.",
      ru: "Отель в форме гигантского граната: панорамные стеклянные панели повторяют блестящую кожуру, а внутренние зоны напоминают зёрна.",
      en: "A hotel shaped like a giant pomegranate: panoramic glass panels echo its glossy skin, and the inner zones are its seeds."
    },
    long: {
      az: "Nar Azərbaycanın ən qədim rəmzlərindən biridir: bolluq, sevgi, həyat və birlik. Hər il Göyçayda keçirilən Nar Festivalı memarları bu qeyri-adi formanı yaratmağa ilhamlandırıb. Otel milli simvolikanı müasir memarlıqla birləşdirir və təkcə yaşayış yeri deyil, həm də görməli məkandır: turistlər «nar otelini» görmək və fonunda şəkil çəkdirmək üçün xüsusi gəlirlər. Nömrələr nar və qızılın isti çalarlarında, xalça ornamentləri ilə bəzədilib, bəzi nömrələrdə üzüm bağlarına və nar bağlarına açılan panoram günbəz var.",
      ru: "Гранат — один из древнейших символов Азербайджана: изобилие, любовь, жизнь и единство. Ежегодный Фестиваль граната в Гёйчае вдохновил архитекторов на эту необычную форму. Отель соединяет национальную символику и современную архитектуру. Это не только место для проживания, но и достопримечательность: туристы приезжают специально, чтобы увидеть «гранатовый отель» и сфотографироваться на его фоне. Номера оформлены в тёплых оттенках граната и золота, с ковровыми орнаментами, а в некоторых есть панорамный купол с видом на виноградники и гранатовые сады.",
      en: "The pomegranate is one of Azerbaijan's oldest symbols: abundance, love, life and unity. The annual Pomegranate Festival in Goychay inspired the architects to choose this unusual form. The hotel unites national symbolism with modern architecture. It is more than a place to stay; it is a landmark in its own right, and visitors come just to see the 'pomegranate hotel' and take photos in front of it. Rooms are designed in warm pomegranate and gold tones with carpet ornaments, and some have a panoramic dome overlooking vineyards and pomegranate orchards."
    },
    features: {
      az: ["Nömrələr və lükslər", "SPA mərkəzi", "Milli mətbəx restoranı", "Sərgi və konfrans zalları", "Narın tarixinə həsr olunmuş mini-qalereya", "Təbii nar ətri ilə aromatizasiya"],
      ru: ["Номера и люксы", "СПА-центр", "Ресторан национальной кухни", "Выставочные и конференц-залы", "Мини-галерея истории граната", "Ароматизация натуральным запахом граната"],
      en: ["Rooms and suites", "Spa centre", "National cuisine restaurant", "Exhibition and conference halls", "Mini-gallery on the history of the pomegranate", "Natural pomegranate room fragrance"]
    }
  },
  {
    id: "sport", img: "img/sport.jpg", color: "#1f6f86",
    name: { az: "Buta Arena", ru: "Спорткомплекс «Бута»", en: "Buta Sports Arena" },
    tag:  { az: "Buta — əbədiyyət, od və mənəvi güc", ru: "Бута — символ вечности, огня и духовной силы", en: "The buta: a symbol of eternity, fire and spiritual strength" },
    short: {
      az: "Bayrağımızın rəngləri ilə bəzədilmiş buta formalı idman kompleksi: zallar, hovuz, fitnes və konfrans meydançası.",
      ru: "Спорткомплекс в форме буты в цветах флага Азербайджана: спортзалы, бассейн, фитнес-зона и конференц-площадка.",
      en: "A buta-shaped sports complex in the colours of the national flag, with sports halls, a pool, a fitness zone and a conference venue."
    },
    long: {
      az: "Butanın forması xalçalarda, zərgərlik məmulatlarında və parçalarda rast gəlinən qədim rəmzdir: həyat enerjisi, alov və yenidən doğuluş. Fasadın mərkəzində bayrağımızdakı kimi aypara və səkkizguşəli ulduz var. Forma «Odlar yurdu» Azərbaycandan ilhamlanıb. Burada müxtəlif idman növləri üzrə yarışlar, mədəni və gənclər tədbirləri, milli komandaların məşq toplanışları keçirilir.",
      ru: "Бута (пейсли) — древний символ, встречающийся на коврах, ювелирных изделиях и тканях: жизненная энергия, пламя и возрождение. В центре фасада полумесяц и восьмиконечная звезда, как на государственном флаге. Форма вдохновлена огненной природой Азербайджана, Страны огней. Здесь проходят соревнования по разным видам спорта, культурные и молодёжные мероприятия, тренировки и сборы национальных команд.",
      en: "The buta (paisley) is an ancient motif found on carpets, jewellery and textiles. It stands for life energy, flame and rebirth. At the centre of the façade are the crescent and eight-pointed star from the national flag. The form is inspired by Azerbaijan, the Land of Fire. The arena hosts competitions in many sports, cultural and youth events, and training camps for national teams."
    },
    features: {
      az: ["Müasir idman zalları", "Olimpiya hovuzu", "Fitnes zonası", "Konfrans meydançası", "Beynəlxalq yarışlar"],
      ru: ["Современные спортзалы", "Бассейн", "Фитнес-зона", "Конференц-площадка", "Международные соревнования"],
      en: ["Modern sports halls", "Swimming pool", "Fitness zone", "Conference venue", "International competitions"]
    }
  },
  {
    id: "restaurant", img: "img/restaurant.jpg", color: "#d9a441",
    name: { az: "Şah Plov Restoranı", ru: "Ресторан «Шах-плов»", en: "Shah Plov Restaurant" },
    tag:  { az: "Plov — qonaqpərvərlik və bolluq rəmzi", ru: "Плов — символ гостеприимства и достатка", en: "Plov: a symbol of hospitality and plenty" },
    short: {
      az: "Qazan formasında milli mətbəx restoranı: Gəncə, Lənkəran, Qəbələ və Naxçıvandan aşpazlar, açıq mətbəx və köhnə dükan.",
      ru: "Ресторан национальной кухни в форме казана с пловом: повара из Гянджи, Ленкорани, Габалы и Нахчывана, открытая кухня и старинная лавка.",
      en: "A national cuisine restaurant shaped like a pot of plov, with chefs from Ganja, Lankaran, Gabala and Nakhchivan, an open kitchen and an old-style shop."
    },
    long: {
      az: "Restoranın əsas ideyası Azərbaycan evinin atmosferini çatdırmaqdır: burada yemək sadəcə süfrə deyil, mədəni irsin bir hissəsidir. İnteryerdə oyma taxta detallar, mis bəzəklər, yumşaq işıq və milli musiqi var. Qonaqlar açıq mətbəxdə yeməklərin köhnə ocaqlardakı kimi odda bişirilməsini izləyə bilərlər. Ofisiantlar milli geyimdədir: kişilər çuxa və papaqda, qadınlar qızıl kəmərli atlas donlarda.",
      ru: "Главная идея ресторана — передать атмосферу азербайджанского дома, где еда не просто трапеза, а часть культурного наследия. В интерьере резное дерево, медь, мягкий свет и традиционная музыка. Через открытую кухню видно, как блюда готовят на огне, как в старинных очагах. Официанты в национальных костюмах: мужчины в черкесках и папахах, женщины в атласных платьях с золотыми поясами.",
      en: "The idea is to recreate the atmosphere of an Azerbaijani home, where a meal is part of the cultural heritage. The interior has carved wood, copper, soft light and traditional music. Through the open kitchen guests can watch dishes being cooked over fire, as in old hearths. Staff wear national costume: men in chokhas and papakhas, women in satin dresses with golden belts."
    },
    features: {
      az: ["Regional aşpazlar", "Açıq mətbəx", "Milli geyimdə xidmət", "Şirniyyat və ədviyyat dükanı", "Canlı milli musiqi"],
      ru: ["Повара из разных регионов", "Открытая кухня", "Обслуживание в национальных костюмах", "Лавка сладостей и специй", "Живая национальная музыка"],
      en: ["Regional chefs", "Open kitchen", "Service in national costume", "Sweets and spice shop", "Live folk music"]
    }
  },
  {
    id: "entertainment", img: "img/entertainment.jpg", color: "#6b4bc4",
    name: { az: "Xarıbülbül Əyləncə Mərkəzi", ru: "Развлекательный центр «Хары бюльбюль»", en: "Kharibulbul Entertainment Centre" },
    tag:  { az: "Xarıbülbül — gözəllik, harmoniya və yenilənmə", ru: "Хары бюльбюль — красота, гармония и обновление", en: "The Kharibulbul flower: beauty, harmony and renewal" },
    short: {
      az: "Açılmış Xarıbülbül çiçəyi formasında mərkəz: kinoteatrlar, konsert zalları, uşaq zonaları, kafe və interaktiv şoular.",
      ru: "Центр в форме распустившегося цветка Хары бюльбюль: кинотеатры, концертные залы, детские зоны, кафе и интерактивные шоу.",
      en: "A centre shaped like a blooming Kharibulbul flower, with cinemas, concert halls, kids' zones, cafés and interactive shows."
    },
    long: {
      az: "Futuristik dizayn və funksionallığın birləşməsi. Geniş şüşə fasadlar təbii işığı içəri buraxır, axıcı xətlər yüngüllük və rahatlıq yaradır. Axşamlar bina yumşaq rənglərlə işıqlandırılır. Məqsəd müxtəlif yaşda və maraqda olan insanları birləşdirən keyfiyyətli istirahət məkanı yaratmaqdır.",
      ru: "Футуристический дизайн и функциональность. Стеклянные фасады пропускают естественный свет, плавные линии создают ощущение лёгкости и уюта. Вечером здание мягко подсвечивается. Цель — пространство для качественного досуга, которое объединяет людей разных возрастов и интересов.",
      en: "Futuristic design that also works well. Glass façades let in natural light, flowing lines feel light and cosy, and in the evening the building glows in soft colours. The goal is a place for quality leisure that brings people of all ages and interests together."
    },
    features: {
      az: ["Kinoteatrlar", "Konsert zalları", "Ailə və uşaq zonaları", "Restoran və kafelər", "Sərgilər və interaktiv şoular"],
      ru: ["Кинотеатры", "Концертные залы", "Семейные и детские зоны", "Рестораны и кафе", "Выставки и интерактивные шоу"],
      en: ["Cinemas", "Concert halls", "Family and kids' zones", "Restaurants and cafés", "Exhibitions and interactive shows"]
    }
  },
  {
    id: "museum", img: "img/museum.jpg", color: "#e8e1d0",
    name: { az: "Azərbaycan Muzeyi", ru: "Музей Азербайджана", en: "Museum of Azerbaijan" },
    tag:  { az: "Bir dam altında Azərbaycan səyahəti", ru: "Путешествие по Азербайджану под одной крышей", en: "A journey across Azerbaijan under one roof" },
    short: {
      az: "Azərbaycan xəritəsi formasında muzey: hər zona bir iqtisadi-coğrafi rayona həsr olunub. Burada Zəfər və Xatirə zalı da yerləşir.",
      ru: "Музей в форме карты Азербайджана: каждая зона посвящена одному региону. Здесь же Зал Памяти и Победы.",
      en: "A museum shaped like the map of Azerbaijan, where each zone is devoted to one region. It also houses the Hall of Memory and Victory."
    },
    long: {
      az: "Muzeyin daxili məkanı Gəncə-Qazax, Kür-Araz, Şirvan, Lənkəran, Naxçıvan, Qarabağ və digər rayonlara uyğun zonalara bölünüb. Hər zonada həmin bölgənin mədəniyyəti, adət-ənənələri, tarixi və təbiəti, xalq sənətkarlığı, mətbəxi, folkloru və musiqisi təqdim olunur. Zəfər və Xatirə zalı Qarabağ müharibələrinə və torpaqlarımızın azad edilməsinə həsr olunub. Şəhidlər zalında qəhrəmanların adları və fotoları olan interaktiv «Xatirə divarı» və «Həyat ağacı» yerləşir. Mərkəzi günbəz azad Azərbaycanın səmasını simvolizə edir.",
      ru: "Пространство музея разделено на зоны, соответствующие регионам: Гянджа-Газахскому, Куро-Аразскому, Ширванскому, Ленкоранскому, Нахчыванскому, Карабахскому и другим. В каждой зоне культура, традиции, история и природа региона, народные промыслы, кухня, фольклор и музыка. Зал Памяти и Победы посвящён Карабахским войнам и освобождению земель. В зале Шехидов есть интерактивная «Стена Памяти» с именами и фото героев и символическое «Древо Жизни». Центральный купол символизирует небо над свободным Азербайджаном.",
      en: "The museum is divided into zones that match the country's regions: Ganja-Gazakh, Kur-Araz, Shirvan, Lankaran, Nakhchivan, Karabakh and others. Each zone presents the culture, traditions, history and nature of its region, along with its crafts, cuisine, folklore and music. The Hall of Memory and Victory is devoted to the Karabakh wars and the liberation of the lands. The Hall of Martyrs holds an interactive 'Wall of Memory' with the names and photos of the heroes, and a symbolic 'Tree of Life'. The central dome symbolises the sky over a free Azerbaijan."
    },
    features: {
      az: ["Regional ekspozisiyalar", "Zəfər və Xatirə zalı", "Şəhidlər zalı və Xatirə divarı", "Multimedia instalyasiyaları", "Təhsil proqramları"],
      ru: ["Региональные экспозиции", "Зал Памяти и Победы", "Зал Шехидов и Стена Памяти", "Мультимедийные инсталляции", "Образовательные программы"],
      en: ["Regional exhibitions", "Hall of Memory and Victory", "Hall of Martyrs and Wall of Memory", "Multimedia installations", "Educational programmes"]
    }
  }
];

/* ---------------- НОМЕРА ОТЕЛЯ (цены — заготовка) ---------------- */
const ROOMS = [
  {
    id: "standard", price: 180, size: 26, guests: 2, img: "",
    name: { az: "Nar Standart", ru: "Стандарт «Нар»", en: "Nar Standard" },
    desc: {
      az: "Nar və qızıl çalarlarında rahat nömrə, xalça motivli dekor, şəhər mənzərəsi.",
      ru: "Уютный номер в оттенках граната и золота, декор с ковровыми мотивами, вид на город.",
      en: "A cosy room in pomegranate and gold tones, with carpet-motif decor and a city view."
    },
    amen: ["wifi", "breakfast", "ac", "tv"]
  },
  {
    id: "deluxe", price: 260, size: 34, guests: 3, img: "",
    name: { az: "Deluxe Dənə", ru: "Делюкс «Зерно»", en: "Deluxe Seed" },
    desc: {
      az: "Geniş nömrə, göl mənzərəli balkon və istirahət guşəsi.",
      ru: "Просторный номер с балконом с видом на озеро и зоной отдыха.",
      en: "A spacious room with a lake-view balcony and a lounge corner."
    },
    amen: ["wifi", "breakfast", "ac", "tv", "balcony"]
  },
  {
    id: "family", price: 380, size: 55, guests: 4, img: "",
    name: { az: "Ailə Süitası", ru: "Семейный сьют", en: "Family Suite" },
    desc: {
      az: "İki otaqlı süita, uşaqlar üçün ayrıca yataq otağı və SPA-ya pulsuz giriş.",
      ru: "Двухкомнатный сьют с отдельной детской спальней и бесплатным входом в СПА.",
      en: "A two-room suite with a separate kids' bedroom and free spa access."
    },
    amen: ["wifi", "breakfast", "ac", "tv", "spa", "kids"]
  },
  {
    id: "dome", price: 520, size: 60, guests: 2, img: "",
    name: { az: "Panoram Günbəz", ru: "Панорамный купол", en: "Panorama Dome" },
    desc: {
      az: "Üzüm bağlarına və nar bağlarına açılan şüşə günbəzli nömrə. Ulduzlu səma altında yuxu.",
      ru: "Номер со стеклянным куполом и видом на виноградники и гранатовые сады. Сон под звёздным небом.",
      en: "A room with a glass dome overlooking vineyards and pomegranate orchards. Sleep under the stars."
    },
    amen: ["wifi", "breakfast", "ac", "spa", "view", "minibar"]
  },
  {
    id: "royal", price: 950, size: 110, guests: 4, img: "",
    name: { az: "Xəmsə Royal Süita", ru: "Королевский сьют «Хамсе»", en: "Khamsa Royal Suite" },
    desc: {
      az: "Ən üst mərtəbədə, şəxsi butler xidməti, hamam və transfer daxil.",
      ru: "На верхнем этаже, с личным батлером, хаммамом и трансфером.",
      en: "On the top floor, with a personal butler, private hammam and transfer included."
    },
    amen: ["wifi", "breakfast", "ac", "tv", "spa", "view", "minibar", "transfer", "butler"]
  }
];

const AMENITIES = {
  wifi:      { icon: "📶", az: "Wi-Fi", ru: "Wi-Fi", en: "Wi-Fi" },
  breakfast: { icon: "🥐", az: "Səhər yeməyi", ru: "Завтрак", en: "Breakfast" },
  ac:        { icon: "❄️", az: "Kondisioner", ru: "Кондиционер", en: "Air conditioning" },
  tv:        { icon: "📺", az: "Smart TV", ru: "Smart TV", en: "Smart TV" },
  balcony:   { icon: "🌅", az: "Balkon", ru: "Балкон", en: "Balcony" },
  spa:       { icon: "🧖", az: "SPA girişi", ru: "Вход в СПА", en: "Spa access" },
  kids:      { icon: "🧸", az: "Uşaq zonası", ru: "Детская зона", en: "Kids' zone" },
  view:      { icon: "🏞️", az: "Panoram mənzərə", ru: "Панорамный вид", en: "Panoramic view" },
  minibar:   { icon: "🍷", az: "Mini-bar", ru: "Мини-бар", en: "Minibar" },
  transfer:  { icon: "🚘", az: "Transfer", ru: "Трансфер", en: "Transfer" },
  butler:    { icon: "🎩", az: "Butler", ru: "Батлер", en: "Butler" }
};

/* ---------------- МЕНЮ РЕСТОРАНА (цены — заготовка) ---------------- */
const MENU = [
  { price: 28, name: { az: "Gəncə plovu", ru: "Гянджинский плов", en: "Ganja plov" },
    desc: { az: "Şabalıd və kişmişlə", ru: "С каштанами и изюмом", en: "With chestnuts and raisins" } },
  { price: 24, name: { az: "Narşərablı ət", ru: "Мясо с наршарабом", en: "Lamb with narsharab" },
    desc: { az: "Nar sousu ilə qızardılmış quzu", ru: "Ягнёнок в гранатовом соусе", en: "Lamb in pomegranate sauce" } },
  { price: 18, name: { az: "Lənkəran lavaş-tiridi", ru: "Ленкоранский лаваш-тириди", en: "Lankaran lavash tiridi" },
    desc: { az: "Lavaş, toyuq və ədviyyatlar", ru: "Лаваш, курица и специи", en: "Lavash, chicken and spices" } },
  { price: 12, name: { az: "Naxçıvan qutabı", ru: "Нахчыванский кутаб", en: "Nakhchivan qutab" },
    desc: { az: "Göyərti ilə", ru: "С зеленью", en: "With fresh herbs" } },
  { price: 16, name: { az: "Qəbələ dolması", ru: "Габалинская долма", en: "Gabala dolma" },
    desc: { az: "Üzüm yarpağında", ru: "В виноградных листьях", en: "In vine leaves" } },
  { price: 10, name: { az: "Nar salatı", ru: "Салат с гранатом", en: "Pomegranate salad" },
    desc: { az: "Təzə nar dənələri ilə", ru: "Со свежими зёрнами граната", en: "With fresh pomegranate seeds" } },
  { price: 9, name: { az: "Paxlava və şəkərbura", ru: "Пахлава и шекербура", en: "Pakhlava and shekerbura" },
    desc: { az: "Ənənəvi şirniyyat dəsti", ru: "Набор традиционных сладостей", en: "A set of traditional sweets" } },
  { price: 7, name: { az: "Nar şərbəti", ru: "Гранатовый шербет", en: "Pomegranate sherbet" },
    desc: { az: "Firma içkisi", ru: "Фирменный напиток", en: "House signature drink" } }
];

/* ---------------- КОМАНДА (5 человек) — впишите свои имена ---------------- */
const TEAM = [
  { name: "Ad Soyad 1", building: "hotel",
    role: { az: "Layihə rəhbəri", ru: "Руководитель проекта", en: "Project lead" } },
  { name: "Ad Soyad 2", building: "sport",
    role: { az: "Memarlıq konsepsiyası", ru: "Архитектурная концепция", en: "Architecture concept" } },
  { name: "Ad Soyad 3", building: "restaurant",
    role: { az: "Qastronomiya və servis", ru: "Гастрономия и сервис", en: "Food and service" } },
  { name: "Ad Soyad 4", building: "entertainment",
    role: { az: "Marketinq və brendinq", ru: "Маркетинг и брендинг", en: "Marketing and branding" } },
  { name: "Ad Soyad 5", building: "museum",
    role: { az: "Maliyyə və planlaşdırma", ru: "Финансы и планирование", en: "Finance and planning" } }
];

/* ---------------- ОТЗЫВЫ ---------------- */
const REVIEWS = [
  { name: "Leyla M.", from: { az: "Bakı", ru: "Баку", en: "Baku" }, stars: 5,
    text: { az: "Panoram günbəzli nömrədə ulduzların altında yatmaq unudulmaz idi. Səhər yeməyindəki nar şirəsi isə möcüzədir!",
            ru: "Спать под звёздами в номере с куполом — незабываемо. А гранатовый сок на завтраке — чудо!",
            en: "Sleeping under the stars in the dome room was unforgettable. And the pomegranate juice at breakfast is magic!" } },
  { name: "Thomas K.", from: { az: "Almaniya", ru: "Германия", en: "Germany" }, stars: 5,
    text: { az: "Belə memarlığı heç yerdə görməmişəm. Muzey Azərbaycanı bir gündə tanımağa imkan verdi.",
            ru: "Такой архитектуры я не видел нигде. Музей позволил узнать Азербайджан за один день.",
            en: "I've never seen architecture like this anywhere. The museum let me get to know Azerbaijan in a single day." } },
  { name: "Анна С.", from: { az: "Moskva", ru: "Москва", en: "Moscow" }, stars: 5,
    text: { az: "Şah Plovda Gəncə plovu — həyatımın ən dadlı plovu. Ofisiantların milli geyimləri çox gözəldir.",
            ru: "Гянджинский плов в «Шах-плове» — самый вкусный в моей жизни. Национальные костюмы официантов очень красивые.",
            en: "The Ganja plov at Shah Plov is the best I've ever had. The waiters' national costumes are beautiful." } },
  { name: "Murad Ə.", from: { az: "Gəncə", ru: "Гянджа", en: "Ganja" }, stars: 5,
    text: { az: "Uşaqlarla Xarıbülbül mərkəzində bütün günü keçirdik. Ailə üçün ideal yerdir.",
            ru: "Провели с детьми целый день в «Хары бюльбюль». Идеальное место для семьи.",
            en: "We spent a whole day at Kharibulbul with the kids. A perfect place for families." } },
  { name: "Aylin Y.", from: { az: "İstanbul", ru: "Стамбул", en: "Istanbul" }, stars: 4,
    text: { az: "Buta Arenadakı hovuz və SPA möhtəşəmdir. Mütləq yenidən gələcəyəm.",
            ru: "Бассейн в «Буте» и СПА великолепны. Обязательно вернусь.",
            en: "The pool at Buta Arena and the spa are superb. I'll definitely be back." } }
];

/* ---------------- FAQ ---------------- */
const FAQ = [
  { q: { az: "Qeydiyyat və çıxış saatları necədir?", ru: "Во сколько заезд и выезд?", en: "What are the check-in and check-out times?" },
    a: { az: "Qeydiyyat 14:00-dan, çıxış 12:00-a qədərdir. Erkən qeydiyyat imkan olduqda pulsuzdur.",
         ru: "Заезд с 14:00, выезд до 12:00. Ранний заезд бесплатно при наличии возможности.",
         en: "Check-in is from 14:00 and check-out is by 12:00. Early check-in is free when available." } },
  { q: { az: "Səhər yeməyi qiymətə daxildirmi?", ru: "Завтрак включён в стоимость?", en: "Is breakfast included?" },
    a: { az: "Bəli, bütün nömrələrdə milli və Avropa mətbəxindən ibarət açıq bufet daxildir.",
         ru: "Да, во все номера включён шведский стол с национальной и европейской кухней.",
         en: "Yes, every room includes a buffet with national and European dishes." } },
  { q: { az: "Otel qonaqları kompleksin digər binalarına necə daxil olur?", ru: "Как гости отеля попадают в другие здания комплекса?", en: "Can hotel guests visit the other buildings?" },
    a: { az: "Otel qonaqları üçün muzey, idman kompleksi və əyləncə mərkəzinə 20% endirim var.",
         ru: "Для гостей отеля скидка 20% в музей, спорткомплекс и развлекательный центр.",
         en: "Hotel guests get 20% off at the museum, sports complex and entertainment centre." } },
  { q: { az: "Aeroportdan transfer varmı?", ru: "Есть ли трансфер из аэропорта?", en: "Is there an airport transfer?" },
    a: { az: "Bəli, sifariş zamanı transfer seçə bilərsiniz. Royal Süitada transfer pulsuzdur.",
         ru: "Да, трансфер можно заказать при бронировании. В Королевском сьюте он бесплатный.",
         en: "Yes, you can add a transfer when booking. It is free with the Royal Suite." } },
  { q: { az: "Ev heyvanları ilə gəlmək olarmı?", ru: "Можно ли с домашними животными?", en: "Are pets allowed?" },
    a: { az: "Kiçik ev heyvanları əvvəlcədən razılaşdırmaqla qəbul olunur.",
         ru: "Небольшие питомцы допускаются по предварительному согласованию.",
         en: "Small pets are welcome by prior arrangement." } },
  { q: { az: "Sifarişi necə ləğv etmək olar?", ru: "Как отменить бронирование?", en: "How do I cancel a booking?" },
    a: { az: "Gəlişdən 48 saat əvvəl pulsuz ləğv etmək olar: bizə zəng edin və ya WhatsApp-a yazın.",
         ru: "Бесплатная отмена за 48 часов до заезда: позвоните нам или напишите в WhatsApp.",
         en: "Cancellation is free up to 48 hours before arrival. Call us or message us on WhatsApp." } }
];
