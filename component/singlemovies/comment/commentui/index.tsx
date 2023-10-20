"use client";

import styles from "./comment.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import CommentsList from "../commentgetui";
import { CommentData } from "../../../type/type";

const apiUrl = "https://64d497b9b592423e46944e99.mockapi.io/comment/v1/com1";

const Comment = ({ title }: { title: string }) => {
  const [comments, setComments] = useState<CommentData[]>([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const formik = useFormik({
    initialValues: {
      id: "",
      area: "",
      name: "",
      email: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        if (values.id) {
          await axios.put(`${apiUrl}/${values.id}`, values);
          fetchComments();
        } else {
          await axios.post(apiUrl, { ...values, title });
          fetchComments();
        }
        resetForm();
      } catch (error) {
        console.error(error);
      }
    },
    validationSchema: Yup.object({
      area: Yup.string().required(),
      name: Yup.string().min(2).max(25).required("required"),
      email: Yup.string().email("invalid email").required("required"),
    }),
  });

  const fetchComments = async () => {
    try {
      const response = await axios.get(apiUrl);
      setComments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.parentComment}>
      <p className={styles.titleComment}>comment</p>
      <div>
        <form className={styles.formComment} onSubmit={formik.handleSubmit}>
          <div>
            <textarea
              className={styles.textar}
              placeholder="Your review"
              name="area"
              defaultValue={formik.values.area}
              onChange={formik.handleChange}
            />
            <span className={styles.errorComment}>
              {formik.touched.area && formik.errors.area ? (
                <div>{formik.errors.area}</div>
              ) : null}
            </span>
          </div>

          <div className={styles.parentTextInput}>
            <div>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className={styles.textIn}
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <span className={styles.errorComment}>
                {formik.touched.name && formik.errors.name ? (
                  <div>{formik.errors.name}</div>
                ) : null}
              </span>
            </div>

            <div>
              <input
                type="email"
                placeholder="
                               Email"
                name="email"
                className={styles.textIn}
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <span className={styles.errorComment}>
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </span>
            </div>
          </div>

          <button type="submit" className={styles.btnComment}>
            {formik.values.id ? "Edite" : "send"}
          </button>
        </form>
      </div>

      <CommentsList
        comments={comments}
        fetchComments={fetchComments}
        title={title}
        formiksetvalues={formik.setValues}
      />
    </div>
  );
};

export default Comment;
