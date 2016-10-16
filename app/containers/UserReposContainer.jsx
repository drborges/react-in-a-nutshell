import React from 'react'
import Github from 'app/services/Github'
import ListView from 'app/components/ListView'
import PaginateView from 'app/components/PaginateView'

class UserReposContainer extends React.Component {
  state = { page: 1, repos: [], fetching: false }

  loadPage = (page) => {
    let lastState = { ...this.state }
    this.setState({ page, fetching: true })

    Github.repos(this.props.username, page).
      then(repos => this.setState({ repos })).
      catch(err => this.setState(lastState)).
      then(() => this.setState({ fetching: false }))
  }

  componentDidMount() {
    this.loadPage(1)
  }

  render() {
    const classes = `flex flex-column ${this.props.className}`
    const repoItems = this.state.repos.map((repo, i) => <span key={i}>{repo.name}</span>)

    return (
      <div className={classes}>
        <PaginateView
          page={this.state.page}
          onNextPage={this.loadPage}
          onPreviousPage={this.loadPage}
          onGotoPage={this.loadPage} />

        <ListView
          direction="vertical"
          loading={this.state.fetching}>{repoItems}</ListView>

        <PaginateView
          page={this.state.page}
          onNextPage={this.loadPage}
          onPreviousPage={this.loadPage}
          onGotoPage={this.loadPage} />
      </div>
    )
  }
}

export default UserReposContainer
