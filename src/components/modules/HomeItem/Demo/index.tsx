"use client"
import React, { useState } from "react"

const cars = [
    {
        name: "VinFast VF 8",
        badge: "Thuê nhiều nhất",
        tag: "Miễn phí sạc",
        img: "https://picsum.photos/id/1011/600/300",
        type: "D-SUV",
        seats: "5 chỗ",
        range: "~562km (NEDC)",
        trunk: "Dung tích cốp 350L"
    },
    {
        name: "VinFast VF 9",
        badge: "",
        tag: "Miễn phí sạc",
        img: "https://picsum.photos/id/1018/600/300",
        type: "E-SUV",
        seats: "6-7 chỗ",
        range: "~626km (WLTP)",
        trunk: "Dung tích cốp 212L"
    },
    {
        name: "VinFast VF 3",
        badge: "",
        tag: "Miễn phí sạc",
        img: "https://picsum.photos/id/1021/600/300",
        type: "Minicar",
        seats: "4 chỗ",
        range: "210km (NEDC)",
        trunk: "Dung tích cốp 285L"
    }
]

export default function Demo() {
    const [current, setCurrent] = useState(0)

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % cars.length)
    }

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + cars.length) % cars.length)
    }

    return (
        <div className="w-full flex flex-col items-center">
            {/* Slider */}
            <div className="relative w-[350px] h-[420px] overflow-hidden">
                {cars.map((car, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full p-4 transition-all duration-500 ${
                            index === current
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-full"
                        }`}
                    >
                        <div className="bg-black text-white rounded-xl shadow-lg h-full flex flex-col items-center justify-between p-4">
                            {/* Badge */}
                            <div className="flex w-full justify-between">
                                <span className="text-xs bg-green-700 px-2 py-1 rounded">
                                    {car.tag}
                                </span>
                                {car.badge && (
                                    <span className="text-xs bg-red-600 px-2 py-1 rounded">
                                        {car.badge}
                                    </span>
                                )}
                            </div>

                            {/* Image */}
                            <img
                                src={car.img}
                                alt={car.name}
                                className="w-full h-40 object-cover rounded-lg mt-2"
                            />

                            {/* Info */}
                            <h3 className="text-xl font-bold mt-3">{car.name}</h3>
                            <p>
                                {car.type} | {car.seats}
                            </p>
                            <p>{car.range}</p>
                            <p>{car.trunk}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Controls */}
            <div className="flex mt-4 gap-4">
                <button
                    onClick={prevSlide}
                    className="bg-gray-800 text-white px-4 py-2 rounded-full"
                >
                    ◀
                </button>
                <button
                    onClick={nextSlide}
                    className="bg-gray-800 text-white px-4 py-2 rounded-full"
                >
                    ▶
                </button>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-3">
                {cars.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full ${
                            current === index ? "bg-gray-800" : "bg-gray-400"
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}
