"use client"

export default function AddressMap() {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.837457162487!2d31.04312727434999!3d-17.799334675510693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a56d79dcf7f9%3A0x58f5441bd3cc991f!2s6%20Natal%20Rd%2C%20Harare!5e0!3m2!1sen!2szw!4v1773311722193!5m2!1sen!2szw"
        width="1600"
        height="560"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      />
    </div>
  );
};