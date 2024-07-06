import Image from "next/image"

export default function PreviousButton({ setCurrentStep, stepValue }) {
    return (
        <div className="flex cursor-pointer border-[1px] border-[#30303c] p-1 w-44 items-center justify-center space-x-2 rounded-full" onClick={() => setCurrentStep(stepValue)}>
            <Image src={"/left-chevron.png"} alt="previous page" width={16} height={16}></Image>
            <p className="text-lg">Previous Page</p>
        </div>
    )
}