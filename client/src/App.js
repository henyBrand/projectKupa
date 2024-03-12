import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
import SiteLayout from './components/layout/site/SiteLayout';
import DashLayout from './components/layout/dash/DashLayout';
import EmployeesList from './features/employee/list/EmployeesList';
import AddEmployee from './features/employee/add/AddEmployee';
import SingleEmployee from './features/employee/view/SingleEmployee';
import FamiliesList from './features/family/list/FamiliesList';
import AddFamily from './features/family/add/AddFamily';
import SingleFamily from './features/family/view/SingleFamily';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SiteLayout />}>
          <Route index element={<h1>site</h1>} />
          <Route path='/dash' element={<DashLayout />}>
            <Route index element={<h1>dash</h1>} />
            <Route path='employees' element={<Outlet />}>
              <Route index element={<EmployeesList />} />
              <Route path='add' element={<AddEmployee />} />
              <Route path=':id' element={<SingleEmployee />} />
            </Route>
            <Route path='families' element={<Outlet />}>
              <Route index element={<FamiliesList />} />
              <Route path='add' element={<AddFamily />} />
              <Route path=':id' element={<SingleFamily />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
