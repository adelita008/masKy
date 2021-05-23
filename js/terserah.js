let nama, val;
const url_string = document.URL;
const url = new URL(url_string);
let doi;
if (url.searchParams.get('in') != null) {
  doi = url.searchParams.get('in');
} else {
  doi = "Mas Ky";
}

let footer = document.getElementById("credit");
footer.innerHTML = doi;
footer.href = "https://www.instagram.com/adamukti/";

function time() {
  var d = new Date();
  var n = d.getHours();
  console.log(n);
  if (n >= 5 && n <= 10) {
    return "Pagi"
  } else if (n >= 10 && n <= 15) {
    return "Siang"
  } else if (n >= 15 && n <= 18) {
    return "Sore"
  } else if (n >= 18 && n <= 24) {
    return "Malam"
  }
}

function makan() {
  switch (time()) {
    case "Pagi":
      return "sarapan"
      break;
    case "Siang":
      return "makan siang"
      break;
    case "Malam":
      return "makan malam"
      break;
      case "Sore":
      return "makan"
      break;
    default:
      break;
  }
}

function selesai() {
  const teks = document.getElementById('teks');
  const btn = document.querySelector('.tombol');
  teks.innerHTML = `Semangat ${doi} <i
  class="fas fa-heart text-danger animate__animated animate__heartBeat animate__repeat-3"></i>`;
  btn.classList.add('d-none');
  teks.classList.remove('d-none');  
}

document.querySelector(".tombol").addEventListener('click', function () {
  Swal.fire({
    title: 'Hai mass!',
    html: `Selamat ${time()}, Mas Ky udah ${makan()}?`,
    timer: 2500,
    timerProgressBar: true,
    showConfirmButton: false,
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire('Kalau belum jangan lupa makan mas yaa').then((result) => {
        Swal.fire({
          title: ' ',
          html: `Kenalin aku Adel, kita kyaknya waktu itu belum sempet kenalan deh`,
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `Aku gatau apa yang lagi mas Ky perjuangin, tapi apapun itu`,
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire('Semangat terus mas:)').then((result) => {
                  Swal.fire(
                    'Jangan keseringan begadang!',
                    '',
                    'error'
                  ).then((result) => {
                    Swal.fire(
                      'Jangan lupa solat juga mas!',
                      '',
                      'error'
                    ).then((result) => {
                      Swal.fire('Ga cape2 buat bilang makasih ya mas. Karena aku jarang bisa click sama orang').then((result) => {
                        Swal.fire({
                          title: 'Ah iya aku mau nanya',
                          text: 'Ada sesuatu yang mau disampein ga?',
                          showDenyButton: true,
                          confirmButtonText: `Ada ada nih`,
                          denyButtonText: `Ga ada ko`,
                        }).then((result) => {
                          /* Read more about isConfirmed, isDenied below */
                          if (result.isConfirmed) {
                            Swal.fire({
                              title: 'Mau bilang apa?',
                              input: 'text',
                              inputPlaceholder: 'apapun itu bilang aja',
                              showCancelButton: false,
                              inputValidator: (value) => {
                                if (!value) {
                                  return 'Isi dulu atuh '
                                }
                              }
                            }).then((result) => {
                              Swal.fire('Okey mas', 'success').then((result) => {
                                Swal.fire("See ya! Next Kita ngopi bareng ^^").then((result) => {
                                  selesai()
                                });
                              })
                            })
                          } else if (result.isDenied) {
                            Swal.fire('Oh okedeh kalo ga ada').then((result) => {
                              Swal.fire("See ya! Aku kangen ^^").then((result) => {
                                selesai()
                              });
                            })
                          }
                        })
                      })
                    })
                  })
                })
              }
            })
          }
        })
      })
    }
  })
});


