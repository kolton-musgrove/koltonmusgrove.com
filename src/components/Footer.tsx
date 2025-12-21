import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SocialLink } from "../components/SocialLink";

export const Footer = () => {
  return (
    <footer className="mt-5 flex w-full flex-row justify-center gap-4 self-start">
      <SocialLink to="https://github.com/kolton-musgrove">
        <FaGithub className="h-full w-full" />
      </SocialLink>

      <SocialLink to="https://linkedin.com/in/koltonmusgrove">
        <FaLinkedin className="h-full w-full" />
      </SocialLink>

      <SocialLink to="https://leetcode.com/u/koltongmusgrove/">
        <SiLeetcode className="h-full w-full" />
      </SocialLink>
    </footer>
  );
};
