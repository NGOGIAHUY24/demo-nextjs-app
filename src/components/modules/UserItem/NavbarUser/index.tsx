"use client"
import React from "react"
import Logo from "@/components/styled/Logo"
import { NavbarBrand, NavbarContent, NavbarItem, Link } from "@heroui/react"
import NavbarStyled from "@/components/styled/NavbarStyled"
import UserStyled from "@/components/styled/UserStyled"

//transition-all duration-400 ease-in-out data-[visible=false]:mt-0

export default function NavbarUser() {
    const baseClasses = ` bg-gray-700 mt-3
        fixed left-0 w-full z-50
        mx-auto max-w-7xl
        rounded-3xl`
    const menus = [
        { key: "home", label: "Home" },
        { key: "car", label: "Car" },
        { key: "contact", label: "Contact" }
    ]
    return (
        <NavbarStyled
            classNames={{
                base: [baseClasses]
            }}
        >
            <NavbarBrand>
                <Logo />
                {/* <p className="font-bold text-inherit">ACME</p> */}
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link aria-current="page" href="#">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <UserStyled name="Huy" description="hehe" className="text-white" />
                </NavbarItem>
            </NavbarContent>
        </NavbarStyled>
    )
}
