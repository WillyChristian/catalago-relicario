



const pdfReader = () => {
   pdfjsLib.getDocument("./Component/Catalogo/CatalogoPaginado.pdf").then(doc => {
         console.log("Numero de Páginas" + doc._pdfInfo.numPages)
     })
  
}

export default pdfReader