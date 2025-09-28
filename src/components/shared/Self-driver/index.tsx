"use client"
import React from "react"
import Filter from "../Filter"
import NavbarSelf from "@/components/modules/SelfDriverItem/NavbarSelf"
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
