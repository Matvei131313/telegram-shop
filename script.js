// Импортируем TON Connect SDK
const tonConnect = new window.TonConnect();

// Получаем кнопку
const walletButton = document.getElementById("wallet-button");

// Функция подключения кошелька
async function connectWallet() {
    try {
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
            walletButton.innerText = "Wallet Connected";
        }
    } catch (error) {
        console.error("Ошибка подключения кошелька:", error);
        alert("Не удалось подключить кошелек.");
    }
}

// Привязываем функцию к кнопке
walletButton.addEventListener("click", connectWallet);
