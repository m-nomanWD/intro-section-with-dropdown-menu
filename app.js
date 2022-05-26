const dropDown = document.querySelectorAll('.drop-down')
const slideExpender = document.querySelector('.menu-opner')
const slide = document.querySelector('.side-bar')
const slideCloser = document.querySelector('.closer')
const overlay = document.querySelector('.overlay')
const arrowUp = document.querySelectorAll('.arrow-up')

dropDown.forEach(function (item) {
  item.addEventListener('click', function () {
    dropDown.forEach(function (menu) {
      if (menu !== item) {
        menu.classList.remove('show-drop-down')
      }
    })

    item.classList.toggle('show-drop-down')
  })
})
slideExpender.addEventListener('click', () => {
  slide.classList.add('show-sidebar')
  overlay.classList.add('show-overlay')
})
slideCloser.addEventListener('click', () => {
  slide.classList.remove('show-sidebar')
  overlay.classList.remove('show-overlay')
})
