import React from 'react'
import ForestIcon from '@mui/icons-material/Forest';


const Header = () => {
  return (
    <div className=' ' style={{backgroundColor:"rgba(255,0,0, 0.5)"}}>
      <div className='max-w-[1200px] mx-auto flex justify-between items-center h-[4rem] text-white px-4' >
        <div className='text-white'>
            <ForestIcon sx={{fontSize:"2rem"}}/>
        </div>
        <div>
          <button className=''>
          Click Here
          </button>
            
        </div>
      </div>
    </div>
  )
}

export default Header
