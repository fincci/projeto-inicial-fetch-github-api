const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: 0,
    following: 0,
    repos: [],
    activities: [],
    setUserInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setReposInfo(repos) {
        this.repos = repos
    },
    setActivitiesInfo(activities) {
        this.activities = activities
    }
}

export { user }