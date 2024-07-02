"use client"
import React, { useContext } from "react";
import CabinentArrangement from "@/components/CabinetArrangement";
import CabinetAssemblyProcess from "@/components/CabinetAssemblyProcess";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { StepControllerContext } from "../../context/StepControllerContext";
import ShelfTesting from "@/components/ShelfTesting";
import { motion, AnimatePresence } from "framer-motion";
import InstallationModal from "@/components/InstallationModal";
import CameraTesting from "@/components/CameraTesting";


export default function Home() {
  const { currentStep, isOpen, isCameraTesting } = useContext(StepControllerContext)


  const component = {
    1: <CabinentArrangement />,
    2: <ShelfTesting />,
  }

  const variants = {
    initial: direction => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: direction => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: { duration: 0.5 }
    })
  };

  console.log("deneme2", isCameraTesting)

  return (
    <>
      <Header user={"Richard Clarkson"}></Header>
      <CabinetAssemblyProcess />
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            custom={currentStep}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {Object.values(component)[currentStep]}
          </motion.div>
        </AnimatePresence>
      </div>
      {isOpen && <InstallationModal />}
      {isCameraTesting && <CameraTesting />}
      <Footer />
    </>
  );
}



