const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `
         <div class="info">
         <img src="${user.avatarUrl}" alt="foto de perfil"/>
         <div class="data">
         <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
        <p>${user.bio ?? 'Não possui bio cadastrada'}</p>
        <div class="followers">
        <p>Seguidores:${user.followers}</p>
        <p>Seguindo:${user.following}</p
        </div>
         </div>
         </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `
        <li><a href="${repo.html_url}" target="_blank">${repo.name}
        <div class="info-repo">
        <span>🍴: ${repo.forksCount ?? '0'} </span>
        <span>⭐: ${repo.starsCount ?? '0'}</span>
        <span>👀: ${repo.watchersCount ?? '0'}</span>
        <span>💻: ${repo.language ?? '?'}</span>
        </div>
        </a>
        </li>`
        )

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `
        <div class="repositories section">
        <h2>Repositórios</h2>
        <ul>${repositoriesItens}</ul>
        </div>`
        }

        let eventItens = ''
        user.events.forEach(event => { if (event.type === "CreateEvent" || event.type === "PushEvent"){
        
            if (event.payload.commits) {
            eventItens += `<li><span>${event.repo.name}</span> - ${event.payload.commits[0].message}</li>`;
        } else if (event.type === "CreateEvent") {
            eventItens += `<li>${event.repo.name} - ${event.payload.description}</li>`

            console.log('entrou')
        }
    }})

       if(user.events.length > 0) {
            this.userProfile.innerHTML += `
            <div class="events section">
            <h2>Eventos</h2><br>
            <ul>${eventItens}</ul>
            </div>`
        } else {
            this.userProfile.innerHTML += `
            <h2>Eventos</h2><br>
            <p>Este usuário não possui eventos.</p>`
        }
    
    },


    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado<h3>"
    }
}

export { screen }