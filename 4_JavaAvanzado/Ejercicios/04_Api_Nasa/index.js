var request = require('request');


var options = {
  'method': 'GET',
  'url': 'http://api.nasa.gov/planetary/apod?api_key=TgVnwxOyTWiemrlxc4RkFm5v2f4yJO0lx02yeFI1',
  'headers': {
  }
};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
