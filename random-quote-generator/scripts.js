const quoteDisplay = document.querySelector("#quote-display");
const authorDisplay = document.querySelector("#author-display");
const generateBtn = document.querySelector("#generate-btn");


const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    quote: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  },
  {
    quote: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau"
  },
  {
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },
  {
    quote: "Discipline is choosing between what you want now and what you want most.",
    author: "Abraham Lincoln"
  }
];

// Fisrt, we need a function that generates random numbers.

function getRandom(array) {
    return Math.floor(Math.random() * array.length);
};

// Display quote and author.

generateBtn.addEventListener("click", () => {
    let randomQuote = quotes[getRandom(quotes)];

    quoteDisplay.textContent = randomQuote.quote;
    authorDisplay.textContent = randomQuote.author;
})

// quoteDisplay.textContent = getRandom();