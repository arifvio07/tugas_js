function data() {
    let footballPlayer =  {
        nama : "Leo Messi",
        club : "inter miami",
        goal : 20,
        nation : "Argentina",
    }
    for(let x in footballPlayer){
        console.log(footballPlayer[x])
    }
}
data();