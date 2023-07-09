function Container({ children }) {
  return (
    <div className="flex flex-col h-screen w-screen justify-start items-center">
      {children}
    </div>
  );
}

export default Container;
