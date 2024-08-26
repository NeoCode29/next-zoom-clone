import React from 'react'

function Meeting({params}: {params : { id :string}}) {
  return (
    <div>meeting id : #{params.id}</div>
  )
}

export default Meeting