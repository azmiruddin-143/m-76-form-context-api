

const Forms = () => {
        
    const handleclick = e =>{
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.password.value);
        console.log("form sunmit");
    }

    return (
        <div className=" my-5 mx-5">
             <form onSubmit={handleclick} action="">
                
                 <input className="border mb-2 border-black py-2 px-6 rounded-md" type="text" name="name" placeholder="type your name"  /> <br />
                 <input className="border mb-2 border-black py-2 px-6 rounded-md" type="email" name="email" placeholder="type your email" /> <br />
                 <input className="border border-black py-2 px-6 rounded-md" type="password" name="password" placeholder="type your passwor" /> <br />
                 <input className="my-4 bg-[#19ae92] py-2 px-6 rounded-md" type="submit" value="submit" />

             </form>
        </div>
    );
};

export default Forms;