"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export default function Home() {
    return (
        <div className="h-screen py-20 w-full">
            <h1 className="text-center text-4xl">Gallery</h1>
            <LayoutGrid cards={cards} />
        </div>
    );
}

const Skeleton = ({ title, desc }: any) => {
    return (
        <div>
            <p className="font-bold text-4xl text-white">{title}</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                {desc}
            </p>
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: (
            <Skeleton
                title="Kayak Ballet"
                desc="Speedily trimming the waves, Kayaks skim over the water with grace. With superior speed and agility, They glide through the murky rivers ablaze. It’s the unflagging grit of the parade of kayak ballet. "
            />
        ),
        className: "md:col-span-2",
        thumbnail: "/IMG_7238.jpg",
    },
    {
        id: 2,
        content: (
            <Skeleton
                title="Shell Games"
                desc="Majestic sculls and shells moving in synch, Crossing yards within a blink. There’s no earthly way of knowing, Which direction they are gong, Or which way the rivers flowing, For the rowers keep on rowing, And they’re certainly not showing, Any signs that they are slowing! Weightless in water, swifter than wind, When we row, we row to win!"
            />
        ),
        className: "col-span-1",
        thumbnail: "/IMG_7250.jpg",
    },
    {
        id: 3,
        content: "",
        className: "col-span-1",
        thumbnail: "/IMG_9772.jpg",
    },
    {
        id: 4,
        content: (
            <Skeleton
                title="Punt Formation"
                desc="Savour the tiny pearls of lights gliding softly in the night. Behold fresh faces in punt tranquil, as they limn messages of good will, Of god and men, Of dreams and emotions. Read the messages of light in the moonlight night."
            />
        ),
        className: "md:col-span-2",
        thumbnail: "/IMG_9677.jpg",
    },
];

