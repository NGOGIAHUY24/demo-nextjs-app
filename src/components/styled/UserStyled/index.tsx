import { cn, User, UserProps } from "@heroui/react"
import React from "react"

export default function UserStyled(props: UserProps) {
    return (
        <User
            avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
            }}
            description="Product Designer"
            {...props}
            className={cn("text-base", props.className)}
        />
    )
}
