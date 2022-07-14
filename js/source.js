 user = [
    {
        id: 1,
        name: "Admin Shop build",
        address: "Jl. Pemuda Panjaitan 10 Bekasi Utara",
        email: "admin@admin.com",
        DOB: '2002-12-12',
        password: 'admin',
        phoneNumber: '08123456789',
        lastLogin: '12-07-2022'     
    }
 ]

 userLocal = localStorage.getItem("user");
if(userLocal){
    JSON.parse(userLocal).forEach(data => {
        user.push(data)
    });
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
        createdBy: 2,
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
        noHandphone: '081234567',
        date: 'December 22, 2021'
    },
    {
        id: 2,
        customerName: 'Santo',
        noHandphone: '081232356568',
        date: 'December 22, 2012'
    },
    {
        id: 3,
        customerName: 'Maman',
        noHandphone: '081237846544',
        date: 'February 2, 2021'
    },
    {
        id: 4,
        customerName: 'Endang',
        noHandphone: '08454655462',
        date: 'December 12, 2008'
    },
    {
        id: 5,
        customerName: 'Sultan',
        noHandphone: '08123743455',
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
        noHandphone: '081275785754',
        date: 'December 17, 2021'
    },
    {
        id: 8,
        customerName: 'Sukman',
        noHandphone: '083424451993',
        date: 'June 21, 2020'
    },
    {
        id: 9,
        customerName: 'Dudung',
        noHandphone: '0812343445663',
        date: 'December 22, 2009'
    },
    {
        id: 10,
        customerName: 'Eman',
        noHandphone: '08134234875',
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
        qty: 2000
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
        qty: 100
    },
    {
        idSold: 4,
        idProduct: 9,
        qty: 200
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
        qty: 200
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
    }
]

detailProductSoldLocal = localStorage.getItem("detailProductSold");

if(detailProductSoldLocal){
    detailProductSold = JSON.parse(detailProductSoldLocal);
}else{
    localStorage.setItem('detailProductSold', JSON.stringify(detailProductSold));
}
