import { useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const SlapForm = ({user, newSlap, setNewSlap, listOfSlaps, setListOfSlaps}) => {


  const [isPickerVisible, setPickerVisible] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState("");

  const handleTogglePicker = () => setPickerVisible(!isPickerVisible);

  const handleEmojiClick = (emojiObject) => {
    setCurrentEmoji(emojiObject.emoji);
    setPickerVisible(false);
    <p>THIS IS PISSING ME OFF</p>
  };

  return (  
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
    <h1>HI FROM SLAP FORM</h1>
  );
};

export default SlapForm;





















// import { useState } from "react";
// import Picker from "@emoji-mart/react";

// // const SlapForm = ({user, newSlap, setNewSlap, listOfSlaps, setListOfSlaps}) => {

//   const SlapForm = () => {
//     const [chosenEmoji, setChosenEmoji] = useState(null);
  
//     const onEmojiClick = (event, emojiObject) => {
//       setChosenEmoji(emojiObject);
//     };
  
//     return (
//       <div>
//         {chosenEmoji ? (
//           <span>You chose: {chosenEmoji.emoji}</span>
//         ) : (
//           <span>No emoji Chosen</span>
//         )}
//         <Picker onEmojiClick={onEmojiClick} />
//       </div>
//     );
//   };

// export default SlapForm;

// import data from '@emoji-mart/data'
// import Picker from '@emoji-mart/react'
// import { useState } from 'react';

// const SlapForm = () => {
//   const [isPickerVisible, setPickerVisible] = useState(false);
//   const [currentEmoji, setCurrentEmoji] = useState(null);


//   return (
//     <div className='d-flex flex-column align-items-center'>
//       <h1 className='mt-5 mb-5'>{currentEmoji || 'select emoji' }</h1>
//       <button className='btn btn-primary' 
//       onClick={() => setPickerVisible(!isPickerVisible)}
//       >
//         open emoji picker</button>
//         <div className={isPickerVisible ? 'd-block' : 'd-none'}>
//           <Picker
//           data ={data}
//           previewPosition="none"
//           onEmojiSelect={(e) => {
//             setCurrentEmoji(e.native)
//             setPickerVisible(!isPickerVisible);
//           }}/>

//         </div>
//   </div> 
//   );
// }
 
// export default SlapForm;
<<<<<<< HEAD
=======

>>>>>>> develop
