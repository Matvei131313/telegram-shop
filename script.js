// Проверяем, запущено ли в Telegram
if (window.Telegram && window.Telegram.WebApp) {
    Telegram.WebApp.ready(); // Говорим Telegram, что мини-приложение готово
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

// Добавляем обработчик на кнопку
document.getElementById("wallet-button").addEventListener("click", connectWallet);
