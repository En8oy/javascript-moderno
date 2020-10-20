
request = new XMLHttpRequest()
request.open("GET", "https://reqres.in/api/users", true)
request.send(null)
request.onreadystatechange = function( state ){
    if(request.readyState === 4){
        resp = request.response
        // console.log(resp)
        var resObj = JSON.parse(resp)
        console.log(resObj)

    }
}