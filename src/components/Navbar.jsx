import './Navbar.css'

function Navbar(){
    return (
        <nav>
            <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
                <li><a href="home">Home</a></li>
                <li><a href="about">About</a></li>
                <li><a href="project">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;