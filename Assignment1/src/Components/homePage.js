import React from 'react';
import Carousel from 'react-material-ui-carousel'; 
import { useNavigate } from 'react-router-dom';
import img1 from '../img1.jpg';
import img2 from '../img2.png';
import logo1 from '../logo1.png';
import logo2 from '../logo2.png';
import logo3 from '../logo3.png';
import logo4 from '../logo4.png';
import logo5 from '../logo5.png'
import app_logo from '../app_logo.png'

const App = () => {
  const carouselItems = [
    { id: 1, imageUrl: img1, content: 'Portfolio of Computer Science Student' },
    { id: 2, imageUrl: img2, content: 'Portfolio of Talent Acquisition Specialist' },
    { id: 3, imageUrl: img1, content: 'Portfolio of Computer Science Student' },
  ];
  const navigate = useNavigate();

  const logos = [logo1, logo2, logo3, logo4];

  const handleExploreClick = () => {
    navigate('/search');
  };
  return (
    <div>
      <header style={{ backgroundColor: 'black', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: '5px', borderRadius: '5px' }}>
        <img src={app_logo} alt="Your Logo" style={{ height: '50px', margin: 0 }} />
      </div>

        <nav style={{ flexGrow: 1, textAlign: 'center' }}>
          <a href="#" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>
            Products
          </a>
          <a href="#" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>
            Templates
          </a>
          <a href="#" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>
            Resources
          </a>
        </nav>

        <button style={{ color: 'white', border: 'none', backgroundColor: 'red', padding: '10px 20px', borderRadius: '5px', marginRight: '10px' }}>
          Log In
        </button>
        <button style={{ color: 'white', border: 'none', backgroundColor: 'red', padding: '10px 20px', borderRadius: '5px' }}>
          Sign Up
        </button>
      </header>

      <section style={{ display: 'flex', padding: '20px' }}>
        <div style={{ width: '50%', marginTop: '50px' }}>
          <h2>Create a Portfolio Website</h2>
          <p>
            Showcase your work online with a portfolio website. Get started with a professionally designed template that can be customized to fit your
            brand.
          </p>
          <button style={{ padding: '10px 20px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}>Get Started</button>

          <div style={{ marginTop: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={logos[0]} alt="Logo 1" style={{ marginRight: '10px' }} />
              <p>Easy to create and customize</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={logos[1]} alt="Logo 2" style={{ marginRight: '10px' }} />
              <p>Beautifully designed templates</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={logos[2]} alt="Logo 3" style={{ marginRight: '10px' }} />
              <p>Millions of photos, icons and illustrations</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={logos[3]} alt="Logo 4" style={{ marginRight: '10px' }} />
              <p>Easily download or share</p>
            </div>
          </div>

          <button
          onClick={handleExploreClick}
            style={{
              marginTop: '20px',
              marginLeft: '250px',
              padding: '10px 20px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Explore Existing Portfolios
            <img src={logo5} alt="Explore Logo" style={{ marginLeft: '10px', height: '20px' }} />
          </button>
        </div>

        <div style={{ width: '50%', marginLeft: '20px', height: '50%' }}>
          <Carousel>
            {carouselItems.map((item) => (
              <div key={item.id}>
                <img src={item.imageUrl} alt={`Carousel ${item.id}`} style={{ width: '100%', height: 'auto' }} />
                <p>{item.content}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default App;
