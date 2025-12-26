import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
export const BackButton: React.FC = () => {
  const navigate = useNavigate()
  const handleBackButton = () => {
    navigate(-1)
  }
  return (
    <button className=''>
      <ArrowLeft size={20} strokeWidth={3} className='text-secondary' onClick={handleBackButton} />
    </button>
  )
}
