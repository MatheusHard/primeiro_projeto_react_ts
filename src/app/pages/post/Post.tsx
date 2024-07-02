import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Comment } from '../comment/Comment'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Avatar } from '../../../components/avatar/Avatar'



export function Post({author, publishedAt, contents}) {


  //Formatando a data:
   const dataDescrita = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBr})
   const calculoTempo = formatDistanceToNow(publishedAt, {locale: ptBr, addSuffix: true})
   
   //States
   const  [comments, setComments] = useState([]) 
   const  [newComment, setNewComment] = useState('')

   function handleAddComment(event: FormEvent){
      event.preventDefault()
      setComments([...comments, newComment])
      setNewComment('')
   }
    function handleNewCommentInvalid(event : InvalidEvent<HTMLTextAreaElement>){
      event.target.setCustomValidity('Campo Obrigatorio!!')
    }
   function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement> ){
    event.target.setCustomValidity('')
    setNewComment(event.target.value)
   }
   //Deletar Commentario
   function deleteComment(comment : string) {

    const commentsWithoutDeleteOne = comments.filter(c => {
      return c != comment;
    });
    setComments(commentsWithoutDeleteOne)
   }
   const isCommentValid = newComment.length == 0;
   return (
        
        <article className={styles.post}>
          <header>
            <div className={styles.author}>
                <Avatar borda={true} src={author.avatarUrl} />
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>
            <time title={dataDescrita} dateTime={publishedAt.toISOString()}>
                {calculoTempo}
            </time>
          </header>      

          <div className={styles.content}>
          {/*Listar conteudos*/ 
          contents.map(item => {
            if(item.type === 'paragraph'){
              return (
                <p key={item.id}>{item.content}</p>
              )
            }else{
                return (
                <p key={item.id}><a href='#'>{item.content}</a></p>
              )
            }
          })}
          </div>
          
          {/* Form de Comentario */}
          <form onSubmit={handleAddComment} className={styles.commentForm}>
            <strong>Comenta ai Rabuju</strong>
            <textarea 
                    placeholder='Comenta Logo, Ourubu!!!'
                    name="comment"
                    onChange={handleNewCommentChange}
                    value={newComment}
                    onInvalid={handleNewCommentInvalid}
                    required/>
            <footer>
                <button type='submit' disabled={isCommentValid}>Pubricar</button>
            </footer>
          </form>
          {/* Lista de Comentarios */}
          <div className={styles.commentList}>
              {
                comments.map(comment => {
                  return (
                    <Comment 
                      key={comment.id}
                      content={comment}
                      onDeleteComment={deleteComment}/>
                  )
              })}
            
          </div>
        </article>
    )
}
