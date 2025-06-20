import { Link } from "react-router-dom"



const GetLeadsComp = () => {
  return (
    <>
       <div className="w-full bg-black text-white lg:py-20 py-10 px-4 flex justify-center items-center">
        <div className="text-center max-w-3xl">
          <h2 className="lg:text-4xl text-2xl md:text-5xl font-bold mb-6 leading-tight">
            Tired of Cold Leads?
          </h2>
          <p className="lg:text-lg text-sm md:text-xl text-gray-300 mb-8">
            Connect with serious, ready-to-move sellers who are actively seeking your expertise. Spend less time chasing and more time closing.
          </p>
          <Link to="/pricing" >
          <button className="bg-[rgb(255,70,85)] cursor-pointer hover:bg-[rgb(230,60,75)] text-white px-8 py-4 rounded-full  text-sm lg:text-base font-semibold transition duration-300">
            Start Closing Smarter
          </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default GetLeadsComp