console.log("script.js OK");

const QUOTES = [
    {
        quote: "Talk is cheap. Show me the code.",
        author: "Linus Torvalds" 
    },{
        quote: "Happiness should be a function without any parameters.",
        author: "Pranshu Midha"
    },{
        quote: "Programming is like sex. One mistake and you have to support it for the rest of your life.",
        author: "Michael Sinz"
    },{
        quote: "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.",
        author: "Mosher’s Law of Software Engineering"
    },{
        quote: "First, solve the problem. Then, write the code.",
        author: "John Johnson"
    },{
        quote: "Code is like humor. When you have to explain it, it’s bad.",
        author: "Cory House"
    },{
        quote: "So much complexity in software comes from trying to make one thing do two things.",
        author: "Ryan Singer"
    },{
        quote: "Copy-and-Paste was programmed by programmers for programmers actually.",
        author: "Unknown"
    },{
        quote: "Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live.",
        author: "John F. Woods"
    },{
        quote: "Software and cathedrals are much the same — first we build them, then we pray.",
        author: "Sam Redwine"
    },{
        quote: "There are two ways to write error-free programs; only the third works.",
        author: "Alan Perlis"
    }
];

function randomQuote() {
    return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}

function renderQuote() {
    var text = randomQuote();
    console.log(text);
    $("#text").animate({opacity: 0}, 500, function() {
        $(this).animate({opacity: 1}, 500);
        $("#text").html(`<i class="fa fa-quote-left"> </i><br>` + text.quote + `<br><i class="fa fa-quote-right"> </i>`);
    });
    $("#author").animate({opacity: 0}, 500, function() {
        $(this).animate({opacity: 1}, 500);
        $("#author").html(text.author);
    })
}
    
$(document).ready(function() {
    renderQuote();
    console.log("document ready");
    $("#new-quote").on("click", renderQuote);
});