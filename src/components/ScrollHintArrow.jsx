import { motion } from 'framer-motion';

export const ScrollHintArrow = () => {
  return (
    <motion.div
        className='scroll-hint-arrow'
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
    >
      ↓
    </motion.div>
  );
};
