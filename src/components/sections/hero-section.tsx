import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="px-4 py-20 lg:py-32">
      <div className="space-y-8">
        {/* Profile Image with decorative lines */}
        <div className="relative w-32 h-32 lg:w-40 lg:h-40">
          <div className="absolute inset-0 rounded-full border-4 border-black"></div>
          {/* Decorative sparkle lines */}
          <div className="absolute -top-2 -left-2 w-8 h-1 bg-black rotate-45"></div>
          <div className="absolute -top-4 left-8 w-6 h-1 bg-black rotate-12"></div>
          <div className="absolute top-4 -left-6 w-6 h-1 bg-black -rotate-12"></div>
          <div className="absolute -bottom-2 -right-2 w-8 h-1 bg-black -rotate-45"></div>
          <div className="absolute -bottom-4 right-8 w-6 h-1 bg-black -rotate-12"></div>
          <div className="absolute bottom-4 -right-6 w-6 h-1 bg-black rotate-12"></div>
          
          {/* Placeholder for profile image */}
          <div className="w-full h-full rounded-full bg-gray-300 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-gray-600">
              J
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-4xl lg:text-5xl font-normal">
            Hi, I'm{" "}
            <span className="font-handwriting italic font-bold text-5xl lg:text-6xl">
              Joe
            </span>
            !
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold">
            Product Designer
          </h2>
        </div>

        {/* Description with highlights */}
        <div className="space-y-4 text-lg lg:text-xl max-w-3xl">
          <p>
            I'm a{" "}
            <mark className="bg-yellow-300 px-2 py-1 font-semibold">
              visual and interaction designer
            </mark>{" "}
            with{" "}
            <mark className="bg-yellow-300 px-2 py-1 font-semibold">
              3 years of experience
            </mark>{" "}
            designing for education, research, and social impact initiatives
          </p>
          <p className="text-base lg:text-lg">
            I like turning meetings, sticky notes, and scribbles into something people can
            actually use. Feel free to take a look around!
          </p>
        </div>
      </div>
    </section>
  );
}
