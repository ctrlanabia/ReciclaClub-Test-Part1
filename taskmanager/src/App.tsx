import { Header } from './components/Header';
import { render } from '@testing-library/react';
import { Page, usePage } from './contexts/Page';

const App = () => {
  const { page } = usePage();

  const renderSwitch = () => {
    switch (page){
      case Page.Tasks:
        return <div>Task</div>;
      case Page.Authors:
        return <div>Authors</div>;
      default:
        return '';
    }
  };

  return (
    <div className="App">
      <Header />
      {renderSwitch()}
    </div>
  );
}

export default App;
