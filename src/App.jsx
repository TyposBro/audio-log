import { useState } from "react";
import { Recorder } from "react-voice-recorder";
import { FaStopwatch } from "react-icons/fa";
import "react-voice-recorder/dist/index.css";
import "./App.css";

function App() {
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
    console.log(data);
    setRec({ audioDetails: data });
  };

  const handleAudioUpload = (file) => {
    console.log(file);
  };

  const handleCountDown = (data) => {
    console.log(data);
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
    setRec({ audioDetails: reset });
  };
  return (
    <div className="App">
      <FaStopwatch className="btn" />

      <Recorder
        record={true}
        hideHeader
        audioURL={rec.audioDetails.url}
        showUIAudio
        handleAudioStop={(data) => handleAudioStop(data)}
        handleAudioUpload={(data) => handleAudioUpload(data)}
        handleCountDown={(data) => handleCountDown(data)}
        handleReset={() => handleReset()}
        mimeTypeToUseWhenRecording={`audio/webm`} // For specific mimetype.
      />
    </div>
  );
}

export default App;
