import About from "@/components/About";
import ConnectButton from "@/components/ConnectButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Terms from "@/components/Terms";
import Image from "next/image";

export default function Home() {
  return (
    // <div className="relative h-screen w-screen">

    //   {/* <div className="relative z-10 text-white text-3xl font-bold flex justify-center items-center h-full">
    //     Your Content Here
    //   </div> */}
    // </div>
    <main className="relative h-screen w-screen bg-[#05171a]">
      <Header />
      <Hero />
      <About />
      <Team />
      <Roadmap />
      <Terms />
      <Footer />
    </main>
  );
}
