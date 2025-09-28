import React, { useState } from 'react'
import { Range } from 'react-range'

const PriceFilter = () => {
  const STEP = 10
  const MIN = 1
  const MAX = 500

  const [values, setValues] = useState([100, 150])

  return (
    <div>
      <h1 className='font-bold text-[20px] mb-5 mt-10 text-black'>Price</h1>
      

      <Range
        step={STEP}
        min={MIN}
        max={MAX}
        values={values}
        onChange={(newValues) => setValues(newValues)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="h-2 w-full bg-gray-300 rounded-full"
            style={{
              ...props.style,
              background: `linear-gradient(to right, #d1d5db ${((values[0] - MIN) / (MAX - MIN)) * 100}%, #10b981 ${((values[0] - MIN) / (MAX - MIN)) * 100}%, #10b981 ${((values[1] - MIN) / (MAX - MIN)) * 100}%, #d1d5db ${((values[1] - MIN) / (MAX - MIN)) * 100}%)`,
            }}
          >
            {children}
          </div>
        )}

        renderThumb={({ props }) => (
          <div
            {...props}
            className="h-5 w-5 bg-green-500 rounded-full border-2 border-white shadow cursor-pointer"
          />
        )}
      />

      <p className="text-sm mt-4">
        Price: ${values[0]} - ${values[1]}
      </p>

    </div>
  )
}

export default PriceFilter
