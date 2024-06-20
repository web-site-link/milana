let humbs = document.querySelectorAll('.humb')
let header = document.querySelector('header')

;[...humbs].map((el) =>
  el.addEventListener('click', function (e) {
    header.classList.toggle('active')
  })
)
