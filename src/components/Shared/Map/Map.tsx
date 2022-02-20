import { Box } from '@chakra-ui/layout';
import { BoxProps } from '@chakra-ui/react';
import GoogleMapReact from 'google-map-react';
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

export interface MapProps extends BoxProps {
  coordinates: {
    lat: number;
    lng: number;
  };
}

const MAP_KEY = 'AIzaSyBMePsrPSWpSEipq6olgSTQ7HynliRaRv0';

export const Map = (props: MapProps) => {
  const { coordinates } = props;
  return (
    <Box h={'full'}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: MAP_KEY,
        }}
        defaultCenter={coordinates}
        defaultZoom={17}
        lng={coordinates.lng}
        lat={coordinates.lat}
      >
        <Box
          color="primary"
          fontSize={'5xl'}
          style={{ transform: 'translate(-23px, -46px)' }}
        >
          <FaMapMarkerAlt />
        </Box>
      </GoogleMapReact>
    </Box>
  );
};
