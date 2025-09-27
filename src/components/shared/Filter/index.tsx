"use client"
import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { CalendarDateTime, now, getLocalTimeZone, fromDate } from "@internationalized/date"
import DateTimeStyled from "@/components/styled/DateTimeStyled"
import LocalFilter from "@/components/modules/SelfDriverItem/LocalFilter"
import { ButtonStyled } from "@/components/styled"
import CardList from "@/components/modules/HomeItem/CardList"

const MIN_HOUR = 7
const MAX_HOUR = 17

export default function e() {
    // Tính thời gian mặc định
    const zonedNow = fromDate(new Date(), getLocalTimeZone())
    const nowTime = new CalendarDateTime(
        zonedNow.year,
        zonedNow.month,
        zonedNow.day,
        zonedNow.hour,
        zonedNow.minute,
        zonedNow.second
    )

    const initialStart =
        nowTime.hour >= MAX_HOUR
            ? nowTime.add({ days: 1 }).set({ hour: MIN_HOUR, minute: 0, second: 0 })
            : nowTime

    //  Validation schema
    const bookingSchema = Yup.object().shape({
        local: Yup.string().required("Vui lòng chọn địa điểm nhận xe"),
        start: Yup.mixed<CalendarDateTime>()
            .required("Vui lòng chọn ngày giờ nhận xe")
            .test("is-valid-start", "Ngày nhận xe không hợp lệ", function (value) {
                if (!value) return false
                const today = now(getLocalTimeZone())
                if (value.compare(today) < 0) return false
                if (value.hour < MIN_HOUR || value.hour >= MAX_HOUR) return false
                return true
            }),
        end: Yup.mixed<CalendarDateTime>()
            .required("Vui lòng chọn ngày giờ trả xe")
            .test("is-after-start", "Ngày trả xe phải sau ngày nhận xe", function (value) {
                const { start } = this.parent
                if (!value || !start) return false
                return value.compare(start) > 0
            })
            .test("is-valid-end", "Ngày trả xe phải trong khoảng 7h-17h", function (value) {
                if (!value) return false
                if (value.hour < MIN_HOUR || value.hour >= MAX_HOUR) return false
                return true
            })
    })

    //  useFormik
    const formik = useFormik({
        initialValues: {
            local: "",
            start: initialStart,
            end: initialStart.add({ hours: 1 })
        },
        validationSchema: bookingSchema,
        onSubmit: (values) => {
            console.log("Booking values:", values)
            alert(
                `Booking: stationId:: ${
                    values.local
                }, Time from ${values.start.toString()} to ${values.end.toString()}`
            )
        }
    })

    return (
        <div>
            <form
                onSubmit={formik.handleSubmit}
                className="flex gap-4 p-4 pb-10 justify-center items-center border border-gray-300 rounded-lg shadow-md max-w-[1500px]"
            >
                {/* ĐỊA ĐIỂM */}
                <div className="flex flex-col h-12">
                    <LocalFilter
                        value={formik.values.local}
                        onChange={(val) => formik.setFieldValue("local", val)}
                    />
                    {formik.touched.local && typeof formik.errors.local === "string" && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.local}</div>
                    )}
                </div>

                {/* START */}
                <div className="h-12">
                    <DateTimeStyled
                        label="Start Date & Time"
                        value={formik.values.start}
                        onChange={(val) => formik.setFieldValue("start", val)}
                    />
                    {formik.touched.start && typeof formik.errors.start === "string" && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.start}</div>
                    )}
                </div>

                {/* END */}
                <div className="h-12">
                    <DateTimeStyled
                        label="End Date & Time"
                        value={formik.values.end}
                        onChange={(val) => formik.setFieldValue("end", val)}
                    />
                    {formik.touched.end && typeof formik.errors.end === "string" && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.end}</div>
                    )}
                </div>

                <div className="flex justify-center items-center mt-2">
                    <ButtonStyled type="submit" color="primary" className="w-40 h-13.5">
                        Tìm kiếm xe
                    </ButtonStyled>
                </div>
            </form>

            <CardList />
        </div>
    )
}
