export const navigationHrefs: string[] = [
  "/",
  "#skills",
  "#journey",
  "#projects",
  "#contact",
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
