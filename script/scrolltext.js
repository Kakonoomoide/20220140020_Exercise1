// Tambahkan event listener untuk event scroll pada elemen window
window.addEventListener("scroll", function () {
  // Dapatkan posisi vertikal saat ini
  var scrollPosition =
    window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

  // Menghitung transform untuk setiap gambar berdasarkan posisi scroll
  var parallaxFactor = 0.01; // Faktor paralaks untuk efek yang diinginkan
  var Hm1Transform = -scrollPosition * parallaxFactor * 5;
  var Hm2Transform = -scrollPosition * parallaxFactor * 5;
  var Hm3Transform = -scrollPosition * parallaxFactor * 5;
  var Hm4Transform = -scrollPosition * parallaxFactor * 5;
  var Hm5Transform = -scrollPosition * parallaxFactor * 5;
  var Hm6Transform = -scrollPosition * parallaxFactor * 5;
  var Hm7Transform = -scrollPosition * parallaxFactor * 5;

  // Setel transform untuk setiap gambar
  document.getElementById("Home1").style.transform =
    "translateY(" + Hm1Transform + "px)";
  document.getElementById("Home2").style.transform =
    "translateY(" + Hm2Transform + "px)";
  document.getElementById("Home3").style.transform =
    "translateY(" + Hm3Transform + "px)";
  document.getElementById("Home4").style.transform =
    "translateY(" + Hm4Transform + "px)";
  document.getElementById("Home5").style.transform =
    "translateY(" + Hm5Transform + "px)";
  document.getElementById("Home6").style.transform =
    "translateY(" + Hm6Transform + "px)";
  document.getElementById("Home7").style.transform =
    "translateY(" + Hm7Transform + "px)";
});
