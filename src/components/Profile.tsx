import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/alansouza1.png" alt="Alan Souza" />
      <div>
        <strong>Alan Souza</strong>
        <p>Level 1</p>
      </div>
    </div>
  );
}
