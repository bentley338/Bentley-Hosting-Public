document.addEventListener('DOMContentLoaded', () => {
    // ... (kode lainnya tetap sama) ...

    // Fungsionalitas Kirim Form ke WhatsApp
    const whatsappContactForm = document.getElementById('whatsapp-contact-form');
    if (whatsappContactForm) {
        whatsappContactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form submit default

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Nomor WhatsApp Anda
            const phoneNumber = '6285810073341'; // Ganti dengan nomor WhatsApp Anda

            // Pesan yang akan diisi otomatis di WhatsApp
            // Ini adalah format yang benar untuk baris baru (%0A) dan spasi (%20)
            const prefilledMessage = `Halo Bentley Hosting,%0ASaya ingin bertanya tentang layanan Anda.%0ANama: ${name}%0AEmail: ${email}%0APesan: ${message}`;

            // Encode pesan agar aman untuk URL - ini wajib!
            const encodedMessage = encodeURIComponent(prefilledMessage);

            // Buat URL WhatsApp
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            // Buka WhatsApp di tab baru
            window.open(whatsappUrl, '_blank');

            // Opsional: Reset form setelah dikirim
            this.reset();
        });
    }
});

