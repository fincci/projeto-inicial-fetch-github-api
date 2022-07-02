const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto de perfil do usuário" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                                            <h2>${user.userName ?? 'Não possui login cadastrado 😥'}</h2>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😥'}</p>
                                            <p class="follow">Followers: ${user.followers}</p>
                                            <p class="follow">Following: ${user.following}</p>
                                        </div>
                                    </div>`

        let reposItens = ''
        user.repos.forEach(repo => reposItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)

        if (user.repos.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositories</h2>
                                            <ul>${reposItens}</ul>
                                            </div>`
        }

        let activitiesItens = ''
        user.activities.forEach(activities => {
            if (activities.type === "PushEvent") {
                activitiesItens += `<li><a href="https://github.com/${activities.repo.name}">${activities.repo.name}</a><p> - ${activities.payload.commits[0].message} 📨</p></li>`
            }
            if (activities.type === "CreateEvent") {
                activitiesItens += `<li><a href="https://github.com/${activities.repo.name}">${activities.repo.name}</a><p> - Create Event 🎉</p></li>`
            }
            if (activities.type === "ForkEvent") {
                activitiesItens += `<li><a href="https://github.com/${activities.repo.name}">${activities.repo.name}</a><p> - Fork Event 🍴</p></li>`
            }
        })

        if (user.activities.length > 0) {
            this.userProfile.innerHTML += `<div class="activities section">
                                            <h2>Activities</h2>
                                            <ul>${activitiesItens}</ul>
                                            </div>`
        }

    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>User not found</h3>"
    }
}

export { screen }