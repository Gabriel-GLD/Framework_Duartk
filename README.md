# Framework_Duartk
Inspirado no Bootstrap, mas deixa os sistemas com a formatacao inspirada no FrontEnd do Governo Federal.
Documentacao com modelos de como se usar para montar uma interface intuitiva rapidamente
<!-- 

  DOCUMENTAÇÃO DUART_SYSTEM ✋😎🤚

EX DE FORMATAÇÃO PADRÃO COM (ALINHAMENTO GOVBR):

====*HEADER* EX:====

   <header class="header">
    <div class="left">
      <button class="btn-header" onclick="toggleSidebar()">☰</button>
      <span class="title">NOME DO SISTEMA</span>
    </div>

    <div class="right">
      ====Espaço futuro (perfil, ações, etc)====
    </div>
  </header>

====FIM HEADER EX====






===SCRIPT PARA BOTÃO DE *ESCONDER SIDEBAR*===

  function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');

    if (window.innerWidth <= 1200) {
      sidebar.classList.toggle('open');
    } else {
      document.body.classList.toggle('sidebar-hidden');
    }
  }


====FIM SCRIPT SIDEBAR====







===== *SIDEBAR* EX: ===== 

  <aside class="sidebar">
    <a href="#" class="active">Dashboard</a>
    <a href="#">Alunos</a>
    <a href="#">Turmas</a>
    <a href="#">Relatórios</a>
  </aside>

====FIM SIDEBAR====







EX FORMATAÇÃO *MAIN*, E COMPONENTES DENTRO DELE:

====MAIN, CARDS E FORM GROUP EX:====

  <div class="main">

    ==card com form==

      <div class="card">
        <h1>Cadastrar Aluno</h1>

        ==form group para inputs==
        
        <div class="form-group">
          <label>Nome</label>
          <input type="text" placeholder="Nome completo">
        </div>

        <div class="form-group">
          <label>Email</label>
          <input type="email" class="error" placeholder="email@exemplo.com">
          <div class="feedback error">Email inválido</div>
        </div>

  </div>


====FIM MAIN CARDS ETC...====







====INPUTS BUTTONS EX:===

      <div class="card">
      <h1>Cadastrar Aluno</h1>

      <div class="form-group">
        <label>Nome</label>
        <input type="text" placeholder="Nome completo">
      </div>

      <div class="form-group">
        <label>Email</label>
        <input type="email" class="error" placeholder="email@exemplo.com">
        <div class="feedback error">Email inválido</div>
      </div>

      <div class="form-group">
        <label>Status</label>
        <select class="success">
          <option>Ativo</option>
          <option>Inativo</option>
        </select>
      </div>

      <div class="flex">
        <button class="button button-success">Salvar</button>
        <button class="button button-outline">Cancelar</button>
      </div>
    </div>


====FIM INPUTS BUTTONS====







====TABLES EX:====

    ==TABELA COM BOTÕES==

    <div class="card">
      <h1>Lista de Alunos</h1>

      <div class="table-container">
        <table class="table-fixed">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Turma</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>João Pedro</td>
              <td>A1</td>
              <td><span class="status success">Ativo</span></td>
              <td class="table-actions">
                <button class="button button-outline btn-open-modal">Editar</button>
              </td>
            </tr>

            <tr>
              <td>Maria Souza</td>
              <td>B2</td>
              <td><span class="status error">Inativo</span></td>
              <td class="table-actions">
                <button class="button button-danger">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


====FIM TABLES====







===CHECKBOX EX:===


  <div class="form-group">
        <div class="filter-title">Situação</div>

        <div class="filter-options">
          <label class="checkbox">
            <input type="checkbox">
            <span>Ativo</span>
          </label>

          <label class="checkbox">
            <input type="checkbox">
            <span>Inativo</span>
          </label>
        </div>
      </div>


====FIM CHECKBOX====






====CHECKBOX PARA BLOQUEAR CONTEUDO DENTRO DELE====

  <!-- BLOQUEAR CONTEÚDO COM CHECKBOX --
      <div class="card">

        <!-- CHECK PARA O BLOQUEIO --
        <div class="form-group">
          <label class="checkbox">
            <input type="checkbox"  data-lock="block1">   <==COLOCAR ESSA PADRONIZAÇÃO NO CHECK Q DESEJA UTILIZAR PARA A AÇÃO, ATRIBUINDO UM ID EX:"block1"
              <span>Bloquear Dados</span>
          </label>
        </div>
   






      ===== CHECKBOX PARA BLOQUEAR O BLOQUEADOR =====

      <div class="form-group">
        <label class="checkbox">
          <input type="checkbox" data-lock-controller="dados">      <<==== APENAS COLOCAR NO CHECK QUE DESEJA PARA BLOQUEAR COM O ID DELE
          <span>bloquear bloqueador de Dados</span>
        </label>
      </div>


        

        <!-- CONTEUDO DENTRO Q VAI SER BLOQUEADO --

        <div class="lock-area" data-lock-area="block1">             <===COLOCAR TODO O CONTEUDO QUE VAI SER BLOQUEADO AO CLICAR DENTRO DESSA DIV, JUNTO COM O ID DEFINIDO


          <div class="form-group">
            <label>Nome</label>
            <input type="text" placeholder="Nome completo">
          </div>

          <div class="form-group">
            <label>Email</label>
            <input type="email" class="error" placeholder="email@exemplo.com">
            <div class="feedback error">Email inválido</div>
          </div>

          <div class="form-group">
            <label>Status</label>
            <select class="success">
            <option>Ativo</option>
            <option>Inativo</option>
          </select>
          </div>

          <h1>Check</h1>

          <div class="form-group">

            <label class="checkbox">
              <input type="checkbox">
              <span>Teste</span>
            </label>

          </div>


        </div>



      </div>



====FIM CHECK BLOQUEAR CONTEUDO====

  







====CHECKBOX DE GERENCIADOR CONTEUDO====


    <div class="card">                       <<<<=== ***TODO*** O CONTEUDO DEVE SER ENVOLVIDO PELOS CARDS

        <h3>
          Categorias do Caso
        </h3>

        <!-- CHECKBOXES --
        <div class="toggle-group">            <<<<=== COLOCAR TODO O CONTEUDO DO TOGGLE-CHECK DENTRO DELE

          <label class="toggle-check">        <<<= envolve o checkbox e os nomes dos "quadrados de ativação"

            <input
              type="checkbox"
              data-toggle="criancas"
            >

            <span>
              Crianças e Adolescentes
            </span>

          </label>



          <label class="toggle-check">

            <input
              type="checkbox"
              data-toggle="idosos"
            >

            <span>
              Idosos
            </span>

          </label>



          <label class="toggle-check">

            <input
              type="checkbox"
              data-toggle="pcd"
            >

            <span>
              PCD
            </span>

          </label>

        </div>



        <!-- ABAS --
        <div class="toggle-tabs"></div>                   <<<==== OBRIGATORIO PARA FAZER A DIVISÃO DOS CONTEUDOS



        ====CONTEÚDOS====

        <!-- CRIANÇAS --
        <div
          class="toggle-content"                          <<<==== COLOQUE TODO O CONTEUDO QUE SERA GERENCIADO PELO CHECKBOX DENTRO DELE
          data-content="criancas"                         <<<==== COLOQUE O MESMO NOME DATA-CONTENT QUE COLOCOU NOS CHECKBOX 
          >

          <div class="form-group">

            <label>
              Nome da criança
            </label>

            <input type="text">

          </div>

        </div>





        <!-- IDOSOS --
        <div
          class="toggle-content"
          data-content="idosos"
          >

          <div class="form-group">

            <label>
              Responsável
            </label>

            <input type="text">

          </div>

        </div>





        <!-- PCD --
        <div
          class="toggle-content"
          data-content="pcd"
          >

          <div class="form-group">

            <label>
              Tipo de deficiência
            </label>

            <input type="text">

          </div>

        </div>

    </div>




====FIM CHECK ESCONDER====








====RADIO (ESTILO DE CHECK DIFERENTE QUE SUPORTA APENAS UMA MARCAÇÃO)




        <div class="form-group">
        <label class="radio">                   <<<<======= QUASE MESMA UTILIZAÇÃO DO CHECK NORMAL, MAS COM A CLASS DIFERENTE 
          <input type="radio" name="tipo">
          <span>Pessoa Física</span>
        </label>

        <label class="radio">
          <input type="radio" name="tipo">
          <span>Pessoa Jurídica</span>
        </label>

        <label class="radio">
          <input type="radio" name="tipo">
          <span>Alienígena</span>
        </label>




====FIM RADIO====

    





====MODAL EX:====


    "X"  NO CANTO SUPERIOR DIREITO PARA MODAIS 

  *****SCRIPTS PRÉ DEFINIDOS PARA OS MODAIS*****



    ****ABRIR MODAL (BASTA COLOCAR O SEGUINTE COMANDO AO LADO DO CLASS)****

    EX:

        <button class="button"

          data-modal-open="modal-content"  *SEMPRE MANTENHA OS MODAIS COM SEUS IDs*

        >

        <button class="button"

          data-modal-open="modal-success"  *APENAS COLOCAR O ID DO MODAL QUE DESEJA EM "" *
        >

    
    ****PARA FECHAR OS MODAIS ****

    EX:

        <button class="button"

          data-modal-close >  *COLOQUE NO BOTÃO OU LOCAL ESPECIFICO ONDE DESEJA FECHAR O MODAL (MAS CLICANDO FORA DELE E EM "esc" VC TAMBÉM FECHA O MODAL)
          
          Fechar

        </button>




    !!!!! FUNCIONA COM QUALQUER TAG HTML, NÃO APENAS COM BOTÕES, BASTA APENAS COLOCAR O COMANDO ONDE DESEJAR!!!!


  ***FIM EXs DE SCRIPTS PARA MODAIS










  MODAL PARA CONTEÚDO BÁSICO


  <div class="modal" id="modal-content">

    <div>


        <div class="right"  data-modal-close >     
          ✕                                            <<<=== "X" PARA FECHAR O MODAL (ainda em desenvolvimento, mas funcionando)
        </div>

      <h2>
        Editar Aluno
      </h2>

      <div class="modal-body">

        <div class="form-group">
          <label>Nome</label>
          <input type="text" value="João Pedro">
        </div>

        <div class="form-group">
          <label>Turma</label>

          <select>
            <option>A1</option>
            <option>B2</option>
          </select>
        </div>

        <!-- collapse funcionando dentro do modal 
        <div class="gov-collapse">

          <div class="gov-collapse-header">

            <span class="gov-collapse-icon">▾</span>

            <span>
              Informações Avançadas
            </span>

          </div>

          <div class="gov-collapse-content">

            <p>
              Esse conteúdo pode crescer sem quebrar o modal.
            </p>

            <div class="table-container">

              <table>

                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Gabriel</td>
                    <td>Ativo</td>
                  </tr>

                  <tr>
                    <td>Maria</td>
                    <td>Inativo</td>
                  </tr>

                  <tr>
                    <td>João</td>
                    <td>Ativo</td>
                  </tr>

                </tbody>

              </table>

            </div>

          </div>

        </div>

        <!-- vários campos para demonstrar scroll 
        <div class="form-group">
          <label>Email</label>
          <input type="email">
        </div>

        <div class="form-group">
          <label>Telefone</label>
          <input type="text">
        </div>

        <div class="form-group">
          <label>Observações</label>
          <textarea rows="5"></textarea>
        </div>

        <div class="flex">

          <button class="button button-success">
            Salvar
          </button>

          <button class="button button-outline" data-modal-close>
            Fechar
          </button>

        </div>

      </div>

    </div>

  </div>



  <!--====TAGS DIFERENTES NOS ***MODAIS DE AVISO**====-


  MODAL DE CONFIRMAÇÃO

  <div class="modal info" id="modal-info">

    <div>
      <h3>Carregamento</h3>

      <div class="modal-body-aviso">                       <<<<<=========

        <p>
          Os dados foram salvos com sucesso.
        </p>

        <div class="">

          <button class="button button-outline" data-modal-close>
            Deseja continuar?
          </button>

        </div>

      </div>

    </div>

  </div>






  MODAL DE SUCESSO


  <div class="modal success" id="modal-success">

    <div>

      <h3>
        Sucesso
      </h3>

      <div class="modal-body-aviso">

        <p>
          Os dados foram salvos com sucesso.
        </p>

        <div class="">

          <button class="button button-success" data-modal-close>
            OK
          </button>

        </div>

      </div>

    </div>

  </div>




    MODAL DE ERRO


      <div class="modal error" id="modal-error">

        <div>

          <h3>
            Erro
          </h3>

          <div class="modal-body-aviso">

            <p>
              Não foi possível concluir a operação.
            </p>

            <div class="">

              <button class="button button-danger" data-modal-close>
                Fechar
              </button>

            </div>

          </div>

        </div>

      </div>

  <!--====FIM MODAIS DE AVISO====--






    ***====MODAIS MAIORES OPCIONAIS=====***

      <!-- 
        modal normal: 600px
        lg: 800px
        xl: 1100 
        FULL:1400




        MESMO ESQUEMA DE UTILIZAÇÃO DOS NORMAIS (SUPORTANDO MAIS CONTEUDO)
       -->

      <!-- ====MODAL LARGO==== --

  <div class="modal lg" id="modal-lg">

    <div>

      <h2>
        Relatório Completo
      </h2>

      <div class="modal-body">

        <div class="form-group">
          <label>Nome do Responsável</label>
          <input type="text" placeholder="Digite o nome">
        </div>

        <div class="form-group">
          <label>Descrição</label>

          <textarea rows="5">
            Relatório geral do aluno e informações complementares.
          </textarea>
        </div>

        <div class="table-container">

          <table class="table-fixed">

            <thead>
              <tr>
                <th>Aluno</th>
                <th>Status</th>
                <th>Turma</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Gabriel</td>
                <td>Ativo</td>
                <td>A1</td>
              </tr>

              <tr>
                <td>Maria</td>
                <td>Inativo</td>
                <td>B2</td>
              </tr>

              <tr>
                <td>João</td>
                <td>Ativo</td>
                <td>C3</td>
              </tr>

            </tbody>

          </table>

        </div>

        <div class="flex">

          <button class="button button-success">
            Salvar
          </button>

          <button class="button button-outline" data-modal-close>
            Fechar
          </button>

        </div>

      </div>

    </div>

  </div>







  
  <!-- ====MODAL XL==== --

  <div class="modal xl" id="modal-xl">

    <div>

      <h2>
        Dashboard Geral
      </h2>

      <div class="modal-body">

        <div class="card">

          <h3>
            Estatísticas
          </h3>

          <div class="table-container">

            <table class="table-fixed">

              <thead>
                <tr>
                  <th>Curso</th>
                  <th>Alunos</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>Informática</td>
                  <td>42</td>
                  <td>Ativo</td>
                </tr>

                <tr>
                  <td>Administração</td>
                  <td>31</td>
                  <td>Ativo</td>
                </tr>

                <tr>
                  <td>Enfermagem</td>
                  <td>18</td>
                  <td>Manutenção</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

        <div class="card">

          <h3>
            Informações Complementares
          </h3>

          <p>
            Esse modal pode receber praticamente o mesmo conteúdo da interface principal sem quebrar layout.
          </p>

          <div class="form-group">
            <label>Observações</label>
            <textarea rows="6"></textarea>
          </div>

        </div>

        <div class="flex">

          <button class="button button-success">
            Confirmar
          </button>

          <button class="button button-outline" data-modal-close>
            Fechar
          </button>

        </div>

      </div>

    </div>

  </div>








  
    <!-- ====MODAL FULL==== --

    <div class="modal full" id="modal-full">

      <div>

        <h2>
          Painel Administrativo Completo
        </h2>

        <div class="modal-body">

          <!-- CARD --
          <div class="card">

            <h3>
              Informações Gerais
            </h3>

            <div class="flex">

              <div class="form-group">
                <label>Nome</label>
                <input type="text" placeholder="Digite o nome">
              </div>

              <div class="form-group">
                <label>Email</label>
                <input type="email" placeholder="Digite o email">
              </div>

            </div>

            <div class="form-group">
              <label>Descrição</label>

              <textarea rows="5">
                Sistema completo de gerenciamento.
              </textarea>
            </div>

          </div>





          <!-- CARD --
          <div class="card">

            <h3>
              Tabela de Usuários
            </h3>

            <div class="table-container">

              <table class="table-fixed">

                <thead>

                  <tr>
                    <th>Nome</th>
                    <th>Cargo</th>
                    <th>Status</th>
                    <th>Ações</th>
                  </tr>

                </thead>

                <tbody>

                  <tr>
                    <td>Gabriel</td>
                    <td>Administrador</td>
                    <td>
                      <span class="status success">
                        Ativo
                      </span>
                    </td>

                    <td>
                      <button class="button button-outline">
                        Editar
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>Maria</td>
                    <td>Secretária</td>
                    <td>
                      <span class="status warning">
                        Pendente
                      </span>
                    </td>

                    <td>
                      <button class="button button-outline">
                        Editar
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>João</td>
                    <td>Professor</td>
                    <td>
                      <span class="status error">
                        Inativo
                      </span>
                    </td>

                    <td>
                      <button class="button button-outline">
                        Editar
                      </button>
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>

          </div>





          <!-- CARD --
          <div class="card">

            <h3>
              Configurações Avançadas
            </h3>

            <!-- collapse --
            <div class="gov-collapse">

              <div class="gov-collapse-header">

                <span class="gov-collapse-icon">
                  ▾
                </span>

                <span>
                  Exibir configurações
                </span>

              </div>

              <div class="gov-collapse-content">

                <div class="form-group">

                  <label>Servidor</label>

                  <input type="text" placeholder="Servidor principal">

                </div>

                <div class="form-group">

                  <label>Porta</label>

                  <input type="text" placeholder="8080">

                </div>

              </div>

            </div>

          </div>





          <!-- CARD --
          <div class="card">

            <h3>
              Categorias Dinâmicas
            </h3>

            <div class="toggle-group">

              <label class="toggle-check">

                <input
                  type="checkbox"
                  data-toggle="financeiro-full"
                >

                <span>
                  Financeiro
                </span>

              </label>

              <label class="toggle-check">

                <input
                  type="checkbox"
                  data-toggle="usuarios-full"
                >

                <span>
                  Usuários
                </span>

              </label>

            </div>

            <!-- abas --
            <div class="toggle-tabs"></div>

            <!-- conteúdo --
            <div
              class="toggle-content"
              data-content="financeiro-full"
            >

              <div class="form-group">

                <label>Saldo</label>

                <input type="text" value="R$ 15.000">

              </div>

            </div>

            <div
              class="toggle-content"
              data-content="usuarios-full"
            >

              <div class="form-group">

                <label>Total de usuários</label>

                <input type="text" value="325">

              </div>

            </div>

          </div>





          <!-- FOOTER --
          <div class="flex">

            <button class="button button-success">
              Salvar Tudo
            </button>

            <button class="button button-outline" data-modal-close>
              Fechar
            </button>

          </div>

        </div>

      </div>

    </div>



====FIM MODAL====






====ALERT EX:====


  <div class="card">
      <div class="alert alert-success">
        Sistema carregado com sucesso!
      </div>
    </div>


====FIM ALERT====


====COLLAPSE EX:====

  <div class = "card">
      <div class="gov-collapse">

        <div class="gov-collapse-header">

          <span class="gov-collapse-icon"> ▾ </span>   = icone obrigatório (junto com o texto para clicar e fazer a ativação)

          <span>
          Filtros avançados
          </span>

        </div>

        <div class="gov-collapse-content">

          <!-- conteúdo 

        </div>

      </div>


    </div>


====FIM COLLAPSE====








====BOTÃO QUE ACOMPANHA A TELA (LOCALIZADO NO CANTO INFERIOR DIREITO)====






====FIM BOTÃO QUE ACOMPANHA A TELA====




















 -->
