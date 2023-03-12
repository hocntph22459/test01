import instance from "./config"

const GetProduct = ()=>{
    return instance.get("/products")
}
const PostProduct = ()=>{
    return instance.post("/products")
}
const DeleteProduct = ()=>{
    return instance.delete("/products/:id")
}
const PutProduct = ()=>{
    return instance.put("/products/:id")
}

export {GetProduct,PostProduct,DeleteProduct,PutProduct}