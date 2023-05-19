// External packages.
import clsx from "clsx";
import { ImFacebook2 } from "react-icons/im";
import { FaDiscord } from "react-icons/fa";
import { GrTwitter, GrInstagram, GrGoogle } from "react-icons/gr";

interface SocialLinksProps {
  isDark?: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ isDark }) => {
  return (
    <div className="flex items-center justify-between gap-7">
      {/* Twitter */}
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
        className={clsx(
          "transition",
          isDark ? "text-wh-900" : "text-wh-10 hover:text-wh-10/50"
        )}
      >
        <GrTwitter size={20} />
      </a>
      {/* Facebook */}
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
        className={clsx(
          "transition",
          isDark ? "text-wh-900" : "text-wh-10 hover:text-wh-10/50"
        )}
      >
        <ImFacebook2
          size={20}
          className={clsx(
            "transition",
            isDark ? "text-wh-900" : "text-wh-10 hover:text-wh-10/50"
          )}
        />
      </a>
      {/* Instagram */}
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
        className={clsx(
          "transition",
          isDark ? "text-wh-900" : "text-wh-10 hover:text-wh-10/50"
        )}
      >
        <GrInstagram size={20} />
      </a>
      {/* Google */}
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noreferrer"
        className={clsx(
          isDark ? "text-wh-900" : "text-wh-10 hover:text-wh-10/50"
        )}
      >
        <GrGoogle size={20} />
      </a>
      {/* Discord */}
      <a
        href="https://www.discord.com"
        target="_blank"
        rel="noreferrer"
        className={clsx(
          "transition",
          isDark ? "text-wh-900" : "text-wh-10 hover:text-wh-10/50"
        )}
      >
        <FaDiscord size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;
