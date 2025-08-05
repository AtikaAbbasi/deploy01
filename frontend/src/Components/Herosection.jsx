import React from 'react'

const Herosection = () => {
  return (
    <>
            <div className="max-w-screen-xl bg-black flex flex-wrap items-center justify-center gap-6 mx-auto p-1">

                <div className="lg:w-[75%] sm:w-full bg-gray-100 lg:h-[530px] ">
                    <img src="https://i.pinimg.com/originals/16/d3/80/16d3808cb9ffa8634474933e39433b41.gif" alt="" className="lg:w-[100%] sm:w-full bg-gray-100 lg:h-[530px] " />
                </div>

                <div className="lg:w-[20%] sm:w-full  flex flex-wrap gap-5 justify-center items-center p-2">

                    <div className="hidden lg:flex md:h-[250px] md:w-[350px]  w-[200px] h-[200px]  overflow-hidden bg-gray-100 sm:mb-3 lg:mb-3 border lg:p-0 sm:p-1">
                        <div className="flex flex-col justify-center items-center h-full">
                            <img src="https://img.pikbest.com/origin/06/06/76/332pIkbEsTRat.jpg!w700wp" alt="Sale" className="img-fluid" />
                        </div>
                    </div>

                    <div className="hidden lg:flex md:h-[245px] md:w-[350px]  w-[200px] h-[200px]  overflow-hidden bg-gray-100 sm:mb-3 lg:mb-3 border lg:p-0 sm:p-1">
                        <div className="flex flex-col justify-center items-center h-full">
                            <img src="https://i.pinimg.com/originals/72/03/a7/7203a7f0a594c54a82ef2a0c2b3c1cd3.gif" alt="Sale" className="img-fluid" />
                        </div>
                    </div>

                </div>
            </div>

        </>
   
  )
}

export default Herosection