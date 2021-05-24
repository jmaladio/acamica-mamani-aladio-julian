import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

function Header(){
  return (
    <>
      <StyledAppBar>
        <StyledToolbar>
            <Typography variant="subtitle1">Logo</Typography>
            <Typography variant="subtitle2">User Interface</Typography>
        </StyledToolbar>
      </StyledAppBar>
    </>
  )
}

const StyledAppBar = styled(AppBar)`
  box-shadow: none;
  position: static;
`
const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`

export default Header