"use client"
import React, { useContext } from "react";
import CabinentArrangement from "@/components/home-page/CabinetArrangement";
import CabinetAssemblyProcess from "@/components/home-page/CabinetAssemblyProcess";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { StepControllerContext } from "../context/StepControllerContext";
import ShelfTesting from "@/components/home-page/ShelfTesting";
import InstallationModal from "@/components/modals/InstallationModal";
import CameraTesting from "@/components/modals/CameraTesting";
import MainContextAndMotion from "@/components/home-page/MainContextAndMotion";
import TestingResults from "@/components/home-page/TestingResults";


export default function Home() {
  const { currentStep, isOpen, isCameraTesting } = useContext(StepControllerContext)

  const component = {
    1: <CabinentArrangement />,
    2: <ShelfTesting />,
    3: <TestingResults />,
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



