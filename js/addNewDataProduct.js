dataUser = {};

user.forEach(data => {
    if(data.id === parseInt(localStorage.idUser)){
        dataUser = data;
    }
});
space = dataUser.name.indexOf(' ');
document.getElementById('profileName').innerHTML = dataUser.name.substring(0 , space);

function goToListProduct(){
    document.location.href = 'listProduct.html';
}        

function validation(){
    if(document.getElementById('name').value === "" || document.getElementById('price').value === "" || document.getElementById('stock').value === "" || document.getElementById('urlImage').value  === ""){
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
        getId = 0;

        product.forEach(data =>{
            getId = parseInt(data.id);
        })

        lastIndex = document.getElementById('urlImage').value.lastIndexOf("\\");
        src = "assets/foto new product/" + document.getElementById('urlImage').value.substring(lastIndex+1);

        months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        dateNow = new Date();

        month = months[dateNow.getMonth()];
        tanggal = dateNow.getDate();
        year = dateNow.getFullYear();

        let date = `${month} ${tanggal}, ${year}`

        dataAfterEdit = {
            id: getId+1,
            name: document.getElementById('name').value,
            price: document.getElementById('price').value,
            stock: document.getElementById('stock').value,
            photo: src,
            createdBy: parseInt(localStorage.getItem('idUser')),
            createdDate: date
        };
        console.log(dataAfterEdit);
        productEdit = product;
        productEdit.push(dataAfterEdit);

        localStorage.setItem('product', JSON.stringify(productEdit));
        product = productEdit
        goToListProduct();
    }
}
