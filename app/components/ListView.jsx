import React from 'react'

const ListView = ({ mode, loading, children, onChangeMode }) => {
  let listModeClasses = 'flex flex-column'
  let gridModeClasses = 'flex flex-row flex-wrap flex-center'
  let classes = `list-view-items ${loading ? 'loading' : ''} ${mode == 'list' ? listModeClasses : gridModeClasses}`

  const changeToListMode = () => { onChangeMode('list') }
  const changeToGridMode = () => { onChangeMode('grid') }

  return (
    <div className="list-view">
      <div className="arrange-options">
        <i className={`btn fa fa-th-list ${mode == 'list' ? 'activated' : ''}`} onClick={changeToListMode}></i>
        <i className={`btn fa fa-th ${mode == 'grid' ? 'activated' : ''}`} onClick={changeToGridMode}></i>
      </div>
      <div className={classes}>{children}</div>
    </div>
  )
}

export default ListView
