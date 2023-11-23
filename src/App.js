import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Navigation } from './components/nav/Navigation';
import Authorization from './pages/Authorization';
import Main from './pages/Main';
import Sign from './pages/Sign';
import NewsNoAuth from './pages/News/NewsNoAutn';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Authorization />} />
          <Route path='/sign' element={<Sign />} />
          <Route path='/newsnoauth' element={<NewsNoAuth />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
