"use client"
import Search from "@/components/styled/Search"
import Logo from "@/components/styled/Logo"
import UserStyled from "@/components/styled/UserStyled"
import React from "react"
import { Autocomplete, AutocompleteItem } from "@heroui/react"
import { MapPinAreaIcon } from "@phosphor-icons/react"
import CardItem from "@/components/modules/HomeItem/CardList"
import { useCarStore } from "@/store/useCarStore"
import Local from "@/components/modules/SelfDriverItem/LocalFilter"
import Filter from "../Filter"
import Demo from "@/components/modules/HomeItem/Demo"
import NavbarSelf from "@/components/modules/SelfDriverItem/NavbarSelf"
import GrateStyled from "@/components/styled/GrateStyled"
import IconUserStyled from "@/components/styled/IconUserStyled"
import { CardStyled } from "@/components/styled"
import Intro from "@/components/modules/HomeItem/Intro"

export default function Self_Driver() {
    // const selectCars = useCarStore((state) => state.selectCars)
    return (
        <div className="p-0">
            {/* Navbar */}
            <div>
                <NavbarSelf />
            </div>
            {/* Filter */}
            <div>
                <Filter />
            </div>
            <Intro />
            <div>{/* <CardItem data={} /> */}</div>
        </div>
    )
}

//
{
    /* header */
}
// <div className="flex w-full h-20 items-center justify-between bg-[#f4f4f4] rounded-2xl">
//     <div>
//         <div className="ml-4 mt-4 mb-4">
//             <img src={imgS} alt="LOGO" className="w-14 h-14 rounded-2xl" />
//         </div>
//     </div>
//     {/* Search */}
//     <Search />

//     <div className="flex gap-5">
//         {/* Location */}
//         <Local />

//         {/* User */}
//         <div className="flex mr-5">
//             <UserStyled name={"Huy"} />
//         </div>
//     </div>
// </div>
{
    /* Content */
}
// ;<div className="flex flex-col gap-5 mt-20">
//     <h1 className="mx-auto font-bold text-3xl">Danh sách sản phẩm</h1>
//     <CardItem />
// </div>
