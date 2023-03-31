function Footer() {
    return (
        <footer className='page-footer grey'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} Coded by Rakhaev
                    <a className='grey-text text-lighten-4 right' href='#!'>
                        Contact Us
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
