import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UsersList, UserPage } from './pages';
import { UsersContextProvider } from './utils/context';

export const App = () => (
  <UsersContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/user/:id" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  </UsersContextProvider>
);
