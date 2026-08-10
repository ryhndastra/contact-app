import React from "react";
import Joi from "joi";
import { validateProps } from "../utils/Validation";

const contactInputPropsSchema = Joi.object({
  addContact: Joi.func().required(),
});

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    const validatedProps = validateProps(
      contactInputPropsSchema,
      props,
      "ContactInput",
    );
    this.state = {
      name: "",
      tag: "",
      validatedProps,
    };

    this.onNameChangehandler = this.onNameChangehandler.bind(this);
    this.onTagChangehandler = this.onTagChangehandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onNameChangehandler = (e) => {
    this.setState(() => {
      return {
        name: e.target.value,
      };
    });
  };

  onTagChangehandler = (e) => {
    this.setState(() => {
      return {
        tag: e.target.value,
      };
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();

    const { addContact } = this.state.validatedProps;
    addContact(this.state);
  };

  render() {
    return (
      <div className="contact-input">
        <input
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.onNameChangehandler}
        />
        <input
          type="text"
          placeholder="Tag"
          value={this.state.tag}
          onChange={this.onTagChangehandler}
        />
        <button type="submit" onClick={this.onSubmitHandler}>
          Tambah
        </button>
      </div>
    );
  }
}

export default ContactInput;
