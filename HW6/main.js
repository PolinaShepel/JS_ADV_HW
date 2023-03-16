//Поясніть своїми словами, як ви розумієте поняття асинхронності у Javascript
// вона дозволяє виконувати код, не чекаючи завершення виконання інших операцій

const findIpBtn = document.getElementById('find-ip-btn');
const resultDiv = document.getElementById('result');

findIpBtn.addEventListener('click', async function() {
  try {
    const ipifyResponse = await fetch('https://api.ipify.org/?format=json');
    const ipifyData = await ipifyResponse.json();
    const ipAddress = ipifyData.ip;

    const ipApiUrl = `https://ip-api.com/json/${ipAddress}?fields=continent,country,regionName,city,district`;
    const ipApiResponse = await fetch(ipApiUrl);
    const ipApiData = await ipApiResponse.json();

    resultDiv.innerHTML = 
    ` <p><b>Континент:</b> ${ipApiData.continent}</p>
      <p><b>Країна:</b> ${ipApiData.country}</p>
      <p><b>Регіон:</b> ${ipApiData.regionName}</p>
      <p><b>Місто:</b> ${ipApiData.city}</p>
      <p><b>Район:</b> ${ipApiData.district}</p>`
      ;
  } catch (error) {
    console.error(error);
    resultDiv.innerHTML = '<p>Сталась помилка. Або я тебе знайшов</p>';
  }
});
