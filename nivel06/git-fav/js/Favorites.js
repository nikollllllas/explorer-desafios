export class Favorites {
    constructor(root){
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        this.entries = JSON.parse(localStorage.getItem('favorites')) || []
    }

    delete(user) {
        const filteredEntries = this.entries.filter(entry => entry.login !== user.login)
        
        this.entries = filteredEntries
        this.update()
    }
}

export class FavoritesView extends Favorites {
    constructor(root){
        super(root)
        this.tbody = this.root.querySelector('tbody')
        

        this.update()
    }

    update(){
        this.removeAllTableRows()
        
        this.entries.forEach(user => {
            const row = this.createNewTableRow()

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`

            row.querySelector('.user img').alt = `Foto de perfil de ${user.name}`	

            row.querySelector('.user p').textContent = user.name

            row.querySelector('.user span').textContent = user.login

            row.querySelector('.repositories').textContent = user.public_repos

            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que deseja remover?') 
                if (isOk) {
                    this.delete(user)
                }
            }
            

            this.tbody.appendChild(row)
        })
    }

    createNewTableRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = `
        <td class="user">
            <img src="" alt="">
            <a href="" target="_blank">
                <p>Nome</p>
                <span>username</span>
            </a>
        </td>
        <td class="repositories">Repositorios</td>
        <td class="followers">Seguidores</td>
        <td>
            <button class="remove">Remover</button>
        </td>
        `

        return tr
    }

    removeAllTableRows() {
        this.tbody.querySelectorAll('tr')
            .forEach(tr => tr.remove())
    }
}