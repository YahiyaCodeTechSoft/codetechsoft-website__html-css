window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;

    if (scroll > 400) {
        let nav = document.querySelector(".navbar");
        nav.classList.add("fixed");
    } else {
        let nav = document.querySelector(".navbar");
        nav.classList.remove("fixed");
    }
});



$(".gototop").on("click", function () {
    scroll({
        top: 0,
    });
});
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll >= 1000) {
        $(".gototop").addClass("back_to_top");
    } else {
        $(".gototop").removeClass("back_to_top");
    }
});

var a = 0;
let scroll = window.scrollY;
if (scroll > 500) {
  $(window).scroll(function () {
    $(".count-val").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 4000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
    a = 1;
  });
}