const API_KEY = '1n5wrcfgEVtb9rEcntK8iYcgQHdeVGM7';

const searchBtn = document.querySelector('#search-btn');
const searchBar = document.querySelector('#search-bar');

function copyURL(url) {
    return () => {
        navigator.clipboard.writeText(url);
        alert('Copied to clipboard');
    };
}

searchBtn.addEventListener('click', async () => {
    const search = searchBar.value;
    const mainBody = document.querySelector('#main');
    mainBody.innerHTML = '';

    const FULL_LINK = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=3&offset=0&rating=g&lang=en`;

    const response = await fetch(FULL_LINK);
    const responseJson = await response.json();
    const giphs = responseJson.data

    for(giph of giphs) {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.setAttribute('src', giph.images.downsized_medium.url);
        img.setAttribute('alt', giph.title);

        // bitly_gif_url
        const button = document.createElement('button');
        button.innerText = 'copy URL';
        button.setAttribute('type', 'button');

        button.addEventListener('click', copyURL(giph.url));

        card.appendChild(img)
        card.appendChild(button)
        mainBody.appendChild(card)
    }
})


// searchBtn.addEventListener('click', () => {
//     const q = searchBar.value;
//     const mainBody = document.querySelector('#main');
//     mainBody.innerHTML = '';

//     const FULL_LINK = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${q}&limit=3&offset=0&rating=g&lang=en`;


//     fetch(FULL_LINK)
//         .then(response => response.json())
//         .then(responseJson => {
//             const giphs = responseJson.data

//             for (giph of giphs) {
//                 const card = document.createElement('div');
//                 card.classList.add('card');

//                 const img = document.createElement('img');
//                 img.setAttribute('src', giph.images.downsized_medium.url);
//                 img.setAttribute('alt', giph.title);

//                 // bitly_gif_url
//                 const button = document.createElement('button');
//                 button.innerText = 'copy URL';
//                 button.setAttribute('type', 'button');

//                 button.addEventListener('click', copyURL(giph.url));

//                 card.appendChild(img)
//                 card.appendChild(button)
//                 mainBody.appendChild(card)
//             }
//         })
// })