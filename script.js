"use strict";

const poleSzukania = document.querySelector("#search");
const wyborRegionu = document.querySelector("#region");
const wyborKategorii = document.querySelector("#category");
const wyborSortowania = document.querySelector("#sort");
const kontenerKart = document.querySelector("#cards");
const licznikWynikow = document.querySelector("#results-count");
const brakWynikow = document.querySelector("#no-results");
const przyciskWiecej = document.querySelector("#load-more");
const tytulPytania = document.querySelector("#question-title");
const kontenerOdpowiedzi = document.querySelector("#answers");
const informacjaZwrotna = document.querySelector("#feedback");
const przyciskDalej = document.querySelector("#next-question");
const pasekPostepu = document.querySelector("#quiz-progress");
const liczbaKartNaStronie = 24;
const liczbaPytanWRundzie = 10;
const rodzajStrony = document.body.dataset.strona;
const materialyStrony = materialy.filter(function (material) {
    return rodzajStrony === "slownik" ? material.typ === "Słowo" : material.typ === "Tradycja";
});
const wyborRegionuQuizu = document.querySelector("#quiz-region");
const wyborTematuQuizu = document.querySelector("#quiz-type");

let limitKart = liczbaKartNaStronie;
let wybraneId = null;
let pytaniaRundy = [];
let bledneOdpowiedzi = [];
let numerPytania = 0;
let punkty = 0;
let udzielonoOdpowiedzi = false;
const ostatniePozycjePoprawnychOdpowiedzi = new Map();

function uproscTekst(tekst) {
    return tekst.toLocaleLowerCase("pl").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ł/g, "l");
}

function przygotujFiltry() {
    const regiony = [...new Set(materialyStrony.flatMap(function (material) { return material.regiony; }))];
    const kategorie = [...new Set(materialyStrony.map(function (material) { return material.kategoria; }))];
    dodajOpcje(wyborRegionu, regiony);
    if (wyborKategorii) dodajOpcje(wyborKategorii, kategorie);
}

function dodajOpcje(wybor, wartosci) {
    wartosci.sort(function (a, b) { return a.localeCompare(b, "pl"); });
    wartosci.forEach(function (wartosc) {
        const opcja = document.createElement("option");
        opcja.value = wartosc;
        opcja.textContent = wartosc;
        wybor.appendChild(opcja);
    });
}

function pasujaceMaterialy(szukanyTekst, region, kategoria = "") {
    const fraza = uproscTekst(szukanyTekst.trim());
    return materialyStrony.filter(function (material) {
        const tekst = [material.nazwa, material.znaczenie, material.opis, material.regiony.join(" "), (material.warianty || []).join(" "), (material.dodatkoweZnaczenia || []).join(" ")].join(" ");
        return uproscTekst(tekst).includes(fraza)
            && (region === "" || material.regiony.includes(region))
            && (kategoria === "" || material.kategoria === kategoria);
    });
}

function element(tag, klasa, tekst) {
    const nowy = document.createElement(tag);
    nowy.className = klasa;
    nowy.textContent = tekst;
    return nowy;
}

function bezpiecznyAdresZrodla(adres) {
    if (typeof adres !== "string") return null;
    try {
        const url = new URL(adres);
        return url.protocol === "https:" && !url.username && !url.password ? url.href : null;
    } catch {
        return null;
    }
}

function linkDoZrodla(material, identyfikator) {
    const zrodlo = zrodla[identyfikator];
    const adres = bezpiecznyAdresZrodla(zrodlo.url);
    if (!adres) return element("span", "source-link", "Adres źródła jest niedostępny");
    const link = element("a", "source-link", "Sprawdź źródło");
    const url = new URL(adres);
    if (Number.isSafeInteger(material.stronaPdf) && material.stronaPdf > 0) url.hash = "page=" + material.stronaPdf;
    link.href = url.href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", "Sprawdź źródło, " + material.nazwa + ": " + zrodlo.tytul + " (nowa karta)");
    return link;
}

const powtorzoneOpisy = new Set(("bimba pyra gzik szneka ryczka korbol szagowki sznytka plyndz tytka weborek knyp klunkry kejter kociamber gzub gilejza bejmy fefry sztrykowac heklowac ajmerek ajnfach ajzol angryst antrejka aprykoza badejki bambrzok bana bena biglowac biksa bindka blajba bratkasta depok smazonka nudle kreple widolki smiatek szrank zradlo klupac gibko wachowac barabanic czuczelo dziengi fluk gnic hadki klekotun maszynka pietuch tamoj uchazor wiszczec zieziulka balt bania belch bezmian biel bogater bonik brukwianka brzyc budzien burlak bystry bzdecyc celowac cerep chabanina chabenda chachaica chachmec chachmecic chalaj charkot chichol chluba chmara chobotnia chodziwy choja chojdac-sie chrosciel chudziec chusty chutko chyl ciarki cieplice cies ciegalnik facolet fala familjant fatalachy fetec flaga flus fryga gac gaic galak gaz gescarz giza glen gody golanka golopup grabielnik granowity grapa grochowcysko gromadki grond grycht gugiel haber habory holobla jagielnik jamura jarlak jasc jedun jegody jelownik jecmianka jubka jusnik kaliwo kapelnik karc karton kawka kiedysny kiendziuk kiziak klatka kleic klet kliniec knichuta kobialy kobyla kocielnica kocki kokosianka koktucha kolenda kolesnik kolka kolowaty konicysko koniuch konopnina babiarka babi-pies babron baga brygantowac bryskac bryzowac-sie brzek bucny bugar bukowiec burk burka burniawa burtnica byciar bykowe byl byrka calizna caper cekany cemierwa cetyna chamisko chipkac chlepiac-sie chudobny ciabrac-sie ciabracha ciaplak ciarac-sie cieniec cieslica clenie cliwo cuba cigiec ciopac ciort cmanic cma cochac-sie colnik cupieradlo cupierzyc-sie cwikle cybant cybulak cyga cynowacizna cyny dalecyzna deda dennica decak dluz dobrowaty dokiela dotela docynek dojnica doswiatek dralas ducaj duch dulana duzac-sie duzowac dydek konopnisko kopersac korbanka korcak koska kosulka kozerek kozuchowac kolko krazek kreski krezolek kroc kryjan krypa krupnik kruzyk krzesla ksieznica ksciec kuciament kucyc kuka kul kulac kumlak kumlacyc kupcy kurcaba kuroslep kurzy-owoc kwasnina kwitnac lada lak latowac latownik lento len lesnianka letry lewentarz lezny ledziaj ligawka lipnik lisni lita litwa lnianka lnina lochun lubaska lubryka lusnia lustyk ladycha lagiezic lajka lajkowac lamance lapcie lez loksiny lomianka lomic lub luscak lych lychun lypa lyta lyznik madrak").split(" "));

function opisUzupelniajacy(material) {
    return powtorzoneOpisy.has(material.id) ? "" : material.opis;
}

function utworzKarte(material) {
    const karta = element("article", "material-card", "");
    karta.id = material.id;
    if (material.typ === "Tradycja") karta.classList.add("tradition");
    const tresc = element("div", "material-content", "");
    const meta = element("div", "card-meta", "");
    meta.append(element("span", "", material.regiony.join(" · ")), element("span", "card-type", material.kategoria));
    const naglowek = element("h3", "", material.nazwa);
    naglowek.tabIndex = -1;
    tresc.append(naglowek, element("p", "word-meaning", material.znaczenie), meta);
    if (material.rokZapisu) tresc.appendChild(element("p", "historical-label", "Zapis historyczny · " + material.rokZapisu));
    if (material.odmiana) tresc.appendChild(element("p", "language-note", material.odmiana));
    if (material.warianty && material.warianty.length) tresc.appendChild(element("p", "language-note", "Warianty: " + material.warianty.join(", ")));
    const opis = opisUzupelniajacy(material);
    if (opis) tresc.appendChild(element("p", "material-description", opis));
    if (material.dodatkoweZnaczenia && material.dodatkoweZnaczenia.length) {
        tresc.appendChild(element("p", "material-description", "Inne znaczenia w źródle: " + material.dodatkoweZnaczenia.join("; ") + "."));
    }
    const przypisy = element("div", "card-sources", "");
    material.zrodla.forEach(function (id) {
        przypisy.append(element("p", "source-name", zrodla[id].tytul), linkDoZrodla(material, id));
    });
    przypisy.appendChild(element("p", "source-location", material.lokalizator));
    karta.append(tresc, przypisy);
    return karta;
}

function pokazMaterialy() {
    const wyniki = wybraneId
        ? materialyStrony.filter(function (m) { return m.id === wybraneId; })
        : pasujaceMaterialy(poleSzukania.value, wyborRegionu.value, wyborKategorii ? wyborKategorii.value : "");
    wyniki.sort(function (a, b) {
        const porownanie = a.nazwa.localeCompare(b.nazwa, "pl");
        return wyborSortowania.value === "za" ? -porownanie : porownanie;
    });
    const widoczne = wyniki.slice(0, limitKart);
    kontenerKart.replaceChildren();
    widoczne.forEach(function (material) { kontenerKart.appendChild(utworzKarte(material)); });
    licznikWynikow.textContent = wybraneId
        ? "Wybrany wpis: „" + wyniki[0].nazwa + "”. W bazie: " + materialyStrony.length + "."
        : "Pasujące wyniki: " + wyniki.length + ". Wyświetlono " + widoczne.length + ".";
    brakWynikow.hidden = wyniki.length !== 0;
    przyciskWiecej.hidden = widoczne.length >= wyniki.length;
    przyciskWiecej.textContent = "Pokaż więcej (+" + Math.min(liczbaKartNaStronie, wyniki.length - widoczne.length) + ")";
    document.querySelector("#show-all").hidden = !wybraneId;
}

function zmienFiltry() {
    wybraneId = null;
    usunAdresWpisu();
    limitKart = liczbaKartNaStronie;
    pokazMaterialy();
}

function usunAdresWpisu() {
    if (location.hash) history.replaceState(null, "", location.href.split("#")[0]);
}

function adresMaterialu(material) {
    return (material.typ === "Słowo" ? "slownik.html" : "tradycje.html") + "#" + material.id;
}

function wybierzMaterial(material, przeniesFokus = true) {
    wybraneId = material.id;
    poleSzukania.value = material.nazwa;
    wyborRegionu.value = "";
    if (wyborKategorii) wyborKategorii.value = "";
    wyborSortowania.value = "az";
    limitKart = liczbaKartNaStronie;
    pokazMaterialy();
    if (przeniesFokus) {
        const naglowek = kontenerKart.querySelector("h3");
        naglowek.focus({ preventScroll: true });
        kontenerKart.scrollIntoView({ block: "start" });
    }
}

function odczytajAdresWpisu(przeniesFokus = false) {
    const material = materialyStrony.find(function (m) { return "#" + m.id === location.hash; });
    if (material) wybierzMaterial(material, przeniesFokus);
    else if (location.hash === "#tresc") return;
    else if (wybraneId) wyczyscFiltry();
    else pokazMaterialy();
}

function losujSlowo() {
    const pula = slowa.filter(function (m) { return m.id !== wybraneId; });
    const material = pula[Math.floor(Math.random() * pula.length)];
    history.replaceState(null, "", location.href.split("#")[0] + "#" + material.id);
    wybierzMaterial(material);
}

function wyczyscFiltry() {
    poleSzukania.value = "";
    wyborRegionu.value = "";
    if (wyborKategorii) wyborKategorii.value = "";
    wyborSortowania.value = "az";
    zmienFiltry();
    poleSzukania.focus({ preventScroll: true });
}

function pokazWiecej() {
    const poprzedniaLiczba = kontenerKart.children.length;
    limitKart += liczbaKartNaStronie;
    pokazMaterialy();
    const pierwszaNowa = kontenerKart.children[poprzedniaLiczba];
    if (pierwszaNowa) pierwszaNowa.querySelector("h3").focus({ preventScroll: true });
}

function pokazZrodla() {
    const lista = document.querySelector("#sources-list");
    const wykorzystane = [...new Set(materialy.flatMap(function (material) { return material.zrodla; }))];
    const widzianeAdresy = new Set();
    wykorzystane.sort(function (a, b) { return zrodla[a].tytul.localeCompare(zrodla[b].tytul, "pl"); });
    lista.replaceChildren();
    wykorzystane.forEach(function (id) {
        const zrodlo = zrodla[id];
        if (widzianeAdresy.has(zrodlo.url)) return;
        widzianeAdresy.add(zrodlo.url);
        const pozycja = element("li", "", "");
        const adres = bezpiecznyAdresZrodla(zrodlo.url);
        const link = element(adres ? "a" : "span", "", zrodlo.tytul);
        if (adres) link.href = adres;
        pozycja.append(link, element("span", "", zrodlo.autor));
        lista.appendChild(pozycja);
    });
}

function potasuj(tablica) {
    const kopia = [...tablica];
    for (let i = kopia.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [kopia[i], kopia[j]] = [kopia[j], kopia[i]];
    }
    return kopia;
}

function dostepnePytania(region = "", typ = "") {
    return bazaPytan.filter(function (wpis) {
        const material = materialy.find(function (karta) { return karta.id === wpis.materialId; });
        return (region === "" || material.regiony.includes(region)) && (typ === "" || material.typ === typ);
    });
}

function losujPytania(region = "", typ = "") {
    return potasuj(dostepnePytania(region, typ)).slice(0, liczbaPytanWRundzie).map(function (wpis) {
        const material = materialy.find(function (karta) { return karta.id === wpis.materialId; });
        const poprawnyTekst = wpis.odpowiedzi ? wpis.odpowiedzi[wpis.poprawna] : material.znaczenie;
        const bledneTeksty = wpis.odpowiedzi
            ? wpis.odpowiedzi.filter(function (_, indeks) { return indeks !== wpis.poprawna; })
            : wpis.bledne;
        const mozliwePozycje = [0, 1, 2].filter(function (pozycja) {
            return pozycja !== ostatniePozycjePoprawnychOdpowiedzi.get(material.id);
        });
        const poprawna = mozliwePozycje[Math.floor(Math.random() * mozliwePozycje.length)];
        const pomyloneBledne = potasuj(bledneTeksty);
        let numerBlednej = 0;
        const odpowiedzi = [0, 1, 2].map(function (pozycja) {
            return pozycja === poprawna ? poprawnyTekst : pomyloneBledne[numerBlednej++];
        });
        ostatniePozycjePoprawnychOdpowiedzi.set(material.id, poprawna);
        const kontekst = material.rokZapisu ? " (zapis z " + material.rokZapisu + " r.)" : "";
        return {
            material,
            tresc: wpis.tresc ? wpis.tresc.replace(" w opisanej tradycji", "") : "Co oznacza słowo „" + material.nazwa + "”?",
            kontekst: material.regiony.join(" · ") + kontekst,
            wyjasnienie: wpis.wyjasnienie || material.opis,
            odpowiedzi,
            poprawna
        };
    });
}

function pokazPytanie(przeniesFokus) {
    const pytanie = pytaniaRundy[numerPytania];
    udzielonoOdpowiedzi = false;
    przyciskDalej.disabled = true;
    informacjaZwrotna.replaceChildren();
    tytulPytania.textContent = pytanie.tresc;
    document.querySelector("#question-context").textContent = pytanie.kontekst;
    document.querySelector("#quiz-progress-text").textContent = "Pytanie " + (numerPytania + 1) + " z " + pytaniaRundy.length;
    pasekPostepu.max = pytaniaRundy.length;
    pasekPostepu.value = numerPytania;
    kontenerOdpowiedzi.replaceChildren();
    pytanie.odpowiedzi.forEach(function (odpowiedz, indeks) {
        const przycisk = element("button", "answer-button", "");
        przycisk.type = "button";
        const litera = element("span", "answer-letter", String.fromCharCode(65 + indeks));
        litera.setAttribute("aria-hidden", "true");
        przycisk.append(litera, element("span", "", odpowiedz));
        przycisk.addEventListener("click", function () { sprawdzOdpowiedz(indeks); });
        kontenerOdpowiedzi.appendChild(przycisk);
    });
    przyciskDalej.textContent = numerPytania === pytaniaRundy.length - 1 ? "Zobacz wynik" : "Następne pytanie";
    if (przeniesFokus) {
        tytulPytania.focus({ preventScroll: true });
        document.querySelector("#question-view").scrollIntoView({ block: "start" });
    }
}

function sprawdzOdpowiedz(wybranaOdpowiedz) {
    if (!pytaniaRundy.length || udzielonoOdpowiedzi || !Number.isInteger(wybranaOdpowiedz) || wybranaOdpowiedz < 0 || wybranaOdpowiedz > 2) return;
    udzielonoOdpowiedzi = true;
    const pytanie = pytaniaRundy[numerPytania];
    const czyPoprawna = wybranaOdpowiedz === pytanie.poprawna;
    if (czyPoprawna) punkty += 1;
    const material = pytanie.material;
    if (!czyPoprawna) bledneOdpowiedzi.push({
        material,
        pytanie: pytanie.tresc,
        wybrana: pytanie.odpowiedzi[wybranaOdpowiedz],
        odpowiedz: pytanie.odpowiedzi[pytanie.poprawna]
    });
    informacjaZwrotna.className = "feedback " + (czyPoprawna ? "feedback-correct" : "feedback-incorrect");
    informacjaZwrotna.replaceChildren(
        element("p", "feedback-verdict", czyPoprawna ? "Dobra odpowiedź." : "Tym razem nie."),
        element("p", "feedback-answer", "Poprawna odpowiedź: " + pytanie.odpowiedzi[pytanie.poprawna])
    );
    const wyjasnienie = pytanie.wyjasnienie || ("Takie znaczenie podaje wskazane źródło. " + pytanie.kontekst + ".");
    informacjaZwrotna.appendChild(element("p", "feedback-explanation", wyjasnienie));
    informacjaZwrotna.appendChild(linkDoZrodla(material, material.zrodla[0]));
    informacjaZwrotna.appendChild(element("span", "feedback-location", material.lokalizator));
    kontenerOdpowiedzi.querySelectorAll("button").forEach(function (przycisk, indeks) {
        przycisk.disabled = true;
        if (indeks === pytanie.poprawna) {
            przycisk.classList.add("correct");
            const oznaczenie = element("span", "answer-feedback-mark answer-feedback-mark-correct", "");
            oznaczenie.setAttribute("aria-hidden", "true");
            przycisk.appendChild(oznaczenie);
        } else if (indeks === wybranaOdpowiedz) {
            przycisk.classList.add("incorrect");
            const oznaczenie = element("span", "answer-feedback-mark answer-feedback-mark-incorrect", "");
            oznaczenie.setAttribute("aria-hidden", "true");
            przycisk.appendChild(oznaczenie);
        }
    });
    pasekPostepu.value = numerPytania + 1;
    przyciskDalej.disabled = false;
    informacjaZwrotna.focus({ preventScroll: true });
    informacjaZwrotna.scrollIntoView({ block: "nearest" });
}

function pokazWynik() {
    document.querySelector("#question-view").hidden = true;
    document.querySelector("#result-view").hidden = false;
    const tytul = document.querySelector("#result-title");
    tytul.textContent = "Twój wynik: " + punkty + "/" + pytaniaRundy.length;
    let komentarz = "Zajrzyj do słownika i opisów tradycji, a potem spróbuj ponownie.";
    if (punkty === pytaniaRundy.length) {
        komentarz = "Wszystko się zgadza! Zapytaj bliskich o słowa, które pamiętają.";
    } else if (punkty >= pytaniaRundy.length / 2) {
        komentarz = "Sporo już wiesz! Możesz wrócić do materiałów albo zagrać ponownie.";
    }
    document.querySelector("#result-comment").textContent = komentarz;
    const lista = document.querySelector("#review-list");
    lista.replaceChildren();
    document.querySelector("#quiz-review").hidden = bledneOdpowiedzi.length === 0;
    bledneOdpowiedzi.forEach(function (wpis) {
        const pozycja = element("li", "", "");
        const link = element("a", "review-link", wpis.material.nazwa);
        link.href = adresMaterialu(wpis.material);
        pozycja.append(
            link,
            element("p", "review-question", wpis.pytanie),
            element("p", "review-chosen", "Twoja odpowiedź: " + wpis.wybrana),
            element("p", "review-answer", "Poprawna odpowiedź: " + wpis.odpowiedz),
            element("p", "word-region", wpis.material.regiony.join(" · "))
        );
        if (wpis.material.rokZapisu) pozycja.appendChild(element("p", "historical-label", "Zapis historyczny · " + wpis.material.rokZapisu));
        lista.appendChild(pozycja);
    });
    tytul.focus();
}

function nastepnePytanie() {
    if (!udzielonoOdpowiedzi) return;
    if (numerPytania < pytaniaRundy.length - 1) {
        numerPytania += 1;
        pokazPytanie(true);
    } else {
        pokazWynik();
    }
}

function resetujQuiz(przeniesFokus = true) {
    wyczyscPowtorke();
    pytaniaRundy = losujPytania(wyborRegionuQuizu.value, wyborTematuQuizu.value);
    numerPytania = 0;
    punkty = 0;
    udzielonoOdpowiedzi = false;
    document.querySelector("#question-view").hidden = pytaniaRundy.length === 0;
    document.querySelector("#result-view").hidden = true;
    document.querySelector("#quiz-ready").hidden = true;
    document.querySelector("#quiz-empty").hidden = pytaniaRundy.length !== 0;
    aktualizujPuleQuizu();
    if (pytaniaRundy.length) pokazPytanie(przeniesFokus);
}

function aktualizujPuleQuizu() {
    const ile = dostepnePytania(wyborRegionuQuizu.value, wyborTematuQuizu.value).length;
    let opis = "Dostępne pytania: " + ile + ". Runda: " + Math.min(ile, liczbaPytanWRundzie) + ".";
    if (ile > 0 && ile < liczbaPytanWRundzie) opis += " Ten zestaw ma mniej niż 10 pytań. Użyjemy wszystkich, bez powtórzeń.";
    if (ile === 0) opis += " Zmień region lub temat.";
    document.querySelector("#quiz-pool-info").textContent = opis;
    document.querySelector("#start-quiz").disabled = ile === 0;
    return ile;
}

function zmienUstawieniaQuizu() {
    wyczyscPowtorke();
    pytaniaRundy = [];
    punkty = 0;
    numerPytania = 0;
    udzielonoOdpowiedzi = false;
    kontenerOdpowiedzi.replaceChildren();
    informacjaZwrotna.replaceChildren();
    pasekPostepu.value = 0;
    przyciskDalej.disabled = true;
    const ile = aktualizujPuleQuizu();
    document.querySelector("#question-view").hidden = true;
    document.querySelector("#result-view").hidden = true;
    document.querySelector("#quiz-ready").hidden = ile === 0;
    document.querySelector("#quiz-empty").hidden = ile !== 0;
}

function wyczyscPowtorke() {
    bledneOdpowiedzi = [];
    document.querySelector("#review-list").replaceChildren();
    document.querySelector("#quiz-review").hidden = true;
}

document.querySelectorAll(".logo-frame img").forEach(function (obrazek) {
    function aktualizujLogo() {
        const poprawnyObrazek = obrazek.naturalWidth > 0;
        obrazek.hidden = !poprawnyObrazek;
        obrazek.previousElementSibling.hidden = poprawnyObrazek;
    }
    obrazek.addEventListener("load", aktualizujLogo);
    obrazek.addEventListener("error", aktualizujLogo);
    if (obrazek.complete) aktualizujLogo();
});

const slowa = materialy.filter(function (material) { return material.typ === "Słowo"; });

if (kontenerKart) {
    poleSzukania.addEventListener("input", zmienFiltry);
    wyborRegionu.addEventListener("change", zmienFiltry);
    if (wyborKategorii) wyborKategorii.addEventListener("change", zmienFiltry);
    wyborSortowania.addEventListener("change", zmienFiltry);
    document.querySelector("#clear-filters").addEventListener("click", wyczyscFiltry);
    document.querySelector("#show-all").addEventListener("click", wyczyscFiltry);
    if (rodzajStrony === "slownik") document.querySelector("#random-word").addEventListener("click", losujSlowo);
    przyciskWiecej.addEventListener("click", pokazWiecej);
    const opis = rodzajStrony === "slownik"
        ? slowa.length + " udokumentowanych haseł, w tym " + slowa.filter(function (m) { return m.rokZapisu; }).length + " zapisów historycznych."
        : materialyStrony.length + " opisów tradycji i zwyczajów.";
    document.querySelector("#database-summary").textContent = opis;
    przygotujFiltry();
    odczytajAdresWpisu();
    window.addEventListener("hashchange", function () { odczytajAdresWpisu(true); });
}

if (rodzajStrony === "quiz") {
    const regiony = [...new Set(materialy.flatMap(function (m) { return m.regiony; }))];
    dodajOpcje(wyborRegionuQuizu, regiony);
    wyborRegionuQuizu.addEventListener("change", zmienUstawieniaQuizu);
    wyborTematuQuizu.addEventListener("change", zmienUstawieniaQuizu);
    document.querySelector("#quiz-settings").addEventListener("submit", function (zdarzenie) {
        zdarzenie.preventDefault();
        resetujQuiz();
    });
    przyciskDalej.addEventListener("click", nastepnePytanie);
    document.querySelector("#restart-quiz").addEventListener("click", function () { resetujQuiz(); });
    document.querySelector("#quiz-bank-count").textContent = "Baza: " + bazaPytan.length + " pytań. W rundzie maksymalnie 10, bez powtórzeń.";
    zmienUstawieniaQuizu();
}

if (document.querySelector("#sources-list")) pokazZrodla();
if (document.querySelector("#site-summary")) {
    document.querySelector("#site-summary").textContent = slowa.length + " haseł · " + (materialy.length - slowa.length) + " tradycji · " + bazaPytan.length + " pytań";
}

let wyroznioneSlowa = ["bimba", "ryczka", "klekotun"];

function pokazWyroznioneSlowa() {
    const wybor = document.querySelector("#featured-words");
    wybor.replaceChildren();
    wyroznioneSlowa.forEach(function (id) {
        const material = materialy.find(function (m) { return m.id === id; });
        const wpis = element("article", "word-preview", "");
        const naglowek = element("h3", "", "");
        const link = element("a", "", material.nazwa);
        link.href = adresMaterialu(material);
        naglowek.appendChild(link);
        wpis.append(naglowek, element("p", "word-meaning", material.znaczenie), element("p", "word-region", material.regiony.join(" · ")), linkDoZrodla(material, material.zrodla[0]));
        if (material.rokZapisu) wpis.insertBefore(element("p", "historical-label", "Zapis historyczny · " + material.rokZapisu), wpis.lastElementChild);
        wybor.appendChild(wpis);
    });
}

if (rodzajStrony === "start") {
    pokazWyroznioneSlowa();
    document.querySelector("#shuffle-words").addEventListener("click", function () {
        const pula = slowa.filter(function (m) { return !wyroznioneSlowa.includes(m.id); });
        wyroznioneSlowa = potasuj(pula).slice(0, 3).map(function (m) { return m.id; });
        pokazWyroznioneSlowa();
        document.querySelector("#words-status").textContent = "Nowe słowa: " + wyroznioneSlowa.map(function (id) { return slowa.find(function (m) { return m.id === id; }).nazwa; }).join(", ") + ".";
    });
    const tradycja = materialy.find(function (m) { return m.id === "haft-zukowski"; });
    const naglowek = element("h2", "", tradycja.nazwa);
    naglowek.id = "tradition-title";
    const blok = document.querySelector("#featured-tradition");
    blok.append(naglowek, element("p", "word-meaning", tradycja.znaczenie), element("p", "word-region", tradycja.regiony.join(" · ")), element("p", "feature-description", tradycja.opis), linkDoZrodla(tradycja, tradycja.zrodla[0]));
}

const przyciskMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector("#main-nav");
if (przyciskMenu && menu) {
    document.documentElement.classList.add("nav-enhanced");
    const telefon = window.matchMedia("(max-width: 760px)");
    function zamknijMenu() {
        menu.classList.remove("is-open");
        przyciskMenu.setAttribute("aria-expanded", "false");
        przyciskMenu.textContent = "Menu";
    }
    function dopasujMenu() {
        przyciskMenu.hidden = !telefon.matches;
        zamknijMenu();
    }
    przyciskMenu.addEventListener("click", function () {
        const otwarte = menu.classList.toggle("is-open");
        przyciskMenu.setAttribute("aria-expanded", String(otwarte));
        przyciskMenu.textContent = otwarte ? "Zamknij" : "Menu";
    });
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && menu.classList.contains("is-open")) {
            zamknijMenu();
            przyciskMenu.focus();
        }
    });
    telefon.addEventListener("change", dopasujMenu);
    dopasujMenu();
}
