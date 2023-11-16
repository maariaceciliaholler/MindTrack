# MindTrack - Sistema de Gerenciamento de Anotações

Este é um projeto de um sistema de gerenciamento de tarefas e notas, desenvolvido para a matéria de Desenvolvimento WEB. O sistema permite que os usuários criem, organizem e gerenciem suas tarefas, notas e lembretes de maneira eficiente.

## Modelo Conceitual 

![EntidadeMindTrack](https://github.com/maariaceciliaholler/MindTrack/assets/52547463/3781d9df-70aa-442d-9d82-327620d7bf8a)

## Requisitos Funcionais

| ID   | Descrição                                                | Versão | Status       |
|------|----------------------------------------------------------|--------|--------------|
| RF001| O sistema deve manter usuários.                          | 1.0    | Finalizado |
| RF002| O sistema deve manter lista de tarefas.                  | 1.0    | Finalizado |
| RF003| O sistema deve manter notas.                             | 1.0    | Finalizado |
| RF004| O sistema deve manter lembrete.                          | 1.0    | Finalizado |
| RF005| O sistema deve manter etiqueta.                          | 1.0    | Finalizado |
| RF006| O sistema deve permitir a exclusão permatente de uma anotação.    | 1.0    | Finalizado |
| RF007| O sistema deve permitir filtrar as anotações por data de criação. | 1.0    | Finalizado |
| RF008| O sistema deve permitir filtrar as anotações por conteúdo. | 1.0    | Finalizado |
| RF009| O sistema deve permitir selecionar a cor de fundo da anotação. | 1.0    | Finalizado |
| RF010| O sistema deve permitir acessar as anotações excluídas.  | 1.0    | Finalizado |
| RF011| O sistema deve permitir que a nota excluída seja restaurada. | 1.0    | Finalizado |
| RF012| O sistema deve possuir página de 404. | 1.0    | Finalizado |
| RF013| O sistema deve possuir página de home. | 1.0    | Finalizado |
| RF014| O sistema deve possuir menu de navegação intuitiva. | 1.0    | Finalizado |


## Requisitos Não Funcionais

| ID | Categoria | Descrição |
|----|-----------|-----------|
| RNF001 | Usabilidade | A interface deve ser intuitiva, amigável e responsiva. |
| RNF002 | Performance | O sistema deve ser otimizado para executar todos os processos em até 5 segundos. |
| RNF003 | Segurança | Apenas usuários autorizados podem fazer alterações. |
| RNF004 | Segurança | O sistema deve validar a integridade do e-mail. |
| RNF005 | Portabilidade | O sistema deve operar em todos os dispositivos web. |
| RNF006 | Usabilidade | A linguagem do sistema deve ser de fácil compreensão. |

## Regras de Negócio

| ID | Descrição | Versão |
|----|-----------|--------|
| RN001 | O cadastro de usuário deve conter nome, e-mail e senha. | 1.0 |
| RN002 | Os usuários precisam realizar login para gerenciar suas anotações. | 1.0 |
| RN003 | Lembretes poderão ter apenas o conteúdo como também a data inserida. | 1.0 |
| RN004 | Os usuários só terão acesso às suas próprias notas, etiquetas, listas e lembretes. | 1.0 |
| RN005 | Ao excluir uma nota, será possível verificar ela na rotina de lixeira. | 1.0 |
| RN006 | Ao restaurar uma nota excluída, ela retorna para a rotina de notas. | 1.0 |
| RN007 | Ao excluir permanentemente uma nota excluída, ela sumirá da lixeira. | 1.0 |
| RN008 | Será possível alterar a cor de fundo das Notas após criadas. | 1.0 |
| RN009 | Lembretes, Listas de Tarefa e Etiquetas será possível apenas Adicionar, Editar e Excluir. | 1.0 |
| RN010 | Lembretes, Listas de Tarefa e Etiquetas não serão listadas na lixeira ao realizar a exclusão. | 1.0 |
| RN011 | Lembretes, Listas de Tarefa e Etiquetas serão sempre excluídas permanentemente. | 1.0 |
| RN012 | Os usuários devem fornecer informações de cadastro válidas. | 1.0 |
| RN013 | Ao informar qualquer rota inválida será apresentada a página de Not Found. | 1.0 |

## Instalação

1. Pré-requisitos
   a. Possuir Postgresql
   b. Possuir Java
   c. Possuir Javascript
   d. Possuir IntelliJ
2. Clone este repositório
3. No intelliJ abra a pasta mindtrackProject
   a. Clique em Run, assim o backend estará rodando
4. No VSCode abra a pasta mindtrackweb
   a. Rode o comando "npm install"
   b. Rode o comando "npm run dev"
5. Pronto, agora basta acessar pelo navegador o projeto.

---
Este projeto foi desenvolvido por Eduardo Schork, Luíza Nurnberg e Maria Cecilia Holler. 
