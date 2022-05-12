class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }
  async mostPopular() {
    const response = await fetch("all", this.getRequestOptions).then(
      (response) => response.json()
    );
    const result = await response.json();
    return result.Data;
    // .then((data) => console.log(data))
  }

  async search(query) {
    const response = await fetch(
      fetch(`/contents/title/${query}`, this.getRequestOptions)
    );
    const result = await response.json();
    return result.Data;
  }
}

export default Youtube;
