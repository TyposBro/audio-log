import { useState } from "react";
import { Recorder } from "react-voice-recorder";
import { FaStopwatch } from "react-icons/fa";
import "react-voice-recorder/dist/index.css";
import "./App.css";

function App() {
  const timestamps = new Array();
  const [rec, setRec] = useState({
    url: null,
    blob: null,
    chunks: null,
    duration: {
      h: 0,
      m: 0,
      s: 0,
    },
  });

  const handleAudioStop = (data) => {
    console.log({ ...data, timestamps });
    setRec(data);
  };

  const handleAudioUpload = (file) => {
    console.log(file);
  };

  let sec = 0;
  const handleCountDown = (data) => {
    sec += 100;
  };
  const handleReset = () => {
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0,
      },
    };
    setRec(reset);
  };

  const capture = () => {
    console.log(sec);
    timestamps.push(sec);
    console.log(timestamps);
  };
  return (
    <div className="App">
      <FaStopwatch className="btn" onClick={capture} />

      <Recorder
        record={true}
        hideHeader
        audioURL={rec.url}
        showUIAudio
        handleAudioStop={handleAudioStop}
        handleAudioUpload={handleAudioUpload}
        handleCountDown={handleCountDown}
        handleReset={handleReset}
        mimeTypeToUseWhenRecording={`audio/webm`} // For specific mimetype.
      />
    </div>
  );
}

export default App;
