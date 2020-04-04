// Jawaban Nomor 2

function usernameCheck(nama){
  re=/^([A-Z]{7,7})$/;
  rs=nama.match(re);
  return re.test(nama) ;
} 

function passwordCheck(password){
    pas=/^([#][a-zA-Z0-9]{9,15})$/;
    dol=password.match(pas);
    return pas.test(password);
}

username="SABRINA";
is_valid=usernameCheck(username);
console.log(username+"="+is_valid);

username="KEVIN";
is_valid=usernameCheck(username);
console.log(username+"="+is_valid);

password="#DirumahAj4";
pass_valid=passwordCheck(password);
console.log(password+"="+pass_valid);

password="Cuci#Tangan";
pass_valid=passwordCheck(password);
console.log(password+"="+pass_valid);

// Referensi :
// http://belajar-coding-web.blogspot.com/2015/03/cek-validasi-username-pakai-regex.html
// https://www.w3schools.com/js/js_validation.asp
// https://www.w3resource.com/javascript/form/all-letters-field.php
