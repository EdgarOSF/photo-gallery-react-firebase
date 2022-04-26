import reactDom from 'react-dom';
import { useState } from 'react';
import ImagesGrid from './components/ImagesGrid';
import InputForm from './components/InputForm';
import Modal from './components/Modal';
import Title from './components/Title';
import './index.css';

const App = () => {
  const [imgSelected, setImgSelected] = useState(null);

  return (
    <div className="App">
      <Title />
      <InputForm />
      <ImagesGrid setImgSelected={setImgSelected} />
      {imgSelected && <Modal imgSelected={imgSelected} setImgSelected={setImgSelected} />}
    </div>
  );
};
const container = document.getElementById('root');

reactDom.render(<App />, container);
