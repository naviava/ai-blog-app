// Components.
import Subscribe from "./Subscribe";
import SocialLinks from "./SocialLinks";

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
      <div className="my-8 bg-wh-900">Advert image.</div>
      <h4 className="bg-wh-900 px-5 py-3 text-center text-xs font-bold text-wh-50">
        About the blog
      </h4>
      <div className="my-8 bg-wh-900">Profile image.</div>
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
