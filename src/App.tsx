// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import TopNav from './components/TopNav';
// import SideNav from './components/SideNav';
// import { Box, Toolbar, Typography } from '@mui/material';
// import MainContainer from './components/MainContainer';
import { Routes, Route } from 'react-router';
import Layout from './components/Layout';
import ListUsers from './modules/users/ListUsers';
import CreateUser from './modules/users/CreateUser';

function Dashboard() {
  return <div>Dashboard</div>
}

function Roles() {
  return <div>Roles</div>
}

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users/add" element={<CreateUser />} />
            <Route path="users" element={<ListUsers />} />
            <Route path="roles" element={<Roles />} />
          </Route>
        </Routes>
      </>
    )
}

export default App
