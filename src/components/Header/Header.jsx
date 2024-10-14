import { Link } from "react-router-dom";

const Header = ({ title }) => {
    return (
        <div className="d-flex justify-content-center align-items-center p-3 border-bottom shadow rounded">
            <span className="fw-bold h2">{title}</span>
        </div>
    );
}

export default Header;