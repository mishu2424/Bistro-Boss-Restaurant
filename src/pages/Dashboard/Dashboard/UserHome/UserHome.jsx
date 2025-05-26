import useAuth from "../../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-xl">
        <span>Welcome back </span> 
        {user?.displayName ? user.displayName : ""}
      </h2>
    </div>
  );
};

export default UserHome;
