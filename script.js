// OYUNCU VE ÜRÜN VERİLERİ (17 OYUNCU)
const players = [
    { id: "osimhen", name: "Victor Osimhen", position: "Santrfor", image: "images/victor.jpg" },
    { id: "torreira", name: "Lucas Torreira", position: "Orta Saha", image: "images/lucas.jpg" },
    { id: "leao", name: "Rafael Leão", position: "Sol Kanat", image: "images/leao.jpg" },
    { id: "ugurcan", name: "Uğurcan Çakır", position: "Kaleci", image: "images/cakır.jpg" },
    { id: "icardi", name: "Mauro Icardi", position: "Santrfor", image: "images/mauro.jpg" },
    { id: "lemina", name: "Mario Lemina", position: "Orta Saha", image: "images/lemina.jpg" },
    { id: "davinson", name: "Davinson Sánchez", position: "Stoper", image: "images/davinson.jpg" },
    { id: "jakobs", name: "Ismail Jakobs", position: "Sol Bek", image: "images/jakobs.jpg" },
    { id: "baris", name: "Barış Alper Yılmaz", position: "Sağ / Sol Kanat", image: "images/baris.jpg" },
    { id: "yunus", name: "Yunus Akgün", position: "Sağ Kanat, On Numara", image: "images/yunus.jpg" },
    { id: "sane", name: "Leroy Sané", position: "Sağ Kanat, On Numara", image: "images/sane.jpg" }
];

const squadOnlyPlayers = [
    { name: "Abdülkerim Bardakcı", position: "Stoper", image: "images/bardakcı.jpg" },
    { name: "Roland Sallai", position: "Sağ Bek", image: "images/sallai.jpg" },
    { name: "Aleksey Batrakov", position: "On Numara", image: "images/batrakov.jpg" },
    { name: "Deniz Gül", position: "Santrfor", image: "images/deniz.jpg" },
    { name: "Jankat Yılmaz", position: "Kaleci", image: "images/jankat.jpg" },
    { name: "Gabriel Sara", position: "Orta Saha", image: "images/sara.jpg" },
    { name: "Lionel Messi", position: "Santrfor, On Numara, Sağ Kanat", image: "images/messi.jpg" },
    { name: "Cristiano Ronaldo", position: "Santrfor, Sol Kanat", image: "images/ronaldo.jpg" },
    { name: "Erling Haaland", position: "Santrfor", image: "images/erling.jpg" },
    { name: "Lamine Yamal", position: "Sağ Kanat, On Numara", image: "images/yamal.jpg" },
    { name: "Kylian Mbappe", position: "Sol Kanat, Santrfor", image: "images/mbappe.jpg" },
    { name: "Joao Neves", position: "Orta Saha", image: "images/neves.jpg" },
    { name: "Van Dijk", position: "Stoper", image: "images/virgil.jpg" },
    { name: "Courtois", position: "Kaleci", image: "images/courtois.jpg" },
    { name: "Rapinha", position: "Sol Kanat, Santrfor, On Numara", image: "images/raphinha.jpg" },
    { name: "De Ketelaere", position: "On Numara, Sağ Kanat, Santrfor", image: "images/charles.jpg" },
    { name: "Bruno Ferndandes", position: "On Numara, Orta Saha", image: "images/bruno.jpg" },
    { name: "Ousmane Dembele", position: "Santrfor, Sağ Kanat", image: "images/dembele.jpg" },
    { name: "Pau Cubarsi", position: "Stoper", image: "images/cubarsi.jpg" },
    { name: "Federico Dimarco", position: "Sol Bek", image: "images/dimarco.jpg" },
    { name: "Denzel Dumfries", position: "Sağ Bek", image: "images/dumfries.jpg" },
    { name: "Willian Pacho", position: "Stoper", image: "images/pacho.jpg" },
    { name: "Gabriel Maghalaes", position: "Stoper", image: "images/Gabriel.jpg" },
    { name: "Jurrien Timber", position: "Stoper, Sağ Bek", image: "images/timber.jpg" },
    { name: "Marc Cucurella", position: "Sol Bek", image: "images/cucurella.jpg" },
    { name: "Gregor Kobel", position: "Kaleci", image: "images/kobel.jpg" },
    { name: "Kimmich", position: "Orta Saha, Sağ Bek", image: "images/kimmich.jpg" },
    { name: "Valverde", position: "Orta Saha", image: "images/valverde.jpg" },
    { name: "Unai Simon", position: "Kaleci", image: "images/simon.jpg" },
    { name: "Arda Güler", position: "On Numara, Sağ Kanat", image: "images/arda.jpg" },
    { name: "Kenan Yıldız", position: "Sol Kanat", image: "images/kenan.jpg" },
    { name: "Çalhanoğlu", position: "Orta Saha", image: "images/hakan.jpg" },
    { name: "Gyökeres", position: "Santrfor", image: "images/gyokeres.jpg" },
    { name: "Vitinha", position: "Orta Saha", image: "images/vitinha.jpg" },
    { name: "Noa Lang", position: "Sol Kanat, On Numara", image: "images/lang.jpg" },
    { name: "Szoboszlai", position: "Orta Saha, On Numara", image: "images/szobo.jpg" },
    { name: "McTominay", position: "Orta Saha", image: "images/mctominay.jpg" },
    { name: "Enzo Fernandes", position: "Orta Saha", image: "images/enzo.jpg" },
    { name: "Bellingham", position: "Orta Saha, On Numara", image: "images/jude.jpg" },
    { name: "Desire Doue", position: "Sol Kanat, Sağ Kanat", image: "images/doue.jpg" },
    { name: "Kvaratskhelia", position: "Sol Kanat", image: "images/kvara.jpg" },
    { name: "Ryan Cherki", position: "Sağ Kanat, On Numara", image: "images/cherki.jpg" },
    { name: "Phil Foden", position: "Sağ Kanat, On Numara", image: "images/foden.jpg" },
    { name: "Donnarumma", position: "Kaleci", image: "images/donnarumma.jpg" },
    { name: "Cancelo", position: "Sol Bek, Sağ Bek", image: "images/cancelo.jpg" },
    { name: "Joao Felix", position: "On Numara", image: "images/felix.jpg" },
    { name: "Paolo Dybala", position: "On Numara, Santrfor", image: "images/dybala.jpg" },
    { name: "Neymar", position: "On Numara, Sol Kanat", image: "images/neymar.jpg" },
    { name: "Vinicius", position: "Sol Kanat", image: "images/vini.jpg" },
    { name: "Rashford", position: "Sol Kanat, Santrfor", image: "images/rashford.jpg" },
    { name: "De Bruyne", position: "Orta Saha, On Numara", image: "images/kevin.jpg" },
    { name: "Florian Wirtz", position: "Orta Saha, On Numara", image: "images/wirtz.jpg" },
    { name: "Michael Olise", position: "On Numara, Sağ Kanat", image: "images/olise.jpg" },
    { name: "Harry Kane", position: "Santrfor", image: "images/kane.jpg" },



];

// Slot ID'lerini mevkilerle eşleştiren harita
const slotPositionMap = {
    gk: ["Kaleci"],
    cb1: ["Stoper"],
    cb2: ["Stoper"],
    lb: ["Sol Bek"],
    rb: ["Sağ Bek"],
    cm1: ["Orta Saha"],
    cm2: ["Orta Saha"],
    cam: ["On Numara"],
    lw: ["Sol Kanat"],
    rw: ["Sağ Kanat"],
    st: ["Santrfor"]
};

const products = {
    osimhen: [
        { title: "Osimhen Özel Karbon Koruma Maskesi", price: "899 TL", image: "images/victor1.jpg" },
        { title: "Osimhen 45 Numara Parçalı İç Saha Forması", price: "3.499 TL", image: "images/victor2.jpg" },
        { title: "Osimhen Gol Sevinci Özel Koleksiyon Tişörtü", price: "1.500 TL", image: "images/victor3.jpg" }
    ],
    torreira: [
        { title: "Torreira 34 Numara Klasik Maç Forması", price: "3.499 TL", image: "images/lucas1.jpg" },
        { title: "Torreira İmzalı Özel Forma", price: "8.999 TL", image: "images/lucas2.jpg" },
        { title: "Torreira Şampiyonlar Ligi Forması", price: "5.500 TL", image: "images/lucas3.jpg" }
    ],
    leao: [
        { title: "Leão Hız Şampiyonlar Ligi Forması", price: "5.500 TL", image: "images/leao1.jpg" },
        { title: "Leão Streetwear Oversize Hoodie", price: "1.399 TL", image: "images/leao2.jpg" },
        { title: "Leão İmza Serisi Profesyonel Krampon", price: "3.799 TL", image: "images/leao3.jpg" }
    ],
    ugurcan: [
        { title: "Uğurcan Pro Grip Kaleci Eldiveni", price: "1.899 TL", image: "images/cakır1.jpg" },
        { title: "Uğurcan Özel Seri Siyah Kaleci Forması", price: "2.499 TL", image: "images/cakır2.jpg" },
        { title: "Uğurcan Kaptanlık Antrenman Eşofman Altı", price: "999 TL", image: "images/cakır3.jpg" }
    ],
    icardi: [
        { title: "Icardi 9 Numara İkonik Parçalı Forma", price: "2.499 TL", image: "images/mauro1.jpg" },
        { title: "Şampiyonlar Ligi Golü Özel Seri", price: "449 TL", image: "images/mauro2.jpg" },
        { title: "Icardi İkonik Sevinç Tasarımlı Polar", price: "1.249 TL", image: "images/mauro3.jpg" }
    ],
    lemina: [
        { title: "Lemina Özel Seri Parçalı Maç Forması", price: "2.499 TL", image: "images/lemina1.jpg" },
        { title: "Mario Lemina Tank Modu Antrenman Tişörtü", price: "649 TL", image: "images/lemina2.jpg" },
        { title: "Lemina Orta Saha Özel Bileklik & Aksesuar Seti", price: "349 TL", image: "images/lemina3.jpg" }
    ],
    davinson: [
        { title: "Davinson Sánchez 6 Numara Deplasman Forması", price: "2.499 TL", image: "images/davinson1.jpg" },
        { title: "Davinson 'El Patron' Özel Koleksiyon Sweatshirt", price: "1.299 TL", image: "images/davinson2.jpg" },
        { title: "Davinson Şampiyonlar Ligi İmzalı Forma", price: "8.499 TL", image: "images/davinson3.jpg" }
    ],
    jakobs: [
        { title: "Jakobs Hız & Güç Serisi Antrenman Forması", price: "1.899 TL", image: "images/jakobs1.jpg" },
        { title: "Jakobs Sol Kulvar Rüzgarlık Ceket", price: "1.599 TL", image: "images/jakobs2.jpg" },
        { title: "Jakobs İmzalı Maç Forması", price: "849 TL", image: "images/jakobs3.jpg" }
    ],
    baris: [
        { title: "Barış Alper Şampiyonluk Özel Seri", price: "2.499 TL", image: "images/baris1.jpg" },
        { title: "Barış Alper Güç & Dinamizm", price: "699 TL", image: "images/baris2.jpg" },
        { title: "BAY A Milli Takım Özel", price: "1.449 TL", image: "images/baris3.jpg" }
    ],
    yunus: [
        { title: "Yunus Akgün 11 Numara İmzalı Şampiyonluk Forması", price: "2.499 TL", image: "images/yunus1.jpg" },
        { title: "Yunus Akgün Şampiyonlar Ligi Özel", price: "5.499 TL", image: "images/yunus2.jpg" },
        { title: "Yunus Altyapıdan Zirveye Özel Seri Hoodie", price: "1.299 TL", image: "images/yunus3.jpg" }
    ],
    sane: [
        { title: "Leroy Sané Hız Serisi Özel 3. Alternatif Forma", price: "2.699 TL", image: "images/sane1.jpg" },
        { title: "Sané 10 Numara Forma", price: "4.199 TL", image: "images/sane2.jpg" },
        { title: "Sané Antrenman Yelekleri", price: "549 TL", image: "images/sane3.jpg" }
    ]
};

// DOM ELEMANLARI
const heroSection = document.getElementById("heroSection");
const playersSelectionGrid = document.getElementById("playersSelectionGrid");
const detailSection = document.getElementById("detailSection");
const squadSection = document.getElementById("squadSection");
const draftSection = document.getElementById("draftSection");

const selectedPlayerBanner = document.getElementById("selectedPlayerBanner");
const productsContainer = document.getElementById("productsContainer");
const searchInput = document.getElementById("playerSearchInput");

const homeLogo = document.getElementById("homeLogo");
const homeLink = document.getElementById("homeLink");
const squadBuilderLink = document.getElementById("squadBuilderLink");
const galaDraftLink = document.getElementById("galaDraftLink");
const collectionsLink = document.getElementById("collectionsLink");

const backToHomeBtn = document.getElementById("backToHomeBtn");
const backFromSquadBtn = document.getElementById("backFromSquadBtn");
const backFromDraftBtn = document.getElementById("backFromDraftBtn");
const resetDraftBtn = document.getElementById("resetDraftBtn");

const playerModal = document.getElementById("playerModal");
const modalTitle = document.getElementById("modalTitle");
const modalPlayersList = document.getElementById("modalPlayersList");

let currentSelectedSlotId = null;
let currentModalMode = "squad"; // "squad" veya "draft"
let selectedDraftPlayers = new Set();

// TÜM BÖLÜMLERİ GİZLEME YARDIMCISI
function hideAllSections() {
    heroSection.style.display = "none";
    playersSelectionGrid.style.display = "none";
    detailSection.style.display = "none";
    squadSection.style.display = "none";
    draftSection.style.display = "none";
}

// ANA SAYFA
function renderHomePage(e) {
    if (e) e.preventDefault();
    hideAllSections();
    heroSection.style.display = "block";
    playersSelectionGrid.style.display = "grid";

    const filterText = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const filteredPlayers = players.filter(player => 
        player.name.toLowerCase().includes(filterText) || 
        player.position.toLowerCase().includes(filterText)
    );

    playersSelectionGrid.innerHTML = filteredPlayers.map(player => `
        <div class="player-card" onclick="openPlayerProducts('${player.id}')">
            <img src="${player.image}" alt="${player.name}" class="player-card-image">
            <div class="player-card-info">
                <h3>${player.name}</h3>
                <span>${player.position}</span>
            </div>
        </div>
    `).join("");

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// OYUNCU KOLEKSİYON DETAYI
function openPlayerProducts(playerId) {
    const player = players.find(p => p.id === playerId);
    const playerProducts = products[playerId] || [];

    hideAllSections();
    detailSection.style.display = "block";

    selectedPlayerBanner.innerHTML = `
        <img src="${player.image}" alt="${player.name}" class="banner-avatar">
        <div class="banner-text">
            <h2>${player.name} Özel Koleksiyonu</h2>
            <p>${player.position} &bull; Toplam ${playerProducts.length} Özel Ürün</p>
        </div>
    `;

    productsContainer.innerHTML = playerProducts.map(prod => `
        <article class="product-card">
            <img src="${prod.image}" alt="${prod.title}" class="product-image">
            <div class="product-content">
                <span class="product-player-tag">${player.name} Koleksiyonu</span>
                <h3 class="product-title">${prod.title}</h3>
                <p class="product-price">${prod.price}</p>
                <button class="buy-btn">İncele & Satın Al</button>
            </div>
        </article>
    `).join("");

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// KADRO KURMA SAYFASI
function renderSquadPage(e) {
    if (e) e.preventDefault();
    hideAllSections();
    squadSection.style.display = "flex";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// GALADRAFT SAYFASI
function renderDraftPage(e) {
    if (e) e.preventDefault();
    hideAllSections();
    draftSection.style.display = "flex";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- KADRO KURUCU (SERBEST MOD) ---
function openSquadModal(slotId) {
    currentSelectedSlotId = slotId;
    currentModalMode = "squad";
    modalTitle.innerText = "Mevkiye Oyuncu Seç";
    modalPlayersList.className = "";

    const allSquadPlayers = [...players, ...squadOnlyPlayers];

    modalPlayersList.innerHTML = allSquadPlayers.map(player => `
        <div class="modal-player-item" onclick="assignPlayerToSquad('${player.name}', '${player.image}')">
            <img src="${player.image}" alt="${player.name}" onerror="this.src='images/default.jpg'">
            <div>
                <strong style="color:#ffffff;">${player.name}</strong>
                <p style="font-size:12px; color:#fdb913;">${player.position}</p>
            </div>
        </div>
    `).join("");

    playerModal.style.display = "flex";
}

function assignPlayerToSquad(playerName, playerImage) {
    if (currentSelectedSlotId) {
        const slotEl = document.getElementById(`squad-slot-${currentSelectedSlotId}`);
        if (slotEl) slotEl.innerText = playerName;

        const slotImgEl = document.getElementById(`squad-img-${currentSelectedSlotId}`);
        if (slotImgEl && playerImage) {
            slotImgEl.src = playerImage;
            slotImgEl.style.display = "block";
        }
    }
    closePlayerModal();
}

// --- GALADRAFT (3 KARTLI & KİLİTLEMELİ MOD) ---
function openDraftModal(slotId) {
    currentSelectedSlotId = slotId;
    currentModalMode = "draft";
    modalTitle.innerText = "GalaDraft: Mevkiine Uygun Adayı Seç";
    modalPlayersList.className = "draft-cards-container";

    const allSquadPlayers = [...players, ...squadOnlyPlayers];
    
    // Henüz seçilmemiş olanlar
    const availablePlayers = allSquadPlayers.filter(p => !selectedDraftPlayers.has(p.name));

    // Tıklanan slotun kabul ettiği mevkiler
    const allowedPositions = slotPositionMap[slotId] || [];

    // O mevkide oynayabilen boşta oyuncuları filtrele
    let candidatesPool = availablePlayers.filter(p => 
        allowedPositions.some(pos => p.position.toLowerCase().includes(pos.toLowerCase()))
    );

    // Eğer o mevkide hiç oyuncu kalmadıysa havuzdaki diğer boştaki oyuncuları getir (tıkanmayı önler)
    if (candidatesPool.length === 0) {
        candidatesPool = availablePlayers;
    }

    if (candidatesPool.length === 0) {
        alert("Draft havuzunda seçilebilecek başka oyuncu kalmadı!");
        return;
    }

    // Karıştır ve en fazla 3 tanesini al (2 kaleci varsa 2'sini getirir, hata vermez)
    const shuffled = [...candidatesPool].sort(() => 0.5 - Math.random());
    const draftCandidates = shuffled.slice(0, 3);

    modalPlayersList.innerHTML = draftCandidates.map(player => `
        <div class="draft-card" onclick="assignPlayerToDraft('${player.name}', '${player.image}')">
            <img src="${player.image}" alt="${player.name}" class="draft-card-img" onerror="this.src='images/default.jpg'">
            <div class="draft-card-name">${player.name}</div>
            <div class="draft-card-pos">${player.position}</div>
        </div>
    `).join("");

    playerModal.style.display = "flex";
}

function assignPlayerToDraft(playerName, playerImage) {
    if (currentSelectedSlotId) {
        const slotEl = document.getElementById(`draft-slot-${currentSelectedSlotId}`);
        if (slotEl) slotEl.innerText = playerName;

        const slotImgEl = document.getElementById(`draft-img-${currentSelectedSlotId}`);
        if (slotImgEl && playerImage) {
            slotImgEl.src = playerImage;
            slotImgEl.style.display = "block";
        }

        selectedDraftPlayers.add(playerName);

        // Mevkiyi kilitle (tekrar tıklanamaz)
        const currentSlotContainer = slotEl.parentElement;
        if (currentSlotContainer) {
            currentSlotContainer.onclick = null;
            currentSlotContainer.style.cursor = "default";
            currentSlotContainer.style.borderColor = "#a90432";
        }
    }
    closePlayerModal();
}

function resetDraft() {
    selectedDraftPlayers.clear();

    const slots = ["st", "lw", "cam", "rw", "cm1", "cm2", "lb", "cb1", "cb2", "rb", "gk"];

    slots.forEach(id => {
        const textEl = document.getElementById(`draft-slot-${id}`);
        const imgEl = document.getElementById(`draft-img-${id}`);
        if (textEl) {
            textEl.innerText = "Draft";
            const slotContainer = textEl.parentElement;
            slotContainer.onclick = () => openDraftModal(id);
            slotContainer.style.cursor = "pointer";
            slotContainer.style.borderColor = "#fdb913";
        }
        if (imgEl) {
            imgEl.src = "";
            imgEl.style.display = "none";
        }
    });
}

function closePlayerModal() {
    playerModal.style.display = "none";
    currentSelectedSlotId = null;
}

// EVENT LISTENERS
if (searchInput) searchInput.addEventListener("input", renderHomePage);
if (homeLogo) homeLogo.addEventListener("click", renderHomePage);
if (homeLink) homeLink.addEventListener("click", renderHomePage);
if (collectionsLink) collectionsLink.addEventListener("click", renderHomePage);
if (squadBuilderLink) squadBuilderLink.addEventListener("click", renderSquadPage);
if (galaDraftLink) galaDraftLink.addEventListener("click", renderDraftPage);

if (backToHomeBtn) backToHomeBtn.addEventListener("click", renderHomePage);
if (backFromSquadBtn) backFromSquadBtn.addEventListener("click", renderHomePage);
if (backFromDraftBtn) backFromDraftBtn.addEventListener("click", renderHomePage);
if (resetDraftBtn) resetDraftBtn.addEventListener("click", resetDraft);

// Başlangıç
renderHomePage();