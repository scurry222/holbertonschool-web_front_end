const createElement = (data) => {
    const extract = JSON.parse(data).query.pages["21721040"].extract;
    const paragraph = document.createElement("p");
    paragraph.innerText = extract;
    document.body.appendChild(paragraph);
}
function reqListener () {
    console.log(this.responseText);
  }

const queryWikipedia = (callback) => {
    const article = new XMLHttpRequest();
    article.onreadystatechange = function() {
        if (article.readyState === XMLHttpRequest.DONE) {
            callback(article.responseText);
        }
    }
    article.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow");
    article.addEventListener("load", reqListener)
    article.send("");
}

queryWikipedia(createElement);