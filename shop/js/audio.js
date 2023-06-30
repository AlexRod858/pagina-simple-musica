// 2º componente
"use strict";
const e = React.createElement;

class Audio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  render() {
    // Datos que debe cargar el audio

    const item = [
      {
        id: 1,
        audio:
          "https://nubecolectiva.com/blog/tutos/demos/renderizando_elementos_multimedia_react/mp3/cancion.mp3",
        formato: "audio/mpeg",
      },
    ];

    return item.map((item) => {
      return e("audio", { controls: true, src: item.audio, type: item.formato, key: item.id });
    });
  }
}

const domContainer = document.querySelector("#divAudio");
ReactDOM.render(e(Audio), domContainer);
