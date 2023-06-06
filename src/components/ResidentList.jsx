import { useEffect, useState } from "react"
import Resident from "./Resident"
import { paginationLogic } from "../utils/pagination"

const ResidentList = ({ residents, location }) => {

    const [currentPage, setCurrentPage] = useState(1)

    const { pages, residentsInPage } = paginationLogic(currentPage, residents)

    useEffect(()=>{

        const firstPage = 1

        setCurrentPage(firstPage)

    }, [location])

    return (

        <section className="px-3">

            {/* LISTA DE RESIDENTES */}

            <section className="grid gap-8 grid-cols-[repeat(auto-fill,_280px)] justify-center max-w[1024px] mx-auto py-6">
                {
                    residentsInPage?.map((resident) => (
                        <Resident key={resident} residentUrl={resident} />
                    ))
                }
            </section>

            {/* PAGINACION */}

            <section className="flex justify-center gap-4 flex-wrap py-8 text-xl">
                {
                    pages.map((page) => (
                        <button key={page} onClick={() => setCurrentPage(page)}
                            className={`px-3 rounded-md ${currentPage === page ? "bg-white/10 font-semibold px-4" :"p-2"}`}>
                            {page}
                        </button>))
                }
            </section>

        </section>
    )
}

export default ResidentList