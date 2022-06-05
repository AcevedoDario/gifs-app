const apiKey = '2cggEMhx127YydSr9br12cw4V91aIW7K'

export default function getGifs({keyword = 'fail'} = {}){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=5&offset=0&rating=g&lang=en`
    return fetch(apiURL)
        .then(res => res.json())

        .then(response => {

        const {data = []} = response
        if (Array.isArray(data)){
            const gifs = data.map(image => {
                const { id, images, title } = image
                const { url } = images.downsized_medium
                return { title, id, url }
            })
            return gifs
        }
    })
}
