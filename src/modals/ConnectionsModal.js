import React from 'react';
import './ConnectionsModalStyles.css'

const ConnectionsModal = ({ loggedInUser, user, onClose }) => {

  return (
    <div className="modal-background">
      <div className="modal-content">
        <h1>Connections</h1>
            <button className="modal-close" onClick={onClose}>
            Exit
            </button>
            <div className='connections-list-follow-following'>
                <div className='follow-list'>
                    <h2>Following:</h2>
                    <ul>
                    {user.following.map((followedUser) => (
                        <li key={followedUser.id}>
                            <div className='connections-user-format'>
                                <img src={followedUser.profilePicture} alt='followed-profile-picture' width={60}/>
                                <p>{followedUser.username}</p>
                                {/* <a href={`/users/${followedUser.id}`}>{followedUser.username}</a> */}
                            </div>
                        </li>
                    ))}
                    </ul>
                </div>

                <div className='follow-list'>
                    <h2>Followers:</h2>
                    <ul>
                    {user.followers.map((follower) => (
                        <li key={follower.id}>
                            <div className='connections-user-format'>
                                <img src={follower.profilePicture} alt='follower-profile-picture' width={60}/>
                                <p>{follower.username}</p>
                            </div>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ConnectionsModal;

// import React, { useEffect } from 'react';
// import './ConnectionsModalStyles.css'

//     const ConnectionsModal = ({ loggedInUser, onClose }) => {
//         useEffect(() => {
//           const handleOutsideClick = (event) => {
//             if (event.target.classList.contains('modal-background')) {
//               onClose();
//             }
//           };
      
//           document.addEventListener('click', handleOutsideClick);
      
//           return () => {
//             document.removeEventListener('click', handleOutsideClick);
//           };
//         }, [onClose]);
      
//         return (
//           <div className="modal-background">
//             <div className="modal-content">
//               <h2>Following</h2>
//               <ul>
//                 {loggedInUser.following.map((followedUser) => (
//                   <li key={followedUser.id}>{followedUser.username}</li>
//                 ))}
//               </ul>
      
//               <h2>Followers</h2>
//               <ul>
//                 {loggedInUser.followers.map((follower) => (
//                   <li key={follower.id}>{follower.username}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         );
//       };

// export default ConnectionsModal;
