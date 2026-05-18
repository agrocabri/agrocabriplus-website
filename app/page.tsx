export default function Home() {
  return (
    <main>

      <nav
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    backgroundColor: "#0b4d1f",
    color: "white",
  }}
>
  <h2>Agrocabriplus</h2>

<div
  style={{
    display: "flex",
    gap: "30px",
    fontWeight: "bold",
  }}

>
  <li><a href="#home">Akèy</a></li>
<li><a href="#services">Sèvis</a></li>
<li><a href="#products">Pwodwi</a></li>

<li><a href="#contact">Kontakte</a></li>
  </div>
    </nav>

<section id="home"
  style={{
    backgroundImage: "url('/kabrit.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "cover",
    minHeight: "40vh",
    display: "flex",
    alignItems: "center",
    padding: "60px",
  }}
>

  <div
  style={{
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "10px",
    maxWidth: "600px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  }}
>
  <h1
    style={{
      fontSize: "48px",
      fontWeight: "bold",
      color: "#0b4d1f",
      marginBottom: "20px",
      lineHeight: "1.1",
    }}
  >
    Byenveni sou <br />
    AgroCabriPlus
  </h1>

  <p
    style={{
      fontSize: "20px",
      color: "#333",
      lineHeight: "1.6",
      marginBottom: "25px",
    }}
  >
    Nou vann kabrit, pwodui agrikòl ak sèvis elvaj modèn
    pou ede agrikilti devlope ak reyisi.
  </p>

  <div
    style={{
      display: "flex",
      gap: "10px",
    }}
  >
    <button
      style={{
        backgroundColor: "#0b4d1f",
        color: "white",
        border: "none",
        padding: "5px 10px",
        borderRadius: "5px",
        fontSize: "15px",
        cursor: "pointer",
      }}
    >
      <a href="#services">
  <button>Dekouvri Sèvis Nou yo</button>
</a>
    </button>

    <button
      style={{
        backgroundColor: "white",
        color: "#0b4d1f",
        border: "2px solid #0b4d1f",
        padding: "5px 10px",
        borderRadius: "5px",
        fontSize: "15px",
        cursor: "pointer",
      }}
    >
     <a href="#products">
  <button>Gade Pwodwi Nou yo</button>
</a> 
    </button>
  </div>
</div>
</section>
<footer
  style={{
    backgroundColor: "#0b4d1f",
    color: "white",
    padding: "60px 40px 30px",
    marginTop: "80px",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "40px",
      maxWidth: "1400px",
      margin: "0 auto",
    }}
  >

    {/* Logo + Description */}
    <div>
      <h2
        style={{
          fontSize: "32px",
          marginBottom: "20px",
        }}
      >
        AgroCabriPlus
      </h2>

      <p
        style={{
          lineHeight: "1.8",
          color: "#d1d5db",
        }}
      >
        AgroCabriPlus se yon pwojè agrikòl modèn ki espesyalize
        nan elvaj kabrit ak pwodwi agrikòl kalite.
      </p>
    </div>

    {/* Services */}
    <div>
      <h3
        style={{
          fontSize: "24px",
          marginBottom: "20px",
        }}
      >
        Sèvis
      </h3>

      <p>Elvaj Kabrit</p>
      <p>Vant Kabrit</p>
      <p>Lèt Kabrit</p>
      <p>Fimye Òganik</p>
    </div>

    {/* Quick Links */}
    <div>
      <h3
        style={{
          fontSize: "24px",
          marginBottom: "20px",
        }}
      >
        Navigasyon
      </h3>

      <p><a href="#home" style={{ color: "white", textDecoration: "none" }}>Akèy</a></p>

      <p><a href="#services" style={{ color: "white", textDecoration: "none" }}>Sèvis</a></p>

      <p><a href="#products" style={{ color: "white", textDecoration: "none" }}>Pwodwi</a></p>

      <p><a href="#contact" style={{ color: "white", textDecoration: "none" }}>Kontakte</a></p>
    </div>

    {/* Contact */}
    <div>
      <h3
        style={{
          fontSize: "24px",
          marginBottom: "20px",
        }}
      >
        Kontakte
      </h3>

      <p>📍 Hinche, Haïti</p>

      <p>📞 +18496510698</p>

      <p>📧 agrocabriplus@gmail.com</p>

      <a
        href="https://wa.me/18496510698"
        target="_blank"
        style={{
          display: "inline-block",
          marginTop: "20px",
          backgroundColor: "white",
          color: "#0b4d1f",
          padding: "12px 20px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        WhatsApp Nou
      </a>
    </div>

  </div>

  {/* Bottom */}
  <div
    style={{
      borderTop: "1px solid rgba(255,255,255,0.2)",
      marginTop: "50px",
      paddingTop: "20px",
      textAlign: "center",
      color: "#d1d5db",
    }}
  >
    ©️ 2026 AgroCabriPlus — Tout dwa rezève.
  </div>
</footer>
{/* SERVICES SECTION */}
<section id="services"
  style={{
    backgroundColor: "#f3f7f2",
    padding: "60px 40px",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "42px",
      color: "#14532d",
      marginBottom: "50px",
      fontWeight: "bold",
    }}
  >
    Sèvis Nou Ofri
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "25px",
    }}
  >
    {/* CARD 1 */}
    <div
      style={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ color: "#166534", fontSize: "28px" }}>
        🐐 Elvaj Kabrit
      </h3>

      <p style={{ marginTop: "15px", color: "#555" }}>
        Nou ofri konsèy ak sipò nan elvaj kabrit modèn.
      </p>

      <button
        style={{
          marginTop: "20px",
          backgroundColor: "#166534",
          color: "white",
          border: "none",
          padding: "12px 20px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Aprann plis
      </button>
    </div>

    {/* CARD 2 */}
    <div
      style={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ color: "#166534", fontSize: "28px" }}>
        🌱 Pwodwi Agrikòl
      </h3>

      <p style={{ marginTop: "15px", color: "#555" }}>
        Nou vann pwodwi agrikòl kalite pou kliyan nou yo.
      </p>

      <button
        style={{
          marginTop: "20px",
          backgroundColor: "#166534",
          color: "white",
          border: "none",
          padding: "12px 20px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Aprann plis
      </button>
    </div>

    {/* CARD 3 */}
    <div
      style={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ color: "#166534", fontSize: "28px" }}>
        🎓 Fòmasyon
      </h3>

      <p style={{ marginTop: "15px", color: "#555" }}>
        Fòmasyon sou teknik agrikòl ak jesyon fèm.
      </p>

      <button
        style={{
          marginTop: "20px",
          backgroundColor: "#166534",
          color: "white",
          border: "none",
          padding: "12px 20px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Aprann plis
      </button>
    </div>

    {/* CARD 4 */}
    <div
      style={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ color: "#166534", fontSize: "28px" }}>
        🤝 Sipò
      </h3>

      <p style={{ marginTop: "15px", color: "#555" }}>
        Nou ede kliyan yo ak konsèy pwofesyonèl.
      </p>

      <button
        style={{
          marginTop: "20px",
          backgroundColor: "#166534",
          color: "white",
          border: "none",
          padding: "12px 20px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Aprann plis
      </button>
    </div>
  </div>
</section>

<section id="produits"
  style={{
    padding: "80px 40px",
    backgroundColor: "#f5f7f4",
  }}
>
  <h2
    style={{
      textAlign: "center",
      fontSize: "42px",
      color: "#14532d",
      marginBottom: "50px",
      fontWeight: "bold",
    }}
  >
    Pwodwi Nou Vann
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "25px",
      maxWidth: "1400px",
      margin: "0 auto",
    }}
  >

    {/* Kabrit */}
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src="/kabrit.jpg"
        alt="Kabrit Viv"
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "25px" }}>
        <h3 style={{ fontSize: "28px", marginBottom: "15px" }}>
          Kabrit kalite
        </h3>

        <p style={{ color: "#555", lineHeight: "1.6" }}>
          Nou vann kabrit kalite pou elvaj ak repwodiksyon.
        </p>
      </div>
    </div>

    {/* Vyann Kabrit */}
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src="/vyannkabrit.jpg"
        alt="Vyann Kabrit"
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "25px" }}>
        <h3 style={{ fontSize: "28px", marginBottom: "15px" }}>
          Vyann Kabrit
        </h3>

        <p style={{ color: "#555", lineHeight: "1.6" }}>
          Vyann fre ak bon kalite pou konsomasyon.
        </p>
      </div>
    </div>

    {/* Lèt Kabrit */}
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src="/lètkabrit.jpg"
        alt="Lèt Kabrit"
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "25px" }}>
        <h3 style={{ fontSize: "28px", marginBottom: "15px" }}>
          Lèt Kabrit
        </h3>

        <p style={{ color: "#555", lineHeight: "1.6" }}>
          Lèt natirèl ki bon pou sante ak nitrisyon.
        </p>
      </div>
    </div>

    {/* Fimye */}
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src="/fimye.jpg"
        alt="Fimye Òganik"
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "25px" }}>
        <h3 style={{ fontSize: "28px", marginBottom: "15px" }}>
          Fimye Òganik
        </h3>

        <p style={{ color: "#555", lineHeight: "1.6" }}>
          Bon angrè natirèl pou agrikilti ak jaden.
        </p>
      </div>
    </div>

  </div>
</section>

<section
  id="contact"
  style={{
    padding: "60px 20px",
    backgroundColor: "#0b4d1f",
    color: "white",
    textAlign: "center",
  }}
>
  <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>
    Kontakte Nou
  </h2>

  <p style={{ fontSize: "20px", marginBottom: "30px" }}>
    Kontakte AgroCabriPlus pou achte pwodwi oswa jwenn plis enfòmasyon.
  </p>

  <a
    href="https://wa.me/18496510698?text=Bonjou%20AgroCabriPlus"
    target="_blank"
    style={{
      backgroundColor: "white",
      color: "#0b4d1f",
      padding: "15px 30px",
      borderRadius: "10px",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "18px",
    }}
  >
    WhatsApp Nou
  </a>
</section>

<section
  style={{
    padding: "90px 40px",
    backgroundColor: "white",
  }}
>
  <h2
    style={{
      textAlign: "center",
      fontSize: "42px",
      color: "#14532d",
      marginBottom: "60px",
      fontWeight: "bold",
    }}
  >
    Poukisa Chwazi AgroCabriPlus
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "25px",
      maxWidth: "1400px",
      margin: "0 auto",
    }}
  >

    {/* Kalite */}
    <div
      style={{
        backgroundColor: "#f5f7f4",
        padding: "35px",
        borderRadius: "20px",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "60px", marginBottom: "20px" }}>
        🐐
      </div>

      <h3
        style={{
          fontSize: "26px",
          color: "#14532d",
          marginBottom: "15px",
        }}
      >
        Bon Kalite
      </h3>

      <p style={{ color: "#555", lineHeight: "1.7" }}>
        Nou elve kabrit ki an sante ak bon kalite pou kliyan nou yo.
      </p>
    </div>

    {/* Sante */}
    <div
      style={{
        backgroundColor: "#f5f7f4",
        padding: "35px",
        borderRadius: "20px",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "60px", marginBottom: "20px" }}>
        💚
      </div>

      <h3
        style={{
          fontSize: "26px",
          color: "#14532d",
          marginBottom: "15px",
        }}
      >
        Swen Veterinè
      </h3>

      <p style={{ color: "#555", lineHeight: "1.7" }}>
        Nou bay bèt yo bon swen pou garanti pwodiksyon kalite.
      </p>
    </div>

    {/* Livrezon */}
    <div
      style={{
        backgroundColor: "#f5f7f4",
        padding: "35px",
        borderRadius: "20px",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "60px", marginBottom: "20px" }}>
        🚚
      </div>

      <h3
        style={{
          fontSize: "26px",
          color: "#14532d",
          marginBottom: "15px",
        }}
      >
        Sèvis Rapid
      </h3>

      <p style={{ color: "#555", lineHeight: "1.7" }}>
        Nou sèvi kliyan yo rapid ak pwofesyonalis.
      </p>
    </div>

    {/* Konfyans */}
    <div
      style={{
        backgroundColor: "#f5f7f4",
        padding: "35px",
        borderRadius: "20px",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "60px", marginBottom: "20px" }}>
        ⭐
      </div>

      <h3
        style={{
          fontSize: "26px",
          color: "#14532d",
          marginBottom: "15px",
        }}
      >
        Konfyans
      </h3>

      <p style={{ color: "#555", lineHeight: "1.7" }}>
        AgroCabriPlus travay ak transparans ak serye.
      </p>
    </div>

  </div>
</section>
<footer
  style={{
    backgroundColor: "#0b4d1f",
    color: "white",
    padding: "60px 40px 30px",
    marginTop: "80px",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "40px",
      maxWidth: "1400px",
      margin: "0 auto",
    }}
  >

    {/* Logo + Description */}
    <div>
      <h2
        style={{
          fontSize: "32px",
          marginBottom: "20px",
        }}
      >
        AgroCabriPlus
      </h2>

      <p
        style={{
          lineHeight: "1.8",
          color: "#d1d5db",
        }}
      >
        AgroCabriPlus se yon pwojè agrikòl modèn ki espesyalize
        nan elvaj kabrit ak pwodwi agrikòl kalite.
      </p>
    </div>

    {/* Services */}
    <div>
      <h3
        style={{
          fontSize: "24px",
          marginBottom: "20px",
        }}
      >
        Sèvis
      </h3>

      <p>Elvaj Kabrit</p>
      <p>Vant Kabrit</p>
      <p>Lèt Kabrit</p>
      <p>Fimye Òganik</p>
    </div>

    {/* Quick Links */}
    <div>
      <h3
        style={{
          fontSize: "24px",
          marginBottom: "20px",
        }}
      >
        Navigasyon
      </h3>

      <p><a href="#home" style={{ color: "white", textDecoration: "none" }}>Akèy</a></p>

      <p><a href="#services" style={{ color: "white", textDecoration: "none" }}>Sèvis</a></p>

      <p><a href="#products" style={{ color: "white", textDecoration: "none" }}>Pwodwi</a></p>

      <p><a href="#contact" style={{ color: "white", textDecoration: "none" }}>Kontakte</a></p>
    </div>

    {/* Contact */}
    <div>
      <h3
        style={{
          fontSize: "24px",
          marginBottom: "20px",
        }}
      >
        Kontakte
      </h3>

      <p>📍 Hinche, Haïti</p>

      <p>📞 +18496510698</p>

      <p>📧 agrocabriplus@gmail.com</p>

      <a
        href="https://wa.me/18496510698"
        target="_blank"
        style={{
          display: "inline-block",
          marginTop: "20px",
          backgroundColor: "white",
          color: "#0b4d1f",
          padding: "12px 20px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        WhatsApp Nou
      </a>
    </div>

  </div>

  {/* Bottom */}
  <div
    style={{
      borderTop: "1px solid rgba(255,255,255,0.2)",
      marginTop: "50px",
      paddingTop: "20px",
      textAlign: "center",
      color: "#d1d5db",
    }}
  >
    ©️ 2026 AgroCabriPlus — Tout dwa rezève.
  </div>
</footer>
<section
  style={{
    padding: "90px 40px",
    backgroundColor: "#f5f7f4",
  }}
>
  <h2
    style={{
      textAlign: "center",
      fontSize: "42px",
      color: "#14532d",
      marginBottom: "60px",
      fontWeight: "bold",
    }}
  >
    Galeri AgroCabriPlus
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
      maxWidth: "1400px",
      margin: "0 auto",
    }}
  >

    <img
      src="/im1.jpg"
      alt="im1"
      style={{
        width: "100%",
        height: "300px",
        objectFit: "cover",
        borderRadius: "20px",
      }}
    />

    <img
      src="/im2.jpg"
      alt="im2"
      style={{
        width: "100%",
        height: "300px",
        objectFit: "cover",
        borderRadius: "20px",
      }}
    />

    <img
      src="/im3.jpg"
      alt="im3"
      style={{
        width: "100%",
        height: "300px",
        objectFit: "cover",
        borderRadius: "20px",
      }}
    />

    <img
      src="/im4.jpg"
      alt="im4"
      style={{
        width: "100%",
        height: "300px",
        objectFit: "cover",
        borderRadius: "20px",
      }}
    />

    <img
      src="/im5.jpg"
      alt="im5"
      style={{
        width: "100%",
        height: "300px",
        objectFit: "cover",
        borderRadius: "20px",
      }}
    />

    <img
      src="/im6.jpg"
      alt="im 6"
      style={{
        width: "100%",
        height: "300px",
        objectFit: "cover",
        borderRadius: "20px",
      }}
    />

  </div>
</section>
<footer
  style={{
    backgroundColor: "#0b4d1f",
    color: "white",
    padding: "60px 40px 30px",
    marginTop: "80px",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "40px",
      maxWidth: "1400px",
      margin: "0 auto",
    }}
  >

    {/* Logo + Description */}
    <div>
      <h2
        style={{
          fontSize: "32px",
          marginBottom: "20px",
        }}
      >
        AgroCabriPlus
      </h2>

      <p
        style={{
          lineHeight: "1.8",
          color: "#d1d5db",
        }}
      >
        AgroCabriPlus se yon pwojè agrikòl modèn ki espesyalize
        nan elvaj kabrit ak pwodwi agrikòl kalite.
      </p>
    </div>

    {/* Services */}
    <div>
      <h3
        style={{
          fontSize: "24px",
          marginBottom: "20px",
        }}
      >
        Sèvis
      </h3>

      <p>Elvaj Kabrit</p>
      <p>Vant Kabrit</p>
      <p>Lèt Kabrit</p>
      <p>Fimye Òganik</p>
    </div>

    {/* Quick Links */}
    <div>
      <h3
        style={{
          fontSize: "24px",
          marginBottom: "20px",
        }}
      >
        Navigasyon
      </h3>

      <p><a href="#home" style={{ color: "white", textDecoration: "none" }}>Akèy</a></p>

      <p><a href="#services" style={{ color: "white", textDecoration: "none" }}>Sèvis</a></p>

      <p><a href="#products" style={{ color: "white", textDecoration: "none" }}>Pwodwi</a></p>

      <p><a href="#contact" style={{ color: "white", textDecoration: "none" }}>Kontakte</a></p>
    </div>

    {/* Contact */}
    <div>
      <h3
        style={{
          fontSize: "24px",
          marginBottom: "20px",
        }}
      >
        Kontakte
      </h3>

      <p>📍 Hinche, Haïti</p>

      <p>📞 +18496510698</p>

      <p>📧 agrocabriplus@gmail.com</p>

      <a
        href="https://wa.me/18496510698"
        target="_blank"
        style={{
          display: "inline-block",
          marginTop: "20px",
          backgroundColor: "white",
          color: "#0b4d1f",
          padding: "12px 20px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        WhatsApp Nou
      </a>
    </div>

  </div>

  {/* Bottom */}
  <div
    style={{
      borderTop: "1px solid rgba(255,255,255,0.2)",
      marginTop: "50px",
      paddingTop: "20px",
      textAlign: "center",
      color: "#d1d5db",
    }}
  >
    ©️ 2026 AgroCabriPlus — Tout dwa rezève.
  </div>
</footer>
</main>
  )
}
