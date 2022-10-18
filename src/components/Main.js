import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AllStudents, AllCampuses } from '../components';

const Main = () => {
  return (
    <div>
      <nav>Welcome!
        <span>
        <Link to='/'>Home</Link>
        <Link to='/students'>Students</Link>
        <Link to='/campuses'>Campuses</Link>
        </span>
      </nav>
      <main>
        <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
        <p>Click the links in the navigation bar for a better view!</p>
      </main>
      <Routes>
        <Route path='/students' element={<AllStudents />}></Route>
        <Route path='/campuses' element={<AllCampuses />}></Route>
      </Routes>
    </div>
  )
}

export default Main
