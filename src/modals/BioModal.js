import React, { useState } from 'react';
import './ConnectionsModalStyles.css'

const BioModal = ({ loggedInUser, onClose, onUpdateBio }) => {
  const [bio, setBio] = useState('');

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleSubmit = () => {
    onUpdateBio(bio);
    onClose();
  };

  return (
    <div className="update-modal-background">
        <div className="update-modal-content">
        <h2>Update Your Bio</h2>
        <input type="text" placeholder="Enter new bio..." value={bio} onChange={handleBioChange} />
        <div className="modal-buttons">
          <button onClick={handleSubmit}>Confirm Changes</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

const UsernameModal = ({ loggedInUser, onClose, onUpdateUsername }) => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = () => {
    onUpdateUsername(username);
    onClose();
  };

  return (
    <div className="update-modal-background">
      <div className="update-modal-content">
      <h2>Update Username</h2>
      <input type="text" placeholder="Enter new username" value={username} onChange={handleUsernameChange} />
      <div className="modal-buttons">
        <button onClick={handleSubmit}>Confirm</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
    </div>

  );
};

export { BioModal, UsernameModal };
