import React, { useContext } from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Skeleton from '@material-ui/lab/Skeleton'

import { UserContext } from '../App';
import CoinIcon from '../../img/coin.svg';
import AddIcon from '../../img/add-circle.svg';

function UserControls() {

  const { name, points } = useContext(UserContext);
  const handleClick = () => {
    console.log("ABRE MODAL")
  }

  return (
    <StyledContainer>
      {
        name?.length
        ?
          <>
            <Typography variant="body2">{name}</Typography>
            <StyledShowPointsChip label={points} avatar={<Avatar src={CoinIcon}  />}/>
            <StyledAddPointsChip clickable label="Agregar Monedas" onClick={handleClick} variant="outlined" avatar={<Avatar src={AddIcon}  />}/>
          </>
        : <>
            <StyledSkeleton variant="text" width="50px"/>
            <StyledSkeleton variant="text" width="80px"/>
            <StyledSkeleton variant="text" width="100px"/>
          </>
      }
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