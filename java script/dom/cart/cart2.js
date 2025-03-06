let item_1={id:101,imgURL:"https://fossil.scene7.com/is/image/FossilPartners/ME3098_9L?$sfcc_lifestyle_large$",pname:"Fossil Watch",price:7000,qty:1};

let item_2={id:102,imgURL:"https://fossil.scene7.com/is/image/FossilPartners/ME3098_9L?$sfcc_lifestyle_large$",pname:"Mi Watch",price:88000,qty:1};

let item_3={id:103,imgURL:"https://fossil.scene7.com/is/image/FossilPartners/ME3098_9L?$sfcc_lifestyle_large$",pname:"Fastrack Watch",price:17000,qty:1};


let products=[item_1,item_2,item_3];


function displayProducts(items) {
    if (items.length != 0) {
        let eachProduct = '';

        for (let item of items) {
            eachProduct += `<tr>
                                <td>${item.id}</td>
                                <td>
                                    <img src="${item.imgURL}" alt="" width="30px" height="30px">
                                </td>
                                <td>${item.pname}</td>
                                <td>&#8377; ${item.price}.00</td>
                                <td>
                                    <i class="bi bi-dash-circle-fill" id="minus-btn" onclick="deQty(${item.id})"></i>
                                    <span id="display-qty">${item.qty}</span>
                                    <i class="bi bi-plus-circle-fill" onclick="incQty(${item.id})"></i>
                                </td>
                                <td>&#8377; ${item.price * item.qty}.00</td>
                            </tr>`;
        }
        document.getElementById('display-products').innerHTML = eachProduct;
    }
}

function incQty(id) {
    let updatedArr = products.map((item) => {
        if (item.id == id) {
            return { ...item, qty: ++item.qty };
        } else {
            return item;
        }
    });

    products = updatedArr;
    localStorage.setItem('cart', JSON.stringify(products));
    displayProducts(updatedArr);
}

function deQty(id) {
    let updatedArr = products.map((item) => {
        if (item.id == id && item.qty > 1) {
            return { ...item, qty: --item.qty };
        } else {
            return item;
        }
    });

    products = updatedArr;
    localStorage.setItem('cart', JSON.stringify(products));
    displayProducts(updatedArr);
}

function loadCart() {
    let storedCart = localStorage.getItem('cart');
    if (storedCart) {
        products = JSON.parse(storedCart);
    }
    displayProducts(products);
}
loadCart();
