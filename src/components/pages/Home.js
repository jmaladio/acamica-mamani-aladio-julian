import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import ProductGrid from '../common/ProductGrid';
import CatalogControls from '../common/CatalogControls';
import heroImage from '../../img/ear-png-277969.png';

const API_URI = process.env.REACT_APP_API_URI;
const API_KEY = process.env.REACT_APP_API_KEY;
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${API_KEY}`
}

export function Home() {
  const [ products, setProducts ] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsFromAPI = await axios.get(`${API_URI}/products`, { headers })
        setProducts(productsFromAPI.data)
      } catch (error) {
        console.error(error);
      }
    }
    getProducts();
  }, [])

  return (
    <HomeWrapper>
      <Hero>
        <StyledTypography variant="h2">Electronics</StyledTypography>
        <img src={heroImage} alt="Happy guy with headsets" height="90%"/>
      </Hero>
      <Controls>
        <CatalogControls />
      </Controls>
      <ProductGrid products={products}/>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.main`
  display: flex;
  flex-flow: column nowrap;
`

const Hero = styled(Container)`
  display: flex;
  height: 25vh;
  background-image: linear-gradient(-45deg, #0AD4FA, #6ee8ff);
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 6rem;
`

const StyledTypography = styled(Typography)`
  font-weight: 700;
  color: #fafafa;
  margin-bottom: 1rem;
`

const Controls = styled(Container)`
  display: flex;
  padding: 0 6rem;
  margin-top: 2rem;
  align-items: center;
`



