function Header() {
    return (
        <nav className='deep-purple'>
            <div className='nav-wrapper'>
                <a href='#' className='brand-logo'>
                    React Movies
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'></ul>
            </div>
        </nav>
    );
}

export { Header };
