"use client"

import Navbar from "@/Components/AppsComponents/Navbar";
import Hero from "@/Components/AppsComponents/Hero";
import Cards from "@/Components/imported/Cards";
import CardsSection from "@/Components/AppsComponents/CardsSection";
import Profile from "@/Components/AppsComponents/Profile";
import Footer from "@/Components/AppsComponents/Footer";

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
