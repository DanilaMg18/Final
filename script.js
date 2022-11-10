let url = 'https://635d0154cb6cf98e56aa96bd.mockapi.io/productCards'
// let productList2 = [
//         {
//           "discount": true,
//           "availableInShop": true,
//           "processor": "AMD",
//           "producer": "TOSHIBA",
//           "image": "https://picfit.topocentras.lt/xcdn-cgi/image/fit=contain,format=auto,height=150,quality=80/media/catalog/product/8/d/8ddce922_5d30_4ace_9424_e59e715648cf_516494_1664333829.jpeg",
//           "description": "Nešiojamas kompiuteris TOSHIBA A1PYU13E1181",
//           "specs": {
//             "ram": 8,
//             "screenSizeText": "15.6\" (~39,6cm)",
//             "screenSizeValue": 15.6,
//             "ssd": "GB256"
//           },
//           "price": "702,00",
//           "ePrice": false,
//           "shopPrice": true
//         },
//         {
//           "discount": true,
//           "availableInShop": true,
//           "processor": "AMD",
//           "producer": "TOSHIBA",
//           "image": "https://picfit.topocentras.lt/xcdn-cgi/image/fit=contain,format=auto,height=150,quality=80/media/catalog/product/b/2/b2d80a67_8649_4516_b31b_de8a65287ef0_516493_1664333827.jpeg",
//           "description": "Nešiojamas kompiuteris TOSHIBA A1PYU13E1183",
//           "specs": {
//             "ram": 8,
//             "screenSizeText": "15.6\" (~39,6cm)",
//             "screenSizeValue": 15.6,
//             "ssd": "GB256"
//           },
//           "price": "644,00",
//           "ePrice": false,
//           "shopPrice": true
//         },
//         {
//           "discount": true,
//           "availableInShop": false,
//           "processor": "AMD",
//           "producer": "TOSHIBA",
//           "image": "https://picfit.topocentras.lt/xcdn-cgi/image/fit=contain,format=auto,height=150,quality=80/media/catalog/product/e/3/e3ab10be_330a_4a62_9624_5fc551755e01_515800_1663979097.jpeg",
//           "description": "Nešiojamas kompiuteris TOSHIBA A1PMM20E11HA",
//           "specs": {
//             "ram": 16,
//             "screenSizeText": "15.6\" (~39,6cm)",
//             "screenSizeValue": 15.6,
//             "ssd": "GB512"
//           },
//           "price": "1192,00",
//           "ePrice": true,
//           "shopPrice": false
//         },
//         {
//           "discount": true,
//           "availableInShop": true,
//           "processor": "AMD",
//           "producer": "TOSHIBA",
//           "image": "https://picfit.topocentras.lt/xcdn-cgi/image/fit=contain,format=auto,height=150,quality=80/media/catalog/product/f/i/file_515159_1663803347.jpg",
//           "description": "Nešiojamas kompiuteris TOSHIBA A1PYS36E1166",
//           "specs": {
//             "ram": 8,
//             "screenSizeText": "14\" (~35,6cm)",
//             "screenSizeValue": 14,
//             "ssd": "GB256"
//           },
//           "price": "575,00",
//           "ePrice": false,
//           "shopPrice": false
//         },
//         {
//           "discount": true,
//           "availableInShop": true,
//           "processor": "AMD",
//           "producer": "TOSHIBA",
//           "image": "https://picfit.topocentras.lt/xcdn-cgi/image/fit=contain,format=auto,height=150,quality=80/media/catalog/product/f/i/file_515155_1663803319.jpg",
//           "description": "Nešiojamas kompiuteris TOSHIBA A1PYS44E1114",
//           "specs": {
//             "ram": 4,
//             "screenSizeText": "15.6\" (~39,6cm)",
//             "screenSizeValue": 15.6,
//             "ssd": "GB256"
//           },
//           "price": "448,00",
//           "ePrice": false,
//           "shopPrice": true
//         },
//         {
//           "discount": false,
//           "availableInShop": true,
//           "processor": "AMD",
//           "producer": "TOSHIBA",
//           "image": "https://picfit.topocentras.lt/xcdn-cgi/image/fit=contain,format=auto,height=150,quality=80/media/catalog/product/f/i/file_514171_1663371522.jpg",
//           "description": "Nešiojamas kompiuteris TOSHIBA A1PYS44E1113",
//           "specs": {
//             "ram": 8,
//             "screenSizeText": "15.6\" (~39,6cm)",
//             "screenSizeValue": 15.6,
//             "ssd": "GB256"
//           },
//           "price": "530,00",
//           "ePrice": false,
//           "shopPrice": true
//         },
//         {
//           "discount": true,
//           "availableInShop": true,
//           "processor": "AMD",
//           "producer": "TOSHIBA",
//           "image": "https://picfit.topocentras.lt/xcdn-cgi/image/fit=contain,format=auto,height=150,quality=80/media/catalog/product/c/e/cec837f3_5968_48e5_817d_52b30cb11e1c_451735_1642686411.jpeg",
//           "description": "Nešiojamas kompiuteris TOSHIBA A1PMM10E111T",
//           "specs": {
//             "ram": 8,
//             "screenSizeText": "13.3\" (~33,8cm)",
//             "screenSizeValue": 13.3,
//             "ssd": "GB256"
//           },
//           "price": "1019,00",
//           "ePrice": false,
//           "shopPrice": true
//         },
//         {
//           "discount": false,
//           "availableInShop": false,
//           "processor": "Intel",
//           "producer": "TOSHIBA",
//           "image": "https://picfit.topocentras.lt/xcdn-cgi/image/fit=contain,format=auto,height=150,quality=80/media/catalog/product/f/i/file_515156_1663803338.jpg",
//           "description": "Nešiojamas kompiuteris TOSHIBA A1PML15E1133",
//           "specs": {
//             "ram": 32,
//             "screenSizeText": "17.3\" (~43,9cm)",
//             "screenSizeValue": 17.3,
//             "ssd": "GB512"
//           },
//           "price": "1402,00",
//           "ePrice": true,
//           "shopPrice": false
//         },
//         {
//           "discount": true,
//           "availableInShop": false,
//           "processor": "Intel",
//           "producer": "TOSHIBA",
//           "image": "https://picfit.topocentras.lt/xcdn-cgi/image/fit=contain,format=auto,height=150,quality=80/media/catalog/product/f/i/file_514170_1663371506.jpg",
//           "description": "Nešiojamas kompiuteris TOSHIBA A1PYS44E1112",
//           "specs": {
//             "ram": 16,
//             "screenSizeText": "13\" (~33,0cm)",
//             "screenSizeValue": 13,
//             "ssd": "TB1"
//           },
//           "price": "1502,00",
//           "ePrice": true,
//           "shopPrice": false
//         }
//       ]
    
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
            if (product.specs.ssd === prod){
                 amount++
            }else if (data-ram === prod) {
            let el = document.querySelector(`.ram.result-amount`)
                el.innerHTML = `(${amount})`
                }

            })
        }

    )}














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




          
          
          
          
          










