
document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const produk = document.getElementById("produk").value;
  const catatan = document.getElementById("catatan").value;
  const pesan = `Halo, saya ingin order:%0A- Nama: ${name}%0A- Produk: ${produk}%0A- Catatan: ${catatan}`;
  window.open(`https://wa.me/6285810073341?text=${pesan}`, "_blank");
});
