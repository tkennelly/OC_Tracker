console.log('working')

let name = document.querySelector("#name")
let username = document.querySelector("#username")
let login = document.querySelector("#login")
let signUp = document.querySelector("#sign-up")
let currentUser = document.querySelector("#current-user")

const loginButton = async(e) => {
    e.preventDefault()
    console.log('working')
    let response = await axios.get(`http://localhost:3001/profiles/${username.value}`)
    let loggedIn = response.data.profiles
    currentUser.innerHTML = `<h3> Welcome ${loggedIn}</h3>`
}

const signUpButton = async(e) => {
    e.preventDefault()
    console.log('working')
    const response = await axios.get(`http://localhost:3001/profiles`)
}

login.addEventListener('click', loginButton)
signUp.addEventListener('click', signUpButton)