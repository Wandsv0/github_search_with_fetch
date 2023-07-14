import { getUser } from './services/user.js'
import { getRepositories } from './services/repositories.js'
import { user } from './objects/user.js'
import { screen } from './objects/screen.js'
import { getEvents } from './services/events.js'

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if(validateEmptyInput(userName)) return
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        if(validateEmptyInput(userName)) return
        getUserData(userName)
    }
})

async function getUserData(userName) {

    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepositories(userName)
    const eventsResponse = await getEvents(userName)

    if(userResponse.message === "Not Found"){
        screen.renderNotFound()
        return
    }

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsResponse)

    screen.renderUser(user)
}

console.log(user)

function validateEmptyInput(userName){
    if(userName.length === 0){
        alert('Preencha o campo com um nome  de usuário do GitHub')
        return true
    }
}