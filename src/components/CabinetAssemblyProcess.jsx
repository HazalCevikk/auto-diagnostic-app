"use client"
import Image from "next/image"
import { useContext } from "react";
import { StepControllerContext } from "../../context/StepControllerContext";

export default function CabinetAssemblyProcess() {
    const { currentStep } = useContext(StepControllerContext);

    const assemblyProcess = [
        {
            step: 0,
            number: 1,
            text: "Cabinet arrangement"
        },
        {
            step: 1,
            number: 2,
            text: "Assembly & test shelves"
        },
        {
            step: 2,
            number: 3,
            text: "Summary"
        }
    ];

    const progressPercentage = ((currentStep + 1) / 20) * 100;

    return (
        <div className="relative bg-white rounded-2xl px-4 py-6 mt-8 mx-56 overflow-hidden">
            <div className="flex items-center space-x-4">
                <p className="font-bold text-[#2D313D] text-2xl">Cabinet assembly</p>
                {
                    assemblyProcess.map((item) => (
                        <div
                            key={item.step}
                            className={`flex space-x-2 py-2 px-3 justify-center items-center border-[1px] border-gray-100 rounded-full shadow-md 
                                ${item.step < currentStep ? 'bg-white' :
                                    item.step === currentStep ? 'bg-[#30303c]' :
                                        'bg-white'}`}
                        >
                            {item.step < currentStep ? (
                                <Image src="/check-icon.png" alt="iconCheck" width={26} height={26} />
                            ) : (
                                <p className={`flex items-center justify-center w-7 h-7 rounded-full font-semibold 
                                    ${item.step === currentStep ? 'bg-white text-[#30303c]' : 'bg-[#ACABB1] text-white'}`}>
                                    {item.number}
                                </p>
                            )}
                            <p className={`text-sm font-light 
                                ${item.step === currentStep ? 'text-white' : 'text-[#ACABB1]'}`}>
                                {item.text}
                            </p>
                        </div>
                    ))
                }
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white rounded-2xl">
                <div className="h-full bg-[#30303c]" style={{ width: `${progressPercentage}%` }}></div>
            </div>
        </div>
    );
}