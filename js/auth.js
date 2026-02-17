// Check if user is logged in
function checkLogin() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const authLink = document.getElementById('authLink');
    const userInfo = document.getElementById('userInfo');
    const userName = document.getElementById('userName');
    
    if (user && authLink && userInfo && userName) {
        authLink.style.display = 'none';
        userInfo.style.display = 'block';
        userName.textContent = user.fullname || user.username;
    }
}

// Logout function
function setupLogout() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to logout?')) {
                localStorage.removeItem('currentUser');
                window.location.href = 'index.html';
            }
        });
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', () => {
    checkLogin();
    setupLogout();
});