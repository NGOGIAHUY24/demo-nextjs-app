import { ButtonStyled } from "@/components"
import AvaterStyled from "@/components/styled/AvatarStyled"
import DatePickerStyled from "@/components/styled/DatePickerStyled"
import { NotePencilIcon } from "@phosphor-icons/react/dist/ssr"

import React from "react"
// import { useTranslation } from "react-i18next"
export default function ProfilePage() {
    const img = "https://i.pravatar.cc/150?u=a042581f4e29026024d"
    // const { t } = useTranslation()
    return (
        <div>
            <div className="text-3xl mb-4 font-bold">Thông tin tài khoản </div>
            <div className="flex justify-between">
                <div>
                    <AvaterStyled name="Ngo Gia Huy" img={img} />
                </div>
                <div className="flex gap-3">
                    <ButtonStyled className="bg-white border border-primary text-primary hover:bg-primary hover:text-black ">
                        <div>
                            <NotePencilIcon />
                        </div>
                        Chỉnh sửa thông tin
                    </ButtonStyled>

                    <ButtonStyled className="bg-white border border-primary text-red-600 hover:bg-red-600 hover:text-black ">
                        <div>
                            <NotePencilIcon />
                        </div>
                        Xóa tài khoản
                    </ButtonStyled>
                </div>
            </div>
            <div>
                <DatePickerStyled />
            </div>
            <div>
                <DatePickerStyled />
            </div>
            <div>
                <DatePickerStyled />
            </div>
        </div>
    )
}
