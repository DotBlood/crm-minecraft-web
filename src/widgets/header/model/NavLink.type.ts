import type { AvatarProps } from "@nuxt/ui";

export interface INavLink {
  text: string;
  link?: string;
  icon?: string;
  avatar?: AvatarProps;
  variant?:
    | "link"
    | "solid"
    | "outline"
    | "soft"
    | "subtle"
    | "ghost"
    | undefined;
}
