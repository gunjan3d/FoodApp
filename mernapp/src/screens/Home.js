import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/footer'
import Carousel from '../components/Carousel'
export default function Home() {
  return (
    <div>
      <div><Navbar /></div>
      <div><Carousel /></div>
      <div className='CardBody m-5'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div><Footer /></div>
    </div>
  )
}
