function balikKata(kata) {
 var satu = kata.split('');
 var dua = satu.reverse();
 var tiga = dua.join('')
 return tiga
}

// testCase
console.log(balikKata("Niomic!"))
console.log(balikKata("JavaScript"))
console.log(balikKata("alohahola"))
console.log(balikKata("Jawa_Barat"))
