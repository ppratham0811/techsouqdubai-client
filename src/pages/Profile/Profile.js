import { useEffect, useState } from "react";
import { getCurrentUser } from "../../actions";

const Profile = () => {
  const getCurrentLoggedInUser = async () => {
    return await getCurrentUser();
  };
  const [user, setUser] = useState(null);
  useEffect(() => {
    const user = getCurrentLoggedInUser();
    setUser(user);
    console.log(user);
  }, []);

  return (
    <>
      <div>Profile Page</div>
    </>
  );
};

export default Profile;
