let weatherArr = ['Sunny', 'Cloudy', 'Rainy', 'Snowy'];
let luckArr = ['Best of luck', 'Sorta good', 'Kinda bad', 'Worst luck'];
let shouldDo = ['Watch out for spiders', 'Not trust clowns today', 'Help the purple man']

let createForecast = () => {
    let rand1 = Math.floor(Math.random()*weatherArr.length);
    let rand2 = Math.floor(Math.random()*luckArr.length);
    let rand3 = Math.floor(Math.random()*shouldDo.length);
    console.log(`Today the weather will be ${weatherArr[rand1]}\nYour luck will be: ${luckArr[rand2]} \nToday, you should: ${shouldDo[rand3]}`);

}

createForecast()