// Jawaban Nomor 5

function getFrequency(string) {
var freq = {};
for (var i=0; i<string.length;i++) {
    var character = string.charAt(i);
    if (freq[character]) {
       freq[character]++;
    } else {
       freq[character] = 1;
    }
}

return freq;
};

getFrequency('hari apa saja saya bisa');

getFrequency('cepat kerjakan!!!');

// Referensi :
// https://stackoverflow.com/questions/28807016/get-duplicate-characters-count-in-a-string/28807143
// https://stackoverflow.com/questions/33656708/check-for-repeated-characters-in-a-string-javascript
// https://elcicko.com/menghapus-item-duplikat-pada-array-di-es6
// https://www.w3schools.in/java-program/java-program-find-duplicate-characters-string/
// https://howtodoinjava.com/java/string/find-duplicate-characters/
