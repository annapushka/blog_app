import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import './styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';


const App = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter />
        </div>
    );
};

export default App;
