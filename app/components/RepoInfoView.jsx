import React from 'react'

const StarIconView = () => (
  <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 14 16" width="14" className="star-icon-view">
    <path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path>
  </svg>
)

const ForkIconView = () => (
  <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 10 16" width="10" className="fork-icon-view">
    <path d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path>
  </svg>
)

const InfoLabelView = ({ info, icon }) => (
  <span className="info-label-view">
    <span className="label-icon">{icon}</span>
    <span className="label-info">{info}</span>
  </span>
)

const RepoInfoView = ({ name, description, url, forks, stars }) => (
  <a href={url} target="_blank" className="repo-info-view flex flex-column">
    <div className="repo-name">{name}</div>
    <div className="repo-description">{description}</div>
    <div className="repo-stats">
      <InfoLabelView info={stars} icon={StarIconView()} />
      <InfoLabelView info={forks} icon={ForkIconView()} />
    </div>
  </a>
)

export default RepoInfoView
