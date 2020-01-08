import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visual: 1,
      visible: "",
      invisible: "d-none",
      songs: [
        { "id": 1, "category": "game", "name": "Mario Castle", "url": "files/mario/songs/castle.mp3" },
        { "id": 2, "category": "game", "name": "Mario Star", "url": "files/mario/songs/hurry-starman.mp3" },
        { "id": 3, "category": "game", "name": "Mario Overworld", "url": "files/mario/songs/overworld.mp3" }
      ],
    }
    this.player = null;
  }

  idname(e, i) {
    e.preventDefault();
    let audio = document.querySelectorAll("audio")[i];
    this.player = audio;
    this.player.play();
  }

getSongs(url){
        fetch(url)
        .then(resp=>resp.json())
        .then(data=>{
            console.log(data);
            this.setState({
                songs:data
            })
        })
        .catch(error=>console.log(error))
}

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 bg-dark" id="header"></div>
        </div>
        <div className="row">
          <div className="col-md-12 p-0">
              <div className="list-group-flush p-0" id="listMusic">
                {
                  this.state.songs.map((item, i) => (
                    <li className="list-group-item" onClick={(e) => this.idname(e, i)} key={item.id}>
                      {item.id}. {item.name}
                      <audio ref={(t) => this.player = t}>
                        <source src={"https://assets.breatheco.de/apis/sound/" + item.url} type="audio/mp3" />
                        Your browser does not support the audio element.
                      </audio>
                    </li>
                  ))
                }
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 bg-dark pt-4 pb-4" id="buttoms">
            <span className="d-flex justify-content-center">
              <button type="button" className="pr-5 btn"><i class="fas fa-caret-square-left fa-3x text-white"></i></button>
              <button type="button" onClick={()=>this.player.play()} className="btn"><i className="fas fa-play fa-3x text-white"></i></button>
              <button type="button" onClick={()=>this.player.pause()} className="btn"><i className="fas fa-pause fa-3x text-white"></i></button>
              <button type="button"className="pl-5 btn"><i class="fas fa-caret-square-right fa-3x text-white"></i></button>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
