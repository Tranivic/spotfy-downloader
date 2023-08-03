import { Component } from "react";
import "./Main.css";
import InputForm from "../../components/InputForm/InputForm";
import TrackList from "../../components/TrackList/TrackList";

export default class Main extends Component {
  render() {
    return (
      <main className="flex flex-col items-center">
        <InputForm />
        <TrackList />
      </main>
    );
  }
}
