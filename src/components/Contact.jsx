

export function Contact() {
    return (
        <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white flex justify-center items-center p-4">
          <div className="flex flex-col p-4 justify-center max-w-[600px] w-full'">
            <div className="pb-8 animate-pulse">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Contact
              </p>
              <p className="py-4">Submit the form below to get in touch with me</p>
            </div>
    
            <div className=" flex justify-center items-center">
              <form
                action="https://getform.io/f/pbnvlnpb"
                method="POST"
                className="flex flex-col max-w-[600px] w-full"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows="10"
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                ></textarea>
    
                <button className="text-white bg-gradient-to-r from-cyan-500 to-teal-500 cursor-pointer px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                  Let`s talk
                </button>
              </form>
            </div>
          </div>
        </div>
      );
}

export default Contact
