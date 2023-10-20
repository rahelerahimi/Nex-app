"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "../formRegister/formRegiste.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMyContext } from "../../../app/context/theme";

const FormLogin = () => {
  const { setModalOpen } = useMyContext();

  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      if (formik.isValid) {
        if (setModalOpen) {
          setModalOpen(false);
        }
        router.push("/dashboard");
      }
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .min(8, "least 8 characters")
        .max(30, "max 30")
        .matches(/[a-zA-Z]/)
        .required("required"),
      password: Yup.string()
        .min(8, "least 8 characters")
        .max(30, "max 30 ")
        .matches(/[a-zA-Z0-9~!@#$%^&*()_+]/, "password is not strong")
        .required("required"),
    }),
  });

  return (
    <>
      <div>
        <form
          action=""
          className={styles.formStyle}
          onSubmit={formik.handleSubmit}
        >
          <div className={styles.sectionInput}>
            <label htmlFor="" className={styles.lable}>
              username
            </label>
            <input
              type="text"
              placeholder="enter username"
              name="userName"
              className={styles.inputTextRegister}
              onChange={formik.handleChange}
            />
            <span className={styles.errorForm}>
              {formik.touched.userName && formik.errors.userName ? (
                <div>{formik.errors.userName}</div>
              ) : null}
            </span>
          </div>

          <div className={styles.sectionInput}>
            <label htmlFor="" className={styles.lable}>
              password
            </label>
            <input
              type="text"
              placeholder="enter password"
              name="password"
              className={styles.inputTextRegister}
              onChange={formik.handleChange}
            />
            <span className={styles.errorForm}>
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </span>
          </div>

          <button
            type="submit"
            className={styles.btnFormRegister}
            style={{ background: "#7c3aed" }}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};
export default FormLogin;
