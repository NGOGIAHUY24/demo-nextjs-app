"use client"
import { ScrollShadow } from "@heroui/react"
import React from "react"
import products from "./ProductList/Product.ts"
import ProductListItem from "./ProductList/Produc-list-item"

function ProductList() {
    return (
        <div className="flex flex-col justify-center items-center 
                        w-334 h-148">
            <div className="flex-col justify-center items-center w-auto h-auto" >
                <h1 className="font-bold h-auto w-auto text-4xl">Chương Trình Khuyến Mãi</h1>
                <h4 className="ml-8 mt-6 text-2xl">Nhận nhiều ưu đãi hấp dẫn từ Mioto</h4>
            </div>
            <div className="my-auto flex w-full max-w-7xl flex-col items-start gap-2">
                <ScrollShadow
                    className="-mx-6 -my-5 flex w-full max-w-full snap-x justify-start gap-6 px-6 py-5"
                    orientation="horizontal"
                    size={20}
                >
                    {products.map((product) => (
                        <ProductListItem key={product.id} {...product} className="snap-start" />
                    ))}
                </ScrollShadow>
            </div>
        </div>
    )
}

export default ProductList
