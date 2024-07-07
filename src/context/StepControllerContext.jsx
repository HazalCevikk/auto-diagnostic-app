'use client'
import { createContext, useState } from "react";

export const StepControllerContext = createContext()

const StepControllerProvider = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [isCameraTesting, setIsCameraTesting] = useState(false)
    const [selectedCabinet, setSelectedCabinet] = useState({ id: null, image: null })


    const values = {
        currentStep,
        setCurrentStep,
        isOpen,
        setIsOpen,
        isCameraTesting,
        setIsCameraTesting,
        selectedCabinet,
        setSelectedCabinet,
    }

    return (
        <StepControllerContext.Provider value={values}>
            {children}
        </StepControllerContext.Provider>
    )
}

export default StepControllerProvider