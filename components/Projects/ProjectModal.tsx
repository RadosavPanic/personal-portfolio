"use client";

import useProjectStore from "@/store/project.store";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import cn from "clsx";

const ProjectModal = () => {
  const { title, name, description, type, setModalOpen, clearProjectInfo } =
    useProjectStore();
  const texts = description.texts;
  const images = description.images;
  const isMobileModal = type === "mobile";

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60"
        onClick={() => {
          setModalOpen(false);
        }}
      />

      <div
        className={`relative w-full ${cn(
          "",
          isMobileModal ? "max-w-2xl" : "max-w-4xl",
        )} max-h-[85vh] overflow-y-auto bg-gray-900 border border-gray-700 rounded-xl p-6 z-10`}
      >
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {title}
            </h3>
            {name ? (
              <span className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/90">
                {name}
              </span>
            ) : null}
          </div>

          <div className="w-full sm:w-fit flex justify-end">
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setModalOpen(false);
                }}
                className="text-white/80 hover:text-white bg-transparent px-3 py-1 rounded-md border border-white/10"
              >
                Close
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-6">
          <div className="prose prose-invert max-w-none text-gray-300">
            {texts &&
              texts.map((text, i) => (
                <p key={i} className="mb-2">
                  {text}
                </p>
              ))}
          </div>

          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {images &&
                images.length > 0 &&
                images.map((img, i) => (
                  <CarouselItem
                    key={i}
                    className="w-full flex items-center justify-center"
                  >
                    <div
                      className={`relative w-full ${cn(
                        "",
                        isMobileModal
                          ? "h-80 md:h-96 lg:h-[36rem]"
                          : "h-64 md:h-80 lg:h-96",
                      )} bg-black/20 rounded-md overflow-hidden`}
                    >
                      <Image
                        src={img}
                        alt={`slide-${i}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 1200px"
                        className="object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-20" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-20" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
