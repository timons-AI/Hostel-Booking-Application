import React from "react";
import { Button } from "@mui/material";
const HomePage: React.FC = () => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <p>This home page </p>
      <Button variant="outlined"> Home page</Button>
    </div>
  );
};

export default HomePage;
