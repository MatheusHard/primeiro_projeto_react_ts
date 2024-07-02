import styles from './Avatar.module.css'

export function Avatar({borda = true, src}){

    console.log('borda', borda)
    return(
        <img className={ borda ? styles.avatarBordas : styles.avatar } src={ src }/>
    );
}