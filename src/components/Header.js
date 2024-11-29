import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="header">
                MyFinance
                <Link to="/">Home</Link>
                <Link to="/transacoes">Transações</Link>
            </nav>
        </header>
    );
}

export default Header;
