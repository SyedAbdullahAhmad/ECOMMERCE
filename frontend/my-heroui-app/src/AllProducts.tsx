import React, { useEffect, useState } from 'react'
import "./index.css"
import axios from "axios"
const AllProducts = ({tops,setTops,bottoms,setBottoms,shoes,setShoes,accessories,setAccessories}) => {
 
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("http://localhost:5000/AllProducts")
                console.log(res.data)
                setTops(res.data.products.filter((item) => item.productCategory == "Tops"))
                setBottoms(res.data.products.filter((item) => item.productCategory == "Bottoms"))

            } catch (error) {
                console.error("Error in fetching products", error)
            }
        }
        fetchProducts()
    }, [])


    return (
        <>
            <div className='AllproductsPage'>
                <div className='AllProductsUpperdiv'>

                    <div className='AllCard AllProductsUpperdivCard'>
                        <div className='Allproductallcard'></div>
                        <p><b>All</b></p>
                    </div>

                    <div className='AllProductsUpperdivCard'>
                        <div className='Allproductcard1 allcard'></div>
                        <p>Tops</p>
                    </div>

                    <div className='AllProductsUpperdivCard'>
                        <div className='Allproductcard2 allcard'></div>
                        <p>Shirts</p>
                    </div>

                    <div className='AllProductsUpperdivCard'>
                        <div className='Allproductcard3 allcard'></div>
                        <p>Shoes</p>
                    </div>

                    <div className='AllProductsUpperdivCard'>
                        <div className='Allproductcard4 allcard'></div>
                        <p>Accessories</p>
                    </div>
                </div>
                <div>

                </div>
                <div className='AllproductslowerDiv' >
                    <h1><b>TOPS</b></h1>
                    <div className='AllproductslowerDivTops'>

                        {tops.length === 0 ? (
                            <p>
                                No item in TOPS
                            </p>
                        ) : tops.map((item, index) => (
                            <div className='AllproductslowerDivInnerDiv' key={item._id || index}>
                                <h1>{item.productName}</h1>
                                <img src={`http://localhost:5000/EcommerceImages/${item.productImage}`} />
                                <p>{item.productPrice}</p>
                            </div>
                        ))}
                    </div>
                    <h1><b>BOTTOMS</b></h1>
                    <div className='AllproductslowerDivBottoms'>

                        {
                            bottoms.length === 0 ? (
                                <p>No items in the bottom</p>
                            ) : (
                                bottoms.map((item, index) => (
                                    <div className='AllproductslowerDivInnerDiv' key={item._id || index}>
                                        <h1>{item.productName}</h1>
                                        <img src={`http://localhost:5000/EcommerceImages/${item.productImage}`} />
                                        <p>{item.productPrice}</p>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllProducts
