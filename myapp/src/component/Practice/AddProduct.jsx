import React, { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios';

const AddProduct = () => {
    const [productData, setProductData] = useState({ name: "", price: "", image: "" })
    console.log(productData, "productdata")

    const handleChange = (event) => {
        console.log(event.target.value)
        setProductData({ ...productData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (productData.name && productData.price && productData.image && productData.price > 0) {
            try {
                const { data } = await axios.post("https://fakestoreapi.com/products", { title: productData.name, price: productData.price, image: productData.image })
                console.log(data, "responce from post request")
                toast.success("product added successfully , now add another product")
                setProductData({ name: "", price: "", image: "" })
            } catch (error) {
                console.log(error)
            }


        } else {
            toast.error("all field are mandotory")
        }
    }





    return (
        <div style={{ width: "300px", margin: "auto", height: "300px", backgroundColor: "blue", marginTop: "100px" }}>
            <h1>AddProduct</h1>
            <form onSubmit={handleSubmit}>
                <label>Product Name</label><br />
                <input name='name' type="text" onChange={handleChange} value={productData.name } /><br />
                <label>Product Price</label><br />
                <input name='price' type="number" onChange={handleChange} value={productData.price} /><br />
                <label>Product image</label><br />
                <input name='image' type="url" onChange={handleChange} value={productData.image} /><br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default AddProduct