export class Favorites {
    constructor(root){
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        this.entries = [
            {
                login: 'nikollllllas',
                name: 'nikollas ohta',
                public_repos: 10,
                followers: '2000'
            },
            {
                login: 'maykbrito',
                name: 'Mayk Brito',
                public_repos: 80,
                followers: '100000'
            }
        ]
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