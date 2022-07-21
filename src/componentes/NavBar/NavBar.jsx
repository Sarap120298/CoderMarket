import * as React from 'react';
import { Box, AppBar, Toolbar, InputBase, Stack, styled, alpha, Typography, Button } from '@mui/material';
import { Link, Outlet } from 'react-router-dom'
import group1 from '../imagenes/group1.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActive from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';
import Favorite from '@mui/icons-material/Favorite';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    marginLeft: '1rem',
    marginRight: '1rem',
    width: '35vw',
  },
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },

  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '35vw',
  },
}));

const StyledIcon = styled(PersonIcon)(({ theme }) => ({
  marginBottom: '0.7rem',
  marginTop: '0.5rem',
  color: '#869CC9',
  [theme.breakpoints.down('sm')]: {
    fontSize: 25,
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: 40,
  },

}));

const StyledIcon2 = styled(NotificationsActive)(({ theme }) => ({
  marginBottom: '0.7rem',
  marginTop: '0.5rem',
  marginRight: '0.5rem',
  color: '#869CC9',
  [theme.breakpoints.down('sm')]: {
    fontSize: 25,
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: 24,
  },

}));
const StyledIcon3 = styled(Favorite)(({ theme }) => ({
  marginBottom: '0.7rem',
  marginTop: '0.5rem',
  marginRight: '0.5rem',
  color: '#869CC9',
  [theme.breakpoints.down('sm')]: {
    fontSize: 25,
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: 24,
  },

}));

const TextIconButtons = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: 'black'

}));




const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#869CC9',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#869CC9',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#fffafa',
}));

function NavBar({ searcher }) {


  return (
    <Box sx={{ flexGrow: 1 }} >
      <StyledAppBar position="fixed" elevation={0} >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Box sx={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}><Link to='/'>
            <img style={{ height: '4rem', paddingBottom: '0.7rem', paddingTop: '0.5rem' }} src={group1} alt='logo' /> </Link>
          </Box>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <Link to='/cartas' style={{ textDecoration: 'none' }}>
              <StyledInputBase onChange={searcher}
                placeholder=""
                inputProps={{ 'aria-label': 'search' }}
              /></Link>

          </Search>
          <Stack direction="row" spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
             <Button><StyledIcon3 sx={{}} /><TextIconButtons> Mis Favoritos</TextIconButtons></Button>  
            <Button><StyledIcon2 sx={{}} /> <TextIconButtons>Mis Alertas </TextIconButtons> </Button>
            <Link to="/login"> <StyledIcon sx={{}} /></Link>
          </Stack>

        </Toolbar>
      </StyledAppBar>
      <Outlet />
    </Box>

  );
}
export default NavBar