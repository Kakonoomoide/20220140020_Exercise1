window.onload = function () {
  var audio = document.getElementById("myAudio");

  function handleVisibilityChange() {
    if (document.hidden) {
      // Jika tab web tidak terlihat, jeda pemutaran audio
      audio.pause();
    } else {
      // Jika tab web kembali terlihat, lanjutkan pemutaran audio
      audio.play();
    }
  }

  // Panggil fungsi handleVisibilityChange saat halaman dimuat
  handleVisibilityChange();

  // Tambahkan pendengar acara visibilitychange ke objek dokumen
  document.addEventListener("visibilitychange", handleVisibilityChange);

  // Code untuk memainkan audio
  audio.autoplay = true;
  audio.loop = true;
};
