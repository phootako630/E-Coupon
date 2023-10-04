import Image from "next/image";
import { assets } from "@/app/utils/asset-utils";
import { type Framework, frameworks } from "@/app/utils/framework-utils";
import { cn } from "@/app/utils/tailwind-utils";

export const FrameworkRotation = ({ currentFramework } : {
    currentFramework: Framework;
}) => {

    return <div className="w-[80px] h-[80px] mx-2 -mt-2 align-middle inline-flex relative">
        {
            frameworks.map((framework, index) => (
                <Image
                    key={framework}
                    src={assets[framework]}
                    alt={framework}
                    width={80}
                    height={80}
                    className={cn("w-full h-full object-contain object-center absolute top-0 left-0 transition-all duration-300",
                        currentFramework === framework
                        ? "opacity-100 transform-none"
                        : index > framework.indexOf(currentFramework as Framework)
                        ? "opacity-0  -translate-y-2"
                        : "opacity-0 translate-y-2"
                    )}
           />
            ))


        }
    </div>
}