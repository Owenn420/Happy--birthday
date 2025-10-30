const message = `Selamat Ulang Tahun Ya sayang ,Aku bingung mau ngomong apa hehe ,Makasih ya udah mau nerima aku .semoga hal baik selalu beriringan denganmu, semoga semesta senantiasa berpihak padamu, semoga jalan untuk mencapai masa depan yang cerah di permudahkan,teruslah melangkah dan berbahagia . aku akan selalu bangga atas setiap proses yang sudah kamu lalui.i will always support u 🤍 `;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
