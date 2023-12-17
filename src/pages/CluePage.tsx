import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Image from 'next/image';
import img1 from '../../public/bgimages/bg1.png';
const cluePage = () => {

  const [user, setUser] = useState({
    email: '', 
    password: '', 
  });
  const [userCredential,setUserCredential]:any=useState()
  const [validateLogin, setValidateLogin]=useState(true)

const router = useRouter()
// Fetch userData from local storage
useEffect(()=>{
  const data:any=localStorage.getItem("UserCredential")
 setUserCredential(JSON.parse(data))
 
},[])

const handelOnChange=(e:any)=>{
setUser((prev) => ({
      ...prev, 
      [e.target.name]:e.target.value, 
    }));
}

const handleLogin=()=>{
  if(user.email === "Gagan"  ){
   router.push('/riddel')
  }else{
    setValidateLogin(false)
  }
}

const handelback=()=>{
  router.back()
}
  return (
    <div style={{ backgroundColor: "#a895fd", height: "100vh" }}>
      <div className='max-w-[1200px] mx-auto relative top-[10%]' onClick={handelback}><ArrowBackIcon/></div>
    <div className="mx-auto flex justify-center items-center h-full grid md:grid-cols-2  grid-cols-1" style={{ margin: "0 auto", maxWidth: "1200px" }}>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex  justify-center items-center'>
        <div>
        <Image src={img1} alt={'img1'} width={200} height={300}/>
        </div>
        <div className='font-bold '>
          <p className='text-4xl'>Hi Deepu </p>
          <p>Your Santa Here!</p>
        </div>
        </div>
        <div className='flex flex-col'>
          <p className='font-bold text-2xl'>Let's Start Game</p>
<div className='gap-2'>
  <p>-- you Have To Enter Names of Your colluges to know Riddel.</p>
  <p>-- you have to enter only one Member name at a time.</p>   
  <p><span className='font-semibold'>NOTE:</span> Enter Full Name</p>
</div>

        </div>
       

      </div>
      <div className="flex flex-col justify-center items-center rounded-lg border-2 border-solid  w-[400px] gap-4 py-12 px-5  m-6" style={{backgroundColor:"rgba(255, 255, 255, 0.1)"}}>
        <div className="flex flex-col w-full flex-auto max-w-lg gap-2">
            <div className='text-center'>
              <LockOpenIcon/>
            </div>
            <div>
             {!validateLogin ? <span className='text-red-500'>Enter Valid Email or Password</span>:''}
            </div>
          <label htmlFor="Type Here">Type Here</label>
          <input
            className="p-2 rounded-lg"
            type="email"
            id="email"
            name='email'
            onChange={(e)=>handelOnChange(e)}
            placeholder="Enter Name"
            style={{caretColor:"#a895fd"}}
          />
        </div>
        
        <div className='w-full text-center'>
          <button
            className="w-full max-w-md rounded-lg border-2 border-solid p-3"
            type="submit"
            onClick={handleLogin}
          >
           Click Me!
          </button>
          <div className='mt-4'>Do you Want
            <a className='pl-2' href="/signup" style={{color:"#fff"}}>  Hint!  </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default cluePage;
