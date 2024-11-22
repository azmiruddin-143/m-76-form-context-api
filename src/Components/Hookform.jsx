import hookfunc from "./Hooks";

const Hookform = () => {

    const [name, handleChange] = hookfunc('')

    const handleclick = e => {
        console.log("form data", name );
        e.preventDefault()
    }
    
   

    return (
        <div className=" my-5 mx-5">
            <form onSubmit={handleclick} action="">

                <input value={name} onChange={handleChange} className="border mb-2 border-black py-2 px-6 rounded-md" type="text" name="name" placeholder="type your name" /> <br />
                <input className="border mb-2 border-black py-2 px-6 rounded-md" type="email" name="email" placeholder="type your email" /> <br />
                <input className="border border-black py-2 px-6 rounded-md" type="password" name="password" placeholder="type your passwor" /> <br />
                <input className="my-4 bg-[#19ae92] py-2 px-6 rounded-md" type="submit" value="submit" />

            </form>
        </div>
    );
};

export default Hookform;