import { Montserrat, Poppins, Outfit,Red_Rose } from "next/font/google";
import localFont from "next/font/local";
const Verdana = localFont({ src: "./fonts/verdana.ttf" });
const SuperMolot = localFont({ src: "./fonts/TTSupermolotNeue-Medium.ttf" });

export const inter = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "600",
});
export const red_Rose = Red_Rose({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
});

export { Verdana, SuperMolot};
