export default class PokemonTCG {
  _apiBase = "https://api.pokemontcg.io/v1";

  getResources = async url => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  };

  getSets = async () => await this.getResources("/sets/");

  getСards = async code => await this.getResources(`/cards?setCode=${code}`);
}
