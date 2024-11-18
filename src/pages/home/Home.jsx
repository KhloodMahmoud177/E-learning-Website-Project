import React from 'react'
import { Usection } from '../../components/Usection'
import { Mainsection } from '../../components/Mainsection'
import { Courses } from '../../components/Courses';
<<<<<<< HEAD
import { CourseCard } from '../../components/CartContext';
=======
import { CourseCard } from '../../components/CourseCard';
>>>>>>> c433064 (Initial commit)
import { Chooseus } from '../../components/Chooseus';
import { Footer } from '../../components/Footer';

const Home = () => {
    return (
        <>
          <Usection />
          <Mainsection />
          <Courses/>
          <CourseCard/>
          <Chooseus/>
          <Footer/>
        </>
      );


}

export default Home