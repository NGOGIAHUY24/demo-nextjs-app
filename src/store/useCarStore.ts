"use client"
import { create } from "zustand"
import { Car, cars } from "@/data/Car"

type CarStore = {
    selectCars: Car[]
    addCar: (car: Car) => void
    removeCar: (id: string) => void
    setCar: (car: Car) => void
    setCarsByTitle: (title: string) => void
}

export const useCarStore = create<CarStore>((set) => ({
    selectCars: [],

    addCar: (car) =>
        set((state) => {
            if (state.selectCars.find((c) => c.id === car.id)) return state
            return { selectCars: [...state.selectCars, car] }
        }),

    removeCar: (id) =>
        set((state) => ({
            selectCars: state.selectCars.filter((c) => c.id !== id)
        })),
    setCar: (car) => {
        set({ selectCars: [car] })
    },
    setCarsByTitle: (title: string) =>
        set({
            selectCars: cars.filter((c) => c.title.includes(title))
        })
}))
