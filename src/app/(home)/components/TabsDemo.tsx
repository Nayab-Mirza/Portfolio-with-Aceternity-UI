"use client";

import { Tabs } from "@/app/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";


export function TabsDemo() {
  const tabs = [
    {
      title: "Dahboard App",
      value: "dashboard",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Dashboard Tab</p>
          <ImageContainer src="/images/best-projects/dashboard.png" href="" />
        </div>
      ),
    },
    {
      title: "Weather App",
      value: "weather",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Weather tab</p>
          <ImageContainer src="/images/best-projects/weather.png" href="" />
        </div>
      ),
    },
    {
      title: "Todo App",
      value: "todo",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Todo tab</p>
          <ImageContainer src="/images/best-projects/todo.png" href="" />
        </div>
      ),
    },
    {
      title: "Devfinder App",
      value: "devfinder",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Devfinder tab</p>
          <ImageContainer src="/images/best-projects/devfinder.png" href="" />
        </div>
      ),
    },
    {
      title: "Movies App",
      value: "movies",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Movies tab</p>
          <ImageContainer src="/images/best-projects/movies.png" href="" />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40 gap-10">
        <h2 className="font-bold text-4xl text-white">My Projects</h2>
      <Tabs tabs={tabs} />
    </div>
  );
}

function ImageContainer({ src, href }: { src: string; href: string }) {
    return (
      <Link href={href ?? ""} target="_blank">
        <Image
          src={src}
          alt="dummy image"
          width={1000}
          height={1000}
          className="object-cover object-left-top h-[80%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto "
        />
      </Link>
    );
  }
