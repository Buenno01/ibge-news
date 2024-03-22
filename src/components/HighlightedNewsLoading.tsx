import { motion } from 'framer-motion';
/* eslint-disable */

function HighlightedNewsLoading() {
  return (
    <motion.div
      data-testid="news-list-loading"
      className="lg:w-11/12 xl:w-9/12 lg:h-60vh md:w-2/3 sm:w-11/12
      border rounded-lg w-80 shadow-sm"
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

export default HighlightedNewsLoading;
