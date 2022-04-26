import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImagesGrid = ({ setImgSelected }) => {
  const { docs } = useFirestore('images');

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            className="img-wrap"
            key={doc.id}
            onClick={() => setImgSelected(doc.url)}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              src={doc.url}
              alt="uploaded pic"
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImagesGrid;
