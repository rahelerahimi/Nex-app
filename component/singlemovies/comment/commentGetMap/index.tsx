import React ,{FC} from 'react';
import styles from './commentgetmap.module.css'
import { CommentData ,  CommentGetMapProps} from '../../../type/type';
import {RiDeleteBinLine} from 'react-icons/ri';
import {FaRegEdit} from 'react-icons/fa';


const CommentGetMap:FC<CommentGetMapProps> = ({ deleteComment, editComment, comments, fetchComments,formiksetvalues,title }) => {

     const productComments = comments.filter((comment:CommentData) => comment.title === title);
   
     return (
          <div>
      
{
     productComments.length >0 && <p className={styles.commentTitle}>
          <span>comment for</span>
          <span className={styles.commentFirstTitle}>" {title} "</span>
          </p>
}

               {productComments.length > 0 ? (
                   productComments.map((comment:CommentData) => (
                         <div key={comment.id} className={styles.parentComment}>
                              <div className={styles.flexComment}> 
                              <p>{comment.name}</p>
                              <p>{comment.email}</p>
                              <div>
                             <span>|</span> <button onClick={() => editComment(comment, formiksetvalues)}>
                               <FaRegEdit/>
                              </button>
                              <span>|</span><button onClick={() => deleteComment(comment.id, fetchComments)}><RiDeleteBinLine/></button>
                              </div>
                              </div>
                               <p className={styles.commentArea}>{comment.area}</p>
                         </div>
                    ))
               ) : (
                    <p  className={styles.commentFirst}>
                         <span>Be the first to review</span>
                         <span className={styles.commentFirstTitle}> " {title} "</span>
                        </p>
               )}
          </div>
     )
}

export default CommentGetMap