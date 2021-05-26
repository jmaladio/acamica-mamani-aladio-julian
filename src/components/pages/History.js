import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import ItemGrid from '../common/ItemGrid';

import { usePagination } from '../../hooks';
import HeroImage from '../../img/bags-473340.png';
import ArrowLeft from '../../img/arrow-left.svg';
import ArrowRight from '../../img/arrow-right.svg';

const API_URI = process.env.REACT_APP_API_URI;
const API_KEY = process.env.REACT_APP_API_KEY;
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${API_KEY}`
}

export function History() {
  const [ items, setItems ] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const itemsFromAPI = await axios.get(`${API_URI}/user/history`, { headers });
        setItems(itemsFromAPI.data);
      } catch (error) {
        console.error(error);
      }
    }
    getItems();
  }, [])

  const { 
    getCurrentItems,
    nextPage,
    prevPage,
    activePage,
    pagesTotal } = usePagination(items, 10, "");

  return (
    <HistoryWrapper>
      <Hero>
        <StyledTypography variant="h2">Historial</StyledTypography>
        <img src={HeroImage} alt="Happy guy with headsets" height="90%"/>
      </Hero>
      <Controls>
        <ControlsInner>
          Página {activePage} de {pagesTotal}   
          <VerticalDivider />
          <StyledArrow src={ArrowLeft} alt="arrow left" onClick={() => prevPage()} />
          <StyledArrow src={ArrowRight} alt="arrow rigth" onClick={() => nextPage()} />
        </ControlsInner>
      </Controls>
      <ItemGrid items={getCurrentItems()} />
    </HistoryWrapper>
  )
}

const HistoryWrapper = styled.main`
  display: flex;
  flex-flow: column nowrap;
`

const Hero = styled(Container)`
  display: flex;
  height: 25vh;
  background-image: linear-gradient(-45deg, #FAFAFA, #6ee8ff);
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
  margin-top: 1rem;
  align-items: center;
`

const ControlsInner = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0;
  border-bottom: 1px solid lightgray;
  align-items: center;
  justify-content: flex-start;
`

const VerticalDivider = styled.div`
  height: 2rem;
  width: 1px;
  background-color: lightgray;
  margin: 0 2rem;
  align-self: flex-end;
`

const StyledArrow = styled.img`
  height: 32px;
  width: 32px;
  align-self: center;
  cursor: pointer;
  margin-right: 1rem;
` 