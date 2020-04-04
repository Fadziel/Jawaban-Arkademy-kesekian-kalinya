// Jawaban Nomor 6a

Products=[{id:1,name:"Latte",price:10000,id_category:2,id_cashier:1},
{id:2,name:"Cake",price:20000,id_category:1,id_cashier:2},
{id:3,name:"Makanan Favorit Anda",price:45000,id_category:2,id_cashier:3}];

Category=[{id:1,name:"Food"},
{id:2,name:"Drink"}];

Cashier=[{id:1,name:"Pevita Pearce"},
{id:2,name:"Raisa Andriana"},
{id:3,name:"Fadziel"}];

function getrelateddata(rs,sid){
 ret=null;rs.forEach(function(row){if(row.id==sid){ret=row;return;}});
 return ret;
}
//query:
sql="select o.name as cashier,p.name as product,c.name as category,p.price  from product p "+
" left join category c on c.id=p.id_category "+
" left join cashier o on o.id=p.id_category";

//javascript
Products.forEach(function(product){
  category=getrelateddata(Category,product.id_category);
  cashier=getrelateddata(Cashier,product.id_cashier);
  console.log(cashier.name+" | "+product.name+" | "+category.name+" | "+product.price+"\n");
});

// Referensi :
// https://www.w3schools.com/nodejs/nodejs_mysql_create_db.asp
// https://stackoverflow.com/questions/6337192/creating-a-database-to-use-with-javascript