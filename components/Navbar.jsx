export function Navbar() {
  return (
    <>
      <nav className="sticky top-0 left-0 right-0 flex justify-evenly items-center border border-gray-300 py-2 bg-white z-100">
          <input 
            type="text" 
            id="text"
            className="border border-gray-300 rounded-2xl px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-50" 
          />
          <div>
            <ul className="flex space-x-20">
              <li className="hover:cursor-pointer">Home</li>
              <li className="hover:cursor-pointer">Contact Me</li>
            </ul>
          </div>
      </nav>
    </>
  );
};