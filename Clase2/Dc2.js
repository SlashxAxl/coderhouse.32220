class productManager{
    constructor(){
        this.products = [];
    }
    addProduct(title,description,price, thumbnail){
        const product = {
                id: this.#getMaxId().length + 1,
                title,
                description,
                price,
                thumbnail,
                code: this.#getMaxCode().length + 1,
                stock: [],
            };
        this.products.push(product);
        console.log(this.products);
    }
    #getMaxId(){
        let maxId = 0;
        this.products.map((product)=>{
            if (product.id>maxId)maxId = product.id 
        })
        return maxId
    }
    #getMaxCode(){
        let maxCode = 0;
        this.products.map((product)=>{
            if (product.code>maxCode)maxCode = product.code 
        })
        return maxCode
    }
    #getProductById(idProduct){
        if ( idProduct != null) {
            this.products.find((product) => product.id == idProduct)
        } else {
            console.log("Product not found")
        }
    }
}

const productmanager = new productManager();
productmanager.addProduct("Poduct1","Description1","Price1","Thumbnail1");
productmanager.addProduct("Poduct2","Description2","Price2","Thumbnail2");
productmanager.addProduct("Poduct3","Description3","Price3","Thumbnail3");