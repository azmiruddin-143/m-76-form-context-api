

import { useContext } from "react";
import { Assetcontext } from "../App";
const Myself = () => {

    const show = useContext(Assetcontext)
  
    return (
        <div>
            <h1 className="font-bold text-2xl">Ata Holam Ami Azmir Uddin amout :<span> {show} </span> </h1>
            <button  className="bg-[#189d6e] font-bold py-2 px-5 rounded-md my-6">add money</button>
        </div>
    );
};

export default Myself;