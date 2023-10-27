import { Component } from "react";
import { Card, CardGroup } from "react-bootstrap";
// import { Card } from "react-bootstrap/esm";

// const Film = (props) => {
//   fetch("http://www.omdbapi.com/?apikey=e65f3c96&s=shameless")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       return data.map((search) => {
//         <Card>
//           <Card.Img>
//             <img src={search.poster} />
//           </Card.Img>
//         </Card>;
//       });
//     })
//     .catch((err) => console.log(err));
// };

class Film extends Component {
  state = {
    search: [],
  };

  getData = async () => {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=e65f3c96&s=shameless"
    );
    if (response.ok) {
      const data = await response.json();
      this.setState({ search: data });
      console.log(data);
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return <h3>Serie Tv</h3>;
    this.state.search.map((searchs) => {
      return (
        <Card>
          <Card.Img>{searchs.poster}</Card.Img>
        </Card>
      );
    });
  }
}

export default Film;

// this.state.search.map((data)=>{ return <div>aaaaa</div>;})
