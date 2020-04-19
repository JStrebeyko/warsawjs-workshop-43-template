// FETCHING
const myHeaders = new Headers
myHeaders.append('x-api-key', 'TUTAJTAJNYKOD')

const myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};

function getURL() {
    const baseURL = 'https://api.thecatapi.com/v1/images/search'
    return `${baseURL}?mime_types=gif&limit=20&page=${state.currentPage}&order=desc`
}

function fetchIt() {
    /// ???
}


// STATE
const state = {
    currentPage: 1,
    picsArray: []
}

function updateData(newData) {
    state.picsArray =  [...state.picsArray, ...newData]
    appendData(newData)

}
  
// DOM
const container = document.getElementById('container')
const btn = document.getElementById('load-more')

function appendData(newData) {
    newData.forEach((img) => {
        const element = document.createElement('img');
        element.src = img.url;
        container.appendChild(element)
    })
}

fetchIt()

// btn.addEventListener('click', fetchIt)
