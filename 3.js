// Jawaban Nomor 3

const chunk = function(array, size) {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);

  return [head, ...chunk(tail, size)];
};

console.log(chunk([1,2,3], 2));

// Referensi :
// https://stackoverflow.com/questions/8495687/split-array-into-chunks
// https://rachmat.id/cara-memotong-string-pada-javascript/
// 10-metode-array-pada-javascript-yang-wajib-kamu-ketahui-5b33a047b110a
// https://stackoverflow.com/questions/7538519/how-to-get-subarray-from-array