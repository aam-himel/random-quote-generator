// Defining DOM variables
const quote = document.querySelector('h4');
const p = document.querySelector('p');
const button = document.querySelector('.btn');

// Working with Fetch API
const URI = "https://type.fit/api/quotes";
getNewQuote(URI);
button.addEventListener('click', getNewQuote);

function getNewQuote() {
    console.log('clicked!');
    getData(URI);
}

function getData(URI) {
    fetch(URI)
    .then(res => res.json())
    .then(data => {
        let arr = [];
        let count = 0;

        for(let i=0; i<1000; i++){
            arr[i] = data[i];
            //console.log(arr[i]);
            count++;
            //console.log(count);
        }
        // Generating Random Index number to show the 
        const randomIndex = parseInt(Math.random() * 1000 + 1);
        const textString = `Text is : ${arr[randomIndex].text} and Author: ${arr[randomIndex].author}`;
        //console.log(textString);
        const quoteContent = arr[randomIndex].text;
        const quoteAuthor = arr[randomIndex].author;
        console.log(quoteAuthor);

        quote.innerText = quoteContent;
        p.innerText = quoteAuthor;

    });
}