import ChooseSection from "@/components/ChooseSection";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Hero></Hero>
    <ChooseSection></ChooseSection>
    <HowItWorks></HowItWorks>
   </div>
  );
}
