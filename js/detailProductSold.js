dataUser = {};

user.forEach(data => {
    if(data.id === parseInt(localStorage.idUser)){
        dataUser = data;
    }
});
space = dataUser.name.indexOf(' ');
document.getElementById('profileName').innerHTML = dataUser.name.substring(0 , space);

detailProductSoldId = localStorage.getItem('detailProductSoldId');
dataProductSold ={}

productSold.forEach(data => {
    if(parseInt(data.id) === parseInt(detailProductSoldId)){
        dataProductSold = data;
    }
})

document.getElementById('id').value = dataProductSold.id
document.getElementById('name').value = dataProductSold.customerName
document.getElementById('nhp').value = dataProductSold.noHandphone
document.getElementById('date').value = dataProductSold.date

total = 0;
        detailProductSold.forEach(dataDetail =>{
            if(parseInt(detailProductSoldId) === dataDetail.idSold){
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
    if(parseInt(data.idSold) === parseInt(detailProductSoldId)){
        namaProduct = '';
        price = 0;

        product.forEach(dataPro => {
            if(parseInt(dataPro.id) === parseInt(data.idProduct)){
                price = dataPro.price;
                namaProduct = dataPro.name
            }
        });
        
        ObjectData = {
            id: index+1,
            namaProduct: namaProduct,
            price: price,
            qty: data.qty,
            total: price*data.qty,
        };

        tableDataProduct.push(ObjectData)
    }
});


function tampilData(dataLoop){
    document.getElementById('table').innerHTML = '';
    document.getElementById('table').innerHTML = `            
    <tr class="border-header">
            <th onclick="sortByNo()" class="bold-table">No</th>
            <th onclick="sortByName()" class="bold-table">Nama Product</th>
            <th onclick="sortByNP()" class="bold-table">Price</th>
            <th onclick="sortByQTY()" class="bold-table">Qty</th>
            <th onclick="sortByDate()" class="bold-table">Total</th>
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

function sortByDate(){
    tableDataProduct.sort((a, b) => {
        return a.total - b.total;
    });
    tampilData(tableDataProduct);
}

function goToProductSold(){
    document.location.href = 'productSold.html';

}
