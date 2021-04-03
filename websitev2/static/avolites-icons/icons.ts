export type IconsId =
  | "play-from-cursor";

export type IconsKey =
  | "PlayFromCursor";

export enum Icons {
  PlayFromCursor = "play-from-cursor",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.PlayFromCursor]: "61697",
};
