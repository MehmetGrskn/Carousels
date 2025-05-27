// ==== CSS injection ====
const injectStyles = () => {
  // Font Awesome CDN'ini ekleyelim
  const fontAwesomeLink = document.createElement('link');
  fontAwesomeLink.rel = 'stylesheet';
  fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
  document.head.appendChild(fontAwesomeLink);

  const styles = `
    * {
      box-sizing: border-box;
    }
    body {
      font-family: "Open Sans", sans-serif;
      margin: 0;
    }

    .custom-product-carousel-container {
      background-color: #fff8f0;
      padding: 20px;
      border-radius: 15px;
      text-align: center;
      position: relative;
      max-width: 1200px;
      margin: auto 0;
    }

    .custom-section-title {
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 25px;
      color: #ff8c00;
      text-align: center;
    }

    .custom-products-wrapper {
      display: flex;
      gap: 15px; /* Bu değer JS'deki CUSTOM_CARD_GAP ile eşleşmeli */
      overflow-x: auto;
      padding: 10px 0 20px 0;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: thin;
      scrollbar-color: #ffc580 #fff0e0;
    }

    .custom-products-wrapper::-webkit-scrollbar {
      height: 8px;
    }
    .custom-products-wrapper::-webkit-scrollbar-thumb {
      background-color: #ffc580;
      border-radius: 10px;
    }
    .custom-products-wrapper::-webkit-scrollbar-track {
      background-color: #fff0e0;
    }

    /* Kartın kendisi link olacağı için text-decoration ve color'ı sıfırlayalım */
    .custom-product-card, .custom-product-card:hover, .custom-product-card:visited, .custom-product-card:active {
      text-decoration: none;
      color: inherit;
    }

    .custom-product-card {
      flex: 0 0 auto;
      scroll-snap-align: start;
      width: 240px; /* Bu değer JS'deki CUSTOM_CARD_WIDTH ile eşleşmeli */
      background: #fff;
      border: 1px solid #f0f0f0;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
      padding: 15px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      cursor: pointer; /* Link olduğunu belirtmek için */
    }
    .custom-product-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
    }

    .custom-product-image-container {
      position: relative;
      text-align: center;
      margin-bottom: 12px;
      height: 180px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .custom-product-image {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      border-radius: 8px;
    }

    .custom-favorite-btn {
      position: absolute;
      top: 8px;
      right: 8px;
      background-color: #fff;
      border: 1px solid #e0e0e0;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #ff8c00;
      font-size: 16px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      z-index: 5;
    }
    .custom-favorite-btn:hover {
      background-color: #f9f9f9;
    }
    .custom-favorite-btn.favorited {
      color: #ff4500;
    }

    .custom-badge {
      position: absolute;
      padding: 4px 8px;
      border-radius: 15px;
      font-size: 10px;
      font-weight: bold;
      color: #fff;
      text-align: center;
      line-height: 1.2;
      z-index: 3;
    }

    .custom-badge.best-seller {
      background-color: #ff8c00;
      top: 8px;
      left: 8px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 9px;
    }
    .custom-badge.best-seller i {
      font-size: 16px;
      margin-bottom: 2px;
    }

    .custom-badge.star-product {
      background-color: #ffd700;
      color: #8c5a00;
      top: 65px;
      left: 8px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 9px;
    }
    .custom-badge.star-product i {
      font-size: 16px;
      margin-bottom: 2px;
    }

    .custom-badge.video-tag {
      background-color: #6c757d;
      bottom: 8px;
      left: 8px;
      padding: 3px 10px;
      font-size: 10px;
    }
    .custom-badge.video-tag i {
      margin-right: 4px;
    }

    .custom-product-info {
      text-align: left;
      flex-grow: 1;
    }

    .custom-product-name {
      font-size: 14px;
      font-weight: 600;
      color: #333; /* Kartın color'ını inherit ettiğimiz için burada spesifik renk veriyoruz */
      margin-top: 0;
      margin-bottom: 6px;
      height: 40px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .custom-product-rating {
      font-size: 13px;
      color: #ffc107; /* Kartın color'ını inherit ettiğimiz için burada spesifik renk veriyoruz */
      margin-bottom: 8px;
    }
    .custom-product-rating .review-count {
      color: #777; /* Kartın color'ını inherit ettiğimiz için burada spesifik renk veriyoruz */
      margin-left: 5px;
      font-size: 12px;
    }

    .custom-product-price {
      font-size: 18px;
      font-weight: bold;
      color: #222; /* Kartın color'ını inherit ettiğimiz için burada spesifik renk veriyoruz */
      margin-bottom: 8px;
    }
    .custom-product-price .original-price {
      text-decoration: line-through;
      color: #999;
      font-size: 14px;
      margin-left: 8px;
    }

    .custom-discount-tag {
      background-color: #e6fffa;
      color: #00897b; /* Kartın color'ını inherit ettiğimiz için burada spesifik renk veriyoruz */
      padding: 4px 10px;
      border-radius: 15px;
      font-size: 11px;
      display: inline-block;
      margin-bottom: 12px;
    }

    .custom-add-to-cart-btn {
      background-color: #fff3e0;
      color: #ff8c00; /* Kartın color'ını inherit ettiğimiz için burada spesifik renk veriyoruz */
      border: none;
      border-radius: 20px;
      padding: 10px 15px;
      width: 100%;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      margin-top: auto;
      transition: background-color 0.2s ease;
      /* Button içinde olduğumuz için pointer-events'i auto yapalım ki tıklanabilsin */
      pointer-events: auto;
    }
    .custom-add-to-cart-btn:hover {
      background-color: #ffe0b2;
    }

    .carousel-navigation {
        position: absolute;
        top: calc(50% + 20px); /* Başlık yüksekliğini de hesaba katmak için biraz aşağı aldım */
        transform: translateY(-50%);
        background-color: #fff;
        border: 1px solid #eee;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        color: #ff8c00;
        cursor: pointer;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        z-index: 10;
    }
    .prev-arrow {
        left: -10px;
    }
    .next-arrow {
        right: -10px;
    }

    @media (max-width: 768px) {
      .custom-product-card {
        width: 200px; /* JS'deki CUSTOM_CARD_WIDTH ile eşleşmeli (eğer mobilde farklıysa) */
      }
      .custom-section-title {
        font-size: 22px;
      }
      .carousel-navigation {
        width: 30px;
        height: 30px;
        font-size: 16px;
      }
      .prev-arrow { left: 5px; }
      .next-arrow { right: 5px; }
    }
  `;
  const styleTag = document.createElement("style");
  styleTag.innerHTML = styles;
  document.head.appendChild(styleTag);
};

//  SABİT DEĞERLER #Pixel perfection
const CUSTOM_CARD_WIDTH = 240;
const CUSTOM_CARD_GAP = 15;
const CUSTOM_SCROLL_AMOUNT = CUSTOM_CARD_WIDTH + CUSTOM_CARD_GAP;

// VERİ ÇEKME VE EŞLEŞTİRME 
const fetchAndProcessProducts = async () => {
  const apiUrl = "https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json";
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const rawProducts = await response.json();

    // Veriyi mevcut kodun beklediği formata dönüştür
    return rawProducts.map(product => {
      let discountTagText = '';
      if (product.original_price && product.price < product.original_price) {
        const discountPercentage = Math.round(((product.original_price - product.price) / product.original_price) * 100);
        if (discountPercentage > 0) {
            discountTagText = `%${discountPercentage} İndirim`;
        }
      }

      return {
        id: product.id,
        name: product.name ? product.name.trim() : "İsimsiz Ürün",
        image: product.img, 
        price: product.price,
        originalPrice: product.original_price,
        url: product.url,
        rating: 0, 
        reviewCount: 0, 
        discountTagText: discountTagText,
        badges: [],
      };
    });
  } catch (error) {
    console.error("Ürün verileri çekilirken hata oluştu:", error);
    return [];
  }
};


// FAVORİLER
const toggleFavorite = (id, event) => {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  const favs = JSON.parse(localStorage.getItem("custom_favorites") || "[]");
  const index = favs.indexOf(id);
  if (index > -1) {
    favs.splice(index, 1);
  } else {
    favs.push(id);
  }
  localStorage.setItem("custom_favorites", JSON.stringify(favs));

  const button = event.target.closest('.custom-favorite-btn');
  if (button) {
    const isNowFavorited = isFavorited(id);
    button.classList.toggle("favorited", isNowFavorited);
    button.innerHTML = `<i class="${isNowFavorited ? "fas fa-heart" : "far fa-heart"}"></i>`;
  }
};

const isFavorited = (id) => {
  const favs = JSON.parse(localStorage.getItem("custom_favorites") || "[]");
  return favs.includes(id);
};

// HTML Builder
const renderCustomProducts = async () => { // async eklendi
  const container = document.getElementById("custom-product-area");
  if (!container) return;
  container.innerHTML = '<p style="text-align:center; color:#555;">Ürünler yükleniyor...</p>'; 

  const data = await fetchAndProcessProducts(); 

  if (!data || data.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:red;">Beğeneceğiniz ürünler yüklenirken bir sorun oluştu veya hiç ürün bulunamadı.</p>';
    return;
  }
  container.innerHTML = ""; 

  data.forEach((product) => {
    const card = document.createElement("a");
    card.className = "custom-product-card";
    card.href = product.url || '#';
    card.target = "_blank";
    card.rel = "noopener noreferrer";

    let badgesHTML = '';
    if (product.badges && product.badges.length > 0) {
      
      product.badges.forEach(badge => {
        badgesHTML += `<div class="custom-badge ${badge.type}">`;
        if (badge.icon) {
          badgesHTML += `<i class="${badge.icon}"></i>`;
        }
        if (badge.text) {
          badgesHTML += `<span>${badge.text}</span>`;
        }
        badgesHTML += `</div>`;
      });
    }

    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }

    let priceHTML = `${product.price.toFixed(2)} TL`;
    if (product.originalPrice && product.price < product.originalPrice) {
        priceHTML += ` <span class="original-price">${product.originalPrice.toFixed(2)} TL</span>`;
    }


    card.innerHTML = `
      <div class="custom-product-image-container">
        ${badgesHTML}
        <button class="custom-favorite-btn ${isFavorited(product.id) ? "favorited" : ""}" onclick="toggleFavorite(${product.id}, event)">
          <i class="${isFavorited(product.id) ? "fas fa-heart" : "far fa-heart"}"></i>
        </button>
        <img src="${product.image}" alt="${product.name}" class="custom-product-image" />
      </div>
      <div class="custom-product-info">
        <h3 class="custom-product-name">${product.name}</h3>
        <div class="custom-product-rating">
          ${starsHTML}
          ${product.reviewCount > 0 ? `<span class="review-count">(${product.reviewCount})</span>` : ''}
        </div>
        <p class="custom-product-price">${priceHTML}</p>
        ${product.discountTagText ? `<div class="custom-discount-tag">${product.discountTagText}</div>` : ''}
      </div>
      <button class="custom-add-to-cart-btn" onclick="event.stopPropagation(); event.preventDefault(); alert('Ürün sepete eklendi: ${product.name}');">Sepete Ekle</button>
    `;
    container.appendChild(card);
  });
};

// Klavye ile kaydırma 
const enableKeyboardScrollCustom = () => {
  document.addEventListener("keydown", (e) => {
    const container = document.getElementById("custom-product-area");
    if (!container) return;

    if (e.key === "ArrowRight") {
      e.preventDefault();
      container.scrollBy({ left: CUSTOM_SCROLL_AMOUNT, behavior: "smooth" });
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      container.scrollBy({ left: -CUSTOM_SCROLL_AMOUNT, behavior: "smooth" });
    }
  });
};

// Carousel altına yerleştir
(async () => { // async eklendi
  const targetUrl = "https://www.e-bebek.com/";
  if (window.location.href !== targetUrl) {
    console.error(`Wrong page: This script is intended for ${targetUrl}. Current page is: ${window.location.href}`);
    return;
  }

  injectStyles();
  enableKeyboardScrollCustom();

  const carouselContainer = document.createElement("div");
  carouselContainer.className = "custom-product-carousel-container";

  const title = document.createElement("h2");
  title.className = "custom-section-title";
  title.innerText = "Beğeneceğinizi Düşündüklerimiz";
  carouselContainer.appendChild(title);

  const prevArrow = document.createElement('div');
  prevArrow.className = 'carousel-navigation prev-arrow';
  prevArrow.innerHTML = '<i class="fas fa-chevron-left"></i>';
  prevArrow.onclick = () => {
    const scroller = document.getElementById("custom-product-area");
    if (scroller) scroller.scrollBy({ left: -CUSTOM_SCROLL_AMOUNT, behavior: "smooth" });
  };
  carouselContainer.appendChild(prevArrow);

  const wrapper = document.createElement("div");
  wrapper.id = "custom-product-area";
  wrapper.className = "custom-products-wrapper";
  carouselContainer.appendChild(wrapper);

  const nextArrow = document.createElement('div');
  nextArrow.className = 'carousel-navigation next-arrow';
  nextArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';
  nextArrow.onclick = () => {
    const scroller = document.getElementById("custom-product-area");
    if (scroller) scroller.scrollBy({ left: CUSTOM_SCROLL_AMOUNT, behavior: "smooth" });
  };
  carouselContainer.appendChild(nextArrow);

  const targetElementSelector = ".banner__wrapper.ins-preview-wrapper-10167";
  let insertionPoint = document.querySelector(targetElementSelector);

  if (insertionPoint && insertionPoint.parentElement) {
    insertionPoint.parentElement.insertBefore(carouselContainer, insertionPoint.nextSibling);
    await renderCustomProducts(); // await eklendi
  } else {
    console.warn(`Hedef element (${targetElementSelector}) veya parent'ı bulunamadı. Carousel body'nin sonuna ekleniyor.`);
    document.body.appendChild(carouselContainer);
    await renderCustomProducts(); // await eklendi
  }
})();