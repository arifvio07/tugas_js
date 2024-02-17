function tugas26() {
    // var a = isFinite([2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]);
    // console.log(a)
    let x = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]
    let y = isFinite(x)
    if(y = false){
        y = "Infinity."
    }else {
        y = "not Infinity."
    }

    x.forEach((a,b) => {
        console.log("angka " + a +" " + y)

        
    });
}
tugas26()