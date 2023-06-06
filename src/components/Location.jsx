import axios from "axios"

const Location = ({ location, setLocation }) => {

    const handleSubmit = (e) => {
        e.preventDefault()

        const newLocation = e.target.newLocation.value

        const URL = `https://rickandmortyapi.com/api/location/${newLocation}`

        axios.get(URL)
            .then(({ data }) => setLocation(data))
            .catch((err) => console.log(err))

    }

    return (
        <section>

            {/* INPUT DE BUSQUEDA */}

            <form onSubmit={handleSubmit} className="flex justify-center items-center top-10">
                <input id="newLocation" className="bg-transparent border-[2px] border-[#8EFF8B] text-gray-400 rounded-3xl p-2 mx-3 w-60 sm:w-80 sm:p-3" placeholder="Type a location (id)..." type="text" />
                <button className="bg-[#41773f] m-2 h-10 w-10 rounded-full border-[2px] border-[#8EFF8B] hover:bg-[#8EFF8B] hover:text-black sm:h-12 sm:w-12"><i className='bx bx-search' ></i></button>
            </form>


            {/* INFO LOCATION */}

            <section className="py-20 text-[#8EFF8B]">
                <h1 className="flex justify-center text-3xl font-normal pb-12">{location?.name}</h1>
                <ul className="flex justify-evenly flex-wrap py-8 gap-3 text-xl">
                    <li className="text-[#8EFF8B]">Type: <span className="text-white">{location?.type}</span></li>
                    <li className="text-[#8EFF8B]">Dimension: <span className="text-white">{location?.dimension}</span></li>
                    <li className="text-[#8EFF8B]">Population: <span className="text-white">{location?.residents.length}</span></li>
                </ul>
            </section>

        </section>
    )
}

export default Location