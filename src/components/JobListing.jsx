import React, { useState } from 'react'
import {FaMapMarker} from "react-icons/fa"
import { Link } from "react-router-dom";

const JobListing = ({job}) => {

  const [showsetDescription, setShowsetDescription] = useState(false)
  
  let description = job.description;


  if (!showsetDescription) {
    description = description.substring(0,90) + '...'
  }

  const handleText = () => {
    setShowsetDescription(!showsetDescription)
  }
  return (
    <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{job.type}</div>
        <h3 class="text-xl font-bold">{job.title}</h3>
      </div>

      <div class="mb-5">{description}</div>

      <button className='text-indigo-500 hover:text-indigo-600 m-5' onClick={handleText}>{showsetDescription ? 'Less' : 'More'}</button>

      <h3 class="text-indigo-500 mb-2">{job.salary} / Year</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <FaMapMarker className='mr-1 inline text-lg mb-1' />
          {job.location}
        </div>
        <Link
          to={`/jobs/${job.id}`}
          class="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </Link>
      </div>
    </div>
  </div>
  )
}

export default JobListing