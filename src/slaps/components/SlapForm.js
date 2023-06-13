import { useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const SlapForm = ({ user }) => {
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState(null);

  return (
    <div className="emoji-picker">
      <h1>{currentEmoji || "mood:"}</h1>
      <button
        className="emoji"
        onClick={() => setPickerVisible(!isPickerVisible)}
      >
        mood
      </button>
      <div className={isPickerVisible ? "d-block" : "d-none"}>
        <Picker
          data={data}
          previewPosition="none"
          onEmojiSelect={(e) => {
            setCurrentEmoji(e.native);
            setPickerVisible(!isPickerVisible);
          }}
        />
      </div>
    </div>
  );
};

export default SlapForm;
