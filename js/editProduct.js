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

document.getElementById('id').value = idProduct;
document.getElementById('name').value = dataProduct.name;
document.getElementById('price').value = dataProduct.price;
document.getElementById('stock').value = dataProduct.stock;
document.getElementById('createdBy').value = dataProduct.createdBy;
document.getElementById('createdDate').value = dataProduct.createdDate;

function goToListProduct(){
    document.location.href = 'listProduct.html';
}        

function validation(){
    if(document.getElementById('name').value === "" || document.getElementById('price').value === "" || document.getElementById('stock').value === "" ){
        document.getElementById('errorSubmit').classList.remove('hidden');
        document.getElementById('errorSubmit').innerHTML = 'Pastikan Seluruh Field sudah terisi!';
        return false;
    }else{
        return true;
    }
}

function focuss(){
    document.getElementById('errorSubmit').classList.add('hidden');
}


function submitEdit(){
    
    valid = validation();

    if(valid === true){
        src = dataProduct.photo

        if(document.getElementById('urlImage').value !== ""){
            lastIndex = document.getElementById('urlImage').value.lastIndexOf("\\");
            src = "assets/foto new product/" + document.getElementById('urlImage').value.substring(lastIndex+1);
        }

        dataAfterEdit = {
            id: parseInt(localStorage.getItem("detailProductId")),
            name: document.getElementById('name').value,
            price: document.getElementById('price').value,
            stock: document.getElementById('stock').value,
            photo: src,
            createdBy: parseInt(document.getElementById('createdBy').value),
            createdDate: document.getElementById('createdDate').value
        };
        
        productEdit = [];

        product.forEach(data => {
            if(data.id === parseInt(localStorage.getItem("detailProductId"))){
                productEdit.push(dataAfterEdit);
            }else{
                productEdit.push(data);
            }
        });

        localStorage.setItem('product', JSON.stringify(productEdit));
        product = productEdit
        goToListProduct();
    }
}
