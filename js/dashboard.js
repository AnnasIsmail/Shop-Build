jumlahStock = 0;
jumlahTerjual = 0;

product.forEach(element => {
    jumlahStock += parseInt(element.stock)
});

detailProductSold.forEach(data =>{
    jumlahTerjual += data.qty
})

document.getElementById('jumlahProduct').innerHTML = product.length;
document.getElementById('totalStock').innerHTML = jumlahStock;
document.getElementById('produkTerjual').innerHTML = jumlahTerjual;

jumlahKeuntungan = 0;

detailProductSold.forEach(data=>{
    product.forEach(dataProduct=>{
        if(parseInt(data.idProduct) === parseInt(dataProduct.id)){
            jumlahKeuntungan += parseInt(dataProduct.price) * parseInt(data.qty);
        }
    });
});

document.getElementById('jumlahKeuntungan').innerHTML =  FormatMoney(jumlahKeuntungan);

dataUser = {};

user.forEach(data => {
    if(data.id === parseInt(localStorage.idUser)){
        dataUser = data;
    }
});

document.getElementById('namaLengkap').innerHTML = dataUser.name;
space = dataUser.name.indexOf(' ');
document.getElementById('namaDepan').innerHTML = dataUser.name.substring(0 , space);
document.getElementById('profileName').innerHTML = dataUser.name.substring(0 , space);
document.getElementById('email').innerHTML = dataUser.email;
document.getElementById('phoneNumber').innerHTML = dataUser.phoneNumber;
document.getElementById('alamat').innerHTML = dataUser.address;
document.getElementById('lastLogin').innerHTML = dataUser.lastLogin;


fetch('https://api.ipify.org?format=json').then(result=>result.json()).then(res =>{
    document.getElementById('showIp').innerHTML =  res.ip
})
document.getElementById('showServer').innerHTML =  window.location.hostname;
document.getElementById('showBrowser').innerHTML =  navigator.userAgent;