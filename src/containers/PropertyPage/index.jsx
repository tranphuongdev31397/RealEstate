import Banner from 'components/Banner'
import { bannerData } from 'data'
import React from 'react'

 function PropertyPage() {
  return (
    <>
    <Banner isHome={false} banner={bannerData.property} />
    <div>Property</div>
    </>
  )
}
export default PropertyPage