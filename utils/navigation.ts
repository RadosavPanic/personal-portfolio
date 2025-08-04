export const navigationHrefs: string[] = [
  "/",
  "#about-me",
  "#skills",
  "#projects",
];

export const transformLinkName = (navHref: string) => {
  let isHome: boolean = navHref === "/";

  if (isHome) return "Home";

  let linkName = navHref
    .replace("#", "")
    .replace("-", " ")
    .replace(navHref[1], navHref[1].toUpperCase());

  return linkName;
};
