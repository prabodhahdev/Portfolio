import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaMedium,
} from "react-icons/fa";
import type { IconType } from "react-icons";

export type SocialLink = {
  icon: IconType;
  href: string;
  label: string;
};

// Update with your real profile URLs
export const socials: SocialLink[] = [
  {
    icon: FaGithub,
    href: "https://github.com/prabodhahdev",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/prabodhahdev/",
    label: "LinkedIn",
  },
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/prabodhahdev/",
    label: "Facebook",
  },
  {
    icon: FaMedium,
    href: "https://medium.com/@prabodhahdev",
    label: "Medium",
  },
];
