import Image from "next/image";
import Link from "next/link";
import { HiLocationMarker, HiStar } from "react-icons/hi";

import { mombasasafaris } from "./constants";

export default function MombasaSafaris() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-6 py-8 sm:py-16">
        <h2 className="text-4xl">Mombasa Tours</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
          {/* card */}
          {mombasasafaris.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="cursor-pointer bg-slate-50 shadow-sm rounded-md w-full flex flex-col gap-4">
              {/* image */}
              <div className="w-full relative h-[200px]">
                <Image
                  src={item.imgUrl}
                  alt={item.alt}
                  fill
                  className="rounded-t-md object-cover hover:grayscale transition-all filter duration-300 ease-out"
                />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2 px-4 pb-6">
                <h3 className=" text-xl text-green">{item.title}</h3>

                {/* Location and price */}
                <div className="flex flex-row justify-between items-center text-sm">
                  <p className="text-black/70">
                    <span className="inline-block mr-1">
                      <HiLocationMarker size={14} />
                    </span>
                    {item.location}
                  </p>
                </div>
                <p style={{ width: '100%', height: 5, background: '#000' }} ></p>
                {/* Stars */}
                <div>
                  <div className="p-1 bottom-3  rounded-sm flex flex-row font-bold text-yellow">
                    <HiStar size={14} />
                    <HiStar size={14} />
                    <HiStar size={14} />
                    <HiStar size={14} />
                    <HiStar size={14} />
                  </div>
                  <p className="text-black/70">584 reviews</p>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
