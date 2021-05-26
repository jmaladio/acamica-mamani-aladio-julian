import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Skeleton from '@material-ui/lab/Skeleton'

import { UserContext } from '../App';
import CoinIcon from '../../img/coin.svg';
import AddIcon from '../../img/add-circle.svg';
import HistoryMallIcon from '../../img/history_mall.svg';

const API_URI = process.env.REACT_APP_API_URI;
const API_KEY = process.env.REACT_APP_API_KEY;
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${API_KEY}`
}

function UserControls() {
  const [ dialogOpen, setDialogOpen ] = useState(false);
  const [ redirectHistory, setRedirectHistory ] = useState(false);
  const { name, points, getUserInfo } = useContext(UserContext);

  useEffect(() => {
    if (redirectHistory) {
      setRedirectHistory(false);
    }
  }, [redirectHistory])

  const handleClickCoins = () => {
    setDialogOpen(true);
  }

  const handleClickHistory = () => {
    setRedirectHistory(true);
  }

  const handleDialogClose = async (points) => {
    if (points) {
      try {
        const response = await axios.post(`${API_URI}/user/points`, { amount: points }, { headers });
        const pointsUpdatedMessage = response.data?.message;
        if (pointsUpdatedMessage === "Points Updated") {
          setDialogOpen(false);
          getUserInfo();
        }
      } catch (error) {
        console.error(error)
      }
    } else {
      setDialogOpen(false);
    }
  } 

  return (
    <StyledContainer>
      {
        name?.length
        ?
          <>
            <Typography variant="body2">{name}</Typography>
            <StyledShowPointsChip label={points} avatar={<Avatar src={CoinIcon}  />}/>
            <StyledAddPointsChip clickable label="Agregar Monedas" onClick={handleClickCoins} variant="outlined" avatar={<Avatar src={AddIcon}  />}/>
            <StyledAddPointsChip clickable label="Historial" onClick={handleClickHistory} variant="outlined" avatar={<Avatar src={HistoryMallIcon}  />}/>
            <Dialog
              open={dialogOpen}
              onClose={() => handleDialogClose(0)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"¡Conseguir más monedas!"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Puedes conseguir más monedas con los siguiente montos
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => handleDialogClose(1000)} color="primary">
                  1000
                </Button>
                <Button onClick={() => handleDialogClose(5000)} color="primary">
                  5000
                </Button>
                <Button onClick={() => handleDialogClose(7500)} color="primary">
                  7500
                </Button>
                <Button onClick={() => handleDialogClose(0)} color="primary">
                  Cancelar
                </Button>
              </DialogActions>
            </Dialog>
          </>
        : <>
            <StyledSkeleton variant="text" width="50px"/>
            <StyledSkeleton variant="text" width="80px"/>
            <StyledSkeleton variant="text" width="100px"/>
            <StyledSkeleton variant="text" width="80px"/>
          </>
      }
      {redirectHistory ? <Redirect push={true} to="/history"/> : null}
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 0;
` 

const StyledShowPointsChip = styled(Chip)`
  background-color: #6ee8ff;
  margin: 0 0 0 1rem;
  color: black;
  font-weight: regular;
`

const StyledAddPointsChip = styled(Chip)`
  border-color: #ff7d00;
  color: #ff7d00;
  margin: 0 0 0 1rem;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bold;
`

const StyledSkeleton = styled(Skeleton)`
  margin-left: 1rem;
`
export default UserControls;