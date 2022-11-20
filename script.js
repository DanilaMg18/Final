let url = 'https://635d0154cb6cf98e56aa96bd.mockapi.io/productCards'
let productList;
let wrapper  = document.querySelector(".cards-list");
let producerList = ["TOSHIBA", "Apple", "HP", "ACER", "ASUS", "LENOVO", "DELL"];
let ssdList = ['128GB', '256GB', '512GB', '1TB', '2TB', '4TB'];
let ramList = [4, 8, 16, 32, 64]
let procList = ['AMD', 'Intel', 'M1', 'M2']
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

function countPrice(productList){
    let eList = document.querySelectorAll(`.price.result-amount`)

    eList.forEach(label => {
        let priceRange = label.dataset.price
        if (priceRange === '600/'){
            let amount = productList.filter(product => parseFloat(product.price) < 600).length
            label.innerHTML = `(${amount})`
        }
        if (priceRange === '600/750'){
            let amount = productList.filter(product => parseFloat(product.price) > 600 && parseFloat(product.price) < 750).length
            label.innerHTML = `(${amount})`
        }
        if (priceRange === '750/900'){
            let amount = productList.filter(product => parseFloat(product.price) > 750 && parseFloat(product.price) < 900).length
            label.innerHTML = `(${amount})`
        }
        if (priceRange === '900/1100'){
            let amount = productList.filter(product => parseFloat(product.price) > 900 && parseFloat(product.price) < 1100).length
            label.innerHTML = `(${amount})`
        }
        if (priceRange === '1100/1220'){
            let amount = productList.filter(product => parseFloat(product.price) > 1100 && parseFloat(product.price) < 1220).length
            label.innerHTML = `(${amount})`
        }
        if (priceRange === '1220/1500'){
            let amount = productList.filter(product => parseFloat(product.price) > 1220 && parseFloat(product.price) < 1500).length
            label.innerHTML = `(${amount})`
        }
        if (priceRange === '1500/1800'){
            let amount = productList.filter(product => parseFloat(product.price) > 1500 && parseFloat(product.price) < 1800).length
            label.innerHTML = `(${amount})`
        }
        if (priceRange === '1800/2200'){
            let amount = productList.filter(product => parseFloat(product.price) > 3000 && parseFloat(product.price) < 2200).length
            label.innerHTML = `(${amount})`
        }
        if (priceRange === '2200/3000'){
            let amount = productList.filter(product => parseFloat(product.price) > 2200 && parseFloat(product.price) < 3000).length
            label.innerHTML = `(${amount})`
        }
        if (priceRange === '3000/'){
            let amount = productList.filter(product => parseFloat(product.price) > 3000).length
            label.innerHTML = `(${amount})`
        }
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
    let newArray = productList.sort((a,b) => parseFloat(a.price) > parseFloat(b.price)? 1 : -1);
    return newArray
}


let selectEL2 = document.querySelector(`.menu.sort-select`)

selectEL2.addEventListener('change', (e) => {
    if (e.target.value === "price_asc") {
        render(sortFromDownToUp(productList),wrapper)
    }
    else if(e.target.value === 'price_desc') {
        render(sortFromUpToDown(productList),wrapper)
    }
 
})

function sortFromUpToDown(productList) {
    let newArray = productList.sort((a,b) => parseFloat(a.price) < parseFloat(b.price)? 1 : -1);
    return newArray
}

function sortByPrice1(productList){
    let newArr = productList.filter(product => parseFloat(product.price) <= 600)
    return newArr
}

function sortByPrice2(productList){
    let newArr = productList.filter(product => parseFloat(product.price) > 600 && parseFloat(product.price) < 750)
    return newArr
}

function sortByPrice3(productList){
    let newArr = productList.filter(product => parseFloat(product.price) > 750 && parseFloat(product.price) < 900)
    return newArr
}

function sortByPrice4(productList){
    let newArr = productList.filter(product => parseFloat(product.price) > 900 && parseFloat(product.price) < 1100)
    return newArr
}

function sortByPrice5(productList){
    let newArr = productList.filter(product => parseFloat(product.price) > 1100 && parseFloat(product.price) < 1220)
    return newArr
}

function sortByPrice6(productList){
    let newArr = productList.filter(product => parseFloat(product.price) > 1220 && parseFloat(product.price) < 1500)
    return newArr
}

function sortByPrice7(productList){
    let newArr = productList.filter(product => parseFloat(product.price) > 1500 && parseFloat(product.price) < 1800)
    return newArr
}

let inputEl1 = document.querySelector(`.below600.input-price`)
let inputEl2 = document.querySelector(`.below600.input-price2`)
let inputEl3 = document.querySelector(`.below600.input-price3`)
let inputEl4 = document.querySelector(`.below600.input-price4`)
let inputEl5 = document.querySelector(`.below600.input-price5`)
let inputEl6 = document.querySelector(`.below600.input-price6`)
let inputEl7 = document.querySelector(`.below600.input-price7`)
let inputEl8 = document.querySelector(`.below600.input-price8`)
let inputEl9 = document.querySelector(`.below600.input-price9`)
let inputEl10 = document.querySelector(`.below600.input-price10`)



inputEl1.addEventListener('change', (e) => {
    if (e.target.value === 'below600') {
    render(sortByPrice1(productList),wrapper)
}})

inputEl2.addEventListener('change', (e) => {
    if (e.target.value === 'below600-750'){
    render(sortByPrice2(productList), wrapper)
}})

inputEl3.addEventListener('change', (e) => {
    if (e.target.value === 'below750-900'){
    render(sortByPrice3(productList), wrapper)
}})

inputEl4.addEventListener('change', (e) => {
    if (e.target.value === 'below900-1100'){
    render(sortByPrice4(productList), wrapper)
}})

inputEl5.addEventListener('change', (e) => {
    if (e.target.value === 'below1100-1220') {
    render(sortByPrice5(productList),wrapper)
}})

inputEl6.addEventListener('change', (e) => {
    if (e.target.value === 'below1220-1500') {
    render(sortByPrice6(productList),wrapper)
}})

inputEl7.addEventListener('change', (e) => {
    if (e.target.value === 'below1500-1800') {
    render(sortByPrice7(productList),wrapper)
}})

let inputName1 = document.querySelector(`.TOSHIBA.input`)

inputName1.addEventListener('change', (e) => {
    if (e.target.value === 'TOSHIBA') {
    render(sortByName(productList),wrapper)
}})

function sortByName(productList){
    let newArr = productList.filter(product => product.producer === 'TOSHIBA')
    return newArr
}

let inputScreen1 = document.querySelector(`.screen.input1`)
let inputScreen2 = document.querySelector(`.screen.input2`)
let inputScreen3 = document.querySelector(`.screen.input3`)
let inputScreen4 = document.querySelector(`.screen.input4`)
let inputScreen5 = document.querySelector(`.screen.input5`)
let inputScreen6 = document.querySelector(`.screen.input6`)

inputScreen1.addEventListener('change', (e) => {
    if (e.target.value === 'screen13') {
    render(sortByScreen(productList),wrapper)
}})

inputScreen2.addEventListener('change', (e) => {
    if (e.target.value === 'screen13-3') {
    render(sortByScreen2(productList),wrapper)
}})

inputScreen3.addEventListener('change', (e) => {
    if (e.target.value === 'screen14') {
    render(sortByScreen3(productList),wrapper)
}})

inputScreen4.addEventListener('change', (e) => {
    if (e.target.value === 'screen15-6') {
    render(sortByScreen4(productList),wrapper)
}})

inputScreen5.addEventListener('change', (e) => {
    if (e.target.value === 'screen16') {
    render(sortByScreen5(productList),wrapper)
}})

inputScreen6.addEventListener('change', (e) => {
    if (e.target.value === 'screen17-3') {
    render(sortByScreen6(productList),wrapper)
}})

function sortByScreen(productList){
    let newArr = productList.filter(product => product.specs.screenSizeValue === 13 )
    return newArr
}

function sortByScreen2(productList){
    let newArr = productList.filter(product => product.specs.screenSizeValue === 13.3 )
    return newArr
}

function sortByScreen3(productList){
    let newArr = productList.filter(product => product.specs.screenSizeValue === 14 )
    return newArr
}

function sortByScreen4(productList){
    let newArr = productList.filter(product => product.specs.screenSizeValue === 15.6 )
    return newArr
}

function sortByScreen5(productList){
    let newArr = productList.filter(product => product.specs.screenSizeValue === 16 )
    return newArr
}

function sortByScreen6(productList){
    let newArr = productList.filter(product => product.specs.screenSizeValue === 17.3 )
    return newArr
}

let inputProc1 = document.querySelector(`.proc.input1`)
let inputProc2 = document.querySelector(`.proc.input2`)
let inputProc3 = document.querySelector(`.proc.input3`)
let inputProc4 = document.querySelector(`.proc.input4`)

function sortByProc1(productList){
    let newArr = productList.filter(product => product.processor === 'AMD' )
    return newArr
}

function sortByProc2(productList){
    let newArr = productList.filter(product => product.processor === 'Intel' )
    return newArr
}

function sortByProc3(productList){
    let newArr = productList.filter(product => product.processor === 'M1' )
    return newArr
}

function sortByProc4(productList){
    let newArr = productList.filter(product => product.processor === 'M2' )
    return newArr
}

inputProc1.addEventListener('change', (e) => {
    if (e.target.value === 'AMD') {
    render(sortByProc1(productList),wrapper)
}})

inputProc2.addEventListener('change', (e) => {
    if (e.target.value === 'INTEL') {
    render(sortByProc2(productList),wrapper)
}})

inputProc3.addEventListener('change', (e) => {
    if (e.target.value === 'M1') {
    render(sortByProc3(productList),wrapper)
}})

inputProc4.addEventListener('change', (e) => {
    if (e.target.value === 'M2') {
    render(sortByProc4(productList),wrapper)
}})

let inputRam1 = document.querySelector(`.ram.input1`)
let inputRam2 = document.querySelector(`.ram.input2`)
let inputRam3 = document.querySelector(`.ram.input3`)
let inputRam4 = document.querySelector(`.ram.input4`)
let inputRam5 = document.querySelector(`.ram.input5`)

function sortByRam1(productList){
    let newArr = productList.filter(product => product.specs.ram === 4 )
    return newArr
}

function sortByRam2(productList){
    let newArr = productList.filter(product => product.specs.ram === 8 )
    return newArr
}

function sortByRam3(productList){
    let newArr = productList.filter(product => product.specs.ram === 16 )
    return newArr
}

function sortByRam4(productList){
    let newArr = productList.filter(product => product.specs.ram === 32 )
    return newArr
}

function sortByRam5(productList){
    let newArr = productList.filter(product => product.specs.ram === 64 )
    return newArr
}

inputRam1.addEventListener('change', (e) => {
    if (e.target.value === '4') {
    render(sortByRam1(productList),wrapper)
}})

inputRam2.addEventListener('change', (e) => {
    if (e.target.value === '8') {
    render(sortByRam2(productList),wrapper)
}})

inputRam3.addEventListener('change', (e) => {
    if (e.target.value === '16') {
    render(sortByRam3(productList),wrapper)
}})

inputRam4.addEventListener('change', (e) => {
    if (e.target.value === '32') {
    render(sortByRam4(productList),wrapper)
}})

inputRam5.addEventListener('change', (e) => {
    if (e.target.value === '64') {
    render(sortByRam5(productList),wrapper)
}})

let inputSsd1 = document.querySelector(`.ssd.input1`)
let inputSsd2 = document.querySelector(`.ssd.input2`)
let inputSsd3 = document.querySelector(`.ssd.input3`)
let inputSsd4 = document.querySelector(`.ssd.input4`)
let inputSsd5 = document.querySelector(`.ssd.input5`)
let inputSsd6 = document.querySelector(`.ssd.input6`)

function sortBySsd1(productList){
    let newArr = productList.filter(product => product.specs.ssd === '128GB' )
    return newArr
}

function sortBySsd2(productList){
    let newArr = productList.filter(product => product.specs.ssd === '256GB' )
    return newArr
}

function sortBySsd3(productList){
    let newArr = productList.filter(product => product.specs.ssd === '512GB' )
    return newArr
}

function sortBySsd4(productList){
    let newArr = productList.filter(product => product.specs.ssd === '1TB' )
    return newArr
}

function sortBySsd5(productList){
    let newArr = productList.filter(product => product.specs.ssd === '2TB' )
    return newArr
}

function sortBySsd6(productList){
    let newArr = productList.filter(product => product.specs.ssd === '4TB' )
    return newArr
}

inputSsd1.addEventListener('change', (e) => {
    if (e.target.value === '128') {
    render(sortBySsd1(productList),wrapper)
}})

inputSsd2.addEventListener('change', (e) => {
    if (e.target.value === '256') {
    render(sortBySsd2(productList),wrapper)
}})

inputSsd3.addEventListener('change', (e) => {
    if (e.target.value === '512') {
    render(sortBySsd3(productList),wrapper)
}})

inputSsd4.addEventListener('change', (e) => {
    if (e.target.value === '1') {
    render(sortBySsd4(productList),wrapper)
}})

inputSsd5.addEventListener('change', (e) => {
    if (e.target.value === '2') {
    render(sortBySsd5(productList),wrapper)
}})

inputSsd6.addEventListener('change', (e) => {
    if (e.target.value === '4') {
    render(sortBySsd6(productList),wrapper)
}})

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
    countPrice(productList)
}
getx();




          
          
          
          
          










