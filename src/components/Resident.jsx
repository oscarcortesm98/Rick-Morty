/* eslint-disable react/prop-types */
import axios from "axios"
import { useEffect, useState } from "react"

const Resident = ({ residentUrl }) => {

  const [residentInfo, setResidentInfo] = useState(null)

  const statusStyles ={
    "Alive" : "bg-green-500",
    "Dead" : "bg-red-500",
    "unknown" : "bg-gray-400"
  }

  useEffect(() => {
    axios
      .get(residentUrl)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <article>
      <div className="relative my-2">
        <img className=" rounded-2xl border-[1px] border-[#8EFF8B]" src={residentInfo?.image} alt="" />
        <div className="bg-black/50 flex items-center justify-center gap-2 absolute bottom-5 left-[50%] -translate-x-[50%] w-32 py-1 border-[2px] border-[#8EFF8B] rounded-3xl font-semibold">
          <div className={`h-4 aspect-square ${statusStyles[residentInfo?.status]} rounded-full`}></div>
          {residentInfo?.status}
        </div>
      </div>

      <section className="rounded-2xl border-[1px] border-[#8EFF8B] p-3 my-2">
        <h4 className="flex justify-center font-bold text-lg">{residentInfo?.name}</h4>
        <ul className="m-3 text-md">
          <li className="text-gray-400">Specie: <span className="text-white">{residentInfo?.species}</span></li>
          <li className="text-gray-400">Origin: <span className="text-white">{residentInfo?.origin.name}</span></li>
          <li className="text-gray-400">Times appear: <span className="text-white">{residentInfo?.episode.length}</span></li>
        </ul>
      </section>
    </article>
  )
}

export default Resident