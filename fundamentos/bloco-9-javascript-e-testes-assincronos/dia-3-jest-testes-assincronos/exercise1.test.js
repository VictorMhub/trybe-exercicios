// githubApi.test.js
const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

it('Checa se ao receber uma url do repositório recebe uma lista com sd-01-week4-5-project-todo-list e sd-01-week4-5-project-meme-generator inclusos', async () => {
  const url = 'https://api.github.com/orgs/tryber/repos';

  expect(await getRepos(url)).toContain("sd-01-week4-5-project-todo-list");
  expect(await getRepos(url)).toContain("sd-01-week4-5-project-meme-generator");
});