import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import img1 from "../../public/bgimages/bg1.png";
import { SuperMolot, Verdana, red_Rose } from "../styles/fonts";


const cluePage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [userCredential, setUserCredential]: any = useState();
  const [validateLogin, setValidateLogin] = useState(true);
  const [hint,setHint]=useState(false);

  const router = useRouter();
  // Fetch userData from local storage
  useEffect(() => {
    const data: any = localStorage.getItem("UserCredential");
    setUserCredential(JSON.parse(data));
  }, []);

  const handelOnChange = (e: any) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = () => {
    if (user.email === "Deepti") {
      router.push("/riddel");
    } else {
      setValidateLogin(false);
    }
  };

  const handelback = () => {
    router.back();
  };

  const handelhint=()=>{
    setHint(true);
  }
  return (
    <div style={{ backgroundColor: "#a895fd", height: "100vh" }}>
      <div
        className="max-w-[1200px] mx-auto relative top-[10%]"
        onClick={handelback}
      >
        <ArrowBackIcon className="cursor-pointer" sx={{ fontSize: "2rem" }} />
      </div>
      <div
        className="mx-auto flex justify-center items-center h-full grid md:grid-cols-2  grid-cols-1"
        style={{ margin: "0 auto", maxWidth: "1200px" }}
      >
        <div className="flex flex-col justify-center items-center p-4">
          <div className="flex md:flex-row flex-col gap-2 justify-center items-center">
            <div>
              <Image src={img1} alt={"img1"} width={200} height={300} />
            </div>
            <div className="font-bold ">
              <p className={`${SuperMolot.className} text-4xl`}>Hi Deepu </p>
              <p>Your Santa Here!</p>
            </div>
          </div>
          <div className="flex flex-col pt-4">
            <p className="font-bold text-2xl">Let's Start Game</p>
            <div className="gap-2">
              <p>
                -- You Have To Enter First Name of Your colleagues to know
                Riddle.
              </p>
              <p>-- You have to enter only one Member Name at a time.</p>
              <p>
                <span className="font-semibold">NOTE:</span> Enter First Name Only
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center rounded-lg border-2 border-solid  w-[400px] gap-4 py-12 px-5  m-6"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
        >
          <div className="flex flex-col w-full flex-auto max-w-lg gap-2 ">
            <div className="text-center">
              <LockOpenIcon />
            </div>
            <div>
              {!validateLogin ? (
                <span className="text-black">
                  Oh Oh!! Wrong Guess!
                </span>
              ) : (
                ""
              )}
            </div>
            <div>
              {hint ? (
                <div className="text-black flex flex-col">
                  <p>-1st Letter Should Be capital</p>
                 <p> -Name consist 1-7 Char</p>
                 <p>-It Contains 'e' Alphabet</p> 
                </div>
              ) : (
                ""
              )}
            </div>
            <label htmlFor="Type Here">Type Here</label>
            <input
              className="p-2 rounded-lg"
              type="email"
              id="email"
              name="email"
              onChange={(e) => handelOnChange(e)}
              placeholder="Enter Name"
              style={{ caretColor: "#a895fd" }}
            />
          </div>

          <div className="w-full text-center">
            <button
              className="w-full max-w-md rounded-lg border-2 border-solid p-3"
              type="submit"
              onClick={handleLogin}
            >
              Click Me!
            </button>
            <div className="mt-4">
              Do you Want
              <button className="rounded-md border-[#000000] border-2 py-0.5 px-2 text-white ml-2" onClick={handelhint}>
                Hint 🤔!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cluePage;
