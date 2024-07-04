const ContentComponent = ({ children }) => {
  return (
    <main className="flex-1 lg:m-4 m-2 lg:p-4 p-2 bg-gray-400 rounded-md">
      {children}
    </main>
  );
};

export default ContentComponent;
