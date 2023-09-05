import React, { Component } from "react";
import axios, { isCancel, AxiosError } from "axios";
import Button from "react-bootstrap/Button";
import { event, isEmptyObject } from "jquery";
import add_whiteList from "./Playstation";
import volumes_range from "./volumes_range";
import status_play from "./status_play";
class HomePgae extends Component {
  state = {
    radios: [],
    radios_with_out_overwrite: [],
  };
  live_search = () => {
    let search_channel = document.getElementById("search_channel"),
      icon_remove2 = document.getElementById("icon_remove2");
    if (search_channel.value.length > 0) {
      icon_remove2.style.display = "block";
    } else {
      icon_remove2.style.display = "none";
    }
    let results = this.state.radios_with_out_overwrite.filter((items) => {
      return items.name.includes(search_channel.value);
    });
    this.setState({
      radios: results,
    });
  };
  clearInput = () => {
    let search_channel = document.getElementById("search_channel");
    search_channel.value = "";
    this.live_search();
  };
  componentDidMount = (event) => {
    fetch("https://www.mp3quran.net/api/v3/radios?language=ar")
      .then((response) => response.json())
      .then(
        (response) => {
          let cairoStation = {
            id: response.radios.length + 1,
            name: "اذاعة القرآن الكريم من القاهرة مباشر",
            url: "https://stream.radiojar.com/8s5u5tpdtwzuv",
          };
          response.radios.unshift(cairoStation);
          this.setState({
            radios: response.radios,
          });
          this.setState({
            radios_with_out_overwrite: response.radios,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  };
  render() {
    return (
      <div>
        <div
          className="alert_danger animate__animated animate__flash"
          id="alert_danger"
          style={{ display: "none" }}
        >
          يرجى اختيار المحطة أولاً
        </div>
        <div className="container" id="container">
          {/* audio player at top page  */}
          <div className="myPlayer">
            <div id="audio-player-container">
              <div className="audio-player-inside-container">
                <p className="titel_player" lang="ar" id="titel_player">
                  audio player
                </p>
                <button
                  id="play_icon_button"
                  onClick={status_play}
                  className="plays_buttons"
                  style={{
                    position: "absolute",
                    left: "6%",
                    pointerEvents: "none",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    className="bi bi-play"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                  </svg>
                </button>
                <button
                  onClick={status_play}
                  id="pause_icon_button"
                  className="plays_buttons"
                  style={{ position: "absolute", left: "6%", display: "none" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    className="bi bi-pause"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
                  </svg>
                </button>
                <input
                  style={{ margin: "14%" }}
                  defaultValue="100"
                  type="range"
                  onChange={volumes_range}
                ></input>
                <div
                  id="alert_before_playing"
                  className="alert_before_playing"
                ></div>
              </div>
            </div>
          </div>
          {/*  input to search for player name */}
          <audio hidden id="myAudio" controls src="" className="radio"></audio>
          <div style={{ position: "relative" }}>
            <input
              onChange={this.live_search}
              className="form-control custom_search_input input_search"
              type="text"
              id="search_channel"
              placeholder="اكتب اسم المحطة او جزء من الأسم المراد البحث عنها"
            />
            <svg
              onClick={this.clearInput}
              id="icon_remove2"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-trash3-fill icon_remove2"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
            </svg>
          </div>
          {/*  divs and buttons to play radio  */}
          <div className="row RowCard" id="RowCard">
            {this.state.radios.map((radios) => (
              <div key={radios.id} className="col-4" id="DivcolCard">
                <div className="mycard" id="mycard">
                  <h6 className="card-title">{radios.name}</h6>
                  <button
                    name="button_play"
                    className="btn btn-primary button_play"
                    id={radios.id}
                    onClick={add_whiteList.bind(this, radios.id)}
                  >
                    تشغيل
                  </button>
                </div>
              </div>
            ))}
            {this.state.radios.length === 0 ? (
              <div className="Div_sorry">
                <span style={{ display: "block" }}>
                  عذراً لا يوجد محطه بهذا الأسم
                </span>
                <button
                  onClick={this.clearInput}
                  className="btn btn-danger"
                  style={{ width: "100px" }}
                >
                  رجوع
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div id="wrapper"></div>
        <div className="scrollbar" id="style-1">
          <div className="force-overflow"></div>
        </div>
      </div>
    );
  }
}
export default HomePgae;
