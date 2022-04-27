let apiFunctions = {
    getInstruments: async () => {
        let url = 'localhost:3000/instruments',
            options = {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                mode: 'cors'
            }
        
        const response = await fetch(url, options)
        console.log(response)
        return await response.json()
    },
    getInstrumetById:  async (id) => {
        let url = `localhost:3000/instruments/${id}`,
            options = {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                mode: 'cors'
            }
        const response = await fetch(url, options)
        return await response.json()
    }
}

export default apiFunctions


