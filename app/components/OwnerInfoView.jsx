import React from 'react'

const OwnerInfoView = ({ owner, onChangeOwner }) => {
  const changeOwner = (event) => onChangeOwner(event.target.value)

  return (
    <h1 className="owner-info-view">
      <span>{'Owner: '}</span>
      <input
        type="text"
        defaultValue={owner}
        onBlur={changeOwner} />
    </h1>
  )
}

export default OwnerInfoView
