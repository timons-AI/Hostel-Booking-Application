import { Button } from "@mui/material";
const Navbar = () => {
  return (
    <div className=" p-3 top-0 w-full flex items-center justify-between bg-white shadow-sm">
      <p className=" p-3 border  rounded-md bg-slate-200 border-slate-400">
        Logo
      </p>
      <div className=" flex items-center gap-4">
        <Button variant="outlined"> Register</Button>
        <Button variant="outlined"> Login</Button>
      </div>
    </div>
  );
};

export default Navbar;
