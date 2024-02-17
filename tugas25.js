function tugas25() {
    var num = [ 2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]
    let x = String(num)
    console.log("Sebelumnya : " + x)
    let y = num.sort()
    let  i = String(y)
    console.log("Ascending : " + i)
    let  z = num.reverse()
    let a = String(z)
    console.log("Descending : " + z)
    let filter = num.filter((lebih) => {
        return lebih > 10
    })

    let filString = String(filter)
    console.log("Filter > 10 : " + filString)
        
}
tugas25()