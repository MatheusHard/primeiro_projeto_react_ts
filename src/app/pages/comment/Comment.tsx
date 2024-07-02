import { ThumbsUp  } from '@phosphor-icons/react'
import styles from './Comment.module.css'

import { useState } from 'react';
import { Avatar } from '../../../components/avatar/Avatar';
export function Comment({content, onDeleteComment}){

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeCount() {
        //PAra poder mudar no dom o state com duas funcoes:
        setLikeCount((state) => {
             return state + 1
            });
        /*    setLikeCount((state) => {
                return state + 1
        });*/
    }
    return (
        <div className={styles.comment}>
            {/*Componente Avatar*/}
            <Avatar borda={false} src={'https://github.com/MatheusHard.png'} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Matheus Hardman</strong>
                            <time 
                                title='12 de Fevereiro às 08:00'
                                dateTime='2024-02-12 08:00:00'>
                                à cerca de 2h
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentario'>
                            <ThumbsUp size={20}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>        
                <footer>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}