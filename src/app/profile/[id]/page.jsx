import React from 'react'

const UserProfile = ({params}) => {
  return (
    <div className="flex text-white flex-col items-center justify-center min-h-screen py-2 ">
        <h1>Profile</h1>
        <hr />
        <p className="text-4xl ">Profile Page
        <span className="p-2  bg-orange-500 rounded ml-2">{params.id}</span>
        </p>

    </div>
  )
}

export default UserProfile;