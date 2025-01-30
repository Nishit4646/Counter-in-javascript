
const count = document.querySelector('.count')

const decrementbtn = document.querySelector('.decrement-btn')
const incrementbtn = document.querySelector('.increment-btn')

const changeby = document.querySelector('#chnageby')
const resetbtn = document.querySelector('.resetbtn')

decrementbtn.addEventListener('click', () => {
    const countvalue = parseInt(count.innerText)
    const changebyvalue = parseInt(changeby.value)
    count.innerText = countvalue - changebyvalue

})

incrementbtn.addEventListener('click', () => {
    const countvalue = parseInt(count.innerText)
    const changebyvalue = parseInt(changeby.value)
    count.innerText = countvalue + changebyvalue


})

resetbtn.addEventListener('click', () => {
    count.innerText = 0;
})
