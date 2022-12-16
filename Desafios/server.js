import  express, { response }  from "express"

const ProductManager = [
    {id:1,Producto: "Producto1",description:"Description1",price:123,thumbnail:"thumbnail1",code:123,stock:123},
    {id:2,Producto: "Producto2",description:"Description2",price:123,thumbnail:"thumbnail2",code:123,stock:123},
    {id:3,Producto: "Producto3",description:"Description3",price:123,thumbnail:"thumbnail3",code:123,stock:123},
    {id:4,Producto: "Producto4",description:"Description4",price:123,thumbnail:"thumbnail4",code:123,stock:123},
    {id:5,Producto: "Producto5",description:"Description5",price:123,thumbnail:"thumbnail5",code:123,stock:123},
    {id:6,Producto: "Producto6",description:"Description6",price:123,thumbnail:"thumbnail6",code:123,stock:123},
    {id:7,Producto: "Producto7",description:"Description7",price:123,thumbnail:"thumbnail7",code:123,stock:123}, 
    {id:8,Producto: "Producto8",description:"Description8",price:123,thumbnail:"thumbnail8",code:123,stock:123},
    {id:9,Producto: "Producto9",description:"Description9",price:123,thumbnail:"thumbnail9",code:123,stock:123},
    {id:10,Producto: "Producto10",description:"Description10",price:123,thumbnail:"thumbnail10",code:123,stock:123}
    ]

const app = express()

const port = 8080

app.get("/pid",(req,res)=>{
    res.json(ProductManager)
})

app.get("/pid/:idProducto",(req,res)=>{
console.log(req)
const {idProducto} = req.params

if(ProductManager){
    console.log(idProducto)
    const producto = ProductManager.find((producto)=>producto.id == idProducto)
    res.json(producto)
}else{
    res.json(ProductManager)
}

app.get("/getProduct",(req,res)=>{
    const {idProducto, Producto} = req.query
    console.log(idProducto, Producto)
    const producto = ProductManager.find((producto)=>producto.id == idProducto)
    if (idProducto == idProducto) {
        res.json(producto.splice(idProducto))
    }
    res.json(producto)
})


})

app.listen(port,()=>{
    console.log('Listenin on port ' + port)
})