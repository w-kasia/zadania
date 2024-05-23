let userName = document.querySelector('.userName');
let showPostBtn = document.querySelector('.user-show-posts');

const userAddress = document.querySelector('.user-address')
const userEmail = document.querySelector('.user-email')
// const userPosts = document.querySelector('.user-name')


const API_URL = 'https://jsonplaceholder.typicode.com/users/';

async function getUser() {
    const response = await fetch(API_URL);
    const data = await response.json()
    console.log(data[0]);

    userName.textContent = data[0].name;

}

getUser()


