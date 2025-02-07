// Проверяем, запущено ли мини-приложение в Telegram
if (window.Telegram.WebApp) {
    Telegram.WebApp.ready();
    console.log("Мини-приложение загружено в Telegram!");
} else {
    console.log("Мини-приложение не в Telegram!");
}

// Функция для подключения кошелька
async function connectWallet() {
    if (!window.ton) {
        alert("TON Wallet не найден! Установите кошелек в Telegram.");
        return;
    }

    try {
        const accounts = await window.ton.request({ method: "ton_requestAccounts" });
        if (accounts && accounts.length > 0) {
            alert(`Кошелек подключен: ${accounts[0]}`);
            document.getElementById("wallet-button").innerText = "Wallet Connected";
        } else {
            alert("Подключение отменено.");
        }
    } catch (error) {
        console.error("Ошибка при подключении кошелька:", error);
        alert("Ошибка при подключении. Проверьте кошелек.");
    }
}

// Привязываем функцию к кнопке
document.getElementById("wallet-button").addEventListener("click", connectWallet);
