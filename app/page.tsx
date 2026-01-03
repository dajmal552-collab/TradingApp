import Image from "next/image";
import Hero from "./componants/navbar/Hero";
import CustomerService from "./componants/navbar/ContactSection";
import ThreeSteps from "./componants/navbar/ThreeStages";

export default function Home() {
  return (
    <div>
      <Hero />
      <CustomerService/>
      <ThreeSteps/>
      </div>
  );
}
