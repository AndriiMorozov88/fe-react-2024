import { AboutComponent } from './components/about/About.component.tsx';
import { FooterComponent } from './components/footer/Footer.component.tsx';
import { HeaderComponent } from './components/header/Header.component.tsx';

import styles from './App.module.css';

function App() {
    return (
        <div className={styles.wrapper}>
            <HeaderComponent />
            <AboutComponent />
            <FooterComponent />
        </div>
    );
}
export default App;
