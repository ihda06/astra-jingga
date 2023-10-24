import Image from "next/image";
import AboutContent from "./AboutContent";
import { galery } from "@/commons/constants/gallery";

export default function About({}) {
  return (
    <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row py-14 lg:px-24 px-12">
      <div className="basis-2/5 flex justify-center w-full">
        <div className="">
          <Image
            width={400}
            height={400}
            alt="image"
            loading="lazy"
            className="rounded-lg"
            src={galery[0].img}
          ></Image>
        </div>
      </div>
      <div className="basis-3/5 max-w-[800px] flex flex-col gap-5">
        <AboutContent></AboutContent>
      </div>
    </div>
  );
}
