"use client"
import React, { useContext } from "react";
import CabinentArrangement from "@/components/CabinetArrangement";
import CabinetAssemblyProcess from "@/components/CabinetAssemblyProcess";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { StepControllerContext } from "../../context/StepControllerContext";
import ShelfTesting from "@/components/ShelfTesting";
import InstallationModal from "@/components/InstallationModal";
import CameraTesting from "@/components/CameraTesting";
import MainContextAndMotion from "@/components/MainContextAndMotion";


export default function Home() {
  const { currentStep, isOpen, isCameraTesting } = useContext(StepControllerContext)

  const component = {
    1: <CabinentArrangement />,
    2: <ShelfTesting />,
  }

  return (
    <>
      <Header user={"Richard Clarkson"}></Header>
      <CabinetAssemblyProcess />
      <MainContextAndMotion component={component} currentStep={currentStep} />
      {isOpen && <InstallationModal />}
      {isCameraTesting && <CameraTesting />}
      <Footer />
    </>
  );
}



