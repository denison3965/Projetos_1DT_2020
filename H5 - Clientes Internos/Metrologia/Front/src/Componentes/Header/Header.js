import React from "react";
// Importando css como um módulo.
import estilos from "./Header.module.css";
// Importando o Hook para localizar a página e componente para navegação. 
import { useLocation } from "react-router-dom";
import Navegacao from "./Navegacao/Navegacao";


const Header = () => {
    // Definindo um estado para o titulo.
    const [titulo, setTitulo] = React.useState(null);
    // Definindo um estado para saber de estamos na home.
    const [isHome, setIsHome] = React.useState(null);
    // Buscando a localização da página.
    const localizacao = useLocation();

    React.useEffect(() =>{
        // Puxa a propriedade "pathname" do objeto de localização.
        const {pathname} = localizacao;

        if(localizacao.pathname === "/") {
            setTitulo("Metrologia - Home");
            setIsHome(true);
        }else {
            // Forma a url para definir o nome do sensor.
            setTitulo(pathname.replace("/", "").replace("sensor", "Sensor "));
            setIsHome(false);     
        }
    }, [localizacao]);

    return(
        <header className={`${estilos.header} ${(isHome)? "" : estilos.headerExterno}`}>
            <h1>{titulo}</h1>
            
            {
                !isHome && <Navegacao />
            }
        </header>
    );
};

export default Header;