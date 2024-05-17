import { useState } from 'react';

export function Contact() {

  const [inputValueName, setInputValueName] = useState('');
  const [inputValueMessage, setInputValueMessage] = useState('');
  const [email, setEmail] = useState('');

  const [error, setError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMail, setErrorMail] = useState('');
  
  const handleChangeInputName = (event) => {
    const value = event.target.value;
    setInputValueName(value);
    if (value.length < 3) {
      setError('Input name must be at least 3 characters long');
    } else {
      setError('');
    }
  };

  const handleChangeInputMessage = (event) => {
    const value = event.target.value;
    setInputValueMessage(value);
    if (value.length < 10) {
      setErrorMessage('Input message must be at least 10 characters long');
    } else {
      setErrorMessage('');
    }
  };

  const handleValidateEmail = (event) => {
    const value = event.target.value;
    console.log('value', value);
    setEmail(value);

    //console.log(email);
    if(validateEmail(value)) {
      setErrorMail('Please enter a valid mail');
    } else {
      setErrorMail('');
    }
  }

  const validateEmail = (email) => {
    //console.log(email);
    const pattern = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
    return pattern.test(email);
  };


  const isFormValid = inputValueName.length > 3 && inputValueMessage.length > 10;

    return (
        <div className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white flex justify-center items-center p-4">
          <div name="contact" className="flex flex-col p-4 justify-center max-w-[600px] w-full'">
            <div className="py-4">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500 animate-pulse">Contact</p>
              <p className="py-4">Submit the form below to get in touch with me</p>
            </div>
    
            <div className=" flex justify-center items-center">
              <form
                action="https://getform.io/f/pbnvlnpb"
                method="POST"
                className="flex flex-col max-w-[600px] w-full">
              
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={inputValueName} 
                    onChange={handleChangeInputName}
                    className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                  />  
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                <div>

                </div>
                <input
                  type="email"
                  value={email}
                  placeholder="Enter your email address"
                  onChange={handleValidateEmail} 
                  className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
                {errorMail && <p style={{ color: 'red' }}>{errorMail}</p>}

                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows="10"
                  value={inputValueMessage} 
                  onChange={handleChangeInputMessage}
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none">
                  </textarea>
                  {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    
                <button disabled={!isFormValid}
                        className="text-white bg-gradient-to-r from-cyan-500 to-teal-500 cursor-pointer px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                  Let`s talk
                </button>
              </form>
            </div>
          </div>
        </div>
      );
}

export default Contact
