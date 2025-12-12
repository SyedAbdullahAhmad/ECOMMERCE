import React from 'react'
import "./index.css"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@heroui/button';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@heroui/dropdown";
import axios from "axios"
import Tops from './Tops';
const DeleteProductPage = ({tops,bottoms,shoes,accessories}) => {
  const [category, setCategory] = useState("Select Category")

  const handleCategory = (selected: string) => {
    setCategory(selected)
  }
  return (
    <>
      <div className='deleteProductPage'>
        <div className='delProductPageCategorySelectDiv'>
          <h1>DeleteProductPage</h1>
          <h1>From which category do you want to delete?</h1>
          <Dropdown>
            <DropdownTrigger>
              <Button className='newProductCategorybtn' variant="bordered"> {category} <FontAwesomeIcon icon={faArrowDown} /></Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem onPress={() => handleCategory("Tops")} key="tops">Tops</DropdownItem>
              <DropdownItem onPress={() => handleCategory("Bottoms")} key="bottoms">Bottoms</DropdownItem>
              <DropdownItem onPress={() => handleCategory("Shoes")} key="shoes">Shoes</DropdownItem>
              <DropdownItem onPress={() => handleCategory("Accessories")} key="accessories">Accessories</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      {/* <div className='belowSelectioninDelPage'>
         {
          category==="Tops" && tops.map((item,index)=>(
            <div key={item._id||index}>
              <h1>{item.productName}</h1>
              <img src=''/>
            </div>
          ))
         }
      </div> */}
    </>
  )
}

export default DeleteProductPage
