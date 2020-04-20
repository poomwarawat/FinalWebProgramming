import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import API from "../../API/API";

const PaymentModal = (props) => {
  console.log("PaymentModal -> props", props);
  const buttonLabel = "Checkout";
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  const handelConfirm = () => {
    let userIdAndEventID = new FormData();
    userIdAndEventID.append("userId", props.eventData["userId"]);
    userIdAndEventID.append("eventId", props.eventData["eventId"]);
    userIdAndEventID.append("category", props.eventData["categorySelected"]);
    API.post("/event-checkout", userIdAndEventID).then((res) => {
      setModal(!modal);
      window.location.reload();
    });
  };
  return (
    <div>
      <Button color="warning" className="btn-block" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Event Register</ModalHeader>
        <ModalBody>
          <h5>Event : {props.event[0]["title"]}</h5>
          <h5>Comfirm this register ? </h5>
          <p>ช่องทางการชำระเงิน</p>
          <p>PromptPay : 0863975940</p>
          <p>กดยืนยันและทำการแจ้งการชำระเงิน</p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handelConfirm}>
            Confirm
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PaymentModal;
