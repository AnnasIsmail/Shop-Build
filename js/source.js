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
        createdBy: '1',
        createdDate: '22-12-2021'
    },
    {
        id: 2,
        name: 'Pylox Black Flat',
        price: 31900,
        stock: 15,
        photo: 'assets/pilox.jpg',
        createdBy: '1',
        createdDate: '23-12-2021'
    },
    {
        id: 3,
        name: 'REFILL KUAS ROLL 4" CAT TEMBOK',
        price: 7000,
        stock: 100,
        photo: 'assets/refill-kuas.jpg',
        createdBy: '1',
        createdDate: '24-12-2021'
    },
    {
        id: 4,
        name: 'Tang Massa Klem Masa Stang Las Ground Earth Clamp 300A 500A - 300A',
        price: 15000,
        stock: 80,
        photo: 'assets/tang-massa.jpg',
        createdBy: '1',
        createdDate: '25-12-2021'
    },
    {
        id: 5,
        name: 'SEKRUP GYPSUM berbagai ukuran',
        price: 32000,
        stock: 120,
        photo: 'assets/sekrup.jpg',
        createdBy: '1',
        createdDate: '26-12-2021'
    },
    {
        id: 6,
        name: 'WATERPASS MAGNET ALUMINIUM 40" 100 CM',
        price: 45000,
        stock: 68,
        photo: 'assets/waterpass.jpg',
        createdBy: '1',
        createdDate: '27-12-2021'
    },
    {
        id: 7,
        name: 'Gunting Kain',
        price: 18000,
        stock: 29,
        photo: 'assets/gunting.jpg',
        createdBy: '1',
        createdDate: '12-12-2021'
    },
    {
        id: 8,
        name: 'Makita N9500N Mesin Gerinda Tangan [ N 9500 N ]',
        price: 1670000,
        stock: 40,
        photo: 'assets/makita.jpg',
        createdBy: '1',
        createdDate: '27-12-2021'
    },
    {
        id: 9,
        name: 'matabor keramik - 8MM',
        price: 55000,
        stock: 200,
        photo: 'assets/matabor.jpg',
        createdBy: '1',
        createdDate: '29-12-2021'
    },
    {
        id: 10,
        name: 'CATYLAC cat dasar / cat dasar interior / cat dasar exterior',
        price: 115000,
        stock: 90,
        photo: 'assets/cattembok.jpg',
        createdBy: '1',
        createdDate: '30-12-2021'
    },
]

productSold = [
    {
        id: 1,
        customerName: 'Joko',
        noHandphone: '081234567',
        idProduct: 1,
        qty: 50
    },
    {
        id: 2,
        customerName: 'Santo',
        noHandphone: '081232356568',
        idProduct: 2,
        qty: 5
    },
    {
        id: 3,
        customerName: 'Maman',
        noHandphone: '081237846544',
        idProduct: 7,
        qty: 10
    },
    {
        id: 4,
        customerName: 'Endang',
        noHandphone: '08454655462',
        idProduct: 5,
        qty: 9
    },
    {
        id: 5,
        customerName: 'Sultan',
        noHandphone: '08123743455',
        idProduct: 4,
        qty: 37
    },
    {
        id: 6,
        customerName: 'Udin',
        noHandphone: '08732324789933',
        idProduct: 10,
        qty: 4
    },
    {
        id: 7,
        customerName: 'Wirman',
        noHandphone: '081275785754',
        idProduct: 6,
        qty: 11
    },
    {
        id: 8,
        customerName: 'Sukman',
        noHandphone: '083424451993',
        idProduct: 9,
        qty: 13
    },
    {
        id: 9,
        customerName: 'Dudung',
        noHandphone: '0812343445663',
        idProduct: 3,
        qty: 20
    },
    {
        id: 10,
        customerName: 'Eman',
        noHandphone: '08134234875',
        idProduct: 2,
        qty: 11
    },
]