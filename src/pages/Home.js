import Login from '../components/user/Login'
import Loginn from '../components/user/Loginn'
import React from 'react'
import NavBar from '../components/NavBar'
import BottomNav from '../components/BottomNav';
import AddProject from '../components/projects/AddProject.js';

const Home = () => {
  return (
    <>
    <Login />
    <NavBar />
    <BottomNav />
    </>
  );
};

export default Home