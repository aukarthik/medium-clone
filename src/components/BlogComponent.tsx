import { Blog } from "../hooks"
import Appbar from "./Appbar"
import Avatar from "./Avatar"

export default function Blogcomponent({blog}:{blog:Blog}){
    return (
       <div>
        <Appbar/>
        <div className="flex justify-center">

        
<div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
            <div className="col-span-8">
                <div className="text-4xl font-extrabold">
                    {blog.title}
                </div>
                <div className="text-slate-500 pt-2">
                    Posted on 21st Nov 2024
                </div>
                <div className="">
                    {blog.content}
                </div>
            </div>
            <div className="col-span-4">
               <div className="pl-1 pb-3 text-slate-500">
               Author
               </div>
               <div className="flex w-full">
               <div className="pr-4 flex flex-col justify-center">
               <Avatar size={8} name={blog.author.name||"Anonymous"}/>
               </div>
                <div>
                <div className="text-2xl font-bold">
               {blog.author.name||"Anonymous"}
               </div>
               <div className="pt-2 text-slate-500">
                This is about author
            </div>
                </div>
            </div>
            
               </div>
            
        </div>
       </div>
       </div>
    )
}