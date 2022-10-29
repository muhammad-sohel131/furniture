import Slider from '../components/Slider'
import Category from '../components/Category'
import TopCategory from '../components/TopCategory'
import Products from '../components/Products'
import WhatTheySay from '../components/WhatTheySay'
import Inspiration from '../components/Inspiration'
import BlogSection from '../components/BlogSection'
import Partner from '../components/Partner'

const Home = () => {
    return (
        <>
            <Slider />
            <Category />
            <TopCategory />
            <Products />
            <WhatTheySay />
            <Inspiration />
            <BlogSection />
            <Partner />
        </>
    )
}

export default Home