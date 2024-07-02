
import CabinentArrangement from "@/components/CabinetArrangement";
import CabinetAssemblyProcess from "@/components/CabinetAssemblyProcess";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header user={"Richard Clarkson"}></Header>
      <CabinetAssemblyProcess/>
      <CabinentArrangement/>
      <Footer/>
    </>
  );
}
