// 2º componente
"use strict";
const element = React.createElement;

class Video extends React.Component {
  render() {
    // Datos del Video

    const item = [
      {
        id: 1,
        video: "../videos/Madison-Beer-Hurts-Like-Hell.mp4",
        formato: "video/mp4",
      },
    ];
    //https://www.youtube.com/watch?v=rsuKmbYokuk&list=RDveqwVln0KN8&index=13
    //https://www.youtube.com/embed/rsuKmbYokuk
    //https://youtu.be/rsuKmbYokuk

    // Es necesario colocar una 'key' a partir de la versión de React JS 16
    // colocamos el objeto 'id: 1' en <div key={ item.id }
    //, type: item.formato

    return item.map((item) => {
      return element(
        "video",
        { class:"w-100", controls: true, playing: true, src: item.video, key: item.id } //,"Madison Beer"
      );
    });
  }
}

const domContainer = document.querySelector("#ejMadison-Beer");
ReactDOM.render(element(Video), domContainer);
