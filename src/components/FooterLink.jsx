import React from 'react'

const FooterLink = (props) => {
  return (
    <button className='px-4 py-1 bg-background rounded-full'>
        {props.name}
    </button>
  )
}

export default FooterLink