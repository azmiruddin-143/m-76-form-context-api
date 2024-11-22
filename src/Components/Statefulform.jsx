import { useState } from "react";


const Statefulform = () => {


    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const [error, seterror] = useState('')
    

    
    const handleclick = e => {
        e.preventDefault();
       
        if (password.length < 6) {
            seterror("Password boro dite hobe")
            return
        }
        else{
            seterror("")
        }

        console.log(name, email, password);
    }

    const hadlename = e => {
        // console.log(e.target.value);
        setname(e.target.value);
    }
    const hadleemail = e => {
        // console.log(e.target.value);
        setemail(e.target.value);
    }
    const hadlepassword = e => {
        
        setpassword(e.target.value);
        
    }

   
   

    return (
        <div className=" my-5 mx-5">
            <form onSubmit={handleclick} action="">

                <input onChange={hadlename} className="border mb-2 border-black py-2 px-6 rounded-md" type="text" name="name" placeholder="type your name" /> <br />
                <input onChange={hadleemail} className="border mb-2 border-black py-2 px-6 rounded-md" type="email" name="email" placeholder="type your email" /> <br />
                <input onChange={hadlepassword} className="border border-black py-2 px-6 rounded-md" type="password" name="password" required placeholder="type your passwor" /> <br />
                <input className="my-4 bg-[#19ae92] py-2 px-6 rounded-md" type="submit" value="submit" />
                {
                    error && <h1>{error}</h1>
                }

            </form>
        </div>
    );
};

export default Statefulform;