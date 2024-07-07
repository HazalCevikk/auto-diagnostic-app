"use client"
import React, { useContext } from "react";
import Image from "next/image";
import { StepControllerContext } from "../../context/StepControllerContext";

export default function CabinentArrangement() {
    const { setCurrentStep, selectedCabinet, setSelectedCabinet, } = useContext(StepControllerContext);

    const context = [
        { id: 0, img: "/3-shelves.png", text: "1 Door - 3 shelves", zoom: "/3-shelves.png" },
        { id: 1, img: "/4-shelves.png", text: "1 Door - 4 shelves", zoom: "/4-shelves.png" },
        { id: 2, img: "/4-shelves-2-door.png", text: "2 Door - 4 shelves", zoom: "/4-shelves-2-door.png" },
        { id: 3, img: "/6-shelves.png", text: "2 Door - 6 shelves", zoom: "/zoom-6-shelves.png" },
        { id: 4, img: "/7-shelves.png", text: "2 Door - 7 shelves", zoom: "/7-shelves.png" },
        { id: 5, img: "/7-shelves-2-door.png", text: "2 Door - 7 shelves", zoom: "/7-shelves-2-door.png" },
        { id: 6, img: "/8-shelves.png", text: "2 Door - 8 shelves", zoom: "/8-shelves.png" }
    ];

    const handleClickCard = (item) => {
        setSelectedCabinet({ id: item.id, image: item.zoom });
        setTimeout(() => {
            setCurrentStep(1);
        }, 700);
    };

    return (
        <div className="mx-56 my-6 flex flex-col space-y-6 justify-center items-center">
            <p className="font-bold text-primary text-2xl">Cabinent Arrangement</p>
            <div className="flex flex-wrap gap-[20px] items-center">
                {context.map((item) => (
                    <div key={item.id} onClick={() => handleClickCard(item)} className="relative group">
                        <Image src={item.img} alt={`cabinet-${item.id}`} width={275} height={275} />
                        <p className="font-bold text-lg text-center text-primary">{item.text}</p>
                        {selectedCabinet.id === item.id && (
                            <div className="absolute top-0 w-[275px] h-[274px] rounded-2xl flex items-center justify-center bg-[#E6E6E8] bg-opacity-50 transition-opacity duration-1000 animate-slide-down">
                                <Image src="/correct.png" alt="check" width={50} height={50} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
