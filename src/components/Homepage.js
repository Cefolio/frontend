import React, { Component } from "react";
import ChefCardContainer from "../containers/ChefCardContainer";
import SearchForm from "../components/SearchForm";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <SearchForm />
        <ChefCardContainer />
      </>
    );
  }
}
