import React from 'react'

import Github from 'app/services/Github'
import ListView from 'app/components/ListView'
import FilterView from 'app/components/FilterView'
import RepoInfoView from 'app/components/RepoInfoView'
import PaginateView from 'app/components/PaginateView'

const UserReposView = ({ owner, repos, page, filterTerm, tabIndex, loading, className, onLoad, onFilter }) => {
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
      <h1>
        {'Owner: '}<a href={`${Github.url}/${owner}`} target="_blank">{owner}</a>
      </h1>

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
