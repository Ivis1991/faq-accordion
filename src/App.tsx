// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FaqElement } from "./FAQElement/FaqElement";

function App() {
  return (
    <>
      <div className="flex h-screen items-center bg-Light-pink z-0 sm:hidden">
        <div className="flex flex-col w-full sm:hidden">
          <img
            src="/assets/images/background-pattern-mobile.svg"
            className="absolute inset-0 top-0 z-10 w-full"
          ></img>
        </div>
     
        <div className="flex absolute bg-white justify-between items-center z-50 shadow-xl rounded-lg mx-6 sm:hidden">
          <FaqElement />
       
        </div>
        
      </div>

      <div className="hidden sm:flex sm:h-screen sm:items-center sm:justify-center sm:bg-Light-pink sm:z-0 ">
        <div className="hidden sm:flex">
          <img
            src="/assets/images/background-pattern-desktop.svg"
            className="w-full absolute inset-0 top-0 z-10"
          ></img>
        </div>
        <div className="hidden sm:p-8 sm:flex ">
        <div className="hidden sm:z-50 sm:flex sm:w-[580px] sm:bg-white sm:rounded-lg sm:shadow-xl">
          <FaqElement />
        </div>
        </div>
        
      </div>
    </>
  );
}

export default App;
