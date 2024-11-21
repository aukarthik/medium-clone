import { Link } from "react-router-dom";
import Avatar from "./Avatar";

export default function Appbar(){
    return (
        <div className="border-b py-4 flex justify-between px-10">
        <Link to="/blogs">
        <div className="flex justify-center flex-col">
            Medium
        </div>
        </Link>
        <div>
            <Link to={'/publish'}>
        <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">New Post</button>
        </Link>
            <Avatar name="Karthik" size={6}/>
        </div>
        </div>
    )
}