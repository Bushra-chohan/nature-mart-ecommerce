import React from 'react'
import { ClockIcon, GiftIcon, ArrowPathIcon, ArchiveBoxArrowDownIcon} from '@heroicons/react/24/outline'

function Blobs() {

  const blobObjects = [
    {
      icon: ClockIcon ,
      header: '10 minute grocery now',
      text: 'Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.' ,
    },
    {
      icon: GiftIcon,
      header: 'Best Prices & Offers',
      text: 'Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.' ,
    },
    {
      icon: ArrowPathIcon ,
      header: 'Wide Assortment',
      text: 'Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.' ,
    },
    {
      icon: ArchiveBoxArrowDownIcon,
      header: 'Easy Returns',
      text: 'Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy .' ,
    },
  ]

  return (

    <div className='flex justify-between space-x-8 mb-35 mt-15'>
      {blobObjects.map((blob, index) => (
        <div className='leading-10 flex-1/4'>
        <blob.icon className='h-12 w-12 text-green-600 mb-4 '/>
        <h1 className='font-bold text-[19px]'>{blob.header}</h1>
        <p className='text-gray-500 text-sm'>{blob.text}</p>
      </div>
      ))}
      
    </div>

  )
}

export default Blobs