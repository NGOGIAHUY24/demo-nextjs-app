import { useFormik } from "formik"
import React from "react"
import * as Yup from "yup"
import BrandPicker from "../BrandPicker"

export default function FillterBarOrder({ onFilterChange }) {
    const formik = useFormik({
        initialValues: {
            vehicalModel: "",
            status: "",
            start: "",
            end: ""
        },
        // validationSchema: Yup.object().shape({
        //     vehicalModel: Yup.string().required("Please pick vehical model"),
        //     status: Yup.string().required("please")
        // })
        onSubmit: (values) => {
            onFilterChange(values)
        }
    })

    return (
        <form>
            <BrandPicker data />
        </form>
    )
}
