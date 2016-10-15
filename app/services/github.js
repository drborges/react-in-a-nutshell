function Testable(target) {
  target.isTestable = true
  return target
}

@Testable
class Github {
  static endpoint = 'https://api.github.com'

  static async repos(username) {
    let response = await fetch(`${Github.endpoint}/users/${username}/repos`)
    return await response.json()
  }
}

export default Github
