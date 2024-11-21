import { useState } from "react"
import Appbar from "../components/Appbar"
import axios from "axios"
import { BACKEND_URL } from "../../config"

export default function Publish(){
    const [title,SetTitle]=useState("")
    const [content,setContent]=useState("")
    return (
        <div>
            <Appbar/>
            <div className="flex justify-center pt-8">
            <div className="max-w-screen-lg w-full">
            <form>
    <textarea id="message" 
    onChange={(e)=>SetTitle(e.target.value)}
className="block p-2.5 m-1 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
placeholder="Title" 
required>

</textarea>
   <div className="w-full mb-4  rounded-lg  dark:bg-gray-700 dark:border-gray-600">
       <div 
       className="m-1 p-1 bg-white rounded-t-lg dark:bg-gray-800">
           <textarea 
           id="comment" 
           onChange={(e)=>setContent(e.target.value)}
           rows={8} 
           className="w-full px-2 text-sm text-gray-900 bg-gray-50 border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" 
           placeholder="Write your story..." ></textarea>
       </div>
       <div className="flex items-center justify-between px-3 py-2 ">
           <button
           onClick={async (e)=>{
            e.preventDefault()
            const token=localStorage.getItem('token')
            if(!token) {
                console.log("No token found")
                return
            }
           try{
            const blog=await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                data:{title,content},
                headers:{
                 Authorization:`Bearer ${localStorage.getItem("token")}`
             }
             })
             console.log(blog)
           }catch(err){
            console.error(err)
           }
        }}
            type="submit" 
           className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
               Publish Post
           </button>
           
       </div>
   </div>
</form>
</div>
        </div>
        </div>
    )
}

function TextEditor(){
return (
    <>
    

    </>
)
}