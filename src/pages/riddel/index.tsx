import React from "react";
import Image from "next/image";
import secretimag1 from "../../../public/bgimages/secret1.webp";
import secretimag2 from "../../../public/bgimages/secret2.png";
import style from "./style.module.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";

import { SuperMolot, Verdana, red_Rose } from "../../styles/fonts";

const Riddel = () => {
  const router = useRouter();
  const handelback = () => {
    router.back();
  };
  return (
    <div className="md:h-[100vh] h-full" style={{ backgroundColor: "#a895fd" }}>
      <div
        className="max-w-[1200px] mx-auto relative top-[10%]"
        onClick={handelback}
      >
        <ArrowBackIcon className="cursor-pointer" sx={{ fontSize: "2rem" }} />
      </div>
      <div className="mx-auto max-w-[1200px] p-4 pt-24">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="flex justify-center items-center md:pt-24 pt-12 md:pl-2 pl-12">
            <Image
              src={secretimag1}
              alt={"secretimag1"}
              height={1000}
              width={1000}
            />
          </div>
          <div className="mt-4">
            <div className={`${Verdana.className} font-bold text-xl p-4`}>
              Hi Detective 🕵‍♂️ Here Is Your Riddle 
            </div>
            <div className="p-4">
              <p>
                --You Have To Fill First Four Letters Of The Name Which You Entered In Name Text Field.
              </p>
            </div>
            <div className={`font-semibold text-2xl ${red_Rose.className} p-4`}>
              <input
                    className={`${style.inputStyle}`}
                    type="text"
                    maxLength={1}
                  />
                  <input
                    className={`${style.inputStyle}`}
                    type="text"
                    maxLength={1}
                  />
                  <input
                    className={`${style.inputStyle}`}
                    type="text"
                    maxLength={1}
                  />
                  <input
                    className={`${style.inputStyle}`}
                    type="text"
                    maxLength={1}
                  />ly I sense, our roles aligned, With my strict principal, as
              colleagues .
            </div>
            <div className={` grid grid-cols-2`}>
              <div className="flex flex-col justify-start items-start gap-2 p-5 pt-12 ">
              <p className={`${red_Rose.className} font-bold text-2xl`}>Guess Me ?!! 😎</p>
              <p className="font-medium ">Christmas Loading...</p>
              <p>Advance Happy Christmas</p>
              </div>
              <Image src={secretimag2} alt={"secretimag2"} height={200} width={200}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Riddel;
