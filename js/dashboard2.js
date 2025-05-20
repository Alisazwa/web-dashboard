async function fetchCrypto() {
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,litecoin';

  try {
    const res = await fetch(url);
    const data = await res.json();
    const prices = data.map(coin => coin.current_price);
    const names = data.map(coin => coin.name);

    const ctx = document.getElementById('cryptoChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: names,
        datasets: [{
          label: 'Current Price (USD)',
          data: prices,
          backgroundColor: ['#f7931a', '#3c3c3d', '#b4b4b4']
        }]
      }
    });
  } catch (error) {
    alert('Error fetching crypto prices');
  }
}
