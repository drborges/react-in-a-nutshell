import React from 'react'
import Github from 'app/services/Github'
import ListView from 'app/components/ListView'
import FilterView from 'app/components/FilterView'
import PaginateView from 'app/components/PaginateView'

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
    const classes = `flex flex-column ${this.props.className}`
    const repoItems = this.state.repos.
      filter(repo => repo.name.startsWith(this.state.filterTerm)).
      map((repo, i) => <span key={i}>{repo.name}</span>)

    return (
      <div className={classes}>
        <PaginateView
          page={this.state.page}
          onNextPage={this.loadPage}
          onPreviousPage={this.loadPage}
          onGotoPage={this.loadPage} />

        <FilterView
          tabIndex={this.props.tabIndex}
          onFilter={this.filterPage} />

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
