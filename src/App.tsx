// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import TopNav from './components/TopNav';
// import SideNav from './components/SideNav';
// import { Box, Toolbar, Typography } from '@mui/material';
// import MainContainer from './components/MainContainer';
import { Routes, Route } from 'react-router';
import Layout from './components/Layout';

function Dashboard() {
  return <div>Dashboard</div>
}

function Users() {
  return <div>Users</div>
}

function Roles() {
  return <div>Roles</div>
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="users" element={<Users/>} />
        <Route path="roles" element={<Roles/>} />
      </Routes>
    </>
  )
}

export default App
