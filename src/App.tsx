import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://curiosamente.diariodepernambuco.com.br/wp-content/uploads/2016/03/batm%C3%B3vel.jpg">
        meu filme favorito e o batiman.
      </Post>
    </div>
  );
}

export default App;


