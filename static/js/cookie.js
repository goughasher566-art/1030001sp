window.onload = function () {
    const cookieBanner = document.getElementById("cookieBanner");
    const acceptButton = document.getElementById("cookieAcceptBtn");
    const rejectButton = document.getElementById("cookieRejectBtn");

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/;SameSite=Lax";
    }

    function getCookie(name) {
        const cookies = document.cookie.split("; ");
        for (let cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split("=");
            if (cookieName === name) return cookieValue;
        }
        return null;
    }

    if (getCookie("cookies_accepted") !== "true") {
        cookieBanner.classList.add("show");
    }

    // Проверка на существование кнопок перед добавлением событий
    if (acceptButton) {
        acceptButton.addEventListener("click", function () {
            setCookie("cookies_accepted", "true", 365);
            cookieBanner.classList.remove("show");
        });
    }

    if (rejectButton) {
        rejectButton.addEventListener("click", function () {
            setCookie("cookies_accepted", "false", 365);
            cookieBanner.classList.remove("show");
        });
    }
};
