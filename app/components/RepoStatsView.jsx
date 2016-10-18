import React from 'react'

const RepoStatsView = ({ stats, icon }) => (
  <span className="info-label-view">
    <span className="label-icon">{icon}</span>
    <span className="label-info">{stats}</span>
  </span>
)

export default RepoStatsView
