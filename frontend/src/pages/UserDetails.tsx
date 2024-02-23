import React, { useEffect, useState } from 'react';

const UserDetails: React.FC<{ userId: string }> = ({ userId }) => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://projekt-coral-api.vercel.app/users${userId}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div>
      {userData ? (
        <div>
          <h2>Hitchhike along with these:</h2>
          <p>Name: {userData.firstNameRef}</p>
          <p>Email: {userData.emailRef}</p>
          {/* Expand with more details about users here, make it work first! */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserDetails;
