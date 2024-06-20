let humbs = document.querySelectorAll('.humb')
let links = document.querySelectorAll('nav a')
let header = document.querySelector('header')

;[...humbs].map((el) =>
  el.addEventListener('click', function (e) {
    header.classList.toggle('active')
  })
)
;[...links].map((el) =>
  el.addEventListener('click', function (e) {
    header.classList.remove('active')
  })
)

const anchors = document.querySelectorAll('nav a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  })
}
