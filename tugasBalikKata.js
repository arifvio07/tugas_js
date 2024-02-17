function balikKata(words) {
    // let kata1 = "Niomic!"
    // let kata2 = "Javascript"
    // let kata3 = "alohahola"
    // let kata4 = "Jawa_Barat"
    let kebalikan = ""
    for(i = words.length -1 ; i >= 0 ; i--) {
        kebalikan += words[i]
    }
    return kebalikan
}
console.log(balikKata("Niomic"))
console.log(balikKata("Javascript"))
console.log(balikKata("alohahola"))
console.log(balikKata("Jawa_Barat"))