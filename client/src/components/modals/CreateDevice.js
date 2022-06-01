import React, { useContext } from "react";
import { Dropdown, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import context from "react-bootstrap/esm/AccordionContext";


const CreateDevice = ({show, onHide}) => {
  const {device} = useContext(context)
  
  
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
    
    >
      
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить Продукт
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Dropdown>
              <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
              <Dropdown.Menu>
                  {device.types.map(type =>
                  <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                  
                  )}
              </Dropdown.Menu>
            </Dropdown>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>




  );

};

export default CreateDevice;