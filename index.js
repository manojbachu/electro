

let productsList = [
    {   id: 1,
        imgPath: "accessories1.jpg",
        content: "Tygot 10 Inches LED Ring Light for Camera, Phone with 7 Feet Long Foldable Lightweight Tripod Kit, Tripod  (Black, Supports Up to 5000 g)",
        price: 639,
    },
    {   id: 2,
        imgPath: "accessories2.jpg",
        content: "Stookin 6x9 FT Parrot Green LEKERA Backdrop Photo Light Studio Photography Background ( Stand Not Included Reflector",
        price: 284,
    },
    {   id: 3,
        imgPath: "accessories3.jpg",
        content: "DIGITEK Smartphone Gimbal DSG 005 3 Axis Gimbal for Mobile  (300.0)",
        price: 5499,
    },
    {   id: 4,
        imgPath: "accessories4.jpg",
        content: "DIGITEK DSG 007F Foldable Auto Balancing Gimbal for All Smart Phones 3 Axis Gimbal for Camera, Mobile  (280)",
        price: 5988,
    },
    {   id: 5,
        imgPath: "accessories5.jpg",
        content: "Viraan R1S Bluetooth Remote Selfie Light 3in1 Selfie Stick Tripod Stand with All Phones Single Gimbal for Mobile, Camera  ",
        price: 200,
    },
    {   id: 6,
        imgPath: "accessories7.jpg",
        content: "Syvo WT-3130 Tripod, Tripod Kit  (Brown/Black, Supports Up to 5000 g)",
        price: 799,
    },
    {
        id: 7,
        imgPath: "accessories8.jpg",
        content: "PICPRO 350w LED Porta Light Kit with Green Screen for Videoshoot, Photography, YouTube Reflector",
        price: 6940,
    },
    {   id: 8,
        imgPath: "camera2.jpg",
        content: "Camera C430W 4k with Waterproof cover",
        price: 1050,
    },{   id: 9,
        imgPath: "camera3.jpg",
        content: "Camera C430W 4k Waterproof",
        price: 2500,
    },{   id: 10,
        imgPath: "camera4.jpg",
        content: "White NX Mini F1 SMART NX ",
        price: 1049,
    },{   id: 11,
        imgPath: "camera5.jpg",
        content: "GoPro HERO9 Action Camera with 20MP Video Streaming (Dual display, Waterproof upto 33ft)",
        price: 25000,
    },{   id: 12,
        imgPath: "camera6.jpg",
        content: "JVC GY GY-HM150U Compact Handheld 3-CCD Camcorder Camcorder  (Black)",
        price: 98000,
    },{   id: 13,
        imgPath: "camera7.jpg",
        content: "Insta360 One X2 Sports and Action Camera  (Black, 0)",
        price: 10500,
    },{   id: 14,
        imgPath: "cameraImg1.jpg",
        content: "PRONOVA Foldable Toy Drone with HQ WiFi Camera Drone",
        price: 3499,
    },
    {   id: 15,
        imgPath: "slider3image1.jpg",
        content: "boAt Stone 1200 14W Bluetooth Speaker with Upto 9 Hours Battery, RGB LEDs, IPX7 and TWS Feature(Black)",
        price: 800,
    },
    {   id: 16,
        imgPath: "slider3image2.jpg",
        content: "boAt Stone 1450 Portable Wireless Speaker with 40W RMS Signature Sound, RGB LEDs, TWS Feature, Multi-Compatibility Modes, IPX5 Water Resistance, EQ Modes(Black Storm)",
        price: 1000,
    },
    {   id: 17,
        imgPath: "slider3image3.jpg",
        content: "boAt Aavante Bar 900/908 Bluetooth Soundbar with 30W RMS, 2.0 Channel, Multiple Connectivity, EQ Modes, Sleek Finish, Easy Access Integrated Controls(Premium Black)",
        price: 1600,
    },
    {   id: 18,
        imgPath: "slider3image4.jpg",
        content: "boAt Stone 1200 14W Bluetooth Speaker with Upto 9 Hours Battery, RGB LEDs",
        price: 600,
    },
    {   id: 19,
        imgPath: "slider3image5.jpg",
        content: "boAt Aavante Bar 900/908 Bluetooth Soundbar with 30W RMS, 2.0 Channel, Multiple Connectivity, EQ Modes, Sleek Finish, Easy Access Integrated Controls(Premium Black)",
        price: 2000,
    },
    {   id: 20,
        imgPath: "slider3image6.jpg",
        content: "Stone 1200 14W Bluetooth Speaker with Upto 9 Hours play time water resistence",
        price: 2500,
    },
    {   id: 21,
        imgPath: "slider3image7.jpg",
        content: "JBL Partybox 110 | Wireless Bluetooth Party Speaker | 160W Monstrous Pro Sound | Dynamic Light Show",
        price: 3500,
    },
    {   id: 22,
        imgPath: "gameconsole.jpg",
        content: "Sony PS5 PlayStation Console",
        price: 54990,
    },
    {   id: 23,
        imgPath: "game2.jpg",
        content: "Sony PS4 Pro 1TB Console (Black)",
        price: 39990,
    },
    {   id: 24,
        imgPath: "game3.jpg",
        content: "Nintendo Switch OLED model With Neon Red & Neon Blue Joy-Con",
        price: 33900,
    },
    {   id: 25,
        imgPath: "game4.jpg",
        content: "Xbox Series X",
        price: 45990,
    },
    {   id: 26,
        imgPath: "game5.jpg",
        content: "HTC Vive Cosmos Elite Virtual Reality System [video game]",
        price: 106967,
    },
    {   id: 27,
        imgPath: "game6.jpg",
        content: "Sony God Of War Ragnarok | Standard Edition | PS5 Game (PlayStation 5)PEGI Rating: Ages 18 and Over",
        price: 2999,
    },
    {   id: 28,
        imgPath: "game7.jpg",
        content: "PS5 Spiderman 2 Standard Edn",
        price: 4299,
    },
    {   id: 29,
        imgPath: "game8.jpg",
        content: "WB Games Mortal Kombat 11 (PS4)",
        price: 1640,
    },
    {   id: 30,
        imgPath: "harddrive1.jpg",
        content: "Seagate Expansion for Windows and Mac with 3 years Data Recovery Services – Portable 1 TB External Hard Disk Drive (HDD)  (Black)",
        price: 4998,
    },
    {   id: 31,
        imgPath: "harddrive2.jpg",
        content: "Seagate One Touch with Password Protection for Windows & Mac with 3 years Data Recovery Services - Portable 2 TB External Hard Disk Drive (HDD)  (Light Blue) ",
        price: 7199,
    },
    {   id: 32,
        imgPath: "harddrive3.jpg",
        content: "WD Elements 2 TB Wired External Hard Disk Drive (HDD)  (Black ) ",
        price: 6899,
    },
    {   id: 33,
        imgPath: "harddrive4.jpg",
        content: "WD My Passport 2 TB External Hard Disk Drive (HDD)  (Black )",
        price: 7199,
    },
    {   id: 34,
        imgPath: "harddrive5.jpg",
        content: "WD My Book 4 TB External Hard Disk Drive (HDD)  (Black)",
        price: 11495,
    },
    {   id: 35,
        imgPath: "harddrive7.jpg",
        content: "Seagate One Touch with Password Protection for Windows & Mac with 3 years Data Recovery Services - Portable 1 TB External Hard Disk Drive (HDD)  (Red)",
        price: 5499,
    },
    {   id: 36,
        imgPath: "harddrive8.jpg",
        content: "ADATA 1 TB External Hard Disk Drive (HDD)  (Red)",
        price: 4825,
    },
    {   id: 37,
        imgPath: "laptop1.jpg",
        content: "MSI Katana 17 Intel Core i7 12th Gen 12650H - (16 GB/1 TB SSD/Windows 11 Home/8 GB Graphics/NVIDIA GeForce RTX 4060/240 Hz) Katana 17 B12VFK-673IN Gaming Laptop",
        price: 129200,
    },
    {   id: 38,
        imgPath: "laptop3.jpg",
        content: "DELL Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) New Inspiron 15 Laptop Thin and Light Laptop  (38 cm, Carbon Black, 1.65 Kg, With MS Office)",
        price: 36550,
    },
    {   id: 39,
        imgPath: "laptop4.jpg",
        content: "Acer Extensa Intel Core i3 N305 - (8 GB/512 GB SSD/Windows 11 Home) EX215-33 Notebook  (15.6 Inch, Pure Silver, 1.7 Kg) ",
        price: 29550,
    },
    {   id: 40,
        imgPath: "laptop5.jpg",
        content: "MSI Katana 15 Intel Core i5 12th Gen 12450H - (16 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 3050/144 Hz) Katana 15 B12UDXK-1005IN Gaming Laptop  (15.6 Inch, Black, 2.25 Kg) ",
        price: 50000,
    },
    {   id: 41,
        imgPath: "laptop6.jpg",
        content: "CHUWI Intel Core i3 10th Gen 1005G1 - (8 GB/512 GB SSD/Windows 11 Home) CoreBook X Grey Laptop  (14 inch, Grey, 1.40 kg)",
        price: 25220,
    },
    {   id: 42,
        imgPath: "laptop7.jpg",
        content: "Lenovo Intel Core i7 12th Gen 1255U - (16 GB/512 GB SSD/Windows 11 Home) V15 G3 IAP Thin and Light Laptop  (15.6 Inch, Iron Grey, 1.7 Kg)",
        price: 49990,
    },
    {   id: 43,
        imgPath: "laptop2.jpg",
        content: "HP Intel Intel Core i3 11th Gen 1115G4 - (8 GB/256 GB SSD/Windows 11 Home) 14s - dy2507TU Thin and Light Laptop  (14 inch, Natural Silver, 1.41 Kg, With MS Office)",
        price: 31000,
    },
    {   id: 44,
        imgPath: "lens1.jpg",
        content: "Canon EF 50 mm f/1.8 STM Standard Prime Lens  (Black, 50 mm)",
        price: 9999,
    },
    {   id: 45,
        imgPath: "lens2.jpg",
        content: "SONY SEL50F18F Standard Prime Lens  (Black, 50 mm)",
        price: 19129,
    },
    {   id: 46,
        imgPath: "lens3.jpg",
        content: "NIKON Nikkor Z 50mm f/1.8 S Standard Zoom Lens  (Black, 10 - 50 mm) ",
        price: 37990,
    },
    {   id: 47,
        imgPath: "lens4.jpg",
        content: "SONY SEL200600G Telephoto Zoom Lens  (White, 200 - 600 mm)",
        price: 149000,
    },
    {   id: 48,
        imgPath: "lens7.jpg",
        content: "SONY SEL16F28 Wide-angle Prime Lens  (Silver, 50 mm)",
        price: 9559,
    },
    {   id: 49,
        imgPath: "lens6.jpg",
        content: "NIKON AF-S DX Micro NIKKOR 40mm f/2.8G Macro Prime Lens  (Black)",
        price: 17490,
    },
    {   id: 50,
        imgPath: "lens5.jpg",
        content: "Canon RF 24 - 105 mm F4 L IS USM Wide-angle Zoom Lens  (Black, 24 - 105 mm)",
        price: 100000,
    },
    {   id: 51,
        imgPath: "pendrive1.jpg",
        content: "HP X796W 128 Pen Drive  (Multicolor)",
        price: 769,
    },
    {   id: 52,
        imgPath: "pendrive3.jpg",
        content: "SanDisk SDDDC3-064G-I35NB 64 GB OTG Drive  (Blue, Type A to Type C)",
        price: 699,
    },
    {   id: 53,
        imgPath: "pendrive4.jpg",
        content: "SanDisk SDCZ48-064G-I35 64 GB Pen Drive  (Black)",
        price: 1200,
    },
    {   id: 54,
        imgPath: "pendrive5.jpg",
        content: "Acer UF300 64 GB Pen Drive  (Silver)",
        price: 599,
    },
    {   id: 55,
        imgPath: "pendrive6.jpg",
        content: "SanDisk Ultra Shift™ USB 3.0 256 GB Pen Drive  (Black)",
        price: 1789,
    },
    {   id: 56,
        imgPath: "pendrive7.jpg",
        content: "Tobo Chinese Ruyi Style 8GB USB Flash Drives Original Metal USB Disk External Storage U Stick Pendrive. 8 GB Pen Drive  (Gold) ",
        price: 749,
    },
    {   id: 57,
        imgPath: "pendrive2.jpg",
        content: "HP v220w 128 GB Pen Drive  (Silver)",
        price: 757,
    },
    {   id: 58,
        imgPath: "tablet1.jpg",
        content: "MOTOROLA Tab G62 4 GB RAM 128 GB ROM 10.61 inch with Wi-Fi+4G Tablet (Frost Blue)",
        price: 14499,
    },
    {   id: 59,
        imgPath: "tablet2.jpg",
        content: "Xiaomi Pad 6 6 GB RAM 128 GB ROM 11.0 inch with Wi-Fi Only Tablet (Gray)",
        price: 26999,
    },
    {   id: 60,
        imgPath: "tablet3.jpg",
        content: "REDMI Pad 6 GB RAM 128 GB ROM 10.61 Inch with Wi-Fi Only Tablet (Mint Green)",
        price: 16990,
    },
    {   id: 61,
        imgPath: "tablet4.jpg",
        content: "Lenovo Tab M10 2nd Gen 3 GB RAM 32 GB ROM 10.1 inch with Wi-Fi+4G Tablet (Iron Grey)",
        price: 8499,
    },
    {   id: 62,
        imgPath: "tablet5.jpg",
        content: "SAMSUNG Galaxy Tab S7 FE With Stylus 6 GB RAM 128 GB ROM 12.4 inches with Wi-Fi+4G Tablet (Black)",
        price: 37999,
    },
    {   id: 63,
        imgPath: "tablet6.jpg",
        content: "realme Pad X 6 GB RAM 128 GB ROM 11 inch with Wi-Fi+5G Tablet (Glowing Grey)",
        price: 24999,
    },
    {   id: 64,
        imgPath: "tablet7.jpg",
        content: "SAMSUNG Galaxy Tab A8 4 GB RAM 64 GB ROM 10.5 inch with Wi-Fi+4G Tablet (Gray)",
        price: 15999,
    },
    {   id: 65,
        imgPath: "tablet8.jpg",
        content: "Xiaomi Pad 6 6 GB RAM 128 GB ROM 11.0 inch with Wi-Fi Only Tablet (Gray)",
        price: 24999,
    },
    {   id: 66,
        imgPath: "tablet9.jpg",
        content: "OnePlus Pad 12 GB RAM 256 GB ROM 11.61 inch with Wi-Fi Only Tablet (Halo Green)",
        price: 26999,
    },
    {   id: 67,
        imgPath: "TVimage1.jpg",
        content: "TVW 80 cm (32 inches) Linux Series Frameless HD Ready Smart LED TV VW32C2 (Black) | with 18 Months Warranty",
        price: 12990,
    },
    {   id: 68,
        imgPath: "Tvimage3.jpg",
        content: "iFFALCON 80.04 cm (32 inches) Bezel-Less S Series HD Ready Smart Android LED TV (iFF32S53)",
        price: 29990,
    },
    {   id: 69,
        imgPath: "Tvimage4.jpg",
        content: "AKAI AKLT-S-FL1Y9M",
        price: 24999,
    },
    {   id: 70,
        imgPath: "Tvimage5.jpg",
        content: "Xiaomi A Series 80 cm (32 inch) HD Ready Smart TV, ELA5125IN",
        price: 24999,
    },
    {   id: 71,
        imgPath: "card1.jpg",
        content: "Tablet Chromebook X360,Intel Celeron N4120,14-Inch",
        price: 13000,
    },
    {   id: 72,
        imgPath: "card2.jpg",
        content: "EXMOOR® 4K Waterproof Vlog Camera with Wide Angle Lens Underwater WiFi Video Action Camera",
        price: 20999,
    },
    {   id: 73,
        imgPath: "card3.jpg",
        content: "Fare-Boltt Ninja Call Pro Plus 1.83",
        price: 7029,
    },
    {   id: 74,
        imgPath: "card4.jpg",
        content: "Portable WiFi and Bluetooth Smart Speaker with Amazon Alexa by FABRIQ",
        price: 20999,
    },
    {   id: 75,
        imgPath: "card5.jpg",
        content: "Sony HDRCX405 9.2MP HD Handycam Camcorder with Free Carrying Case, Optical( white)",
        price: 5090,
    },
    {   id: 76,
        imgPath: "card6.jpg",
        content: "Singer Aerocool Pride DX 70L Desert Air Cooler with Honey Comb Cooling Pad",
        price: 10050,
    },
    {   id: 77,
        imgPath: "card7.jpg",
        content: "rts  Mini USB Type C Adapter Plug",
        price: 9060,
    },
    {   id: 78,
        imgPath: "card_8.jpg",
        content: "New World Old Arcade Classic Retro Game Console",
        price: 7890,
    },
    {   id: 79,
        imgPath: "card9.jpg",
        content: "Asus G15 5520 Gaming Laptop, Intel i5-12500H/16GB DDR5/1TB SSD/15.6 (39.62cm)",
        price: 13000,
    },
    {   id: 80,
        imgPath: "slider1image1.jpg",
        content: "beatXP Marv Neo 1.85” (4.6 cm) Display, , t Watch",
        price: 2500,
    },
    {   id: 81,
        imgPath: "slider1imag2.jpg",
        content: "Fire-Boltt Phoenix with a round dial, high-resolution display, smart watch",
        price: 2999,
    },
    {   id: 82,
        imgPath: "slider1image3.jpg",
        content: "Noise Twist Round dial Smart Watch with Bluetooth Calling, 1.38",
        price: 3303,
    },
    {   id: 83,
        imgPath: "slidr1image4.jpg",
        content: "resh New Arrival Latest Men Watch Watches Men Ghadi Gents - Boys - 5 Ghadi Boy - Boy Analog Watch",
        price: 4599,
    },
    {   id: 84,
        imgPath: "slider1image5.jpg",
        content: "mi Smart Watch for Men - Smart Watches for Men Women, Bluetooth Smartwatch",
        price: 699,
    },
    {   id: 85,
        imgPath: "slider1image6.jpg",
        content: "FIRE-BOLTT Talk Alpha Smartwatch with Bluetooth Calling (42mm Display, Pink Strap)",
        price: 1299,
    },
    {   id: 86,
        imgPath: "slider1image7.jpg",
        content: "FORSINING Analogue Men's Watch(Gold Dial Silver Colored Strap)-S1089-2",
        price: 5000,
    },
    {   id: 87,
        imgPath: "slider2image1.jpg",
        content: "iQOO Z7 Pro 5G (Blue Lagoon, 8GB RAM, 128GB Storage)",
        price: 23999,
    },
    {   id: 88,
        imgPath: "slider2image2.jpg",
        content: "iQOO Neo 7 5G (Interstellar Black, 8GB RAM, 128GB Storage)",
        price: 24999,
    },
    {   id: 89,
        imgPath: "slider2image3.jpg",
        content: "Oppo A79 5G (Glowing Green, 8GB RAM, 128GB Storage)",
        price: 19999,
    },
    {   id: 90,
        imgPath: "slider2image4.jpg",
        content: "Redmi Note 12 (Sunrise Gold, 6GB RAM, 64GB Storage)",
        price: 11499,
    },
    {   id: 91,
        imgPath: "slider2image5.jpg",
        content: "Samsung Galaxy M34 5G (Prism Silver,8GB,128GB)",
        price: 15000,
    },
    {   id: 92,
        imgPath: "slider2image6.jpg",
        content: "Lava Agni 2 5G (Glass Viridian, 8GB RAM, 256GB Storage) ",
        price: 29000,
    },
    {   id: 93,
        imgPath: "slider2image7.jpg",
        content: "iQOO Neo 7 Pro 5G (Dark Storm, 8GB RAM, 128GB Storage) ",
        price: 30999,
    },
]

cartList = []

let cart;

let cartContainer = document.addEventListener('DOMContentLoaded', function() {
    cart = document.getElementById("cartContainer");
});

function onDeleteTodo(uniqueNo) {
    let element = document.getElementById(uniqueNo);
    cart.removeChild(element);

    let deleteElementIndex = cartList.findIndex(function(each) {
        let itemId =  each.id;
        if (each === itemId) {
            return true;
        } else {
            return false;
        }
    });

    cartList.splice(deleteElementIndex, 1);
}


function onAddToCart(id) {
    let cartItem = productsList.find((item) => item.id == id);
    let isInCart = cartList.find((item) => item.id == id);

    if (isInCart === undefined) {
        let updateItem = {
            id: cartItem.id,
            imgPath: cartItem.imgPath,
            content: cartItem.content,
            price: cartItem.price,
            quantity: 1,
        };
        cartList.push(updateItem);
    } else {
        isInCart.quantity += 1;
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    // Clear the existing items in the cart display
    cart.innerHTML = "";

    // Update the cart display with the current items
    cartList.forEach((eachItem) => {
        let listItem = document.createElement("li");
        listItem.setAttribute("id", eachItem.id);
        listItem.classList.add(
            "d-flex",
            "align-items-center",
            "justify-content-between",
            "p-2",
            "m-2",
            "border",
            "border-dark-subtle",
            "rounded"
        );
        cart.appendChild(listItem);

        let cartImg = document.createElement("img");
        cartImg.setAttribute("src", eachItem.imgPath);
        cartImg.classList.add("cart-img");
        listItem.appendChild(cartImg);

        let itemDetails = document.createElement("p");
        itemDetails.style.width = "300px";
        itemDetails.textContent = eachItem.content;
        listItem.appendChild(itemDetails);

        let noOfItems = document.createElement("strong")
        noOfItems.textContent = "Quantity: " + eachItem.quantity
        listItem.appendChild(noOfItems)

        let price = document.createElement("strong");
        price.textContent = "Rs. " + eachItem.price * eachItem.quantity;
        listItem.appendChild(price);

        let deleteIcon = document.createElement("i");
        deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
        deleteIcon.onclick = function () {
            onDeleteTodo(eachItem.id);
        };
        listItem.appendChild(deleteIcon);
    });

    let orderBtn = document.createElement("button");
        orderBtn.textContent= "Buy Now"
        orderBtn.classList.add("btn", "btn-warning", "rounded-pill");
        orderBtn.style.marginLeft="auto"
        orderBtn.onclick = function (){onBuyNow()}
        cart.appendChild(orderBtn) 
}

function onBuyNow(){
    subContainer.style.display = "none"
    searchContainer.classList.add("d-none")    
    addressContainer.style.display="flex"
}

    let nam;
    let address;
    let state;
    let number;
    let postalCode;

    document.addEventListener('DOMContentLoaded', function() {
        nam = document.getElementById("name").value;
        console.log(name)
        address = document.getElementById("address").value;
        state = document.getElementById("state").value;
        number = document.getElementById("number").value;
        postalCode = document.getElementById("postalcode").value;
    });

function onSubmit(){
        alert("Your order will deliver soon!")
    
    
}