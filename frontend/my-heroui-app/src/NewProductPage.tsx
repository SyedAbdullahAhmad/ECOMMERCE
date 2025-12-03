import React, { useState } from 'react'
import { Input } from '@heroui/input'
import { Button } from '@heroui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowDown } from '@fortawesome/free-solid-svg-icons'
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@heroui/dropdown";
import axios from "axios"
const NewProductPage = () => {
   const[category,setCategory]=useState("Select Category")

    const[newProduct,setNewProduct]=useState({
        "productName":"",
        "productCategory":"",
         "productPrice":"",
         "productImage":"",
        "productQuantity":""
    })

    const handleProductName=(e:any)=>{
      setNewProduct((prev)=>({...prev,productName:e.target.value}))
    }
    const handleImageUrl=(e:any)=>{
      setNewProduct((prev)=>({...prev,productImage:e.target.value}))
    }
    const handleProductPrice=(e:any)=>{
      setNewProduct((prev)=>({...prev,productPrice:e.target.value}))
    }
    const handleProductQuantity=(e:any)=>{
      setNewProduct((prev)=>({...prev,productQuantity:e.target.value}))
    }
    const handleCategory=(selected:string)=>{
         setCategory(selected)
         setNewProduct((prev)=>({...prev,productCategory:selected}))
    }
    const handleDone=async()=>{
      try {
        const res=await axios.post("http://localhost:5000/newProductPage",newProduct)
      } catch (error) {
        console.error("Error in creating new Product")
      }
    } 
  return (
    <>
    <div className='newProductPage'>
      <div className='newProductPageDiv'>
         <Dropdown>
      <DropdownTrigger>
        <Button className='newProductCategorybtn' variant="bordered"> {category} <FontAwesomeIcon icon={faArrowDown} /></Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onPress={()=>handleCategory("Tops")} key="tops">Tops</DropdownItem>
        <DropdownItem onPress={()=>handleCategory("Bottoms")} key="bottoms">Bottoms</DropdownItem>
        <DropdownItem onPress={()=>handleCategory("Shoes")} key="shoes">Shoes</DropdownItem>
        <DropdownItem onPress={()=>handleCategory("Accessories")} key="accessories">Accessories</DropdownItem>
      </DropdownMenu>
    </Dropdown>
       <Input onChange={(e)=>handleProductName(e)} label="Product Name" placeholder='Name of the product...'/>
       <Input onChange={(e)=>handleImageUrl(e)} label="Image URL" placeholder='image URL...'/>
       <Input onChange={(e)=>handleProductPrice(e)} label="Product Price" placeholder='price of the product...'/>
       <Input onChange={(e)=>handleProductQuantity(e)} label="Product Quantity" placeholder='Product Quantity'/>
       <Button onPress={handleDone}>Done</Button>
      </div>
    </div>
    </>
  )
}

export default NewProductPage
