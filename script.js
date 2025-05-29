document.addEventListener('DOMContentLoaded', () => {
    // Fungsionalitas Toggle Mode Gelap/Terang
    const toggleModeButton = document.querySelector('.toggle-mode');
    if (toggleModeButton) {
        toggleModeButton.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            // Simpan preferensi mode di localStorage
            if (document.body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // Muat preferensi mode dari localStorage saat halaman dimuat
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
    }

    // Fungsionalitas Toggle Menu Hamburger (untuk mobile)
    const menuToggleButton = document.querySelector('.menu-toggle');
    const bottomNav = document.querySelector('.bottom-nav');

    if (menuToggleButton && bottomNav) {
        menuToggleButton.addEventListener('click', () => {
            bottomNav.classList.toggle('active');
        });

        // Tutup menu saat item navigasi diklik (hanya jika menu aktif)
        bottomNav.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                if (bottomNav.classList.contains('active')) {
                    bottomNav.classList.remove('active');
                }
            });
        });
    }

    // Menandai item navigasi aktif di footer
    const currentPath = window.location.pathname.split('/').pop(); // Mendapatkan nama file HTML saat ini
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');

    navItems.forEach(item => {
        const itemHref = item.getAttribute('href');
        // Logika untuk menandai item aktif
        if (currentPath === '' && itemHref === 'index.html') { // Untuk kasus root domain/index.html
            item.classList.add('active');
        } else if (itemHref === currentPath) {
            item.classList.add('active');
        }
    });

    // Fungsionalitas Scroll Reveal (Animasi saat elemen muncul di viewport)
    const revealElements = document.querySelectorAll('.reveal-item');

    const observerOptions = {
        root: null, // Menggunakan viewport sebagai root
        rootMargin: '0px',
        threshold: 0.1 // Ketika 10% elemen terlihat, aktifkan
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Hentikan observasi setelah diaktifkan
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        observer.observe(el);
    });

    // Fungsionalitas Scroll to Top Button
    const scrollTopButton = document.getElementById('scroll-to-top');

    if (scrollTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 200) { // Tampilkan tombol setelah menggulir 200px
                scrollTopButton.classList.add('show');
            } else {
                scrollTopButton.classList.remove('show');
            }
        });

        scrollTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Gulir dengan animasi halus
            });
        });
    }

    // Fungsionalitas FAQ Accordion (hanya untuk faq.html)
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Fungsionalitas Form Kontak (hanya untuk contact.html)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form submit secara default

            // Di sini Anda bisa menambahkan logika untuk mengirim data form.
            // Untuk website statis HTML/CSS/JS, Anda bisa menggunakan layanan seperti Formspree.io
            // Contoh: Mengirim data ke Formspree (ganti YOUR_FORMSPREE_ENDPOINT dengan endpoint Anda)
            // const formData = new FormData(this);
            // fetch('https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT', {
            //     method: 'POST',
            //     body: formData,
            //     headers: {
            //         'Accept': 'application/json'
            //     }
            // })
            // .then(response => response.json())
            // .then(data => {
            //     if (data.ok) {
            //         alert('Pesan Anda berhasil terkirim!');
            //         this.reset(); // Reset form
            //     } else {
            //         alert('Terjadi kesalahan saat mengirim pesan.');
            //     }
            // })
            // .catch(error => {
            //     console.error('Error:', error);
            //     alert('Terjadi kesalahan jaringan.');
            // });

            // Untuk demo, kita hanya akan menampilkan pesan sukses
            alert('Pesan Anda berhasil terkirim! (Fungsionalitas backend perlu diintegrasikan)');
            this.reset();
        });
    }
});

