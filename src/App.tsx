import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty';
import Disclosure from './pages/Disclosure';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import LeadershipDesk from './pages/LeadershipDesk';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="disclosure" element={<Disclosure />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="desk/:role" element={<LeadershipDesk />} />
        </Route>
      </Routes>
    </Router>
  );
}
