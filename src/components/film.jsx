import { Component } from "react";

class Film extends Component {
  getFilm = () => {
    fetch("https://www.omdbapi.com/?apikey=e65f3c96&s=haryypotter")
      .then((res) => {
        if (res.ok) {
          console.log(res.json());
          return res.json();
        } else {
          throw new Error("error getting data");
        }
      })
      .then((data) => {
        this.setState({ search: data });
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return <div>aaaaaaa</div>;
  }
}

export default Film;
