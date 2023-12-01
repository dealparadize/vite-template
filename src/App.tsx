import { Route, Routes } from 'react-router-dom';

import Home from './pages/home.page';
import Page1 from './pages/page1.page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1" element={<Page1 title="Page 1" />} />
    </Routes>
  );
}

export default App;
