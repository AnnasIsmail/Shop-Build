dataUser = {};

user.forEach(data => {
    if(data.id === parseInt(localStorage.idUser)){
        dataUser = data;
    }
});
space = dataUser.name.indexOf(' ');
document.getElementById('profileName').innerHTML = dataUser.name.substring(0 , space);

idProduct = localStorage.getItem('detailProductId');

dataProduct = {};

product.forEach(data => {
    if(data.id === parseInt(idProduct)){
        dataProduct = data
    }
});

document.getElementById('srcImage').src = dataProduct.photo;
document.getElementById('id').value = idProduct;
document.getElementById('name').value = dataProduct.name;
document.getElementById('price').value = FormatMoney(dataProduct.price);
document.getElementById('stock').value = dataProduct.stock;
document.getElementById('createdBy').value = dataProduct.createdBy;
document.getElementById('createdDate').value = dataProduct.createdDate;

function goToListProduct(){
    document.location.href = 'listProduct.html'
}        
