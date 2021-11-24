import Tts from "react-native-tts";

var state = {
  voices: [],
  ttsStatus: "initiliazing",
  selectedVoice: null,
  speechRate: 0.5,
  speechPitch: 1,
  text: "This is an example text",
};

export default (jediName, jediSpeceshipName) => {
  Tts.setDefaultLanguage("en-IE");
  Tts.setDefaultVoice("com.apple.ttsbundle.Daniel-compact");

  Tts.speak(
    `Atenção, o piloto ${jediName} da nave ${jediSpeceshipName} está decolando`
  );

  // TODO save on localstorage
};
