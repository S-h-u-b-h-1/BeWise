import React from 'react';
import '../styles/profile.css';
import { useAuth } from '../firebase/AuthContext';

function Profile() {
  const { user } = useAuth();

  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="avatar">
          <img src="https://media.istockphoto.com/id/1231978424/vector/bended-line-letter-logotype-u.jpg?s=1024x1024&w=is&k=20&c=uVihPsmbL-aoYqdqtGYCUDh9kakTY9ktki-QlWOEmss=" alt="User Avatar" />
        </div>
        <h2>{user.displayName || "User"}</h2>
        <p className="email">{user.email}</p>
        <p className="joined">Member since: {new Date(user.metadata.creationTime).toLocaleDateString()}</p>


      </div>
    </div>
  );
}

export default Profile;