const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    events: [],
    forksCount:'',
    watchersCount: '',
    starsCount: '',
    language:'',
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
        this.forksCount = gitHubUser.forks_count
        this.watchersCount = gitHubUser.watchers_count
        this.starsCount = gitHubUser.stargazers_count
        this.language = gitHubUser.language
    },
    setRepositories(repositories) {
        this.repositories = repositories
    },
    setEvents(events) {
        this.events = events
    }
}

export { user }