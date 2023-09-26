//function button burger-menu
function burgerOpen(){
    let imgsrc = document.querySelector('.img__switch').src;
    if(imgsrc.indexOf(`/img/aside/menu.png`)!= -1 && window.matchMedia('max-width: 1660px')){
    document.querySelector('.img__switch').src = "/img/aside/delete.png";
    document.querySelector('.img__switch').style.width = 30 + 'px';
    document.querySelector('.img__switch').style.height = 30 + 'px';
    document.querySelector('.aside').style.left = 60 + 'px';
    document.querySelector('.aside').style.transition = "all 2s";
    document.querySelector('.container1__box').style.display = 'none';
    document.querySelector('.aside').style.display = 'flex';
    document.querySelector('.aside').style.justifyContent = 'center';
    

    document.querySelector('.aside').style.width = 100
+
'%';   

    }else{
        document.querySelector('.img__switch').src= "/img/aside/menu.png";
        document.querySelector('.img__switch').style.width = 30 + 'px';
        document.querySelector('.img__switch').style.height = 30 + 'px';
        document.querySelector('.aside').style.left = -222 + 'px';
        document.querySelector('.heading__main').style.display = 'block';
        document.querySelector('.aside').style.transition = "all 2s";
        document.querySelector('.aside').style.width = 271
        +
        'px';
        document.querySelector('.container1__box').style.display = 'block';
    }
}
document.querySelector('.burg__button').onclick = burgerOpen;

//function which allows buyer to choose a color of item 


function itemSelect(){
   let img =  document.querySelector('.img__change');
    let arr = ['/img/main/green-item.png','/img/main/blue-headphones.png','/img/main/darkblue-item.png','/img/main/purple-item.png'];
    let divs = document.querySelectorAll('.pick__item');


function clearActive(){
    divs.forEach(item =>{
        if(item.classList.contains('pick__active')){
            item.classList.remove('pick__active');
        }
    })
}
divs.forEach(item =>{
    item.addEventListener('click', function(){
        clearActive();
        item.classList.add('pick__active')
    }, false)
})

    for(let i = 0; i < divs.length; i++){

       divs[i].onclick = (e) =>{
        if(divs[i].getAttribute('data-active') == 'green'){
            img.src = arr[0];
        

        }
        else if(divs[i].getAttribute('data-active') =='blue'){
            img.src = arr[1];
        
       
        }else if(divs[i].getAttribute('data-active') == 'darkblue'){
            img.src = arr[2];
           

        }if(divs[i].getAttribute('data-active') == 'purple'){
            img.src = arr[3];
           
        }
       
    }
    }
}


itemSelect();

//function which adds items and counts a price


let count = 0;

function countPrice(){
    
 let countItem = document.querySelectorAll('.plus__item');
let countArr = Array.from(countItem);
let priceTagStr =  document.querySelector('.price');
let currentValue = 0;
 for(let keys in countArr){
    countArr[keys].addEventListener('click', (e)=>{
       let idItem = document.getElementById('countNum');
     
       if(e.currentTarget == countItem[0] && currentValue > 2 ){
        count--;
        idItem.innerHTML = count;
       currentValue -= 450.55;
       priceTagStr.innerHTML =   Math.floor(currentValue);

       }
       if(e.currentTarget == countItem[1]){
        count++;
        idItem.innerHTML = count;
        currentValue += 450.55;
        priceTagStr.innerHTML =  Math.floor(currentValue);
       }
    }) 
 }
}
countPrice();


//function moves slider 
let count1 = 0;
let moveButton = document.querySelector('.move__slider');
function moveSlider(){
let subslider = document.querySelector('.subslider');
count1 = count1 + 380;
if(count1 > 611){
count1 = 0;
}
subslider.style.left = -count1 + 'px';
}
moveButton.onclick = moveSlider;

//function which scales items
 
let butAll = document.querySelectorAll('.item-slider__container.add__item');
function buttonScale(){
for(let i = 0; i < butAll.length; i++){
    butAll[i].addEventListener('mouseover',() =>{
        console.log('a');
        butAll[i].style.transform = 'scale(0.6)';
    })
}
}
buttonScale();
// butAll.onclick = () =>{
//     console.log(butAll);
// }
   

