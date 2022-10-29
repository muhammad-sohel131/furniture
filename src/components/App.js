import './App.css'
import Header from './Header'
import Home from '../pages/Home'
import About from '../pages/About'
import Footer from './Footer'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TermsAndConditions from '../pages/TermsAndConditions'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import Faq from '../pages/Faq'
import Contact from '../pages/Contact'
import Blog from '../pages/Blog'
import Login from '../pages/Login'
import Register from '../pages/Register'

const App = () => {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path = '/' element={<Home />} />
                <Route path = '/about' element = {<About />} />
                <Route path = '/terms' element = {<TermsAndConditions />}></Route>
                <Route path = '/privacy' element = {<PrivacyPolicy />}></Route>
                <Route path = '/faq' element = {<Faq />}></Route>
                <Route path = '/contact' element = {<Contact />}></Route>
                <Route path = '/blog' element = {<Blog />} />
                <Route path = '/login' element = {<Login />} />
                <Route path = '/register' element = {<Register />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default App