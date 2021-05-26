import React, { useState, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { UserContext } from '../App';
import { ReactComponent as BuyIconBlue } from '../../img/buy-blue.svg'
import { ReactComponent as BuyIconWhite } from '../../img/buy-white.svg'
import CoinIconSVG, { ReactComponent as CoinIcon } from '../../img/coin.svg';


const API_URI = process.env.REACT_APP_API_URI;
const API_KEY = process.env.REACT_APP_API_KEY;
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${API_KEY}`
}

function ProductCard({ product }) {
  const [ active, setActive ] = useState(false);
  const [ dialogOpen, setDialogOpen ] = useState(false)
  const { category, img, name, cost, _id } = product;
  const { points, getUserInfo } = useContext(UserContext);

  const handleClick = async (productId) => {
    try {
      const response = await axios.post(`${API_URI}/redeem`, { productId }, { headers });
      const redeemMessage = response.data;
      if (redeemMessage) {
        setDialogOpen(true)
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleDialogClose = () => {
    setDialogOpen(false);
    getUserInfo();
  } 

  if (cost > points) {
    return (
      <Grid item xs={3}>
        <StyledPaper>
          <StyledChip label={`Necesitas ${cost-points}`} avatar={<Avatar src={CoinIconSVG} />} />
          <figure>
            <ImgWrapper src={img.url} alt={name} />
            <figcaption>
              <Typography variant="caption" style={{ color: "gray" }}>{category}</Typography>
              <Typography variant="subtitle2">{name}</Typography>
            </figcaption>
          </figure>
        </StyledPaper>
      </Grid>
    )
  }
  return (
    <Grid item xs={3} >
      <StyledPaper onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} style={ active ? { transform: "translateY(-10px)" } : { transform: "none" }}>
      {active ?
        <ActivePaper>
          <IconWrapper>
            <BuyIconWhite/>
          </IconWrapper>
          <StyledContainer>
            <CoinIcon />
            <Typography variant="h5" style={{ color: "#fafafa", fontWeight: "bold" }}>{cost}</Typography>
          </StyledContainer>
          <StyledButton variant="contained" onClick={() => handleClick(_id)} >
            Comprar ahora
          </StyledButton>
        </ActivePaper>
        : null
      }
      { active ? null :
        <IconWrapper>
          <BuyIconBlue/>
        </IconWrapper>
      }
        <figure>
          <ImgWrapper src={img.url} alt={name} />
          <figcaption>
            <Typography variant="caption" style={{ color: "gray" }}>{category}</Typography>
            <Typography variant="subtitle2">{name}</Typography>
          </figcaption>
        </figure>
      </StyledPaper>
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"¡Genial!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            La transacción se ha realizado con éxito
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Seguir comprando
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}

const StyledPaper = styled(Paper)`
  display: flex;
  flex-flow: column nowrap;
  padding: 1rem;
  position: relative;
`
const ActivePaper = styled(Paper)`
  display: flex;
  flex-flow: column nowrap;
  background-color: rgba(37,187,241, 0.85);
  z-index: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 2rem;
`

const ImgWrapper = styled.img`
  width: 100%;
  border-bottom: 1px solid lightgray;
`
const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
`

const IconWrapper = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 1rem;
  top: 1rem;
`

const StyledChip = styled(Chip)`
  position: absolute;
  right: 1rem;
  top: 1rem;
  background-color: rgba(0,0,0,0.5);
  color: #fafafa;
`

const StyledButton = styled(Button)`
  background-color: "#fafafa";
  border-radius: 20px;
  margin-top: 0.5rem;
`

export default ProductCard;