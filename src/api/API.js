export const getBlog = (limit) => new Promise(async (resolve, reject) => {
    try {
        const data = await fetch(`https://itunes.apple.com/in/rss/topalbums/limit=${limit}/json`, {
            method: 'GET',
        })
        resolve(data.json())
    } catch (error) {
        reject(error)
    }
})
