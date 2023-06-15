import { useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";


const SlapForm = ({loggedInUser, addNewSlap}) => {

  const[message, setMessage]= useState('');
  const [mood, setMood] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
      setShowModal(true);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
    setMessage('');
    setMood('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddSlap();
    handleCloseModal();
  };

  const handleAddSlap = async () => {
    const slapInfo = {
      message: message,
      mood: currentEmoji.native,
      userId: loggedInUser.id
    };
    addNewSlap(slapInfo)
  };

  const [isPickerVisible, setPickerVisible] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState("");

  // const handleTogglePicker = () => setPickerVisible(!isPickerVisible);

  // const handleEmojiClick = (emojiObject) => {
  // setCurrentEmoji(emojiObject.emoji);
  // setPickerVisible(false);
  // };



      
  return (
    <div>
      <button onClick={handleOpenModal}>Add a Slap!</button>
      {showModal && (
        <div>
          <form onSubmit={handleSubmit}>
          <input
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
          <input
                type="text"
                value={currentEmoji.native}
                onChange={(event) => setMood(event.target.value)}
              />
          <button type="submit">Submit</button>

          </form>

          <div className='d-flex flex-column align-items-center'>
            <h1 className='mt-5 mb-5'>{currentEmoji.native || 'select emoji' }</h1>
            <button className='btn btn-primary' onClick={() => setPickerVisible(!isPickerVisible)}> open emoji picker</button>
            <div className={isPickerVisible ? 'd-block' : 'd-none'}>
              <Picker
              data ={data}
              previewPosition="none"
              onEmojiSelect={(e) => {
              setCurrentEmoji(e)
              setPickerVisible(!isPickerVisible);
              }}/>
            </div>

          </div> 

          <button onClick={handleCloseModal}>Exit</button>
        </div>
      )};
    </div>
  );

}
 
export default SlapForm;