
const correctUsername = "bahaa";
const correctPassword = "love2024";

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === correctUsername && password === correctPassword) {
        alert("تم تسجيل الدخول بنجاح! ❤️");
        window.location.href = "index.html";
    } else {
        errorMessage.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة.";
        errorMessage.style.color = "red";
    }
}
