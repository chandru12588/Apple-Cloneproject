import React from "react";

const TVSection = () => (
  <section
    data-aos="fade-up"
    style={{
      textAlign: "center",
      backgroundColor: "#000",
      color: "#fff",
      padding: "80px 20px",
    }}
  >
    <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Apple TV+</h2>
    <p style={{ color: "#aaa", fontSize: "18px" }}>
      Watch “Fountain of Youth” — now streaming.
    </p>
    <div style={{ margin: "40px auto", maxWidth: "1000px" }}>
      <a
        href="https://tv.apple.com/in/movie/fountain-of-youth/umc.cmc.z5xrwbjg3gergiowhrzg61tq?l=en-GB?itscg=10000&itsct=atv-apl_hp-stream_now--220622"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://is1-ssl.mzstatic.com/image/thumb/Video/v4/69/53/6e/69536e32-5c0a-2bff-8c08-48dfae59a49a/Job1b80bda1-981b-4dc4-a802-d4b2b5b7cf03-139679283-PreviewImage_preview_image_nonvideo_sdr-Time1627908853976.png/1000x563sr.webp"
          alt="Fountain of Youth"
          style={{ borderRadius: "20px", width: "100%", maxWidth: "1000px" }}
        />
      </a>
    </div>
    <a
      href="https://tv.apple.com/in/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#2997ff" }}
    >
      Stream now on Apple TV+
    </a>
  </section>
);

export default TVSection;
