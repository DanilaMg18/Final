let url = 'https://635d0154cb6cf98e56aa96bd.mockapi.io/productCards'
let productList;
let wrapper  = document.querySelector(".cards-list");
let producerList = ["TOSHIBA", "APPLE", "HP", "ACER", "ASUS", "LENOVO", "DELL"];
let ssdList = ['128GB', '256GB', '512GB', '1TB', '2TB', '4TB'];
let ramList = [4, 8, 16, 32, 64]
let procList = ['AMD', 'Intel', 'Apple M1', 'Apple M2']
let screenList = [13, 13.3, 14, 15.6, 16, 17.3]
let priceList = ['702,00', '644,00', '1192,00', '575,00', '448,00', '530,00', '1019,00', '1402,00', '1502,00']

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
    let eList = document.querySelectorAll(`.ssd.result-amount`)
    

    filterList.forEach(ssd => {
        let amount = 0;

        productList.forEach(product => {
            if (product.specs.ssd === ssd)amount++
           
        })
        
        eList.forEach(ssdFilterEl => {
            if (ssdFilterEl.dataset.ssd === ssd){
                ssdFilterEl.innerHTML = `(${amount})`
            }
        })
    })
}

function countProc(filterList,productList) {

    let eList = document.querySelectorAll(`.proc.result-amount`)
    

    filterList.forEach(proc => {
        let amount = 0;

        productList.forEach(product => {
            if (product.processor === proc)amount++
           
        })
        
        eList.forEach(procFilterEl => {
            if (procFilterEl.dataset.proc === proc){
                procFilterEl.innerHTML = `(${amount})`
            }
        })
    })
}

function countScreen(filterList,productList) {
    let eList = document.querySelectorAll(`.screen.result-amount`)
    

    filterList.forEach(screen => {
        let amount = 0;

        productList.forEach(product => {
            if (product.specs.screenSizeValue === screen)amount++
           
        })
        
        eList.forEach(screenFilterEl => {

            if (screenFilterEl.dataset.screen == screen){
                screenFilterEl.innerHTML = `(${amount})`
            }
        })
    })
}

function countRam(filterList,productList) {
    let eList = document.querySelectorAll(`.ram.result-amount`)
    

    filterList.forEach(ram => {
        let amount = 0;

        productList.forEach(product => {
            if (product.specs.ram === ram)amount++
           
        })
        
        eList.forEach(ramFilterEl => {

            if (ramFilterEl.dataset.ram == ram){
                ramFilterEl.innerHTML = `(${amount})`
            }
        })
    })
}

function countPrice(filterList,productList){
    let eList = document.querySelectorAll(`.price.result-amount`)
    

    filterList.forEach(price => {
        let amount = 0;

        productList.forEach(product => {
            if (product.price === price)amount++
           
        })
        
        eList.forEach(priceFilterEl => {

            if (priceFilterEl.dataset.price == price){
                priceFilterEl.innerHTML = `(${amount})`
            }
        })
    })
}

function sortOption(productList,amount) {
 let newArr = productList.slice(0,amount)
    return newArr
}

let selectEL = document.querySelector(`.count.sort-select`)

selectEL.addEventListener('change', (e) => {
    if (e.target.value === "5") {
        render(sortOption(productList,5),wrapper)
    }
    else if(e.target.value === "10") {
        render(sortOption(productList,10),wrapper)
    }
})


function sortFromDownToUp(productList) {
    productList.sort((a,b) => a.price > b.price? 1 : -1);
}

let selectEL2 = document.querySelector(`.menu.sort-select`)

selectEL2.addEventListener('change', (e) => {
    if (e.target.value === "price_asc") {
        render(sortFromDownToUp(productList),wrapper)
    }
 
})








async function getx() {
    let res = await fetch('https://635d0154cb6cf98e56aa96bd.mockapi.io/productCards')
    let dataResp = await res.json()
    productList = dataResp[0].data
    console.log(productList);
    render(productList,wrapper);
    countAmount(producerList,productList)
    countSsd(ssdList,productList)
    countProc(procList,productList)
    countScreen(screenList,productList)
    countRam(ramList,productList)
}
getx();




          
          
          
          
          










