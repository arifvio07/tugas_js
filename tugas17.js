function tugas() {
    let kata = "Saya beLajar bahaSa peMrograman deNgan khUsuk."
    console.log(kata.toLowerCase())
    let word = "Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual."
    console.log(word.toLowerCase())
    console.log(word.toUpperCase())
    console.log(" ")
    let p = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    const i1 = p.codePointAt(0)
    const i2 = p.codePointAt(1)
    const i3 = p.codePointAt(2)
    const i4 = p.codePointAt(3)
    const i5 = p.codePointAt(4)
    const i6 = p.codePointAt(6)
    console.log(i1 + " - " + i2 + " - " + i3 + " - " + i4 + " - " + i5 + " - " + i6)
    // let k = p.substring(0,6)
    // console.log(k.codePointAt(k.length))

}
tugas()