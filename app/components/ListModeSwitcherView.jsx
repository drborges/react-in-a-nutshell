import React from 'react'

const ListModeSwitcherView = ({ mode, onChangeMode }) => {
  const changeToListMode = () => { onChangeMode('list') }
  const changeToGridMode = () => { onChangeMode('grid') }

  return (
    <div className="list-mode-switcher-view">
      <i className={`btn fa fa-th-list ${mode == 'list' ? 'activated' : ''}`} onClick={changeToListMode}></i>
      <i className={`btn fa fa-th ${mode == 'grid' ? 'activated' : ''}`} onClick={changeToGridMode}></i>
    </div>
  )
}

export default ListModeSwitcherView
