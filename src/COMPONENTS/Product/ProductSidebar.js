import React from 'react'
import AllProducts from './AllProduct'
import CategorySidebar from './CategorySidebar'
import './ProductSidebar.css';

const ProductSidebar = () => {
  return (
    <div className='product_sidebar'>
      <CategorySidebar/>
      <AllProducts/>
    </div>
  )
}

export default ProductSidebar
