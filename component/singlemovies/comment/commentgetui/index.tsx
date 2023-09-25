import React ,{FC} from 'react';
import axios from 'axios';
import CommentGetMap from '../commentGetMap';
import { CommentData ,CommentsListProps} from '../../../type/type';
const apiUrl = 'https://64d497b9b592423e46944e99.mockapi.io/comment/v1/com1';


const CommentsList:FC<CommentsListProps> = ({ comments, fetchComments,formiksetvalues,title }) => {

  const deleteComment = async (id :string, fetchComments: () => void) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      fetchComments();
    } catch (error) {
      console.error(error);
    }
  };

  const editComment = (comment:CommentData, formikSetValues: (values: CommentData) => void) => {
    formikSetValues(comment);
  };


  return (
    <>

      <CommentGetMap deleteComment={deleteComment} editComment={editComment} comments={comments} fetchComments={fetchComments} formiksetvalues={formiksetvalues} title={title} />

    </>
  );
};

export default CommentsList;