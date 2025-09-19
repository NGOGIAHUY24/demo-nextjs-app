import { Card, cn } from "@heroui/react"
import React from "react"

export default function ChevronIcon(props) {
    return (
        <>
            <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="1em"
                role="presentation"
                viewBox="0 0 24 24"
                width="1em"
                {...props}
            >
                <path
                    d="M15.5 19l-7-7 7-7"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                />
            </svg>
        </>
    )
}

//  "use client";
// import { useEffect, useState } from "react";
// import { usePagination } from "@heroui/react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function App() {
//   const images = [
//     "https://picsum.photos/id/1011/800/400",
//     "https://picsum.photos/id/1015/800/400",
//     "https://picsum.photos/id/1016/800/400",
//     "https://picsum.photos/id/1020/800/400",
//     "https://picsum.photos/id/1025/800/400",
//     "https://picsum.photos/id/1035/800/400",
//   ];

//   const { activePage, setPage, onNext } = usePagination({
//     total: images.length,
//     showControls: false,
//   });

//   // state lưu ảnh hiện tại để animate
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto slide
//   useEffect(() => {
//     const timer = setInterval(() => {
//       if (currentIndex === images.length - 1) {
//         setCurrentIndex(0);
//         setPage(1);
//       } else {
//         setCurrentIndex((prev) => prev + 1);
//         onNext();
//       }
//     }, 3000);
//     return () => clearInterval(timer);
//   }, [currentIndex, images.length, onNext, setPage]);

//   return (
//     <div className="flex flex-col gap-4 items-center">
//       <div className="w-[800px] h-[400px] relative overflow-hidden rounded-xl shadow-lg">
//         <AnimatePresence>
//           <motion.img
//             key={images[currentIndex]}
//             src={images[currentIndex]}
//             alt={`slide-${currentIndex}`}
//             className="absolute w-full h-full object-cover"
//             initial={{ x: "100%", scale: 0.8, opacity: 0.5 }}
//             animate={{ x: "0%", scale: 1, opacity: 1 }}
//             exit={{ x: "-100%", scale: 0.8, opacity: 0.5 }}
//             transition={{ duration: 0.8, ease: "easeInOut" }}
//           />
//         </AnimatePresence>
//       </div>

//       {/* Indicator */}
//       <div className="flex gap-2">
//         {images.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => {
//               setCurrentIndex(idx);
//               setPage(idx + 1);
//             }}
//             className={`w-3 h-3 rounded-full ${
//               idx === currentIndex ? "bg-blue-500" : "bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
