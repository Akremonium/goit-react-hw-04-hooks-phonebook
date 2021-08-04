import styles from "./ContactForm.module.scss";
import { useState } from "react";

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onChange = (evt) => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    onAddContact(name, number);
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.field}>
        Name:
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          value={name}
          onChange={onChange}
          required
        />
      </label>

      <label className={styles.field}>
        Number:
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять минимум из пяти цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          value={number}
          onChange={onChange}
          required
        />
      </label>

      <button className={styles.add} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
