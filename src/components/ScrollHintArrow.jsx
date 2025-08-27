import { motion } from 'framer-motion';

export const ScrollHintArrow = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      style={{
        position: 'relative',
        fontSize: '2rem',
        // color: 'var(--text-color)',
      }}
    >
      ↓
    </motion.div>
  );
};
