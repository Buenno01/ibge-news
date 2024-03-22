import { motion } from 'framer-motion';
/* eslint-disable */

function NewCardLoading() {
  return (
    <motion.div
      className="w-72 h-60 lg:w-385 lg:h-370 rounded-lg mx-auto shadow-sm border"
      initial={ {
        background: 'linear-gradient(90deg, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.1) 1% ,rgba(0,0,0,0.01) 100%)',
      } }
      animate={ {
        background: 'linear-gradient(90deg, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.08) 99%, rgba(0,0,0,0.01) 100%)',
      } }
      transition={ { repeat: Infinity, duration: 1 } }
    />
  );
}

export default NewCardLoading;
