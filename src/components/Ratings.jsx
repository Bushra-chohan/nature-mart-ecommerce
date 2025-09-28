import React from 'react'
import { StarIcon as StarSolid } from '@heroicons/react/24/solid'
import { StarIcon as StarOutline } from '@heroicons/react/24/outline'

const RatingDisplay = () => {
  const ratings = [5, 4, 3, 2, 1]

  return (
    <div className="space-y-3">
      <h1 className='font-bold text-[20px] mb-6 text-black mt-10'>Rating</h1>

      {ratings.map((rating, index) => (
        <div key={index} className="flex items-center space-x-2">
          <input type="checkbox" className="accent-green-600 w-4 h-4" />

          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) =>
              i < rating ? (
                <StarSolid key={i} className="w-5 h-5 text-yellow-400" />
              ) : (
                <StarOutline key={i} className="w-5 h-5 text-yellow-400" />
              )
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default RatingDisplay
