import CardItem from "@/components/modules/HomeItem/CardItem"
import NavbarUser from "@/components/modules/UserItem/NavbarUser"
import Search from "@/components/modules/UserItem/Search"
import Carousel from "@/components/shared/Demo/demo"

import User from "@/components/shared/User"
import { cars } from "@/data/Car"
import React from "react"

export default function page() {
    const slides = [
        "https://vinfasttimescity.vn/wp-content/uploads/2024/08/vinfast-vf7-mau-trang-scaled.jpg",
        "https://vinfasttimescity.vn/wp-content/uploads/2024/08/vinfast-vf7-mau-trang-scaled.jpg",
        "https://vinfasttimescity.vn/wp-content/uploads/2024/08/vinfast-vf7-mau-trang-scaled.jpg",
        "https://vinfasttimescity.vn/wp-content/uploads/2024/08/vinfast-vf7-mau-trang-scaled.jpg",
        "https://vinfasttimescity.vn/wp-content/uploads/2024/08/vinfast-vf7-mau-trang-scaled.jpg",
        "https://vinfasttimescity.vn/wp-content/uploads/2024/08/vinfast-vf7-mau-trang-scaled.jpg"
    ]
    return (
        <>
            <User />
            <main className="flex flex-col items-center justify-center min-h-[80vh] mt-10">
                <Carousel slides={slides} />
            </main>
        </>
    )
}
