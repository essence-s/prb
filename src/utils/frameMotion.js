const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.1
    }
  }
}
const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};


export { container, item }