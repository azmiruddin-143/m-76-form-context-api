import { useEffect, useRef } from "react";


const Refform = () => {

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    useEffect(() => {
        nameRef.current.focus()
    }, [])


    const handleclick = e => {
        e.preventDefault()
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }



    return (
        <div className=" my-5 mx-5">
            <form onSubmit={handleclick} action="">

                <input ref={nameRef} className="border mb-2 border-black py-2 px-6 rounded-md" type="text" name="name" placeholder="type your name" /> <br />
                <input ref={emailRef} className="border mb-2 border-black py-2 px-6 rounded-md" type="email" name="email" placeholder="type your email" /> <br />
                <input ref={passwordRef} className="border border-black py-2 px-6 rounded-md" type="password" name="password" required placeholder="type your passwor" /> <br />
                <input className="my-4 bg-[#19ae92] py-2 px-6 rounded-md" type="submit" value="submit" />

            </form>
        </div>
    );
};

export default Refform;