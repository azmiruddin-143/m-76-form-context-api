// import Forms from "./Components/Forms"
// import Refform from "./Components/Refform"
// import Statefulform from "./Components/Statefulform"
// import Hookform from "./Components/Hookform"

// import { useState } from "react"
import { createContext } from "react"
import Dada from "./PropHandle/Dada"


// import Reuse from "./Components/Reuse"

export const Assetcontext = createContext('')

function App() {


   // const [add, setadd] = useState(100000)

   // const addmoney = () => {
   //    const amountshow = add + 100000
   //    setadd(amountshow)

   // }




   // const handleclickbtn = data => {
   //    console.log("sign up",data);
   //  }
   // const handleclickbtn2 = data => {
   //    console.log("Update profile", data);
   //  }

   return (
      <div>
         {/* <Forms></Forms> */}
         {/* <Statefulform></Statefulform> */}
         {/* <Refform></Refform> */}
         {/* <Hookform></Hookform> */}
         {/* <Reuse form2dataText = {"Sign Up"} handleclick = {handleclickbtn}></Reuse>
         <Reuse form2dataText = {"Profile Update"} handleclick = {handleclickbtn2}></Reuse> */}


         <Assetcontext.Provider value="hi">
            <Dada></Dada>
         </Assetcontext.Provider>



      </div>
   )
}

export default App
