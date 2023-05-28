var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 3,
    loop: true,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
      loop: true,
    navigation: {
      nextEl: ".swiper-button-next",           
      prevEl: ".swiper-button-prev",   
    },
    thumbs: {
      swiper: swiper,
    },
  });

function FullView(ImgLink) {
    console.log(ImgLink)
    document.getElementById('FullImage').src = ImgLink;
    document.getElementById('FullImageView').style.display = 'block';

}

function CloseFullView() {
    document.getElementById('FullImageView').style.display = 'none';
}












