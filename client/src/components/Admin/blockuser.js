import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Blockuser, getAllUsers, sendMsg } from "../../store/actions/adminActions";
import { showToastify } from "../utils/reuseable";
import { CircleSpinner } from "react-spinners-kit";

const BlockCustomer = (props) => {
  const [message, setmessage] = useState("");
  const dispatch = useDispatch();

  const notifications = useSelector((value) => value.notification);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    if (notifications && notifications.notice) {
      setloading(false);
      props.setbprompt(false);
  
        dispatch(getAllUsers());
     
    }
  });
  return (
    <div style={{ width: "90%" }}>
      <div className="row-styles" style={{ marginBottom: "20px" }}>
        <span style={{ color: "chocolate", fontSize: "16px" }}>
          Are you sure you want to block user ?
        </span>{" "}
      </div>

      {loading ? (
        <>
          <div className="instruction-btn-valid">
            <CircleSpinner size={20} color="blue" />
          </div>
        </>
      ) : (
        <>
          <input
            name="Yes"
            type="submit"
            onClick={() => {
              setloading(true);
              dispatch(Blockuser(props.customerid));
            }}
            className="submitinput"
          />
        </>
      )}
    </div>
  );
};

export default BlockCustomer;
