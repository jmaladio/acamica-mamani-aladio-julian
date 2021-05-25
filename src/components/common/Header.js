import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components';

import {ReactComponent as AerolabLogo} from '../../img/aerolab-logo.svg';
import UserControls from './UserControls';

function Header() {
  return (
    <>
      <StyledAppBar>
        <StyledToolbar>
            <AerolabLogo />
            <UserControls />
        </StyledToolbar>
      </StyledAppBar>
    </>
  )
}

const StyledAppBar = styled(AppBar)`
  box-shadow: none;
  position: static;
  color: black;
`
const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  background-color: #fafafa;
`

export default Header