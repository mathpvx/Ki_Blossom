const Map = () => {
  return (
    <div className="map_wrap">
      <div className="map" style={{ height: "400px" }}>
        <iframe
          src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=10&output=embed&iwloc=near"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
