import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/Logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button>Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/39503968?s=460&u=3900177c59c7f2c6f3f7571b83b38a83703c278f&v=4"
            alt="Filipe Alves"
          />
          <div>
            <strong>Desenvolvedor Web</strong>
            <p>Em busca de conhecimento</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/39503968?s=460&u=3900177c59c7f2c6f3f7571b83b38a83703c278f&v=4"
            alt="Filipe Alves"
          />
          <div>
            <strong>Desenvolvedor Web</strong>
            <p>Em busca de conhecimento</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/39503968?s=460&u=3900177c59c7f2c6f3f7571b83b38a83703c278f&v=4"
            alt="Filipe Alves"
          />
          <div>
            <strong>Desenvolvedor Web</strong>
            <p>Em busca de conhecimento</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
