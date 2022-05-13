import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Sender = ({onAddMessege}) => {
  const [value, setValue] = useState("");

  const onChange = (event) => setValue(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();

    onAddMessege({
      id: Date.now(),
      avatar: "https://sun9-58.userapi.com/c836638/v836638514/867c/SPMigNB8gw0.jpg",
      messege: value,
      date: new Date().toISOString(),
      is: "my",
      status: "send",
    });
    setValue("")
  };



  return (
    <form className="sender" onSubmit={onSubmit}>
      <input
        placeholder="Введите сообщение"
        value={value}
        onChange={onChange}
        required
      />
      <button>Отправить</button>
    </form>
  );
};

Sender.propTypes = {
  onAddMessege: PropTypes.func.isRequired,
}

export default Sender;