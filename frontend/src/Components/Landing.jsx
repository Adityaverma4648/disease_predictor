 

const Landing = () => {
  return (
    <div
          className="md:h-[60vh] h-[100vh] flex justify-center items-center"
        >
          <div
            className="h-full flex md:flex-row flex-col justify-center items-center"
          >
            <div
              className="md:w-1/2 flex h-full justify-center items-center relative p-6"
            >
              
                <div className="w-10/12 flex flex-col justify-center items-center relative font-bold text-5xl">Your Health Diagnosis, now Simplified 
                <p className="text-lg font-normal">
                  Just type in your symptoms and get instant, accurate results.
                  Understand what your body is telling you with HealHive - your
                  personal health assistant.
                </p></div>
                
         
              <div
                // onClick="predictDisease()"
                className="border border-black w-[100px] h-[100px] bg-gray-200 hover:bg-gray-400 hover:text-white text-black font-medium absolute top-0 right-0 flex justify-center items-center text-center m-2 cursor-pointer"
                onClick={()=>{
                     const element = document.getElementById("HeroSection");
                     if(element){
                      element.scrollIntoView({behavior : "smooth"});
                     }else{
                      console.error(`Element with id "${element}" not found.`)
                     }
                }}

              >
                Start Diagnosing Now
              </div>
            </div>
            <div
               className="min-w-1/2 h-full flex justify-center items-center overflow-hidden"
            >
             
                <img
                  className="w-full"
                  src="https://res.cloudinary.com/storylens/image/upload/v1702151671/uxsd31xlalnaslcvqmkb.jpg"
                  alt="sl"
                  
                />
             
            </div>
          </div>
        </div>
  )
}

export default Landing