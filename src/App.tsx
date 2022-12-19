import React from 'react';
import NavBar from './components/navbar/NavBar';
import ImageContainer from './components/Containers/ImageContainer';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// import './App.css';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <NavBar />
        <ImageContainer />
      </Provider>
    </div>
  );
}

export default App;
