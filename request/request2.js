fetch("https://reqres.in/api/users")
    .then(res => res.json())
    .then(resObj => {
        console.log(resObj)
    })