import React from 'react'
function Card({product}) {
  return (
    <div
    
      key={product.id}
      className="w-1/4 max-md:w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      
      <a href='/'>
        <img
          className="p-8 rounded-t-lg w-4/5 aspect-square m-auto max-sm:p-0 max-sm:rounded-lg max-sm:w-2/3"
          src={product.image_url}
          alt="product_image1"
          style={{
            // width: "80%",
            backgroundBlendMode: "color-burn",
            objectFit:"cover",
          }}
        />
      </a>
      <div className="px-5 pb-5 max-sm:pb-3  max-sm:pt-0">
        {/* <a href="/"> */}
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white max-sm:pt-0">
            {product.name}
          </h5>
          <p className=' text-white'>{product.tagline}</p>
        {/* </a> */}
        <div className="flex items-center mt-2.5 mb-5 max-sm:mt-1.2 max-sm:mb-1">
          <span className=' text-white'>Abv</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {product.abv}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            🪙 {product.attenuation_level}
          </span>
        
        </div>
      </div>
    </div>
  )
}

export default Card
