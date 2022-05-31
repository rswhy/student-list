import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route, Link } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import image from "./logo-student.png"

function App() {
  return (
    <div className="App">
      <div className="flex">
        <div className="flex w-2/5 md:w-1/4 h-screen bg-rose-100 shadow mr-20">
          <div className="mx-auto py-10">
            <div className="flex flex-col justify-center items-center align-middle text-center">
            <img src={image} className="w-10"></img>
            <h1 className="text-2xl font-bold mb-10 cursor-pointer text-[#EC5252] duration-150">
              My Students
            </h1>
            </div>
            <ul>
              <li className="flex space-x-2 mt-56 cursor-pointer hover:text-[#EC5252] duration-150">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <Link to="/" className="font-semibold">Home</Link>
              </li>
              <button className="w-full mt-10 bg-[#EC5252] rounded-full py-1.5 text-white">
              <Link to="create" >Add Student</Link> 
              </button >
            </ul>
          </div>
        </div>
        <main className=" min-h-screen w-full">
          <br></br>
          <br></br>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="create" element={<CreatePage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
