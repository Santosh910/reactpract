import React, { useEffect, useState } from 'react'
// import toast from 'react-hot-toast';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const router = useNavigate();

  useEffect(() => {
    // toast.success("Page rendered on browser...")
    async function getProducts() {
      try{
        const { data } = await axios.get('https://fakestoreapi.com/products')
      console.log(data, " DATA HERE")
      setProducts(data)
      }catch(error){
        toast.error(error.message)
      }
      
    }
    getProducts()
  }, [])


  return (
    <div> {products?.length ? <div style={{ display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
      {products.map((pro) => (
      <div onClick={() => router(`/single-product/${pro.id}`)} style={{border:"1px solid black",width:"23%",height:"450px",marginBottom:"20px"}}>
        <img style={{width:"100%",height:"300px"}} src={pro.image} alt='img' />
        <h3>Name :{pro.title} </h3>
        <h4>Price : {pro.price} $</h4>
      </div>
    ))}</div> : <div>Loading...</div>} </div>
  )
}

export default Products