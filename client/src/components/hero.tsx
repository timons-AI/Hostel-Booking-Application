import React, { useState } from "react";
import { LocalHotel, DateRangeRounded, Person } from "@mui/icons-material";
import { Button } from "@mui/material";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { Modal, Box, Typography } from "@mui/material";
const HeroSection = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className=" w-full bg-sky-700 flex flex-col p-5 justify-center items-center gap-4">
      <div className=" w-full flex  items-center justify-center gap-4 text-white">
        <div className=" flex items-center gap-2 p-3 ">
          <LocalHotel />
          <p>Hotel</p>
        </div>
        <div className=" flex items-center  gap-2 p-3 rounded-3xl border-2">
          <LocalHotel />
          <p>Hotel</p>
        </div>
      </div>
      <div className=" text-slate-100 flex flex-col gap-10 ">
        <p className=" text-5xl font-semibold">
          A lifetime of discounts? it's a Amaizing.
        </p>
        <p className=" text-2xl font-semibold">
          Get 30% off your first stay and more perks when you sign up. And you
          can always count on our free Wi-Fi.
        </p>
      </div>
      <div className=" flex items-center justify-center gap-4">
        <Button variant="contained">Sign In /Register</Button>
      </div>
      <div className="  relative flex divide-x-2 items-center justify-between p-3 rounded-md w-full md:w-2/3 border-2 bg-white text-slate-500 ">
        <div className=" flex items-center">
          <LocalHotel fontSize="large" />
          <span className=" text-slate-500  flex items-center gap-2   text-sm">
            where are you going ?
          </span>
        </div>
        <div className=" flex items-center ">
          <DateRangeRounded fontSize="large" />

          <Button onClick={handleOpen}>
            <span className=" text-slate-500  flex items-center gap-2   text-sm">
              {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}
            </span>
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className=" rounded-lg"
          >
            <Box sx={style}>
              <DateRange
                editableDateInputs={true}
                onChange={(item: any) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className=" rounded-lg"
              />
            </Box>
          </Modal>
        </div>
        <div className=" flex items-center">
          <Person fontSize="large" />
          <span className=" text-slate-500  flex items-center gap-2   text-sm">
            {options.adult} Adult {options.children} Children {options.room}{" "}
            Room
          </span>
        </div>
        <div>
          <Button variant="contained">Search</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
