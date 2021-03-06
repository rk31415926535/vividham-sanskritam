// ! Made by rishit khandelwal (github.com/rishit-khandelwal)
import Head from "next/head";

import Hero from "@/components/Hero";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (!localStorage.getItem("doneStates")) {
      localStorage.setItem("doneStates", "[]");
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Vividham Sanskritam</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
      </main>
    </div>
  );
}
