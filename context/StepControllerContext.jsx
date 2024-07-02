'use client'
import { createContext, useState } from "react";

export const StepControllerContext = createContext()

const StepControllerProvider = ({children}) => {
    const [currentStep , setCurrentStep ] = useState(0)


    const values = {
       currentStep,
       setCurrentStep,
    }

    return (
        <StepControllerContext.Provider value={values}>
            {children}
        </StepControllerContext.Provider>
    )
}

export default StepControllerProvider