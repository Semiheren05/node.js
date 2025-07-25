
// File system modülü
const fs = require('fs');
/*
const files =fs.readdir('./',function(error,data){
      if(error){
            console.log(error);
      }else{
            console.log(data);
      }
}); // uygulama içinde bulunan bütün dosyaları terminalde gösterir */
// -----------------------------------------------------------------------------
/*const data = fs.readFile('index.html','utf8',function(error,data)
{
      if(error){
            console.log(error);
      }else {
            console.log(data);
      }
}); // dosya içeriğini görüntüleyebiliyoruz */
//----------------------------------------------------------------
/*fs.writeFile('deneme.txt','Hello world...',function(error){
      if(error){
            console.log(error);
      }else{
            console.log('dosya oluşturuldu');
      }
}) // dosya oluşturur ve içine yazı yazar */
 /*
 fs.appendFile('deneme1.txt','Hello world...',function(error){
      if(error){
            console.log(error);
      }else{
            console.log('dosya oluşturuldu');
      } 
}) */ 
// dosya oluşturmada fark yok var olan dosyanın içerisine ekleme yapıyor dosya içeriğini silmeden
//  -----------------------------------------------------------------------------------------------------
fs.rename('deneme.txt','deneme2.txt',function(error){
 console.log('dosya ismi değiştirildi')     
}) 
// dosya ismi değiştirmek için kullanıyoruz