const Footer = () =>
(
    <footer className=" footer page-footer green lighten-1">          
          <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} SZXXI
                <a className="grey-text text-lighten-4 right" href="https://github.com/SergeyXXI/learning-react-meals" target="_blank" rel="noreferrer">Repo</a>
            </div>
          </div>
        </footer>
);

export default Footer;