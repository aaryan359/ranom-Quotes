const quote = document.getElementById("quote");
const name = document.getElementById("name");

const api_url = "https://api.quotable.io/random"

async function getQuotes(){

    const response = await fetch(api_url);

    const data = await response.json();
    
    quote.innerHTML = data.content;

    name.innerHTML = data.author;

    return data;

}
function likeQuote() {
   const like = document.getElementById("like" );
   like.classList.toggle("liked");
    
    if (like.classList.contains("liked")) {
        like.innerHTML = "Liked";
        like.style.color = "red";
    } else {
        like.innerHTML = "Like";
        like.style.color = "white";
    }

}

function shareQuote() {
    const quoteText = document.querySelector('.quotes p').innerText;
    const shareData = {
        title: 'Random Quote',
        text: quoteText,
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData)
            .then(() => console.log('Quote shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
    } else {
        console.log('Error!');
    }
}

function tweetQuote() {
    const quoteText = document.querySelector('.quotes p').innerText;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText)}`;
    window.open(tweetUrl, '_blank');
}
getQuotes();
// function saveQuote() {
//     const quoteText = document.querySelector('.quotes p').innerText;
//     saveData();
//     alert(`Quote saved: "${quoteText}"`);
// }
// 


// function saveData() {
//     localStorage.setItem("data",quoteText );
// }

// function showTask() {
//     listContainer.innerHTML = localStorage.getItem("data");
// }
// showTask();



