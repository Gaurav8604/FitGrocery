import React from 'react'
import AllProducts from './AllProducts'
import CategorySidebar from './CategorySidebar'
import './ProductSidebar.css';

const Product_Sidebar = () => {
  return (
    <div className='product_sidebar'>
      <CategorySidebar/>
      <AllProducts/>
    </div>
  )
}

export default Product_Sidebar
