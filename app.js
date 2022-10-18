
const search = document.getElementById('search-bar')
const exampleDiv = document.querySelector('.example')


search.addEventListener('input', (e) => {
  if (e.target.value.length >= 3) {
    buildDOM()
  }
})

const buildDOM = () => {
   exampleDiv.innerHTML = "<h2> Test </h2> "

}
