import { useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const SlapForm = ({user}) => {

  const [isPickerVisible, setPickerVisible] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState("");





  

  const handleTogglePicker = () => setPickerVisible(!isPickerVisible);

  const handleEmojiClick = (_, emojiObject) => {
    setCurrentEmoji(emojiObject.emoji);
    setPickerVisible(false);
  };

  return ( 
    <div className="emoji-picker">
      <button className="emoji-picker-toggle" onClick={handleTogglePicker}>
        {currentEmoji ? (
          <span role="img" aria-label="Selected Emoji">{currentEmoji}</span>
        ) : (
          'Select Emoji'
        )}
      </button>
      {isPickerVisible && (
        <Picker
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      )}
    </div>
  );
};

export default SlapForm;
