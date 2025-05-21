async function fetchCrypto() {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
    const data = await response.json();
    document.getElementById("cryptoResult").innerHTML = `Bitcoin: $${data.bitcoin.usd}<br>Ethereum: $${data.ethereum.usd}`;

    const ctx = document.getElementById('cryptoChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Bitcoin', 'Ethereum'],
            datasets: [{
                label: 'Crypto Prices',
                data: [data.bitcoin.usd, data.ethereum.usd],
                backgroundColor: ['orange', 'purple']
            }]
        }
    });
}
fetchCrypto();
