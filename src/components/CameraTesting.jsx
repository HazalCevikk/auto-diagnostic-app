import { useContext } from "react"
import { StepControllerContext } from "../../context/StepControllerContext"
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Image from "next/image"
import PrimaryButton from "./PrimaryButton"


export default function CameraTesting() {
    const { isCameraTesting, setIsCameraTesting } = useContext(StepControllerContext)


    const close = () => {
        setIsCameraTesting(false)
    }


    return (
        <>
            <Dialog open={isCameraTesting} as="div" className="relative z-10 focus:outline-none" onClose={close}>
                <div className="fixed inset-0 z-10 w-full overflow-y-auto">
                    <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
                    <div className="flex flex-col space-y-2 min-h-full items-center justify-center p-4 z-20">
                        <DialogPanel
                            transition
                            className=" flex flex-col space-y-5 justify-center items-center w-full max-w-md rounded-xl bg-white p-6 duration-300 ease-out z-20"
                        >
                            <DialogTitle as="h3" className="text-center font-bold text-black">
                                Shelf 10 - camera test
                            </DialogTitle>
                            <p>Is the captured image OK?</p>
                            <Image src={"/image.png"} alt="view" width={400} height={300} />
                            <div className="w-full flex space-x-2 ">
                                <PrimaryButton
                                    className="border-[1px] border-red-600 text-red-600 w-full"
                                    onClick={close}
                                    text={"REPORT"}
                                />
                                <PrimaryButton
                                    className="bg-[#30303c] text-white w-full"
                                    onClick={close}
                                    text={"CONFIRM"}
                                />
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}