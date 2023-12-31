import { PencilSimple } from 'phosphor-react';

import styles from './Sidebar.module.css';

import { Avatar } from '../Avatar/Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <Avatar
          src="https://avatars.githubusercontent.com/u/121953624?v=4"
          hasBorder
        />
        <strong>Bruno Carvalho</strong>
        <span>Frontend Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimple size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
