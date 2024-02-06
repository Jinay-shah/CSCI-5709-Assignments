import React, { useState } from 'react';
import app_logo from '../app_logo.png'
import { useNavigate } from 'react-router-dom';


const PortfolioCard = ({ title, description, link }) => {
    return (
      <div style={cardStyle}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Visit Portfolio
        </a>
      </div>
    );
  };
  
  const cardStyle = {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    textAlign: 'center',
    width: '25%'
  };

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [filters, setFilters] = useState({
    department: '',
    skills: '',
    academicLevel: '',
  });

  const portfolios = [
    {
      id: 1,
      title: 'Portfolio 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: 'https://example.com/portfolio1',
    },
    {
      id: 2,
      title: 'Portfolio 2',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      link: 'https://example.com/portfolio2',
    },
    {
      id: 3,
      title: 'Portfolio 3',
      description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
      link: 'https://example.com/portfolio3',
    },
  ];


  const mockResults = [
  ];

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const autoSuggestions = mockResults
      .filter((result) => result.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 5);

    setFilteredResults(autoSuggestions);
  };

const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
  
    const updatedResults = mockResults.filter((result) => {
      return typeof result === 'string' && result.toLowerCase().includes(value.toLowerCase());
    });
  
    setFilteredResults(updatedResults);
  };
  

  const handleCollaborateClick = (profile) => {
    console.log(`Collaboration request sent to ${profile}`);
  };
  const handleSearchClick = () => {
    console.log('Search button clicked with query:', searchQuery);
  };
  const navigate = useNavigate();

  const homeButtonClick = () => {
    navigate('/');
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <header style={{ display: 'flex',backgroundColor: 'black', marginBottom: '10px', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '5px' }}>
        
        <div style={{ backgroundColor: 'white', padding: '5px', borderRadius: '5px', marginLeft:'15px' }}>
          <img src={app_logo} alt="Your Logo" style={{ height: '50px', margin: 0,  }} />
        </div>
      </header>  
      <input
        type="text"
        placeholder="Enter Search Query"
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ marginBottom: '20px', padding: '10px' }}
      />
        <button
          onClick={handleSearchClick}
          style={{ marginLeft: '10px',  marginBottom: '20px',padding: '10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Search
        </button>
      {filteredResults.length > 0 && (
        <ul>
          {filteredResults.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>
      )}

      <div style={{ marginBottom: '20px', width: '100%', display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <label>Department:</label>
          <select
            value={filters.department}
            onChange={(e) => handleFilterChange('department', e.target.value)}
          >
            <option value="">All</option>
            <option value="computerScience">Computer Science</option>
            </select>
        </div>

        <div>
          <label>Skills:</label>
          <input
            type="text"
            value={filters.skills}
            onChange={(e) => handleFilterChange('skills', e.target.value)}
          />
        </div>

        <div>
          <label>Academic Level:</label>
          <select
            value={filters.academicLevel}
            onChange={(e) => handleFilterChange('academicLevel', e.target.value)}
          >
            <option value="">All</option>
            <option value="undergraduate">Undergraduate</option>
          </select>
        </div>
      </div>

      <div style={{ width: '100%', textAlign: 'center' }}>
        <h2>Search Results</h2>
        {filteredResults.length > 0 ? (
          <ul>
            {filteredResults.map((result) => (
              <li key={result} style={{ marginBottom: '10px' }}>
                {result}
                <button onClick={() => handleCollaborateClick(result)} style={{ marginLeft: '10px', padding: '5px 10px' }}>
                  Collaborate
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>

      {selectedProfile && (
        <div style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
          <h2>Profile: {selectedProfile}</h2>
        </div>
      )}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap',  }}>
        {portfolios.map((portfolio) => (
          <PortfolioCard key={portfolio.id} title={portfolio.title} description={portfolio.description} link={portfolio.link} />
        ))}
      </div>
      <button
        onClick={homeButtonClick}
        style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Back to Home Page
      </button>
    </div>
  );
};

export default SearchPage;
