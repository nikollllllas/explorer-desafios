import { GithubUser } from "./GithubUser.js";

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem("@github-favorites:")) || [];
  }

  save() {
    localStorage.setItem("@github-favorites:", JSON.stringify(this.entries));
  }

  async add(username) {
    try {
      const userExists = this.entries.find((entry) => entry.login === username);

      if (userExists) {
        throw new Error("Usuário já favoritado");
      }

      const user = await GithubUser.search(username);

      if (user.login === undefined) {
        throw new Error("Usuário não encontrado");
      }

      this.entries = [user, ...this.entries];
      this.update();
      this.save();
    } catch (error) {
      alert(error.message);
    }
  }

  delete(user) {
    const filteredEntries = this.entries.filter(
      (entry) => entry.login !== user.login
    );

    this.entries = filteredEntries;
    this.update();
    this.save();
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);
    this.tbody = this.root.querySelector("tbody");

    this.onadd();
    this.update();
  }

  onadd() {
    const addButton = this.root.querySelector(".search button");

    addButton.onclick = () => {
      const { value } = this.root.querySelector(".search input");
      const username = value;

      this.add(username);
    };
  }

  update() {
    this.removeAllTableRows();

    this.entries.forEach((user) => {
      const row = this.createNewTableRow();

      row.querySelector(
        ".user img"
      ).src = `https://github.com/${user.login}.png`;

      row.querySelector(".user img").alt = `Foto de perfil de ${user.name}`;

      row.querySelector(".user a").href = `https://github.com/${user.login}`;

      row.querySelector(".user p").textContent = user.name;

      row.querySelector(".user span").textContent = user.login;

      row.querySelector(".repositories").textContent = user.public_repos;

      row.querySelector(".followers").textContent = user.followers;

      row.querySelector(".remove").onclick = () => {
        const isOk = confirm("Tem certeza que deseja remover?");
        if (isOk) {
          this.delete(user);
        }
      };

      this.tbody.appendChild(row);
    });
  }

  createNewTableRow() {
    const tr = document.createElement("tr");

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
        `;

    return tr;
  }

  removeAllTableRows() {
    this.tbody.querySelectorAll("tr").forEach((tr) => tr.remove());
  }
}
