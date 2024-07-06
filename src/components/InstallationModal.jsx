import { useContext, useState, useEffect } from "react"
import { StepControllerContext } from "../../context/StepControllerContext"
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Image from "next/image"
import PrimaryButton from "./PrimaryButton"


export default function InstallationModal() {
  const { isOpen, setIsOpen, setIsCameraTesting } = useContext(StepControllerContext)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  const close = () => {
    setIsOpen(false);
    setIsCameraTesting(true);
  }


  return (
    <>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-full overflow-y-auto">
          <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
          <div className="flex flex-col space-y-2 min-h-full items-center justify-center p-4 z-20">
            <DialogPanel
              transition
              className=" flex flex-col space-y-5 justify-center items-center w-full max-w-md rounded-xl bg-white p-6 duration-300 ease-out z-20"
            >
              <DialogTitle as="h3" className="text-center font-bold text-black">
                Shelf 10 - installation
              </DialogTitle>
              <p>Install the shelf in the following position</p>
              <Image src={"/blue-screen.png"} alt="blueScreen" width={400} height={300} />
              <div className="border-[1px] border-[#ACABB1] rounded-xl p-6 flex flex-col items-center justify-center space-y-2 w-full mb-4">
                {loading ? <>
                  <p className="font-bold">Waiting for shelf being detected</p>
                  <Image src={"/spinning-circle.gif"} alt="Loading..." width={50} height={50} />
                </> : <>
                  <Image src={"/circle-check.png"} alt="Loading..." width={50} height={50} />
                  <p>Shelf detected</p>
                  <p>Top Cameras & bottom shelf type</p>
                  <Image src={"/barcode.png"} alt="barcode" width={150} height={100} />
                </>
                }

              </div>
              <PrimaryButton
                className={loading ? "bg-[#ACABB1] text-white" : "bg-[#30303c] text-white"}
                text={"CONFIRM INSTALLATION"}
                onClick={close}
                disabled={loading} />

            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}