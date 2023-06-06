export const paginationLogic = (currentPage, residents) => {

  if (!residents) {
    return {
      pages: [1],
      residentsInPage: []
    }

  }

  // Cantidad de residentes por página
  const RESIDENTS_PER_PAGE = 20

  // Cantidad total de página
  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE)

  // Residentes que se mostrarán en la página actual
  const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE
  const sliceEnd = sliceStart + RESIDENTS_PER_PAGE
  const residentsInPage = residents.slice(sliceStart, sliceEnd)


  // Generador de array de páginas a mostrar
  const pages = []

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  return {
    residentsInPage,
    pages
  }
}
