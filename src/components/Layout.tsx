import {Box,} from '@mui/material';
import TopNav from './TopNav';
import SideNav from './SideNav';
import MainContainer from './MainContainer';


export default function Layout() {
    return <>
      <TopNav />
      <Box sx={{ display: 'flex' }}>
        <SideNav />
        <MainContainer />
      </Box>
    </>
}