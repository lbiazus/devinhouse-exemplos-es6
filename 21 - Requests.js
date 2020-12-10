const HTTP = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/posts';
HTTP.open("GET", url);
HTTP.send();

HTTP.onreadystatechange = function() {
    if (this.readyState==4 && this.status==200) {
        console.log(HTTP.responseText);
    }
}


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {}
}).then(response => response.json);

import axios from 'axios'

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json);

const data = {
    name: 'Zé',
    id: 5
}

axios.post('https://jsonplaceholder.typicode.com/posts', data)
    .then(response => response.status)