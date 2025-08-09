"use client"

import Navbar from "@/Components/AppComponents/Navbar";
import Hero from "@/Components/AppComponents/Hero";
import Cards from "@/Components/imported/Cards";
import CardsSection from "@/Components/AppComponents/CardsSection";
import Profile from "@/Components/AppComponents/Profile";
import Footer from "@/Components/AppComponents/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <CardsSection />
      <Profile/>
      <Footer/>
    </div>
  );
}
