import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledComponent = styled.div<{ color: string }>`
  width: 80vw;
  height: auto;
  background-color: ${(props) => `#${props.color}`};
  margin-top: var(--xl-sizing);
  padding: var(--xl-sizing);
  font-size: var(--l-sizing);
`;

const Component = () => (
  <StyledComponent color={Math.floor(Math.random() * 16777215).toString(16)}>
    Et adipiscing, minim duis.Duis occaecat anim aute. Anim aute, amet culpa ipsum. Culpa ipsum, sit aliquip voluptate.
    Aliquip voluptate et, consequat est nulla non. Consequat est, nulla non deserunt. Non deserunt est aliqua magna ex
    sit. Est aliqua magna ex sit excepteur reprehenderit. Magna, ex sit excepteur reprehenderit. Excepteur reprehenderit
    cupidatat, tempor enim exercitation. Tempor, enim exercitation do. Do sed qui enim voluptate ipsum et id. Qui enim
    voluptate ipsum et id irure.
  </StyledComponent>
);

type Props = {
  title: string;
};

const StyledPage = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: var(--xl-sizing);
  background-color: var(--primaryColor);

  h1 {
    margin-bottom: var(--l-sizing);
  }
`;

const Page1: React.FC<Props> = ({ title }) => {
  const navigate = useNavigate();
  return (
    <StyledPage>
      <h1>{title}</h1>
      <button onClick={() => navigate('/')}>Go home</button>
      {Array(10)
        .fill([])
        .map((_, index) => (
          <Component key={index} {..._} />
        ))}
    </StyledPage>
  );
};

export default Page1;
