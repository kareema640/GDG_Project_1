
    function toggleDropdown() {
        document.getElementById('dropdown').classList.toggle('open');
    }

    document.addEventListener('click', function(e) {
        const btn = document.getElementById('user-btn');
        const dropdown = document.getElementById('dropdown');
        if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });