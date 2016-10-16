function Testable(target) {
  target.isTestable = true
  return target
}

@Testable
class Github {
  static endpoint = 'https://api.github.com'

  static async repos(username, page = 1) {
    try {
      let response = await fetch(`${Github.endpoint}/users/${username}/repos?page=${page}`)
      let repos = await response.json()
      if (repos.length == 0) throw 'Empty page'
      return repos

    } catch(e) {
      throw e
    }
  }
}

export default Github
