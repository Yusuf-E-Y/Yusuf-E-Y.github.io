function copyHtml() {
  // class="html-code" olan ilk elemanı seçiyoruz
  const text = document.querySelector(".html-code").innerText;

  navigator.clipboard.writeText(text)
    .then(() => {
      alert("Yazı kopyalandı!");
    })
    .catch(err => {
      console.error("Kopyalama hatası:", err);
    });
}

function copyCss() {
    const text1 = document.querySelector(".css-code").innerText;

    navigator.clipboard.writeText(text1)
    .then(() => {
      alert("Yazı kopyalandı!");
    })
    .catch(err => {
      console.error("Kopyalama hatası:", err);
    });
}