// import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/app/components/ui/bento-grid";

import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";


export function BentoGridDemo() {
    return (
        <div className="flex flex-col gap-10 max-w-4xl mx-auto mb-10">
            <h2 className="font-bold text-4xl text-white">All Projects</h2>
            <BentoGrid>
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </div>
    );
}

function ItemImage({ src, href }: { src: string; href: string }) {
    return (
        <Link
            target="_blank"
            href={href ?? ""}
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden  "
        >
            <Image
                className="h-full w-full object-cover"
                width={500}
                height={500}
                src={src ?? ""}
                alt="project-img"
            />
        </Link>
    );
}

const items = [
    {
        title: "Dashboard App",
        description: "Explore the birth of groundbreaking ideas and inventions.",
        header: (
            <ItemImage
                src="/images/best-projects/dashboard.png"
                href=""
            />
        ),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />
    },
    {
        title: "Todo App",
        description: "Dive into the transformative power of technology.",
        header: (
            <ItemImage
                src="/images/best-projects/todo.png"
                href=""
            />
        ),
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />
    },
    {
        title: "Movies App",
        description: "Discover the beauty of thoughtful and functional design.",
        header: (
            <ItemImage
                src="/images/best-projects/movies.png"
                href=""
            />
        ),
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />
    },
    {
        title: "Weather App",
        description:
            "Understand the impact of effective communication in our lives.",
        header: (
            <ItemImage
                src="/images/best-projects/weather.png"
                href=""
            />
        ),
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />
    },
    {
        title: "The Pursuit of Knowledge",
        description: "Join the quest for understanding and enlightenment.",
        header: (
            <ItemImage
                src="/images/best-projects/devfinder.png"
                href=""
            />
        ),
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />
    },
    {
        title: "Dev Finder App",
        description: "Experience the thrill of bringing ideas to life.",
        header: (
            <ItemImage
                src="/images/best-projects/image-gallary.png"
                href=""
            />
        ),
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />
    },
    {
        title: "The Spirit of Adventure",
        description: "Embark on exciting journeys and thrilling discoveries.",
        header: (
            <ItemImage
                src="/images/best-projects/country-info.png"
                href=""
            />
        ),
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />
    }
];
