import React from "react"
import Navbar from "../Navbar"
import CardItem from "@/components/modules/HomeItem/CardList"
import Carousel from "@/components/modules/HomeItem/Carousel"
import { slides } from "@/data/picture"
import { ButtonStyled } from "@/components/styled"
import Link from "next/link"
import { link } from "fs"

export default function Home() {
    return (
        <>
            <Navbar />

            {/* Carousel */}
            <div className="relative">
                <div className="absolute top-0 left-133 flex flex-col items-center justify-center gap-5">
                    <div className="font-bold text-2xl ">Thuê xe tự lái</div>
                    <div className="text-gray-500">
                        Dịch vụ thuê xe tự lái chuyên nghiệp – linh hoạt theo ngày / tháng / năm đáp
                        ứng mọi nhu cầu di chuyển cá nhân.
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

            <CardItem />
        </>
    )
}
