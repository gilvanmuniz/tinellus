import Menu from './navegation';

const Layout = ({ children }) => {
    return (
      <div className="content">
        <Menu />
        { children }        
      </div>
    );
  }
  export default Layout