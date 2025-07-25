import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../context/shopContext'
import Title from './Title';
import ProductItem from './ProductItem';


const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(shopContext)
    const [related, setRelated] = useState([]);


    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();

            // first we are filtering for category

            productsCopy = productsCopy.filter((item) => {
                return (
                    category === item.category
                )
            })

            // here we are filtering new array based on category to subcategory
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory)
            setRelated(productsCopy.slice(0, 5))
        }

    }, [products])

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'RELATED'} text2={'PRODUCTS'} />
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    related.map((item,index)=>{
                        return(
                            <ProductItem key={index} id={item._id} image={item.image} price={item.price} name={item.name} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RelatedProducts
