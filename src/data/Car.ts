export type Car = {
    id: string
    title: string
    img: string
    price: number
    couch: number
    km: number
    seats: number
    trunk?: number
}

// Danh sách xe
export const cars: Car[] = [
    // VF3
    {
        id: "1",
        title: "VinFast VF 3",
        img: "/vf3.png",
        price: 1000000,
        couch: 4,
        km: 400,
        seats: 4,
        trunk: 300
    },
    {
        id: "3",
        title: "VinFast VF 3",
        img: "/vf3b.png",
        price: 1100000,
        couch: 4,
        km: 420,
        seats: 4,
        trunk: 320
    },
    {
        id: "4",
        title: "VinFast VF 3",
        img: "/vf3c.png",
        price: 1200000,
        couch: 4,
        km: 450,
        seats: 4,
        trunk: 310
    },
    {
        id: "8",
        title: "VinFast VF 3",
        img: "/vf3d.png",
        price: 1150000,
        couch: 4,
        km: 440,
        seats: 4,
        trunk: 305
    },

    // VF5
    {
        id: "9",
        title: "VinFast VF 5",
        img: "/vf5.png",
        price: 1300000,
        couch: 4,
        km: 460,
        seats: 4,
        trunk: 350
    },
    {
        id: "10",
        title: "VinFast VF 5",
        img: "/vf5b.png",
        price: 1350000,
        couch: 4,
        km: 470,
        seats: 4,
        trunk: 360
    },

    // VF6
    {
        id: "11",
        title: "VinFast VF 6",
        img: "/vf6.png",
        price: 1800000,
        couch: 4,
        km: 500,
        seats: 5,
        trunk: 400
    },
    {
        id: "12",
        title: "VinFast VF 6",
        img: "/vf6b.png",
        price: 1850000,
        couch: 4,
        km: 510,
        seats: 5,
        trunk: 420
    },

    // VF7
    {
        id: "13",
        title: "VinFast VF 7",
        img: "/vf7.png",
        price: 2000000,
        couch: 4,
        km: 520,
        seats: 5,
        trunk: 430
    },
    {
        id: "14",
        title: "VinFast VF 7",
        img: "/vf7b.png",
        price: 2100000,
        couch: 4,
        km: 530,
        seats: 5,
        trunk: 440
    },

    // VF8
    {
        id: "2",
        title: "VinFast VF 8",
        img: "/vf8.png",
        price: 2000000,
        couch: 4,
        km: 500,
        seats: 5,
        trunk: 400
    },
    {
        id: "5",
        title: "VinFast VF 8",
        img: "/vf8b.png",
        price: 2100000,
        couch: 4,
        km: 520,
        seats: 5,
        trunk: 420
    },
    {
        id: "7",
        title: "VinFast VF 8",
        img: "/vf8c.png",
        price: 2200000,
        couch: 4,
        km: 530,
        seats: 5,
        trunk: 430
    },

    // VF9
    {
        id: "6",
        title: "VinFast VF 9",
        img: "/vf9.png",
        price: 3000000,
        couch: 4,
        km: 600,
        seats: 7,
        trunk: 500
    }
]
