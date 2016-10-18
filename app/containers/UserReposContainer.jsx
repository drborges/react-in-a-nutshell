import React from 'react'
import Github from 'app/services/Github'
import UserReposView from 'app/components/UserReposView'

// Creates a better user experience by initializing the list with fake
// data until the actual data is retrieved and the list populated.
// The opacity + blur css effects applied to the list while loading data
// help making this experience a bit smoother.
const initialFakeReposList =
  Array.from(new Array(15).keys()).map(() => {
    return { name: 'Fake Repository' }
  })

const initialState = (owner) => {
  return {
    mode: 'grid',
    page: 1,
    loading: false,
    filterTerm: '',
    repos: initialFakeReposList,
    owner: owner,
  }
}

class UserReposContainer extends React.Component {
  state = initialState(this.props.owner)

  filterPage = (filterTerm) => this.setState({ filterTerm })
  changeMode = (mode) => this.setState({ mode })
  changeOwner = (owner) => this.setState({ owner }, () => {
    this.loadPage(1)
  })

  loadPage = (page) => {
    let lastState = { ...this.state }
    let isInitialState = lastState.repos == initialFakeReposList

    this.setState({ page, loading: true })
    Github.repos(this.state.owner, page).
      then(repos => this.setState({ repos, loading: false })).
      catch(err => this.setState({...lastState, loading: isInitialState}))
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
