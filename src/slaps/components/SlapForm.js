import { useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const SlapForm = ({user, newSlap, setNewSlap, listOfSlaps, setListOfSlaps}) => {

// const [postNewSlap, setPostNewSlap] = useState({ 
//     message : ""
// });

const postSlap = async () => {
    const newSlapData = {
        message: user.slap.message
};

const response = await fetch ("http://localhost:8080/slaps"),{
    method:'POST',
    headers:{"Content-Type" : "application/json"},
    body: JSON.stringify(newSlapData)

};
}



//   const [isPickerVisible, setPickerVisible] = useState(false);
//   const [currentEmoji, setCurrentEmoji] = useState("");

//   const handleTogglePicker = () => setPickerVisible(!isPickerVisible);

//   const handleEmojiClick = (_, emojiObject) => {
//     setCurrentEmoji(emojiObject.emoji);
//     setPickerVisible(false);
//   };

  return (  
    <></>
    // <div className="emoji-picker">
    //   <button className="emoji-picker-toggle" onClick={handleTogglePicker}>
    //     {currentEmoji ? (
    //       <span role="img" aria-label="Selected Emoji">{currentEmoji}</span>
    //     ) : (
    //       'Select Emoji'
    //     )}
    //   </button>
    //   {isPickerVisible && (
    //     <Picker
    //       onEmojiClick={handleEmojiClick}
    //       disableSearchBar
    //       disableSkinTonePicker
    //     />
    //   )}
    // </div>
  );
};

export default SlapForm;
