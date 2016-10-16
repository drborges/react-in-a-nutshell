import React from 'react'
import Github from 'app/services/Github'
import UserReposView from 'app/components/UserReposView'

class UserReposContainer extends React.Component {
  state = { page: 1, repos: [], filterTerm: '', fetching: false }

  loadPage = (page) => {
    let lastState = { ...this.state }
    this.setState({ page, fetching: true })

    Github.repos(this.props.username, page).
      then(repos => this.setState({ repos })).
      catch(err => this.setState(lastState)).
      then(() => this.setState({ fetching: false }))
  }

  filterPage = (term) => {
    this.setState({ filterTerm: term })
  }

  componentDidMount() {
    this.loadPage(1)
  }

  render() {
    return (
      <UserReposView
        repos={this.state.repos}
        tabIndex={this.props.tabIndex}
        loading={this.state.fetching}
        page={this.state.page}
        filterTerm={this.state.filterTerm}
        onLoad={this.loadPage}
        onFilter={this.filterPage}
        className={this.props.className} />
    )
  }
}

export default UserReposContainer
