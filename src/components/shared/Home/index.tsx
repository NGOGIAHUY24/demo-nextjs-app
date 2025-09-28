import React from "react"
import Navbar from "../Navbar"
import CardItem from "@/components/modules/HomeItem/CardList"
import Carousel from "@/components/modules/HomeItem/Carousel"
import { slides } from "@/data/picture"
import { ButtonStyled } from "@/components/styled"
import Link from "next/link"

export default function Home() {
    return (
        <div>
            <div>
                <Navbar />
            </div>

            {/* Carousel */}
            <div className="mt-30">
                <div className="relative">
                    <div className="absolute top-0 left-133 flex flex-col items-center justify-center gap-5">
                        <div className="font-bold text-2xl ">Green Rides. Brighter Future.</div>
                        <div className="text-gray-500">
                            Dịch vụ thuê xe tự lái chuyên nghiệp phục vụ mọi nhu cầu di chuyển cá
                            nhân.
                        </div>

                        <ButtonStyled
                            as={Link}
                            href="/self-drive"
                            className="text-black h-13 hover:bg-primary hover:text-white"
                            variant="bordered"
                        >
                            Xem chi tiết
                        </ButtonStyled>
                    </div>
                    <Carousel slides={slides} />
                </div>
            </div>

            <CardItem />
        </div>
    )
}
