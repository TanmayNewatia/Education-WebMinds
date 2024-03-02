import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

export default function SocialLoginButton({data}) {
    return (
        <div className="flex w-full justify-center gap-2 my-4">
            <div className="h-[50px] rounded-full bg-white flex justify-between items-center p-4 gap-2 w-[50px] hover:w-auto [&>span]:hidden [&>span]:hover:flex">
                <FcGoogle className="text-2xl" />
                <span className="text-black !text-[12px]">{data} with Google</span>
            </div>
            <div className="h-[50px] rounded-full bg-white flex justify-between items-center p-4 gap-2 w-[50px] hover:w-auto [&>span]:hidden [&>span]:hover:flex">
                <FaApple className="text-black text-2xl" />
                <span className="text-black !text-[12px]">{data} with Apple</span>
            </div>
            <div className="h-[50px] rounded-full bg-white flex justify-between items-center p-4 gap-2 w-[50px] hover:w-auto [&>span]:hidden [&>span]:hover:flex">
                <FaFacebookF className="text-2xl text-[#3D4DA6]" />
                <span className="text-black !text-[12px]">{data} with Facebook</span>
            </div>

        </div>
    )
}