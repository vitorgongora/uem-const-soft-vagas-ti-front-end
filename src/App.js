import "./App.css";
import React from "react";
import MenuPrincipal from "./components/MenuPrincipal/MenuPrincipal";
import { Button } from 'antd';
import "./sass/menu-principal.scss";

function App() {
  return (
    <div className="App">
      <MenuPrincipal nomeAluno="Vítor Gôngora" 
        linksObject={[
          {
            "nome": "Dashboard",
            "url": "/rh/dashboard"
          },
          {
            "nome": "Agendamentos",
            "url": "/rh/agendamentos"
          },
          {
            "nome": "Vagas",
            "url": "/rh/vagas"
          },
          {
            "nome": "Site personalizável",
            "url": "/rh/sitepersonalizavel"
          },
          {
            "nome": "Administração",
            "url": "/rh/administracao"
          },
          {
            "nome": "Informações da conta",
            "url": "/rh/perfil"
          },
          {
            "nome": "Forma de pagamento",
            "url": "/rh/pagamento"
          }
        ]} />
        <MenuPrincipal nomeAluno="Henrique Favaro" 
        linksObject={[
          {
            "nome": "Recuperar Senha",
            "url": "/user/recupPassword"
          },
          {
            "nome": "Cadastro Vaga - DEV",
            "url": "/user/DeveloperApply"
          },
          {
            "nome": "Anúncios de vagas",
            "url": "/adm/anunciosvagas"
          },
          {
            "nome": "Desenvolvedores",
            "url": "/adm/desenvolvedores"
          },
          {
            "nome": "Contas de empresas",
            "url": "/adm/empresas"
          }

        ]} />
        <MenuPrincipal nomeAluno="Pedro Humberto" 
        linksObject={[
          {
            "nome": "Pagina Inicial",
            "url": "/PaginaInicial"
          },
          {
            "nome": "Pagina de Planos",
            "url": "/PaginaDePlanos"
          },
          {
            "nome": "Editar Perfil",
            "url": "/user/EditarPerfil"
          },
          {
            "nome": "Inscrições",
            "url": "/user/VisualizarInscricoes"
          },
          {
            "nome": "Nova Vaga",
            "url": "/rh/Vagas/NovaVaga"
          },
          {
            "nome": "Vizualizar Candidatos",
            "url": "/rh/Vagas/VisualizarVaga/"
          }
        
        ]} />
        <MenuPrincipal nomeAluno="Arthur Gustavo" 
        linksObject={[
          {
            "nome": "Login",
            "url": "/login"
          },
          {
            "nome": "Cadastro",
            "url": "/cadastro"
          },
          {
            "nome": "Listagem Vagas",
            "url": "/vagas"
          },
          {
            "nome": "Site Personalizavel",
            "url": "/nomeEmpresa/vagas"
          }
          ,
          {
            "nome": "Vaga Específica",
            "url": "user/vagaSelecionada"
          }
        ]} />
    </div>
  );
}

export default App;
