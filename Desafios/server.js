import  express, { response }  from "express"

const ProductManager = [{
    id:1,
    Producto: "Producto1",
    description:"Description1",
    price:123,
    thumbnail:"thumbnail1",
    code:123,
    stock:123,
},{
    id:2,
    Producto: "Producto2",
    description:"Description2",
    price:123,
    thumbnail:"thumbnail2",
    code:123,
    stock:123,
},
{
    id:3,
    Producto: "Producto3",
    description:"Description3",
    price:123,
    thumbnail:"thumbnail3",
    code:123,
    stock:123,
}]

const app = express()

const port = 8080

app.get("/pid",(req,res)=>{
    res.json(ProductManager)
})

app.get ("/pid/:idProducto",(req,res)=>{
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
    res.json(producto)
})


})

app.listen(port,()=>{
    console.log('Listenin on port ' + port)
})