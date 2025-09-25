"use client"
import React from "react"
import { Autocomplete, AutocompleteItem, Avatar, Button } from "@heroui/react"
import { Car, cars } from "@/data/Car"
import { useCarStore } from "@/store/useCarStore"

const SearchIcon = ({ size = 24, strokeWidth = 1.5, width, height, ...props }) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={height || size}
        role="presentation"
        viewBox="0 0 24 24"
        width={width || size}
        {...props}
    >
        <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
        />
        <path
            d="M22 22L20 20"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
        />
    </svg>
)

export default function Search() {
    // Call Store
    const setCarsByTitle = useCarStore((state) => state.setCarsByTitle)

    const uniqueCars = Array.from(new Map(cars.map((car) => [car.title, car])).values())

    return (
        <div className="flex flex-col w-100 ml-80">
            <Autocomplete
                className=""
                aria-label="Select a car"
                items={uniqueCars}
                placeholder="Enter car name"
                variant="bordered"
                radius="full"
                startContent={
                    <SearchIcon className="text-default-400" size={20} strokeWidth={2.5} />
                }
            >
                {(item: Car) => (
                    <AutocompleteItem
                        key={item.id}
                        textValue={item.title}
                        // onPress={() => [clearCar(item.id), addCar(item)]}
                        onPress={() => setCarsByTitle(item.title)}
                    >
                        <div
                            className="flex justify-between items-center"
                            // onClick={() => handleAdd(item)}
                        >
                            <div className="flex gap-2 items-center">
                                <Avatar
                                    alt={item.title}
                                    className="shrink-0"
                                    size="sm"
                                    src={item.img}
                                />
                                <div className="flex flex-col">
                                    <span className="text-small">{item.title}</span>
                                    {/* <span className="text-tiny text-default-400">{item.couch}</span> */}
                                </div>
                            </div>
                            <Button
                                className="border-small mr-0.5 font-medium shadow-small"
                                radius="full"
                                size="sm"
                                variant="bordered"
                                // onPress={() => [handleAdd(item), handleSelect(item)]}
                                onPress={() => setCarsByTitle(item.title)}
                            >
                                Add
                            </Button>
                        </div>
                    </AutocompleteItem>
                )}
            </Autocomplete>

            {/* Render card khi có chọn xe */}
            {/* {selectCars.length > 0 && <CardItem data={selectCars} />} */}
        </div>
    )
}
