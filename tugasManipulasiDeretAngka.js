function deretAngka(n) {
    var angka = [];
    for(i = 1; i <= n ; i++) {
        if(i%3 === 0 && i % 5 ===0) {
        angka.push("NIOMIC");
        }else if(i%3 ===0){
            angka.push("NIO");
        }else if(i%5 === 0) {
            angka.push("MIC");
        }else {
            angka.push(i);
        }
    }
    str = String(angka)
    return str
}

console.log(deretAngka(10))
console.log(deretAngka(20))
console.log(deretAngka(30))