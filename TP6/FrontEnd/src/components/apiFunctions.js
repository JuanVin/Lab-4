let apiFunctions = {
    getInstruments: async() => {
        let url = 'http://localhost:3000/instruments',
            options = {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                mode: 'cors'
            },
            response
        try {
            response = await fetch(url, options)
            response = await response.json()
        } catch (e) {
            console.log(e)
        }
        return response
    },
    getInstrumetById: async(id) => {
        let url = `http://localhost:3000/instruments/${id}`,
            options = {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                mode: 'cors'
            },
            response
        try {
            response = await fetch(url, options)
            response = await response.json()
        } catch (e) {
            console.log(e)
        }
        return response
    }
}

export default apiFunctions