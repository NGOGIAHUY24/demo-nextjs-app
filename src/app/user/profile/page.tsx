"use client"
import { ButtonStyled, InputStyled } from "@/components"
import { InputPhone } from "@/components/modules/UserItem/InputPhone"
import SexPicker from "@/components/modules/UserItem/SexPicker"
import AvaterStyled from "@/components/styled/AvatarStyled"
import DatePickerStyled from "@/components/styled/DatePickerStyled"
import { Input } from "@heroui/react"
import { NotePencilIcon } from "@phosphor-icons/react/dist/ssr"

import React, { useState } from "react"
// import { useTranslation } from "react-i18next"
export default function ProfilePage() {
    const [buttonState, setButtonState] = useState(false)
    const img = "https://i.pravatar.cc/150?u=a042581f4e29026024d"
    // const { t } = useTranslation()
    return (
        <div className="w-[984]">
            <div className="text-3xl mb-4 p-4 font-bold">Thông tin tài khoản </div>

            <div className="flex gap-60">
                <div className="ml-6">
                    <AvaterStyled name="Ngo Gia Huy" img={img} />
                </div>

                if()
                <ButtonStyled
                    className="bg-white border border-primary text-primary
                                 hover:bg-primary hover:text-black mt-9"
                >
                    <div>
                        <NotePencilIcon />
                    </div>
                    Chỉnh sửa thông tin
                </ButtonStyled>

                <ButtonStyled
                    className="bg-white border border-primary text-primary
                                 hover:bg-primary hover:text-black mt-9"
                >
                    <div>
                        <NotePencilIcon />
                    </div>
                    Lưu thông tin
                </ButtonStyled>
            </div>

            <div className="flex justify-center item-center mt-6">
                <InputStyled 
                    label="Tên tài khoản"
                    placeholder="Tên..."
                    variant="bordered"
                    className="w-175"
                />
            </div>

            <div className="flex justify-around mt-5">
                <DatePickerStyled className="w-74" variant="bordered"/>
                <SexPicker label="Sex" placeholder="Chọn giới tính" variant="bordered" className="w-74" />
            </div>

            <div className="flex justify-around mt-10">
                {/* Phone */}
                <InputPhone/>

                {/* Email */}
                <Input
                    isReadOnly
                    className="w-75"
                    defaultValue="junior@heroui.com"
                    label="Email"
                    type="email"
                    variant="bordered"
                />
            </div>
        </div>
    )
}
