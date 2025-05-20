import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src="/placeholder.svg" alt="Logo" />
        </div>
        <nav className="menu">
          <a href="#">Início</a>
          <a href="#">Como Funciona</a>
          <a href="#">Preços</a>
          <a href="#">Casos de Uso</a>
          <a href="#">Perguntas Frequentes</a>
        </nav>
        <div className="actions">
          <a href="#" className="btn-outline">Criar Conta</a>
          <a href="#" className="btn">Login</a>
        </div>
      </div>
    </header>
  );
}
