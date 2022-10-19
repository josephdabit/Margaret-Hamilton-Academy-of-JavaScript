import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AllStudents, AllCampuses, SingleCampus, SingleStudent, AddCampus, AddStudent } from '../components';

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
        <Route path='/students' element={<> <AllStudents /> <AddStudent /> </>}></Route>
        <Route path='/students/:id' element={<SingleStudent />}></Route>
        <Route path='/campuses' element={<> <AllCampuses /> <AddCampus /> </>}></Route>
        <Route path='/campuses/:id' element={<SingleCampus />}></Route>
      </Routes>
    </div>
  )
}

export default Main
