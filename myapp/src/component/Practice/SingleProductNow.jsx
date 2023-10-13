import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SingleProductNow = () => {
  const [productData, setProductData] = useState({})
  const { id } = useParams();

  useEffect(() => {

    async function getSingleProductData() {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
      if (data) {
        setProductData(data)
      }

    }
    if (id) {
      getSingleProductData()

    }

  }, [id])

  console.log(productData, "productData")
  return (
    <div>
      {productData?.id ?
        <div style={{ display: "flex", justifyContent: "space-between", width: "80%", margin: "auto" }}>
          <div style={{ width: "40%", height: "600px", border: "1px solid black" }}><img style={{ width: "80%" }} src={productData.image} alt='img' /></div>
          <div style={{ width: "55%", height: "600px", border: "1px solid black" }}>
            <h1 >Name: {productData.title}</h1>
            <h4>category : {productData.category} </h4>
            <h4>description : {productData.description}</h4>
            <h4>price : {productData.price}$</h4>
            <h4>rating : {productData.rating.rate}</h4>
            <h4>number rating : {productData.rating.count}</h4>
          </div>
        </div>
        :
        <div>Loading....</div>
      }
    </div>
  )
}

export default SingleProductNow