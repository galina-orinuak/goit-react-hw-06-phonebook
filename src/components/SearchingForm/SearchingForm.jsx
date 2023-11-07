import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './SearchingForm.module.css'
import {BsSearch} from "react-icons/bs";

export const SearchingForm = ({onSubmit}) => {
  const [query, setQuery] = useState('');

  const onHandleChange = evt => {
    setQuery(evt.currentTarget.value);
  };

  const onHandleSubmit = evt => {
    evt.preventDefault();
    if (query.trim() === '') {
      toast('пустий рядок');
      setQuery('');
      return;
    }
    onSubmit(query);
  };

  return (
    <>
      <ToastContainer autoClose={1000} />
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <button type="submit" className={styles.button}>
          <span className={styles.buttonLabel}><BsSearch/></span>
        </button>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={query}
          onChange={onHandleChange}
        />
      </form>
    </>
  );
};
