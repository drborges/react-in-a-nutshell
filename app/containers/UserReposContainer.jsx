import React from 'react'
import Github from 'app/services/Github'
import UserReposView from 'app/components/UserReposView'

// Creates a better user experience by initializing the list with fake
// data until the actual data is retrieved and the list populated.
// The opacity + blur css effects applied to the list while loading data
// help making this experience a bit smoother. 
const initialEmptyState =
  Array.from(new Array(15).keys()).map(() => {
    return { name: 'Fake Repository' }
  })

class UserReposContainer extends React.Component {
  state = {
    page: 1,
    repos: initialEmptyState,
    filterTerm: '',
    fetching: false
  }

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
