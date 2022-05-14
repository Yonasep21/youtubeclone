class Youtube {
    constructor(key){
        this.key = key;
        this.getRequestOptions={
            method: 'GET',
            redirect: 'follow'
          };
    }
    mostPopular(){
          return fetch("all", this.getRequestOptions)
            .then(response => response.json())
            .then(result => result.Data)
            // .then((data) => console.log(data))

    }

    search(query){
        return fetch(
          fetch(`/contents/title/${query}`, this.getRequestOptions)
            .then(response => response.json())
            .then(result => result.Data)
        )
}
}

export default Youtube