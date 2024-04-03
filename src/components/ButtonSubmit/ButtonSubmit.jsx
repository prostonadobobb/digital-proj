import { Button, Form } from "react-bootstrap";
import "./ButtonSubmit.scss";
import {ReactComponent as ArrowIcon} from '../../img/ico-shape.svg';

export const ButtonSubmit = ({ title }) => {
  return (
    <Form.Group>
      <Button type="submit" className="buttonSubmit">
        {title}
        <ArrowIcon className="buttonSubmit__arrow" />
      </Button>
      
    </Form.Group>
  );
};