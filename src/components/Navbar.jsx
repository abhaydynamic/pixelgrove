import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>pixelGROVE</div>
      <div style={styles.navLinks}></div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "rgba(255,255,255,0.5)",
    color: "#000",
    zIndex: "5",
    backdropFilter: "saturate(180%) blur(20px)",
    width: "100vw",
    height: "50px",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
  },
  searchInput: {
    padding: "0.5rem",
    marginRight: "1rem",
    borderRadius: "5px",
    border: "1px solid #000",
    outline: "none",
    width: "300px",
    paddingVertical: "5px",
    paddingLeft: "15px",
  },
  link: {
    color: "#000",
    textDecoration: "none",
    marginRight: "1rem",
  },
  signupButton: {
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#fff",
    color: "#333",
    cursor: "pointer",
  },
};

export default Navbar;
