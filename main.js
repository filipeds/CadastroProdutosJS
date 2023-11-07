class Aluno{

    constructor() {
        this.id = 1;
        this.nome = '';
        this.idade = 0;
        this.email = '';
        this.cpf = '';
        this.lstAlunos = [];
        this.idEdicao = null;
    }

    adicionar() {
        let aluno = this.lerProdutos();
        
        if (this.idEdicao != null) {
            for (let index = 0; index < this.lstAlunos.length; index++) {
                console.log('Id Encontrado: ', this.lstAlunos[index].Id);
                console.log('Id Encontrado: ', this.lstAlunos[index]);
                console.log('Id Edicap: ', this.idEdicao);
                if (this.lstAlunos[index].Id == this.idEdicao) {
                    this.lstAlunos[index].nome  = aluno.nome;
                    this.lstAlunos[index].idade = aluno.idade;
                    this.lstAlunos[index].email = aluno.email;
                    this.lstAlunos[index].cpf   = aluno.cpf;
                    console.log('Aluno atualizado: ', this.lstAlunos[index]);
                    document.getElementById('buttonAdicionar').innerText = 'Adicionar';
                }
            }
            this.idEdicao = null;

        } else {
            if (this.validaCampos(aluno)) {
                this.adicionaItem(aluno);
            }
        }

        console.log('Alunos: ', this.lstAlunos);
        this.listaAlunos();
        this.apagaValores();
    }

    cancelar() {
        this.apagaValores();
    }

    editar(idAluno) {
        console.log('Editar');
        for (let index = 0; index < this.lstAlunos.length; index++) {
            const element = this.lstAlunos[index];
            if (element.Id == idAluno) {
                this.idEdicao = idAluno;
                document.getElementById('nome').value = element.nome;
                document.getElementById('idade').value = element.idade;
                document.getElementById('email').value = element.email;
                document.getElementById('cpf').value = element.cpf;
            }
        }
        document.getElementById('buttonAdicionar').innerText = 'Atualizar';
    }

    deletar(idAluno) {
        console.log('Id do aluno: ', idAluno);
        let tbody = document.getElementById('tbody')
        for (let index = 0; index < this.lstAlunos.length; index++) {
            const element = this.lstAlunos[index];
            if (element.Id == idAluno) {
                console.log('lista aluno: ', this.listaAlunos);
                this.lstAlunos.splice(index, 1);
                tbody.deleteRow();
            }
        }
    }

    lerProdutos() {
        let aluno = {}

        aluno.Id = this.id;
        aluno.nome = document.getElementById('nome').value;
        aluno.idade = document.getElementById('idade').value;
        aluno.email = document.getElementById('email').value;
        aluno.cpf = document.getElementById('cpf').value;

        return aluno;
    }

    apagaValores() {
        document.getElementById('nome').value = '';
        document.getElementById('idade').value = null;
        document.getElementById('email').value = '';
        document.getElementById('cpf').value = '';
    }

    validaCampos(aluno) {
        let msg = '';

        for (let index = 0; index < this.lstAlunos.length; index++) {
            const element = this.lstAlunos[index];
            if (aluno.nome == element.nome && aluno.cpf == element.cpf) {

                msg += 'O aluno: ' + aluno.nome + ', já existe \n';
            }
        }

        if(aluno.nome == '') {
            msg += 'Informe o nome do aluno \n';
        }

        if(aluno.preco == '') {
            msg += 'Informe o preço do aluno \n';
        }

        if (msg != '') {
            alert(msg);
            return false;
        }

        return true;
    }

    adicionaItem(aluno) {
        this.lstAlunos.push(aluno);
        this.id++;
    }

    listaAlunos() {
        let tbody = document.getElementById('tbody')
        tbody.innerText = '';

        for (let index = 0; index < this.lstAlunos.length; index++) {
            const element = this.lstAlunos[index];
            
            let tr = tbody.insertRow();

            let tdId = tr.insertCell();
            let tdNome = tr.insertCell();
            let tdIdade = tr.insertCell();
            let tdEmail = tr.insertCell();
            let tdCpf = tr.insertCell();
            let tdAcoes = tr.insertCell();

            tdId.innerText = element.Id;
            tdNome.innerText = element.nome;
            tdIdade.innerText =  element.idade;
            tdEmail.innerText =  element.email;
            tdCpf.innerText =  element.cpf;

            let buttonEdit = document.createElement('img');
            buttonEdit.src="images/edit.png" 
            buttonEdit.setAttribute("onclick", "aluno.editar("+element.Id+")");

            let buttonDell = document.createElement('img');
            buttonDell.src="images/delete.png";
            buttonDell.setAttribute("onclick", "aluno.deletar("+element.Id+")");
    
            tdAcoes.appendChild(buttonEdit);
            tdAcoes.appendChild(buttonDell);

        }
        
    }

}

var aluno = new Aluno();
