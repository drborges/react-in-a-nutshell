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
        onNextPage={props.onLoadPage}
        onPreviousPage={props.onLoadPage}
        onGotoPage={props.onLoadPage} />

      <FilterView
        tabIndex={props.tabIndex}
        onFilter={props.onFilterPage} />

      <ListView
        direction="vertical"
        loading={props.fetching}>{repoItems}</ListView>

      <PaginateView
        page={props.page}
        onNextPage={props.onLoadPage}
        onPreviousPage={props.onLoadPage}
        onGotoPage={props.onLoadPage} />
    </div>
  )
}

export default UserReposView
