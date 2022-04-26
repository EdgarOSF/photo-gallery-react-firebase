import { motion } from 'framer-motion';

const Modal = ({ imgSelected, setImgSelected }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setImgSelected(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={handleClick}
    >
      <motion.img
        src={imgSelected}
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        alt="image-expanded"
      />
    </motion.div>
  );
};

export default Modal;
