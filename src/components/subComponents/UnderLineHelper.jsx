const UnderLineHelper = ({ children, setUnderLine, id }) => {
  return (
    <div
      id={id}
      onMouseEnter={() => setUnderLine(id)}
      onMouseLeave={() => setUnderLine(null)}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

export default UnderLineHelper;
