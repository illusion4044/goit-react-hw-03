// src/ContactForm/ContactForm.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be less than 50 characters')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be less than 50 characters')
    .required('Required'),
});

export default function ContactForm({ onAdd }) {
  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    onAdd({ id: nanoid(), name: values.name, number: values.number });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.group}>
            <label className={styles.label}>Name</label>
            <Field type="text" name="name" className={styles.input} />
            <ErrorMessage name="name" component="div" className={styles.error} />
          </div>
          <div className={styles.group}>
            <label className={styles.label}>Number</label>
            <Field type="text" name="number" className={styles.input} />
            <ErrorMessage name="number" component="div" className={styles.error} />
          </div>
          <button type="submit" disabled={isSubmitting}>Add Contact</button>
        </Form>
      )}
    </Formik>
  );
}


