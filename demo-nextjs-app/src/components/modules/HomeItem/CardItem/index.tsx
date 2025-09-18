"use client"
import { Card, CardBody, CardFooter, Image } from "@heroui/react"
import { BatteryChargingIcon, Couch, SuitcaseIcon, Users } from "@phosphor-icons/react"
import React from "react"
export default function CardItem() {
    const list = [
        {
            title: "Orange",
            img: "/images/fruit-1.jpeg",
            price: "$5.50"
        },
        {
            title: "Tangerine",
            img: "/images/fruit-2.jpeg",
            price: "$3.00"
        },
        {
            title: "Raspberry",
            img: "/images/fruit-3.jpeg",
            price: "$10.00"
        },
        {
            title: "Lemon",
            img: "/images/fruit-4.jpeg",
            price: "$5.30"
        },
        {
            title: "Avocado",
            img: "/images/fruit-5.jpeg",
            price: "$15.70"
        },
        {
            title: "Lemon 2",
            img: "/images/fruit-6.jpeg",
            price: "$8.00"
        },
    ]

    return (
                // <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                //     {list.map((item, index) => (
                //         <Card
                //             key={index}
                //             isPressable
                //             shadow="sm"
                //             onPress={() => console.log("item pressed")}
                //         >
                //             <CardBody className="overflow-visible p-0">
                //                 <Image
                //                     alt={item.title}
                //                     className="w-full object-cover h-[140px]"
                //                     radius="lg"
                //                     shadow="sm"
                //                     src={item.img}
                //                     width="100%"
                //                 />
                //             </CardBody>
                //             <CardFooter className="text-small justify-between">
                //                 <b>{item.title}</b>
                //                 <p className="text-default-500">{item.price}</p>
                //             </CardFooter>
                //         </Card>
                //     ))}
                // </div>


        <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
            {list.map((item, index) => (
                // eslint-disable no-console
                <Card
                    key={index}
                    isPressable
                    shadow="sm"
                    onPress={() => console.log("item pressed")}
                    
                >
                    <CardBody className="overflow-visible p-0 h-40">
                        <Image
                            alt={item.title}
                            className="w-full object-cover h-[140px]"
                            radius="lg"
                            shadow="sm"
                            src={item.img}
                            width="100%"
                        />
                    </CardBody>

                    <CardFooter className="flex flex-col text-small justify-between">
                        <b className="text-xl">VinFast VF 3</b>
                        <div className="flex gap-30">
                            <div><Couch className="h-6 w-6"/></div>
                            <div><BatteryChargingIcon className="h-6 w-6"/></div>
                        </div>
                        <div className="flex gap-30">
                            <div><Users className="h-6 w-6"/></div>
                            <div className=""><SuitcaseIcon className="h-6 w-6"/></div>
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}
