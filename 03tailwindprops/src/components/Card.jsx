import React from 'react'

function Card({username,btnText="visit me"}){

    return(
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
  <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e" alt="Profile picture"/>
  <div className="p-5">
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{username}</h2>
    <p className="text-gray-600 text-sm mb-4">
      Frontend Developer with a passion for creating beautiful and responsive web interfaces.
    </p>
    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300">
      {btnText}
    </button>
  </div>
</div>

    )
}

export default Card;