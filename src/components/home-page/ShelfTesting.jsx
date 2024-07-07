import Image from "next/image"
import { useContext } from "react"
import { StepControllerContext } from "../../context/StepControllerContext"
import PreviousButton from "../button/PreviousButton"

export default function ShelfTesting() {
    const { setCurrentStep, selectedCabinet } = useContext(StepControllerContext)

    return (
        <div className="mx-56 mt-4">
            <p className="font-bold text-primary mb-4 text-xl">Shelf installation and testing</p>
            <div className="mt-4 flex justify-between ">
                <div className="bg-white shadow-sm rounded-xl flex flex-col p-6 w-1/2 h-[300px] relative">
                    <p className="text-primary font-semibold mb-4">Set the weight for shelf tests</p>
                    <p className="text-primary m-1">Precise weight (in grams)</p>
                    <input
                        type="text"
                        name="weight"
                        className="m-0 block w-2/5 rounded-full border-0 p-3 text-secondary ring-1 ring-inset ring-gray-300 placeholder:text-secondary focus:ring-[1px] focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" placeholder="500"
                    />
                    <p className="text-xs font-light text-secondary mt-1">The default weight is 500gr. You can change to <br />
                        other weights.</p>
                    <button className="bg-primary p-3 text-white text-sm w-1/2 absolute right-6 bottom-6 rounded-full" onClick={() => setCurrentStep(2)}>CONTINUE</button>
                </div>

                <div className="mr-36">
                    <Image src={selectedCabinet.image} alt="detailCabinet" width={350} height={650} />
                </div>
            </div>
            <PreviousButton stepValue={0} setCurrentStep={setCurrentStep} />
        </div>
    )
}