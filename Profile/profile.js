document.getElementById('saveBtn').addEventListener('click', function () {
    const newPw = document.getElementById('newPw').value;
    const confirmPw = document.getElementById('confirmPw').value;

    if (newPw && newPw !== confirmPw) {
      showToast('⚠ Passwords do not match!', '#c0392b');
      return;
    }

    document.getElementById('currentPw').value = '';
    document.getElementById('newPw').value = '';
    document.getElementById('confirmPw').value = '';

    showToast('✓ Changes saved successfully!', '#222');
  });

  document.getElementById('cancelBtn').addEventListener('click', function () {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('address').value = '';
    document.getElementById('currentPw').value = '';
    document.getElementById('newPw').value = '';
    document.getElementById('confirmPw').value = '';
    showToast('Changes discarded.', '#555');
  });

  function showToast(msg, bg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.style.background = bg || '#222';
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
  }

  document.querySelectorAll('.sidebar-links a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelectorAll('.sidebar-links a').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });