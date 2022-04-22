const cartContent = document.getElementById('cart-content');
const bgOne = document.getElementById('one');
const bgTwo = document.getElementById('two');
const bgThree = document.getElementById('three');
const bgFour = document.getElementById('four');
const thumbnail = document.getElementById('thumbnail')
const amount = document.getElementById('amount')
const total = document.getElementById('num');
const multiplyer = document.getElementById('multiply')
const itemContent = document.getElementById('item-content')
const emptyContent = document.getElementById('empty')
const finalPrice = document.getElementById('final-price')

const lightBox = document.getElementById('lightbox');
const thumbnailL = document.getElementById('thumbnailL');
const bgOneL = document.getElementById('oneL');
const bgTwoL = document.getElementById('twoL');
const bgThreeL = document.getElementById('threeL');
const bgFourL = document.getElementById('fourL');

const nav = document.getElementById('navigation');

function cartImage() {
    cartContent.classList.toggle('cart-active');
}

// FOR BACKGROUNDS

function one() {
    bgOne.classList.add('one-active');

    bgTwo.classList.remove('two-active');
    bgThree.classList.remove('three-active');
    bgFour.classList.remove('four-active');

    thumbnail.innerHTML = '<img src="./images/image-product-1.jpg" alt="" onclick="lightboxOpen()">'

    bgOneL.classList.add('one-active');

    bgTwoL.classList.remove('two-active');
    bgThreeL.classList.remove('three-active');
    bgFourL.classList.remove('four-active');

    thumbnailL.innerHTML = '<img src="./images/image-product-1.jpg" alt="" onclick="lightboxOpen()">'
}

function two() {
    bgTwo.classList.add('two-active');

    bgOne.classList.remove('one-active');
    bgThree.classList.remove('three-active');
    bgFour.classList.remove('four-active');

    thumbnail.innerHTML = '<img src="./images/image-product-2.jpg" alt="" onclick="lightboxOpen()">'

    bgTwoL.classList.add('two-active');

    bgOneL.classList.remove('one-active');
    bgThreeL.classList.remove('three-active');
    bgFourL.classList.remove('four-active');

    thumbnailL.innerHTML = '<img src="./images/image-product-2.jpg" alt="" onclick="lightboxOpen()">'
}

function three() {
    bgThree.classList.add('three-active');

    bgTwo.classList.remove('two-active');
    bgOne.classList.remove('one-active');
    bgFour.classList.remove('four-active');

    thumbnail.innerHTML = '<img src="./images/image-product-3.jpg" alt="" onclick="lightboxOpen()">'

    bgThreeL.classList.add('three-active');

    bgTwoL.classList.remove('two-active');
    bgOneL.classList.remove('one-active');
    bgFourL.classList.remove('four-active');

    thumbnailL.innerHTML = '<img src="./images/image-product-3.jpg" alt="" onclick="lightboxOpen()">'
}

function four() {
    bgFour.classList.add('four-active');

    bgTwo.classList.remove('two-active');
    bgThree.classList.remove('three-active');
    bgOne.classList.remove('one-active');

    thumbnail.innerHTML = '<img src="./images/image-product-4.jpg" alt="" onclick="lightboxOpen()">'

    bgFourL.classList.add('four-active');

    bgTwoL.classList.remove('two-active');
    bgThreeL.classList.remove('three-active');
    bgOneL.classList.remove('one-active');

    thumbnailL.innerHTML = '<img src="./images/image-product-4.jpg" alt="" onclick="lightboxOpen()">'
}

// LIGHTBOX BACKGROUND

function onelight() {
    bgOneL.classList.add('one-active');

    bgTwoL.classList.remove('two-active');
    bgThreeL.classList.remove('three-active');
    bgFourL.classList.remove('four-active');

    thumbnailL.innerHTML = '<img src="./images/image-product-1.jpg" alt="" onclick="lightboxOpen()">'
}

function twolight() {
    bgTwoL.classList.add('two-active');

    bgOneL.classList.remove('one-active');
    bgThreeL.classList.remove('three-active');
    bgFourL.classList.remove('four-active');

    thumbnailL.innerHTML = '<img src="./images/image-product-2.jpg" alt="" onclick="lightboxOpen()">'
}

function threelight() {
    bgThreeL.classList.add('three-active');

    bgTwoL.classList.remove('two-active');
    bgOneL.classList.remove('one-active');
    bgFourL.classList.remove('four-active');

    thumbnailL.innerHTML = '<img src="./images/image-product-3.jpg" alt="" onclick="lightboxOpen()">'
}

function fourlight() {
    bgFourL.classList.add('four-active');

    bgTwoL.classList.remove('two-active');
    bgThreeL.classList.remove('three-active');
    bgOneL.classList.remove('one-active');

    thumbnailL.innerHTML = '<img src="./images/image-product-4.jpg" alt="" onclick="lightboxOpen()">'
}

// INCREASE AND DECREASE AMOUNT

let num = amount.value

let mul = 0

function checkout() {
    num++;
    amount.value = num
    total.innerHTML = amount.value
    multiplyer.innerHTML = amount.value
    total.classList.add('for-num')
    emptyContent.classList.add('empty-display');
    itemContent.style.display = 'flex'

    mul += 125;
    finalPrice.innerHTML = mul
}

function increment() {
    num++;
    amount.value = num
    total.innerHTML = amount.value
    multiplyer.innerHTML = amount.value
    total.classList.add('for-num')
    
    emptyContent.classList.add('empty-display');
    itemContent.style.display = 'flex'
    mul += 125;
    finalPrice.innerHTML = mul
}

function decrement() {
    num--;
    amount.value = num
    total.innerHTML = amount.value
    multiplyer.innerHTML = amount.value

    
    emptyContent.classList.add('empty-display');
    itemContent.style.display = 'flex'
    mul -= 125;
    finalPrice.innerHTML = mul

    if(amount.value <= 0) {
        num = 0;
        amount.value = num
        multiplyer.innerHTML = ''
        total.innerText = ''
        total.classList.remove('for-num')
        
        emptyContent.classList.remove('empty-display');
        itemContent.style.display = 'none'
        mul = 0
        finalPrice.innerHTML = mul
    } 
}

function clearCart() {
        num = 0;
        mul = 0;
        amount.value = num
        multiplyer.innerHTML = ''
        total.innerText = ''
        total.classList.remove('for-num')
        
        emptyContent.classList.remove('empty-display');
        itemContent.style.display = 'none'
}

// IMAGE SLIDER FOR LIGHTBOX

let order = 1

function lightboxOpen(){
    lightBox.style.display = 'flex';
    order = 1
}

function next(){
    order++
    if(order > 4){
        order = 1;
    }

    if(order === 1){
        //here 
        bgOneL.classList.add('one-active');

    bgTwoL.classList.remove('two-active');
    bgThreeL.classList.remove('three-active');
    bgFourL.classList.remove('four-active');

    thumbnailL.innerHTML = '<img src="./images/image-product-1.jpg" alt="" onclick="lightboxOpen()">'
    }
    if(order === 2){
        //here 
        bgTwoL.classList.add('two-active');

    bgOneL.classList.remove('one-active');
    bgThreeL.classList.remove('three-active');
    bgFourL.classList.remove('four-active');

    thumbnailL.innerHTML = '<img src="./images/image-product-2.jpg" alt="" onclick="lightboxOpen()">'
        
    }
    if(order === 3){
        //here 
        bgThreeL.classList.add('three-active');

    bgTwoL.classList.remove('two-active');
    bgOneL.classList.remove('one-active');
    bgFourL.classList.remove('four-active');

    thumbnailL.innerHTML = '<img src="./images/image-product-3.jpg" alt="" onclick="lightboxOpen()">'
    }
    if(order === 4){
        //here 
        bgFourL.classList.add('four-active');

    bgTwoL.classList.remove('two-active');
    bgThreeL.classList.remove('three-active');
    bgOneL.classList.remove('one-active');

    thumbnailL.innerHTML = '<img src="./images/image-product-4.jpg" alt="" onclick="lightboxOpen()">'
    }
}

function prev(){
    order--
    if(order <= 0){
        order = 4;
    }

    if(order === 1){
        //here 
        bgOneL.classList.add('one-active');

    bgTwoL.classList.remove('two-active');
    bgThreeL.classList.remove('three-active');
    bgFourL.classList.remove('four-active');

    thumbnailL.innerHTML = '<img src="./images/image-product-1.jpg" alt="" onclick="lightboxOpen()">'
    }
    if(order === 2){
        //here 
        bgTwoL.classList.add('two-active');

    bgOneL.classList.remove('one-active');
    bgThreeL.classList.remove('three-active');
    bgFourL.classList.remove('four-active');

    thumbnailL.innerHTML = '<img src="./images/image-product-2.jpg" alt="" onclick="lightboxOpen()">'
        
    }
    if(order === 3){
        //here 
        bgThreeL.classList.add('three-active');

    bgTwoL.classList.remove('two-active');
    bgOneL.classList.remove('one-active');
    bgFourL.classList.remove('four-active');

    thumbnailL.innerHTML = '<img src="./images/image-product-3.jpg" alt="" onclick="lightboxOpen()">'
    }
    if(order === 4){
        //here 
        bgFourL.classList.add('four-active');

    bgTwoL.classList.remove('two-active');
    bgThreeL.classList.remove('three-active');
    bgOneL.classList.remove('one-active');

    thumbnailL.innerHTML = '<img src="./images/image-product-4.jpg" alt="" onclick="lightboxOpen()">'
    }
}

function lightboxClose(){
    lightBox.style.display = 'none';
    order = 1
}

function openMenu(){
    nav.style.display = 'block'
}

function closeMenu(){
    nav.style.display = 'none'
}