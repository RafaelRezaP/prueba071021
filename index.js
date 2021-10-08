
const url = 'https://datos.gob.mx/busca/api/3/action/package_search?q=naicm'

fetch (url)
.then (response => response.json())
.then(data => {

    console.log(data)
})

.catch(err=>console.log(err))

