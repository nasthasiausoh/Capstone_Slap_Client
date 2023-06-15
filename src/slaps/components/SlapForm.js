import { Modal } from "@mui/base";
import { Box } from "@mui/system"
import { useState } from "react";


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
        handleAddSlap({ message, mood });
        handleCloseModal();
      };

      const handleAddSlap = async () => {
        const slapInfo = {
          message: message,
          mood: mood,
          userId: loggedInUser.id
        };
      
       addNewSlap(slapInfo)
      };

      

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
                  value={mood}
                  onChange={(event) => setMood(event.target.value)}
                />
        <button type="submit">Submit</button>
              </form>
        <button onClick={handleCloseModal}>Exit</button>
        </div>
          )}
        </div>
      );
}
 
// export default SlapForm;

// import { useState } from "react";
// import Picker from "@emoji-mart/react";
// import data from "@emoji-mart/data";

// const SlapForm = ({user, newSlap, setNewSlap, listOfSlaps, setListOfSlaps}) => {


//   const [isPickerVisible, setPickerVisible] = useState(false);
//   const [currentEmoji, setCurrentEmoji] = useState("");

//   const handleTogglePicker = () => setPickerVisible(!isPickerVisible);

//   const handleEmojiClick = (emojiObject) => {
//     setCurrentEmoji(emojiObject.emoji);
//     setPickerVisible(false);
//     <p>THIS IS PISSING ME OFF</p>
//   };

//   // console.log(currentEmoji);


//   return (  
//     <div className="emoji-picker">
//       <h1>HI FROM SLAP FORM</h1>
//       <button className="emoji-picker-toggle" onClick={handleTogglePicker}>
//         {currentEmoji ? (
//           <span role="img" aria-label="Selected Emoji">{currentEmoji}</span>
//         ) : (
//           'Select Emoji'
//         )}
//       </button>
//       {isPickerVisible && (
//         <Picker
//           onEmojiClick={handleEmojiClick}
//           disableSearchBar
//           disableSkinTonePicker
//         />
//       )}

//     </div>

//   // return (
//   //   <div className='d-flex flex-column align-items-center'>
//   //     <h1 className='mt-5 mb-5'>{currentEmoji || 'select emoji' }</h1>
//   //     <button className='btn btn-primary' 
//   //     onClick={() => setPickerVisible(!isPickerVisible)}
//   //     >
//   //       open emoji picker</button>
//   //       <div className={isPickerVisible ? 'd-block' : 'd-none'}>
//   //         <Picker
//   //         data ={data}
//   //         previewPosition="none"
//   //         onEmojiSelect={(e) => {
//   //           setCurrentEmoji(e.native)
//   //           setPickerVisible(!isPickerVisible);
//   //         }}/>
//   //       </div>
//   // </div> 
    
//   );
// };