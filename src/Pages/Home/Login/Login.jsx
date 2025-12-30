import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const Login = () => {

    const [isPasswordShow, setIsPasswordShow] = useState(false);

  return (
    <section className='section py-10'>
      <div className='container'>
        <div className='card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10'>
            <h3 className="text-center text-[18px] font-medium text-gray-900 mb-4">
               Login to your account
            </h3>


          <form className='w-full'>
            <div className='form-group w-full mb-5'>
              <TextField
                type="email"
                id="email"
                label="Email Id *"
                variant="outlined"
                className="w-full"
                 sx={{
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "oklch(63.7% 0.237 25.331)"
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "oklch(63.7% 0.237 25.331)"
      }
    }}
              />
            </div>

            <div className='form-group w-full mb-5 relative'>
              <TextField
                type={isPasswordShow===false ? 'password' : 'text'}
                id="password"
                label="Password *"
                variant="outlined"
                className="w-full"
                 sx={{
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "oklch(63.7% 0.237 25.331)"
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "oklch(63.7% 0.237 25.331)"
      }
    }}
              />

              <Button className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px]
                  !min-w-[35px] !rounded-full !text-black" onClick={()=>{
                  setIsPasswordShow(!isPasswordShow)
               }}>
                {
                   isPasswordShow===false ? <IoMdEye className="text-[20px] opacity-75"/> :
                   <IoMdEyeOff className="text-[20px] opacity-75"/>
                }
              </Button>  
            </div>

            <a className="link cursor-pointer text-[14px] font-[600]">Forgot Password?</a>

                <div className="flex items-center w-full mt-3 mb-3">
                 <Button
                  fullWidth
                     sx={{
                     backgroundColor: "#ff5252",   // default red
                     color: "#fff",
                     fontWeight: 600,
                     height: "40px",
                     borderRadius: "4px",
                     textTransform: "none",
                     transition: "background-color 0.3s ease",
                       "&:hover": {
                     backgroundColor: "#000",   // hover black
                    },
                }}
                 >
                LOGIN
                  </Button>

                </div>

                

                {/* Register */}
                  <p className="text-center text-[13px] text-gray-700">
                     Not Registered?{" "}
                    <Link to="/register" className="font-semibold text-red-500 ">
                       Sign Up
                    </Link>
                  </p>

                {/* Divider text */}
                  <p className="text-center text-[13px] text-gray-600 mt-3 mb-3" >
                     Or continue with social account
                  </p>

                {/* Google login */}
                    <Button
                      fullWidth
                        sx={{
                         backgroundColor: "#f1f1f1",
                         color: "#000",
                         fontSize: "13px",
                         fontWeight: 500,
                         textTransform: "uppercase",
                         height: "40px",
                         display: "flex",
                         gap: "8px",
              
                      }}
                    >
                     <FcGoogle size={18} />
                        Login with Google
                    </Button>
               
   

          </form>
        </div>
      </div>
    </section>
  )
  
}

export default Login;