import React from 'react'
import { useNavigate } from 'react-router-dom'

const Errorpage = () => {
  let navigate = useNavigate();
  let home = () => navigate('/');

  return (
    <>
      <section className='error-container'>
          <div>
            <h3>404: PAGE NOT FOUND</h3>
          </div>
          <button className='btn home-btn' onClick={home}>Home</button>
      </section>
    </>
  )
}

export default Errorpage