import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

const MenuPrincipal = ({ nomeAluno, linksObject }) => {
  const renderLinks = () => {
    return linksObject.map((e) => <Link to={e.url}>{e.nome}</Link>);
  };
  return (
    <div className="menu-principal">
      <div className="nome-aluno">{nomeAluno}</div>
      {linksObject.map((e) => (
        <Link to={e.url}>
          <Button>{e.nome}</Button>
        </Link>
      ))}
    </div>
  );
};

export default MenuPrincipal;
