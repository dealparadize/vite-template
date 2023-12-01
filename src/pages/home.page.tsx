import dpLogo from '@/assets/dealparadize.svg';
import reactLogo from '@/assets/react.svg';
import viteLogo from '@/assets/vite.svg';
import { useTheme } from '@/hooks/use-theme';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
  margin: var(--xs-sizing);
`;

const StyledPage = styled.div`
  display: flex;
  flex-flow: column;
  width: 100vw;
  min-height: 100vh;
  place-items: center;
  justify-content: center;
  padding: var(--l-sizing);

  .logo {
    height: 6em;
    padding: 1em;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    a:nth-of-type(2) .logo {
      animation: logo-spin infinite 20s linear;
    }
  }

  .read-the-docs {
    color: #888;
  }

  .card {
    display: flex;
    flex-flow: column;
    place-items: center;
    padding: 2em;
  }
`;

const HomePage = () => {
  const { setBrowserDefaultTheme, setLightTheme, setDarkTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <StyledPage>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <a href="https://github.com/dealparadize" target="_blank" rel="noreferrer">
          <img src={dpLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + dealparadize + TS</h1>
      <div className="card">
        <button onClick={setBrowserDefaultTheme}>Browser</button>
        <button onClick={setLightTheme}>Light</button>
        <button onClick={setDarkTheme}>Dark</button>
        <Div />
        <p>Navigate</p>
        <Div />
        <button onClick={() => navigate('/page1')}>Page 1</button>
        <p>
          Edit <code>src/App.tsx</code> to start coding
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </StyledPage>
  );
};

export default HomePage;
