// Инициализация TON Connect SDK
const tonConnect = new window.TonConnect();

// Функция для открытия окна выбора кошелька
async function connectWallet() {
    try {
        // Открытие окна выбора кошелька
        const wallet = await tonConnect.connectWallet({
            modals: [
                {
                    name: "tonkeeper",
                    url: "https://app.tonkeeper.com/ton-connect"
                },
                {
                    name: "Telegram Wallet",
                    url: "https://t.me/wallet"
                }
            ]
        });

        if (wallet) {
            alert(`Кошелек подключен: ${wallet.account.address}`);
            document.getElementById("wallet-button").innerText = "Wallet Connected";
        }
    } catch (error) {
        console.error("Ошибка подключения кошелька:", error);
        alert("Не удалось подключить кошелек.");
    }
}

// Привязываем функцию к кнопке
document.getElementById("wallet-button").addEventListener("click", connectWallet);
