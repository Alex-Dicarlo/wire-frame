
// const search = document.getElementById('search-bar')
// const exampleDiv = document.querySelector('.example')


// search.addEventListener('input', (e) => {
//   if (e.target.value.length >= 3) {
//     buildDOM()
//   }
// })

// const buildDOM = () => {
//    exampleDiv.innerHTML = "<h2> Test </h2> "

// }

//

const burgerMenu = document.querySelector('.burger-menu')
const categoryDropDown = document.querySelector('.category-list')

burgerMenu.addEventListener('click', (e) => {
  if (categoryDropDown.classList.value === 'category-list') {
      categoryDropDown.classList.remove('category-list')
      categoryDropDown.classList.add('category-list-block')
  } else {
    categoryDropDown.classList.remove('category-list-block')
    categoryDropDown.classList.add('category-list')
  }

})

const shopButtons = document.querySelectorAll('.btn-sale')
let spanTag = document.getElementsByTagName('span')
// console.log(spanTag[0].innerHTML)

shopButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const parsed = parseInt(spanTag[0].innerHTML)
    spanTag[0].innerHTML = parsed + 1
  })
})
