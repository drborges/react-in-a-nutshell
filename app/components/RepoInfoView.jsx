import React from 'react'
import RepoStatsView from 'app/components/RepoStatsView'
import { StarIconView, ForkIconView } from 'app/components/Icons'

const RepoInfoView = ({ name, description, url, forks, stars }) => (
  <a href={url} target="_blank" className="repo-info-view flex flex-column">
    <div className="repo-name">{name}</div>
    <div className="repo-description">{description}</div>
    <div className="repo-stats">
      <RepoStatsView stats={stars} icon={<StarIconView />} />
      <RepoStatsView stats={forks} icon={<ForkIconView />} />
    </div>
  </a>
)

export default RepoInfoView
