const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>PAKSOC NCL</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#15983a',
                    borderRadius: '8px'
                }}>New Event</a>
            </div>
        </nav>
    );
}
 
export default Navbar;
