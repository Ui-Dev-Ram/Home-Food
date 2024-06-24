import React from 'react'

const RestoLogin = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">LOGIN</h2>
          <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs mt-5" />
          <input type="text" placeholder="Password" className="input input-bordered w-full max-w-xs mt-2 mb-5" />
          <div className="card-actions justify-end">
            <button className="btn btn-error">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestoLogin