function panjangAC(){

    var ab = 8
    var bc = 6
    var ac =  Math.sqrt(Math.pow(ab , 2)+Math.pow(bc , 2))
    console.log('Nilai AB : ' + (ab))
    console.log('Nilai BC : ' + (bc))
    return ac
}
console.log("panjang sisi AC pada segitiga siku-siku tersebut adalah : " + panjangAC())