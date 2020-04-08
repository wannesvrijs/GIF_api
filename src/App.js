import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import Loading from "./components/Loading";
import Results from "./components/Results";
import Axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gif: {
        loading: false,
        error: false,
        data: [],
        firstSearch: true,
      },
    };
  }

  getGif = (str) => {
    this.setState({
      gif: {
        ...this.state.gif,
        loading: true,
        firstSearch: false,
      },
    });
    Axios.get(
      "https://api.tenor.com/v1/search?q=" + str + "&key=BAM5FNVOCTCI&limit=10"
    )
      .then((result) => {
        console.log(result);
        this.setState({
          gif: {
            ...this.state.gif,
            loading: false,
            data: result.data.results,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          gif: {
            ...this.state.gif,
            loading: false,
            error: true,
          },
        });
      });
  };

  render() {
    const resultData = {
      data: this.state.gif.data,
      loading: this.state.gif.loading,
      firstSearch: this.state.gif.firstSearch,
    };
    return (
      <>
        <SearchBar getGif={this.getGif} />
        {this.state.gif.loading && <Loading />}
        <Results {...resultData} />
      </>
    );
  }
}
