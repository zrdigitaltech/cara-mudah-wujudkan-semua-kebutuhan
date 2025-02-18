const Index = (props) => {
  const { title } = props;
  return (
    <div className="loader">
      <img src="/assets/images/192x192.png" alt={title} loading="lazy" />
    </div>
  );
};

export default Index;
