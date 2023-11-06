const BlogList = ({ blogs, title }) => {
    
    return ( 
        <div className="blog-list">
            <h2>{ title } </h2>
            {blogs.map((blog) => ( 
                // key must be unique
                <div className="blog-preview" key={blog.id}> 
                <h2>{ blog.title }</h2>
                <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;