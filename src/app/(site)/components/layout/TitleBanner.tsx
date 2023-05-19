// React and Next.
import Image from "next/image";

// Lib and utils.
import images from "@/utils/images";

interface TitleBannerProps {}

const TitleBanner: React.FC<TitleBannerProps> = ({}) => {
  return (
    <div className="mx-10 mb-4 mt-5 flex justify-between gap-8">
      <div className="basis-2/3 md:mt-3">
        <h1 className="text-3xl font-bold md:text-5xl">BLOG OF THE FUTURE</h1>
        <p className="mt-3 text-sm">AI and blogs go hand-in-hand.</p>
      </div>
      <div className="relative h-32 w-auto basis-full bg-wh-500">
        <Image
          fill
          alt="Main website banner"
          src={images.ad1}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default TitleBanner;
