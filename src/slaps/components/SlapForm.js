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
 
export default SlapForm;

