import React from "react";
import { Formik } from "formik";

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(props) => (
          <form
          onSubmit={props.handleSubmit}
          >
              {children}
          </form>
      )}
    </Formik>
  );
}

export default AppForm;
