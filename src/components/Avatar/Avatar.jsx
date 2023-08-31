import styles from './Avatar.module.css';

export function Avatar({ hasBorder = false, src }) {
  return (
    <img 
      className={hasBorder ? styles.avatar : styles.avatarWithBorder} 
      src={src}
    />
  );
}