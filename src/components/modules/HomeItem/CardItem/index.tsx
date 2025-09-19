"use client"
import { Card, CardBody, CardFooter, Image } from "@heroui/react"
import { BatteryChargingIcon, Couch, SuitcaseIcon, Users } from "@phosphor-icons/react"
import React from "react"
export default function CardItem() {
    const list = [
        {
            title: "Orange",
            img: "https://vinfastotominhdao.vn/wp-content/uploads/VinFast-VF3-mau-trang-noc-trang-scaled.jpg",
            price: "$5.50"
        },
        {
            title: "Tangerine",
            img: "https://vinfastotominhdao.vn/wp-content/uploads/VinFast-VF3-mau-trang-noc-trang-scaled.jpg",
            price: "$3.00"
        },
        {
            title: "Raspberry",
            img: "https://vinfastotominhdao.vn/wp-content/uploads/VinFast-VF3-mau-trang-noc-trang-scaled.jpg",
            price: "$10.00"
        },
        {
            title: "Lemon",
            img: "https://vinfastotominhdao.vn/wp-content/uploads/VinFast-VF3-mau-trang-noc-trang-scaled.jpg",
            price: "$5.30"
        },
        {
            title: "Avocado",
            img: "https://vinfastotominhdao.vn/wp-content/uploads/VinFast-VF3-mau-trang-noc-trang-scaled.jpg",
            price: "$15.70"
        },
        {
            title: "Lemon 2",
            img: "https://vinfastotominhdao.vn/wp-content/uploads/VinFast-VF3-mau-trang-noc-trang-scaled.jpg",
            price: "$8.00"
        }
    ]

    return (
        <div className="gap-8 grid grid-cols-2 sm:grid-cols-3 ">
            {list.map((item, index) => (
                // eslint-disable no-console
                <Card
                    className="hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out"
                    key={index}
                    isPressable
                    shadow="sm"
                    onPress={() => console.log("item pressed")}
                >
                    <CardBody className="overflow-visible ">
                        <Image
                            
                            alt={item.title}
                            className="w-full object-cover h-[200px]
                                        shadow-lg "
                            radius="lg"
                            shadow="sm"
                            src={item.img}
                            width="100%"
                        />
                    </CardBody>

                    <CardFooter className="flex flex-col text-small justify-between">
                        <div className="flex justify-between items-center w-full">
                            <div className="ml-6">
                                <b className="text-2xl">VinFast </b> <br />
                                <b className="text-2xl">VF 3</b>
                            </div>

                            <div className="mr-12">
                                <span className="text-2xl w-autp font-semibold text-green-600 whitespace-nowrap">
                                    2.000.000
                                </span>
                                <br />
                                <span className=" text-black">VNĐ/Ngày</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 ">
                            <div className="flex  gap-2 mb-4">
                                <div>
                                    <Couch className="flex h-6 w-6" />
                                </div>
                                <span>Minicar</span>
                            </div>

                            <div className="flex gap-2">
                                <div>
                                    <BatteryChargingIcon className="h-6 w-6" />
                                </div>
                                <span>210km (NEDC)</span>
                            </div>

                            <div className="flex gap-2">
                                <div>
                                    <Users className="h-6 w-6" />
                                </div>
                                <span>4 chỗ</span>
                            </div>
                            <div className="flex gap-0">
                                <div className="">
                                    <SuitcaseIcon className="h-6 w-6" />
                                </div>
                                <span>Dung tích cốp 285L</span>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}
