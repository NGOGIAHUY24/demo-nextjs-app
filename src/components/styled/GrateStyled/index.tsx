import React from "react"
import CardReview from "./card-review"

type ratingProps = {
    name: string
    rating: number
    avatar: string
}
//    <GrateStyled name="" rating={} avatar="" />
export default function GrateStyled({ name, rating, avatar }: ratingProps) {
    return (
        <div className="flex flex-col gap-4">
            <CardReview
                content="Arcu dui vivamus arcu felis bibendum. Amet tellus cras adipiscing enim eu turpis egestas pretium. "
                createdAt="2021-08-01T12:00:00.000Z"
                rating={rating} //sao
                title="Great product"
                user={{
                    name: name,
                    avatar: avatar
                }}
            />
        </div>
    )
}
