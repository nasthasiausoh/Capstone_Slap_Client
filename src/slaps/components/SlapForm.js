import { useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import "../SlapFormStyles.css";


const SlapForm = ({loggedInUser, addNewSlap}) => {

  const [message, setMessage]= useState('');
  const [showPicker, setShowPicker] = useState(false);
  let [currentEmoji, setCurrentEmoji] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddSlap();
  };

  const handleAddSlap = async () => {
    const slapInfo = {
      message: message,
      mood: currentEmoji.native,
      userId: loggedInUser.id
    };
    addNewSlap(slapInfo)
  };

  const handleEmojiToggle = () => {
    setShowPicker(!showPicker);
  }

      
  return (
    <div className="slap-form-component">
      <h2 id="create-slap-heading">Create a Slap!</h2>
        <div>
          <form onSubmit={handleSubmit}>
              <div className="create-slap-input-fields">
                <input
                  type="text"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  id="type-slap-message"
                />

                <input
                  type="text"
                  placeholder="mood"
                  value={currentEmoji.native}
                  onClick={handleEmojiToggle}
                  id="select-an-emoji"
                />
            </div>

            {showPicker ? <Picker
                className="picker"
                data ={data}
                previewPosition="none"
                onEmojiSelect={(e) => {
                setCurrentEmoji(e)
                handleEmojiToggle();
              }}/> : ""}

          <button type="submit" className="slap-submit-button">Submit</button>

          </form>
        </div>
    </div>
  );

}
 

export default SlapForm;