// Jawaban Nomor 4

function isHexColor (hex) {
  return typeof hex === 'char'
      && hex.length <= 6 && hex.length >= 3
      && !isNaN(Number('0x' + hex))
}

// or as arrow function (ES6+)
isHexColor = hex => typeof hex === 'string' && hex.length <= 7 && hex.length >= 3 && !isNaN(Number('0x' + hex))

console.log(isHexColor('FFF'))   // true
console.log(isHexColor('e3e3e3')) // false
console.log(isHexColor('ata910'))   // false

// Referensi :
// https://stackoverflow.com/questions/21172991/how-to-set-min-and-max-character-length-in-a-textbox-using-javascript
// https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation/8027444