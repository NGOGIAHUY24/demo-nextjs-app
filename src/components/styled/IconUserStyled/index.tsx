"use client"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, User } from "@heroui/react"
import Link from "next/link"
import React from "react"

// cách dùng
{
    /* <IconUserStyled
            name="Tony Reichert"
            img="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        /> */
}

//

type UserProps = {
    props: object
    name: string
    img: string // string
}

export default function IconUserStyled({ props, name, img }: UserProps) {
    return (
        <div className="flex items-center gap-4">
            <Dropdown placement="bottom-start">
                <DropdownTrigger>
                    <User
                        as="button"
                        avatarProps={{
                            isBordered: true,
                            src: img
                        }}
                        className="transition-transform"
                        name={name}
                        {...props}
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="User Actions" variant="flat">
                    {/* <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-bold">Signed in as</p>
                        <p className="font-bold">@tonyreichert</p>
                    </DropdownItem> */}

                    <DropdownItem key="profile">
                        <Link href="/#">Tài khoản của tôi</Link>
                    </DropdownItem>
                    <DropdownItem key="team_settings">
                        <Link href="/#">Đơn hàng của tôi</Link>
                    </DropdownItem>
                    <DropdownItem key="logout" color="danger">
                        Log Out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
