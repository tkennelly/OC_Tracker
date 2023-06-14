import { findWorlds } from "./worldDOM.js"

let name = document.querySelector("#name")
let findProfile = document.querySelector(".find-profile")
let createProfile = document.querySelector(".create-profile")
let currentProfile = document.getElementById("current-profile")
let userData = null

const findButton = async(e) => {
    e.preventDefault()
    console.log('working')
    // to work with forms vvv
    const formData = new FormData(e.target)
    const formProps = Object.fromEntries(formData)

    let response = await axios.get(`http://localhost:3001/profiles/${formProps.username}`)
    console.log(response.data.profile[0])
    userData = response.data.profile[0]

    

    currentProfile.innerHTML = `${response.data.profile[0].username}`

    findWorlds(response.data.profile[0]._id)
}

const createButton = async(e) => {
    e.preventDefault()
    console.log('working')
    // to work with forms vvv
    const formData = new FormData(e.target)
    const formProps = Object.fromEntries(formData)

    let response = await axios.post(`http://localhost:3001/profiles/post`, {
        username: formProps.username
    })

    

    currentProfile.innerHTML = `<h1>Created Profile: ${formProps.username}</h1>`
}

findProfile.addEventListener('submit', findButton)
createProfile.addEventListener('submit', createButton)

export { currentProfile, userData }