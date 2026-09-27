const players = [
    {
        id: "osimhen",
        name: "Victor Osimhen",
        position: "Santrfor",
        image: "images/victor.jpg"
    },
    {
        id: "torreira",
        name: "Lucas Torreira",
        position: "Orta Saha",
        image: "images/lucas.jpg"
    },
    {
        id: "leao",
        name: "Rafael Leão",
        position: "Sol Kanat",
        image: "images/leao.jpg"
    },
    {
        id: "ugurcan",
        name: "Uğurcan Çakır",
        position: "Kaleci",
        image: "images/cakır.jpg"
    },
    {
        id: "icardi",
        name: "Mauro Icardi",
        position: "Kaptan / Forvet",
        image: "images/mauro.jpg"
    }
];

const products = {
    osimhen: [
        {
            title: "Osimhen Özel Karbon Koruma Maskesi",
            price: "899 TL",
            image: "images/victor1.jpg"
        },
        {
            title: "Osimhen 45 Numara Parçalı İç Saha Forması",
            price: "2.499 TL",
            image: "images/victor2.jpg"
        },
        {
            title: "Osimhen Gol Sevinci Özel Koleksiyon Tişörtü",
            price: "599 TL",
            image: "images/victor3.jpg"
        }
    ],
    torreira: [
        {
            title: "Torreira 34 Numara Klasik Maç Forması",
            price: "2.499 TL",
            image: "images/lucas1.jpg"
        },
        {
            title: "Torreira Orta Saha Koleksiyon Atkısı",
            price: "429 TL",
            image: "images/lucas2.jpg"
        },
        {
            title: "Torreira Savaşçı Ruh Özel Sweatshirt",
            price: "1.199 TL",
            image: "images/lucas3.jpg"
        }
    ],
    leao: [
        {
            title: "Leão Hız Serisi Özel Deplasman Forması",
            price: "2.499 TL",
            image: "images/leao1.jpg"
        },
        {
            title: "Leão Streetwear Oversize Hoodie",
            price: "1.399 TL",
            image: "images/leao2.jpg"
        },
        {
            title: "Leão İmza Serisi Profesyonel Krampon",
            price: "3.799 TL",
            image: "images/leao3.jpg"
        }
    ],
    ugurcan: [
        {
            title: "Uğurcan Pro Grip Kaleci Eldiveni",
            price: "1.899 TL",
            image: "images/cakır1.jpg"
        },
        {
            title: "Uğurcan Özel Seri Siyah Kaleci Forması",
            price: "2.499 TL",
            image: "images/cakır2.jpg"
        },
        {
            title: "Uğurcan Kaptanlık Antrenman Eşofman Altı",
            price: "999 TL",
            image: "images/cakır3.jpg"
        }
    ],
    icardi: [
        {
            title: "Icardi 9 Numara İkonik Parçalı Forma",
            price: "2.499 TL",
            image: "images/mauro1.jpg"
        },
        {
            title: "Aşkın Olayım Şampiyonluk Koleksiyon Atkısı",
            price: "449 TL",
            image: "images/mauro2.jpg"
        },
        {
            title: "Icardi İkonik Sevinç Tasarımlı Polar",
            price: "1.249 TL",
            image: "images/mauro3.jpg"
        }
    ]
};

const heroSection = document.getElementById("heroSection");
const playersSelectionGrid = document.getElementById("playersSelectionGrid");
const detailSection = document.getElementById("detailSection");
const selectedPlayerBanner = document.getElementById("selectedPlayerBanner");
const productsContainer = document.getElementById("productsContainer");
const backToHomeBtn = document.getElementById("backToHomeBtn");
const homeLogo = document.getElementById("homeLogo");
const homeLink = document.getElementById("homeLink");

function renderHomePage() {
    detailSection.style.display = "none";
    heroSection.style.display = "block";
    playersSelectionGrid.style.display = "grid";

    playersSelectionGrid.innerHTML = players.map(player => `
        <div class="player-card" onclick="openPlayerProducts('${player.id}')">
            <img src="${player.image}" alt="${player.name}" class="player-card-image">
            <div class="player-card-info">
                <h3>${player.name}</h3>
                <span>${player.position}</span>
            </div>
        </div>
    `).join("");
}

function openPlayerProducts(playerId) {
    const player = players.find(p => p.id === playerId);
    const playerProducts = products[playerId] || [];

    heroSection.style.display = "none";
    playersSelectionGrid.style.display = "none";
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

backToHomeBtn.addEventListener("click", renderHomePage);
homeLogo.addEventListener("click", (e) => {
    e.preventDefault();
    renderHomePage();
});
homeLink.addEventListener("click", (e) => {
    e.preventDefault();
    renderHomePage();
});

renderHomePage();