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
});

