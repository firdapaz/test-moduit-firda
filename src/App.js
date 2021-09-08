import logo from './logo.svg';
import './App.css';
import QuestionProvider from './context/questionContext';
import Content from './screens';

function App() {
  return (
    <QuestionProvider>
      <Content />
    </QuestionProvider>
  );
}

export default App;
