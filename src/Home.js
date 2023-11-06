import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome website', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Woah', body: 'lorem ipsum...', author: 'dayyan', id: 3 }
        
    ]);

    
    return ( 
        <div className="home">
            {/* put the props in the BlogsList, put the blogs (parent) data in the BlogList (child) component */}
            <BlogList blogs={blogs} /* <-- this is the prop*/ title="All Blogs" />
        </div>
    );
}

export default Home;