import React from 'react'

import Github from 'app/services/Github'
import ListView from 'app/components/ListView'
import FilterView from 'app/components/FilterView'
import RepoInfoView from 'app/components/RepoInfoView'
import PaginateView from 'app/components/PaginateView'
import OwnerInfoView from 'app/components/OwnerInfoView'
import ListModeSwitcherView from 'app/components/ListModeSwitcherView'

const UserReposView = ({ owner, repos, page, mode, filterTerm, tabIndex, loading, className, onLoad, onFilter, onChangeMode, onChangeOwner }) => {
  const classes = `flex flex-column ${className}`
  const visibleRepos = repos.filter(repo => repo.name.startsWith(filterTerm))
  const repoItems = visibleRepos.map((repo, i) =>
    <RepoInfoView
      key={i}
      name={repo.name}
      description={repo.description}
      url={repo.html_url}
      forks={repo.forks_count}
      stars={repo.stargazers_count} />
  )

  return (
    <div className={classes}>
      <OwnerInfoView
        owner={owner}
        onChangeOwner={onChangeOwner} />

      <PaginateView
        page={page}
        onNextPage={onLoad}
        onPreviousPage={onLoad}
        onGotoPage={onLoad} />

      <FilterView
        tabIndex={tabIndex}
        onFilter={onFilter} />

      <ListModeSwitcherView
        mode={mode}
        onChangeMode={onChangeMode} />

      <ListView
        mode={mode}
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
