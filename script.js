const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);
let Qt = 1;

cakeJson.map((item, index) => {
            let cakeItem = document.querySelector('.models .cake-item').cloneNode(true);

            cakeItem.setAttribute('data-key', index);

            //Pegando o nome do bolo

            cakeItem.querySelector('.cake-item--name').innerHTML = item.name;

            //Preço do bolo

            cakeItem.querySelector('.cake-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
            item.price;

            //Descrição do bolo
            cakeItem.querySelector('.cake-item--desc').innerHTML = item.description;

            //Imagem do bolo

            cakeItem.querySelector('.cake-item--img img').src = item.img;

            //Aparecer janelinha 
            cakeItem.querySelector('a').addEventListener('click', (e) => {
                        e.preventDefault();

                        let key = e.target.closest('.cake-item').getAttribute('data-key');

                        //nome do bolo
                        c('.cakeInfo h1').innerHTML = cakeJson[key].name

                        //preço
                        c('.cakeInfo--actualPrice').innerHTML = `R$${cakeJson[key].price.toFixed(2)}`;
                        //descricao
                        c('.cakeInfo--desc').innerHTML = cakeJson[key].description;
                        //imagem
                        c('.cakeBig img').src = cakeJson[key].img;
      
                        //fazer tamanho dos bolos

                        cs('.cakeInfo--size').forEach((size,sizeIndex) => {
                            size.querySelector('span').innerHTML = cakeJson[key].sizes[sizeIndex];
                        });

                        c('.cakeInfo--qt').innerHTML = Qt

                        //opacidade
        c('.cakeWindowArea').style.opacity = 0;
        c('.cakeWindowArea').style.display = 'flex';

        setTimeout(() => {
            c('.cakeWindowArea').style.opacity = 1
        }, 200)
    });

    c('.cake-area').append(cakeItem);

})

function closeModal(){

        c('.cakeWindowArea').style.opacity = 0;
        setTimeout(() => {
            c('.cakeWindowArea').style.display = 'none';
    }, 500)
}


cs('.cakeInfo--cancelButton, .cakeInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click',closeModal)
    
})

//fazendo quantidade

c('.cakeInfo--qtmenos').addEventListener('click',()=>{
    if(Qt > 1){
        Qt--
        c('.cakeInfo--qt').innerHTML = Qt;
    } 
})

c('.cakeInfo--qtmais').addEventListener('click',()=>{
    Qt++
    c('.cakeInfo--qt').innerHTML =Qt;
})