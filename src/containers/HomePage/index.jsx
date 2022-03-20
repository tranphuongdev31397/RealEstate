import React, { useEffect, useState } from "react";
import "./style.css";
import { bannerData } from "data";
import Banner from "components/Banner";
import PropertyBox from "containers/PropertyBox";
import { propertiesApi } from "apis/propertiesApi";
function HomePage() {

  const [properties, setProperties] = useState([])
  useEffect(() => {
    const fetchPropertiesList = async () => {
      try{
        const params = {
          locationExternalIDs: '5002,6020',
          purpose: 'for-rent',
          hitsPerPage: '7',
          page: '0',
          lang: 'en',
          sort: 'city-level-score',
          rentFrequency: 'monthly',
          categoryExternalID: '4'
        }
        const response = await propertiesApi.getAll(params)
        console.log(response);
        setProperties(response.hits)
      }
      catch(err){
          console.log(err)
      }
    }
    fetchPropertiesList()
   
  }, [])


  if(properties.length === 0) {
    return <div> Loading </div>
  }
  return (
    <div>
      <Banner isHome={true} banner={bannerData.home} />
      <PropertyBox
        subTitle1={"Display Latest & Featured Properties"}
        subTitle2={
          "Get started by choosing from one of our pre-built page templates to showcase your properties"
        }
        properties={properties}
      />
    </div>
  );
}

export default HomePage;
