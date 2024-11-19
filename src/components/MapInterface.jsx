const MapInterface = () => {
  const iframeStyle = {
    border: "0",
    width: "100%",
    height: "500px", // Adjust height as needed
  };

  return (
    <div style={{ margin: "20px 0", textAlign: "center" }}>
      <h2>Christmas Lights Map</h2>
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1R9_K86KnHqiBoCPGvfOHsZkPcAZeJVc&ehbc=2E312F&noprof=1"
        style={iframeStyle}
        allowFullScreen
        title="Christmas Lights Map"
      ></iframe>
    </div>
  );
};

export default MapInterface;
