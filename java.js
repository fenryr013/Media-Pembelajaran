window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".hidden");
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("show");
    }
  });
});

 function deleteRow(button) {
    let row = button.parentElement.parentElement;
    row.remove();
  }


  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("pencarian").addEventListener("input", function () {
      let keyword = this.value.toLowerCase();
      let rows = document.querySelectorAll("#tabelMateri tbody tr");

      rows.forEach(row => {
        let nama = row.cells[0].textContent.toLowerCase();
        row.style.display = nama.includes(keyword) ? "" : "none";
      });
    });
  });

  function tambahMateri() {
    let nama = document.getElementById("nama").value.trim();
    let kategori = document.getElementById("kategori").value;
    let tingkat = document.getElementById("tingkat").value;

   
    if (nama.length < 3 || kategori === "" || tingkat === "") {
      alert("Nama Materi minimal 3 huruf dan semua field harus diisi!");
      return false;
    }

   
    let tabel = document.getElementById("tabelMateri").getElementsByTagName('tbody')[0];
    let barisBaru = tabel.insertRow();

    barisBaru.insertCell(0).innerText = nama;
    barisBaru.insertCell(1).innerText = kategori;
    barisBaru.insertCell(2).innerText = tingkat;
    barisBaru.insertCell(3).innerHTML = '<button class="delete-btn" onclick="deleteRow(this)">Hapus</button>';

    
    document.getElementById("formMateri").reset();
    return false;
  }