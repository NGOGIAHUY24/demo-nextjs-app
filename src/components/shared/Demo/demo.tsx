"use client"
import React from "react"
import Image from "next/image"

const brands = [
    { id: 1, src: "/brands/nike.png", alt: "Nike" },
    { id: 2, src: "/brands/adidas.png", alt: "Adidas" },
    { id: 3, src: "/brands/puma.png", alt: "Puma" },
    { id: 4, src: "/brands/reebok.png", alt: "Reebok" },
    { id: 5, src: "/brands/converse.png", alt: "Converse" }
]

export default function BrandsBanner() {
    return (
        <div className="w-full overflow-hidden bg-white py-6">
            <div className="relative flex overflow-x-hidden">
                {/* Track chạy 1 */}
                <div className="flex animate-marquee space-x-16">
                    {brands.map((brand) => (
                        <Image
                            key={brand.id}
                            src={brand.src}
                            alt={brand.alt}
                            width={120}
                            height={60}
                            className="object-contain"
                        />
                    ))}
                </div>

                {/* Track chạy 2 (clone để tạo hiệu ứng vô hạn) */}
                <div className="absolute top-0 flex animate-marquee2 space-x-16">
                    {brands.map((brand) => (
                        <Image
                            key={`clone-${brand.id}`}
                            src={brand.src}
                            alt={brand.alt}
                            width={120}
                            height={60}
                            className="object-contain"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
