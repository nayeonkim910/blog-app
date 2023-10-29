import './App.css';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
function App() {
  return (
    <>
      <ul>
        <li>
         <Link to='/'>Home Page</Link>
        </li>
        <li>
         <Link to='/posts'>Posts Page</Link>
        </li>
        <li>
         <Link to='/posts:id'>Detail Page</Link>
        </li>
        <li>
          <Link to='/posts/new'>Post New</Link>
        </li>
        <li>
           <Link to='/posts/edit:id'>Post Edit</Link>
        </li>
        <li>
           <Link to='/profile'>Profile</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<h1>HOME PAGE</h1>}/>
        <Route path='/posts' element={<h1>posts Page</h1>}/>
        <Route path='/posts:id' element={<h1>posts detail Page</h1>}/>
        <Route path='/posts/new' element={<h1>post new Page</h1>}/>
        <Route path='/posts/edit:id' element={<h1>Edit Page</h1>}/>
        <Route path='/profile' element={<h1>profile Page</h1>}/>
        <Route path='*' element={<Navigate replace to='/' />}/>
      </Routes>
    </>
  );
}

export default App;
