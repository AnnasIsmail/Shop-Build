 user = [
    {
        id: 1,
        name: "Owner Shop Build",
        username: 'Owner',
        address: "Jl. Tugu Raya, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat 16451",
        email: "owner@owner.com",
        DOB: '2002-12-12',
        password: 'Owner123',
        phoneNumber: '081293753692',
        lastLogin: '2022-07-12',     
        urlImage: 'assets/user1.jpg'
    },
    {
        id: 2,
        name: "Admin Shop Build",
        username: 'Admin',
        address: "Jl. Harsono RM No.1, RT.5/RW.7, Ragunan, Kec. Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12550",
        email: "admin@admin.com",
        DOB: '2002-12-12',
        password: 'Admin123',
        phoneNumber: '081316592005',
        lastLogin: '2022-07-12',     
        urlImage: 'assets/user2.webp'
    },
    {
        id: 3,
        name: "Cashier Shop Build",
        username: 'Cashier',
        address: "Jl. Ampera Raya No.133, RT.5/RW.10, Ragunan, Kec. Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12940",
        email: "cashier@cashier.com",
        DOB: '2002-12-12',
        password: 'Cashier123',
        phoneNumber: '081282757167',
        lastLogin: '2022-07-12',     
        urlImage: 'assets/user3.jpg'
    },
    {
        id: 4,
        name: "Stock Shop Build",
        username: 'Stock',
        address: "Jl. Harsono RM No.3, Ragunan, Kec. Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12550",
        email: "stock@stock.com",
        DOB: '2002-12-12',
        password: 'Stock123',
        phoneNumber: '085718077859',
        lastLogin: '2022-07-12',     
        urlImage: 'assets/user4.jpg'
    },
    {
        id: 5,
        name: "Annas Ismail Muhammad",
        username: 'Annas123',
        address: "Jl. Lenteng Agung No.9-10, RT.1/RW.8, Lenteng Agung, Jagakarsa, RT.1/RW.8, Lenteng Agung, Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12610",
        email: "annas@binus.ac.id",
        DOB: '2002-12-12',
        password: 'Annas123',
        phoneNumber: '081289237569',
        lastLogin: '2022-07-12',     
        urlImage: 'assets/user5.png'
    },
 ]

 userLocal = localStorage.getItem("user");
if(userLocal){
        user = JSON.parse(userLocal);
}else{
    localStorage.setItem('user', JSON.stringify(user));
}

product = [
    {
        id: 1,
        name: 'SEMEN GRESIK 50KG',
        price: 69000,
        stock: 250,
        photo: 'assets/semen-gresik.jpg',
        createdBy: 1,
        createdDate: 'December 22, 2021'
    },
    {
        id: 2,
        name: 'Pylox Black Flat',
        price: 31900,
        stock: 15,
        photo: 'assets/pilox.jpg',
        createdBy: 1,
        createdDate: 'July 23, 2021'
    },
    {
        id: 3,
        name: 'REFILL KUAS ROLL 4" CAT TEMBOK',
        price: 7000,
        stock: 100,
        photo: 'assets/refill-kuas.jpg',
        createdBy: 1,
        createdDate: 'January 24, 2021'
    },
    {
        id: 4,
        name: 'Tang Massa Klem Masa Stang Las Ground Earth Clamp 300A 500A - 300A',
        price: 15000,
        stock: 80,
        photo: 'assets/tang-massa.jpg',
        createdBy: 1,
        createdDate: 'December 25, 2021'
    },
    {
        id: 5,
        name: 'SEKRUP GYPSUM berbagai ukuran',
        price: 32000,
        stock: 120,
        photo: 'assets/sekrup.jpg',
        createdBy: 1,
        createdDate: 'December 26, 2021'
    },
    {
        id: 6,
        name: 'WATERPASS MAGNET ALUMINIUM 40" 100 CM',
        price: 45000,
        stock: 68,
        photo: 'assets/waterpass.jpg',
        createdBy: 1,
        createdDate: 'March 27, 2021'
    },
    {
        id: 7,
        name: 'Gunting Kain',
        price: 18000,
        stock: 29,
        photo: 'assets/gunting.jpg',
        createdBy: 1,
        createdDate: 'December 28, 2011'
    },
    {
        id: 8,
        name: 'Makita N9500N Mesin Gerinda Tangan [ N 9500 N ]',
        price: 1670000,
        stock: 40,
        photo: 'assets/makita.jpg',
        createdBy: 1,
        createdDate: 'December 29, 2021'
    },
    {
        id: 9,
        name: 'matabor keramik - 8MM',
        price: 55000,
        stock: 200,
        photo: 'assets/matabor.jpg',
        createdBy: 1,
        createdDate: 'December 30, 2020'
    },
    {
        id: 10,
        name: 'CATYLAC cat dasar / cat dasar interior / cat dasar exterior',
        price: 115000,
        stock: 90,
        photo: 'assets/catTembok.jpeg',
        createdBy: 1,
        createdDate: 'December 22, 2021'
    },
    {
        id: 11,
        name: 'Neo Dacey Kursi - Putih',
        price: 309000,
        stock: 210,
        photo: 'assets/10219049_7.webp',
        createdBy: 1,
        createdDate: 'December 21, 2011'
    },
    {
        id: 12,
        name: 'Lexi Set Meja Makan Lipat 2 Bangku - Cokelat',
        price: 59900,
        stock: 105,
        photo: 'assets/10227011_3.webp',
        createdBy: 1,
        createdDate: 'July 23, 2020'
    },
    {
        id: 13,
        name: 'Oakland Sofa Tidur Fabric - Cokelat',
        price: 999000,
        stock: 120,
        photo: 'assets/10351688_5.webp',
        createdBy: 1,
        createdDate: 'January 24, 2021'
    },
    {
        id: 14,
        name: 'Soleil Kursi Ayun Gantung Rotan Magic Leaf Egg',
        price: 2499000,
        stock: 180,
        photo: 'assets/10477997_2.webp',
        createdBy: 1,
        createdDate: 'December 25, 2020'
    },
    {
        id: 15,
        name: 'Kris Kunci Pintu Digital Mortise - Hitam',
        price: 32000,
        stock: 120,
        photo: 'assets/10462699_1.webp',
        createdBy: 1,
        createdDate: 'December 26, 2021'
    },
    {
        id: 16,
        name: 'Seaford Rak Buku 4 Tingkat - Walnut',
        price: 1119300,
        stock: 168,
        photo: 'assets/10181040_1.webp',
        createdBy: 1,
        createdDate: 'March 27, 2020'
    },
    {
        id: 17,
        name: 'Stora Jemuran Handuk 4 Gantungan Sb0229-aGunting Kain',
        price: 18000,
        stock: 29,
        photo: 'assets/287107_1.webp',
        createdBy: 1,
        createdDate: 'December 28, 2011'
    },
    {
        id: 18,
        name: 'Informa Biel Laci 5 Tingkat - Putih Oak',
        price: 1999000,
        stock: 240,
        photo: 'assets/10473486_2.webp',
        createdBy: 1,
        createdDate: 'December 29, 2021'
    },
    {
        id: 19,
        name: 'Denver 2 Kitchen Set 1.8 Mtr - Hitam',
        price: 10599000,
        stock: 220,
        photo: 'assets/10416464_1.webp',
        createdBy: 1,
        createdDate: 'December 30, 2010'
    },
    {
        id: 20,
        name: 'Darren Kabinet Dinding Dapur 100x35x60 Cm - Hijau',
        price: 959000,
        stock: 190,
        photo: 'assets/10420600_1.webp',
        createdBy: 1,
        createdDate: 'December 22, 2021'
    },
]

productLocal = localStorage.getItem("product");

if(productLocal){
    product = JSON.parse(productLocal);
}else{
    localStorage.setItem('product', JSON.stringify(product));
}

productSold = [
    {
        id: 1,
        customerName: 'Joko',
        noHandphone: '085888344415',
        date: 'December 22, 2021'
    },
    {
        id: 2,
        customerName: 'Santo',
        noHandphone: '081219790149',
        date: 'December 22, 2012'
    },
    {
        id: 3,
        customerName: 'Maman',
        noHandphone: '081293244440',
        date: 'February 2, 2021'
    },
    {
        id: 4,
        customerName: 'Endang',
        noHandphone: '081252542444',
        date: 'December 12, 2008'
    },
    {
        id: 5,
        customerName: 'Sultan',
        noHandphone: '081384957099',
        date: 'December 2, 2021'
    },
    {
        id: 6,
        customerName: 'Udin',
        noHandphone: '08732324789933',
        date: 'March 22, 2022'
    },
    {
        id: 7,
        customerName: 'Wirman',
        noHandphone: '085263791180',
        date: 'December 17, 2021'
    },
    {
        id: 8,
        customerName: 'Sukman',
        noHandphone: '081315707467',
        date: 'June 21, 2020'
    },
    {
        id: 9,
        customerName: 'Dudung',
        noHandphone: '081317623979',
        date: 'December 22, 2009'
    },
    {
        id: 10,
        customerName: 'Eman',
        noHandphone: '089675052628',
        date: 'January 12, 2021'
    },
    {
        id: 11,
        customerName: 'Arief',
        noHandphone: '085319121990',
        date: 'December 22, 2021'
    },
    {
        id: 12,
        customerName: 'Kaffie',
        noHandphone: '081232356568',
        date: 'December 22, 2010'
    },
    {
        id: 13,
        customerName: 'Erion',
        noHandphone: '081213501165',
        date: 'February 2, 2021'
    },
    {
        id: 14,
        customerName: 'Helmi',
        noHandphone: '081280744428',
        date: 'March 14, 2018'
    },
    {
        id: 15,
        customerName: 'Widodo',
        noHandphone: '085887521252',
        date: 'July 2, 2021'
    },
    {
        id: 16,
        customerName: 'Woro',
        noHandphone: '08732324789933',
        date: 'March 22, 2022'
    },
    {
        id: 17,
        customerName: 'Imal',
        noHandphone: '081275785754',
        date: 'December 17, 2021'
    },
    {
        id: 18,
        customerName: 'Sulaiman',
        noHandphone: '081284429362',
        date: 'June 21, 2020'
    },
    {
        id: 19,
        customerName: 'Yeni',
        noHandphone: '08983257794',
        date: 'December 22, 2009'
    },
    {
        id: 20,
        customerName: 'Hidayat',
        noHandphone: '08567723924',
        date: 'January 12, 2021'
    },
]

productSoldLocal = localStorage.getItem("productSold");

if(productSoldLocal){
    productSold = JSON.parse(productSoldLocal);
}else{
    localStorage.setItem('productSold', JSON.stringify(productSold));
}

detailProductSold = [
    {
        idSold: 1,
        idProduct: 1,
        qty: 200
    },
    {
        idSold: 1,
        idProduct: 2,
        qty: 10
    },
    {
        idSold: 2,
        idProduct: 5,
        qty: 12
    },
    {
        idSold: 2,
        idProduct: 3,
        qty:10
    },
    {
        idSold: 3,
        idProduct: 10,
        qty: 25
    },
    {
        idSold: 4,
        idProduct: 10,
        qty: 19
    },
    {
        idSold: 4,
        idProduct: 5,
        qty: 50
    },
    {
        idSold: 4,
        idProduct: 9,
        qty: 20
    },
    {
        idSold: 5,
        idProduct: 5,
        qty: 10
    },
    {
        idSold: 6,
        idProduct: 3,
        qty: 25
    },
    {
        idSold: 6,
        idProduct: 5,
        qty: 50
    },
    {
        idSold: 6,
        idProduct: 9,
        qty:25
    },
    {
        idSold: 7,
        idProduct: 8,
        qty: 90
    },
    {
        idSold: 7,
        idProduct: 7,
        qty: 10
    },
    {
        idSold: 8,
        idProduct: 10,
        qty: 20
    },
    {
        idSold: 8,
        idProduct: 8,
        qty: 15
    },
    {
        idSold: 8,
        idProduct: 10,
        qty: 20
    },
    {
        idSold: 9,
        idProduct: 1,
        qty: 30
    },
    {
        idSold: 9,
        idProduct: 2,
        qty: 25
    },
    {
        idSold: 10,
        idProduct: 1,
        qty: 50
    },
    {
        idSold: 10,
        idProduct: 4,
        qty: 45
    },
    {
        idSold: 10,
        idProduct: 8,
        qty: 25
    },
    {
        idSold: 10,
        idProduct: 9,
        qty: 35
    },
    {
        idSold: 11,
        idProduct: 14,
        qty: 13
    },
    {
        idSold: 11,
        idProduct: 15,
        qty: 13
    },
    {
        idSold: 11,
        idProduct: 15,
        qty: 12
    },
    {
        idSold: 12,
        idProduct: 11,
        qty: 29
    },
    {
        idSold: 12,
        idProduct: 9,
        qty: 102
    },
    {
        idSold: 13,
        idProduct: 4,
        qty: 35
    },
    {
        idSold: 13,
        idProduct: 5,
        qty: 23
    },
    {
        idSold: 14,
        idProduct: 5,
        qty: 30
    },
    {
        idSold: 15,
        idProduct: 20,
        qty: 8
    },
    {
        idSold: 16,
        idProduct: 17,
        qty: 8
    },
    {
        idSold: 16,
        idProduct: 20,
        qty: 8
    },
    {
        idSold: 17,
        idProduct: 19,
        qty: 8
    },
    {
        idSold: 17,
        idProduct: 2,
        qty: 19
    },
    {
        idSold: 18,
        idProduct: 20,
        qty: 3
    },
    {
        idSold: 18,
        idProduct: 17,
        qty: 5
    },
    {
        idSold: 19,
        idProduct: 15,
        qty: 5
    },
    {
        idSold: 20,
        idProduct: 10,
        qty: 10
    },
    {
        idSold: 20,
        idProduct: 19,
        qty: 25
    },
    {
        idSold: 20,
        idProduct: 12,
        qty: 5
    }
]

detailProductSoldLocal = localStorage.getItem("detailProductSold");

if(detailProductSoldLocal){
    detailProductSold = JSON.parse(detailProductSoldLocal);
}else{
    localStorage.setItem('detailProductSold', JSON.stringify(detailProductSold));
}
