// Components.
import Subscribe from "./Subscribe";
import SocialLinks from "./SocialLinks";

// Lib and utils.
import images from "@/utils/images";
import Image from "next/image";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({}) => {
  return (
    <section>
      <h4 className="bg-wh-900 px-5 py-3 text-center text-xs font-bold text-wh-50">
        Subscribe and Follow
      </h4>
      <div className="mx-5 my-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <div className="relative my-8">
        <Image
          alt="Advert"
          src={images.ad2}
          placeholder="blur"
          className=" my-8 hidden w-full object-cover md:block"
        />
      </div>
      <h4 className="bg-wh-900 px-5 py-3 text-center text-xs font-bold text-wh-50">
        About the blog
      </h4>
      <div className="my-3 flex justify-center">
        <Image
          alt="Advert"
          src={images.aboutProfileImage}
          className="h-[250px] w-[500px] object-cover"
        />
      </div>
      <h4 className="px-5 py-3 text-center font-bold text-wh-500">
        Navin Avadhani
      </h4>
      <p className="text-center text-sm text-wh-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </section>
  );
};

export default Sidebar;
