import { currentProfile, userData } from "./profileDOM.js"

let worldData = null
let worldBar = document.getElementById("world-sidebar")

const findWorlds = async(user_id) => {
    let response = await axios.get(`http://localhost:3001/worlds/${user_id}`)

    console.log(response.data.worlds)
    console.log(response)
   

    for( let i = 0; i < response.data.worlds.length; i++) {
        let button = `<button id="${response.data.worlds[i]._id}">${response.data.worlds[i].name}</button>`
        worldBar.innerHTML += button
        worldData = response.data.worlds[i]._id
    }
    //stores the last one
    console.log(worldData)
}



let newWorldButton = document.getElementById('make-world')
let worldForm = document.querySelector(".world-form")

const createWorldButton = () => {
    console.log(userData)
    worldForm.style.display = 'block'
}

const createWorld = async(e) => {
    e.preventDefault()
    console.log('working')
    // to work with forms vvv
    const formData = new FormData(e.target)
    const formProps = Object.fromEntries(formData)

    let response = await axios.post(`http://localhost:3001/worlds/post`, {
        name: formProps.name,
        genre: formProps.genre,
        description: formProps.description,
        user: userData._id
    })

    currentProfile.innerHTML = `<h1>Created World: ${formProps.name}! Please Find your Profile again for an updated World list.</h1>`
}

    newWorldButton.addEventListener('click', createWorldButton)
    worldForm.addEventListener('submit', createWorld)


export { findWorlds }