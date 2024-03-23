// Tambahkan event listener untuk event scroll pada elemen window
window.addEventListener('scroll', function() {
  // Dapatkan posisi vertikal saat ini
  var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

  // Menghitung transform untuk setiap gambar berdasarkan posisi scroll
  var parallaxFactor = 0.01; // Faktor paralaks untuk efek yang diinginkan
  var image2Transform = -scrollPosition * parallaxFactor * 2;
  var image3Transform = -scrollPosition * parallaxFactor * 2;
  var image4Transform = -scrollPosition * parallaxFactor * 3;
  var image6Transform = -scrollPosition * parallaxFactor * 1.1;
  var image7Transform = -scrollPosition * parallaxFactor * 2;
  var image8Transform = -scrollPosition * parallaxFactor * 2;
  var image10Transform = -scrollPosition * parallaxFactor * 2;
  var image11Transform = -scrollPosition * parallaxFactor * 2;
  var image12Transform = -scrollPosition * parallaxFactor * 2;
  var image13Transform = -scrollPosition * parallaxFactor * 1.5;
  var image14Transform = -scrollPosition * parallaxFactor * 2;
  var image15Transform = -scrollPosition * parallaxFactor * 2;

  // Setel transform untuk setiap gambar
  document.getElementById('image2').style.transform = 'translateY(' + image2Transform + 'px)';
  document.getElementById('image3').style.transform = 'translateY(' + image3Transform + 'px)';
  document.getElementById('image4').style.transform = 'translateY(' + image4Transform + 'px)';
  document.getElementById('image6').style.transform = 'translateY(' + image6Transform + 'px)';
  document.getElementById('image7').style.transform = 'translateY(' + image7Transform + 'px)';
  document.getElementById('image8').style.transform = 'translateY(' + image8Transform + 'px)';
  document.getElementById('image10').style.transform = 'translateY(' + image10Transform + 'px)';
  document.getElementById('image11').style.transform = 'translateY(' + image11Transform + 'px)';
  document.getElementById('image12').style.transform = 'translateY(' + image12Transform + 'px)';
  document.getElementById('image13').style.transform = 'translateY(' + image13Transform + 'px)';
  document.getElementById('image14').style.transform = 'translateY(' + image14Transform + 'px)';
  document.getElementById('image15').style.transform = 'translateY(' + image15Transform + 'px)';
});
