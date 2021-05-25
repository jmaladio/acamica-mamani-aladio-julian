import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

import CoinIcon from '../../img/coin.svg';
import AddIcon from '../../img/add-circle.svg';

function UserControls() {

  const handleClick = () => {
    console.log("ABRE MODAL")
  }

  return (
    <StyledContainer>
      <Typography variant="body2">Julia Coi</Typography>
      <StyledShowPointsChip label="6000" avatar={<Avatar src={CoinIcon}  />}/>
      <StyledAddPointsChip clickable label="Agregar Monedas" onClick={handleClick} variant="outlined" avatar={<Avatar src={AddIcon}  />}/>
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
export default UserControls;