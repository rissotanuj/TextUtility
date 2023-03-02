import React from 'react'

export default function Alert(props) {
  return (
    <div>
      {props.alert && <div className="alert alert-success"  role="alert">
  <p className='text-center mt-3' style={{fontSize:"Large"}}>{props.alert.msg} : {props.alert.type}</p>
</div>}
    </div>
  )
}
