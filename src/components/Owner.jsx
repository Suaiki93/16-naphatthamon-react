// import { Link } from "react-router-dom";
import Picture from "../assets/pic.jpg";
import Navbar from "./Navbar";

const Owner = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-gray-200 min-h-screen">
        <h1 className="text-3xl font-bold mb-4 pt-4">
          Naphatthamon - Group D - 16
        </h1>
        <img src={Picture} alt="" className="size-1/5 my-6 " />
        <p className="text-center px-12 py-6">
          I am Naphatthamon, currently diving into the world of coding at
          Generation is Junior Software Developer Bootcamp. When I am not typing
          away, you will likely find me on a yoga mat, finding my zen. I am a
          big foodie and travel enthusiast, always up for trying new dishes and
          exploring new places. Lets connect and share some coding tips or
          travel stories sometime!
        </p>
      </div>
    </>
  );
};

export default Owner;
