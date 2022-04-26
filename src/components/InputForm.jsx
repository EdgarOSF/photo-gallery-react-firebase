import { useState } from 'react';
import ProgressBar from './ProgressBar';

const InputForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const changeHandler = (e) => {
    const selected = e.target.files[0];

    const types = ['image/png', 'image/jpeg'];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Por favor seleccione un archivo de tipo: png o jpeg');
    }
  };

  return (
    <form>
    <label>
      <input type="file" onChange={changeHandler} />
      <span>+</span>
    </label>
      {error && <div className="error">{error}</div>}
      {file && <div>{file.name}</div>}
      {file && <ProgressBar file={file} setFile={setFile} />}
    </form>
  );
};

export default InputForm;
