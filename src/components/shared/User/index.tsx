"use client"
import Search from "@/components/modules/UserItem/Search"
import Logo from "@/components/styled/Logo"
import UserStyled from "@/components/styled/UserStyled"
import React from "react"
import { Autocomplete, AutocompleteItem } from "@heroui/react"
import { MapPinAreaIcon } from "@phosphor-icons/react"
import CardItem from "@/components/modules/HomeItem/CardItem"
import { useCarStore } from "@/store/useCarStore"
import Local from "@/components/modules/FilterItem/LocalFilter"
import Filter from "../Filter"
import Demo from "@/components/modules/HomeItem/Demo"
import ProductCarousel from "../Demo/demo"
import ProductCarouselImproved from "../Demo/demo"

export default function User() {
    // const selectCars = useCarStore((state) => state.selectCars)
    const imgS =
        "https://marketplace.canva.com/EAFNYtCMxro/1/0/1600w/canva-t%C3%ADm-hi%E1%BB%87n-%C4%91%E1%BA%A1i-logo-c%C3%B4ng-ngh%E1%BB%87-%26-tr%C3%B2-ch%C6%A1i-UlNyH8FgU4A.jpg"
    return (
        <>
            {/* Filter */}
            <div>
                <Filter />
            </div>

            <div>{/* <Demo /> */}</div>
        </>
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
