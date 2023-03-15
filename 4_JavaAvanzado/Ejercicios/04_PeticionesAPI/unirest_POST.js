var unirest = require('unirest');

var req = unirest('POST','https://ecume.herokuapp.com/apiECUME/userRegister')
    .headers({
        'Content-Type': 'application/json'
    })
    .send(JSON.stringify({
        "names": "njkdhncjs",
        "surnames": "wetwet Bustos",
        "pasword": "12345",
        "email": "asghjgasdhfg@gmail.com",
        "phone": "5554875968"
    }))
    .end(function(res){
        if (res.error) throw new Error(res.error);
        console.log(res.raw_body);
    });

    