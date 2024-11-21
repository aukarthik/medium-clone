import { SignupInput } from "@aukarthik/common-medium";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {BACKEND_URL} from "../../config"
export default function Auth({type}:{type:"signup"|"signin"}){
    const navigate=useNavigate()
    const [postInputs,setPostInputs]=useState<SignupInput>({
        name:"",
        email:"",
        password:""
    })
    async function sendRequest(){
        try{
            const response=await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"?"signup":"signin"}`,{...postInputs})
            const jwt=response.data.token
            console.log(jwt)
            localStorage.removeItem("token")
            localStorage.setItem("token",jwt)
            navigate("/blogs")
        }catch(e){
            console.log(e)
        }
    }
    return (
        <div className="h-screen flex justify-center flex-col ">
            <div  className="flex justify-center">
                <div className="">
                <div>
                    <div className="text-3xl font-extrabold">
                        {type==="signup"?"Create an account":"Login to your account"}
                    </div>
                    <div className="text-slate-400 pt-2">
                        {type==="signup"?"Already have an account?":"No account? Create an account"}
                        <Link 
                        to={type==="signup"?"/signin":"/signup"}
                        className="underline pl-2"
                        >{type==="signup"?"Login":"Signup"}</Link>
                    </div>
                </div>
                <div>
                {type==="signup"?<InputBox label="First Name" placeholder="John Doe" onChange={(e)=>{
                    setPostInputs(c=>({
                        ...c,
                        name:e.target.value
                    }))
                }} />:null}
                <InputBox label="Email" placeholder="johndoe@gmail.com" onChange={(e)=>{
                    setPostInputs(c=>({
                        ...c,
                        email:e.target.value
                    }))
                }} />
                <InputBox label="Password" type="password" placeholder="123456" onChange={(e)=>{
                    setPostInputs(c=>({
                        ...c,
                        password:e.target.value
                    }))
                }} />
                <button onClick={sendRequest} type="button" 
                className="w-full mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ">
                    {type==="signup"?"Create an account":"Login"}
                </button>

                </div>
                </div>
            </div>
        </div>
    )
}

interface InputBoxType{
    label:string,
    placeholder:string,
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void,
    type?:string
}

function InputBox({label,placeholder,type,onChange}:InputBoxType){
    return(
        <div>
            <label  className="block mb-2 pt-4 text-sm font-bold text-gray-900 dark:text-white">{label}</label>
            <input 
            type={type||"text"}
            onChange={onChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder={placeholder} 
            required />
        </div>
    )
}