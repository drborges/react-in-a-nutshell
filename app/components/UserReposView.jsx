import React from 'react'

import ListView from 'app/components/ListView'
import FilterView from 'app/components/FilterView'
import PaginateView from 'app/components/PaginateView'

const UserReposView = ({ repos, page, filterTerm, tabIndex, loading, className, onLoad, onFilter }) => {
  const classes = `flex flex-column ${className}`
  const repoItems = repos.
    filter(repo => repo.name.startsWith(filterTerm)).
    map((repo, i) => <span key={i}>{repo.name}</span>)

  return (
    <div className={classes}>
      <PaginateView
        page={page}
        onNextPage={onLoad}
        onPreviousPage={onLoad}
        onGotoPage={onLoad} />

      <FilterView
        tabIndex={tabIndex}
        onFilter={onFilter} />

      <ListView
        loading={loading}>{repoItems}</ListView>

      <PaginateView
        page={page}
        onNextPage={onLoad}
        onPreviousPage={onLoad}
        onGotoPage={onLoad} />
    </div>
  )
}

export default UserReposView
