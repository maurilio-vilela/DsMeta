import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return(
      <>
        <header>
            <div className="csmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por 
                    <a href="http://www.vilelatech.com.br" target="_blank"> VilelaTech</a>
                </p>
            </div>
        </header>
      </>
    );
  }
  
  export default Header;