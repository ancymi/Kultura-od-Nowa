"use strict";

const zrodla = {
    "bimba": {
        "tytul": "Bimba, Wielki słownik języka polskiego PAN",
        "autor": "Instytut Języka Polskiego PAN",
        "url": "https://wsjp.pl/haslo/podglad/54727/bimba"
    },
    "pyra": {
        "tytul": "Pyra, hasło słownikowe",
        "autor": "Dobry słownik",
        "url": "https://dobryslownik.pl/slowo/pyra/47186/"
    },
    "pyraZasieg": {
        "tytul": "Pyra, znaczenie i zasięg regionalny",
        "autor": "Wikisłownik, z odwołaniem do Słownika dwudziestowiecznej Łodzi (Bieńkowska, Cybulski, Umińska-Tytoń, 2007)",
        "url": "https://pl.wiktionary.org/wiki/pyra"
    },
    "szneka": {
        "tytul": "Szneka, hasło słownikowe",
        "autor": "Dobry słownik",
        "url": "https://dobryslownik.pl/slowo/szneka/108608/"
    },
    "ryczka": {
        "tytul": "Ryczka, Ojczysty, dodaj do ulubionych",
        "autor": "Narodowe Centrum Kultury",
        "url": "https://nck.pl/projekty-kulturalne/projekty/ojczysty-dodaj-do-ulubionych/ciekawostki-jezykowe/RYCZKA"
    },
    "lista": {
        "tytul": "Krajowa lista niematerialnego dziedzictwa kulturowego",
        "autor": "Narodowy Instytut Dziedzictwa, wpisy o Lajkoniku, hafcie żukowskim, koronce koniakowskiej i kroszonkarstwie opolskim",
        "url": "https://niematerialne.nid.pl/krajowa-lista-niematerialnego-dziedzictwa-kulturowego/"
    },
    "szopki": {
        "tytul": "10 lat szopkarstwa krakowskiego na Krajowej liście niematerialnego dziedzictwa kulturowego",
        "autor": "Narodowy Instytut Dziedzictwa",
        "url": "https://nid.pl/en/2024/12/05/10-lat-szopkarstwa-krakowskiego-na-krajowej-liscie-niematerialnego-dziedzictwa-kulturowego/"
    },
    "palmy": {
        "tytul": "5 nowych wpisów na Krajowej liście niematerialnego dziedzictwa kulturowego",
        "autor": "Narodowy Instytut Dziedzictwa, część o palmach Kurpiów Puszczy Zielonej",
        "url": "https://nid.pl/2024/04/23/5-nowych-wpisow-na-krajowej-liscie-ndk/"
    },
    "wycinanka": {
        "tytul": "Wycinanka łowicka, obiekt MNWr E-4205",
        "autor": "Muzeum Narodowe we Wrocławiu, Muzeum Etnograficzne",
        "url": "https://muzeumcyfrowe.mnwr.pl/obiekt/wycinanka-lowicka"
    },
    "odmiany": {
        "tytul": "Zielko i Leluja, wywiad z Marią Samsel",
        "autor": "Narodowy Instytut Dziedzictwa",
        "url": "https://nid.pl/en/2024/10/16/zielko-i-leluja-wywiad-z-maria-samsel/"
    },
    "poznan": {
        "tytul": "Podręczny słownik gwary poznańskiej",
        "autor": "Wojewódzka Biblioteka Publiczna i Centrum Animacji Kultury w Poznaniu",
        "url": "https://regionwielkopolska.pl/kultura-ludowa/gwara/podreczny-slownik-gwary-poznanskiej/"
    },
    "kold": {
        "tytul": "Skrócony słownik gwary poznańskiej (PDF)",
        "autor": "Jerzy Romuald Stankiewicz; udostępnienie: LGD KOLD",
        "url": "https://www.kold.pl/Image/files/slownik.pdf"
    },
    "slask": {
        "tytul": "Podręczny Słownik Gwary Śląskiej",
        "autor": "Bożena Cząstka, recenzja Jan Miodek; ATElier Kultury w Jaworznie",
        "url": "https://www.atelierkultury.pl/wydarzenia-kulturalne/aktualnosci/Podreczny-Slownik-Gwary-Slaskiej/idn:1366"
    },
    "podlasie": {
        "tytul": "Animowany słownik gwary podlaskiej (2023)",
        "autor": "Białostocki Ośrodek Kultury, Filmowe Podlasie Edukuje!",
        "url": "https://bok.bialystok.pl/wydarzenie/filmowe-podlasie-edukuje-2023-animowany-slownik-gwary-podlaskiej/"
    },
    "gloger": {
        "tytul": "Słownik gwary ludowej w okręgu tykocińskim (1893, PDF)",
        "autor": "Zygmunt Gloger; przedruk w Pismach rozproszonych, t. III, Książnica Podlaska i Uniwersytet w Białymstoku, 2016",
        "url": "https://ksiaznicapodlaska.pl/site/gloger/t3/Rozdzial_XV.pdf"
    },
    "nid23": {
        "tytul": "Tradycje dudziarskie w Wielkopolsce, Krajowa lista NDK",
        "autor": "Narodowy Instytut Dziedzictwa",
        "url": "https://niematerialne.nid.pl/zjawisko/23-tradycje-dudziarskie/"
    },
    "nid24": {
        "tytul": "Wyplatanie kabłącoków w Lucimi, Krajowa lista NDK",
        "autor": "Narodowy Instytut Dziedzictwa",
        "url": "https://niematerialne.nid.pl/zjawisko/24-wyplatanie-kablacoka/"
    },
    "nid25": {
        "tytul": "Tradycje weselne z Szamotuł, Krajowa lista NDK",
        "autor": "Narodowy Instytut Dziedzictwa",
        "url": "https://niematerialne.nid.pl/zjawisko/25-wesele-szamotuly/"
    },
    "nid26": {
        "tytul": "Wyścigi kumoterek, Krajowa lista NDK",
        "autor": "Narodowy Instytut Dziedzictwa",
        "url": "https://niematerialne.nid.pl/zjawisko/26-wyscigi-kumoterek/"
    },
    "nid27": {
        "tytul": "Gra i budowa dud żywieckich, Krajowa lista NDK",
        "autor": "Narodowy Instytut Dziedzictwa",
        "url": "https://niematerialne.nid.pl/zjawisko/27-gra-na-dudach-zywieckich/"
    },
    "nid28": {
        "tytul": "Kwietne dywany w Spycimierzu, Krajowa lista NDK",
        "autor": "Narodowy Instytut Dziedzictwa",
        "url": "https://niematerialne.nid.pl/zjawisko/28-boze-cialo/"
    },
    "nid29": {
        "tytul": "Budowanie gajd i gra na nich, Krajowa lista NDK",
        "autor": "Narodowy Instytut Dziedzictwa",
        "url": "https://niematerialne.nid.pl/zjawisko/29-gajdy/"
    },
    "nid30": {
        "tytul": "Barbórka górników Górnego Śląska, Krajowa lista NDK",
        "autor": "Narodowy Instytut Dziedzictwa",
        "url": "https://niematerialne.nid.pl/zjawisko/30-barborka/"
    },
    "nid32": {
        "tytul": "Tradycje Bambrów Poznańskich, Krajowa lista NDK",
        "autor": "Narodowy Instytut Dziedzictwa",
        "url": "https://niematerialne.nid.pl/zjawisko/32-bambry-poznanskie/"
    },
    "nid34": {
        "tytul": "Ręczne malowanie wzoru opolskiego, Krajowa lista NDK",
        "autor": "Narodowy Instytut Dziedzictwa",
        "url": "https://niematerialne.nid.pl/zjawisko/34-malowanie-wzoru-opolskiego/"
    },
    "nid35": {
        "tytul": "Wodzenie niedźwiedzia na Opolszczyźnie, Krajowa lista NDK",
        "autor": "Narodowy Instytut Dziedzictwa",
        "url": "https://niematerialne.nid.pl/zjawisko/35-wodzenie-niedzwiedzia/"
    },
    "nid37": {
        "tytul": "Kaszubska Gwiôzdka, Krajowa lista NDK",
        "autor": "Narodowy Instytut Dziedzictwa",
        "url": "https://niematerialne.nid.pl/zjawisko/37-kaszubska-gwiozdka/"
    },
    "nid38": {
        "tytul": "Wycinankarstwo kurpiowskie Puszczy Zielonej, Krajowa lista NDK",
        "autor": "Narodowy Instytut Dziedzictwa",
        "url": "https://niematerialne.nid.pl/zjawisko/38-wycinkarstwo/"
    },
    "nid39": {
        "tytul": "Krzyżoki w Borkach Małych, Krajowa lista NDK",
        "autor": "Narodowy Instytut Dziedzictwa",
        "url": "https://niematerialne.nid.pl/zjawisko/39-krzyzoki/"
    },
    "nid40": {
        "tytul": "Babski comber na Śląsku Opolskim, Krajowa lista NDK",
        "autor": "Narodowy Instytut Dziedzictwa",
        "url": "https://niematerialne.nid.pl/zjawisko/40-babski-comber/"
    },
    "nid41": {
        "tytul": "Kwietne dywany w czterech wsiach opolskich, Krajowa lista NDK",
        "autor": "Narodowy Instytut Dziedzictwa",
        "url": "https://niematerialne.nid.pl/zjawisko/41-procesja-boze-ciala/"
    },
    "nid42": {
        "tytul": "Pisanki batikowe na Śląsku Opolskim, Krajowa lista NDK",
        "autor": "Narodowy Instytut Dziedzictwa",
        "url": "https://niematerialne.nid.pl/zjawisko/42-pisanki-batikowe/"
    },
    "nid43": {
        "tytul": "Dunajowanie w Łukowej i okolicach, Krajowa lista NDK",
        "autor": "Narodowy Instytut Dziedzictwa",
        "url": "https://niematerialne.nid.pl/zjawisko/43-dunajowanie/"
    },
    "nid45": {
        "tytul": "Wysiewanie serc i krzyży na polach, Krajowa lista NDK",
        "autor": "Narodowy Instytut Dziedzictwa",
        "url": "https://niematerialne.nid.pl/zjawisko/45-wysiewanie/"
    },
    "nid46": {
        "tytul": "Wypiek byśków i nowych latek, Krajowa lista NDK",
        "autor": "Narodowy Instytut Dziedzictwa",
        "url": "https://niematerialne.nid.pl/zjawisko/46-wypiek-byskow/"
    },
    "nid47": {
        "tytul": "Muzyka carillonowa w Gdańsku, Krajowa lista NDK",
        "autor": "Narodowy Instytut Dziedzictwa",
        "url": "https://niematerialne.nid.pl/zjawisko/47-carillon/"
    },
    "nid50": {
        "tytul": "Bziuki w Koprzywnicy, Krajowa lista NDK",
        "autor": "Narodowy Instytut Dziedzictwa",
        "url": "https://niematerialne.nid.pl/zjawisko/50-bziuki/"
    },
    "nid51": {
        "tytul": "Wytwarzanie czepców warmińskich, Krajowa lista NDK",
        "autor": "Narodowy Instytut Dziedzictwa",
        "url": "https://niematerialne.nid.pl/zjawisko/51-czepce-warminskie/"
    },
    "dembowski": {
        "tytul": "Słownik gwary podhalskiej (1894, skan PDF)",
        "autor": "Bronisław Dembowski; Akademia Umiejętności, Kraków; Mazowiecka Biblioteka Cyfrowa",
        "url": "https://mbc.cyfrowemazowsze.pl/Content/6024/download?format_id=2"
    }
};

const materialy = [
    {
        "id": "bimba",
        "nazwa": "Bimba",
        "znaczenie": "tramwaj",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "opis": "Poznańska nazwa środka transportu miejskiego.",
        "zrodla": [
            "bimba"
        ],
        "lokalizator": "Bimba",
        "odmiana": "Regionalizm / gwara poznańska"
    },
    {
        "id": "haft-zukowski",
        "nazwa": "Haft żukowski",
        "znaczenie": "odmiana haftu kaszubskiego",
        "regiony": [
            "Kaszuby"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "Jedna z odmian haftu kaszubskiego, związana z Żukowem. Zdobi tkaniny siedmioma podstawowymi kolorami. Wśród tych barw są aż trzy odcienie niebieskiego.",
        "zrodla": [
            "lista"
        ],
        "lokalizator": "Wpis „Hafciarstwo kaszubskie szkoły żukowskiej”"
    },
    {
        "id": "pyra",
        "nazwa": "Pyra",
        "znaczenie": "ziemniak",
        "regiony": [
            "Wielkopolska",
            "Łódź i okolice"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "opis": "Nazwa znana w Wielkopolsce i odnotowana także w Łodzi.",
        "zrodla": [
            "pyra",
            "pyraZasieg"
        ],
        "lokalizator": "Pyra",
        "odmiana": "Regionalizm",
        "dodatkoweZnaczenia": [
            "mieszkaniec Poznania (w haśle Dobrego słownika)"
        ]
    },
    {
        "id": "szopkarstwo-krakowskie",
        "nazwa": "Szopkarstwo krakowskie",
        "znaczenie": "tworzenie szopek bożonarodzeniowych",
        "regiony": [
            "Małopolska"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "Krakowska tradycja tworzenia ozdobnych szopek bożonarodzeniowych. Jej początki sięgają XIX wieku. Szopki buduje się też w innych regionach, w różnych formach. Pierwsi twórcy, m.in. murarze, zajmowali się szopkami w okresie przerwy w pracach budowlanych.",
        "zrodla": [
            "szopki"
        ],
        "lokalizator": "Szopkarstwo krakowskie"
    },
    {
        "id": "gzik",
        "nazwa": "Gzik",
        "znaczenie": "twaróg ze śmietaną",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "opis": "Nazwa potrawy z nabiału.",
        "zrodla": [
            "poznan"
        ],
        "lokalizator": "Gzik",
        "odmiana": "Regionalizm / gwara poznańska"
    },
    {
        "id": "palmy-kurpiowskie",
        "nazwa": "Palmy kurpiowskie",
        "znaczenie": "tradycja wykonywania palm wielkanocnych",
        "regiony": [
            "Kurpie"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "W Puszczy Zielonej przygotowuje się wysokie palmy wielkanocne zdobione m.in. papierowymi kwiatami. Palmy powstają także w innych regionach, według miejscowych zwyczajów. Duże palmy bywają wspólnym dziełem całych rodzin lub lokalnych społeczności.",
        "zrodla": [
            "palmy"
        ],
        "lokalizator": "Palmy kurpiowskie"
    },
    {
        "id": "szneka",
        "nazwa": "Szneka",
        "znaczenie": "drożdżówka",
        "regiony": [
            "Wielkopolska",
            "Pałuki"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "opis": "Nazwa wypieku w gwarze poznańskiej i pałuckiej.",
        "zrodla": [
            "szneka"
        ],
        "lokalizator": "Szneka",
        "odmiana": "Gwara poznańska i pałucka"
    },
    {
        "id": "koronka-koniakowska",
        "nazwa": "Koronka koniakowska",
        "znaczenie": "ręcznie szydełkowana koronka",
        "regiony": [
            "Beskid Śląski"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "Ręcznie szydełkowana koronka z nici zwanych kordonkiem, tworzona w Koniakowie, Istebnej i Jaworzynce. Powstają z niej nie tylko serwety, lecz także suknie ślubne.",
        "zrodla": [
            "lista"
        ],
        "lokalizator": "Wpis „Koronkarstwo koniakowskie”"
    },
    {
        "id": "ryczka",
        "nazwa": "Ryczka",
        "znaczenie": "niski stołek lub podnóżek",
        "regiony": [
            "Wielkopolska",
            "Śląsk",
            "Kujawy"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "opis": "Określenie małego mebla do siedzenia lub pod nogi.",
        "zrodla": [
            "ryczka"
        ],
        "lokalizator": "Ryczka",
        "odmiana": "Słownictwo regionalne"
    },
    {
        "id": "kroszonki-opolskie",
        "nazwa": "Kroszonki opolskie",
        "znaczenie": "jajka zdobione wydrapywanym ornamentem",
        "regiony": [
            "Śląsk Opolski"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "Barwione jajka ozdabiane przez wydrapywanie wzorów. To charakterystyczna tradycja Opolszczyzny. Dekoracje często przypominają rośliny: kwiaty, liście i palmy.",
        "zrodla": [
            "lista"
        ],
        "lokalizator": "Wpis „Kroszonkarstwo opolskie”"
    },
    {
        "id": "pochod-lajkonika",
        "nazwa": "Pochód Lajkonika",
        "znaczenie": "krakowski pochód obrzędowy",
        "regiony": [
            "Małopolska"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "Krakowski pochód z postacią jeźdźca przebranego za Tatara na sztucznym koniku. Lajkonik porusza się na własnych nogach. Orszakowi towarzyszy kapela „Mlaskoty”.",
        "zrodla": [
            "lista"
        ],
        "lokalizator": "Pochód Lajkonika"
    },
    {
        "id": "wycinanka-lowicka",
        "nazwa": "Wycinanka łowicka",
        "znaczenie": "ozdoba z kolorowego papieru",
        "regiony": [
            "Region łowicki"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "Ozdoba z wycinanego, warstwowo naklejanego kolorowego papieru. Wycinanki mają też inne regionalne odmiany, m.in. kurpiowską. Łowickie kodry służyły do dekorowania wnętrz chałup, m.in. belek stropowych i miejsc nad drzwiami.",
        "zrodla": [
            "wycinanka",
            "odmiany"
        ],
        "lokalizator": "Wycinanka łowicka"
    },
    {
        "id": "korbol",
        "nazwa": "korbol",
        "znaczenie": "dynia",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Nazwa warzywa.",
        "zrodla": [
            "poznan"
        ],
        "lokalizator": "Hasło „korbol”"
    },
    {
        "id": "galart",
        "nazwa": "galart",
        "znaczenie": "galareta mięsna",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Potrawa podawana na zimno.",
        "zrodla": [
            "poznan"
        ],
        "lokalizator": "Hasło „galart”"
    },
    {
        "id": "szagowki",
        "nazwa": "szagówki",
        "znaczenie": "kluski ziemniaczane",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Nazwa dania z ziemniaków.",
        "zrodla": [
            "poznan"
        ],
        "lokalizator": "Hasło „szagówki”"
    },
    {
        "id": "sznytka",
        "nazwa": "sznytka",
        "znaczenie": "kromka chleba",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Określenie porcji pieczywa.",
        "zrodla": [
            "poznan"
        ],
        "lokalizator": "Hasło „sznytka”"
    },
    {
        "id": "plyndz",
        "nazwa": "plyndz",
        "znaczenie": "placek ziemniaczany",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Nazwa ziemniaczanego placka.",
        "zrodla": [
            "poznan"
        ],
        "lokalizator": "Hasło „plyndz”"
    },
    {
        "id": "tytka",
        "nazwa": "tytka",
        "znaczenie": "papierowa torebka",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Opakowanie z papieru.",
        "zrodla": [
            "poznan"
        ],
        "lokalizator": "Hasło „tytka”"
    },
    {
        "id": "weborek",
        "nazwa": "węborek",
        "znaczenie": "wiadro",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Nazwa domowego naczynia.",
        "zrodla": [
            "poznan"
        ],
        "lokalizator": "Hasło „węborek”"
    },
    {
        "id": "kwirlejka",
        "nazwa": "kwirlejka",
        "znaczenie": "mątewka",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Przyrząd do mieszania.",
        "zrodla": [
            "poznan"
        ],
        "lokalizator": "Hasło „kwirlejka”"
    },
    {
        "id": "knyp",
        "nazwa": "knyp",
        "znaczenie": "nóż",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Nazwa narzędzia do krojenia.",
        "zrodla": [
            "poznan"
        ],
        "lokalizator": "Hasło „knyp”"
    },
    {
        "id": "klunkry",
        "nazwa": "klunkry",
        "znaczenie": "rupiecie",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Określenie zbędnych przedmiotów.",
        "zrodla": [
            "poznan"
        ],
        "lokalizator": "Hasło „klunkry”"
    },
    {
        "id": "kejter",
        "nazwa": "kejter",
        "znaczenie": "pies",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Nazwa domowego zwierzęcia.",
        "zrodla": [
            "poznan"
        ],
        "lokalizator": "Hasło „kejter”"
    },
    {
        "id": "kociamber",
        "nazwa": "kociamber",
        "znaczenie": "kot",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Określenie kota.",
        "zrodla": [
            "poznan"
        ],
        "lokalizator": "Hasło „kociamber”"
    },
    {
        "id": "gzub",
        "nazwa": "gzub",
        "znaczenie": "dziecko",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Nazwa młodego człowieka.",
        "zrodla": [
            "poznan"
        ],
        "lokalizator": "Hasło „gzub”"
    },
    {
        "id": "gilejza",
        "nazwa": "gilejza",
        "znaczenie": "niezdara",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "O kimś niezręcznym.",
        "zrodla": [
            "poznan"
        ],
        "lokalizator": "Hasło „gilejza”"
    },
    {
        "id": "bejmy",
        "nazwa": "bejmy",
        "znaczenie": "pieniądze",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Nazwa środków płatniczych.",
        "zrodla": [
            "poznan"
        ],
        "lokalizator": "Hasło „bejmy”"
    },
    {
        "id": "fefry",
        "nazwa": "fefry",
        "znaczenie": "strach",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Określenie lęku.",
        "zrodla": [
            "poznan"
        ],
        "lokalizator": "Hasło „fefry”"
    },
    {
        "id": "sztrykowac",
        "nazwa": "sztrykować",
        "znaczenie": "robić na drutach",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Nazwa czynności rękodzielniczej.",
        "zrodla": [
            "poznan"
        ],
        "lokalizator": "Hasło „sztrykować”"
    },
    {
        "id": "heklowac",
        "nazwa": "heklować",
        "znaczenie": "szydełkować",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Praca z szydełkiem.",
        "zrodla": [
            "poznan"
        ],
        "lokalizator": "Hasło „heklować”"
    },
    {
        "id": "ajmerek",
        "nazwa": "ajmerek",
        "znaczenie": "małe wiadro",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Nazwa niewielkiego naczynia.",
        "zrodla": [
            "kold"
        ],
        "lokalizator": "PDF, strona 2; hasło „ajmerek”",
        "stronaPdf": 2
    },
    {
        "id": "ajnfach",
        "nazwa": "ajnfach",
        "znaczenie": "prosty",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Określenie braku komplikacji.",
        "zrodla": [
            "kold"
        ],
        "lokalizator": "PDF, strona 2; hasło „ajnfach”",
        "stronaPdf": 2
    },
    {
        "id": "ajzol",
        "nazwa": "ajzol",
        "znaczenie": "przedmiot metalowy",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Nazwa rzeczy z metalu.",
        "zrodla": [
            "kold"
        ],
        "lokalizator": "PDF, strona 2; hasło „ajzol”",
        "stronaPdf": 2
    },
    {
        "id": "angielka",
        "nazwa": "angielka",
        "znaczenie": "kuchenka węglowa",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Kuchenka na metalowych nóżkach.",
        "zrodla": [
            "kold"
        ],
        "lokalizator": "PDF, strona 2; hasło „angielka”",
        "stronaPdf": 2
    },
    {
        "id": "angryst",
        "nazwa": "angryst",
        "znaczenie": "agrest",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Nazwa rośliny owocowej.",
        "zrodla": [
            "kold"
        ],
        "lokalizator": "PDF, strona 2; hasło „angryst”",
        "stronaPdf": 2
    },
    {
        "id": "antrejka",
        "nazwa": "antrejka",
        "znaczenie": "przedpokój lub spiżarnia",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Nazwa pomieszczenia.",
        "zrodla": [
            "kold"
        ],
        "lokalizator": "PDF, strona 2; hasło „antrejka”",
        "stronaPdf": 2
    },
    {
        "id": "aprykoza",
        "nazwa": "aprykoza",
        "znaczenie": "morela",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Nazwa owocu.",
        "zrodla": [
            "kold"
        ],
        "lokalizator": "PDF, strona 2; hasło „aprykoza”",
        "stronaPdf": 2
    },
    {
        "id": "badejki",
        "nazwa": "badejki",
        "znaczenie": "kąpielówki",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Ubiór do kąpieli.",
        "zrodla": [
            "kold"
        ],
        "lokalizator": "PDF, strona 3; hasło „badejki”",
        "stronaPdf": 3
    },
    {
        "id": "bambrzok",
        "nazwa": "bambrzok",
        "znaczenie": "pieczony placek ziemniaczany",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Placek przygotowywany w piecu.",
        "zrodla": [
            "kold"
        ],
        "lokalizator": "PDF, strona 3; hasło „bambrzok”",
        "stronaPdf": 3
    },
    {
        "id": "bana",
        "nazwa": "bana",
        "znaczenie": "pociąg",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Nazwa pojazdu kolejowego.",
        "zrodla": [
            "kold"
        ],
        "lokalizator": "PDF, strona 3; hasło „bana”",
        "stronaPdf": 3
    },
    {
        "id": "bena",
        "nazwa": "bena",
        "znaczenie": "benzyna",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Określenie paliwa.",
        "zrodla": [
            "kold"
        ],
        "lokalizator": "PDF, strona 3; hasło „bena”",
        "stronaPdf": 3
    },
    {
        "id": "biglowac",
        "nazwa": "biglować",
        "znaczenie": "prasować",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Czynność przy ubraniach.",
        "zrodla": [
            "kold"
        ],
        "lokalizator": "PDF, strona 3; hasło „biglować”",
        "stronaPdf": 3
    },
    {
        "id": "biksa",
        "nazwa": "biksa",
        "znaczenie": "puszka",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Nazwa pojemnika.",
        "zrodla": [
            "kold"
        ],
        "lokalizator": "PDF, strona 3; hasło „biksa”",
        "stronaPdf": 3
    },
    {
        "id": "bindka",
        "nazwa": "bindka",
        "znaczenie": "krawat",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Element stroju.",
        "zrodla": [
            "kold"
        ],
        "lokalizator": "PDF, strona 3; hasło „bindka”",
        "stronaPdf": 3
    },
    {
        "id": "blajba",
        "nazwa": "blajba",
        "znaczenie": "miejsce do spania",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Miejsce noclegu.",
        "zrodla": [
            "kold"
        ],
        "lokalizator": "PDF, strona 3; hasło „blajba”",
        "stronaPdf": 3
    },
    {
        "id": "bratkasta",
        "nazwa": "bratkasta",
        "znaczenie": "piekarnik",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Część kuchni do pieczenia.",
        "zrodla": [
            "kold"
        ],
        "lokalizator": "PDF, strona 4; hasło „bratkasta”",
        "stronaPdf": 4
    },
    {
        "id": "depok",
        "nazwa": "depok",
        "znaczenie": "guzik",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Zapięcie ubrania.",
        "zrodla": [
            "kold"
        ],
        "lokalizator": "PDF, strona 7; hasło „depok”",
        "stronaPdf": 7
    },
    {
        "id": "smazonka",
        "nazwa": "smażonka",
        "znaczenie": "jajecznica",
        "regiony": [
            "Śląsk"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Śląszczyzna; źródło: „gwara śląska”",
        "opis": "Danie z jajek.",
        "zrodla": [
            "slask"
        ],
        "lokalizator": "Hasło „smażonka”"
    },
    {
        "id": "nudle",
        "nazwa": "nudle",
        "znaczenie": "makaron",
        "regiony": [
            "Śląsk"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Śląszczyzna; źródło: „gwara śląska”",
        "opis": "Nazwa produktu spożywczego.",
        "zrodla": [
            "slask"
        ],
        "lokalizator": "Hasło „nudle”"
    },
    {
        "id": "kreple",
        "nazwa": "kreple",
        "znaczenie": "pączki",
        "regiony": [
            "Śląsk"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Śląszczyzna; źródło: „gwara śląska”",
        "opis": "Określenie słodkich wypieków.",
        "zrodla": [
            "slask"
        ],
        "lokalizator": "Hasło „kreple”"
    },
    {
        "id": "widolki",
        "nazwa": "widołki",
        "znaczenie": "widelec",
        "regiony": [
            "Śląsk"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Śląszczyzna; źródło: „gwara śląska”",
        "opis": "Jeden ze sztućców.",
        "zrodla": [
            "slask"
        ],
        "lokalizator": "Hasło „widołki”"
    },
    {
        "id": "smiatek",
        "nazwa": "śmiatek",
        "znaczenie": "zmiotka",
        "regiony": [
            "Śląsk"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Śląszczyzna; źródło: „gwara śląska”",
        "opis": "Przedmiot do sprzątania.",
        "zrodla": [
            "slask"
        ],
        "lokalizator": "Hasło „śmiatek”"
    },
    {
        "id": "szrank",
        "nazwa": "szrank",
        "znaczenie": "szafa",
        "regiony": [
            "Śląsk"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Śląszczyzna; źródło: „gwara śląska”",
        "opis": "Mebel do przechowywania.",
        "zrodla": [
            "slask"
        ],
        "lokalizator": "Hasło „szrank”"
    },
    {
        "id": "zradlo",
        "nazwa": "źradło",
        "znaczenie": "lustro",
        "regiony": [
            "Śląsk"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Śląszczyzna; źródło: „gwara śląska”",
        "opis": "Przedmiot pokazujący odbicie.",
        "zrodla": [
            "slask"
        ],
        "lokalizator": "Hasło „źradło”"
    },
    {
        "id": "klupac",
        "nazwa": "klupać",
        "znaczenie": "stukać",
        "regiony": [
            "Śląsk"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Śląszczyzna; źródło: „gwara śląska”",
        "opis": "Czynność wydająca odgłos.",
        "zrodla": [
            "slask"
        ],
        "lokalizator": "Hasło „klupać”"
    },
    {
        "id": "gibko",
        "nazwa": "gibko",
        "znaczenie": "szybko",
        "regiony": [
            "Śląsk"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Śląszczyzna; źródło: „gwara śląska”",
        "opis": "Określenie tempa działania.",
        "zrodla": [
            "slask"
        ],
        "lokalizator": "Hasło „gibko”"
    },
    {
        "id": "wachowac",
        "nazwa": "wachować",
        "znaczenie": "pilnować",
        "regiony": [
            "Śląsk"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Śląszczyzna; źródło: „gwara śląska”",
        "opis": "Czuwać nad czymś.",
        "zrodla": [
            "slask"
        ],
        "lokalizator": "Hasło „wachować”"
    },
    {
        "id": "apalonik",
        "nazwa": "apałonik",
        "znaczenie": "chochla",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara podlaska, zapis BOK",
        "opis": "Przybór do nalewania zupy.",
        "zrodla": [
            "podlasie"
        ],
        "lokalizator": "Hasło „apałonik”"
    },
    {
        "id": "barabanic",
        "nazwa": "barabanić",
        "znaczenie": "głośno pukać",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podlaska, zapis BOK",
        "opis": "Określenie hałaśliwego stukania.",
        "zrodla": [
            "podlasie"
        ],
        "lokalizator": "Hasło „barabanić”"
    },
    {
        "id": "czuczelo",
        "nazwa": "czuczeło",
        "znaczenie": "dziwadło",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara podlaska, zapis BOK",
        "opis": "O kimś wyglądającym osobliwie.",
        "zrodla": [
            "podlasie"
        ],
        "lokalizator": "Hasło „czuczeło”"
    },
    {
        "id": "dziengi",
        "nazwa": "dziengi",
        "znaczenie": "pieniądze",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podlaska, zapis BOK",
        "opis": "Nazwa środków płatniczych.",
        "zrodla": [
            "podlasie"
        ],
        "lokalizator": "Hasło „dziengi”"
    },
    {
        "id": "fluk",
        "nazwa": "fluk",
        "znaczenie": "wydzielina z nosa",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podlaska, zapis BOK",
        "opis": "Potoczne określenie smarka.",
        "zrodla": [
            "podlasie"
        ],
        "lokalizator": "Hasło „fluk”"
    },
    {
        "id": "gnic",
        "nazwa": "gnić",
        "znaczenie": "śmiać się",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podlaska, zapis BOK",
        "opis": "Tu chodzi o śmiech.",
        "zrodla": [
            "podlasie"
        ],
        "lokalizator": "Hasło „gnić”"
    },
    {
        "id": "hadki",
        "nazwa": "hadki",
        "znaczenie": "brzydki, odrażający",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podlaska, zapis BOK",
        "opis": "Określenie negatywnego wrażenia.",
        "zrodla": [
            "podlasie"
        ],
        "lokalizator": "Hasło „hadki”"
    },
    {
        "id": "klekotun",
        "nazwa": "klekotun",
        "znaczenie": "bocian",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara podlaska, zapis BOK",
        "opis": "Regionalna nazwa ptaka.",
        "zrodla": [
            "podlasie"
        ],
        "lokalizator": "Hasło „klekotun”"
    },
    {
        "id": "maszynka",
        "nazwa": "maszynka",
        "znaczenie": "zapalniczka",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara podlaska, zapis BOK",
        "opis": "Tutaj przedmiot do zapalania.",
        "zrodla": [
            "podlasie"
        ],
        "lokalizator": "Hasło „maszynka”"
    },
    {
        "id": "pietuch",
        "nazwa": "pietuch",
        "znaczenie": "kogut",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara podlaska, zapis BOK",
        "opis": "Nazwa ptaka gospodarskiego.",
        "zrodla": [
            "podlasie"
        ],
        "lokalizator": "Hasło „pietuch”"
    },
    {
        "id": "rozkiraczyc",
        "nazwa": "rozkiraczyć",
        "znaczenie": "zepsuć się",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podlaska, zapis BOK",
        "opis": "Na przykład o samochodzie.",
        "zrodla": [
            "podlasie"
        ],
        "lokalizator": "Hasło „rozkiraczyć”"
    },
    {
        "id": "tamoj",
        "nazwa": "tamój",
        "znaczenie": "tam",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podlaska, zapis BOK",
        "opis": "Wskazanie miejsca.",
        "zrodla": [
            "podlasie"
        ],
        "lokalizator": "Hasło „tamój”"
    },
    {
        "id": "uchazor",
        "nazwa": "uchażor",
        "znaczenie": "zalotnik",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara podlaska, zapis BOK",
        "opis": "Osoba zabiegająca o względy.",
        "zrodla": [
            "podlasie"
        ],
        "lokalizator": "Hasło „uchażor”"
    },
    {
        "id": "wiszczec",
        "nazwa": "wiszczeć",
        "znaczenie": "piszczeć, krzyczeć",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podlaska, zapis BOK",
        "opis": "Wydawać donośny głos.",
        "zrodla": [
            "podlasie"
        ],
        "lokalizator": "Hasło „wiszczeć”"
    },
    {
        "id": "zieziulka",
        "nazwa": "zieziulka",
        "znaczenie": "kukułka",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara podlaska, zapis BOK",
        "opis": "Regionalna nazwa ptaka.",
        "zrodla": [
            "podlasie"
        ],
        "lokalizator": "Hasło „zieziulka”"
    },
    {
        "id": "alkierz",
        "nazwa": "alkierz",
        "znaczenie": "boczna izba",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Niewielki pokój przy głównej izbie, wykorzystywany też jako sypialnia.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 2; hasło „alkierz”",
        "stronaPdf": 2,
        "rokZapisu": 1893
    },
    {
        "id": "babieniec",
        "nazwa": "babieniec",
        "znaczenie": "izba dla służby lub kruchta",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Gloger notuje nazwę pomieszczenia domowego i przedsionka kościoła.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 3; hasło „babieniec”",
        "stronaPdf": 3,
        "rokZapisu": 1893
    },
    {
        "id": "bajorek",
        "nazwa": "bajorek",
        "znaczenie": "ozdobny spiralny drucik",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Błyszczący materiał stosowany do ozdabiania ubioru.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 3; hasło „bajorek”",
        "stronaPdf": 3,
        "rokZapisu": 1893
    },
    {
        "id": "bajory",
        "nazwa": "bajory",
        "znaczenie": "niedostępne zarośla",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Gęstwina, szczególnie w podmokłym terenie.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 3; hasło „bajory”",
        "stronaPdf": 3,
        "rokZapisu": 1893
    },
    {
        "id": "bajtalachi",
        "nazwa": "bajtałachi",
        "znaczenie": "wesołe przyśpiewki",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Krótkie utwory śpiewane dla rozrywki.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 3; hasło „bajtałachi”",
        "stronaPdf": 3,
        "rokZapisu": 1893
    },
    {
        "id": "bakalarz",
        "nazwa": "bakalarz",
        "znaczenie": "wiejski nauczyciel",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nauczyciel prowadzący naukę w zimowej porze.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 3; hasło „bakalarz”",
        "stronaPdf": 3,
        "rokZapisu": 1893
    },
    {
        "id": "balabuchi",
        "nazwa": "bałabuchi",
        "znaczenie": "pączki pieczone w piecu",
        "regiony": [
            "Podlasie",
            "Mazowsze"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Zapustny wypiek odnotowany na Podlasiu i Mazowszu.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 3; hasło „bałabuchi”",
        "stronaPdf": 3,
        "rokZapisu": 1893
    },
    {
        "id": "balt",
        "nazwa": "bałt",
        "znaczenie": "długi, cienki snop",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie kształtu wiązki zboża.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 3; hasło „bałt”",
        "stronaPdf": 3,
        "rokZapisu": 1893
    },
    {
        "id": "bandurka",
        "nazwa": "bańdurka",
        "znaczenie": "fujarka",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Prosty instrument, na którym grano melodie.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 3; hasło „bańdurka”",
        "stronaPdf": 3,
        "rokZapisu": 1893
    },
    {
        "id": "bania",
        "nazwa": "bania",
        "znaczenie": "dynia",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Jedno ze znaczeń słowa w słowniku Glogera to owoc dyni.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 3; hasło „bania”",
        "stronaPdf": 3,
        "rokZapisu": 1893,
        "dodatkoweZnaczenia": [
            "pleciony ze słomy i wikliny pojemnik do przechowywania zapasów"
        ]
    },
    {
        "id": "bant",
        "nazwa": "bant",
        "znaczenie": "belka łącząca krokwie",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Poziomy element konstrukcji dachu, nazywany też jętką.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 3; hasło „bant”",
        "stronaPdf": 3,
        "rokZapisu": 1893
    },
    {
        "id": "barniaki",
        "nazwa": "barniaki",
        "znaczenie": "młode sosnowe zarośla",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Młode sosny rosnące na piaszczystym podłożu.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 3; hasło „barniaki”",
        "stronaPdf": 3,
        "rokZapisu": 1893
    },
    {
        "id": "bekiesa",
        "nazwa": "bekiesa",
        "znaczenie": "dopasowany płaszcz kobiecy",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Dawny granatowy ubiór z obszyciem z baranka.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 4; hasło „bekiesa”",
        "stronaPdf": 4,
        "rokZapisu": 1893
    },
    {
        "id": "belch",
        "nazwa": "bełch",
        "znaczenie": "brzuch",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Dawne określenie części ciała.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 4; hasło „bełch”",
        "stronaPdf": 4,
        "rokZapisu": 1893
    },
    {
        "id": "bezmian",
        "nazwa": "bezmian",
        "znaczenie": "waga",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Przyrząd używany do ważenia.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 4; hasło „bezmian”",
        "stronaPdf": 4,
        "rokZapisu": 1893
    },
    {
        "id": "bebenek",
        "nazwa": "bębenek",
        "znaczenie": "tamborek do robótek",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "W tym znaczeniu obręcz używana przy robótkach; słownik podaje też sionkę.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 4; hasło „bębenek”",
        "stronaPdf": 4,
        "rokZapisu": 1893
    },
    {
        "id": "bialokorowaty",
        "nazwa": "białokorowaty",
        "znaczenie": "mający białe włosy",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie człowieka o białych włosach, brwiach i zaroście.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 4; hasło „białokorowaty”",
        "stronaPdf": 4,
        "rokZapisu": 1893
    },
    {
        "id": "biel",
        "nazwa": "biel",
        "znaczenie": "błotnista łąka",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "W opisie krajobrazu chodzi o podmokłą łąkę.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 4; hasło „biel”",
        "stronaPdf": 4,
        "rokZapisu": 1893
    },
    {
        "id": "bielawa",
        "nazwa": "bielawa",
        "znaczenie": "niewielka podmokła łąka",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Mniejsze mokre łąki wśród pól lub lasów.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 4; hasło „bielawa”",
        "stronaPdf": 4,
        "rokZapisu": 1893
    },
    {
        "id": "bielnik",
        "nazwa": "bielnik",
        "znaczenie": "miejsce bielenia płótna",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Płótno rozkładano zwykle na łące w pobliżu wody.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 4; hasło „bielnik”",
        "stronaPdf": 4,
        "rokZapisu": 1893
    },
    {
        "id": "bienduga",
        "nazwa": "bienduga",
        "znaczenie": "brzeg do załadunku drewna",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Miejsce przy spławnej rzece, dogodne do wywozu drewna.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 4; hasło „bienduga”",
        "stronaPdf": 4,
        "rokZapisu": 1893
    },
    {
        "id": "bierka",
        "nazwa": "bierka",
        "znaczenie": "znak odbioru skór od kuśnierza",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Oznaczony patyczek albo tabliczka pozwalały rozpoznać oddane skóry.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 4; hasło „bierka”",
        "stronaPdf": 4,
        "rokZapisu": 1893
    },
    {
        "id": "blacec",
        "nazwa": "blaceć",
        "znaczenie": "żałośnie odzywać się, o zwierzęciu",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Tak opisywano między innymi miauczenie kota lub beczenie cielęcia.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 5; hasło „blaceć”",
        "stronaPdf": 5,
        "rokZapisu": 1893
    },
    {
        "id": "bodnia",
        "nazwa": "bodnia",
        "znaczenie": "plecione naczynie do przechowywania",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Naczynie ze słomy i wikliny na ziarno, kaszę lub inne zapasy.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 5; hasło „bodnia”",
        "stronaPdf": 5,
        "rokZapisu": 1893
    },
    {
        "id": "bogater",
        "nazwa": "bogater",
        "znaczenie": "bogacz",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie osoby mającej duży majątek.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 5; hasło „bogater”",
        "stronaPdf": 5,
        "rokZapisu": 1893
    },
    {
        "id": "bokowka",
        "nazwa": "bokówka",
        "znaczenie": "mały pokój przy sypialni",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Niewielkie pomieszczenie w dawnym dworze.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 5; hasło „bokówka”",
        "stronaPdf": 5,
        "rokZapisu": 1893
    },
    {
        "id": "bolt",
        "nazwa": "bołt",
        "znaczenie": "kij do naganiania ryb",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Rybacy kierowali nim ryby w stronę sieci.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 5; hasło „bołt”",
        "stronaPdf": 5,
        "rokZapisu": 1893
    },
    {
        "id": "boltac",
        "nazwa": "bołtać",
        "znaczenie": "mącić lub mieszać płyn",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Słowo odnoszono na przykład do wody albo mleka.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 5; hasło „bołtać”",
        "stronaPdf": 5,
        "rokZapisu": 1893
    },
    {
        "id": "bonda",
        "nazwa": "bonda",
        "znaczenie": "bułeczka z resztek ciasta chlebowego",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Mały wypiek przygotowywany dla dzieci przy pieczeniu chleba.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 5; hasło „bonda”",
        "stronaPdf": 5,
        "rokZapisu": 1893
    },
    {
        "id": "bonik",
        "nazwa": "bonik",
        "znaczenie": "bób na paszę",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Bób wysiewany z przeznaczeniem dla zwierząt gospodarskich.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 5; hasło „bonik”",
        "stronaPdf": 5,
        "rokZapisu": 1893
    },
    {
        "id": "borowiki",
        "nazwa": "borowiki",
        "znaczenie": "borówki, rośliny leśne",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "W tym zapisie chodzi o rośliny z jadalnymi jagodami.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 5; hasło „borowiki”",
        "stronaPdf": 5,
        "rokZapisu": 1893
    },
    {
        "id": "breza",
        "nazwa": "breza",
        "znaczenie": "biała falbanka",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Ozdabiano nią między innymi kobiece czepce i kołnierze.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 5; hasło „breza”",
        "stronaPdf": 5,
        "rokZapisu": 1893
    },
    {
        "id": "brodnia",
        "nazwa": "brodnia",
        "znaczenie": "sieć do połowu drobnych ryb",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Chłopcy używali jej w zarośniętych wodach nad Narwią.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 6; hasło „brodnia”",
        "stronaPdf": 6,
        "rokZapisu": 1893
    },
    {
        "id": "brukan",
        "nazwa": "brukan",
        "znaczenie": "stos kamieni z pola",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nagromadzenie zebranych kamieni, często porośnięte trawą.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 6; hasło „brukan”",
        "stronaPdf": 6,
        "rokZapisu": 1893
    },
    {
        "id": "brukwianka",
        "nazwa": "brukwianka",
        "znaczenie": "liście brukwi",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa naci tej rośliny.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 6; hasło „brukwianka”",
        "stronaPdf": 6,
        "rokZapisu": 1893
    },
    {
        "id": "brzechac",
        "nazwa": "brzechać",
        "znaczenie": "szczekać",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Słownik notuje też przenośne użycie w odniesieniu do obgadywania.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 6; hasło „brzechać”",
        "stronaPdf": 6,
        "rokZapisu": 1893
    },
    {
        "id": "brzechun",
        "nazwa": "brzechun",
        "znaczenie": "krzykacz, plotkarz",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Lekceważące określenie osoby głośnej i plotkującej.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 6; hasło „brzechun”",
        "stronaPdf": 6,
        "rokZapisu": 1893
    },
    {
        "id": "brzozowka",
        "nazwa": "brzozówka",
        "znaczenie": "odmiana kwaśnych jabłek",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Małe jesienne jabłka opisane w słowniku.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 6; hasło „brzozówka”",
        "stronaPdf": 6,
        "rokZapisu": 1893
    },
    {
        "id": "brzyc",
        "nazwa": "brzyc",
        "znaczenie": "nasiona lub kotki brzozy",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie związane z rozmnażaniem brzozy.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 6; hasło „brzyc”",
        "stronaPdf": 6,
        "rokZapisu": 1893
    },
    {
        "id": "buchta",
        "nazwa": "buchta",
        "znaczenie": "zewnętrzny brzeg zakola rzeki",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Przy takim brzegu zwykle płynie główny nurt.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 6; hasło „buchta”",
        "stronaPdf": 6,
        "rokZapisu": 1893
    },
    {
        "id": "budzien",
        "nazwa": "budzień",
        "znaczenie": "dzień powszedni",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Dzień przeznaczony na zwykłą pracę.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 6; hasło „budzień”",
        "stronaPdf": 6,
        "rokZapisu": 1893
    },
    {
        "id": "bunia",
        "nazwa": "bunia",
        "znaczenie": "pękate naczynie z szyjką",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Naczynie gliniane lub kamionkowe, zamykane korkiem.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 6; hasło „bunia”",
        "stronaPdf": 6,
        "rokZapisu": 1893
    },
    {
        "id": "burchiel",
        "nazwa": "burchiel",
        "znaczenie": "pęcherz na skórze",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Jedno ze znaczeń dotyczy pęcherza po otarciu lub oparzeniu.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 6; hasło „burchiel”",
        "stronaPdf": 6,
        "rokZapisu": 1893,
        "dodatkoweZnaczenia": [
            "jajko bez twardej skorupki"
        ]
    },
    {
        "id": "burlak",
        "nazwa": "burłak",
        "znaczenie": "człowiek nieokrzesany",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Negatywne określenie czyjegoś obycia.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 6; hasło „burłak”",
        "stronaPdf": 6,
        "rokZapisu": 1893
    },
    {
        "id": "burska",
        "nazwa": "burska",
        "znaczenie": "woreczek na pieniądze",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Sakiewka wykonana ze skóry albo płótna.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 6; hasło „burska”",
        "stronaPdf": 6,
        "rokZapisu": 1893
    },
    {
        "id": "busel",
        "nazwa": "buseł",
        "znaczenie": "bocian",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Słownictwo okolic Białegostoku (zapis historyczny)",
        "opis": "Gloger przypisuje tę nazwę okolicom Białegostoku.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 6; hasło „buseł”",
        "stronaPdf": 6,
        "rokZapisu": 1893
    },
    {
        "id": "bystry",
        "nazwa": "bystry",
        "znaczenie": "łatwo łupliwy, o drewnie",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "O drewnie, które łatwo pęka podczas obróbki.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 6; hasło „bystry”",
        "stronaPdf": 6,
        "rokZapisu": 1893
    },
    {
        "id": "bzdecyc",
        "nazwa": "bzdęcyć",
        "znaczenie": "prząść cienką nić",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie czynności związanej z przędzeniem.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 6; hasło „bzdęcyć”",
        "stronaPdf": 6,
        "rokZapisu": 1893
    },
    {
        "id": "calki",
        "nazwa": "całki",
        "znaczenie": "potrawa z obierzyn rzepy",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Obierzyny kiszono, a następnie gotowano.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 7; hasło „całki”",
        "stronaPdf": 7,
        "rokZapisu": 1893
    },
    {
        "id": "capka",
        "nazwa": "capka",
        "znaczenie": "górna belka futryny",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "W ciesielstwie element łączący dwa boki otworu drzwiowego.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 7; hasło „capka”",
        "stronaPdf": 7,
        "rokZapisu": 1893
    },
    {
        "id": "cecha",
        "nazwa": "cecha",
        "znaczenie": "duży worek",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Dawna nazwa pojemnego worka z grubego płótna.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 7; hasło „cecha”",
        "stronaPdf": 7,
        "rokZapisu": 1893
    },
    {
        "id": "cedzilko",
        "nazwa": "cedziłko",
        "znaczenie": "płótno do przecedzania mleka",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Lniana tkanina zakładana na naczynie po udoju.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 7; hasło „cedziłko”",
        "stronaPdf": 7,
        "rokZapisu": 1893
    },
    {
        "id": "celina",
        "nazwa": "celina",
        "znaczenie": "orka ugoru od razu w zagony",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa sposobu przygotowania pola pod siew.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 7; hasło „celina”",
        "stronaPdf": 7,
        "rokZapisu": 1893
    },
    {
        "id": "celowac",
        "nazwa": "celować",
        "znaczenie": "zszywać kawałki futra",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Znaczenie dotyczące pracy kuśnierza.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 7; hasło „celować”",
        "stronaPdf": 7,
        "rokZapisu": 1893
    },
    {
        "id": "celusc",
        "nazwa": "celuść",
        "znaczenie": "otwór pieca chlebowego",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Przez ten otwór wkładano pieczywo.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 7; hasło „celuść”",
        "stronaPdf": 7,
        "rokZapisu": 1893
    },
    {
        "id": "cerep",
        "nazwa": "cerep",
        "znaczenie": "ludzka czaszka",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Dawne określenie części szkieletu.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 7; hasło „cerep”",
        "stronaPdf": 7,
        "rokZapisu": 1893
    },
    {
        "id": "chabanina",
        "nazwa": "chabanina",
        "znaczenie": "bardzo chude kawałki mięsa",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Słowo odnosi się do mięsnych ochłapów.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 7; hasło „chabanina”",
        "stronaPdf": 7,
        "rokZapisu": 1893
    },
    {
        "id": "chabenda",
        "nazwa": "chabenda",
        "znaczenie": "niewielki majątek szlachecki",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie małej posiadłości.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 7; hasło „chabenda”",
        "stronaPdf": 7,
        "rokZapisu": 1893
    },
    {
        "id": "chachaica",
        "nazwa": "chachaica",
        "znaczenie": "zamieć śnieżna",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Śnieżyca z wiatrem.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 7; hasło „chachaica”",
        "stronaPdf": 7,
        "rokZapisu": 1893
    },
    {
        "id": "chachmec",
        "nazwa": "chachmęć",
        "znaczenie": "gęste zarośla",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Trudno dostępna gęstwina lub knieja.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 7; hasło „chachmęć”",
        "stronaPdf": 7,
        "rokZapisu": 1893
    },
    {
        "id": "chachmecic",
        "nazwa": "chachmęcić",
        "znaczenie": "ukrywać",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Dawne znaczenie związane z chowaniem czegoś.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 7; hasło „chachmęcić”",
        "stronaPdf": 7,
        "rokZapisu": 1893
    },
    {
        "id": "chalaj",
        "nazwa": "chałaj",
        "znaczenie": "roztrzepaniec lub krzykacz",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie osoby chaotycznej lub hałaśliwej.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 7; hasło „chałaj”",
        "stronaPdf": 7,
        "rokZapisu": 1893
    },
    {
        "id": "charakterny",
        "nazwa": "charakterny",
        "znaczenie": "uczciwy, solidny",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "U Glogera to pochwała osoby, na której można polegać.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 7; hasło „charakterny”",
        "stronaPdf": 7,
        "rokZapisu": 1893
    },
    {
        "id": "charkot",
        "nazwa": "charkot",
        "znaczenie": "gwar, hałas",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa głośnego zamieszania.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 7; hasło „charkot”",
        "stronaPdf": 7,
        "rokZapisu": 1893
    },
    {
        "id": "chichol",
        "nazwa": "chichoł",
        "znaczenie": "wierzchołek",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie najwyższej części czegoś.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 7; hasło „chichoł”",
        "stronaPdf": 7,
        "rokZapisu": 1893
    },
    {
        "id": "chluba",
        "nazwa": "chluba",
        "znaczenie": "giętka rózga",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "W tym zapisie słowo oznacza wić.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 8; hasło „chluba”",
        "stronaPdf": 8,
        "rokZapisu": 1893
    },
    {
        "id": "chlusta",
        "nazwa": "chlusta",
        "znaczenie": "gałąź, wić",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Gałęzie wykorzystywano między innymi do zabezpieczania strzech.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 8; hasło „chlusta”",
        "stronaPdf": 8,
        "rokZapisu": 1893
    },
    {
        "id": "chmara",
        "nazwa": "chmara",
        "znaczenie": "chmura",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Taką nazwę Gloger zapisał w okręgu tykocińskim.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 8; hasło „chmara”",
        "stronaPdf": 8,
        "rokZapisu": 1893
    },
    {
        "id": "chobotnia",
        "nazwa": "chobotnia",
        "znaczenie": "sieć przy upuście wodnym",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Sieć rybacka zastawiana w szczególnym miejscu przepływu wody.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 8; hasło „chobotnia”",
        "stronaPdf": 8,
        "rokZapisu": 1893
    },
    {
        "id": "chodziwy",
        "nazwa": "chodziwy",
        "znaczenie": "odporny na zużycie",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "O czymś trwałym podczas noszenia i chodzenia.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 8; hasło „chodziwy”",
        "stronaPdf": 8,
        "rokZapisu": 1893
    },
    {
        "id": "choja",
        "nazwa": "choja",
        "znaczenie": "duża sosna",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Jedna z dawnych nazw sosny.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 8; hasło „choja”",
        "stronaPdf": 8,
        "rokZapisu": 1893
    },
    {
        "id": "chojdac-sie",
        "nazwa": "chojdać się",
        "znaczenie": "huśtać się",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie bujania się.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 8; hasło „chojdać się”",
        "stronaPdf": 8,
        "rokZapisu": 1893
    },
    {
        "id": "choloj",
        "nazwa": "chołoj",
        "znaczenie": "kapusta bez zwartej główki",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Kapusta, która wyrosła w górę bez zawiązania głowy.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 8; hasło „chołoj”",
        "stronaPdf": 8,
        "rokZapisu": 1893
    },
    {
        "id": "chrapki",
        "nazwa": "chrapki",
        "znaczenie": "metalowe nakładki na buty",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Przywiązywano je pod podeszwami, aby nie ślizgać się na lodzie.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 8; hasło „chrapki”",
        "stronaPdf": 8,
        "rokZapisu": 1893
    },
    {
        "id": "chrosciel",
        "nazwa": "chrościel",
        "znaczenie": "derkacz",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Dawna nazwa ptaka.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 8; hasło „chrościel”",
        "stronaPdf": 8,
        "rokZapisu": 1893
    },
    {
        "id": "chucherko",
        "nazwa": "chucherko",
        "znaczenie": "rybie wnętrzności",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie rybich podrobów, na przykład wątroby.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 8; hasło „chucherko”",
        "stronaPdf": 8,
        "rokZapisu": 1893
    },
    {
        "id": "chudziec",
        "nazwa": "chudziec",
        "znaczenie": "chuda świnia do tuczu",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Zwierzę przeznaczone do dalszego karmienia i opasania.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 8; hasło „chudziec”",
        "stronaPdf": 8,
        "rokZapisu": 1893
    },
    {
        "id": "chusty",
        "nazwa": "chusty",
        "znaczenie": "bielizna",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Dawne zbiorowe określenie bielizny.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 8; hasło „chusty”",
        "stronaPdf": 8,
        "rokZapisu": 1893
    },
    {
        "id": "chutko",
        "nazwa": "chutko",
        "znaczenie": "prędko",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Wyraz określający szybkie tempo.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 8; hasło „chutko”",
        "stronaPdf": 8,
        "rokZapisu": 1893
    },
    {
        "id": "chyl",
        "nazwa": "chyl",
        "znaczenie": "otwarte miejsce na przeciągu",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Miejsce na zewnątrz wystawione na wiatr.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 8; hasło „chyl”",
        "stronaPdf": 8,
        "rokZapisu": 1893
    },
    {
        "id": "ciarki",
        "nazwa": "ciarki",
        "znaczenie": "ciernie",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie związane z kolczastymi krzewami.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 8; hasło „ciarki”",
        "stronaPdf": 8,
        "rokZapisu": 1893
    },
    {
        "id": "cieplice",
        "nazwa": "cieplice",
        "znaczenie": "ciepłe kraje południowe",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa odległych krain o ciepłym klimacie.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 9; hasło „cieplice”",
        "stronaPdf": 9,
        "rokZapisu": 1893
    },
    {
        "id": "cierlica",
        "nazwa": "cierlica",
        "znaczenie": "narzędzie do obróbki lnu i konopi",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Drewniany przyrząd służący do tarcia włókien.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 9; hasło „cierlica”",
        "stronaPdf": 9,
        "rokZapisu": 1893
    },
    {
        "id": "cies",
        "nazwa": "cieś",
        "znaczenie": "belka w drewnianej ścianie",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Element budulca tradycyjnego domu.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 9; hasło „cieś”",
        "stronaPdf": 9,
        "rokZapisu": 1893
    },
    {
        "id": "ciegalnik",
        "nazwa": "cięgalnik",
        "znaczenie": "lina przy skrzydle niewodu",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Długa lina należąca do sieci rybackiej.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 9; hasło „cięgalnik”",
        "stronaPdf": 9,
        "rokZapisu": 1893
    },
    {
        "nazwa": "facolet",
        "znaczenie": "wstążka lub inna zwisająca ozdoba sukni",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie dodatku do dawnego kobiecego stroju.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 14; hasło „facolet”",
        "stronaPdf": 14,
        "rokZapisu": 1893,
        "id": "facolet"
    },
    {
        "nazwa": "fala",
        "znaczenie": "nawałnica, deszcz z wiatrem",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "W tym zapisie słowo opisuje złą pogodę.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 14; hasło „fala”",
        "stronaPdf": 14,
        "rokZapisu": 1893,
        "id": "fala"
    },
    {
        "nazwa": "familjant",
        "znaczenie": "krewny, kuzyn",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Tak nazywano osobę należącą do rodziny.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 14; hasło „familjant”",
        "stronaPdf": 14,
        "rokZapisu": 1893,
        "id": "familjant"
    },
    {
        "nazwa": "fasa",
        "znaczenie": "drewniane naczynie na mąkę lub kaszę",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Naczynie z klepek było szersze u podstawy.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 14; hasło „fasa”",
        "stronaPdf": 14,
        "rokZapisu": 1893,
        "id": "fasa"
    },
    {
        "nazwa": "fatałachy",
        "znaczenie": "piosenki o świeckiej treści",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Autor zapisuje znaczenie związane ze śpiewaniem.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 14; hasło „fatałachy”",
        "stronaPdf": 14,
        "rokZapisu": 1893,
        "id": "fatalachy"
    },
    {
        "nazwa": "feteć",
        "znaczenie": "kolorowa wstążka lub gałganek",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie niewielkiej ozdoby z tkaniny.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 14; hasło „feteć”",
        "stronaPdf": 14,
        "rokZapisu": 1893,
        "id": "fetec"
    },
    {
        "nazwa": "flaga",
        "znaczenie": "niepogoda z deszczem i wiatrem",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Słowo odnosi się tu do warunków pogodowych.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 14; hasło „flaga”",
        "stronaPdf": 14,
        "rokZapisu": 1893,
        "id": "flaga"
    },
    {
        "nazwa": "flus",
        "znaczenie": "gęsty osad na dnie naczynia",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa tego, co osiada pod płynem.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 14; hasło „flus”",
        "stronaPdf": 14,
        "rokZapisu": 1893,
        "id": "flus"
    },
    {
        "nazwa": "folus",
        "znaczenie": "urządzenie do prania nowego samodziału",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Autor wiąże je z młynami wodnymi.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 14; hasło „folus”",
        "stronaPdf": 14,
        "rokZapisu": 1893,
        "id": "folus"
    },
    {
        "nazwa": "fryga",
        "znaczenie": "wirująca zabawka, bąk",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa dziecięcej zabawki wprawianej w szybki obrót.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 14; hasło „fryga”",
        "stronaPdf": 14,
        "rokZapisu": 1893,
        "id": "fryga"
    },
    {
        "nazwa": "fundus",
        "znaczenie": "miejsce przeznaczone pod główną budowlę",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Wyrażenie zapisano w mowie drobnej szlachty.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 14; hasło „fundus”",
        "stronaPdf": 14,
        "rokZapisu": 1893,
        "id": "fundus"
    },
    {
        "nazwa": "gać",
        "znaczenie": "grobla",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa budowli ziemnej w podmokłym terenie.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 14; hasło „gać”",
        "stronaPdf": 14,
        "rokZapisu": 1893,
        "id": "gac"
    },
    {
        "nazwa": "gaić",
        "znaczenie": "wycinać las",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Czasownik opisujący pracę przy usuwaniu drzew.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 14; hasło „gaić”",
        "stronaPdf": 14,
        "rokZapisu": 1893,
        "id": "gaic"
    },
    {
        "nazwa": "galak",
        "znaczenie": "cienka, wysmukła sosna lub żerdź",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie kształtu młodego drzewa.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 14; hasło „galak”",
        "stronaPdf": 14,
        "rokZapisu": 1893,
        "id": "galak"
    },
    {
        "nazwa": "gaz",
        "znaczenie": "nafta",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Słowo oznacza tu płyn używany jako paliwo.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 14; hasło „gaz”",
        "stronaPdf": 14,
        "rokZapisu": 1893,
        "id": "gaz"
    },
    {
        "nazwa": "gązewka",
        "znaczenie": "rzemienne ogniwo łączące części cepa",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Łączyła uchwyty przy bijaku i dzierżaku.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 14; hasło „gązewka”",
        "stronaPdf": 14,
        "rokZapisu": 1893,
        "id": "gazewka"
    },
    {
        "nazwa": "gęscarz",
        "znaczenie": "gęstwina leśna, knieja",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa miejsca porośniętego gęstym lasem.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 14; hasło „gęscarz”",
        "stronaPdf": 14,
        "rokZapisu": 1893,
        "id": "gescarz"
    },
    {
        "nazwa": "giwałka",
        "znaczenie": "wałek przyszywany z tyłu stanika",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Element dawnego stroju żydowskich kobiet podtrzymujący spódnicę.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 15; hasło „giwałka”",
        "stronaPdf": 15,
        "rokZapisu": 1893,
        "id": "giwalka"
    },
    {
        "nazwa": "giza",
        "znaczenie": "żylasta część nogi świni lub wołu nad kolanem",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa części tuszy zwierzęcej.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 15; hasło „giza”",
        "stronaPdf": 15,
        "rokZapisu": 1893,
        "id": "giza"
    },
    {
        "nazwa": "gleń",
        "znaczenie": "ukrojony kawałek chleba",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie porcji chleba przeznaczonej do jedzenia.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 15; hasło „gleń”",
        "stronaPdf": 15,
        "rokZapisu": 1893,
        "id": "glen"
    },
    {
        "nazwa": "gniłka",
        "znaczenie": "ulęgałka",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Słownictwo okolic Białegostoku (zapis historyczny)",
        "opis": "Nazwę owocu zapisano w powiecie białostockim.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 15; hasło „gniłka”",
        "stronaPdf": 15,
        "rokZapisu": 1893,
        "id": "gnilka"
    },
    {
        "nazwa": "gody",
        "znaczenie": "święta Bożego Narodzenia i koniec roku",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa świątecznego czasu w kalendarzu.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 15; hasło „gody”",
        "stronaPdf": 15,
        "rokZapisu": 1893,
        "id": "gody"
    },
    {
        "nazwa": "golanka",
        "znaczenie": "kość goleniowa bydła z mięsem",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Wyraz odnosi się do części tuszy.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 15; hasło „golanka”",
        "stronaPdf": 15,
        "rokZapisu": 1893,
        "id": "golanka"
    },
    {
        "nazwa": "gołomaty",
        "znaczenie": "gładki, pozbawiony wypukłości lub ozdób",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Tak określano między innymi pień bez gałęzi.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 15; hasło „gołomaty”",
        "stronaPdf": 15,
        "rokZapisu": 1893,
        "id": "golomaty"
    },
    {
        "nazwa": "gołopup",
        "znaczenie": "pisklę jeszcze nieopierzone",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa ptaka między wykluciem a pojawieniem się piór.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 15; hasło „gołopup”",
        "stronaPdf": 15,
        "rokZapisu": 1893,
        "id": "golopup"
    },
    {
        "nazwa": "gomoła",
        "znaczenie": "kulista bryła miękkiej substancji",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Mogła oznaczać bryłę masła albo gliny.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 15; hasło „gomoła”",
        "stronaPdf": 15,
        "rokZapisu": 1893,
        "id": "gomola"
    },
    {
        "nazwa": "goniony",
        "znaczenie": "taniec zwany kotką",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Autor podaje także tekst towarzyszącej mu piosenki.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 15; hasło „goniony”",
        "stronaPdf": 15,
        "rokZapisu": 1893,
        "id": "goniony"
    },
    {
        "nazwa": "gorczyca",
        "znaczenie": "potrawa z gotowanych roślin zielonych",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "W tym znaczeniu nie chodzi wyłącznie o nazwę rośliny.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 15; hasło „gorczyca”",
        "stronaPdf": 15,
        "rokZapisu": 1893,
        "id": "gorczyca"
    },
    {
        "nazwa": "grabielnik",
        "znaczenie": "osoba grabiąca siano",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie uczestnika prac przy sianie.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 15; hasło „grabielnik”",
        "stronaPdf": 15,
        "rokZapisu": 1893,
        "id": "grabielnik"
    },
    {
        "nazwa": "gracki",
        "znaczenie": "deseczki z drucikami do czesania włókien lnu",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Służyły jako szczotki podczas obróbki lnu.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 15; hasło „gracki”",
        "stronaPdf": 15,
        "rokZapisu": 1893,
        "id": "gracki"
    },
    {
        "nazwa": "granowity",
        "znaczenie": "łaciaty, pstrokaty",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Przymiotnik stosowany do maści zwierzęcia.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 15; hasło „granowity”",
        "stronaPdf": 15,
        "rokZapisu": 1893,
        "id": "granowity"
    },
    {
        "nazwa": "grapa",
        "znaczenie": "żelazny kociołek na trzech nóżkach",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa lanego naczynia do gotowania.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 16; hasło „grapa”",
        "stronaPdf": 16,
        "rokZapisu": 1893,
        "id": "grapa"
    },
    {
        "nazwa": "grduknąć",
        "znaczenie": "wystrzelić ze strzelby",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Czasownik naśladuje gwałtowny huk wystrzału.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 16; hasło „grduknąć”",
        "stronaPdf": 16,
        "rokZapisu": 1893,
        "id": "grduknac"
    },
    {
        "nazwa": "grępa",
        "znaczenie": "kępa lub pagórek wystający nad wodę",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie niewielkiego wzniesienia na mokrym terenie.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 16; hasło „grępa”",
        "stronaPdf": 16,
        "rokZapisu": 1893,
        "id": "grepa"
    },
    {
        "nazwa": "gręzy",
        "znaczenie": "ciężarki obciążające sieć rybacką",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Dzięki nim dolna część sieci opadała na dno.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 16; hasło „gręzy”",
        "stronaPdf": 16,
        "rokZapisu": 1893,
        "id": "grezy"
    },
    {
        "nazwa": "grochowcysko",
        "znaczenie": "pole po zebraniu grochu",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa roli po zakończonym zbiorze.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 16; hasło „grochowcysko”",
        "stronaPdf": 16,
        "rokZapisu": 1893,
        "id": "grochowcysko"
    },
    {
        "nazwa": "grodź",
        "znaczenie": "łąka w pobliżu wsi lub ogrodów",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Autor zaznacza, że zwykle ją ogradzano.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 16; hasło „grodź”",
        "stronaPdf": 16,
        "rokZapisu": 1893,
        "id": "grodz"
    },
    {
        "nazwa": "gromadki",
        "znaczenie": "Plejady, grupa gwiazd",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Jedna z ludowych nazw tej grupy na niebie.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 16; hasło „gromadki”",
        "stronaPdf": 16,
        "rokZapisu": 1893,
        "id": "gromadki"
    },
    {
        "nazwa": "grond",
        "znaczenie": "sucha wyniosłość pośród mokradeł",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa suchego miejsca otoczonego błotami.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 16; hasło „grond”",
        "stronaPdf": 16,
        "rokZapisu": 1893,
        "id": "grond"
    },
    {
        "nazwa": "grycht",
        "znaczenie": "mięso z grzbietu bydlęcia",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie części mięsa po uboju.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 16; hasło „grycht”",
        "stronaPdf": 16,
        "rokZapisu": 1893,
        "id": "grycht"
    },
    {
        "nazwa": "gugiel",
        "znaczenie": "żydowskie ciasto szabasowe",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Autor zapisuje nazwę potrawy związanej z szabatem.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 16; hasło „gugiel”",
        "stronaPdf": 16,
        "rokZapisu": 1893,
        "id": "gugiel"
    },
    {
        "nazwa": "gumnisko",
        "znaczenie": "ziemia zajęta dawniej lub obecnie przez zabudowania",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Słowo może wskazywać miejsce po budynkach gospodarskich.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 16; hasło „gumnisko”",
        "stronaPdf": 16,
        "rokZapisu": 1893,
        "id": "gumnisko"
    },
    {
        "nazwa": "gurbonić się",
        "znaczenie": "marszczyć się, źle się układać",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Autor odnosi czasownik do niepasującego ubrania.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 16; hasło „gurbonić się”",
        "stronaPdf": 16,
        "rokZapisu": 1893,
        "id": "gurbonic-sie"
    },
    {
        "nazwa": "gwac",
        "znaczenie": "szmata na krótkim kiju",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Przyrząd służył do mycia albo nakładania smoły.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 16; hasło „gwac”",
        "stronaPdf": 16,
        "rokZapisu": 1893,
        "id": "gwac"
    },
    {
        "nazwa": "haber",
        "znaczenie": "chaber bławatek",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa polnego kwiatu odnotowana w słowniku.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 16; hasło „haber”",
        "stronaPdf": 16,
        "rokZapisu": 1893,
        "id": "haber"
    },
    {
        "nazwa": "habory",
        "znaczenie": "chude, żylaste mięso niskiej jakości",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie gorszych kawałków mięsa.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 16; hasło „habory”",
        "stronaPdf": 16,
        "rokZapisu": 1893,
        "id": "habory"
    },
    {
        "nazwa": "hołobla",
        "znaczenie": "boczny dyszel",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa części zaprzęgu umieszczonej z boku.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 17; hasło „hołobla”",
        "stronaPdf": 17,
        "rokZapisu": 1893,
        "id": "holobla"
    },
    {
        "nazwa": "hopa",
        "znaczenie": "kupa, stos czegoś",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Mogła oznaczać na przykład nagromadzone siano.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 17; hasło „hopa”",
        "stronaPdf": 17,
        "rokZapisu": 1893,
        "id": "hopa"
    },
    {
        "nazwa": "jagielnik",
        "znaczenie": "młyn do robienia kaszy jaglanej",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa urządzenia związanego z obróbką prosa.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 17; hasło „jagielnik”",
        "stronaPdf": 17,
        "rokZapisu": 1893,
        "id": "jagielnik"
    },
    {
        "nazwa": "jamura",
        "znaczenie": "nisza, zagłębienie w murze",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie wnęki w ścianie.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 17; hasło „jamura”",
        "stronaPdf": 17,
        "rokZapisu": 1893,
        "id": "jamura"
    },
    {
        "nazwa": "jarlak",
        "znaczenie": "roczne jagnię",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa zwierzęcia wskazująca na jego wiek.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 17; hasło „jarlak”",
        "stronaPdf": 17,
        "rokZapisu": 1893,
        "id": "jarlak"
    },
    {
        "nazwa": "jasc",
        "znaczenie": "słój drewniany lub gliniany",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Dawna nazwa naczynia do przechowywania.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 17; hasło „jasc”",
        "stronaPdf": 17,
        "rokZapisu": 1893,
        "id": "jasc"
    },
    {
        "nazwa": "jedun",
        "znaczenie": "żarłok",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Lekceważące określenie osoby jedzącej bardzo dużo.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 18; hasło „jedun”",
        "stronaPdf": 18,
        "rokZapisu": 1893,
        "id": "jedun"
    },
    {
        "nazwa": "jeglej",
        "znaczenie": "świerk",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Autor wyraźnie wyjaśnia, że chodzi o świerk, nie jodłę.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 18; hasło „jeglej”",
        "stronaPdf": 18,
        "rokZapisu": 1893,
        "id": "jeglej"
    },
    {
        "nazwa": "jegody",
        "znaczenie": "poziomki",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "W tym haśle liczba mnoga oznacza konkretny leśny owoc.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 18; hasło „jegody”",
        "stronaPdf": 18,
        "rokZapisu": 1893,
        "id": "jegody"
    },
    {
        "nazwa": "jełownik",
        "znaczenie": "stado młodego bydła, jałowizny",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Zbiorowa nazwa zwierząt gospodarskich.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 18; hasło „jełownik”",
        "stronaPdf": 18,
        "rokZapisu": 1893,
        "id": "jelownik"
    },
    {
        "nazwa": "jęcmianka",
        "znaczenie": "słoma pozostała po wymłóceniu jęczmienia",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Słowo nazywa produkt młócenia określonego zboża.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 18; hasło „jęcmianka”",
        "stronaPdf": 18,
        "rokZapisu": 1893,
        "id": "jecmianka"
    },
    {
        "nazwa": "jęzornica",
        "znaczenie": "kobieta wygadana, pyskata",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie oceniające sposób mówienia, o zabarwieniu obraźliwym.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 18; hasło „jęzornica”",
        "stronaPdf": 18,
        "rokZapisu": 1893,
        "id": "jezornica"
    },
    {
        "nazwa": "jubka",
        "znaczenie": "kobiecy kaftan bez futra",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa elementu dawnego ubioru.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 18; hasło „jubka”",
        "stronaPdf": 18,
        "rokZapisu": 1893,
        "id": "jubka"
    },
    {
        "nazwa": "juska",
        "znaczenie": "żelazna zatyczka przewodu starego pieca",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "To jedno z dwóch znaczeń zapisanych pod tym hasłem.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 18; hasło „juska”",
        "stronaPdf": 18,
        "rokZapisu": 1893,
        "id": "juska",
        "dodatkoweZnaczenia": [
            "krew drobiu lub świni"
        ]
    },
    {
        "nazwa": "jusnik",
        "znaczenie": "czernina, szara polewka",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Regionalna nazwa potrawy przytoczona przez autora.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 18; hasło „jusnik”",
        "stronaPdf": 18,
        "rokZapisu": 1893,
        "id": "jusnik"
    },
    {
        "nazwa": "kacerek",
        "znaczenie": "siatka na obręczy i kiju do łapania ryb lub raków",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Kształtem przypominała worek rozpięty na ramie.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 18; hasło „kacerek”",
        "stronaPdf": 18,
        "rokZapisu": 1893,
        "id": "kacerek"
    },
    {
        "nazwa": "kajemnik",
        "znaczenie": "okrutnik, osoba pastwiąca się nad innymi",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Wyraz zawiera wyraźną negatywną ocenę postępowania.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 19; hasło „kajemnik”",
        "stronaPdf": 19,
        "rokZapisu": 1893,
        "id": "kajemnik"
    },
    {
        "nazwa": "kaliwo",
        "znaczenie": "źdźbło lub pojedyncza drobna łodyga",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie małej części rośliny.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 19; hasło „kaliwo”",
        "stronaPdf": 19,
        "rokZapisu": 1893,
        "id": "kaliwo"
    },
    {
        "nazwa": "kapelnik",
        "znaczenie": "grajek, muzykant",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa osoby zajmującej się graniem.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 19; hasło „kapelnik”",
        "stronaPdf": 19,
        "rokZapisu": 1893,
        "id": "kapelnik"
    },
    {
        "nazwa": "kapuza",
        "znaczenie": "wysoka barania czapka",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Miała rozcięcie z boku, wstążki i sukienny wierzch.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 19; hasło „kapuza”",
        "stronaPdf": 19,
        "rokZapisu": 1893,
        "id": "kapuza"
    },
    {
        "nazwa": "karć",
        "znaczenie": "krzak",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa krzewiastej rośliny.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 19; hasło „karć”",
        "stronaPdf": 19,
        "rokZapisu": 1893,
        "id": "karc"
    },
    {
        "nazwa": "karton",
        "znaczenie": "perkal, tkanina bawełniana",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Dawne znaczenie słowa odnoszące się do materiału.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 19; hasło „karton”",
        "stronaPdf": 19,
        "rokZapisu": 1893,
        "id": "karton"
    },
    {
        "nazwa": "karulek",
        "znaczenie": "kminek",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Autor wymienia dodawanie go do sera i pieczywa.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 19; hasło „karulek”",
        "stronaPdf": 19,
        "rokZapisu": 1893,
        "id": "karulek"
    },
    {
        "nazwa": "kawka",
        "znaczenie": "drewniany spławik przy sieci rybackiej",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "W tym haśle nie chodzi o ptaka.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 19; hasło „kawka”",
        "stronaPdf": 19,
        "rokZapisu": 1893,
        "id": "kawka"
    },
    {
        "nazwa": "kiedyśny",
        "znaczenie": "dawniejszy, starodawny",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Przymiotnik określa coś pochodzącego z minionego czasu.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 19; hasło „kiedyśny”",
        "stronaPdf": 19,
        "rokZapisu": 1893,
        "id": "kiedysny"
    },
    {
        "nazwa": "kiendziuk",
        "znaczenie": "świński żołądek służący do przechowywania sadła",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Znaczenie wiąże się z dawnym przetwarzaniem żywności.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 19; hasło „kiendziuk”",
        "stronaPdf": 19,
        "rokZapisu": 1893,
        "id": "kiendziuk"
    },
    {
        "nazwa": "kierdak",
        "znaczenie": "knur",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Autor zaznacza, że nazwę spotykał rzadko.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 19; hasło „kierdak”",
        "stronaPdf": 19,
        "rokZapisu": 1893,
        "id": "kierdak"
    },
    {
        "nazwa": "kiziak",
        "znaczenie": "źrebię",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa młodego konia w badanej gwarze.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 20; hasło „kiziak”",
        "stronaPdf": 20,
        "rokZapisu": 1893,
        "id": "kiziak"
    },
    {
        "nazwa": "klatka",
        "znaczenie": "zasiek na zboże w stodole",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "W tym znaczeniu słowo nazywa wydzieloną część stodoły.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 20; hasło „klatka”",
        "stronaPdf": 20,
        "rokZapisu": 1893,
        "id": "klatka"
    },
    {
        "nazwa": "kleić",
        "znaczenie": "budować z drewna niedbale i dorywczo",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Znaczenie dotyczy sposobu stawiania budynku.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 20; hasło „kleić”",
        "stronaPdf": 20,
        "rokZapisu": 1893,
        "id": "kleic"
    },
    {
        "nazwa": "klet",
        "znaczenie": "stary drewniany budynek, rudera",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie zniszczonej zabudowy.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 20; hasło „klet”",
        "stronaPdf": 20,
        "rokZapisu": 1893,
        "id": "klet"
    },
    {
        "nazwa": "kliniec",
        "znaczenie": "dach z klinowatych gontów osikowych",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa wiąże się z rodzajem pokrycia dachowego.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 20; hasło „kliniec”",
        "stronaPdf": 20,
        "rokZapisu": 1893,
        "id": "kliniec"
    },
    {
        "nazwa": "klok",
        "znaczenie": "bardzo gęsta konsystencja potrawy",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Autor przywołuje kaszę, żur i grochówkę.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 20; hasło „klok”",
        "stronaPdf": 20,
        "rokZapisu": 1893,
        "id": "klok"
    },
    {
        "nazwa": "kłomel",
        "znaczenie": "siatka do połowu ryb i raków na drewnianym szkielecie",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Worek siatki rozpinano na pałąku oraz kijach.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 20; hasło „kłomel”",
        "stronaPdf": 20,
        "rokZapisu": 1893,
        "id": "klomel"
    },
    {
        "nazwa": "kłopot",
        "znaczenie": "deska podtrzymująca górny koniec drążka żaren",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "W otworze tej deski obracał się drążek.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 20; hasło „kłopot”",
        "stronaPdf": 20,
        "rokZapisu": 1893,
        "id": "klopot"
    },
    {
        "nazwa": "knichuta",
        "znaczenie": "czajka",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa ptaka związanego z terenami podmokłymi.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 20; hasło „knichuta”",
        "stronaPdf": 20,
        "rokZapisu": 1893,
        "id": "knichuta"
    },
    {
        "nazwa": "knowie",
        "znaczenie": "dolne końce słomy w snopie",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie strony przeciwnej do kłosów.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 20; hasło „knowie”",
        "stronaPdf": 20,
        "rokZapisu": 1893,
        "id": "knowie"
    },
    {
        "nazwa": "knuć",
        "znaczenie": "rozszczepiać kawałek drewna",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Autor opisuje dzielenie drewna klinem.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 20; hasło „knuć”",
        "stronaPdf": 20,
        "rokZapisu": 1893,
        "id": "knuc"
    },
    {
        "nazwa": "kobiały",
        "znaczenie": "jasnopłowy, jasnokasztanowaty",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Przymiotnik odnosi się do maści zwierzęcia.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 20; hasło „kobiały”",
        "stronaPdf": 20,
        "rokZapisu": 1893,
        "id": "kobialy"
    },
    {
        "nazwa": "kobylica",
        "znaczenie": "żerdź na słupie służąca do zabawy w karuzelę",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Takie urządzenia ustawiała młodzież podczas wiosennych świąt.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 20; hasło „kobylica”",
        "stronaPdf": 20,
        "rokZapisu": 1893,
        "id": "kobylica"
    },
    {
        "nazwa": "kobyła",
        "znaczenie": "haftka",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa części zapięcia ubrania.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 21; hasło „kobyła”",
        "stronaPdf": 21,
        "rokZapisu": 1893,
        "id": "kobyla"
    },
    {
        "nazwa": "kocielnica",
        "znaczenie": "pora wydawania potomstwa przez owce",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie okresu w hodowli owiec.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 21; hasło „kocielnica”",
        "stronaPdf": 21,
        "rokZapisu": 1893,
        "id": "kocielnica"
    },
    {
        "nazwa": "kocki",
        "znaczenie": "puszysty kwiat wierzby",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa wierzbowych kotków.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 21; hasło „kocki”",
        "stronaPdf": 21,
        "rokZapisu": 1893,
        "id": "kocki"
    },
    {
        "nazwa": "kokorecka",
        "znaczenie": "deseczka przy górnym kamieniu żaren",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "W jej otworze osadzano dolny koniec drążka.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 21; hasło „kokorecka”",
        "stronaPdf": 21,
        "rokZapisu": 1893,
        "id": "kokorecka"
    },
    {
        "nazwa": "kokosianka",
        "znaczenie": "brodawka skórna",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Tak autor nazywa zmianę na skórze.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 21; hasło „kokosianka”",
        "stronaPdf": 21,
        "rokZapisu": 1893,
        "id": "kokosianka"
    },
    {
        "nazwa": "koktucha",
        "znaczenie": "kura skłonna do wysiadywania jaj",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie nasiadki.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 21; hasło „koktucha”",
        "stronaPdf": 21,
        "rokZapisu": 1893,
        "id": "koktucha"
    },
    {
        "nazwa": "kolenda",
        "znaczenie": "podarek",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Autor odnotowuje znaczenie związane z dawaniem prezentu.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 21; hasło „kolenda”",
        "stronaPdf": 21,
        "rokZapisu": 1893,
        "id": "kolenda"
    },
    {
        "nazwa": "koleśnik",
        "znaczenie": "kołodziej, stelmach",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa rzemieślnika wykonującego koła i wozy.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 21; hasło „koleśnik”",
        "stronaPdf": 21,
        "rokZapisu": 1893,
        "id": "kolesnik"
    },
    {
        "nazwa": "kolka",
        "znaczenie": "igła drzewa iglastego",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "W tym haśle chodzi o część rośliny.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 21; hasło „kolka”",
        "stronaPdf": 21,
        "rokZapisu": 1893,
        "id": "kolka"
    },
    {
        "nazwa": "kołowaty",
        "znaczenie": "wybujały w łodygę i niezdatny do jedzenia",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Autor odnosi przymiotnik do warzyw.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 21; hasło „kołowaty”",
        "stronaPdf": 21,
        "rokZapisu": 1893,
        "id": "kolowaty"
    },
    {
        "nazwa": "komolec",
        "znaczenie": "miara od łokcia do końca palców",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Długość wyznaczano za pomocą przedramienia i dłoni.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 21; hasło „komolec”",
        "stronaPdf": 21,
        "rokZapisu": 1893,
        "id": "komolec"
    },
    {
        "nazwa": "konicysko",
        "znaczenie": "pole po skoszeniu koniczyny",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa gruntu po określonym zbiorze.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 22; hasło „konicysko”",
        "stronaPdf": 22,
        "rokZapisu": 1893,
        "id": "konicysko"
    },
    {
        "nazwa": "koniuch",
        "znaczenie": "chłopiec pasący źrebięta",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie zajęcia przy młodych koniach.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 22; hasło „koniuch”",
        "stronaPdf": 22,
        "rokZapisu": 1893,
        "id": "koniuch"
    },
    {
        "nazwa": "konopnina",
        "znaczenie": "płótno konopne",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa tkaniny wykonanej z włókien konopi.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 22; hasło „konopnina”",
        "stronaPdf": 22,
        "rokZapisu": 1893,
        "id": "konopnina"
    },
    {
        "nazwa": "Tradycje dudziarskie w Wielkopolsce",
        "znaczenie": "gra na dudach i budowanie instrumentów",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "Muzycy przekazują repertuar, sposób gry i wiedzę o budowie dud kolejnym pokoleniom. Nauka odbywa się między innymi w relacji mistrza z uczniem. Kapele towarzyszą tańcom i uroczystościom.",
        "zrodla": [
            "nid23"
        ],
        "lokalizator": "Wpis nr 23: Tradycje dudziarskie w Wielkopolsce",
        "id": "tradycje-dudziarskie-w-wielkopolsce"
    },
    {
        "nazwa": "Wyplatanie kabłącoków w Lucimi",
        "znaczenie": "wykonywanie wiklinowych koszy",
        "regiony": [
            "Radomszczyzna"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "Kabłącok z Lucimi jest koszem ze świeżej, nieokorowanej wikliny. Płaski tył ułatwia noszenie go przy biodrze. Służy między innymi do przenoszenia warzyw podczas prac gospodarskich.",
        "zrodla": [
            "nid24"
        ],
        "lokalizator": "Wpis nr 24: Wyplatanie kabłącoków w Lucimi",
        "id": "wyplatanie-kablacokow-w-lucimi"
    },
    {
        "nazwa": "Tradycje weselne z Szamotuł",
        "znaczenie": "regionalne obrzędy weselne",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "W szamotulskim weselu łączą się regionalne stroje, muzyka, taniec i przemowy w gwarze. Ważne role mają między innymi faktor oraz drużba. Elementy uroczystości przekazuje się w rodzinach i lokalnej społeczności.",
        "zrodla": [
            "nid25"
        ],
        "lokalizator": "Wpis nr 25: Tradycje weselne z Szamotuł",
        "id": "tradycje-weselne-z-szamotul"
    },
    {
        "nazwa": "Wyścigi kumoterek",
        "znaczenie": "zawody konnych zaprzęgów saneczkowych",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "Na śnieżnym torze rywalizują dwuosobowe załogi góralskich sanek ciągniętych przez konia. Kumoter powozi, a kumoska pomaga utrzymać równowagę zaprzęgu, odpowiednio poruszając ciałem.",
        "zrodla": [
            "nid26"
        ],
        "lokalizator": "Wpis nr 26: Wyścigi kumoterek",
        "id": "wyscigi-kumoterek"
    },
    {
        "nazwa": "Gra i budowa dud żywieckich",
        "znaczenie": "miejscowa tradycja muzyczna",
        "regiony": [
            "Żywiecczyzna"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "Na Żywiecczyźnie pielęgnuje się zarówno granie, jak i wykonywanie dud. Instrument ma skórzany worek, piszczałki oraz ustnik. Umiejętności przekazywane są uczniom przez doświadczonych muzyków i budowniczych.",
        "zrodla": [
            "nid27"
        ],
        "lokalizator": "Wpis nr 27: Gra i budowa dud żywieckich",
        "id": "gra-i-budowa-dud-zywieckich"
    },
    {
        "nazwa": "Kwietne dywany w Spycimierzu",
        "znaczenie": "ozdabianie trasy procesji Bożego Ciała",
        "regiony": [
            "Spycimierz"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "Mieszkańcy parafii wspólnie układają kwiatową trasę procesji. Korzystają z płatków oraz całych kwiatów polnych i ogrodowych. W przygotowaniach uczestniczą różne pokolenia.",
        "zrodla": [
            "nid28"
        ],
        "lokalizator": "Wpis nr 28: Kwietne dywany w Spycimierzu",
        "id": "kwietne-dywany-w-spycimierzu"
    },
    {
        "nazwa": "Budowanie gajd i gra na nich",
        "znaczenie": "tradycja instrumentu dudowego",
        "regiony": [
            "Beskid Śląski"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "Gajdy są związane z Beskidem Śląskim, szczególnie z Istebną, Koniakowem i Jaworzynką. Większość części wykonuje się ręcznie. Muzycy wykorzystują je w repertuarze tradycyjnym i jego współczesnych opracowaniach.",
        "zrodla": [
            "nid29"
        ],
        "lokalizator": "Wpis nr 29: Budowanie gajd i gra na nich",
        "id": "budowanie-gajd-i-gra-na-nich"
    },
    {
        "nazwa": "Barbórka górników Górnego Śląska",
        "znaczenie": "doroczne święto górnicze",
        "regiony": [
            "Śląsk"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "Obchody przypadają 4 grudnia, we wspomnienie świętej Barbary. Łączą wymiar zawodowy i religijny. W świętowaniu uczestniczą górnicy oraz związane z nimi lokalne wspólnoty.",
        "zrodla": [
            "nid30"
        ],
        "lokalizator": "Wpis nr 30: Barbórka górników Górnego Śląska",
        "id": "barborka-gornikow-gornego-slaska"
    },
    {
        "nazwa": "Tradycje Bambrów Poznańskich",
        "znaczenie": "zwyczaje społeczności bamberskiej",
        "regiony": [
            "Wielkopolska"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "Potomkowie osadników z okolic Bambergu pielęgnują własne dziedzictwo w Poznaniu. Wyróżnia je między innymi strój bamberski, Święto Bamberskie oraz udział w miejskich uroczystościach i procesjach.",
        "zrodla": [
            "nid32"
        ],
        "lokalizator": "Wpis nr 32: Tradycje Bambrów Poznańskich",
        "id": "tradycje-bambrow-poznanskich"
    },
    {
        "nazwa": "Ręczne malowanie wzoru opolskiego",
        "znaczenie": "dekorowanie przedmiotów ornamentem roślinnym",
        "regiony": [
            "Śląsk Opolski"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "Motywy znane z kroszonek przeniesiono na trwalsze przedmioty, między innymi porcelanę. W dekoracjach dominują rośliny. Współczesne twórczynie umieszczają wzór także na biżuterii i innych przedmiotach użytkowych.",
        "zrodla": [
            "nid34"
        ],
        "lokalizator": "Wpis nr 34: Ręczne malowanie wzoru opolskiego",
        "id": "reczne-malowanie-wzoru-opolskiego"
    },
    {
        "nazwa": "Wodzenie niedźwiedzia na Opolszczyźnie",
        "znaczenie": "karnawałowy obchód przebierańców",
        "regiony": [
            "Śląsk Opolski"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "Korowód z postacią niedźwiedzia odwiedza domy. Towarzyszą mu inne przebrane postacie, różne zależnie od miejscowości. Zwyczaj kończy wspólna zabawa i symboliczna scena pokonania niedźwiedzia.",
        "zrodla": [
            "nid35"
        ],
        "lokalizator": "Wpis nr 35: Wodzenie niedźwiedzia na Opolszczyźnie",
        "id": "wodzenie-niedzwiedzia-na-opolszczyznie"
    },
    {
        "nazwa": "Kaszubska Gwiôzdka",
        "znaczenie": "wigilijne odwiedziny kolędników",
        "regiony": [
            "Kaszuby"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "Opis NID dotyczy grup z gminy Sierakowice. Kolędnicy odwiedzają gospodarstwa w Wigilię, od popołudnia niemal do pasterki. Udział w grupie często podtrzymuje rodzinną tradycję.",
        "zrodla": [
            "nid37"
        ],
        "lokalizator": "Wpis nr 37: Kaszubska Gwiôzdka",
        "id": "kaszubska-gwiozdka"
    },
    {
        "nazwa": "Wycinankarstwo kurpiowskie Puszczy Zielonej",
        "znaczenie": "wycinanie papierowych ozdób",
        "regiony": [
            "Kurpie"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "Twórcy używają tradycyjnych nożyc do strzyżenia owiec. Z papieru powstają między innymi leluje, drzewka i motywy zwierzęce. Dawniej dekoracje umieszczano bezpośrednio na ścianach, dziś również w ramach.",
        "zrodla": [
            "nid38"
        ],
        "lokalizator": "Wpis nr 38: Wycinankarstwo kurpiowskie Puszczy Zielonej",
        "id": "wycinankarstwo-kurpiowskie-puszczy-zielonej"
    },
    {
        "nazwa": "Krzyżoki w Borkach Małych",
        "znaczenie": "wielkanocna brama i obchód pól",
        "regiony": [
            "Śląsk Opolski"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "Mieszkańcy przygotowują bramę z tysięcy skorupek jaj. Zawieszają ją nocą w Wielką Sobotę. Przed wschodem słońca w Wielkanoc dwunastu kawalerów obchodzi pieszo pola.",
        "zrodla": [
            "nid39"
        ],
        "lokalizator": "Wpis nr 39: Krzyżoki w Borkach Małych",
        "id": "krzyzoki-w-borkach-malych"
    },
    {
        "nazwa": "Babski comber na Śląsku Opolskim",
        "znaczenie": "karnawałowa zabawa kobiet",
        "regiony": [
            "Śląsk Opolski"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "Spotkania organizują miejscowe kobiety pod koniec karnawału. Dawny obrzęd dla młodych mężatek zmienił się w zabawę szerszego grona uczestniczek. Jej przebieg zależy od miejscowości.",
        "zrodla": [
            "nid40"
        ],
        "lokalizator": "Wpis nr 40: Babski comber na Śląsku Opolskim",
        "id": "babski-comber-na-slasku-opolskim"
    },
    {
        "nazwa": "Kwietne dywany w czterech wsiach opolskich",
        "znaczenie": "przygotowanie trasy procesji z kwiatów",
        "regiony": [
            "Śląsk Opolski"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "W Kluczu, Olszowej, Zalesiu Śląskim i Zimnej Wódce mieszkańcy układają kwietne wzory na Boże Ciało. Wybór kwiatów zależy od pory ich kwitnienia. Często pracują wspólnie całe rodziny.",
        "zrodla": [
            "nid41"
        ],
        "lokalizator": "Wpis nr 41: Kwietne dywany w czterech wsiach opolskich",
        "id": "kwietne-dywany-w-czterech-wsiach-opolskich"
    },
    {
        "nazwa": "Pisanki batikowe na Śląsku Opolskim",
        "znaczenie": "zdobienie jaj woskiem i barwnikiem",
        "regiony": [
            "Śląsk Opolski"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "Wzór nanosi się woskiem, który osłania fragmenty skorupki przed barwnikiem. W tradycji Opolszczyzny ważną rolę odegrały także rodziny przesiedlone po wojnie z terenów dzisiejszej Ukrainy.",
        "zrodla": [
            "nid42"
        ],
        "lokalizator": "Wpis nr 42: Pisanki batikowe na Śląsku Opolskim",
        "id": "pisanki-batikowe-na-slasku-opolskim"
    },
    {
        "nazwa": "Dunajowanie w Łukowej i okolicach",
        "znaczenie": "bożonarodzeniowe kolędowanie życzące",
        "regiony": [
            "Łukowa i okolice"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "W Łukowej, Rakówce i Zamchu młodzi nieżonaci kolędnicy odwiedzają domy w wieczór świętego Szczepana. Śpiewają pieśni adresowane do panien, związane z życzeniami zamążpójścia.",
        "zrodla": [
            "nid43"
        ],
        "lokalizator": "Wpis nr 43: Dunajowanie w Łukowej i okolicach",
        "id": "dunajowanie-w-lukowej-i-okolicach"
    },
    {
        "nazwa": "Wysiewanie serc i krzyży na polach",
        "znaczenie": "symboliczny zasiew rodzinny",
        "regiony": [
            "Śląsk Opolski"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "W okolicach Strzelec Opolskich i Ujazdu rysuje się na ziemi serce lub krzyż, a następnie wysiewa w tym miejscu zboże. Zwyczaj wiąże się z życzeniem urodzaju i ochrony gospodarstwa.",
        "zrodla": [
            "nid45"
        ],
        "lokalizator": "Wpis nr 45: Wysiewanie serc i krzyży na polach",
        "id": "wysiewanie-serc-i-krzyzy-na-polach"
    },
    {
        "nazwa": "Wypiek byśków i nowych latek",
        "znaczenie": "obrzędowe figurki z ciasta",
        "regiony": [
            "Kurpie"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "W Puszczy Zielonej wypieka się zwierzęce figurki nazywane byśkami. Nowe latko może przedstawiać pastuszka ze zwierzętami na kręgu ciasta. Tradycja łączy się z okresem Bożego Narodzenia i Nowego Roku.",
        "zrodla": [
            "nid46"
        ],
        "lokalizator": "Wpis nr 46: Wypiek byśków i nowych latek",
        "id": "wypiek-byskow-i-nowych-latek"
    },
    {
        "nazwa": "Muzyka carillonowa w Gdańsku",
        "znaczenie": "gra na zespole dzwonów",
        "regiony": [
            "Gdańsk"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "Carillon to instrument złożony z wielu dzwonów. Muzyk porusza ich serca za pomocą klawiatury ręcznej i pedałowej. W Gdańsku ta tradycja wiąże się między innymi z wieżą kościoła świętej Katarzyny i ratuszem.",
        "zrodla": [
            "nid47"
        ],
        "lokalizator": "Wpis nr 47: Muzyka carillonowa w Gdańsku",
        "id": "muzyka-carillonowa-w-gdansku"
    },
    {
        "nazwa": "Bziuki w Koprzywnicy",
        "znaczenie": "wielkanocny pokaz ognia",
        "regiony": [
            "Koprzywnica"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "Podczas procesji rezurekcyjnej w Wielką Sobotę miejscowi strażacy tworzą widowiskowe słupy ognia. Zwyczaj jest związany z Koprzywnicą i tamtejszą wspólnotą.",
        "zrodla": [
            "nid50"
        ],
        "lokalizator": "Wpis nr 50: Bziuki w Koprzywnicy",
        "id": "bziuki-w-koprzywnicy"
    },
    {
        "nazwa": "Wytwarzanie czepców warmińskich",
        "znaczenie": "haftowane nakrycie głowy mężatki",
        "regiony": [
            "Warmia"
        ],
        "kategoria": "Tradycje",
        "typ": "Tradycja",
        "opis": "Warmiński czepiec składa się z denka, otoku i wstążek. Szczególną uwagę przyciąga haft na denku, często o motywach roślinnych. Rzemiosło przekazywane jest między pokoleniami i podczas warsztatów.",
        "zrodla": [
            "nid51"
        ],
        "lokalizator": "Wpis nr 51: Wytwarzanie czepców warmińskich",
        "id": "wytwarzanie-czepcow-warminskich"
    },
    {
        "nazwa": "baca",
        "znaczenie": "zwierzchnik szałasu pasterskiego",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Odpowiadał za owce i kierował pracą juhasów.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 9 (druk s. 3); hasło „baca”",
        "stronaPdf": 9,
        "rokZapisu": 1894,
        "id": "baca"
    },
    {
        "nazwa": "babiárka",
        "znaczenie": "akuszerka",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Nazwa osoby pomagającej przy porodach.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 9 (druk s. 3); hasło „babiárka”",
        "stronaPdf": 9,
        "rokZapisu": 1894,
        "id": "babiarka"
    },
    {
        "nazwa": "babi pies",
        "znaczenie": "włochata gąsienica",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Wyrażenie opisuje wygląd gąsienicy.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 9 (druk s. 3); hasło „babi pies”",
        "stronaPdf": 9,
        "rokZapisu": 1894,
        "id": "babi-pies"
    },
    {
        "nazwa": "babie usy",
        "znaczenie": "rodzaj jadalnych grzybów",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Autor odnotował tę nazwę bez dokładnego wskazania gatunku.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 9 (druk s. 3); hasło „babie usy”",
        "stronaPdf": 9,
        "rokZapisu": 1894,
        "id": "babie-usy"
    },
    {
        "nazwa": "babroń",
        "znaczenie": "szkodnik",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Tak określano kogoś wyrządzającego szkody.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 9 (druk s. 3); hasło „babroń”",
        "stronaPdf": 9,
        "rokZapisu": 1894,
        "id": "babron"
    },
    {
        "nazwa": "baga",
        "znaczenie": "tytoń do żucia",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Nazwa produktu tytoniowego.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 10 (druk s. 4); hasło „baga”",
        "stronaPdf": 10,
        "rokZapisu": 1894,
        "id": "baga"
    },
    {
        "nazwa": "bakro",
        "znaczenie": "dzwono koła",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Jeden z elementów tworzących obwód drewnianego koła.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 10 (druk s. 4); hasło „bakro”",
        "stronaPdf": 10,
        "rokZapisu": 1894,
        "id": "bakro"
    },
    {
        "nazwa": "bajtlík",
        "znaczenie": "torba na śrut",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Niewielki worek używany przy wyposażeniu strzeleckim.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 10 (druk s. 4); hasło „bajtlík”",
        "stronaPdf": 10,
        "rokZapisu": 1894,
        "id": "bajtlik"
    },
    {
        "nazwa": "bajtoć",
        "znaczenie": "zamierzać, myśleć o czymś",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Autor podaje słowo w przeczeniu, odpowiadającym stwierdzeniu „ani myślę”.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 10 (druk s. 4); hasło „bajtoć”",
        "stronaPdf": 10,
        "rokZapisu": 1894,
        "id": "bajtoc"
    },
    {
        "nazwa": "bakwań",
        "znaczenie": "stop cyny i miedzi",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Nazwa mieszaniny dwóch metali.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 10 (druk s. 4); hasło „bakwań”",
        "stronaPdf": 10,
        "rokZapisu": 1894,
        "id": "bakwan"
    },
    {
        "nazwa": "bakiesisty",
        "znaczenie": "kędzierzawy",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Określenie kogoś o kręconych włosach.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 10 (druk s. 4); hasło „bakiesisty”",
        "stronaPdf": 10,
        "rokZapisu": 1894,
        "id": "bakiesisty"
    },
    {
        "nazwa": "bańdzioch",
        "znaczenie": "brzuch",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Żartobliwe określenie części ciała.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 10 (druk s. 4); hasło „bańdzioch”",
        "stronaPdf": 10,
        "rokZapisu": 1894,
        "id": "bandzioch"
    },
    {
        "nazwa": "banior",
        "znaczenie": "wir wodny",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Miejsce, w którym woda obraca się wkoło.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 10 (druk s. 4); hasło „banior”",
        "stronaPdf": 10,
        "rokZapisu": 1894,
        "id": "banior"
    },
    {
        "nazwa": "banować",
        "znaczenie": "tęsknić, smucić się",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Wyraz opisujący przykre uczucia.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 10 (druk s. 4); hasło „banować”",
        "stronaPdf": 10,
        "rokZapisu": 1894,
        "id": "banowac"
    },
    {
        "nazwa": "barłóg",
        "znaczenie": "leśna ściółka",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Zbiorcza nazwa mchu, igliwia i drobnych świerkowych gałązek.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 10 (druk s. 4); hasło „barłóg”",
        "stronaPdf": 10,
        "rokZapisu": 1894,
        "id": "barlog"
    },
    {
        "nazwa": "basarenek",
        "znaczenie": "zapłata za wyrządzoną szkodę",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Odszkodowanie, które mógł płacić na przykład nieostrożny woźnica.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 10 (druk s. 4); hasło „basarenek”",
        "stronaPdf": 10,
        "rokZapisu": 1894,
        "id": "basarenek"
    },
    {
        "nazwa": "bednárka",
        "znaczenie": "klepka",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Deszczułka wykorzystywana do składania drewnianego naczynia.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 10 (druk s. 4); hasło „bednárka”",
        "stronaPdf": 10,
        "rokZapisu": 1894,
        "id": "bednarka"
    },
    {
        "nazwa": "bełéć",
        "znaczenie": "płonąć gwałtownie",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Określenie ruchliwego, buchającego płomienia.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 10 (druk s. 4); hasło „bełéć”",
        "stronaPdf": 10,
        "rokZapisu": 1894,
        "id": "belec"
    },
    {
        "nazwa": "beskurcyja",
        "znaczenie": "przekleństwo",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Nazwa dosadnego wyrażenia.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 10 (druk s. 4); hasło „beskurcyja”",
        "stronaPdf": 10,
        "rokZapisu": 1894,
        "id": "beskurcyja"
    },
    {
        "nazwa": "beśpekta",
        "znaczenie": "luneta lub lornetka",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Przyrząd pozwalający patrzeć na odległe przedmioty.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 10 (druk s. 4); hasło „beśpekta”",
        "stronaPdf": 10,
        "rokZapisu": 1894,
        "id": "bespekta"
    },
    {
        "nazwa": "bezera",
        "znaczenie": "osoba cudaczna lub niedobra",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Ocena wyglądu albo zachowania człowieka.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 11 (druk s. 5); hasło „bezera”",
        "stronaPdf": 11,
        "rokZapisu": 1894,
        "id": "bezera"
    },
    {
        "nazwa": "bicowe",
        "znaczenie": "weselna opłata dla woźnicy",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Dziewczęta płaciły furmanom za obietnicę dobrego przewozu.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 11 (druk s. 5); hasło „bicowe”",
        "stronaPdf": 11,
        "rokZapisu": 1894,
        "id": "bicowe"
    },
    {
        "nazwa": "bida",
        "znaczenie": "dwukołowy wózek",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Nazwa prostego środka transportu.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 11 (druk s. 5); hasło „bida”",
        "stronaPdf": 11,
        "rokZapisu": 1894,
        "id": "bida"
    },
    {
        "nazwa": "biedrawa",
        "znaczenie": "krowa z plamami na biodrach",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Określenie zwierzęcia na podstawie umaszczenia.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 11 (druk s. 5); hasło „biedrawa”",
        "stronaPdf": 11,
        "rokZapisu": 1894,
        "id": "biedrawa"
    },
    {
        "nazwa": "biega",
        "znaczenie": "drewniany pedał sieczkarni",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Poruszany nogą element napędzający ręczne urządzenie.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 11 (druk s. 5); hasło „biega”",
        "stronaPdf": 11,
        "rokZapisu": 1894,
        "id": "biega"
    },
    {
        "nazwa": "bieganiec",
        "znaczenie": "dawny duży piec góralski",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Piec o glinianej podstawie i murowanej górnej części.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 11 (druk s. 5); hasło „bieganiec”",
        "stronaPdf": 11,
        "rokZapisu": 1894,
        "id": "bieganiec"
    },
    {
        "nazwa": "biegunka",
        "znaczenie": "półtoraroczna jałówka",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Tutaj nazwa wieku młodej krowy.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 11 (druk s. 5); hasła „biegunka”, „biegunki”",
        "stronaPdf": 11,
        "rokZapisu": 1894,
        "id": "biegunka",
        "dodatkoweZnaczenia": [
            "biegunki (liczba mnoga): duże pióra lotne ptaka; odrębne znaczenie zapisane obok w tym samym źródle"
        ],
        "warianty": [
            "biegunki, w znaczeniu piór"
        ]
    },
    {
        "nazwa": "biórno",
        "znaczenie": "cienkie drzewo niewyrośnięte",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Nazwa drzewa o niewielkiej grubości.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 11 (druk s. 5); hasło „biórno”",
        "stronaPdf": 11,
        "rokZapisu": 1894,
        "id": "biorno"
    },
    {
        "nazwa": "biorny",
        "znaczenie": "dobrze ciągnący, o koniu",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Pochwała siły konia pracującego w zaprzęgu.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 11 (druk s. 5); hasło „biorny”",
        "stronaPdf": 11,
        "rokZapisu": 1894,
        "id": "biorny"
    },
    {
        "nazwa": "bisagi",
        "znaczenie": "worek do przewozu mleka na koniu",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Przez środkowy otwór układano go tak, by po bokach mieścił dwa naczynia.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 11 (druk s. 5); hasło „bisagi”",
        "stronaPdf": 11,
        "rokZapisu": 1894,
        "id": "bisagi"
    },
    {
        "nazwa": "blajndać",
        "znaczenie": "pleść byle co",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Mówić rzeczy bez większego sensu.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 12 (druk s. 6); hasło „blajndać”",
        "stronaPdf": 12,
        "rokZapisu": 1894,
        "id": "blajndac"
    },
    {
        "nazwa": "błázek",
        "znaczenie": "belka w prasie olejarskiej",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Ciężki element dociskający masę w olejarni.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 12 (druk s. 6); hasło „błázek”",
        "stronaPdf": 12,
        "rokZapisu": 1894,
        "id": "blazek"
    },
    {
        "nazwa": "błektać",
        "znaczenie": "rozcieńczać mleko wodą",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Czynność zmieniająca gęstość mleka.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 12 (druk s. 6); hasło „błektać”",
        "stronaPdf": 12,
        "rokZapisu": 1894,
        "id": "blektac"
    },
    {
        "nazwa": "błoniárz",
        "znaczenie": "szklarz",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Nazwa rzemieślnika zajmującego się szybami.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 12 (druk s. 6); hasło „błoniárz”",
        "stronaPdf": 12,
        "rokZapisu": 1894,
        "id": "bloniarz"
    },
    {
        "nazwa": "błotniki",
        "znaczenie": "zatyczki zabezpieczające osie",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Elementy utrzymujące części wozu na miejscu.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 12 (druk s. 6); hasło „błotniki”",
        "stronaPdf": 12,
        "rokZapisu": 1894,
        "id": "blotniki"
    },
    {
        "nazwa": "bobák",
        "znaczenie": "straszydło",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Postać używana w opowieściach do straszenia dzieci.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 12 (druk s. 6); hasło „bobák”",
        "stronaPdf": 12,
        "rokZapisu": 1894,
        "id": "bobak"
    },
    {
        "nazwa": "bobcyć",
        "znaczenie": "oddawać drobne odchody, o owcach i kozach",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Czasownik odnoszący się do tych zwierząt gospodarskich.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 12 (druk s. 6); hasło „bobcyć”",
        "stronaPdf": 12,
        "rokZapisu": 1894,
        "id": "bobcyc"
    },
    {
        "nazwa": "bockować",
        "znaczenie": "tańczyć bokiem do partnera",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Tak opisywano ruch kobiety w tańcu góralskim.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 12 (druk s. 6); hasło „bockować”",
        "stronaPdf": 12,
        "rokZapisu": 1894,
        "id": "bockowac"
    },
    {
        "nazwa": "bodásco",
        "znaczenie": "cokolwiek",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Słowo wyrażające nieokreślony wybór.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 12 (druk s. 6); hasło „bodásco”",
        "stronaPdf": 12,
        "rokZapisu": 1894,
        "id": "bodasco"
    },
    {
        "nazwa": "bojno",
        "znaczenie": "bojaźliwie, z obawą",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "W wyrażeniu „bojno mi” oznacza odczuwanie lęku.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 12 (druk s. 6); hasło „bojno”",
        "stronaPdf": 12,
        "rokZapisu": 1894,
        "id": "bojno"
    },
    {
        "nazwa": "bolák",
        "znaczenie": "wrzód",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Dawna nazwa bolesnej zmiany na skórze.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 12 (druk s. 6); hasło „bolák”",
        "stronaPdf": 12,
        "rokZapisu": 1894,
        "id": "bolak"
    },
    {
        "nazwa": "bór",
        "znaczenie": "torf",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "W tym znaczeniu chodzi o materiał z torfowiska.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 12 (druk s. 6); hasło „bór”",
        "stronaPdf": 12,
        "rokZapisu": 1894,
        "id": "bor"
    },
    {
        "nazwa": "bosák",
        "znaczenie": "dawny nieokuty wóz",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Określenie wozu bez żelaznych okuć.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 12 (druk s. 6); hasło „bosák”",
        "stronaPdf": 12,
        "rokZapisu": 1894,
        "id": "bosak"
    },
    {
        "nazwa": "bośkać",
        "znaczenie": "całować",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Nazwa gestu czułości.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 12 (druk s. 6); hasło „bośkać”",
        "stronaPdf": 12,
        "rokZapisu": 1894,
        "id": "boskac"
    },
    {
        "nazwa": "brakowny",
        "znaczenie": "doskonały, okazały",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Wyraz służył pochwale jakości lub wyglądu.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 12 (druk s. 6); hasło „brakowny”",
        "stronaPdf": 12,
        "rokZapisu": 1894,
        "id": "brakowny"
    },
    {
        "nazwa": "braw",
        "znaczenie": "wieprzek",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Nazwa zwierzęcia gospodarskiego; autor zaznacza rzadkie użycie.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 12 (druk s. 6); hasło „braw”",
        "stronaPdf": 12,
        "rokZapisu": 1894,
        "id": "braw"
    },
    {
        "nazwa": "brembolce",
        "znaczenie": "mosiężne ozdoby w kształcie kulek",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Ozdoby noszone na szyi.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 12 (druk s. 6); hasło „brembolce”",
        "stronaPdf": 12,
        "rokZapisu": 1894,
        "id": "brembolce"
    },
    {
        "nazwa": "brok",
        "znaczenie": "śrut",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Drobne metalowe kulki amunicji.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 12 (druk s. 6); hasło „brok”",
        "stronaPdf": 12,
        "rokZapisu": 1894,
        "id": "brok"
    },
    {
        "nazwa": "brość",
        "znaczenie": "jesienne pąki bukowe",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Zawiązki liści pojawiające się na gałązkach buka.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 13 (druk s. 7); hasło „brość”",
        "stronaPdf": 13,
        "rokZapisu": 1894,
        "id": "brosc"
    },
    {
        "nazwa": "bryja",
        "znaczenie": "gęsta potrawa z mąki owsianej",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Mąkę wsypywano do wrzątku; potrawę jedzono między innymi z mlekiem.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 13 (druk s. 7); hasło „bryja”",
        "stronaPdf": 13,
        "rokZapisu": 1894,
        "id": "bryja"
    },
    {
        "nazwa": "brygantować",
        "znaczenie": "krzyczeć na kogoś, wymyślać",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Czasownik opisujący ostrą naganę.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 13 (druk s. 7); hasło „brygantować”",
        "stronaPdf": 13,
        "rokZapisu": 1894,
        "id": "brygantowac"
    },
    {
        "nazwa": "bryskać",
        "znaczenie": "stroić niewłaściwe żarty",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Żartować z kogoś w sposób przekraczający granice.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 13 (druk s. 7); hasło „bryskać”",
        "stronaPdf": 13,
        "rokZapisu": 1894,
        "id": "bryskac"
    },
    {
        "nazwa": "bryzować się",
        "znaczenie": "stroić się",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Dbać o ozdobny wygląd swojego ubioru.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 13 (druk s. 7); hasło „bryzować się”",
        "stronaPdf": 13,
        "rokZapisu": 1894,
        "id": "bryzowac-sie"
    },
    {
        "nazwa": "brzęk",
        "znaczenie": "człowiek nudny i niedołężny",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Niepochlebna ocena osoby trudnej w rozmowie.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 13 (druk s. 7); hasło „brzęk”",
        "stronaPdf": 13,
        "rokZapisu": 1894,
        "id": "brzek"
    },
    {
        "nazwa": "bucny",
        "znaczenie": "grzeczny",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Pozytywne określenie zachowania.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 13 (druk s. 7); hasło „bucny”",
        "stronaPdf": 13,
        "rokZapisu": 1894,
        "id": "bucny"
    },
    {
        "nazwa": "budárz",
        "znaczenie": "cieśla, budowniczy",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Nazwa fachowca wznoszącego drewniane budynki.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 13 (druk s. 7); hasło „budárz”",
        "stronaPdf": 13,
        "rokZapisu": 1894,
        "id": "budarz"
    },
    {
        "nazwa": "bugar",
        "znaczenie": "duża mucha końska",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Ludowe określenie owada.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 13 (druk s. 7); hasło „bugar”",
        "stronaPdf": 13,
        "rokZapisu": 1894,
        "id": "bugar"
    },
    {
        "nazwa": "bukowiec",
        "znaczenie": "moneta czterocentowa",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Historyczna nazwa pieniądza o określonej wartości.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 13 (druk s. 7); hasło „bukowiec”",
        "stronaPdf": 13,
        "rokZapisu": 1894,
        "id": "bukowiec"
    },
    {
        "nazwa": "bukse",
        "znaczenie": "okucie wewnątrz piasty koła",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Część umieszczona w otworze, przez który przechodzi oś.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 13 (druk s. 7); hasło „bukse”",
        "stronaPdf": 13,
        "rokZapisu": 1894,
        "id": "bukse"
    },
    {
        "nazwa": "burk",
        "znaczenie": "kamienisty grunt",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Nazwa podłoża pokrytego kamieniami.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 14 (druk s. 8); hasło „burk”",
        "stronaPdf": 14,
        "rokZapisu": 1894,
        "id": "burk"
    },
    {
        "nazwa": "burka",
        "znaczenie": "bójka, utarczka",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "W tym znaczeniu wyraz opisuje starcie między ludźmi.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 14 (druk s. 8); hasło „burka”",
        "stronaPdf": 14,
        "rokZapisu": 1894,
        "id": "burka"
    },
    {
        "nazwa": "burniawa",
        "znaczenie": "hałas",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Głośne zamieszanie przeszkadzające innym.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 14 (druk s. 8); hasło „burniawa”",
        "stronaPdf": 14,
        "rokZapisu": 1894,
        "id": "burniawa"
    },
    {
        "nazwa": "bursa",
        "znaczenie": "wspólna zabawa zapustna",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Uczestnicy przynosili żywność, a zabawie towarzyszyły taniec i muzyka.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 14 (druk s. 8); hasło „bursa”",
        "stronaPdf": 14,
        "rokZapisu": 1894,
        "id": "bursa"
    },
    {
        "nazwa": "burtać",
        "znaczenie": "burzyć, przewracać",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Czasownik odnoszony między innymi do budynków.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 14 (druk s. 8); hasło „burtać”",
        "stronaPdf": 14,
        "rokZapisu": 1894,
        "id": "burtac"
    },
    {
        "nazwa": "burtnica",
        "znaczenie": "obudowa koła młyńskiego",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Budowla osłaniająca koło młyna.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 14 (druk s. 8); hasło „burtnica”",
        "stronaPdf": 14,
        "rokZapisu": 1894,
        "id": "burtnica"
    },
    {
        "nazwa": "burzyć",
        "znaczenie": "hałasować",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Słowo mogło opisywać między innymi dzwonienie.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 14 (druk s. 8); hasło „burzyć”",
        "stronaPdf": 14,
        "rokZapisu": 1894,
        "id": "burzyc"
    },
    {
        "nazwa": "byciár",
        "znaczenie": "dorastający chłopak",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Nazwa młodego człowieka w okresie dojrzewania.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 14 (druk s. 8); hasło „byciár”",
        "stronaPdf": 14,
        "rokZapisu": 1894,
        "id": "byciar"
    },
    {
        "nazwa": "bykowe",
        "znaczenie": "opłata za korzystanie z byka rozpłodowego",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Płatność związana z hodowlą bydła.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 14 (druk s. 8); hasło „bykowe”",
        "stronaPdf": 14,
        "rokZapisu": 1894,
        "id": "bykowe"
    },
    {
        "nazwa": "byl",
        "znaczenie": "łodyga kwiatu",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Nazwa części rośliny.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 14 (druk s. 8); hasło „byl”",
        "stronaPdf": 14,
        "rokZapisu": 1894,
        "id": "byl"
    },
    {
        "nazwa": "byrka",
        "znaczenie": "owca",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Jedna z podhalańskich nazw zwierzęcia pasterskiego.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 14 (druk s. 8); hasło „byrka”",
        "stronaPdf": 14,
        "rokZapisu": 1894,
        "id": "byrka"
    },
    {
        "nazwa": "calizna",
        "znaczenie": "pozostała pasza w bruzdach i dołkach",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Roślinność pozostająca po koszeniu owsa albo ugoru.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 14 (druk s. 8); hasło „calizna”",
        "stronaPdf": 14,
        "rokZapisu": 1894,
        "id": "calizna"
    },
    {
        "nazwa": "caper",
        "znaczenie": "robotnik drogowy",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Osoba zatrudniona przy pracach na drogach.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 14 (druk s. 8); hasło „caper”",
        "stronaPdf": 14,
        "rokZapisu": 1894,
        "id": "caper"
    },
    {
        "nazwa": "cárek",
        "znaczenie": "zagroda pod piecem dla zwierząt",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Miejsce w izbie przeznaczane dla kur lub małych jagniąt.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 14 (druk s. 8); hasło „cárek”",
        "stronaPdf": 14,
        "rokZapisu": 1894,
        "id": "carek"
    },
    {
        "nazwa": "cekan",
        "znaczenie": "kilof",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Narzędzie używane do rozbijania twardego podłoża.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 14 (druk s. 8); hasło „cekan”",
        "stronaPdf": 14,
        "rokZapisu": 1894,
        "id": "cekan"
    },
    {
        "nazwa": "cekany",
        "znaczenie": "oczekujący ze zbożem w młynie",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Zbiorowe określenie ludzi czekających na swoją kolej.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 14 (druk s. 8); hasło „cekany”",
        "stronaPdf": 14,
        "rokZapisu": 1894,
        "id": "cekany"
    },
    {
        "nazwa": "cemiérwa",
        "znaczenie": "duża gromada ludzi lub zwierząt",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Słowo określające liczną grupę.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 15 (druk s. 9); hasło „cemiérwa”",
        "stronaPdf": 15,
        "rokZapisu": 1894,
        "id": "cemierwa"
    },
    {
        "nazwa": "centki",
        "znaczenie": "mosiężne guzy na rzemieniu",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Elementy ozdobne używane przy kapeluszu.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 15 (druk s. 9); hasło „centki”",
        "stronaPdf": 15,
        "rokZapisu": 1894,
        "id": "centki"
    },
    {
        "nazwa": "cerpák",
        "znaczenie": "drewniane naczynie z uchem",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Na szałasie służyło do żętycy; uchwyt często zdobiono rzeźbą.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 15 (druk s. 9); hasło „cerpák”",
        "stronaPdf": 15,
        "rokZapisu": 1894,
        "id": "cerpak"
    },
    {
        "nazwa": "cetyna",
        "znaczenie": "igliwie",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Nazwa szpilek drzew iglastych.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 15 (druk s. 9); hasło „cetyna”",
        "stronaPdf": 15,
        "rokZapisu": 1894,
        "id": "cetyna"
    },
    {
        "nazwa": "chamisko",
        "znaczenie": "tokowisko głuszców",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Miejsce godowych zachowań ptaków.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 15 (druk s. 9); hasło „chamisko”",
        "stronaPdf": 15,
        "rokZapisu": 1894,
        "id": "chamisko"
    },
    {
        "nazwa": "chipkać",
        "znaczenie": "skakać, biec w podskokach",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Czasownik określający sposób poruszania się.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 15 (druk s. 9); hasło „chipkać”",
        "stronaPdf": 15,
        "rokZapisu": 1894,
        "id": "chipkac"
    },
    {
        "nazwa": "chlepiać się",
        "znaczenie": "wciąż otwierać i zamykać drzwi",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Słowo opisujące uporczywe poruszanie drzwiami.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 15 (druk s. 9); hasło „chlepiać się”",
        "stronaPdf": 15,
        "rokZapisu": 1894,
        "id": "chlepiac-sie"
    },
    {
        "nazwa": "chodny",
        "znaczenie": "trwały",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Określenie odpornego drewna, odzieży lub obuwia.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 15 (druk s. 9); hasło „chodny”",
        "stronaPdf": 15,
        "rokZapisu": 1894,
        "id": "chodny"
    },
    {
        "nazwa": "chudobny",
        "znaczenie": "ubogi",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Dawne określenie człowieka bez majątku.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 16 (druk s. 10); hasło „chudobny”",
        "stronaPdf": 16,
        "rokZapisu": 1894,
        "id": "chudobny"
    },
    {
        "nazwa": "ciabrać się",
        "znaczenie": "brudzić się",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Wyraz odnoszony do zabrudzenia siebie.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 16 (druk s. 10); hasło „ciabrać się”",
        "stronaPdf": 16,
        "rokZapisu": 1894,
        "id": "ciabrac-sie"
    },
    {
        "nazwa": "ciabracha",
        "znaczenie": "brud, zabrudzenie",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Rzeczownik związany z nieczystością.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 16 (druk s. 10); hasło „ciabracha”",
        "stronaPdf": 16,
        "rokZapisu": 1894,
        "id": "ciabracha"
    },
    {
        "nazwa": "ciaciany",
        "znaczenie": "ładny i grzeczny, o dziecku",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Pochwała wyglądu i zachowania dziecka, czasem używana ironicznie.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 16 (druk s. 10); hasło „ciaciany”",
        "stronaPdf": 16,
        "rokZapisu": 1894,
        "id": "ciaciany"
    },
    {
        "nazwa": "ciągáć",
        "znaczenie": "drąg z hakiem do nakładania obręczy",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Kowal używał go przy osadzaniu okucia na drewnianym kole.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 16 (druk s. 10); hasło „ciągáć”",
        "stronaPdf": 16,
        "rokZapisu": 1894,
        "id": "ciagac"
    },
    {
        "nazwa": "ciaplák",
        "znaczenie": "szeroki, niski garnek",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Nazwa naczynia określająca jego kształt.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 16 (druk s. 10); hasło „ciaplák”",
        "stronaPdf": 16,
        "rokZapisu": 1894,
        "id": "ciaplak"
    },
    {
        "nazwa": "ciarać się",
        "znaczenie": "zamieniać się",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Wymieniać się między sobą rzeczami lub zwierzętami.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 16 (druk s. 10); hasło „ciarać się”",
        "stronaPdf": 16,
        "rokZapisu": 1894,
        "id": "ciarac-sie"
    },
    {
        "nazwa": "ciązadło",
        "znaczenie": "żerdka poruszająca miech kowalski",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Część urządzenia dostarczającego powietrze do paleniska.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 16 (druk s. 10); hasło „ciązadło”",
        "stronaPdf": 16,
        "rokZapisu": 1894,
        "id": "ciazadlo"
    },
    {
        "nazwa": "ciekawy",
        "znaczenie": "pilny, chętny do nauki",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Tu określenie osoby ochoczo zajmującej się nauką lub pracą.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 16 (druk s. 10); hasło „ciekawy”",
        "stronaPdf": 16,
        "rokZapisu": 1894,
        "id": "ciekawy"
    },
    {
        "nazwa": "cieniec",
        "znaczenie": "cienki koniec bicza",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Końcowa część pasterskiego narzędzia.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 16 (druk s. 10); hasło „cieniec”",
        "stronaPdf": 16,
        "rokZapisu": 1894,
        "id": "cieniec"
    },
    {
        "nazwa": "cieślica",
        "znaczenie": "siekiera ciesielska",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Narzędzie do obróbki drewna przy budowie.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 16 (druk s. 10); hasło „cieślica”",
        "stronaPdf": 16,
        "rokZapisu": 1894,
        "id": "cieslica"
    },
    {
        "nazwa": "ciupaga",
        "znaczenie": "siekierka na długim trzonku",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Charakterystyczne narzędzie i element wyposażenia górala.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 17 (druk s. 11); hasło „ciupaga”",
        "stronaPdf": 17,
        "rokZapisu": 1894,
        "id": "ciupaga"
    },
    {
        "nazwa": "clenie",
        "znaczenie": "leczenie się",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Nazwa czynności związanej z odzyskiwaniem zdrowia.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 17 (druk s. 11); hasło „clenie”",
        "stronaPdf": 17,
        "rokZapisu": 1894,
        "id": "clenie"
    },
    {
        "nazwa": "clenka",
        "znaczenie": "najrzadsza żętyca",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Płyn pozostający po zebraniu gęstszej wierzchniej części.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 17 (druk s. 11); hasło „clenka”",
        "stronaPdf": 17,
        "rokZapisu": 1894,
        "id": "clenka"
    },
    {
        "nazwa": "cliwo",
        "znaczenie": "tęskno",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Określenie odczuwanej tęsknoty.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 17 (druk s. 11); hasło „cliwo”",
        "stronaPdf": 17,
        "rokZapisu": 1894,
        "id": "cliwo"
    },
    {
        "nazwa": "cuba",
        "znaczenie": "szczyt góry",
        "regiony": [
            "Podhale"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara podhalańska (zapis historyczny)",
        "opis": "Nazwa najwyższego punktu wzniesienia.",
        "zrodla": [
            "dembowski"
        ],
        "lokalizator": "PDF, strona 17 (druk s. 11); hasło „cuba”",
        "stronaPdf": 17,
        "rokZapisu": 1894,
        "id": "cuba"
    },
    {
        "nazwa": "cigięć",
        "znaczenie": "gęstwina krzaków",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Miejsce porośnięte gęstymi zaroślami.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 9; hasło „cigięć”",
        "stronaPdf": 9,
        "rokZapisu": 1893,
        "id": "cigiec"
    },
    {
        "nazwa": "ciopać",
        "znaczenie": "uderzać ostrym narzędziem",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Czynność wykonywana narzędziem wyposażonym w ostrze.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 9; hasło „ciopać”",
        "stronaPdf": 9,
        "rokZapisu": 1893,
        "id": "ciopac"
    },
    {
        "nazwa": "ciort",
        "znaczenie": "diabeł",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Dawna nazwa postaci z wierzeń.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 9; hasło „ciort”",
        "stronaPdf": 9,
        "rokZapisu": 1893,
        "id": "ciort"
    },
    {
        "nazwa": "ciotucha",
        "znaczenie": "zimnica",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Historyczne określenie choroby przebiegającej z gorączką.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 9; hasło „ciotucha”",
        "stronaPdf": 9,
        "rokZapisu": 1893,
        "id": "ciotucha"
    },
    {
        "nazwa": "cizmy",
        "znaczenie": "kobiece buty z krótkimi cholewkami",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Skórzane obuwie sięgające wyżej niż płytkie pantofle.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 9; hasło „cizmy”",
        "stronaPdf": 9,
        "rokZapisu": 1893,
        "id": "cizmy"
    },
    {
        "nazwa": "cmanić",
        "znaczenie": "oszukiwać, wyłudzać",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Czasownik opisujący nieuczciwe postępowanie.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 9; hasło „cmanić”",
        "stronaPdf": 9,
        "rokZapisu": 1893,
        "id": "cmanic"
    },
    {
        "nazwa": "ćma",
        "znaczenie": "wielka mnogość",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Tutaj duża liczba ludzi, zwierząt lub innych rzeczy.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 9; hasło „ćma”",
        "stronaPdf": 9,
        "rokZapisu": 1893,
        "id": "cma"
    },
    {
        "nazwa": "cochać się",
        "znaczenie": "ocierać się o przedmiot",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Tak opisywano tarcie swędzącym miejscem o coś.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 9; hasło „cochać się”",
        "stronaPdf": 9,
        "rokZapisu": 1893,
        "id": "cochac-sie"
    },
    {
        "nazwa": "cołko",
        "znaczenie": "dawne kobiece nakrycie głowy",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Pasek aksamitu z ozdobnym obramowaniem zakładany na biały czepek.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 9; hasło „cołko”",
        "stronaPdf": 9,
        "rokZapisu": 1893,
        "id": "colko"
    },
    {
        "nazwa": "cółnik",
        "znaczenie": "czółenko tkackie",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Drewniane narzędzie służące podczas tkania.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 9; hasło „cółnik”",
        "stronaPdf": 9,
        "rokZapisu": 1893,
        "id": "colnik"
    },
    {
        "nazwa": "cuja",
        "znaczenie": "długa opończa",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Wierzchnie okrycie z grubego sukna, noszone w drodze.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 10; hasło „cuja”",
        "stronaPdf": 10,
        "rokZapisu": 1893,
        "id": "cuja"
    },
    {
        "nazwa": "cupieradło",
        "znaczenie": "dziwaczny strój głowy",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Niepochlebna nazwa ozdobnego nakrycia.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 10; hasło „cupieradło”",
        "stronaPdf": 10,
        "rokZapisu": 1893,
        "id": "cupieradlo"
    },
    {
        "nazwa": "cupierzyć się",
        "znaczenie": "przesadnie stroić głowę",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Czynność związana z nadmiernym upiększaniem ubioru.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 10; hasło „cupierzyć się”",
        "stronaPdf": 10,
        "rokZapisu": 1893,
        "id": "cupierzyc-sie"
    },
    {
        "nazwa": "ćwikle",
        "znaczenie": "kliny materiału pod pachami koszuli",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Wstawki umieszczane przy rękawach ubrania.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 10; hasło „ćwikle”",
        "stronaPdf": 10,
        "rokZapisu": 1893,
        "id": "cwikle"
    },
    {
        "nazwa": "cybant",
        "znaczenie": "żelazne okucie koła",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa jednej z metalowych części koła.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 10; hasło „cybant”",
        "stronaPdf": 10,
        "rokZapisu": 1893,
        "id": "cybant"
    },
    {
        "nazwa": "cybulak",
        "znaczenie": "sucha zewnętrzna łuska cebuli",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie suchej osłony warzywa.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 10; hasło „cybulak”",
        "stronaPdf": 10,
        "rokZapisu": 1893,
        "id": "cybulak"
    },
    {
        "nazwa": "cyc",
        "znaczenie": "tkanina bawełniana, perkal",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Materiał fabryczny, który mógł być biały lub kolorowy.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 10; hasło „cyc”",
        "stronaPdf": 10,
        "rokZapisu": 1893,
        "id": "cyc"
    },
    {
        "nazwa": "cyga",
        "znaczenie": "wirująca zabawka, bąk",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Zabawka dziecięca obracająca się wokół własnej osi.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 10; hasło „cyga”",
        "stronaPdf": 10,
        "rokZapisu": 1893,
        "id": "cyga"
    },
    {
        "nazwa": "cynowacizna",
        "znaczenie": "sposób tkania o ukośnym układzie nici",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Technika, w której splot sprawia wrażenie biegnącego na ukos.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 10; hasło „cynowacizna”",
        "stronaPdf": 10,
        "rokZapisu": 1893,
        "id": "cynowacizna"
    },
    {
        "nazwa": "cyny",
        "znaczenie": "płaskie deseczki w krosnach",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Elementy warsztatu tkackiego umieszczane w przędzy.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 10; hasło „cyny”",
        "stronaPdf": 10,
        "rokZapisu": 1893,
        "id": "cyny"
    },
    {
        "nazwa": "cyzować",
        "znaczenie": "gręplować wełnę",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Przygotowywać włókna przed przędzeniem przy użyciu szczotek.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 10; hasło „cyzować”",
        "stronaPdf": 10,
        "rokZapisu": 1893,
        "id": "cyzowac"
    },
    {
        "nazwa": "cyze",
        "znaczenie": "druciane szczotki do wełny",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Para szczotek używana przy czesaniu włókien.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 10; hasło „cyze”",
        "stronaPdf": 10,
        "rokZapisu": 1893,
        "id": "cyze"
    },
    {
        "nazwa": "dalecyzna",
        "znaczenie": "odległe miejsce",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie przestrzeni znajdującej się daleko.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 10; hasło „dalecyzna”",
        "stronaPdf": 10,
        "rokZapisu": 1893,
        "id": "dalecyzna"
    },
    {
        "nazwa": "deda",
        "znaczenie": "lichy koń",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Niepochlebne określenie słabego konia.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 10; hasło „deda”",
        "stronaPdf": 10,
        "rokZapisu": 1893,
        "id": "deda"
    },
    {
        "nazwa": "denar",
        "znaczenie": "trójnóg pod naczynie do gotowania",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Żelazna podstawa ustawiana pod rondlem lub kociołkiem.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 10; hasło „denar”",
        "stronaPdf": 10,
        "rokZapisu": 1893,
        "id": "denar"
    },
    {
        "nazwa": "dennica",
        "znaczenie": "deska na spodzie wozu",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Element podłogi wozu umieszczany między jego bokami.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 10; hasło „dennica”",
        "stronaPdf": 10,
        "rokZapisu": 1893,
        "id": "dennica"
    },
    {
        "nazwa": "deptak",
        "znaczenie": "młyn napędzany przez chodzące zwierzęta",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Konie lub woły wprawiały w ruch pochylone koło.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 10; hasło „deptak”",
        "stronaPdf": 10,
        "rokZapisu": 1893,
        "id": "deptak"
    },
    {
        "nazwa": "dęcak",
        "znaczenie": "gruby świder ciesielski",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Narzędzie do wykonywania dużych otworów w drewnie.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 11; hasło „dęcak”",
        "stronaPdf": 11,
        "rokZapisu": 1893,
        "id": "decak"
    },
    {
        "nazwa": "dęga",
        "znaczenie": "poprzeczna listwa lub sztaba drzwi",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Element zakładany w bramie albo drzwiach stajennych.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 11; hasło „dęga”",
        "stronaPdf": 11,
        "rokZapisu": 1893,
        "id": "dega"
    },
    {
        "nazwa": "dłuż",
        "znaczenie": "podłużna zatyczka w barci",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Część zamykająca otwór w dawnym ulu.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 11; hasło „dłuż”",
        "stronaPdf": 11,
        "rokZapisu": 1893,
        "id": "dluz"
    },
    {
        "nazwa": "dobrowaty",
        "znaczenie": "dość dobry",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie umiarkowanie dobrej jakości.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 11; hasło „dobrowaty”",
        "stronaPdf": 11,
        "rokZapisu": 1893,
        "id": "dobrowaty"
    },
    {
        "nazwa": "dokiela",
        "znaczenie": "dokąd",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Dawne pytanie o granicę lub kierunek.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 11; hasło „dokiela”",
        "stronaPdf": 11,
        "rokZapisu": 1893,
        "id": "dokiela"
    },
    {
        "nazwa": "dotela",
        "znaczenie": "dotąd",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Słowo wskazujące końcową granicę.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 11; hasło „dotela”",
        "stronaPdf": 11,
        "rokZapisu": 1893,
        "id": "dotela"
    },
    {
        "nazwa": "docynek",
        "znaczenie": "udział w czynności",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie współuczestnictwa w działaniu.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 11; hasło „docynek”",
        "stronaPdf": 11,
        "rokZapisu": 1893,
        "id": "docynek"
    },
    {
        "nazwa": "dojnica",
        "znaczenie": "drewniane naczynie do dojenia",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Skopek używany podczas zbierania mleka.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 11; hasło „dojnica”",
        "stronaPdf": 11,
        "rokZapisu": 1893,
        "id": "dojnica"
    },
    {
        "nazwa": "doświatek",
        "znaczenie": "pierwszy brzask przed wschodem słońca",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa wczesnej pory poranka.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 11; hasło „doświatek”",
        "stronaPdf": 11,
        "rokZapisu": 1893,
        "id": "doswiatek"
    },
    {
        "nazwa": "drałas",
        "znaczenie": "lekkomyślny pędziwiatr",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Obraźliwe określenie osoby działającej bez namysłu.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 11; hasło „drałas”",
        "stronaPdf": 11,
        "rokZapisu": 1893,
        "id": "dralas"
    },
    {
        "nazwa": "drejarz",
        "znaczenie": "tokarz wyrabiający kołowrotki",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Rzemieślnik wykonujący drewniane części do przędzenia.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 11; hasło „drejarz”",
        "stronaPdf": 11,
        "rokZapisu": 1893,
        "id": "drejarz"
    },
    {
        "nazwa": "dróżka",
        "znaczenie": "przynęta do połowu szczupaków",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Metalowa rybka z hakiem ciągnięta na sznurze za łodzią.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 11; hasło „dróżka”",
        "stronaPdf": 11,
        "rokZapisu": 1893,
        "id": "drozka"
    },
    {
        "nazwa": "drychubica",
        "znaczenie": "dwuwarstwowa sieć rybacka",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Ryby zaplątywały się między warstwami o różnej wielkości oczek.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 12; hasło „drychubica”",
        "stronaPdf": 12,
        "rokZapisu": 1893,
        "id": "drychubica"
    },
    {
        "nazwa": "drygawka",
        "znaczenie": "duże wiosło sterowe tratwy",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Służyło do kierowania spławianą tratwą.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 12; hasło „drygawka”",
        "stronaPdf": 12,
        "rokZapisu": 1893,
        "id": "drygawka"
    },
    {
        "nazwa": "ducaj",
        "znaczenie": "otwór w kamieniu żarnowym",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Przez niego wsypywano ziarno do mielenia.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 12; hasło „ducaj”",
        "stronaPdf": 12,
        "rokZapisu": 1893,
        "id": "ducaj"
    },
    {
        "nazwa": "duch",
        "znaczenie": "upał, gorąco",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Znaczenie związane z wysoką temperaturą.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 12; hasło „duch”",
        "stronaPdf": 12,
        "rokZapisu": 1893,
        "id": "duch"
    },
    {
        "nazwa": "duchownica",
        "znaczenie": "otwór pieca i jego zatyczka",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Otwór nad czeluścią pozwalał regulować gorąco; zamykano go kawałkiem cegły.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 12; hasło „duchownica”",
        "stronaPdf": 12,
        "rokZapisu": 1893,
        "id": "duchownica"
    },
    {
        "nazwa": "dudy",
        "znaczenie": "zwierzęce jelita",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Tak nazywano wnętrzności wołu, cielęcia lub barana po uboju.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 12; hasło „dudy”",
        "stronaPdf": 12,
        "rokZapisu": 1893,
        "id": "dudy"
    },
    {
        "nazwa": "dulana",
        "znaczenie": "nieregularny dół w ziemi",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Jama o mniej regularnym kształcie niż zwykły okrągły dół.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 12; hasło „dulana”",
        "stronaPdf": 12,
        "rokZapisu": 1893,
        "id": "dulana"
    },
    {
        "nazwa": "duzać się",
        "znaczenie": "siłować się",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Próbować sił we wzajemnych zapasach.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 12; hasło „duzać się”",
        "stronaPdf": 12,
        "rokZapisu": 1893,
        "id": "duzac-sie"
    },
    {
        "nazwa": "duzować",
        "znaczenie": "być silnym i rześkim",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Czasownik opisujący zachowaną sprawność.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 12; hasło „duzować”",
        "stronaPdf": 12,
        "rokZapisu": 1893,
        "id": "duzowac"
    },
    {
        "nazwa": "dwójki",
        "znaczenie": "połączone gliniane garnki",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Dwa naczynia ze wspólnym uchwytem do noszenia posiłku w pole.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 12; hasło „dwójki”",
        "stronaPdf": 12,
        "rokZapisu": 1893,
        "id": "dwojki"
    },
    {
        "nazwa": "dydek",
        "znaczenie": "moneta o wartości trzech kopiejek",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Historyczna nazwa określonej kwoty pieniędzy.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 12; hasło „dydek”",
        "stronaPdf": 12,
        "rokZapisu": 1893,
        "id": "dydek"
    },
    {
        "nazwa": "konopnisko",
        "znaczenie": "pole po zebranych konopiach",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa pola pozostającego po zbiorze konopi.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 22; hasło „konopnisko”",
        "stronaPdf": 22,
        "rokZapisu": 1893,
        "id": "konopnisko"
    },
    {
        "nazwa": "kopalnocka",
        "znaczenie": "sobótkowy ogień i związana z nim zabawa",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Zwyczaje",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Gloger łączy nazwę z obchodami nocy świętojańskiej.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 22; hasło „kopalnocka”",
        "stronaPdf": 22,
        "rokZapisu": 1893,
        "id": "kopalnocka"
    },
    {
        "nazwa": "kopań",
        "znaczenie": "duża drewniana niecka",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa dużego, podłużnego naczynia; źródło wymienia także mniejszą kopańkę do ciasta.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 22; hasło „kopań”",
        "stronaPdf": 22,
        "rokZapisu": 1893,
        "id": "kopan"
    },
    {
        "nazwa": "kopernac",
        "znaczenie": "drewniane narzędzie do wykopywania warzyw",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Łopata o klinowatym zakończeniu służyła do wydobywania ziemniaków i innych warzyw.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 22; hasło „kopernac”",
        "stronaPdf": 22,
        "rokZapisu": 1893,
        "id": "kopernac"
    },
    {
        "nazwa": "kopersać",
        "znaczenie": "szturchać lub grzebać czymś",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Czynności",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Czasownik opisuje poruszanie i grzebanie za pomocą przedmiotu.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 22; hasło „kopersać”",
        "stronaPdf": 22,
        "rokZapisu": 1893,
        "id": "kopersac"
    },
    {
        "nazwa": "koprowina",
        "znaczenie": "miedź, zwłaszcza drobne miedziane monety",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przedmioty",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwę materiału odnoszono również do wykonanych z niego pieniędzy.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 22; hasło „koprowina”",
        "stronaPdf": 22,
        "rokZapisu": 1893,
        "id": "koprowina"
    },
    {
        "nazwa": "korbańka",
        "znaczenie": "torba z kory do zbierania jagód",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przedmioty",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Tak nazywano lekką torbę sporządzaną z kory.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 22; hasło „korbańka”",
        "stronaPdf": 22,
        "rokZapisu": 1893,
        "id": "korbanka"
    },
    {
        "nazwa": "korcak",
        "znaczenie": "drewniany czerpak do wybierania wody z łodzi",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Przedmiot pomagał usuwać wodę, która dostała się do łodzi.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 22; hasło „korcak”",
        "stronaPdf": 22,
        "rokZapisu": 1893,
        "id": "korcak"
    },
    {
        "nazwa": "korman",
        "znaczenie": "sukmana lub siermięga",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ubiór",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie dawnej długiej odzieży wierzchniej z grubego sukna.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 22; hasło „korman”",
        "stronaPdf": 22,
        "rokZapisu": 1893,
        "id": "korman"
    },
    {
        "nazwa": "korowaj",
        "znaczenie": "obrzędowe ciasto weselne",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Weselny wypiek dzielono między uczestników uroczystości.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 22; hasło „korowaj”",
        "stronaPdf": 22,
        "rokZapisu": 1893,
        "id": "korowaj",
        "warianty": [
            "korował"
        ]
    },
    {
        "nazwa": "kos",
        "znaczenie": "pleciony kosz do łowienia piskorzy",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "W tym znaczeniu nie chodzi o ptaka, lecz o wiklinowe narzędzie rybackie.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 22; hasło „kos”",
        "stronaPdf": 22,
        "rokZapisu": 1893,
        "id": "kos"
    },
    {
        "nazwa": "kosior",
        "znaczenie": "narzędzie do wygarniania żaru z pieca",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Deseczka osadzona na kiju służyła do porządkowania wnętrza pieca.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 22; hasło „kosior”",
        "stronaPdf": 22,
        "rokZapisu": 1893,
        "id": "kosior"
    },
    {
        "nazwa": "koska",
        "znaczenie": "zapleciona porcja wyczesanego lnu",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa wiąże się z ręcznym przygotowywaniem włókien lnianych.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 22; hasło „koska”",
        "stronaPdf": 22,
        "rokZapisu": 1893,
        "id": "koska"
    },
    {
        "nazwa": "kosulka",
        "znaczenie": "biała piana na piwie",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie jasnej warstwy piany na powierzchni piwa.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 22; hasło „kosulka”",
        "stronaPdf": 22,
        "rokZapisu": 1893,
        "id": "kosulka"
    },
    {
        "nazwa": "kotuch",
        "znaczenie": "zagroda dla zwierząt wewnątrz budynku",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Wydzielone miejsce służyło między innymi matkom z młodymi zwierzętami.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 23; hasło „kotuch”",
        "stronaPdf": 23,
        "rokZapisu": 1893,
        "id": "kotuch"
    },
    {
        "nazwa": "kozdroj",
        "znaczenie": "próżniak, człowiek bez pożytku",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Dawne lekceważące określenie osoby uważanej za nieprzydatną i leniwą.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 23; hasło „kozdroj”",
        "stronaPdf": 23,
        "rokZapisu": 1893,
        "id": "kozdroj"
    },
    {
        "nazwa": "kozerek",
        "znaczenie": "daszek czapki",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ubiór",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa wystającej części czapki osłaniającej oczy.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 23; hasło „kozerek”",
        "stronaPdf": 23,
        "rokZapisu": 1893,
        "id": "kozerek"
    },
    {
        "nazwa": "kozica",
        "znaczenie": "pręt lub plecionka służąca za bicz",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przedmioty",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "W tym haśle Gloger opisuje rodzaj bicza, a nie zwierzę górskie.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 23; hasło „kozica”",
        "stronaPdf": 23,
        "rokZapisu": 1893,
        "id": "kozica"
    },
    {
        "nazwa": "kożuchować",
        "znaczenie": "obijać dom deskami",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Tak nazywano pokrywanie drewnianej ściany dodatkową warstwą desek.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 23; hasło „kożuchować”",
        "stronaPdf": 23,
        "rokZapisu": 1893,
        "id": "kozuchowac"
    },
    {
        "nazwa": "koźlina",
        "znaczenie": "skrzyżowane żerdzie przytrzymujące strzechę",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Żerdzie dociskały słomiane pokrycie dachu.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 23; hasło „koźlina”",
        "stronaPdf": 23,
        "rokZapisu": 1893,
        "id": "kozlina"
    },
    {
        "nazwa": "kółko",
        "znaczenie": "kołowrotek",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przedmioty",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Regionalne określenie urządzenia używanego przy przędzeniu.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 23; hasło „kółko”",
        "stronaPdf": 23,
        "rokZapisu": 1893,
        "id": "kolko"
    },
    {
        "nazwa": "krążek",
        "znaczenie": "tłuczek do ubijania śmietany na masło",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa części maselnicy poruszanej podczas robienia masła.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 23; hasło „krążek”",
        "stronaPdf": 23,
        "rokZapisu": 1893,
        "id": "krazek"
    },
    {
        "nazwa": "kreski",
        "znaczenie": "żołądek cielęcia używany przy przygotowywaniu podpuszczki",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Historyczne hasło dotyczy żołądka cielęcia karmionego mlekiem.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 23; hasło „kreski”",
        "stronaPdf": 23,
        "rokZapisu": 1893,
        "id": "kreski"
    },
    {
        "nazwa": "kręg",
        "znaczenie": "drewniany krążek do zabawy",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przedmioty",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Krążek toczono po drodze, wprawiając go w ruch uderzeniami kija.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 23; hasło „kręg”",
        "stronaPdf": 23,
        "rokZapisu": 1893,
        "id": "kreg"
    },
    {
        "nazwa": "kręzołek",
        "znaczenie": "pionowy kołek kołowrotka do przywiązania kądzieli",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przedmioty",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Część urządzenia do przędzenia, przy której umieszczano przygotowane włókno.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 23; hasło „kręzołek”",
        "stronaPdf": 23,
        "rokZapisu": 1893,
        "id": "krezolek"
    },
    {
        "nazwa": "kroć",
        "znaczenie": "sto",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Określenia",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Gloger odnotował regionalne użycie tego słowa jako liczby sto.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 23; hasło „kroć”",
        "stronaPdf": 23,
        "rokZapisu": 1893,
        "id": "kroc"
    },
    {
        "nazwa": "kryjan",
        "znaczenie": "chłopiec w wieku około siedmiu do czternastu lat",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Dawne określenie chłopca, który wyrósł już z najwcześniejszego dzieciństwa.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 23; hasło „kryjan”",
        "stronaPdf": 23,
        "rokZapisu": 1893,
        "id": "kryjan"
    },
    {
        "nazwa": "krypa",
        "znaczenie": "koryto do pojenia bydła wydrążone w pniu",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Naczynie wykonywano z jednego odpowiednio wydrążonego kawałka drewna.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 23; hasło „krypa”",
        "stronaPdf": 23,
        "rokZapisu": 1893,
        "id": "krypa"
    },
    {
        "nazwa": "krupnik",
        "znaczenie": "zupa z kaszy jęczmiennej",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Źródło opisuje potrawę gotowaną z jęczmiennych krup.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 23; hasło „krupnik”",
        "stronaPdf": 23,
        "rokZapisu": 1893,
        "id": "krupnik",
        "dodatkoweZnaczenia": [
            "wódka gotowana z miodem i przyprawami, podawana na gorąco"
        ]
    },
    {
        "nazwa": "kruzyk",
        "znaczenie": "mały garnek lub kubek",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Dawna nazwa niewielkiego naczynia.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 24; hasło „kruzyk”",
        "stronaPdf": 24,
        "rokZapisu": 1893,
        "id": "kruzyk"
    },
    {
        "nazwa": "krzesła",
        "znaczenie": "lędźwie",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ciało",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "W tym regionalnym znaczeniu wyraz odnosi się do części ciała.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 24; hasło „krzesła”",
        "stronaPdf": 24,
        "rokZapisu": 1893,
        "id": "krzesla"
    },
    {
        "nazwa": "księznica",
        "znaczenie": "spadająca gwiazda",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Ludowa nazwa świetlnego zjawiska widocznego na nocnym niebie.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 24; hasło „księznica”",
        "stronaPdf": 24,
        "rokZapisu": 1893,
        "id": "ksieznica"
    },
    {
        "nazwa": "kścieć",
        "znaczenie": "kwitnąć",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Czynności",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Czasownik odnoszący się do pojawiania się kwiatów na roślinie.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 24; hasło „kścieć”",
        "stronaPdf": 24,
        "rokZapisu": 1893,
        "id": "ksciec"
    },
    {
        "nazwa": "kuca",
        "znaczenie": "wnęka pod paleniskiem, zagroda lub kąt",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Źródło łączy kilka znaczeń z wydzielonym lub osłoniętym miejscem.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 24; hasło „kuca”",
        "stronaPdf": 24,
        "rokZapisu": 1893,
        "id": "kuca"
    },
    {
        "nazwa": "kucia",
        "znaczenie": "wigilijna potrawa z ziaren, maku i miodu",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Potrawę przygotowywano z jęczmienia lub pszenicy z dodatkiem maku i miodu.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 24; hasło „kucia”",
        "stronaPdf": 24,
        "rokZapisu": 1893,
        "id": "kucia"
    },
    {
        "nazwa": "kuciament",
        "znaczenie": "ciemna komórka pod schodami",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa niewielkiej, słabo oświetlonej przestrzeni gospodarczej.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 24; hasło „kuciament”",
        "stronaPdf": 24,
        "rokZapisu": 1893,
        "id": "kuciament"
    },
    {
        "nazwa": "kucyć",
        "znaczenie": "naprzykrzać się komuś",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Czynności",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Tak opisywano uporczywe zawracanie komuś głowy.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 24; hasło „kucyć”",
        "stronaPdf": 24,
        "rokZapisu": 1893,
        "id": "kucyc"
    },
    {
        "nazwa": "kujawa",
        "znaczenie": "jałowe pole lub bezdrzewna przestrzeń",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Słowo oznaczało między innymi otwarty kawałek gruntu pośród zadrzewień.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 24; hasło „kujawa”",
        "stronaPdf": 24,
        "rokZapisu": 1893,
        "id": "kujawa"
    },
    {
        "nazwa": "kuka",
        "znaczenie": "skaleczenie w mowie do małego dziecka",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ciało",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Dziecięce określenie drobnej rany lub urazu.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 24; hasło „kuka”",
        "stronaPdf": 24,
        "rokZapisu": 1893,
        "id": "kuka"
    },
    {
        "nazwa": "kukrzysko",
        "znaczenie": "rodzinne gniazdo, dom przodków",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa miejsca od dawna związanego z jedną rodziną.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 24; hasło „kukrzysko”",
        "stronaPdf": 24,
        "rokZapisu": 1893,
        "id": "kukrzysko"
    },
    {
        "nazwa": "kul",
        "znaczenie": "duży snop słomy",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie sporej wiązki zebranej słomy.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 24; hasło „kul”",
        "stronaPdf": 24,
        "rokZapisu": 1893,
        "id": "kul"
    },
    {
        "nazwa": "kulać",
        "znaczenie": "toczyć coś okrągłego po ziemi",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Czynności",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "W przytoczonym znaczeniu chodzi o wprawianie przedmiotu w ruch obrotowy.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 24; hasło „kulać”",
        "stronaPdf": 24,
        "rokZapisu": 1893,
        "id": "kulac"
    },
    {
        "nazwa": "kumlak",
        "znaczenie": "splątany kłąb włókien, słomy lub nici",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przedmioty",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Tak nazywano bezładną plątaninę podłużnego materiału.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 24; hasło „kumlak”",
        "stronaPdf": 24,
        "rokZapisu": 1893,
        "id": "kumlak"
    },
    {
        "nazwa": "kumlacyć",
        "znaczenie": "plątać",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Czynności",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Czasownik opisuje wikłanie i splątywanie włókien lub nici.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 24; hasło „kumlacyć”",
        "stronaPdf": 24,
        "rokZapisu": 1893,
        "id": "kumlacyc",
        "warianty": [
            "kumłacyć"
        ]
    },
    {
        "nazwa": "kuna",
        "znaczenie": "półokrągła żelazna lub drewniana obejma, w której obracają się wrota",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Dwie obejmy przy słupie podtrzymywały ruchome skrzydło wrót.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 25; hasło „kuna”",
        "stronaPdf": 25,
        "rokZapisu": 1893,
        "id": "kuna"
    },
    {
        "nazwa": "kupcy",
        "znaczenie": "kupiony, pochodzący z zakupu",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Określenia",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "W tym haśle jest to przymiotnik określający rzecz nabytą za pieniądze.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 25; hasło „kupcy”",
        "stronaPdf": 25,
        "rokZapisu": 1893,
        "id": "kupcy"
    },
    {
        "nazwa": "kurcaba",
        "znaczenie": "blaszana osłona osi wozu przed błotem",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przedmioty",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Osłona ograniczała dostawanie się błota do elementów wozu.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 25; hasło „kurcaba”",
        "stronaPdf": 25,
        "rokZapisu": 1893,
        "id": "kurcaba"
    },
    {
        "nazwa": "kurchan",
        "znaczenie": "sztucznie usypany pagórek",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Źródło odnosi nazwę do ziemnego nasypu, nie tylko do mogiły.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 25; hasło „kurchan”",
        "stronaPdf": 25,
        "rokZapisu": 1893,
        "id": "kurchan"
    },
    {
        "nazwa": "kuroślep",
        "znaczenie": "słabe widzenie po zmierzchu",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ciało",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Dawna nazwa pogorszenia widzenia po zapadnięciu ciemności.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 25; hasło „kuroślep”",
        "stronaPdf": 25,
        "rokZapisu": 1893,
        "id": "kuroslep"
    },
    {
        "nazwa": "kurta",
        "znaczenie": "zając w języku myśliwych",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Gloger podaje tę nazwę w kontekście słownictwa łowieckiego.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 25; hasło „kurta”",
        "stronaPdf": 25,
        "rokZapisu": 1893,
        "id": "kurta"
    },
    {
        "nazwa": "kurzy owoc",
        "znaczenie": "żartobliwe określenie jaj",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Dowcipna nazwa jaj jako tego, co otrzymuje się od kur.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 25; hasło „kurzy owoc”",
        "stronaPdf": 25,
        "rokZapisu": 1893,
        "id": "kurzy-owoc"
    },
    {
        "nazwa": "kuzaka",
        "znaczenie": "skorek lub podobny ciemny owad",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Źródło przytacza ludową nazwę owadów, obejmującą skorka.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 25; hasło „kuzaka”",
        "stronaPdf": 25,
        "rokZapisu": 1893,
        "id": "kuzaka"
    },
    {
        "nazwa": "kwaśnina",
        "znaczenie": "zakwaszona kapusta lub buraki",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie żywności poddanej kwaśnieniu.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 25; hasło „kwaśnina”",
        "stronaPdf": 25,
        "rokZapisu": 1893,
        "id": "kwasnina"
    },
    {
        "nazwa": "kwitnąć",
        "znaczenie": "pokrywać się pleśnią",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Czynności",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Regionalne znaczenie dotyczy pojawiania się nalotu pleśni.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 25; hasło „kwitnąć”",
        "stronaPdf": 25,
        "rokZapisu": 1893,
        "id": "kwitnac"
    },
    {
        "nazwa": "lada",
        "znaczenie": "ręczna sieczkarnia",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa urządzenia do cięcia słomy na sieczkę.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 25; hasło „lada”",
        "stronaPdf": 25,
        "rokZapisu": 1893,
        "id": "lada",
        "dodatkoweZnaczenia": [
            "przyrząd do podnoszenia dużych ciężarów"
        ]
    },
    {
        "nazwa": "lak",
        "znaczenie": "zalewa ze śledzi przechowywanych w beczce",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Chodzi o słoną ciecz otaczającą zakonserwowane ryby.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 25; hasło „lak”",
        "stronaPdf": 25,
        "rokZapisu": 1893,
        "id": "lak"
    },
    {
        "nazwa": "lalka",
        "znaczenie": "źrenica oka",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ciało",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "W tym użyciu słowo nazywa część oka, a nie zabawkę.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 25; hasło „lalka”",
        "stronaPdf": 25,
        "rokZapisu": 1893,
        "id": "lalka"
    },
    {
        "nazwa": "latawiec",
        "znaczenie": "spadająca gwiazda lub błędny ognik",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Historyczne określenie świetlnych zjawisk obserwowanych przez ludzi.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 25; hasło „latawiec”",
        "stronaPdf": 25,
        "rokZapisu": 1893,
        "id": "latawiec"
    },
    {
        "nazwa": "latosiak",
        "znaczenie": "zwierzę urodzone w bieżącym roku",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa wiąże się ze słowem latoś, czyli w tym roku.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 25; hasło „latosiak”",
        "stronaPdf": 25,
        "rokZapisu": 1893,
        "id": "latosiak"
    },
    {
        "nazwa": "latować",
        "znaczenie": "spędzać lato na pastwisku",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Czynności",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie letniego pobytu zwierząt na wypasie.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 25; hasło „latować”",
        "stronaPdf": 25,
        "rokZapisu": 1893,
        "id": "latowac"
    },
    {
        "nazwa": "latownik",
        "znaczenie": "okres letniego wypasu",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa sezonu, w którym zwierzęta korzystają z pastwisk.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 25; hasło „latownik”",
        "stronaPdf": 25,
        "rokZapisu": 1893,
        "id": "latownik"
    },
    {
        "nazwa": "lemiecha",
        "znaczenie": "prażucha z mąki",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Źródło podaje także nazwę lemieska dla tej mącznej potrawy.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 25; hasło „lemiecha”",
        "stronaPdf": 25,
        "rokZapisu": 1893,
        "id": "lemiecha",
        "warianty": [
            "lemieska"
        ]
    },
    {
        "nazwa": "lento",
        "znaczenie": "powoli, leniwie",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Określenia",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Wyraz określający niespieszny sposób wykonywania czynności.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 25; hasło „lento”",
        "stronaPdf": 25,
        "rokZapisu": 1893,
        "id": "lento"
    },
    {
        "nazwa": "leń",
        "znaczenie": "zamarzająca woda zmieszana z padającym śniegiem",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "W tym historycznym haśle jest to nazwa zjawiska na wodzie.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 25; hasło „leń”",
        "stronaPdf": 25,
        "rokZapisu": 1893,
        "id": "len"
    },
    {
        "nazwa": "lescotki",
        "znaczenie": "dwie drewniane łubki do unieruchamiania złamanej kończyny",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przedmioty",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Źródło opisuje dawny przedmiot używany przy opatrywaniu złamań.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „lescotki”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "lescotki"
    },
    {
        "nazwa": "leśnianka",
        "znaczenie": "dzika gruszka leśna",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie gruszy rosnącej dziko w lesie.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „leśnianka”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "lesnianka"
    },
    {
        "nazwa": "letry",
        "znaczenie": "drabiny wozu z płaskimi szczeblami",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przedmioty",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Tak nazywano boczne drabiny służące do podtrzymywania ładunku.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „letry”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "letry"
    },
    {
        "nazwa": "lewentarz",
        "znaczenie": "inwentarz, dobytek gospodarski",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Historyczna postać wyrazu odnoszącego się do majątku gospodarstwa.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „lewentarz”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "lewentarz"
    },
    {
        "nazwa": "leziwo",
        "znaczenie": "przyrząd bartnika do wspinania się na drzewo",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Pomagał docierać do barci umieszczonych wysoko w pniach sosen.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „leziwo”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "leziwo"
    },
    {
        "nazwa": "leźny",
        "znaczenie": "pracowity, pilny",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Określenia",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Pozytywne określenie kogoś, kto chętnie i starannie pracuje.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „leźny”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "lezny"
    },
    {
        "nazwa": "lędziaj",
        "znaczenie": "dziki czarny groch rosnący w zbożu",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Gloger przytacza nazwę rośliny spotykanej pośród upraw.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „lędziaj”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "ledziaj"
    },
    {
        "nazwa": "ligawka",
        "znaczenie": "długi róg używany do grania w adwencie",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Zwyczaje",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Instrument rozbrzmiewał na otwartej przestrzeni w okresie adwentu.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „ligawka”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "ligawka"
    },
    {
        "nazwa": "lipnik",
        "znaczenie": "lasek lipowy",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie niewielkiego lasu, w którym rosną lipy.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „lipnik”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "lipnik"
    },
    {
        "nazwa": "liśni",
        "znaczenie": "zbyteczny, nadliczbowy",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Określenia",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Tak określano coś, co pozostaje ponad potrzebną ilość.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „liśni”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "lisni"
    },
    {
        "nazwa": "lita",
        "znaczenie": "miód oczyszczony z wosku",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa miodu po oddzieleniu go od woskowych części plastra.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „lita”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "lita"
    },
    {
        "nazwa": "litwa",
        "znaczenie": "stado lecących kawek",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "W tym regionalnym znaczeniu słowo opisuje gromadę ptaków w locie.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „litwa”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "litwa"
    },
    {
        "nazwa": "lnianka",
        "znaczenie": "grubsze włókna wyczesane z lnu",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Produkt ręcznego przygotowywania lnu do dalszego wykorzystania.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „lnianka”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "lnianka"
    },
    {
        "nazwa": "lnina",
        "znaczenie": "płótno wyłącznie lniane",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ubiór",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie tkaniny wykonanej z włókien lnu.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „lnina”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "lnina"
    },
    {
        "nazwa": "lochun",
        "znaczenie": "mały biegający urwis",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Dawne określenie ruchliwego, niesfornego dziecka.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „lochun”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "lochun"
    },
    {
        "nazwa": "lubaska",
        "znaczenie": "odmiana drobnej śliwki",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa niewielkiej śliwki odnotowana w lokalnym słownictwie.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „lubaska”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "lubaska"
    },
    {
        "nazwa": "lubryka",
        "znaczenie": "czerwony kamień do pisania na drewnie",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przedmioty",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Służył do pozostawiania wyraźnych znaków na drewnianej powierzchni.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „lubryka”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "lubryka"
    },
    {
        "nazwa": "luśnia",
        "znaczenie": "wspornik drabiny wozu",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przedmioty",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Element wozu podtrzymujący jego boczną drabinę.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „luśnia”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "lusnia"
    },
    {
        "nazwa": "luśtyk",
        "znaczenie": "uczta, wesoła biesiada",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Zwyczaje",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie wspólnego ucztowania i zabawy.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „luśtyk”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "lustyk"
    },
    {
        "nazwa": "ładycha",
        "znaczenie": "garnek do mleka bez ucha",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa naczynia pozbawionego bocznego uchwytu.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „ładycha”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "ladycha",
        "warianty": [
            "ładyska"
        ]
    },
    {
        "nazwa": "łagięzić",
        "znaczenie": "schlebiać",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Czynności",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Czasownik odnoszący się do pochlebstw kierowanych do kogoś.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „łagięzić”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "lagiezic"
    },
    {
        "nazwa": "łajka",
        "znaczenie": "zamsz",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ubiór",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Historyczna nazwa rodzaju miękkiej skóry.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „łajka”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "lajka"
    },
    {
        "nazwa": "łajkować",
        "znaczenie": "zszywać kawałki futra",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie czynności wykonywanej przy pracy kuśnierskiej.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „łajkować”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "lajkowac"
    },
    {
        "nazwa": "łamańce",
        "znaczenie": "suche ciasteczka podawane z makiem w wigilię",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa wypieku związanego z posiłkiem wigilijnym.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „łamańce”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "lamance"
    },
    {
        "nazwa": "łapcie",
        "znaczenie": "obuwie plecione z łyka",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ubiór",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Dawne lekkie buty wykonywane z materiału roślinnego.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „łapcie”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "lapcie"
    },
    {
        "nazwa": "łągiew",
        "znaczenie": "żelazne połączenie orczycy z końcem osi wozu",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przedmioty",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Okucie łączyło sztelwagę, czyli orczycę, z osią wozu lub bryki.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „łągiew”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "lagiew"
    },
    {
        "nazwa": "łez",
        "znaczenie": "kłamstwo",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Określenia",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Dawne regionalne określenie nieprawdziwej wypowiedzi.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 26; hasło „łez”",
        "stronaPdf": 26,
        "rokZapisu": 1893,
        "id": "lez"
    },
    {
        "nazwa": "łoksiny",
        "znaczenie": "ciasto pokrojone w paski podobne do makaronu",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa potrawy przygotowywanej z cienkich pasków ciasta.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 27; hasło „łoksiny”",
        "stronaPdf": 27,
        "rokZapisu": 1893,
        "id": "loksiny"
    },
    {
        "nazwa": "łomianka",
        "znaczenie": "powtórna orka prowadzona w poprzek",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Tak określano drugi przejazd pługiem w kierunku przecinającym wcześniejsze bruzdy.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 27; hasło „łomianka”",
        "stronaPdf": 27,
        "rokZapisu": 1893,
        "id": "lomianka"
    },
    {
        "nazwa": "łomić",
        "znaczenie": "orać w poprzek wcześniejszych bruzd",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Czasownik opisujący sposób ponownej uprawy pola.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 27; hasło „łomić”",
        "stronaPdf": 27,
        "rokZapisu": 1893,
        "id": "lomic"
    },
    {
        "nazwa": "łub",
        "znaczenie": "kora lipowa używana do wyrobu pudeł",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przedmioty",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Materiał roślinny wykorzystywany do wykonywania pojemników.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 27; hasło „łub”",
        "stronaPdf": 27,
        "rokZapisu": 1893,
        "id": "lub"
    },
    {
        "nazwa": "łubek",
        "znaczenie": "dudek",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Regionalna nazwa ptaka wyróżniającego się charakterystycznym czubkiem.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 27; hasło „łubek”",
        "stronaPdf": 27,
        "rokZapisu": 1893,
        "id": "lubek"
    },
    {
        "nazwa": "łuscak",
        "znaczenie": "dojrzały orzech laskowy łatwo wypadający z okrywy",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Nazwa odnosi się do stopnia dojrzałości orzecha.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 27; hasło „łuscak”",
        "stronaPdf": 27,
        "rokZapisu": 1893,
        "id": "luscak"
    },
    {
        "nazwa": "łych",
        "znaczenie": "łysina",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ciało",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Określenie miejsca na głowie pozbawionego włosów.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 27; hasło „łych”",
        "stronaPdf": 27,
        "rokZapisu": 1893,
        "id": "lych"
    },
    {
        "nazwa": "łychun",
        "znaczenie": "łysy mężczyzna",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Dawna nazwa mężczyzny mającego łysinę.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 27; hasło „łychun”",
        "stronaPdf": 27,
        "rokZapisu": 1893,
        "id": "lychun"
    },
    {
        "nazwa": "łypa",
        "znaczenie": "wystająca warga",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ciało",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Regionalne określenie charakterystycznie wysuniętej wargi.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 27; hasło „łypa”",
        "stronaPdf": 27,
        "rokZapisu": 1893,
        "id": "lypa"
    },
    {
        "nazwa": "łyta",
        "znaczenie": "łydka, dolna część nogi",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ciało",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Wyraz odnoszący się do części nogi poniżej kolana.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 27; hasło „łyta”",
        "stronaPdf": 27,
        "rokZapisu": 1893,
        "id": "lyta"
    },
    {
        "nazwa": "łyżnik",
        "znaczenie": "listwa z nacięciami do przechowywania łyżek",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Prosty uchwyt pozwalał zawieszać łyżki w jednym miejscu.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 27; hasło „łyżnik”",
        "stronaPdf": 27,
        "rokZapisu": 1893,
        "id": "lyznik"
    },
    {
        "nazwa": "łyżwa",
        "znaczenie": "łódź do przewozu zboża po Narwi",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "W tym haśle nazwa dotyczy jednostki rzecznej używanej do transportu.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 27; hasło „łyżwa”",
        "stronaPdf": 27,
        "rokZapisu": 1893,
        "id": "lyzwa"
    },
    {
        "nazwa": "madrak",
        "znaczenie": "maruda, człowiek działający opieszale",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Dawne określenie osoby, która długo zwleka z wykonaniem pracy.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 27; hasło „madrak”",
        "stronaPdf": 27,
        "rokZapisu": 1893,
        "id": "madrak"
    },
    {
        "nazwa": "majdan",
        "znaczenie": "piec do wypalania smoły lub terpentyny",
        "regiony": [
            "Podlasie"
        ],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara okolic Tykocina (zapis historyczny)",
        "opis": "Źródło wiąże to znaczenie z leśnym przetwórstwem drewna.",
        "zrodla": [
            "gloger"
        ],
        "lokalizator": "PDF, strona 27; hasło „majdan”",
        "stronaPdf": 27,
        "rokZapisu": 1893,
        "id": "majdan"
    },
    {
        "id": "skop",
        "nazwa": "skop",
        "znaczenie": "baran",
        "regiony": ["Wielkopolska"],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Regionalna nazwa samca owcy.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „skop”"
    },
    {
        "id": "grygolic",
        "nazwa": "grygolić",
        "znaczenie": "bazgrać",
        "regiony": ["Wielkopolska"],
        "kategoria": "Czynności",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Niedbałe lub mało czytelne pisanie.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „grygolić”"
    },
    {
        "id": "brachol",
        "nazwa": "brachol",
        "znaczenie": "brat",
        "regiony": ["Wielkopolska"],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Potoczna nazwa brata.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „brachol”"
    },
    {
        "id": "zybura",
        "nazwa": "żybura",
        "znaczenie": "brudna ciecz",
        "regiony": ["Wielkopolska"],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Nieczysta lub mętna ciecz.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „żybura”"
    },
    {
        "id": "szczun",
        "nazwa": "szczun",
        "znaczenie": "chłopak",
        "regiony": ["Wielkopolska"],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Regionalne określenie chłopca lub młodego mężczyzny.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „szczun/szczón”"
    },
    {
        "id": "srupac",
        "nazwa": "śrupać",
        "znaczenie": "chrupać, głośno gryźć",
        "regiony": ["Wielkopolska"],
        "kategoria": "Czynności",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Jeść coś chrupiącego z wyraźnym odgłosem.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „śrupać”"
    },
    {
        "id": "chapac",
        "nazwa": "chapać",
        "znaczenie": "ciężko pracować",
        "regiony": ["Wielkopolska"],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Potoczne określenie ciężkiej pracy.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „chapać”"
    },
    {
        "id": "repeta",
        "nazwa": "repeta",
        "znaczenie": "dokładka lub gęsta zupa",
        "regiony": ["Wielkopolska"],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Nazwa dodatkowej porcji albo pożywnej, gęstej zupy.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „repeta”"
    },
    {
        "id": "wajcha",
        "nazwa": "wajcha",
        "znaczenie": "drążek do zmiany zwrotnicy lub biegów",
        "regiony": ["Wielkopolska"],
        "kategoria": "Przedmioty",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Dźwignia używana przy zwrotnicy kolejowej lub w samochodzie.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „wajcha”"
    },
    {
        "id": "maluda",
        "nazwa": "maluda",
        "znaczenie": "dziecko, malec",
        "regiony": ["Wielkopolska"],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Potoczne określenie małego dziecka.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „maluda”"
    },
    {
        "id": "mela",
        "nazwa": "mela",
        "znaczenie": "dziewczyna",
        "regiony": ["Wielkopolska"],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Regionalne, potoczne określenie dziewczyny.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „mela”"
    },
    {
        "id": "gibac",
        "nazwa": "gibać",
        "znaczenie": "dźwigać lub biec po coś",
        "regiony": ["Wielkopolska"],
        "kategoria": "Czynności",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "W zależności od użycia oznacza podnoszenie czegoś lub szybkie pójście po rzecz.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „gibać/gibnąć”"
    },
    {
        "id": "golarz",
        "nazwa": "golarz",
        "znaczenie": "fryzjer",
        "regiony": ["Wielkopolska"],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Nazwa osoby zajmującej się strzyżeniem i goleniem.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „golarz”"
    },
    {
        "id": "ancug",
        "nazwa": "ancug",
        "znaczenie": "garnitur",
        "regiony": ["Wielkopolska"],
        "kategoria": "Ubiór",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Nazwa męskiego kompletu ubrania.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „ancug”"
    },
    {
        "id": "rumpuc",
        "nazwa": "rumpuć",
        "znaczenie": "gęsta zupa jarzynowa",
        "regiony": ["Wielkopolska"],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Syta potrawa jednogarnkowa z warzyw.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „rumpuć”"
    },
    {
        "id": "blubrac",
        "nazwa": "blubrać",
        "znaczenie": "ględzić, dużo mówić",
        "regiony": ["Wielkopolska"],
        "kategoria": "Czynności",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Prowadzić długą, często nieistotną rozmowę.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „blubrać”"
    },
    {
        "id": "nosplat",
        "nazwa": "nośpłat",
        "znaczenie": "handlarz starzyzną",
        "regiony": ["Wielkopolska"],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Osoba handlująca używanymi rzeczami.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „nośpłat”"
    },
    {
        "id": "hulajpeta",
        "nazwa": "hulajpeta",
        "znaczenie": "hulajnoga",
        "regiony": ["Wielkopolska"],
        "kategoria": "Przedmioty",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Pojazd napędzany odpychaniem się nogą.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „hulajpeta”"
    },
    {
        "id": "gnyk",
        "nazwa": "gnyk",
        "znaczenie": "kark",
        "regiony": ["Wielkopolska"],
        "kategoria": "Ciało",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Potoczna nazwa tylnej części szyi.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „gnyk”"
    },
    {
        "id": "churchlac",
        "nazwa": "churchlać",
        "znaczenie": "kaszleć",
        "regiony": ["Wielkopolska"],
        "kategoria": "Czynności",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Potoczne określenie kaszlu.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „churchlać/churchać”"
    },
    {
        "id": "zgak",
        "nazwa": "żgak",
        "znaczenie": "kolec, zadra",
        "regiony": ["Wielkopolska"],
        "kategoria": "Przedmioty",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Ostry, wystający fragment, o który można się skaleczyć.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „żgak/żgok”"
    },
    {
        "id": "kierz",
        "nazwa": "kierz",
        "znaczenie": "krzak",
        "regiony": ["Wielkopolska"],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Regionalna nazwa krzewu; w liczbie mnogiej także zarośli.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „kierz/kierzki”"
    },
    {
        "id": "funcka",
        "nazwa": "funcka",
        "znaczenie": "lampa naftowa",
        "regiony": ["Wielkopolska"],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Lampa zasilana naftą.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „funcka”"
    },
    {
        "id": "drachyta",
        "nazwa": "drachyta",
        "znaczenie": "latawiec",
        "regiony": ["Wielkopolska"],
        "kategoria": "Przedmioty",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Zabawka unoszona przez wiatr na sznurku.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „drachyta”"
    },
    {
        "id": "giglac",
        "nazwa": "giglać",
        "znaczenie": "łaskotać",
        "regiony": ["Wielkopolska"],
        "kategoria": "Czynności",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Dotykać kogoś tak, by wywołać śmiech i łaskotanie.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „giglać”"
    },
    {
        "id": "brecha",
        "nazwa": "brecha",
        "znaczenie": "łom",
        "regiony": ["Wielkopolska"],
        "kategoria": "Przedmioty",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Metalowy drążek służący do podważania.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „brecha”"
    },
    {
        "id": "makocz",
        "nazwa": "makocz",
        "znaczenie": "makowiec",
        "regiony": ["Wielkopolska"],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Ciasto z nadzieniem makowym.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „makocz”"
    },
    {
        "id": "fafoly",
        "nazwa": "fafoły",
        "znaczenie": "męty, cząstki stałe w cieczy",
        "regiony": ["Wielkopolska"],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Drobne osady lub kawałki unoszące się w płynie.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „fafoły”"
    },
    {
        "id": "gichnac",
        "nazwa": "gichnąć",
        "znaczenie": "nalać z impetem",
        "regiony": ["Wielkopolska"],
        "kategoria": "Czynności",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Wlać płyn szybko i z rozmachem.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „gichnąć”"
    },
    {
        "id": "winkiel",
        "nazwa": "winkiel",
        "znaczenie": "narożnik, róg domu",
        "regiony": ["Wielkopolska"],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Miejsce, w którym spotykają się dwie ściany budynku.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „winkiel”"
    },
    {
        "id": "rojber",
        "nazwa": "rojber",
        "znaczenie": "nicpoń, łobuziak",
        "regiony": ["Wielkopolska"],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Żartobliwe określenie osoby rozrabiającej.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „rojber”"
    },
    {
        "id": "kipa",
        "nazwa": "kipa",
        "znaczenie": "niedopałek papierosa",
        "regiony": ["Wielkopolska"],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Pozostałość papierosa po wypaleniu.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „kipa”"
    },
    {
        "id": "laczki",
        "nazwa": "laczki",
        "znaczenie": "obuwie domowe",
        "regiony": ["Wielkopolska"],
        "kategoria": "Ubiór",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Lekkie buty noszone w domu.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „laczki”"
    },
    {
        "id": "bryle",
        "nazwa": "bryle",
        "znaczenie": "okulary",
        "regiony": ["Wielkopolska"],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Potoczna nazwa okularów.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „bryle”"
    },
    {
        "id": "szparowac",
        "nazwa": "szparować",
        "znaczenie": "oszczędzać",
        "regiony": ["Wielkopolska"],
        "kategoria": "Czynności",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Gospodarnie obchodzić się z pieniędzmi lub zapasami.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „szparować”"
    },
    {
        "id": "szuchrowac",
        "nazwa": "szuchrować",
        "znaczenie": "oszukiwać",
        "regiony": ["Wielkopolska"],
        "kategoria": "Czynności",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Postępować nieuczciwie wobec kogoś.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „szuchrować”"
    },
    {
        "id": "cmik",
        "nazwa": "ćmik",
        "znaczenie": "papieros",
        "regiony": ["Wielkopolska"],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Potoczna nazwa papierosa.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „ćmik”"
    },
    {
        "id": "szwung",
        "nazwa": "szwung",
        "znaczenie": "pęd, impet",
        "regiony": ["Wielkopolska"],
        "kategoria": "Określenia",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Rozmach lub energia, z jaką coś się dzieje.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „szwung”"
    },
    {
        "id": "fogelka",
        "nazwa": "fogelka",
        "znaczenie": "plac zabaw",
        "regiony": ["Wielkopolska"],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Miejsce przeznaczone do zabawy dzieci.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „fogelka”"
    },
    {
        "id": "klejdry",
        "nazwa": "klejdry",
        "znaczenie": "plotki",
        "regiony": ["Wielkopolska"],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Niepotwierdzone lub powtarzane informacje o innych osobach.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „klejdry”"
    },
    {
        "id": "chlabra",
        "nazwa": "chlabra",
        "znaczenie": "plucha, błoto",
        "regiony": ["Wielkopolska"],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Nieprzyjemna, mokra pogoda albo błotnista maź.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „chlabra”"
    },
    {
        "id": "klapsztula",
        "nazwa": "klapsztula",
        "znaczenie": "podwójna kromka chleba",
        "regiony": ["Wielkopolska"],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Dwie kromki złożone razem, zwykle z dodatkiem w środku.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „klapsztula”"
    },
    {
        "id": "majsel",
        "nazwa": "majsel",
        "znaczenie": "przecinak",
        "regiony": ["Wielkopolska"],
        "kategoria": "Przedmioty",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Narzędzie do przecinania lub obróbki materiału.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „majsel”"
    },
    {
        "id": "narychtowac",
        "nazwa": "narychtować",
        "znaczenie": "przygotować, naprawić",
        "regiony": ["Wielkopolska"],
        "kategoria": "Czynności",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Doprowadzić coś do porządku lub przygotować do użycia.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „narychtować”"
    },
    {
        "id": "dynks",
        "nazwa": "dynks",
        "znaczenie": "rzecz, której nazwy się nie zna",
        "regiony": ["Wielkopolska"],
        "kategoria": "Przedmioty",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Potoczna nazwa przedmiotu, którego nazwy ktoś nie pamięta lub nie zna.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „dynks”"
    },
    {
        "id": "redyska",
        "nazwa": "redyska",
        "znaczenie": "rzodkiewka",
        "regiony": ["Wielkopolska"],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Regionalna nazwa warzywa korzeniowego.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „redyska”"
    },
    {
        "id": "gajgi",
        "nazwa": "gajgi",
        "znaczenie": "skrzypce",
        "regiony": ["Wielkopolska"],
        "kategoria": "Przedmioty",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Ludowa nazwa instrumentu smyczkowego.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „gajgi”"
    },
    {
        "id": "klara",
        "nazwa": "klara",
        "znaczenie": "słońce",
        "regiony": ["Wielkopolska"],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Potoczna, żartobliwa nazwa słońca.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „klara”"
    },
    {
        "id": "weko",
        "nazwa": "weko",
        "znaczenie": "słój do zapraw",
        "regiony": ["Wielkopolska"],
        "kategoria": "Dom",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Szklane naczynie używane do przechowywania domowych przetworów.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „weko”"
    },
    {
        "id": "sznytloch",
        "nazwa": "sznytloch",
        "znaczenie": "szczypiorek",
        "regiony": ["Wielkopolska"],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Nazwa zielonej rośliny dodawanej do potraw.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „sznytloch”"
    },
    {
        "id": "srubociag",
        "nazwa": "śrubociąg",
        "znaczenie": "śrubokręt",
        "regiony": ["Wielkopolska"],
        "kategoria": "Przedmioty",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Narzędzie używane do wkręcania i wykręcania śrub.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „śrubociąg”"
    },
    {
        "id": "drynda",
        "nazwa": "drynda",
        "znaczenie": "taksówka",
        "regiony": ["Wielkopolska"],
        "kategoria": "Przedmioty",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Potoczna nazwa samochodu przewożącego pasażerów za opłatą.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „drynda”"
    },
    {
        "id": "klemki",
        "nazwa": "klemki",
        "znaczenie": "twarde cukierki",
        "regiony": ["Wielkopolska"],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Nazwa drobnych, twardych słodyczy.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „klemki/klymki”"
    },
    {
        "id": "kalafa",
        "nazwa": "kalafa",
        "znaczenie": "twarz",
        "regiony": ["Wielkopolska"],
        "kategoria": "Ciało",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Potoczna nazwa twarzy.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „kalafa”"
    },
    {
        "id": "sznupa",
        "nazwa": "sznupa",
        "znaczenie": "twarz",
        "regiony": ["Wielkopolska"],
        "kategoria": "Ciało",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Potoczna, żartobliwa nazwa twarzy.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „sznupa”"
    },
    {
        "id": "uhajtnac",
        "nazwa": "uhajtnąć",
        "znaczenie": "uciąć się lub skaleczyć nożem",
        "regiony": ["Wielkopolska"],
        "kategoria": "Czynności",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Przypadkowo przeciąć sobie skórę ostrzem.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „uhajtnąć”"
    },
    {
        "id": "fyrac",
        "nazwa": "fyrać",
        "znaczenie": "uciekać",
        "regiony": ["Wielkopolska"],
        "kategoria": "Czynności",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Szybko oddalać się z miejsca.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „fyrać/fyrnąć”"
    },
    {
        "id": "sztyft",
        "nazwa": "sztyft",
        "znaczenie": "uczeń rzemieślniczy, pomocnik",
        "regiony": ["Wielkopolska"],
        "kategoria": "Praca",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Osoba ucząca się zawodu i pomagająca rzemieślnikowi.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „sztyft”"
    },
    {
        "id": "blalka",
        "nazwa": "blałka",
        "znaczenie": "wagary",
        "regiony": ["Wielkopolska"],
        "kategoria": "Codzienne życie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Nieobecność ucznia na lekcjach bez usprawiedliwienia.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „blałka”"
    },
    {
        "id": "szpeniol",
        "nazwa": "szpeniol",
        "znaczenie": "ważniak, zarozumialec",
        "regiony": ["Wielkopolska"],
        "kategoria": "Określenia",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Osoba przekonana o własnej ważności lub wiedzy.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „szpeniol”"
    },
    {
        "id": "leberka",
        "nazwa": "leberka",
        "znaczenie": "wątrobianka",
        "regiony": ["Wielkopolska"],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Wędlina przygotowywana z wątroby.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „leberka”"
    },
    {
        "id": "wuchta",
        "nazwa": "wuchta",
        "znaczenie": "wielka ilość",
        "regiony": ["Wielkopolska"],
        "kategoria": "Określenia",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Duża liczba lub obfitość czegoś.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „wuchta”"
    },
    {
        "id": "lofrowac",
        "nazwa": "lofrować",
        "znaczenie": "włóczyć się bez celu",
        "regiony": ["Wielkopolska"],
        "kategoria": "Czynności",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Chodzić z miejsca na miejsce bez określonego celu.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „lofrować”"
    },
    {
        "id": "wycpic",
        "nazwa": "wyćpić",
        "znaczenie": "wyrzucić",
        "regiony": ["Wielkopolska"],
        "kategoria": "Czynności",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Pozbyć się czegoś, wyrzucając to.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „wyćpić”"
    },
    {
        "id": "zaklepka",
        "nazwa": "zaklepka",
        "znaczenie": "zawiesina z mąki do zagęszczania potraw",
        "regiony": ["Wielkopolska"],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Mąka rozmieszana z płynem, dodawana do zupy lub sosu.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „zaklepka”"
    },
    {
        "id": "chechy",
        "nazwa": "chęchy",
        "znaczenie": "zarośla, zaniedbane krzaki",
        "regiony": ["Wielkopolska"],
        "kategoria": "Przyroda",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Gęste, zarośnięte miejsce; w źródle także określenie miejsca podejrzanego.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „chęchy”"
    },
    {
        "id": "kieloch",
        "nazwa": "kieloch",
        "znaczenie": "ząb",
        "regiony": ["Wielkopolska"],
        "kategoria": "Ciało",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Potoczna nazwa zęba.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „kieloch”"
    },
    {
        "id": "skataic-sie",
        "nazwa": "skataić się",
        "znaczenie": "zmęczyć się",
        "regiony": ["Wielkopolska"],
        "kategoria": "Czynności",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Odczuwając zmęczenie po wysiłku.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „skataić się”"
    },
    {
        "id": "fifny",
        "nazwa": "fifny",
        "znaczenie": "zręczny, sprawny, zgrabny",
        "regiony": ["Wielkopolska"],
        "kategoria": "Określenia",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Pochwała osoby lub rzeczy sprawnej i zgrabnej.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „fifny”"
    },
    {
        "id": "brekot",
        "nazwa": "brękot",
        "znaczenie": "zrzęda, maruda",
        "regiony": ["Wielkopolska"],
        "kategoria": "Ludzie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Osoba często narzekająca lub zrzędząca.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „brękot”"
    },
    {
        "id": "parzybroda",
        "nazwa": "parzybroda",
        "znaczenie": "zupa z kapusty",
        "regiony": ["Wielkopolska"],
        "kategoria": "Jedzenie",
        "typ": "Słowo",
        "odmiana": "Gwara poznańska",
        "opis": "Nazwa potrawy przygotowywanej z kapusty.",
        "zrodla": ["poznan"],
        "lokalizator": "Wykaz alfabetyczny; hasło „parzybroda”"
    }
];

const bazaPytan = [
    {
        "materialId": "bimba",
        "bledne": [
            "statek pasażerski",
            "samolot"
        ]
    },
    {
        "materialId": "pyra",
        "bledne": [
            "marchew",
            "rzodkiewka"
        ]
    },
    {
        "materialId": "gzik",
        "bledne": [
            "kompot owocowy",
            "zupa pomidorowa"
        ]
    },
    {
        "materialId": "szneka",
        "bledne": [
            "ser wędzony",
            "plaster szynki"
        ]
    },
    {
        "materialId": "ryczka",
        "bledne": [
            "okno",
            "szafa"
        ]
    },
    {
        "materialId": "korbol",
        "bledne": [
            "ogórek",
            "jabłko"
        ]
    },
    {
        "materialId": "galart",
        "bledne": [
            "słodki budyń",
            "kompot"
        ]
    },
    {
        "materialId": "szagowki",
        "bledne": [
            "naleśniki z serem",
            "grzanki"
        ]
    },
    {
        "materialId": "sznytka",
        "bledne": [
            "szklanka mleka",
            "porcja kaszy"
        ]
    },
    {
        "materialId": "plyndz",
        "bledne": [
            "zupa rybna",
            "jajko sadzone"
        ]
    },
    {
        "materialId": "tytka",
        "bledne": [
            "szklany talerz",
            "metalowy garnek"
        ]
    },
    {
        "materialId": "weborek",
        "bledne": [
            "poduszka",
            "obrus"
        ]
    },
    {
        "materialId": "kwirlejka",
        "bledne": [
            "koc",
            "szafa"
        ]
    },
    {
        "materialId": "knyp",
        "bledne": [
            "wazon",
            "poduszka"
        ]
    },
    {
        "materialId": "klunkry",
        "bledne": [
            "oszczędności",
            "świeże kwiaty"
        ]
    },
    {
        "materialId": "kejter",
        "bledne": [
            "koń",
            "krowa"
        ]
    },
    {
        "materialId": "kociamber",
        "bledne": [
            "owca",
            "kaczka"
        ]
    },
    {
        "materialId": "gzub",
        "bledne": [
            "wiatr",
            "kamień"
        ]
    },
    {
        "materialId": "gilejza",
        "bledne": [
            "bochenek chleba",
            "łódź"
        ]
    },
    {
        "materialId": "bejmy",
        "bledne": [
            "buty",
            "okulary"
        ]
    },
    {
        "materialId": "fefry",
        "bledne": [
            "radość",
            "głód"
        ]
    },
    {
        "materialId": "sztrykowac",
        "bledne": [
            "strzyc włosy",
            "rąbać drewno"
        ]
    },
    {
        "materialId": "heklowac",
        "bledne": [
            "prać",
            "piec chleb"
        ]
    },
    {
        "materialId": "ajmerek",
        "bledne": [
            "duża szafa",
            "lampa"
        ]
    },
    {
        "materialId": "ajnfach",
        "bledne": [
            "skomplikowany",
            "złoty"
        ]
    },
    {
        "materialId": "ajzol",
        "bledne": [
            "drewniana łyżka",
            "wełniany szalik"
        ]
    },
    {
        "materialId": "angielka",
        "bledne": [
            "rower",
            "konewka"
        ]
    },
    {
        "materialId": "angryst",
        "bledne": [
            "dąb",
            "brzoza"
        ]
    },
    {
        "materialId": "antrejka",
        "bledne": [
            "rodzaj ciasta",
            "część roweru"
        ]
    },
    {
        "materialId": "aprykoza",
        "bledne": [
            "cebula",
            "seler"
        ]
    },
    {
        "materialId": "badejki",
        "bledne": [
            "rękawice zimowe",
            "kalosze"
        ]
    },
    {
        "materialId": "bambrzok",
        "bledne": [
            "zupa mleczna",
            "sałatka z pomidorów"
        ]
    },
    {
        "materialId": "bana",
        "bledne": [
            "hulajnoga",
            "łódź"
        ]
    },
    {
        "materialId": "bena",
        "bledne": [
            "mleko",
            "miód"
        ]
    },
    {
        "materialId": "biglowac",
        "bledne": [
            "zamiatać",
            "pływać"
        ]
    },
    {
        "materialId": "biksa",
        "bledne": [
            "szalik",
            "grzebień"
        ]
    },
    {
        "materialId": "bindka",
        "bledne": [
            "pasek do spodni",
            "kapelusz"
        ]
    },
    {
        "materialId": "blajba",
        "bledne": [
            "narzędzie do cięcia",
            "danie z kapusty"
        ]
    },
    {
        "materialId": "bratkasta",
        "bledne": [
            "podłoga",
            "sufit"
        ]
    },
    {
        "materialId": "depok",
        "bledne": [
            "rękaw",
            "kołnierz"
        ]
    },
    {
        "materialId": "smazonka",
        "bledne": [
            "owsianka",
            "kisiel"
        ]
    },
    {
        "materialId": "nudle",
        "bledne": [
            "ryż",
            "kasza"
        ]
    },
    {
        "materialId": "kreple",
        "bledne": [
            "ziemniaki",
            "kluski śląskie"
        ]
    },
    {
        "materialId": "widolki",
        "bledne": [
            "talerz",
            "kubek"
        ]
    },
    {
        "materialId": "smiatek",
        "bledne": [
            "czajnik",
            "poduszka"
        ]
    },
    {
        "materialId": "szrank",
        "bledne": [
            "łóżko",
            "fotel"
        ]
    },
    {
        "materialId": "zradlo",
        "bledne": [
            "dywan",
            "żyrandol"
        ]
    },
    {
        "materialId": "klupac",
        "bledne": [
            "czytać",
            "spać"
        ]
    },
    {
        "materialId": "gibko",
        "bledne": [
            "powoli",
            "daleko"
        ]
    },
    {
        "materialId": "wachowac",
        "bledne": [
            "szyć",
            "śpiewać"
        ]
    },
    {
        "materialId": "apalonik",
        "bledne": [
            "miska",
            "sitko"
        ]
    },
    {
        "materialId": "barabanic",
        "bledne": [
            "szeptać",
            "odpoczywać"
        ]
    },
    {
        "materialId": "dziengi",
        "bledne": [
            "deski",
            "książki"
        ]
    },
    {
        "materialId": "klekotun",
        "bledne": [
            "wróbel",
            "sikorka"
        ]
    },
    {
        "materialId": "pietuch",
        "bledne": [
            "indyk",
            "gąsior"
        ]
    },
    {
        "materialId": "tamoj",
        "bledne": [
            "wczoraj",
            "jutro"
        ]
    },
    {
        "materialId": "uchazor",
        "bledne": [
            "gałąź",
            "kamień"
        ]
    },
    {
        "materialId": "zieziulka",
        "bledne": [
            "sroka",
            "jaskółka"
        ]
    },
    {
        "materialId": "alkierz",
        "bledne": [
            "narzędzie do orki",
            "rodzaj pieczywa"
        ]
    },
    {
        "materialId": "bania",
        "bledne": [
            "gruszka",
            "wiśnia"
        ]
    },
    {
        "tresc": "Jakie instrumenty stoją w centrum wielkopolskich tradycji dudziarskich?",
        "odpowiedzi": [
            "Dudy",
            "Harfy",
            "Organy"
        ],
        "poprawna": 0,
        "wyjasnienie": "Muzycy przekazują repertuar, sposób gry i wiedzę o budowie dud kolejnym pokoleniom. Nauka odbywa się między innymi w relacji mistrza z uczniem. Kapele towarzyszą tańcom i uroczystościom.",
        "materialId": "tradycje-dudziarskie-w-wielkopolsce"
    },
    {
        "tresc": "Z czego wyplata się lucimskie kabłącoki?",
        "odpowiedzi": [
            "Z wikliny",
            "Z metalowego drutu",
            "Z wełny"
        ],
        "poprawna": 0,
        "wyjasnienie": "Kabłącok z Lucimi jest koszem ze świeżej, nieokorowanej wikliny. Płaski tył ułatwia noszenie go przy biodrze. Służy między innymi do przenoszenia warzyw podczas prac gospodarskich.",
        "materialId": "wyplatanie-kablacokow-w-lucimi"
    },
    {
        "tresc": "Jakiej uroczystości dotyczą tradycje weselne z Szamotuł?",
        "odpowiedzi": [
            "Ślubu i wesela",
            "Zakończenia żniw",
            "Rozpoczęcia roku szkolnego"
        ],
        "poprawna": 0,
        "wyjasnienie": "W szamotulskim weselu łączą się regionalne stroje, muzyka, taniec i przemowy w gwarze. Ważne role mają między innymi faktor oraz drużba. Elementy uroczystości przekazuje się w rodzinach i lokalnej społeczności.",
        "materialId": "tradycje-weselne-z-szamotul"
    },
    {
        "tresc": "Na czym ścigają się uczestnicy wyścigów kumoterek?",
        "odpowiedzi": [
            "Na sankach ciągniętych przez konia",
            "Na łodziach",
            "Na rowerach"
        ],
        "poprawna": 0,
        "wyjasnienie": "Na śnieżnym torze rywalizują dwuosobowe załogi góralskich sanek ciągniętych przez konia. Kumoter powozi, a kumoska pomaga utrzymać równowagę zaprzęgu, odpowiednio poruszając ciałem.",
        "materialId": "wyscigi-kumoterek"
    },
    {
        "tresc": "Z jakim regionem wiąże się opisana tradycja dud żywieckich?",
        "odpowiedzi": [
            "Z Żywiecczyzną",
            "Z Warmią",
            "Z Kurpiami"
        ],
        "poprawna": 0,
        "wyjasnienie": "Na Żywiecczyźnie pielęgnuje się zarówno granie, jak i wykonywanie dud. Instrument ma skórzany worek, piszczałki oraz ustnik. Umiejętności przekazywane są uczniom przez doświadczonych muzyków i budowniczych.",
        "materialId": "gra-i-budowa-dud-zywieckich"
    },
    {
        "tresc": "Na jakie święto układa się opisane dywany w Spycimierzu?",
        "odpowiedzi": [
            "Na Boże Ciało",
            "Na Wszystkich Świętych",
            "Na Nowy Rok"
        ],
        "poprawna": 0,
        "wyjasnienie": "Mieszkańcy parafii wspólnie układają kwiatową trasę procesji. Korzystają z płatków oraz całych kwiatów polnych i ogrodowych. W przygotowaniach uczestniczą różne pokolenia.",
        "materialId": "kwietne-dywany-w-spycimierzu"
    },
    {
        "tresc": "Czym są gajdy w opisanej tradycji?",
        "odpowiedzi": [
            "Instrumentem muzycznym",
            "Rodzajem pisanek",
            "Narzędziem do haftu"
        ],
        "poprawna": 0,
        "wyjasnienie": "Gajdy są związane z Beskidem Śląskim, szczególnie z Istebną, Koniakowem i Jaworzynką. Większość części wykonuje się ręcznie. Muzycy wykorzystują je w repertuarze tradycyjnym i jego współczesnych opracowaniach.",
        "materialId": "budowanie-gajd-i-gra-na-nich"
    },
    {
        "tresc": "Kiedy obchodzona jest opisana Barbórka?",
        "odpowiedzi": [
            "4 grudnia",
            "1 maja",
            "24 czerwca"
        ],
        "poprawna": 0,
        "wyjasnienie": "Obchody przypadają 4 grudnia, we wspomnienie świętej Barbary. Łączą wymiar zawodowy i religijny. W świętowaniu uczestniczą górnicy oraz związane z nimi lokalne wspólnoty.",
        "materialId": "barborka-gornikow-gornego-slaska"
    },
    {
        "tresc": "Z którym miastem wiąże się opisana społeczność Bambrów?",
        "odpowiedzi": [
            "Z Poznaniem",
            "Z Lublinem",
            "Z Zakopanem"
        ],
        "poprawna": 0,
        "wyjasnienie": "Potomkowie osadników z okolic Bambergu pielęgnują własne dziedzictwo w Poznaniu. Wyróżnia je między innymi strój bamberski, Święto Bamberskie oraz udział w miejskich uroczystościach i procesjach.",
        "materialId": "tradycje-bambrow-poznanskich"
    },
    {
        "tresc": "Z jakiej tradycji wywodzi się wzór opolski?",
        "odpowiedzi": [
            "Z ozdabiania kroszonek",
            "Z budowania łodzi",
            "Z gry na dudach"
        ],
        "poprawna": 0,
        "wyjasnienie": "Motywy znane z kroszonek przeniesiono na trwalsze przedmioty, między innymi porcelanę. W dekoracjach dominują rośliny. Współczesne twórczynie umieszczają wzór także na biżuterii i innych przedmiotach użytkowych.",
        "materialId": "reczne-malowanie-wzoru-opolskiego"
    },
    {
        "tresc": "W jakim okresie odbywa się opisane wodzenie niedźwiedzia?",
        "odpowiedzi": [
            "W karnawale",
            "Podczas adwentu",
            "Podczas jesiennych wykopków"
        ],
        "poprawna": 0,
        "wyjasnienie": "Korowód z postacią niedźwiedzia odwiedza domy. Towarzyszą mu inne przebrane postacie, różne zależnie od miejscowości. Zwyczaj kończy wspólna zabawa i symboliczna scena pokonania niedźwiedzia.",
        "materialId": "wodzenie-niedzwiedzia-na-opolszczyznie"
    },
    {
        "tresc": "Kiedy kolęduje opisana kaszubska Gwiôzdka?",
        "odpowiedzi": [
            "W Wigilię Bożego Narodzenia",
            "W Niedzielę Palmową",
            "W Zaduszki"
        ],
        "poprawna": 0,
        "wyjasnienie": "Opis NID dotyczy grup z gminy Sierakowice. Kolędnicy odwiedzają gospodarstwa w Wigilię, od popołudnia niemal do pasterki. Udział w grupie często podtrzymuje rodzinną tradycję.",
        "materialId": "kaszubska-gwiozdka"
    },
    {
        "tresc": "Z jakiego materiału wykonuje się opisane wycinanki kurpiowskie?",
        "odpowiedzi": [
            "Z papieru",
            "Z gliny",
            "Z metalu"
        ],
        "poprawna": 0,
        "wyjasnienie": "Twórcy używają tradycyjnych nożyc do strzyżenia owiec. Z papieru powstają między innymi leluje, drzewka i motywy zwierzęce. Dawniej dekoracje umieszczano bezpośrednio na ścianach, dziś również w ramach.",
        "materialId": "wycinankarstwo-kurpiowskie-puszczy-zielonej"
    },
    {
        "tresc": "Z czego powstaje brama krzyżoków w Borkach Małych?",
        "odpowiedzi": [
            "Ze skorupek jaj",
            "Z szyszek",
            "Z lodu"
        ],
        "poprawna": 0,
        "wyjasnienie": "Mieszkańcy przygotowują bramę z tysięcy skorupek jaj. Zawieszają ją nocą w Wielką Sobotę. Przed wschodem słońca w Wielkanoc dwunastu kawalerów obchodzi pieszo pola.",
        "materialId": "krzyzoki-w-borkach-malych"
    },
    {
        "tresc": "Kto jest główną grupą uczestniczącą w babskim combrze?",
        "odpowiedzi": [
            "Kobiety",
            "Wyłącznie górnicy",
            "Wyłącznie dzieci szkolne"
        ],
        "poprawna": 0,
        "wyjasnienie": "Spotkania organizują miejscowe kobiety pod koniec karnawału. Dawny obrzęd dla młodych mężatek zmienił się w zabawę szerszego grona uczestniczek. Jej przebieg zależy od miejscowości.",
        "materialId": "babski-comber-na-slasku-opolskim"
    },
    {
        "tresc": "Co wyznacza trasę opisanych procesji w czterech wsiach opolskich?",
        "odpowiedzi": [
            "Dywany z kwiatów",
            "Rzędy ceramicznych dzbanów",
            "Girlandy z suszonych ryb"
        ],
        "poprawna": 0,
        "wyjasnienie": "W Kluczu, Olszowej, Zalesiu Śląskim i Zimnej Wódce mieszkańcy układają kwietne wzory na Boże Ciało. Wybór kwiatów zależy od pory ich kwitnienia. Często pracują wspólnie całe rodziny.",
        "materialId": "kwietne-dywany-w-czterech-wsiach-opolskich"
    },
    {
        "tresc": "Czym osłania się wzór przed barwnikiem w technice batikowej?",
        "odpowiedzi": [
            "Woskiem",
            "Solą",
            "Mąką"
        ],
        "poprawna": 0,
        "wyjasnienie": "Wzór nanosi się woskiem, który osłania fragmenty skorupki przed barwnikiem. W tradycji Opolszczyzny ważną rolę odegrały także rodziny przesiedlone po wojnie z terenów dzisiejszej Ukrainy.",
        "materialId": "pisanki-batikowe-na-slasku-opolskim"
    },
    {
        "tresc": "W który dzień odbywa się opisane dunajowanie?",
        "odpowiedzi": [
            "W drugi dzień Bożego Narodzenia",
            "W Wielki Piątek",
            "W pierwszy dzień jesieni"
        ],
        "poprawna": 0,
        "wyjasnienie": "W Łukowej, Rakówce i Zamchu młodzi nieżonaci kolędnicy odwiedzają domy w wieczór świętego Szczepana. Śpiewają pieśni adresowane do panien, związane z życzeniami zamążpójścia.",
        "materialId": "dunajowanie-w-lukowej-i-okolicach"
    },
    {
        "tresc": "Co wysiewa się w zarysowanych sercach i krzyżach?",
        "odpowiedzi": [
            "Zboże",
            "Krzewy róż",
            "Drzewka owocowe"
        ],
        "poprawna": 0,
        "wyjasnienie": "W okolicach Strzelec Opolskich i Ujazdu rysuje się na ziemi serce lub krzyż, a następnie wysiewa w tym miejscu zboże. Zwyczaj wiąże się z życzeniem urodzaju i ochrony gospodarstwa.",
        "materialId": "wysiewanie-serc-i-krzyzy-na-polach"
    },
    {
        "tresc": "Czym są kurpiowskie byśki w opisanej tradycji?",
        "odpowiedzi": [
            "Figurkami zwierząt z ciasta",
            "Papierowymi kwiatami",
            "Malowanymi kamieniami"
        ],
        "poprawna": 0,
        "wyjasnienie": "W Puszczy Zielonej wypieka się zwierzęce figurki nazywane byśkami. Nowe latko może przedstawiać pastuszka ze zwierzętami na kręgu ciasta. Tradycja łączy się z okresem Bożego Narodzenia i Nowego Roku.",
        "materialId": "wypiek-byskow-i-nowych-latek"
    },
    {
        "tresc": "Co wydaje dźwięk w carillonie?",
        "odpowiedzi": [
            "Dzwony",
            "Struny",
            "Drewniane płytki"
        ],
        "poprawna": 0,
        "wyjasnienie": "Carillon to instrument złożony z wielu dzwonów. Muzyk porusza ich serca za pomocą klawiatury ręcznej i pedałowej. W Gdańsku ta tradycja wiąże się między innymi z wieżą kościoła świętej Katarzyny i ratuszem.",
        "materialId": "muzyka-carillonowa-w-gdansku"
    },
    {
        "tresc": "Z którą miejscowością związane są opisane bziuki?",
        "odpowiedzi": [
            "Z Koprzywnicą",
            "Z Szamotułami",
            "Z Lucimią"
        ],
        "poprawna": 0,
        "wyjasnienie": "Podczas procesji rezurekcyjnej w Wielką Sobotę miejscowi strażacy tworzą widowiskowe słupy ognia. Zwyczaj jest związany z Koprzywnicą i tamtejszą wspólnotą.",
        "materialId": "bziuki-w-koprzywnicy"
    },
    {
        "tresc": "Którą część stroju stanowi czepiec warmiński?",
        "odpowiedzi": [
            "Nakrycie głowy",
            "Obuwie",
            "Pas"
        ],
        "poprawna": 0,
        "wyjasnienie": "Warmiński czepiec składa się z denka, otoku i wstążek. Szczególną uwagę przyciąga haft na denku, często o motywach roślinnych. Rzemiosło przekazywane jest między pokoleniami i podczas warsztatów.",
        "materialId": "wytwarzanie-czepcow-warminskich"
    },
    {
        "materialId": "baca",
        "bledne": [
            "kowal",
            "rybak"
        ]
    },
    {
        "materialId": "bakro",
        "bledne": [
            "uchwyt kubka",
            "część kapelusza"
        ]
    },
    {
        "materialId": "bajtlik",
        "bledne": [
            "skrzynia na zboże",
            "koszyk na grzyby"
        ]
    },
    {
        "materialId": "bakwan",
        "bledne": [
            "rodzaj drewna",
            "tkanina wełniana"
        ]
    },
    {
        "materialId": "banior",
        "bledne": [
            "szczyt góry",
            "leśna polana"
        ]
    },
    {
        "materialId": "banowac",
        "bledne": [
            "cieszyć się",
            "orać pole"
        ]
    },
    {
        "materialId": "basarenek",
        "bledne": [
            "prezent urodzinowy",
            "zaproszenie na wesele"
        ]
    },
    {
        "materialId": "bednarka",
        "bledne": [
            "szklana butelka",
            "metalowa obręcz"
        ]
    },
    {
        "materialId": "bespekta",
        "bledne": [
            "waga",
            "kompas"
        ]
    },
    {
        "materialId": "bicowe",
        "bledne": [
            "zapłata młynarzowi za przemiał",
            "opłata za wypas owiec"
        ]
    },
    {
        "materialId": "bida",
        "bledne": [
            "łódź rybacka",
            "sanie"
        ]
    },
    {
        "materialId": "biega",
        "bledne": [
            "drewniany kubek",
            "fragment komina"
        ]
    },
    {
        "materialId": "bloniarz",
        "bledne": [
            "piekarz",
            "rybak"
        ]
    },
    {
        "materialId": "bockowac",
        "bledne": [
            "szeptać do ucha",
            "orać pole"
        ]
    },
    {
        "materialId": "bosak",
        "bledne": [
            "worek na zboże",
            "drewniana miska"
        ]
    },
    {
        "materialId": "boskac",
        "bledne": [
            "krzyczeć",
            "chować się"
        ]
    },
    {
        "materialId": "brembolce",
        "bledne": [
            "skórzane buty",
            "wełniane rękawice"
        ]
    },
    {
        "materialId": "bryja",
        "bledne": [
            "ser wędzony",
            "pieczone mięso"
        ]
    },
    {
        "materialId": "bucny",
        "bledne": [
            "hałaśliwy",
            "niedbały"
        ]
    },
    {
        "materialId": "budarz",
        "bledne": [
            "garncarz",
            "szewc"
        ]
    },
    {
        "materialId": "bukse",
        "bledne": [
            "rękojeść siekiery",
            "wiązanie snopa"
        ]
    },
    {
        "materialId": "burtnica",
        "bledne": [
            "obudowa pieca chlebowego",
            "płot wokół pastwiska"
        ]
    },
    {
        "materialId": "cekan",
        "bledne": [
            "grabie",
            "kosa"
        ]
    },
    {
        "materialId": "cetyna",
        "bledne": [
            "kora drzewna",
            "szyszki"
        ]
    },
    {
        "materialId": "ciupaga",
        "bledne": [
            "krótki nóż",
            "drewniana łyżka"
        ]
    },
    {
        "materialId": "clenka",
        "bledne": [
            "gęsta kasza",
            "wędzony ser"
        ]
    },
    {
        "materialId": "cuba",
        "bledne": [
            "dno doliny",
            "brzeg rzeki"
        ]
    },
    {
        "materialId": "haft-zukowski",
        "tresc": "Ile podstawowych kolorów ma haft kaszubski szkoły żukowskiej?",
        "odpowiedzi": [
            "Siedem",
            "Dwa",
            "Dwanaście"
        ],
        "poprawna": 0,
        "wyjasnienie": "Jedna z odmian haftu kaszubskiego, związana z Żukowem. Zdobi tkaniny siedmioma podstawowymi kolorami. Wśród tych barw są aż trzy odcienie niebieskiego."
    },
    {
        "materialId": "szopkarstwo-krakowskie",
        "tresc": "Z jakim okresem świątecznym wiąże się szopkarstwo krakowskie?",
        "odpowiedzi": [
            "Z Bożym Narodzeniem",
            "Z Wielkanocą",
            "Z dożynkami"
        ],
        "poprawna": 0,
        "wyjasnienie": "Krakowska tradycja tworzenia ozdobnych szopek bożonarodzeniowych. Jej początki sięgają XIX wieku. Szopki buduje się też w innych regionach, w różnych formach. Pierwsi twórcy, m.in. murarze, zajmowali się szopkami w okresie przerwy w pracach budowlanych."
    },
    {
        "materialId": "palmy-kurpiowskie",
        "tresc": "Czym między innymi ozdabia się palmy kurpiowskie opisane na stronie?",
        "odpowiedzi": [
            "Papierowymi kwiatami",
            "Szklanymi bombkami",
            "Metalowymi dzwonami"
        ],
        "poprawna": 0,
        "wyjasnienie": "W Puszczy Zielonej przygotowuje się wysokie palmy wielkanocne zdobione m.in. papierowymi kwiatami. Palmy powstają także w innych regionach, według miejscowych zwyczajów. Duże palmy bywają wspólnym dziełem całych rodzin lub lokalnych społeczności."
    },
    {
        "materialId": "koronka-koniakowska",
        "tresc": "Jak wykonuje się opisaną koronkę koniakowską?",
        "odpowiedzi": [
            "Szydełkuje się ją ręcznie",
            "Rzeźbi się ją w drewnie",
            "Wycina się ją ze skóry"
        ],
        "poprawna": 0,
        "wyjasnienie": "Ręcznie szydełkowana koronka z nici zwanych kordonkiem, tworzona w Koniakowie, Istebnej i Jaworzynce. Powstają z niej nie tylko serwety, lecz także suknie ślubne."
    },
    {
        "materialId": "kroszonki-opolskie",
        "tresc": "Jak powstaje ornament na opisanych kroszonkach opolskich?",
        "odpowiedzi": [
            "Przez wydrapywanie wzoru",
            "Przez naklejanie wełnianych nici",
            "Przez oblewanie całego jajka woskiem bez wzoru"
        ],
        "poprawna": 0,
        "wyjasnienie": "Barwione jajka ozdabiane przez wydrapywanie wzorów. To charakterystyczna tradycja Opolszczyzny. Dekoracje często przypominają rośliny: kwiaty, liście i palmy."
    },
    {
        "materialId": "pochod-lajkonika",
        "tresc": "Jaka kapela towarzyszy opisanemu pochodowi Lajkonika?",
        "odpowiedzi": [
            "Mlaskoty",
            "Kapela dud żywieckich",
            "Orkiestra carillonowa"
        ],
        "poprawna": 0,
        "wyjasnienie": "Krakowski pochód z postacią jeźdźca przebranego za Tatara na sztucznym koniku. Lajkonik porusza się na własnych nogach. Orszakowi towarzyszy kapela „Mlaskoty”."
    },
    {
        "materialId": "wycinanka-lowicka",
        "tresc": "Z jakiego materiału wykonuje się wycinanki łowickie?",
        "odpowiedzi": [
            "Z kolorowego papieru",
            "Z kory brzozowej",
            "Z gliny"
        ],
        "poprawna": 0,
        "wyjasnienie": "Ozdoba z wycinanego, warstwowo naklejanego kolorowego papieru. Wycinanki mają też inne regionalne odmiany, m.in. kurpiowską. Łowickie kodry służyły do dekorowania wnętrz chałup, m.in. belek stropowych i miejsc nad drzwiami."
    }
];

bazaPytan.push(
    { "materialId": "skop", "bledne": ["koza", "jagnię"] },
    { "materialId": "grygolic", "bledne": ["szybko biec", "oszczędzać"] },
    { "materialId": "brachol", "bledne": ["dziewczyna", "kuzyn"] },
    { "materialId": "zybura", "bledne": ["czysta woda", "mleko"] },
    { "materialId": "szczun", "bledne": ["dziewczyna", "niemowlę"] },
    { "materialId": "srupac", "bledne": ["mówić", "pływać"] },
    { "materialId": "chapac", "bledne": ["odpoczywać", "śpiewać"] },
    { "materialId": "repeta", "bledne": ["deser", "napój"] },
    { "materialId": "wajcha", "bledne": ["młotek", "śrubokręt"] },
    { "materialId": "maluda", "bledne": ["starzec", "sąsiad"] },
    { "materialId": "mela", "bledne": ["chłopak", "dorosły mężczyzna"] },
    { "materialId": "gibac", "bledne": ["spać", "szyć"] },
    { "materialId": "golarz", "bledne": ["piekarz", "kowal"] },
    { "materialId": "ancug", "bledne": ["obuwie", "czapka"] },
    { "materialId": "rumpuc", "bledne": ["słodkie ciasto", "kompot"] },
    { "materialId": "blubrac", "bledne": ["milczeć", "pracować"] },
    { "materialId": "nosplat", "bledne": ["fryzjer", "listonosz"] },
    { "materialId": "hulajpeta", "bledne": ["rower", "wózek"] },
    { "materialId": "gnyk", "bledne": ["łokieć", "kolano"] },
    { "materialId": "churchlac", "bledne": ["śpiewać", "szeptać"] },
    { "materialId": "zgak", "bledne": ["guzik", "sznurek"] },
    { "materialId": "kierz", "bledne": ["łąka", "strumień"] },
    { "materialId": "funcka", "bledne": ["świeca", "żarówka"] },
    { "materialId": "drachyta", "bledne": ["bączek", "piłka"] },
    { "materialId": "giglac", "bledne": ["popychać", "szczypać"] },
    { "materialId": "brecha", "bledne": ["miotła", "grabie"] },
    { "materialId": "makocz", "bledne": ["sernik", "chleb"] },
    { "materialId": "fafoly", "bledne": ["piana", "kryształki cukru"] },
    { "materialId": "gichnac", "bledne": ["delikatnie wsypać", "odcedzić"] },
    { "materialId": "winkiel", "bledne": ["piwnica", "dach"] },
    { "materialId": "rojber", "bledne": ["nauczyciel", "pracownik"] },
    { "materialId": "kipa", "bledne": ["zapałka", "popiół"] },
    { "materialId": "laczki", "bledne": ["kalosze", "rękawiczki"] },
    { "materialId": "bryle", "bledne": ["rękawiczki", "buty"] },
    { "materialId": "szparowac", "bledne": ["wydawać", "pożyczać"] },
    { "materialId": "szuchrowac", "bledne": ["pomagać", "gotować"] },
    { "materialId": "cmik", "bledne": ["zapalniczka", "zapałka"] },
    { "materialId": "szwung", "bledne": ["cisza", "ciężar"] },
    { "materialId": "fogelka", "bledne": ["biblioteka", "przystanek"] },
    { "materialId": "klejdry", "bledne": ["komplementy", "przepisy"] },
    { "materialId": "chlabra", "bledne": ["susza", "upał"] },
    { "materialId": "klapsztula", "bledne": ["okrągły bochenek", "drożdżówka"] },
    { "materialId": "majsel", "bledne": ["młotek", "śrubokręt"] },
    { "materialId": "narychtowac", "bledne": ["zepsuć", "wyrzucić"] },
    { "materialId": "dynks", "bledne": ["osoba", "miejsce"] },
    { "materialId": "redyska", "bledne": ["rzepa", "pietruszka"] },
    { "materialId": "gajgi", "bledne": ["flet", "bęben"] },
    { "materialId": "klara", "bledne": ["księżyc", "gwiazda"] },
    { "materialId": "weko", "bledne": ["garnek", "drewniana beczka"] },
    { "materialId": "sznytloch", "bledne": ["pietruszka", "koper"] },
    { "materialId": "srubociag", "bledne": ["kombinerki", "piła"] },
    { "materialId": "drynda", "bledne": ["autobus", "pociąg"] },
    { "materialId": "klemki", "bledne": ["miękkie żelki", "czekolada"] },
    { "materialId": "kalafa", "bledne": ["kark", "kolano"] },
    { "materialId": "sznupa", "bledne": ["ząb", "nos"] },
    { "materialId": "uhajtnac", "bledne": ["zszyć", "zakopać"] },
    { "materialId": "fyrac", "bledne": ["stać w miejscu", "wracać"] },
    { "materialId": "sztyft", "bledne": ["mistrz", "klient"] },
    { "materialId": "blalka", "bledne": ["lekcja", "przerwa wakacyjna"] },
    { "materialId": "szpeniol", "bledne": ["nieśmiałek", "nowicjusz"] },
    { "materialId": "leberka", "bledne": ["biała kiełbasa", "kaszanka"] },
    { "materialId": "wuchta", "bledne": ["drobina", "pojedyncza sztuka"] },
    { "materialId": "lofrowac", "bledne": ["prasować", "gotować"] },
    { "materialId": "wycpic", "bledne": ["przynieść", "schować"] },
    { "materialId": "zaklepka", "bledne": ["bita śmietana", "panierka"] },
    { "materialId": "chechy", "bledne": ["sad", "ogród"] },
    { "materialId": "kieloch", "bledne": ["dłoń", "łokieć"] },
    { "materialId": "skataic-sie", "bledne": ["wyspać się", "odprężyć się"] },
    { "materialId": "fifny", "bledne": ["niezgrabny", "powolny"] },
    { "materialId": "brekot", "bledne": ["gaduła", "zuchwalec"] },
    { "materialId": "parzybroda", "bledne": ["zupa pomidorowa", "kisiel"] }
);
