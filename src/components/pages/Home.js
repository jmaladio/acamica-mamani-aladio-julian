import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Chip from '@material-ui/core/Chip';

import ProductGrid from '../common/ProductGrid';
import { usePagination } from '../../hooks';
import HeroImage from '../../img/ear-png-277969.png';
import ArrowLeft from '../../img/arrow-left.svg';
import ArrowRight from '../../img/arrow-right.svg';

const API_URI = process.env.REACT_APP_API_URI;
const API_KEY = process.env.REACT_APP_API_KEY;
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${API_KEY}`
}

export function Home() {
  const [ products, setProducts ] = useState([]);
  const [ categoryList, setCategoryList ] = useState([]);
  const [ category, setCategory ] = useState('');
  const [ sortPrice, setSortPrice ] = useState(''); // '' \ 'ASC' | 'DESC'

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsFromAPI = await axios.get(`${API_URI}/products`, { headers });
        const categories = productsFromAPI.data.map(product => product.category).filter((item, index, array) => array.indexOf(item) === index);
        setCategoryList(categories);
        setProducts(productsFromAPI.data);
      } catch (error) {
        console.error(error);
      }
    }
    getProducts();
  }, [])

  const { 
    getCurrentItems,
    nextPage,
    prevPage,
    activePage,
    pagesTotal } = usePagination(products.filter(product => category ? product.category === category : true), 16, sortPrice);

  const handleChangeCategory = (e) => {
    setCategory(e.target.value)
  }

  const handleClickSort = (order) => {
    if (order === "ASC") {
      if (sortPrice === "ASC") {
        setSortPrice("")
      } else {
        setSortPrice("ASC")
      }
    }

    if (order === "DESC") {
      if (sortPrice === "DESC") {
        setSortPrice("")
      } else {
        setSortPrice("DESC")
      }
    }
  }

  return (
    <HomeWrapper>
      <Hero>
        <StyledTypography variant="h2">Electrónica</StyledTypography>
        <img src={HeroImage} alt="Happy guy with headsets" height="90%"/>
      </Hero>
      <Controls>
        <ControlsInner>
          Página {activePage} de {pagesTotal}   
          <VerticalDivider />
          Filtrar por:
          <FormControl >
            <StyledInputLabel id="demo-simple-select-label">Categoría</StyledInputLabel>
            <StyledSelect
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              defaultValue="Categoría"
              onChange={handleChangeCategory}
            >
              <MenuItem key="All" value="">Todas</MenuItem>
              {categoryList.map(cat => <MenuItem key={cat} value={cat}>{cat}</MenuItem>)}
            </StyledSelect>
          </FormControl >
          <VerticalDivider />
          Ordenar por:
          <StyledChip label="Precio más bajo" clickable={false} variant={sortPrice === "DESC" ? "default" : "outlined"} onClick={() => handleClickSort('DESC')}/>
          <StyledChip label="Precio más alto" clickable={false} variant={sortPrice === "ASC" ? "default" : "outlined"}onClick={() => handleClickSort('ASC')}/>
          <VerticalDivider />
          <StyledArrow src={ArrowLeft} alt="arrow left" onClick={() => prevPage()} />
          <StyledArrow src={ArrowRight} alt="arrow rigth" onClick={() => nextPage()} />
        </ControlsInner>
      </Controls>
      <ProductGrid products={getCurrentItems()}/>
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
  margin-top: 1rem;
  align-items: center;
`

const ControlsInner = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0;
  border-bottom: 1px solid lightgray;
  align-items: baseline;
  justify-content: space-between;
`

const VerticalDivider = styled.div`
  height: 2rem;
  width: 1px;
  background-color: lightgray;
  margin: 0 2rem;
  align-self: flex-end;
`
const StyledInputLabel = styled(InputLabel)`
  margin-left: 1rem;
`
const StyledSelect = styled(Select)`
  width: 10rem;
  margin-left: 1rem;
`

const StyledChip = styled(Chip)`
  margin-left: 1rem;
  cursor: pointer;
`

const StyledArrow = styled.img`
  height: 32px;
  width: 32px;
  align-self: flex-end;
  cursor: pointer;
` 