import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import "./index.css"
import { Button } from '@heroui/button'
import { useNavigate } from 'react-router-dom'
const AdminPanel = () => {
  const navigate = useNavigate();
  const handleNewProductbtn = () => {
    navigate("/newProductPage")
  }
  const handleUpdateProduct = () => {

  }
  const handleDeleteProduct = () => {
    navigate("/deleteProductPage")
  }
  return (
    <>
      <div className='adminPanelDiv'>
        <h1><b>Admin Panel</b></h1>
        <div className='AdminAllfuncDiv'>
          <div className='newAdminDiv'>
            <FontAwesomeIcon icon={faPlus} />
            <Button onPress={handleNewProductbtn}>Add New Product</Button>
          </div>

          <div className='updateAdminDiv'>
            <FontAwesomeIcon icon={faPenToSquare} />
            <Button onPress={handleUpdateProduct}>Update Product</Button>
          </div>

          <div className='updateAdminDiv'>
            <FontAwesomeIcon icon={faTrash} />
            <Button onPress={handleDeleteProduct}>Delete Product</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminPanel
