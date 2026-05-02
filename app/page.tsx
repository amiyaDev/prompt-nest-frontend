"use client";

import { useEffect } from "react";
import AOS from "aos";
import LandingPage from "@/components/landing/LandingPage";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 850, once: true, easing: "ease-out-cubic", offset: 120 });
  }, []);

  return <LandingPage />;
}
