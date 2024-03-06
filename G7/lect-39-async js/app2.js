const url = 'https://real-time-quotes1.p.rapidapi.com/api/v1/symbol/stock?includeNames=false';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '50c7bb8858msh266ff9325450134p130a35jsnfb3263b5bbf5',
        'X-RapidAPI-Host': 'real-time-quotes1.p.rapidapi.com'
    }
};

async function vikas() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
vikas();
