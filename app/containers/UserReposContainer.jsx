import React from 'react'
import Github from 'app/services/Github'
import ListView from 'app/components/ListView'

class UserReposContainer extends React.Component {
  state = { repos: [] }
  username = this.props.username

  componentDidMount() {
    Github.repos('drborges').then(repos => this.setState({
      repos: repos
    }))
  }

  render() {
    const repoItems = this.state.repos.map((repo, i) => <span key={i}>{repo.name}</span>)
    return (
      <ListView direction="vertical">{repoItems}</ListView>
    )
  }
}

export default UserReposContainer
