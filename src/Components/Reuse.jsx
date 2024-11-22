import PropTypes from 'prop-types';

const Reuse = ({ handleclick, form2dataText }) => {

    const handleclickrepet = e => {
        e.preventDefault()
        const data = {
           name: e.target.name.value,
           email: e.target.email.value,
           password: e.target.password.value
        }
        handleclick(data)
        
    }
    
    return (
        <div className=" my-5 mx-5">
            <h1>{form2dataText}</h1>
            <form onSubmit={handleclickrepet} action="">
                <input className="border mb-2 border-black py-2 px-6 rounded-md" type="text" name="name" placeholder="type your name" /> <br />
                <input className="border mb-2 border-black py-2 px-6 rounded-md" type="email" name="email" placeholder="type your email" /> <br />
                <input className="border border-black py-2 px-6 rounded-md" type="password" name="password" required placeholder="type your passwor" /> <br />
                <input className="my-4 bg-[#19ae92] py-2 px-6 rounded-md" type="submit" value="submit" />

            </form>
        </div>
    );
};


Reuse.propTypes = {
    handleclick: PropTypes.object.isRequired,
    form2dataText:PropTypes.func
}
export default Reuse;