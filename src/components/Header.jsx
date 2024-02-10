import '/src/assets/css/header.css';

//Componente Header
const Header = ({ title }) => {
    return (
        <h1 className="py-5 my-title d-inline-block"> {title} </h1>
    );
};

export default Header;