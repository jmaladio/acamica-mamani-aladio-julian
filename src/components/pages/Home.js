import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import ProductGrid from '../common/ProductGrid';

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
      </Hero>
      <Controls>
        Controles
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
  height: 20vh;
  background-color: blueviolet;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0 6rem 1rem 6rem;
`

const StyledTypography = styled(Typography)`
  font-weight: 700;
  color: #fafafa;
`

const Controls = styled(Container)`
  display: flex;
  border: 1px solid olive;
  height: 10vh;
  padding: 0 6rem;
  align-items: center;
`

