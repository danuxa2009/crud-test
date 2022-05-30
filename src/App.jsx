import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { UsersList, UserPage } from './pages';
import { UsersContextProvider } from './utils/context';

export const App = () => (
  <UsersContextProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<UsersList />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </UsersContextProvider>
);
