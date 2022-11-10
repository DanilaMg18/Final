let url = 'https://635d0154cb6cf98e56aa96bd.mockapi.io/productCards'
let productList;

let wrapper  = document.querySelector(".cards-list");
let producerList = ["TOSHIBA", "APPLE", "HP", "ACER", "ASUS", "LENOVO", "DELL"];
let ssdList = ['128GB', '256GB', '512GB', '1TB', '2TB', '4TB'];
function render(list, parent) {
  parent.innerHTML = '';
  
  list.forEach((card, idx) => {
    let el = document.createElement('div');
    el.innerHTML = `
    <div class="product-card">
        <div class="product-image">
            <img src="${card.image}">
        </div>
        <div class="product-name">
            ${card.description}
        </div>
        <div class="product-specs">
            <div class="spec-line">
                <div class="label">Atmintinė: </div>
                <div class="value">${card.specs.ram}</div>
            </div>
            <div class="spec-line">
                <div class="label">Ekrano įstrižainė: </div>
                <div class="value">${card.specs.screenSizeText}</div>
            </div>
            <div class="spec-line">
                <div class="label">SSD: </div>
                <span> </span>
                <div class="value">${card.specs.ssd}</div>
            </div>
        </div>
        <div class="product-price">
            ${card.price}€
        </div>
        <div class="product-action-block">
            <div class="to-cart-button">
                <img src="https://www.topocentras.lt/140fe2aeea6055f5fc2782fbc940be96.svg" alt="cart">
                <span>Į krepšelį</span>
            </div>
            <div class="favourite-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>                  
            </div>
        </div>
        <div class="product-tax">
            + 7,01 € Laikmenos mokestis
        </div>

        <div class="delivery-footer ${card.availableInShop? 'show' : ''}">
            <img src="https://www.topocentras.lt/assets/icons/shipping.svg" alt="Delivery car">
            <span>Turime! Atsiimkite per 30min.</span>
        </div>

        <div class="discount-code ${card.discount? 'show' : ''}">
            <img src="https://www.topocentras.lt/media/amasty/amlabel/1112184x84px-ikona-B.png" alt="discount">
        </div>

        <div class="e-price ${card.ePrice? 'show' : ''}">E-kaina</div>
        <div class="shop-price ${card.shopPrice? 'show' : ''}">Tik Topocentras.lt</div>
    </div>
    `
    
    parent.append(el)
    })
}

function countAmount(filterList,productList) {
    filterList.forEach(prod => {
        let amount = 0;

        productList.forEach(product => {
            if (product.producer === prod) amount++
        })

        let el = document.querySelector(`.${prod}.result-amount`)
        el.innerHTML = `(${amount})`
    })
    
}

function countSsd(filterList,productList) {
    filterList.forEach(prod => {
        let amount = 0;

        productList.forEach(product => {
            if (product.ssd === prod) amount++
        })

        let el = document.querySelector(`.${prod}.result-amount`)
        el.innerHTML = `(${amount})`
    })
}













async function getx() {
    let res = await fetch('https://635d0154cb6cf98e56aa96bd.mockapi.io/productCards')
    let dataResp = await res.json()
    let productList = dataResp[0].data
    console.log(productList);
    render(productList,wrapper);
    countAmount(producerList,productList)
    countSsd(ssdList,productList)
}
getx();




          
          
          
          
          










