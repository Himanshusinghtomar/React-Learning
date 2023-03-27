const basket1 = document.querySelector('.basket-1 span')
const basket2 = document.querySelector('.basket-2 span')
const leftbtn = document.querySelector('.leftbtn')
const rightbtn = document.querySelector('.rightbtn')



leftbtn.addEventListener('click', () => {

    basket1.innerText = basket2.innerText

    basket2.innerText = 0

})
rightbtn.addEventListener('click', () => {


    basket2.innerText = basket1.innerText

    basket1.innerText = 0
    
})