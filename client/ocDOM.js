let newOCButton = document.getElementById("make-oc")
let ocForm = document.querySelector(".oc-form")
let closeOCButton = document.getElementById("close-make-oc")

const createOCButton = () => {
    ocForm.style.display = 'block'
}

const createOC = async(e) => {
    e.preventDefault()
    console.log('working')
    // to work with forms vvv
    const formData = new FormData(e.target)
    const formProps = Object.fromEntries(formData)

    //make sure its 'oc' and not 'ocs'
    let response = await axios.post(`http://localhost:3001/oc/post`, {
        name: formProps.name,
        age: formProps.age,
        gender: formProps.gender,
        race: formProps.race,
        appearence: formProps.appearence,
        backstory: formProps.backstory,
        worldId: formProps.world
    })

    currentProfile.innerHTML = `<h1>Created OC: ${formProps.name}! Please Find your Profile again for an updated OC list.</h1>`
}

const closeMakeOC = () => {
    ocForm.style.display = 'none'
}

    newOCButton.addEventListener('click', createOCButton)
    ocForm.addEventListener('submit', createOC)
    closeOCButton.addEventListener('click', closeMakeOC)