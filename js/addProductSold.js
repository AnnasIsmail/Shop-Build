dataUser = {};

user.forEach(data => {
    if(data.id === parseInt(localStorage.idUser)){
        dataUser = data;
    }
});
space = dataUser.name.indexOf(' ');
document.getElementById('profileName').innerHTML = dataUser.name.substring(0 , space);

addProductSoldId = 0;

productSold.forEach(data => {
    addProductSoldId = parseInt(data.id)+1
});


product.forEach((data , index) => {
    
    let select = document.createElement('option');
    select.setAttribute('value', data.id);
    select.innerHTML = data.name;
    document.getElementById('products').appendChild(select);

});

function getDataProduct(){

    total = 0;

detailProductSold.forEach(dataDetail =>{
    if(parseInt(addProductSoldId) === dataDetail.idSold){
        price = 0;
        product.forEach(dataProduct =>{
            if(dataDetail.idProduct === dataProduct.id){
                price = dataProduct.price
            }
        })

        total += price*dataDetail.qty;
    }
})


document.getElementById('tp').value = FormatMoney(total)



tableDataProduct = [];

detailProductSold.forEach((data , index)=>{
    if(parseInt(data.idSold) === parseInt(addProductSoldId)){
        namaProduct = '';
        price = 0;
        idProduct = 0;

        product.forEach(dataPro => {
            if(parseInt(dataPro.id) === parseInt(data.idProduct)){
                price = dataPro.price;
                namaProduct = dataPro.name
                idProduct = dataPro.id
            }
        });
        
        ObjectData = {
            id: index+1,
            idProduct: idProduct,
            namaProduct: namaProduct,
            price: price,
            qty: data.qty,
            total: price*data.qty,
        };

        tableDataProduct.push(ObjectData)
    }
});
}

getDataProduct()

function tampilData(dataLoop){
    document.getElementById('table').innerHTML = '';
    document.getElementById('table').innerHTML = `            
    <tr class="border-header">
            <th onclick="sortByNo()" class="bold-table">No</th>
            <th onclick="sortByName()" class="bold-table">Nama Product</th>
            <th onclick="sortByNP()" class="bold-table">Price</th>
            <th onclick="sortByQTY()" class="bold-table">Qty</th>
            <th onclick="sortByDate()" class="bold-table">Total</th>
            <th class="bold-table">Action</th>
        </tr>`;

    dataLoop.forEach((data , index)=>{

            const tr = document.createElement('tr');

            const tdNo = document.createElement('td');
            tdNo.innerHTML = index+1
            tr.appendChild(tdNo);

            const tdName = document.createElement('td');
            tdName.innerHTML = data.namaProduct
            tr.appendChild(tdName);

            const tdStock = document.createElement('td');
            tdStock.innerHTML = FormatMoney(data.price)
            tr.appendChild(tdStock);

            const tdBy = document.createElement('td');
            tdBy.innerHTML = data.qty
            tr.appendChild(tdBy);

            const tdDate = document.createElement('td');
            tdDate.innerHTML = FormatMoney(data.total)
            tr.appendChild(tdDate);

            const tdAction = document.createElement('td');
            tdAction.innerHTML = `<img src="assets/Delete.svg" class="cursor" onclick="goToRemove(${data.idProduct})" alt="">`
            tr.appendChild(tdAction);
            
            document.getElementById('table').appendChild(tr);

        
    })

}

tampilData(tableDataProduct);

function sortByNo(){
    tableDataProduct.sort((a, b) => {
        return a.id - b.id;
    });
    tampilData(tableDataProduct);
}

function sortByName(){
    tableDataProduct.sort((a, b) => {
        let fa = a.namaProduct.toLowerCase(),
            fb = b.namaProduct.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
    tampilData(tableDataProduct);
}

function sortByNP(){
    tableDataProduct.sort((a, b) => {
        return a.price - b.price;
    });
    tampilData(tableDataProduct);
}

function sortByQTY(){
    tableDataProduct.sort((a, b) => {
        return a.qty - b.qty;
    });
    tampilData(tableDataProduct);
}

function focuss(){
    document.getElementById('errorSubmit').classList.add('hidden');
}

function sortByDate(){
    tableDataProduct.sort((a, b) => {
        return a.total - b.total;
    });
    tampilData(tableDataProduct);
}

function validationAddData(){
    res = false;

        tableDataProduct.forEach(data => {
            if(data.namaProduct === document.getElementById("products").options[document.getElementById("products").selectedIndex].text){
                document.getElementById('errorSubmit').classList.remove('hidden');
                document.getElementById('errorSubmit').innerHTML = 'Mohon Masukan Produk secara berkala. tidak dapat memasukan dua produk yang sama dalam satu transaksi.';
                 res = false;
            }else{
                res = true;
                tableDataProduct.forEach(data => {
                    if(data.namaProduct === document.getElementById("products").options[document.getElementById("products").selectedIndex].text){
                        document.getElementById('errorSubmit').classList.remove('hidden');
                        document.getElementById('errorSubmit').innerHTML = 'Mohon Masukan Produk secara berkala. tidak dapat memasukan dua produk yang sama dalam satu transaksi.';
                        res = false;
                    }
                });
            }
        })

        if(document.getElementById("qty").value === ''){
            document.getElementById('errorSubmit').classList.remove('hidden');
            document.getElementById('errorSubmit').innerHTML = 'Pastikan Seluruh Field sudah terisi!';
            res = false;
        }

        if(tableDataProduct.length === 0){
            res = true;
        }

    return res;
}

function addData(){
    focuss();
    valid = validationAddData();
    console.log(valid)
    if(valid === true){
        dataArray = [];
        dataDetail = {
            idSold: parseInt(addProductSoldId),
            idProduct: parseInt(document.getElementById("products").value),
            qty: parseInt(document.getElementById("qty").value)
        };
        detailProductSold.forEach(data=>{
            dataArray.push(data);
        });
        dataArray.push(dataDetail);

        localStorage.setItem('detailProductSold', JSON.stringify(dataArray));
        detailProductSold = dataArray;

        document.getElementById("qty").value = '';
        document.getElementById("products").selectedIndex = 0;
        getDataProduct()
        tampilData(tableDataProduct);
    }
}

function goToRemove(id){
    dataArray = [];
    detailProductSold.forEach(data=>{
        if(parseInt(id) === parseInt(data.idProduct) && parseInt(addProductSoldId) === parseInt(data.idSold)){

        }else{
            dataArray.push(data);
        }
    });

    localStorage.setItem('detailProductSold', JSON.stringify(dataArray));
        detailProductSold = dataArray;

        getDataProduct()
        tampilData(tableDataProduct);
}


function validation(){
    if(document.getElementById('name').value === "" || document.getElementById('nhp').value === "" ){
        document.getElementById('errorSubmit').classList.remove('hidden');
        document.getElementById('errorSubmit').innerHTML = 'Pastikan Seluruh Field sudah terisi!';
        return false;
    }else{
        return true;
    }
}

function goToProductSold(){
    document.location.href = 'productSold.html';

}

function submitEdit(){
    
    valid = validation();

    if(valid === true){

        months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        dateNow = new Date();

        month = months[dateNow.getMonth()];
        tanggal = dateNow.getDate();
        year = dateNow.getFullYear();

        let date = `${month} ${tanggal}, ${year}`

        dataAfterEdit = {
            id: parseInt(addProductSoldId),
            customerName: document.getElementById('name').value,
            noHandphone: document.getElementById('nhp').value,
            date: date,
        };
        
        productEdit = [];

        productSold.forEach(data => {
            productEdit.push(data);
        });
        productEdit.push(dataAfterEdit);

        localStorage.setItem('productSold', JSON.stringify(productEdit));
        productSold = productEdit;
        goToProductSold();
    }
}