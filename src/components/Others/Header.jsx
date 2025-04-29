const Header = ({ data }) => {
  const logoutUser = () => {
    console.log("clicking");
    localStorage.removeItem("loggedUser");
    window.location.reload();
  };
  console.log(data);
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold"> {data.firstname}👋</span>
      </h1>
      <button
        onClick={logoutUser}
        className="bg-red-600 text-lg font-medium  px-5 py-2 text-white rounded-sm"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
