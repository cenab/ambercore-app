import { motion } from "framer-motion";

const App = () => (
  <div className="flex items-center justify-center h-screen bg-gray-100">
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8 bg-white rounded shadow"
    >
      <h1 className="text-2xl font-bold">Hello, NextUI + Vite!</h1>
    </motion.div>
  </div>
);

export default App;
