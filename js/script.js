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

// Gallery modal
var modalVisible = false
var $modal = $('.modal')

$('.gallery img').click(function (e) {
  let loc = $(this).data('loc')
  $modal.html('<img src=' + loc + " class='modal-img'>")
  $modal.fadeIn(200)
  modalVisible = true
})

$('.modal').click(function (e) {
  let $img = $('.modal-img').get(0)
  if (e.target != $img && modalVisible) {
    $modal.fadeOut(200)
    modalVisible = false
  }
})

// Video modal
$('.js-video-button').modalVideo({
  youtube: {
    controls: 0,
    nocookie: true,
  },
})
