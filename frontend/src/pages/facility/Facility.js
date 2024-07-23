import React from 'react'
import CardLeft from './components/CardLeft'
import CardRight from './components/CardRight'

export default function Facility() {
  return (
    <div className='container container-lg pb-48'>
      <div className="text-center py-20">
        <p className="text-xl underline tracking-tight text-gray-900 lg:text-5xl">
          OUR FACILITY
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat fugiat aliqua.
        </p>
      </div>
        <CardLeft />
    </div>
  )
}
