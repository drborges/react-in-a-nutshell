import React from 'react'

import ListView from 'app/components/ListView'
import FilterView from 'app/components/FilterView'
import PaginateView from 'app/components/PaginateView'

const UserReposView = (props) => {
  const classes = `flex flex-column ${props.className}`
  const repoItems = props.repos.
    filter(repo => repo.name.startsWith(props.filterTerm)).
    map((repo, i) => <span key={i}>{repo.name}</span>)

  return (
    <div className={classes}>
      <PaginateView
        page={props.page}
        onNextPage={props.onLoad}
        onPreviousPage={props.onLoad}
        onGotoPage={props.onLoad} />

      <FilterView
        tabIndex={props.tabIndex}
        onFilter={props.onFilter} />

      <ListView
        loading={props.loading}>{repoItems}</ListView>

      <PaginateView
        page={props.page}
        onNextPage={props.onLoad}
        onPreviousPage={props.onLoad}
        onGotoPage={props.onLoad} />
    </div>
  )
}

export default UserReposView
