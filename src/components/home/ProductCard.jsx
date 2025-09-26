import React from 'react'
const ProductCard = ({product}) => {
    return (
        <div>
              <div
            class="flex flex-col shadow-md w-full max-w-[250px] py-3 px-4 bg-white rounded-md"
          >
            <div>
              <img
                src={product.image}
                alt=""
                class="w-full h-auto object-contain"
              />
            </div>
            <div class="font-medium text-sm py-2 leading-tight text-left">
              <p>{product.name}</p>
            </div>
            <div class="flex gap-1 items-center">
              <p class="text-xs text-gray-400">4.7</p>
              <img src="star-1.png" alt="" />
              <img src="star-1.png" alt="" />
              <img src="star-1.png" alt="" />
              <img src="star-1.png" alt="" />
              <img src="star-2.png" alt="" />
              <p class="text-xs text-gray-400">(23)</p>
            </div>
            <div class="font-medium text-sm py-2 mb-2 text-left">
              <p>{product.ref}</p>
            </div>
            <div class="bg-[#4EA291] text-white text-center py-1.5 rounded-md">
              <button class="text-sm">View Detail</button>
            </div>
          </div>
        </div>
    )
}

export default ProductCard;
