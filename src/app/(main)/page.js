import AvailableCars from "@/components/AvailableCars";
import ChooseSection from "@/components/ChooseSection";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";


export default function Home() {
  return (
   <div>
    <Hero></Hero>
    <AvailableCars></AvailableCars>
    <ChooseSection></ChooseSection>
    <HowItWorks></HowItWorks>
   </div>
  );
}
