import { Link } from "react-router-dom"
import Avatar from "./Avatar"

interface BlogCardProps{
    authorName:string,
    title:string,
    content:string
    id:string
    publishedDate:string
}

export default function BlogCard({
    authorName,
    title,
    content,
    id,
    publishedDate
}:BlogCardProps){
    return <Link to={`/blog/${id}`}>
        <div className="p-4 border-b border-slate-200 pb-4  cursor-pointer">
        <div className="flex ">
         <div className="flex justify-center flex-col">
         <Avatar name={authorName}/>  
            </div> 
         <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
            {authorName}
            </div>
            <div className="flex justify-center flex-col pl-2">
                <Circle/>
            </div>
         <div className="pl-2 font-normal text-sm flex justify-center flex-col">
         {publishedDate}
         </div>
        </div>
        <div className="text-xl  font-semibold ">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0,100)+"..."}
        </div>
        <div className="text-slate-500 text-sm font-thin">
            {`${Math.ceil(content.length/100)} minute(s) read`}
        </div>
        </div>
        </Link>
}

function Circle(){
    return (
        <div className="h-1 w-1 rounded-full border-1 bg-slate-500">

        </div>
    )
}

