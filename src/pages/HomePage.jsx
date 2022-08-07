import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Products1 from '../components/products/Products1'
import Products2 from '../components/products/Products2'
import Products3 from '../components/products/Products3';
import Player from '../components/Player'
import axios from 'axios';
import tracks from '../trackssdata';


function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get({tracks});
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = tracks.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <Header/>
      <Layout>
        <div className='homePage colorPage'>

          <section className='block'>
            <div className='blockContent1'>
              <div>
                <h2 className='h2-1'>For singers and creators</h2>
                <ul>
                  <li>Exclusive Prosonic tracks and packages</li>
                  <li>Professional quality</li>
                  <li>Get project stems</li>
                </ul>
              </div>
              <div className='blockContent2'>
                <h2 className='h2-2'>Can’t find the perfect track?</h2>
                <span><Link to='/services' id='customLink'> Order a custom track!</Link></span>
              </div>
            <div>

              </div>
            </div>
            
          </section>




          <section className='container'>

            <div className='container__header-section'>
                <h2>Latest Prosonic produced tracks</h2>
                <div className='container__browse'>
                  <Link to="/tracks" className='container__btn'><span><span>Browse more tracks</span></span></Link>
                </div>
            </div>
            
            <Products1 tracks={currentPosts} loading={loading}/>
          </section>



          <section className='container'>
    
          <div className='container__header-section'>
              <h2>Premium Prosonic produced tracks</h2>
              <div className='container__browse'>
              <Link to="/tracks" className='container__btn'><span><span>Browse more tracks</span></span></Link>
              </div>
          </div>
    
            <Products2 tracks={currentPosts} loading={loading}/>
          </section>




          <section className='container'>
    
          <div className='container__header-section'>
              <h2>Latest Prosonic Packages</h2>
              <div className='container__browse'>
              <Link to="/packages" className='container__btn'><span><span>Browse more packages</span></span></Link>
              </div>
          </div>
    
            <Products3/>
          </section>
        </div>
      </Layout>
      <Player/>

      </>
  )
}

export default HomePage;