import { baseUrl, reposQuantity } from '../variables.js'

async function getRepos(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${reposQuantity}&sort=updated`)
    return await response.json()
}

export { getRepos }