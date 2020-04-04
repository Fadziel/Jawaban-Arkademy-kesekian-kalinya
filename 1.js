// Jawaban Nomor 1

function getBiodata(nama,umur){

  bio={
  name:nama,
  age:umur,
  address:"Jl. Raya Bumiratu kompleks lapangan Bumiratu RT/RW 004/003, Pagelaran, Prigsewu, Lampung",
  hobbies:["Gaming","coding learn","playing football"],
  is_married:false,
  list_school:[
   { name:"SD",year_in:2001,year_out:2007,major:"elementary"},
   { name:"SMP",year_in:2007,year_out:2010,major:"middle"},
   { name:"SMK",year_in:2010,year_out:2013,major:"Teknik Komputer & Jaringan"},
   { name:"UNIVERSITY",year_in:2013,year_out:2019,major:"S.Kom"}
  ],
  skills:[
   {skill_name:"Android Studio",level:"beginner"},
   {skill_name:"Grapich Design",level:"advanced"},
   {skill_name:"Computer Enginering",level:"advanced"},
   {skill_name:"IT & Network Enginering",level:"advanced"},
   {skill_name:"Public Speaking (MC Event)",level:"Advance"},
   {skill_name:"Ten Finger Typing",level:"Advance"}
  ],
  interest_in_coding:true
 };
 return bio;
}
data=getBiodata("Fadzil Amrullah Asy syahid",24);
console.log('getBiodata("Fadzil Amrullah Asy syahid",24);\n');
console.log(data);

// Referensi 
// Youtube : Web Programming UNPAS "APA ITU JSON": https://youtu.be/EluVFXu4GOU
// https://www.w3schools.com/js/js_json.asp
// https://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript
// https://www.maribelajarcoding.com/2019/03/parsing-data-json-dengan-javascript.html

// Thanks To 
// DICODING
// CODEPOLITAN
// UDACODING
// PETANI CODE