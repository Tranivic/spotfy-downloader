import { Component } from "react";
import "./Main.css";
import InputForm from "../../components/InputForm/InputForm";

export default class Main extends Component {
  render() {
    return (
      <main className="flex flex-col">
        <div className="info-container">
          <h1 className="text-2xl pb-4">Enter link</h1>
          <p className="text-2xl pb-4 text-zinc-00">
            Enter a Spotify link that you would like to download tracks from.
            Artist & podcast links aren't supported.
          </p>
        </div>
        <div className="form-container">
          <InputForm />
        </div>
      </main>
    );
  }
}
