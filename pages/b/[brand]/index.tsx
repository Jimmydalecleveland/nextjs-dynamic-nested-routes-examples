export interface indexProps {
  children: React.ReactNode;
}

const index = ({ children }: indexProps) => {
  return (
    <div>
      <h1>Test</h1>
      {children}
    </div>
  );
};

export default index;
