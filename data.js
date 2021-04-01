module.exports = function(){
    return {
        products:[
            { id:1, name:"Samsung S5", price:2500, imageUrl:"1.jpg", description:"İdare eder.", category:"Telefon"},
            { id:2, name:"Samsung S6", price:4500, imageUrl:"2.jpg", description:"Uygun bütçeli telefon.", category:"Telefon"},
            { id:3, name:"Samsung S7", price:6000, imageUrl:"3.jpg", description:"Güzel ama pahalı telefon.", category:"Telefon"},
            { id:4, name:"Iphone Pro Max", price:10000, imageUrl:"4.jpg", description:"Pahalı telefon.", category:"Telefon"},
            { id:5, name:"Iphone 6S", price:3500, imageUrl:"5.jpg", description:"Uygun ve kullanışlı telefon.", category:"Telefon"},
            { id:6, name:"Xiamio Redmi Note 9", price:3000, imageUrl:"6.jpg", description:"Fiyatına göre uygun telefon.", category:"Telefon"},
            { id:7, name:"Oppo A73", price:2300, imageUrl:"7.jpg", description:"Güzel telefon.", category:"Telefon"},
            { id:8, name:"HP Pavilion", price:7800, imageUrl:"pc1.jpg", description:"Güzel bir bilgisayar.", category:"Bilgisayar"},
            { id:9, name:"HP 15S", price:3700, imageUrl:"pc3.jpg", description:"Uygun bilgisayar.", category:"Bilgisayar"},
            { id:10, name:"Lenova IdeaPad", price:9800, imageUrl:"pc2.jpg", description:"Pahalı bir bilgisayar.", category:"Bilgisayar"}
        ],
        categories:[
            { id:1, name:"Telefon"},
            { id:2, name:"Bilgisayar"},
            { id:3, name:"Elektronik"}
        ],
        orders:[]
    }
}