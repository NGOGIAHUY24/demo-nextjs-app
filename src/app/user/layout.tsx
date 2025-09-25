// import Link from "next/link"
// import React from "react"
// export default function UserLayout({ children }: { children: React.ReactNode }) {
//     return (
//         <div className="flex min-h-screen">
//             {/* Sidebar */}
//             <aside className="w-64 bg-gray-100 p-4">
//                 <nav className="space-y-2">
//                     <Link href="/user/profile" className="block p-2 rounded hover:bg-gray-200">
//                         Hồ sơ của tôi
//                     </Link>
//                     <Link href="/user/my-orders" className="block p-2 rounded hover:bg-gray-200">
//                         Đơn hàng của tôi
//                     </Link>
//                 </nav>
//             </aside>

//             {/* Nội dung chính */}
//             <main className="flex-1 p-6">{children}</main>
//         </div>
//     )
// }
import AccountSidebar from "@/components/modules/UserItem/Sidebar"
import React from "react"

export default function UserLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-[1200] flex">
            <AccountSidebar />
            <div className="flex-1 p-6">{children}</div>
        </div>
    )
}
