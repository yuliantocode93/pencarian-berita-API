function searchNews() {
    const apiKey = '47eb6134e647457384a0da41bd4610f7';
    const keyword = document.getElementById('keyword').value;
    const apiUrl = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            displayNews(data.articles);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

function displayNews(articles) {
    const newsList = document.getElementById('news-list');
    newsList.innerHTML = ''; // Clear previous search results

    const row = document.createElement('div');
    row.className = 'row';

    articles.forEach(article => {
        const card = showCards(article);
        row.appendChild(card);
    });

    newsList.appendChild(row);
}


function showCards(article) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'col-md-4 my-5';
    cardDiv.innerHTML = `
        <div class="card">
            <img src="${article.urlToImage}" class="card-img-top" alt="${article.title}">
            <div class="card-body">
                <h5 class="card-title">${article.title}</h5>
                <p class="card-text">${article.description}</p>
                <a href="${article.url}" target="_blank" class="btn btn-primary">Read More</a>
            </div>
        </div>
    `;
    return cardDiv;
}

