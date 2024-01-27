"use client";

import Image from "next/image";
import React from "react";
import Parallax from "./Parallax";
import { useLenis } from "@studio-freight/react-lenis";

const ImageList = () => {
  const lenis = useLenis((scroll) => {
    //console.log(scroll);
  });
  return (
    <>
      <h1 className="mb-4 text-3xl font-extrabold text-gray-400 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Smooth Scroll</span> Light Touch.</h1>

      <button
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 
        font-medium rounded-full px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 
        dark:focus:ring-gray-700 dark:border-gray-700 text-2xl"
        onClick={() => lenis.scrollTo("#last-img", { lerp: 0.1 })}
      >
        to bottom
      </button>      

      <Parallax speed={1} className={"self-start"}>
        <Image
          src={"https://picsum.photos/600/400?random=1"}
          alt="smooth scroll"
          width={400}
          height={200}
          id="second-img"
        />
      </Parallax>

      <Parallax speed={-1} className={"self-end overflow-hidden"}>
        <Image
          src={"https://picsum.photos/600/400?random=2"}
          alt="smooth scroll"
          width={400}
          height={200}
        />
      </Parallax>

      <Parallax speed={-2} className={"self-start"}>
        <Image
          src={"https://picsum.photos/600/400?random=3"}
          alt="smooth scroll"
          width={400}
          height={200}
        />
      </Parallax>

      <Parallax speed={-2} className={"self-end overflow-hidden"}>
        <Image
          src={"https://picsum.photos/600/400?random=4"}
          alt="smooth scroll"
          width={400}
          height={200}
        />
      </Parallax>

      <Parallax speed={-1} className={"self-start overflow-auto"}>
        <Image
          src={"https://picsum.photos/600/400?random=5"}
          alt="smooth scroll"
          width={400}
          height={200}
        />
      </Parallax>

      <Parallax speed={-2} className={"self-end overflow-hidden"}>
        <Image
          src={"https://picsum.photos/600/400?random=6"}
          alt="smooth scroll"
          width={400}
          height={200}
        />
      </Parallax>

      <Parallax speed={-1} className={"self-end overflow-hidden"}>
        <Image
          src={"https://picsum.photos/600/400?random=7"}
          alt="smooth scroll"
          width={400}
          height={200}
        />
      </Parallax>

      <Image
        src={"https://picsum.photos/600/400?random=8"}
        alt="smooth scroll"
        width={400}
        height={200}
      />

      <Parallax speed={-2} className={"self-start"}>
        <Image
          src={"https://picsum.photos/600/400?random=9"}
          alt="smooth scroll"
          width={400}
          height={200}
        />
      </Parallax>

      <Parallax speed={-2} className={"self-end"}>
        <Image
          src={"https://picsum.photos/600/400?random=10"}
          alt="smooth scroll"
          width={400}
          height={200}
          id="last-img"
        />
      </Parallax>

      <button
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none 
        focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-2xl px-5 py-2.5
        me-2 m-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={() => lenis.scrollTo("#second-img", { lerp: 0.01 })}
      >
        slow scroll to top
      </button>

    </>
  );
};

export default ImageList;
