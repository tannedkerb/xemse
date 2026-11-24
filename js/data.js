/* =========================================================
   XƏMSƏ — ДАННЫЕ САЙТА (легко редактировать)
   ---------------------------------------------------------
   Все цифры взяты из презентации «KHAMSA — Experience Azerbaijan».
   У каждого текста три варианта: az / ru / en. Цены в AZN.
   ========================================================= */

const SITE = {
  currency: "AZN",
  phone: "+994 12 000 00 00",
  whatsapp: "994500000000",          // номер для WhatsApp без «+» и пробелов
  email: "info@xemse.az",
  address: { az: "Xəzər sahili park ərazisi, Abşeron, Azərbaycan", ru: "Прибрежный парк Каспийского моря, Апшерон, Азербайджан", en: "Caspian seaside park, Absheron, Azerbaijan" },
  mapQuery: "Baku Boulevard, Azerbaijan", // что показывать на карте Google
  socials: { instagram: "#", facebook: "#", tiktok: "#", youtube: "#" }
};

/* ---------------- 5 ЗДАНИЙ КОМПЛЕКСА ---------------- */
const BUILDINGS = [
  {
    id: "hotel", img: "img/hotel.jpg", color: "#c0283a",
    name: { az: "Nar Otel", ru: "Отель «Гранат»", en: "Pomegranate Hotel" },
    tag:  { az: "Nar və 8 Noyabr Zəfər Günü", ru: "Гранат и День Победы 8 ноября", en: "The pomegranate and Victory Day, 8 November" },
    capacity: { az: "gündə 600 qonağadək", ru: "до 600 гостей в сутки", en: "up to 600 guests a day" },
    short: {
      az: "Yetişmiş nar formasında 8 mərtəbəli flaqman otel: yaqut rəngli triplex şüşə, mis tillər və 240 nömrə.",
      ru: "Флагманский 8-этажный отель в форме спелого граната: рубиновый триплекс, медные рёбра и 240 номеров.",
      en: "An 8-storey flagship hotel shaped like a ripe pomegranate, with ruby glass, copper ribs and 240 rooms."
    },
    long: {
      az: "Ansamblın memarlıq dominantı. Düz səkkiz mərtəbə 8 Noyabr — Zəfər Gününün şərəfinədir: ərazi bütövlüyünün bərpası, milli birlik və xalqın ruhunun qələbəsi. Səkkiz rəqəmi bayrağımızdakı səkkizguşəli ulduzla da səsləşir. Bina meyvə prinsipi ilə qurulub: səkkiz mərtəbə hündürlüyündə mərkəzi işıqlı atrium asma bağlar və dəniz mənzərəli qalereyalarla ayrılmış «dənə-otaqlar»la əhatə olunub. 1-ci mərtəbə: «8 Noyabr» qrand-lobbisi, Göyçay nar sənətkarlığı qalereyası və SPA. 2–7-ci mərtəbələr: hər mərtəbədə 40 nömrə. 8-ci mərtəbə «Nar Tacı»: panoram müəllif restoranı və seyr terrası.",
      ru: "Архитектурная доминанта ансамбля. Ровно восемь этажей — в честь 8 ноября, Дня Победы Азербайджана: восстановление территориальной целостности, национальное единство и триумф духа народа. Число восемь перекликается и с восьмиконечной звездой на флаге. Здание устроено как плод: центральный световой атриум во все восемь этажей окружён «камерами-зёрнами», разделёнными висячими садами и галереями с видом на море. 1-й этаж — гранд-лобби «8 Ноября», галерея гёйчайского гранатового ремесла и спа. Со 2-го по 7-й — по 40 номеров на этаж. 8-й этаж «Корона Граната» — панорамный ресторан авторской кухни и смотровая терраса.",
      en: "The architectural centrepiece of the ensemble. Exactly eight floors honour 8 November, Azerbaijan's Victory Day, which marks restored territorial integrity, national unity and the triumph of the nation's spirit. Eight also echoes the eight-pointed star on the flag. The building works like the fruit itself: an eight-storey light-filled atrium is surrounded by 'seed' rooms, separated by hanging gardens and sea-view galleries. The ground floor holds the '8 November' grand lobby, a gallery of Goychay pomegranate crafts and the spa. Floors 2 to 7 have 40 rooms each. The 8th floor, 'Pomegranate Crown', is a panoramic signature restaurant with a viewing terrace."
    },
    features: {
      az: ["8 mərtəbə, 240 nömrə", "Standart = Deluxe vahid qiymət", "«8 Noyabr» qrand-lobbisi", "SPA mərkəzi", "«Nar Tacı» panoram restoranı", "Təbii nar ətri və əl işi xalçalar"],
      ru: ["8 этажей, 240 номеров", "Единая цена «Стандарт» = «Делюкс»", "Гранд-лобби «8 Ноября»", "Спа-центр", "Панорамный ресторан «Корона Граната»", "Аромат граната и ковры ручной работы"],
      en: ["8 floors, 240 rooms", "One price for Standard and Deluxe", "'8 November' grand lobby", "Spa centre", "'Pomegranate Crown' panoramic restaurant", "Natural pomegranate scent and handmade carpets"]
    }
  },
  {
    id: "sport", img: "img/sport.jpg", color: "#1f6f86",
    name: { az: "Buta Arena", ru: "Арена «Бута»", en: "Buta Arena" },
    tag:  { az: "Buta ornamenti və üçrəngli bayraq", ru: "Орнамент бута и триколор", en: "The buta ornament and the tricolour" },
    capacity: { az: "3 500 tamaşaçı", ru: "до 3 500 зрителей", en: "up to 3,500 spectators" },
    short: {
      az: "Bayraq rənglərində vitrajlı, 48 metrlik buta formalı idman-konsert kompleksi və 50 metrlik olimpiya hovuzu.",
      ru: "Спортивно-концертный комплекс в форме буты высотой 48 м с витражом в цветах флага и 50-метровым олимпийским бассейном.",
      en: "A 48-metre buta-shaped sports and concert venue with flag-coloured stained glass and a 50-metre Olympic pool."
    },
    long: {
      az: "Buta — odun, həyat enerjisinin və yuxarıya fasiləsiz hərəkətin qədim rəmzi. 48 metr hündürlüyündə əyilmiş damla formalı həcm monumental qranit stilobata söykənir və Odlar Yurdunun göyə yüksələn alovunu xatırladır. Fasad bayrağın mavi, qırmızı və yaşıl rənglərində struktur vitrajdır, mərkəzdə axşam işıqlandırması ilə aypara və səkkizguşəli ulduz var. Daxildə güləş, cüdo, bədii gimnastika və voleybol üçün 3 500 yerlik universal arena, 50 metrlik olimpiya hovuzu və idman təbabəti mərkəzi yerləşir. Qüllənin yuxarısında press-mərkəz, kibersport arenaları və panoram fitnes-klub var.",
      ru: "Бута — древний символ огня, жизненной энергии и непрерывного движения вверх. Изогнутый каплевидный объём высотой 48 метров опирается на гранитный стилобат и напоминает устремлённое в небо пламя Страны Огней. Фасад — структурный витраж в голубом, красном и зелёном цветах флага, в центре полумесяц и восьмиконечная звезда с вечерней подсветкой. Внутри универсальная арена на 3 500 зрителей для борьбы, дзюдо, художественной гимнастики и волейбола, 50-метровый олимпийский бассейн и центр спортивной медицины. Наверху башни пресс-центр, киберспортивные арены и панорамный фитнес-клуб.",
      en: "The buta is an ancient symbol of fire, life energy and constant upward movement. The 48-metre curved teardrop rests on a granite podium, like a flame rising from the Land of Fire. The façade is structural stained glass in the blue, red and green of the flag, with the crescent and eight-pointed star lit up at night. Inside are a 3,500-seat arena for wrestling, judo, rhythmic gymnastics and volleyball, a 50-metre Olympic pool and a sports medicine centre. The top of the tower holds a press centre, esports arenas and a panoramic fitness club."
    },
    features: {
      az: ["3 500 yerlik universal arena", "50 m olimpiya hovuzu", "İdman təbabəti və reabilitasiya", "Dünya və Avropa çempionatları", "Kibersport və press-mərkəz"],
      ru: ["Универсальная арена на 3 500 мест", "50-метровый олимпийский бассейн", "Спортивная медицина и реабилитация", "Чемпионаты мира и Европы", "Киберспорт и пресс-центр"],
      en: ["3,500-seat multipurpose arena", "50 m Olympic pool", "Sports medicine and rehab", "World and European championships", "Esports and press centre"]
    }
  },
  {
    id: "restaurant", img: "img/restaurant.jpg", color: "#d9a441",
    name: { az: "Şah Plov Restoranı", ru: "Ресторан «Шах-Плов»", en: "Shah Plov Restaurant" },
    tag:  { az: "Qazmaxda kral plovu", ru: "Королевский плов в газмахе", en: "Royal plov in a golden qazmakh crust" },
    capacity: { az: "320 yer", ru: "320 мест", en: "320 seats" },
    short: {
      az: "Qızılı travertin və bürünc günbəzli silindrik pavilyon: bütün bölgələrin mətbəxini təqdim edən qastronomiya teatrı.",
      ru: "Цилиндрический павильон из золотистого травертина с бронзовым куполом — гастрономический театр кухни всех регионов.",
      en: "A cylindrical pavilion of golden travertine with a bronze dome: a food theatre serving the cuisine of every region."
    },
    long: {
      az: "Restoran Azərbaycanın əsas bayram yeməyi — xırtıldayan qızılı qazmaxda bişmiş şah plov formasındadır. Qazan obrazı isti qızılı travertində təcəssüm olunub, üstündə isə zəfəran düyüsü, şabalıd, qaysı qurusu və kişmişi xatırladan açıq metal günbəz var. Əsas ideya — süfrəni muğam və xalq çalğı alətlərinin müşayiəti ilə bütün tarixi bölgələr üzrə canlı etnoqrafik səyahətə çevirmək. Şah plovun təqdimatı tar və kamançanın sədaları altında qazmaxın kəsilməsi ritualı ilə müşayiət olunur.",
      ru: "Ресторан выполнен в форме главного праздничного блюда Азербайджана — шах-плова в хрустящей золотистой корочке-газмахе. Образ казана воплощён в тёплом золотистом травертине и увенчан ажурным металлическим куполом, напоминающим россыпь шафранового риса, каштанов, кураги и кишмиша. Главная идея — превратить трапезу в живое этнографическое путешествие по всем регионам страны под мугам и народные инструменты. Вынос шах-плова сопровождается ритуалом разрезания газмаха под звуки тара и кяманчи.",
      en: "The restaurant takes the form of Azerbaijan's great festive dish: shah plov baked in a crisp golden qazmakh crust. The pot is rendered in warm golden travertine and crowned with an openwork metal dome that evokes saffron rice, chestnuts, dried apricots and raisins. The idea is to turn a meal into a living journey through every historic region, accompanied by mugham and folk instruments. The shah plov is served with the ritual cutting of the crust to the sound of the tar and kamancha."
    },
    features: {
      az: ["Açıq ocaqlar", "Bütün bölgələrin ustaları", "Muğam və canlı musiqi", "Milli geyimdə xidmət", "«Şərq bazarı» dükanı"],
      ru: ["Открытые очаги", "Мастера из всех регионов", "Мугам и живая музыка", "Персонал в национальных костюмах", "Лавка «Восточный базар»"],
      en: ["Open hearths", "Masters from every region", "Mugham and live music", "Staff in national costume", "'Eastern Bazaar' shop"]
    }
  },
  {
    id: "entertainment", img: "img/entertainment.jpg", color: "#6b4bc4",
    name: { az: "Xarıbülbül Mərkəzi", ru: "Центр «Хары-Бюльбюль»", en: "Kharibulbul Centre" },
    tag:  { az: "Şuşanın endemik çiçəyi", ru: "Эндемичный цветок Шуши", en: "Shusha's endemic flower" },
    capacity: { az: "1 800 nəfərədək", ru: "до 1 800 человек", en: "up to 1,800 people" },
    short: {
      az: "Bənövşəyi-iridessent şüşə və qızılı metaldan beş ləçəkli çiçək: 900 yerlik konsert zalı, VR və ailə parkı.",
      ru: "Цветок из фиолетово-иридисцентного стекла и золотистого металла: концертный зал на 900 мест, VR и семейный парк.",
      en: "A flower of iridescent violet glass and golden metal: a 900-seat concert hall, VR attractions and a family park."
    },
    long: {
      az: "Mərkəz Şuşanın, Qarabağın, sülhün və dirçəlişin rəmzi olan nadir endemik Xarıbülbül çiçəyi formasındadır. Bu bitkinin çiçəyi ləçəklərə qonmuş bülbülü xatırladır. Memarlar bu poetik obrazı beş açılan böyük vitraj ləçək və mərkəzi zümrüd-qızılı günbəz kimi təcəssüm etdiriblər. Gündüz ləçəklərin altı günəş işığı ilə dolur, axşam isə dinamik işıqlandırma mərkəzi sahil bulvarının parlayan incisinə çevirir. Daxildə dünya səviyyəli akustikası olan 900 yerlik konsert-teatr zalı, rəqəmsal art-qalereyalar, VR attraksionları və uşaq laboratoriyaları var.",
      ru: "Центр спроектирован в виде редкого эндемичного цветка Хары-Бюльбюль — символа Шуши, Карабаха, мира и возрождения. Его соцветие напоминает соловья, присевшего на лепестки. Архитекторы воплотили этот образ в пяти раскрывающихся витражных лепестках и центральном изумрудно-золотистом куполе. Днём под лепестками много солнечного света, вечером динамическая подсветка превращает центр в сияющую жемчужину бульвара. Внутри концертно-театральный зал на 900 мест с акустикой мирового класса, цифровые арт-галереи, VR-аттракционы и детские научные лаборатории.",
      en: "The centre takes the form of the rare Kharibulbul flower, a symbol of Shusha, Karabakh, peace and renewal. Its blossom looks like a nightingale perched on the petals. The architects turned this image into five opening stained-glass petals around a central emerald-and-gold dome. By day the space under the petals fills with sunlight, and at night dynamic lighting turns it into the shining pearl of the boulevard. Inside are a 900-seat concert and theatre hall with world-class acoustics, digital art galleries, VR attractions and science labs for children."
    },
    features: {
      az: ["900 yerlik konsert-teatr zalı", "Beynəlxalq festivallar və işıq şouları", "Rəqəmsal art-qalereyalar", "VR attraksionları", "Uşaq laboratoriyaları və kafelər"],
      ru: ["Концертно-театральный зал на 900 мест", "Фестивали и световые шоу", "Цифровые арт-галереи", "VR-аттракционы", "Детские лаборатории и кафе"],
      en: ["900-seat concert and theatre hall", "Festivals and light shows", "Digital art galleries", "VR attractions", "Kids' labs and cafés"]
    }
  },
  {
    id: "museum", img: "img/museum.jpg", color: "#e8e1d0",
    name: { az: "«Azərbaycan Xəritəsi» Muzeyi", ru: "Музей «Карта Азербайджана»", en: "'Map of Azerbaijan' Museum" },
    tag:  { az: "Bir dam altında ölkə səyahəti", ru: "Путешествие по стране под одной крышей", en: "A journey across the country under one roof" },
    capacity: { az: "2 200 nəfərədək", ru: "до 2 200 человек", en: "up to 2,200 people" },
    short: {
      az: "Ölkənin coğrafi konturlarını dəqiq təkrarlayan ağ beton pavilyon: regional zallar, Zəfər və Xatirə zalı, Şəhidlər guşəsi.",
      ru: "Белоснежный павильон, повторяющий контуры страны: региональные залы, Зал Памяти и Победы, Стенд Шехидов.",
      en: "A white pavilion that follows the outline of the country: regional halls, the Hall of Memory and Victory, and the Martyrs' Memorial."
    },
    long: {
      az: "Ağ memarlıq betonu və panoram şüşədən olan bina planda Azərbaycanın sərhədlərini dəqiq təkrarlayır: Böyük Qafqaz silsiləsi və Abşerondan Talış dağlarına, Naxçıvan və Qarabağa qədər. Daxili məkan canlı coğrafi xəritədir: zaldan zala keçərək ziyarətçi bütün bölgələri gəzir. Gəncə-Qazax, Şirvan, Kür-Araz, Lənkəran, Naxçıvan və Qarabağ pavilyonlarında əsl artefaktlar, sənətkarlıq, musiqi və multimedia dioramalar var. Zəfər və Xatirə zalı Qarabağ müharibələrinə həsr olunub. Şəhidlər guşəsində interaktiv «Xatirə divarı», rəqəmsal Qəhrəmanlar kitabı və mərkəzi işıq günbəzi altında «Həyat ağacı» yerləşir.",
      ru: "Здание из белого архитектурного бетона и панорамного стекла в плане точно повторяет границы Азербайджана — от Главного Кавказского хребта и Апшерона до Талышских гор, Нахчывана и Карабаха. Внутри живая географическая карта: переходя из зала в зал, посетитель путешествует по всем регионам. В павильонах Гянджа-Газахского, Ширванского, Кура-Аразского, Ленкоранского, Нахчыванского и Карабахского регионов — подлинные артефакты, ремёсла, музыка и мультимедийные диорамы. Зал Памяти и Победы посвящён Карабахским войнам. В зале Шехидов интерактивная «Стена Памяти», цифровая Книга Героев и «Древо Жизни» под центральным световым куполом.",
      en: "Built of white architectural concrete and panoramic glass, the building follows Azerbaijan's borders exactly, from the Greater Caucasus and Absheron to the Talysh Mountains, Nakhchivan and Karabakh. Inside is a living map: moving from hall to hall, visitors travel through every region. The Ganja-Gazakh, Shirvan, Kur-Araz, Lankaran, Nakhchivan and Karabakh pavilions hold authentic artefacts, crafts, music and multimedia dioramas. The Hall of Memory and Victory is devoted to the Karabakh wars. The Martyrs' Memorial has an interactive Wall of Memory, a digital Book of Heroes and a Tree of Life beneath the central light dome."
    },
    features: {
      az: ["Regional pavilyonlar", "Zəfər və Xatirə zalı", "Şəhidlər guşəsi və «Həyat ağacı»", "Multimedia dioramalar", "Məktəblilər və veteranlar üçün pulsuz"],
      ru: ["Региональные павильоны", "Зал Памяти и Победы", "Стенд Шехидов и «Древо Жизни»", "Мультимедийные диорамы", "Бесплатно для школьников и ветеранов"],
      en: ["Regional pavilions", "Hall of Memory and Victory", "Martyrs' Memorial and Tree of Life", "Multimedia dioramas", "Free for schoolchildren and veterans"]
    }
  }
];

/* ---------------- НОМЕРА: единая цена «Стандарт» = «Делюкс» ----------------
   low  — низкий сезон, high — высокий сезон (AZN за ночь).
   HIGH_SEASON_MONTHS — какие месяцы считаются высоким сезоном (1 = январь). */
const HIGH_SEASON_MONTHS = [6, 7, 8, 9];
const ROOMS = [
  {
    id: "standard", price: { low: 220, high: 340 }, size: 28, guests: 2, img: "img/hotel.jpg",
    name: { az: "Standart", ru: "Стандарт", en: "Standard" },
    desc: {
      az: "Klassik planlaşdırma, nar və qızıl çalarları, əl işi xalça panno və dəniz və ya atrium mənzərəsi.",
      ru: "Классическая планировка, оттенки граната и золота, ковровое панно ручной работы, вид на море или атриум.",
      en: "A classic layout in pomegranate and gold, a handmade carpet panel, and a view of the sea or the atrium."
    },
    amen: ["wifi", "breakfast", "ac", "tv"]
  },
  {
    id: "deluxe", price: { low: 220, high: 340 }, size: 38, guests: 3, img: "img/hotel.jpg",
    name: { az: "Deluxe", ru: "Делюкс", en: "Deluxe" },
    desc: {
      az: "Böyüdülmüş istirahət zonası və asma bağ mənzərəsi — Standartla eyni qiymətə, heç bir əlavə ödəniş olmadan.",
      ru: "Увеличенная зона отдыха и вид на висячие сады — по той же цене, что и «Стандарт», без доплаты за категорию.",
      en: "A larger lounge area overlooking the hanging gardens, at the same price as Standard with no upgrade fee."
    },
    amen: ["wifi", "breakfast", "ac", "tv", "balcony", "spa"]
  }
];

const AMENITIES = {
  wifi:      { icon: "📶", az: "Wi-Fi", ru: "Wi-Fi", en: "Wi-Fi" },
  breakfast: { icon: "🥐", az: "Səhər yeməyi", ru: "Завтрак", en: "Breakfast" },
  ac:        { icon: "❄️", az: "Kondisioner", ru: "Кондиционер", en: "Air conditioning" },
  tv:        { icon: "📺", az: "Smart TV", ru: "Smart TV", en: "Smart TV" },
  balcony:   { icon: "🌿", az: "Bağ mənzərəsi", ru: "Вид на сады", en: "Garden view" },
  spa:       { icon: "🧖", az: "SPA girişi", ru: "Вход в СПА", en: "Spa access" }
};

/* ---------------- БИЛЕТЫ И KHAMSA PASS ---------------- */
const TICKETS = [
  { building: "restaurant", from: 45, to: 95,
    label: { az: "Orta çek", ru: "Средний чек", en: "Average bill" } },
  { building: "entertainment", from: 20, to: 65,
    label: { az: "Giriş / şou", ru: "Вход / шоу", en: "Entry / show" } },
  { building: "sport", from: 15, to: 80,
    label: { az: "Bilet / abunə", ru: "Билеты / абонементы", en: "Tickets / passes" } },
  { building: "museum", from: 15, to: 25,
    label: { az: "Böyüklər (məktəblilər və veteranlar — pulsuz)", ru: "Взрослый (школьники и ветераны — бесплатно)", en: "Adults (free for schoolchildren and veterans)" } }
];
const KHAMSA_PASS = { from: 75, to: 120 };

/* ---------------- МЕНЮ РЕСТОРАНА ---------------- */
const MENU = [
  { price: 38, name: { az: "Şah plov", ru: "Шах-плов", en: "Shah plov" },
    desc: { az: "Qazmaxın kəsilməsi ritualı ilə", ru: "С ритуалом разрезания газмаха", en: "With the crust-cutting ritual" } },
  { price: 28, name: { az: "Gəncə plovu", ru: "Гянджинский плов", en: "Ganja plov" },
    desc: { az: "Şabalıd və kişmişlə", ru: "С каштанами и изюмом", en: "With chestnuts and raisins" } },
  { price: 26, name: { az: "Lənkəran ləvəngisi", ru: "Ленкоранский лявянги", en: "Lankaran lavangi" },
    desc: { az: "Qoz və alça ilə doldurulmuş toyuq", ru: "Курица с орехами и алычой", en: "Chicken stuffed with walnuts and sour plum" } },
  { price: 18, name: { az: "Şəki pitisi", ru: "Шекинское пити", en: "Shaki piti" },
    desc: { az: "Saxsı qabda", ru: "В глиняном горшочке", en: "In a clay pot" } },
  { price: 12, name: { az: "Naxçıvan qutabı", ru: "Нахчыванский кутаб", en: "Nakhchivan qutab" },
    desc: { az: "Göyərti ilə", ru: "С зеленью", en: "With fresh herbs" } },
  { price: 16, name: { az: "Qəbələ dolması", ru: "Габалинская долма", en: "Gabala dolma" },
    desc: { az: "Üzüm yarpağında", ru: "В виноградных листьях", en: "In vine leaves" } },
  { price: 24, name: { az: "Narşərablı ət", ru: "Мясо с наршарабом", en: "Lamb with narsharab" },
    desc: { az: "Nar sousu ilə", ru: "В гранатовом соусе", en: "In pomegranate sauce" } },
  { price: 9, name: { az: "Paxlava, şəkərbura və Lənkəran çayı", ru: "Пахлава, шекербура и ленкоранский чай", en: "Pakhlava, shekerbura and Lankaran tea" },
    desc: { az: "Ənənəvi şirniyyat dəsti", ru: "Набор традиционных сладостей", en: "A set of traditional sweets" } }
];

/* ---------------- ИНВЕСТИЦИОННЫЕ ПОКАЗАТЕЛИ ---------------- */
const INVEST = [
  { value: 145, suffix: { az: " mln", ru: " млн", en: "M" }, unit: "AZN", label: { az: "İnvestisiya (CAPEX)", ru: "Инвестиции (CAPEX)", en: "Investment (CAPEX)" } },
  { value: 37.8, decimals: 1, suffix: { az: " mln", ru: " млн", en: "M" }, unit: "AZN", label: { az: "İllik gəlir", ru: "Выручка в год", en: "Annual revenue" } },
  { value: 32.7, decimals: 1, suffix: { az: "%", ru: "%", en: "%" }, label: { az: "EBITDA rentabelliyi", ru: "Рентабельность EBITDA", en: "EBITDA margin" } },
  { value: 9.8, decimals: 1, suffix: { az: " il", ru: " лет", en: " yrs" }, label: { az: "Geri qaytarılma müddəti", ru: "Срок окупаемости", en: "Payback period" } },
  { value: 13.4, decimals: 1, suffix: { az: "%", ru: "%", en: "%" }, label: { az: "IRR", ru: "IRR", en: "IRR" } },
  { value: 340, suffix: { az: " min", ru: " тыс.", en: "K" }, label: { az: "qonaq ildə (142 min əcnəbi)", ru: "гостей в год (142 тыс. иностранцев)", en: "guests a year (142K from abroad)" } }
];

/* ---------------- КОМАНДА: каждому — его здание ---------------- */
const TEAM = [
  { name: "Fariz Akhmedov",      building: "hotel" },
  { name: "Elmin Huseynov",      building: "sport" },
  { name: "Elmeddin Huseynov",   building: "restaurant" },
  { name: "Iman Huseynov",       building: "entertainment" },
  { name: "Bogdan Skorobogatov", building: "museum" }
];

/* ---------------- ОТЗЫВЫ ---------------- */
const REVIEWS = [
  { name: "Leyla M.", from: { az: "Bakı", ru: "Баку", en: "Baku" }, stars: 5,
    text: { az: "«Nar Tacı» terrasından Xəzərə gün batımı unudulmazdır. Standartla Deluxe eyni qiymətdədir — əla fikirdir!",
            ru: "Закат над Каспием с террасы «Корона Граната» незабываем. «Стандарт» и «Делюкс» по одной цене — отличная идея!",
            en: "The sunset over the Caspian from the 'Pomegranate Crown' terrace is unforgettable. Standard and Deluxe at one price is a great idea!" } },
  { name: "Thomas K.", from: { az: "Almaniya", ru: "Германия", en: "Germany" }, stars: 5,
    text: { az: "Belə memarlığı heç yerdə görməmişəm. Muzey Azərbaycanı bir gündə tanımağa imkan verdi.",
            ru: "Такой архитектуры я не видел нигде. Музей позволил узнать Азербайджан за один день.",
            en: "I've never seen architecture like this anywhere. The museum let me get to know Azerbaijan in a single day." } },
  { name: "Анна С.", from: { az: "Moskva", ru: "Москва", en: "Moscow" }, stars: 5,
    text: { az: "Şah plovun qazmaxı tar sədaları altında kəsiləndə bütün zal alqışladı. Əsl teatr!",
            ru: "Когда под звуки тара разрезали газмах шах-плова, весь зал аплодировал. Настоящий театр!",
            en: "When they cut the shah plov crust to the sound of the tar, the whole hall applauded. Real theatre!" } },
  { name: "Murad Ə.", from: { az: "Gəncə", ru: "Гянджа", en: "Ganja" }, stars: 5,
    text: { az: "Khamsa Pass ilə bir gündə hər beş binanı gəzdik. Uşaqlar Xarıbülbüldəki VR-dan ayrılmaq istəmirdilər.",
            ru: "С Khamsa Pass обошли все пять зданий за день. Дети не хотели уходить из VR в «Хары-Бюльбюль».",
            en: "With the Khamsa Pass we saw all five buildings in one day. The kids didn't want to leave the VR at Kharibulbul." } },
  { name: "Aylin Y.", from: { az: "İstanbul", ru: "Стамбул", en: "Istanbul" }, stars: 4,
    text: { az: "Buta Arenadakı olimpiya hovuzu və otelin SPA-sı möhtəşəmdir. Mütləq yenidən gələcəyəm.",
            ru: "Олимпийский бассейн в «Буте» и спа в отеле великолепны. Обязательно вернусь.",
            en: "The Olympic pool at Buta Arena and the hotel spa are superb. I'll definitely be back." } }
];

/* ---------------- FAQ ---------------- */
const FAQ = [
  { q: { az: "Niyə Standart və Deluxe eyni qiymətədir?", ru: "Почему «Стандарт» и «Делюкс» стоят одинаково?", en: "Why do Standard and Deluxe cost the same?" },
    a: { az: "Bərabərlik fəlsəfəsi və Qafqaz qonaqpərvərliyi əlaməti olaraq: siz sadəcə planlaşdırmanı seçirsiniz, status üçün əlavə ödəniş yoxdur.",
         ru: "В знак философии равенства и кавказского гостеприимства: вы просто выбираете планировку, без доплаты за статус категории.",
         en: "As a sign of equality and Caucasian hospitality: you simply choose the layout, with no surcharge for the category." } },
  { q: { az: "Yüksək mövsüm nə vaxtdır?", ru: "Когда высокий сезон?", en: "When is high season?" },
    a: { az: "İyun–sentyabr: gecəsi 340 AZN. Qalan aylarda — 220 AZN. Rezervasiya forması qiyməti hər gecə üçün avtomatik hesablayır.",
         ru: "Июнь–сентябрь: 340 AZN за ночь. В остальные месяцы — 220 AZN. Форма бронирования считает цену каждой ночи автоматически.",
         en: "June to September: 340 AZN a night. The rest of the year: 220 AZN. The booking form prices each night automatically." } },
  { q: { az: "Khamsa Pass nədir?", ru: "Что такое Khamsa Pass?", en: "What is the Khamsa Pass?" },
    a: { az: "Vahid rəqəmsal bilet (75–120 AZN): beş binaya giriş, restoran və axşam şouları bir keçiddə.",
         ru: "Единый цифровой пропуск (75–120 AZN): вход во все пять зданий, ресторан и вечерние шоу в одном пропуске.",
         en: "A single digital pass (75–120 AZN) covering all five buildings, the restaurant and the evening shows." } },
  { q: { az: "Muzeyə giriş neçəyədir?", ru: "Сколько стоит вход в музей?", en: "How much is museum entry?" },
    a: { az: "Böyüklər üçün 15–25 AZN, məktəblilər və veteranlar üçün pulsuzdur.",
         ru: "Для взрослых 15–25 AZN, для школьников и ветеранов — бесплатно.",
         en: "15–25 AZN for adults, free for schoolchildren and veterans." } },
  { q: { az: "Kompleks hansı dillərdə xidmət göstərir?", ru: "На каких языках работает комплекс?", en: "Which languages does the complex support?" },
    a: { az: "Naviqasiya beş dildədir: Azərbaycan, ingilis, rus, ərəb və türk. Mühit maneəsizdir.",
         ru: "Навигация на пяти языках: азербайджанском, английском, русском, арабском и турецком. Среда безбарьерная.",
         en: "Signage is in five languages: Azerbaijani, English, Russian, Arabic and Turkish. The whole site is step-free." } },
  { q: { az: "Sifarişi necə ləğv etmək olar?", ru: "Как отменить бронирование?", en: "How do I cancel a booking?" },
    a: { az: "Gəlişdən 48 saat əvvəl pulsuz ləğv etmək olar: bizə zəng edin və ya WhatsApp-a yazın.",
         ru: "Бесплатная отмена за 48 часов до заезда: позвоните нам или напишите в WhatsApp.",
         en: "Cancellation is free up to 48 hours before arrival. Call us or message us on WhatsApp." } }
];
