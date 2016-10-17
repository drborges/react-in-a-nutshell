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
    mode: 'grid',
    page: 1,
    loading: false,
    filterTerm: '',
    repos: initialEmptyState,
    owner: this.props.owner,
  }

  loadPage = (page) => {
    let lastState = { ...this.state }
    this.setState({ page, loading: true })

    Github.repos(this.state.owner, page).
      then(repos => this.setState({ repos, loading: false })).
      catch(err => {
        let isLoading = (lastState.repos == initialEmptyState)
        this.setState({...lastState, loading: isLoading })
      })
  }

  filterPage = (filterTerm) => {
    this.setState({ filterTerm })
  }

  changeMode = (mode) => {
    this.setState({ mode })
  }

  changeOwner = (owner) => {
    this.setState({ owner }, () => {
      this.loadPage(1)
    })
  }

  componentDidMount() {
    this.loadPage(1)
  }

  render() {
    return (
      <UserReposView
        {...this.state}
        tabIndex={this.props.tabIndex}
        className={this.props.className}
        onChangeOwner={this.changeOwner}
        onChangeMode={this.changeMode}
        onLoad={this.loadPage}
        onFilter={this.filterPage} />
    )
  }
}

export default UserReposContainer
