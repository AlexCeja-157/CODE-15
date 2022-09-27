var requestOptions = {
    method: 'Get',
    redirect: 'follow'
};

fetch('https://api.nasa.gov/planetary/apod?api_key=TgVnwxOyTWiemrlxc4RkFm5v2f4yJO0lx02yeFI1', requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error',error));