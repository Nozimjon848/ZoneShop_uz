document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.getElementById("product-container");
    const modal = new bootstrap.Modal(document.getElementById("productModal"));

    products.forEach(product => {
        const productHTML = `
            <div class="col">
                <div class="card product-card" data-id="${product.id}">
                    <span class="super-price">${product.discount}</span>
                    <span class="heart-icon">❤️</span>
                    <img src="${product.image}" alt="${product.title}" class="img-fluid">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <div class="rating">⭐ ${product.rating} (${product.reviews} ta aksiya)</div>
                        <p class="monthly-price">${product.monthly_price}</p>
                        <p class="price">${product.price}</p>
                    </div>
                </div>
            </div>
        `;
        productContainer.innerHTML += productHTML;
    });

    // Mahsulotga bosganda modal ochish
    document.querySelectorAll(".product-card").forEach(card => {
        card.addEventListener("click", function() {
            const productId = this.getAttribute("data-id");
            const product = products.find(p => p.id == productId);

            document.getElementById("modalTitle").innerText = product.title;
            document.getElementById("modalImage").src = product.image;
            document.getElementById("modalDescription").innerText = product.description;
            document.getElementById("modalPrice").innerText = product.price;
            document.getElementById("modalMonthly").innerText = product.monthly_price;

            modal.show();
        });
    });
});



const botToken = "7709442031:AAFxjewp8aqM-dagEQeYJWpADUYclzuYdRg"; // Telegram bot token
const adminId = "6376171972"; // Admin Telegram ID
const adminUsername = "@ZoneShop_uz"; // Admin Telegram @username

document.addEventListener("DOMContentLoaded", () => {
    const buyButton = document.querySelector(".modal-footer .btn-primary"); 
    const confirmPurchaseButton = document.getElementById("confirmPurchase"); 

    let selectedProduct = {};

    buyButton.addEventListener("click", () => {
        selectedProduct = {
            name: document.getElementById("modalTitle").innerText,
            price: document.getElementById("modalPrice").innerText,
            monthly: document.getElementById("modalMonthly").innerText
        };

        // Foydalanuvchi ma'lumotlari modalini ochish
        const userInfoModal = new bootstrap.Modal(document.getElementById("userInfoModal"));
        userInfoModal.show();
    });

    confirmPurchaseButton.addEventListener("click", () => {
        const userName = document.getElementById("userName").value.trim();
        const userPhone = document.getElementById("userPhone").value.trim();
        const userLocation = document.getElementById("userLocation").value.trim();

        if (!userName || !userPhone || !userLocation) {
            alert("Iltimos, barcha maydonlarni to‘ldiring!");
            return;
        }

        const message = `🛒 *Yangi Buyurtma!*\n\n📌 *Mahsulot:* ${selectedProduct.name}\n💰 *Narxi:* ${selectedProduct.price}\n📆 *Oylik to‘lov:* ${selectedProduct.monthly}\n\n👤 *Ism:* ${userName}\n📞 *Telefon:* ${userPhone}\n📍 *Viloyat:* ${userLocation}`;

        // Botga xabar yuborish
        sendMessageToTelegram(message);

        // Telegram admin profiliga o'tish
        setTimeout(() => {
            window.location.href = `https://t.me/${adminUsername}`;
        }, 1000);

        // Modalni yopish
        const userInfoModal = bootstrap.Modal.getInstance(document.getElementById("userInfoModal"));
        userInfoModal.hide();
    });
});

function sendMessageToTelegram(message) {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = {
        chat_id: adminId,
        text: message,
        parse_mode: "Markdown"
    };

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            console.log("Buyurtma admin botiga yuborildi!");
        } else {
            alert("Xatolik yuz berdi, qaytadan urinib ko‘ring.");
        }
    })
    .catch(error => {
        console.error("Xatolik:", error);
        alert("Tarmoqda xatolik yuz berdi.");
    });
}
