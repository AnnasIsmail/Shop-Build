
dataUser = {};

user.forEach(data => {
    if(data.id === parseInt(localStorage.idUser)){
        dataUser = data;
    }
});
space = dataUser.name.indexOf(' ');
document.getElementById('profileName').innerHTML = dataUser.name.substring(0 , space);

function tampilData(dataProduct){
    document.getElementById('table').innerHTML = '';
    document.getElementById('table').innerHTML = `            
    <tr class="border-header">
            <th onclick="sortByNo()" class="bold-table">No</th>
            <th onclick="sortByName()" class="bold-table">Nama Customer</th>
            <th onclick="sortByNP()" class="bold-table">Nomer Handphone</th>
            <th onclick="sortByQTY()" class="bold-table">Total Payment</th>
            <th onclick="sortByDate()" class="bold-table">Tanggal</th>
            <th class="bold-table">Action</th>
        </tr>`;

    dataProduct.forEach((data , index)=>{

        const tr = document.createElement('tr');

        const tdNo = document.createElement('td');
        tdNo.innerHTML = index+1
        tr.appendChild(tdNo);

        const tdName = document.createElement('td');
        tdName.innerHTML = data.customerName
        tr.appendChild(tdName);

        const tdStock = document.createElement('td');
        tdStock.innerHTML = data.noHandphone
        tr.appendChild(tdStock);

        const tdBy = document.createElement('td');
        total = 0;
        detailProductSold.forEach(dataDetail =>{
            if(data.id === dataDetail.idSold){
                price = 0;
                product.forEach(dataProduct =>{
                    if(dataDetail.idProduct === dataProduct.id){
                        price = dataProduct.price
                    }
                })

                total += price*dataDetail.qty;
            }
        })
        tdBy.innerHTML = FormatMoney(total)
        tr.appendChild(tdBy);

        const tdDate = document.createElement('td');
        tdDate.innerHTML = data.date
        tr.appendChild(tdDate);

        const tdAction = document.createElement('td');
        tdAction.innerHTML = `<img onclick="goToDetail(${data.id})" src="assets/Eye.svg" class="cursor" alt=""><img src="assets/Edit.svg" onclick="goToEdit(${data.id})" class="pl cursor" alt=""><img src="assets/Delete.svg" class="cursor" onclick="goToRemove(${data.id})" alt="">`
        tr.appendChild(tdAction);
        
        document.getElementById('table').appendChild(tr);
    })

}

tampilData(productSold);

function sortByNo(){
    productSold.sort((a, b) => {
        return a.id - b.id;
    });
    tampilData(productSold);
}

function sortByName(){
    productSold.sort((a, b) => {
        let fa = a.customerName.toLowerCase(),
            fb = b.customerName.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
    tampilData(productSold);
}

function sortByNP(){
    productSold.sort((a, b) => {
        return a.noHandphone - b.noHandphone;
    });
    tampilData(productSold);
}

function sortByQTY(){
    productSold.sort((a, b) => {
        
    totalA = 0;
        detailProductSold.forEach(dataDetail =>{
            if(a.id === dataDetail.idSold){
                price = 0;
                product.forEach(dataProduct =>{
                    if(dataDetail.idProduct === dataProduct.id){
                        price = dataProduct.price
                    }
                })

                totalA += price*dataDetail.qty;
            }
        })

        totalB = 0;
        detailProductSold.forEach(dataDetail =>{
            if(b.id === dataDetail.idSold){
                price = 0;
                product.forEach(dataProduct =>{
                    if(dataDetail.idProduct === dataProduct.id){
                        price = dataProduct.price
                    }
                })

                totalB += price*dataDetail.qty;
            }
        })


        return totalA - totalB;
    });
    tampilData(productSold);
}



function sortByDate(){
    productSold.sort((a, b) => {
        let da = new Date(a.date),
            db = new Date(b.date);
        return da - db;
    });
    tampilData(productSold);
}

function searchData(){
    const word = document.getElementById('searchWord').value;
    dataRes = [];

    productSold.forEach(data => {

        total = 0;
        detailProductSold.forEach(dataDetail =>{
            if(data.id === dataDetail.idSold){
                price = 0;
                product.forEach(dataProduct =>{
                    if(dataDetail.idProduct === dataProduct.id){
                        price = dataProduct.price
                    }
                })

                total += price*dataDetail.qty;
            }
        })

        value = `${data.customerName}${data.noHandphone}${total}${data.date}`

        if(value.toLowerCase().search(word.toLowerCase()) > -1){
            dataRes.push(data);
        }
    });

    tampilData(dataRes);
}

function goToDetail(id){
    localStorage.setItem('detailProductSoldId', id);
    document.location.href = 'detailProductSold.html'
}

function goToEdit(id){
    localStorage.setItem('detailProductSoldId', id);
    document.location.href = 'editProductSold.html'
}

function goToRemove(id){
    let text = "Apakah Kamu Yakin Ingin Menghapus Data Ini?";
    if (confirm(text) == true) {
        dataArray = [];
        productSold.forEach(data => {
    
            if(parseInt(data.id) === parseInt(id)){
                
            }else{
                dataArray.push(data);
            }
    
            localStorage.setItem('productSold', JSON.stringify(dataArray));
            productSold = dataArray;
    
        });
    
        dataArrayDetail = [];
        detailProductSold.forEach(data=>{
            if(parseInt(data.idSold) === parseInt(id)){
                
            }else{
                dataArrayDetail.push(data);
            }
    
            localStorage.setItem('detailProductSold', JSON.stringify(dataArrayDetail));
            productSold = dataArrayDetail;
            location.reload();
    
        })
    } else {

    }

}

function goToAddNewData(){
    document.location.href = 'addProductSold.html'
}
