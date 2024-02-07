# Assingment 1

    **Author** \
    Name: Jinay Shah \
    Banner ID: B00928737 \
    Email ID: jn851778@dal.ca \
    Date Created: 6 Feb 2024 \
    Last Modification Date: 6 Feb 2024

## Links
- Assignment 1 Application deployed on Netlify URL: [https://jinay-shah-assignment-1.netlify.app/](https://jinay-shah-assignment-1.netlify.app/)

## Testing

    For the testing of the assignment, I started the webapp in my local machine then when everything was working fine, I tested it on the browser while deploying it on Netlify.

## Deployment

    1. First of all, I Cloned my `CSCI_5709_Assingments` repository to my local machine.
    2. Then, I created a new project with the following command in [React](https://react.dev) using `npx create-react-app assignment1` command.
    4. Afterwards, I pushed my user-management project to my GitHub account repository.
    5. I deployed my app on [Netlify](https://www.netlify.com).
    6. I modified the changes in the app for functionality and pushed the changes to the github repository.
    7. I created a `README.md` file and pushed it to the gitlab repository.

## Built With

    * [React](https://react.dev) - The web framework used
    * [Netlify](https://app.netlify.com/) - Hosting platform used


---

## Sources Used

    I used the below sources for implementing the code for my navigation bar in Assignment-1.

### 1. homePage.js

*Lines 28-51*

```

    <header style={{ backgroundColor: 'black', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ backgroundColor: 'white', padding: '5px', borderRadius: '5px' }}>
            <img src={app_logo} alt="Your Logo" style={{ height: '50px', margin: 0 }} />
        </div>

            <nav style={{ flexGrow: 1, textAlign: 'center' }}>
            <a href="/" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>
                Products
            </a>
            <a href="/" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>
                Templates
            </a>
            <a href="/" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>
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
```

    The code above was created by adapting the code from [react](https://react-bootstrap-v3.netlify.app/components/navbar/) as shown below: 

```
    <Navbar inverse collapseOnSelect>
    <Navbar.Header>
        <Navbar.Brand>
        <a href="#brand">React-Bootstrap</a>
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        <Nav>
        <NavItem eventKey={1} href="#">
            Link
        </NavItem>
        <NavItem eventKey={2} href="#">
            Link
        </NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
        </Nav>
        <Nav pullRight>
        <NavItem eventKey={1} href="#">
            Link Right
        </NavItem>
        <NavItem eventKey={2} href="#">
            Link Right
        </NavItem>
        </Nav>
    </Navbar.Collapse>
    </Navbar>;

```

- The code was implemented by me for creating the header  for my assignment-1 in CSCI-5709. I was going through the internet for how to create a header in react framework and applying enhanced animation effect on it. I learned from react website itself i found more appeling and responsive design. So I took the reference of [react](https://react-bootstrap-v3.netlify.app/components/navbar/) for applying css to it and then modified on top of it. 

- The given [react](https://react-bootstrap-v3.netlify.app/components/navbar/)'s Code was referenced because it is visually appealing for the header and it is available on open source platform.

- The  [react](https://react-bootstrap-v3.netlify.app/components/navbar/)'s Code was modified by me.

*Lines 102-109*

```
            <Carousel>
                {carouselItems.map((item) => (
                <div key={item.id}>
                    <img src={item.imageUrl} alt={`Carousel ${item.id}`} style={{ width: '100%', height: 'auto' }} />
                    <p>{item.content}</p>
                </div>
                ))}
            </Carousel>
```

    The code above was created by adapting the code from [stackOverflow](https://stackoverflow.com/questions/67185790/how-to-pass-react-bootstrap-carousel-items-to-a-map-function) as shown below: 

```
    import React from "react";
    import { Carousel } from "react-bootstrap";

    function Entry(props) {
        return(
            <div>
            <h1 className="reviews-h1">Reviews</h1>
            <Carousel>
            <Carousel.Item>
                <img
                className="testimonialImages d-block w-50"
                src={props.image}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>{props.author}</h3>
                <p>{props.content}</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
        );
    }

    export default Entry;
```

- The code was implemented by me for creating the header  for my assignment-1 in CSCI-5709. I was going through the internet for how to create a header in react framework and applying enhanced animation effect on it. I learned from react website itself because I found more appeling and responsive design. So I took the reference of [stackOverflow](https://stackoverflow.com/questions/67185790/how-to-pass-react-bootstrap-carousel-items-to-a-map-function) for applying css to it and then modified on top of it. 

- The given [stackOverflow](https://stackoverflow.com/questions/67185790/how-to-pass-react-bootstrap-carousel-items-to-a-map-function)'s Code was referenced because it is visually appealing for the header and it is available on open source platform.

- The  [stackOverflow](https://stackoverflow.com/questions/67185790/how-to-pass-react-bootstrap-carousel-items-to-a-map-function)'s Code was modified by me.


### 2. searchPage.js

*Lines 96-194*

```
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

```

The code above was created by adapting the code from [react](https://mui.com/material-ui/react-card/) as shown below: 
The code above was created by adapting the code from [github](https://github.com/Eazy2Code/Search-Filter-React/blob/master/src/App.js) as shown below: 

```
    import * as React from 'react';
    import Card from '@mui/material/Card';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import Typography from '@mui/material/Typography';
    import { CardActionArea } from '@mui/material';

    export default function ActionAreaCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    );
    }
```
```
    import React, {useState} from "react";
    import './style.css';
    import data from "./TemplateData.json";

    function App() {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <>
        <div className="templateContainer">
            <div className="searchInput_Container">
            <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
                setSearchTerm(event.target.value);
            }} />
            </div>
            <div className="template_Container">
            {
                data 
                .filter((val) => {
                    if(searchTerm == ""){
                    return val;
                    }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                    }
                })
                .map((val) => {
                    return(
                    <div className="template" key={val.id}>
                        <img src={val.image} alt="" />
                        <h3>{val.title}</h3>
                        <p className="price">${val.price}</p>
                    </div> 
                    )
                })
            }
            </div>
        </div>
        </>
    )
    }

    export default App;
```

- The code was implemented by me for creating the search page and filtering option for my assignment-1 in CSCI-5709. I was going through the internet for how to create a header in react framework and applying enhanced animation effect on it. I learned from react website itself because I found more appeling and responsive design. So I took the reference of [github](https://github.com/Eazy2Code/Search-Filter-React/blob/master/src/App.js) for applying css to it and then modified on top of it. 

- The given [github](https://github.com/Eazy2Code/Search-Filter-React/blob/master/src/App.js)'s Code was referenced because it is visually appealing for the header and it is available on open source platform.

- The [github](https://github.com/Eazy2Code/Search-Filter-React/blob/master/src/App.js)'s Code was modified by me.


    ### References.

    [1]	“How to pass react-bootstrap carousel items to a Map function?,” Stack Overflow. [Online]. Available: https://stackoverflow.com/questions/67185790/how-to-pass-react-bootstrap-carousel-items-to-a-map-function. [Accessed: 07-Feb-2024].


    [2]	“No title,” Netlify.app. [Online]. Available: https://react-bootstrap-v3.netlify.app/components/navbar/. [Accessed: 07-Feb-2024].

    [3]	“React tutorial,” W3schools.com. [Online]. Available: https://www.w3schools.com/react/default.asp. [Accessed: 07-Feb-2024].
