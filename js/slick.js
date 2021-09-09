$(document).ready(function(){
  $('div.my-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
  });

  // console.log($("button.slick-prev"), 1);

  // $("button.slick-prev")[0].innerHTML = '<span class="material-icons cart">&#xe5e0;</span>';
  $("button.slick-prev")[0].insertAdjacentHTML("afterbegin", '<span class="material-icons cart">&#xe5cb;</span>');
});
