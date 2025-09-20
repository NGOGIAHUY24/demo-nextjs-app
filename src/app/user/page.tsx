import CardItem from "@/components/modules/HomeItem/CardItem"
import NavbarUser from "@/components/modules/UserItem/NavbarUser"
import Search from "@/components/modules/UserItem/Search"
import User from "@/components/shared/User"
import { cars } from "@/data/Car"
import React from "react"

export default function page() {
    return (
        <>
            <User />
            {/* <h1 className="text-2xl font-bold mb-4">Danh sách xe</h1> */}
            {/* <CardItem data={cars} /> */}
        </>
    )
}
