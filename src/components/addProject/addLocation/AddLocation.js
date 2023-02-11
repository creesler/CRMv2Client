import { Box } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { Map } from 'react-map-gl'
import { useValue } from '../../../context/ContextProvider'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Marker, NavigationControl, GeolocateControl } from 'react-map-gl';
import Geocoder from './Geocoder'

const AddLocation = () => {
  const {state:{projectLocation:{lng, lat}}, dispatch} = useValue()
  const mapRef = useRef()

  useEffect(()=>{
    if(!lng && !lat){
      fetch('https://ipapi.co/json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        mapRef.current.flyTo({
          center: [data.longitude, data.latitude],
        })
        dispatch({
          type:'UPDATE_PROJECT_LOCATION',
          payload: { lng: data.longitude, lat: data.latitude },
        })
      })
    }
  }, [])
  return (
    <Box
    sx={{
      height:400,
      position:'relative'
    }}
    >
      <Map
      ref={mapRef}
        mapboxAccessToken={process.env.REACT_APP_MAP_TOKEN}
        initialViewState={{
          longitude:lng,
          latitude:lat,
          zoom:8
        }}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        >
          <Marker
          latitude={lat}
          longitude={lng}
          draggable
          onDragEnd={(e)=> dispatch({type:'UPDATE_PROJECT_LOCATION', payload:{lng:e.lngLat.lng, lat:e.lngLat.lat}})}
          />
          <NavigationControl position="bottom-right" />
          <GeolocateControl
            position="top-left"
            trackUserLocation
            onGeolocate={(e) =>
              dispatch({
                type:'UPDATE_PROJECT_LOCATION',
                payload: { lng: e.coords.longitude, lat: e.coords.latitude},
              })
          }
          />
          <Geocoder />
      </Map>
    </Box>
  )
}

export default AddLocation