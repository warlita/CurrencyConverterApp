import React from 'react';

const Footer = () => {
  return (
    // Remove the container if you want to extend the Footer to full width.
    <div className="my-5">
      <footer className="text-center text-white" style={{ backgroundColor: '#ff69b4' }}>
       
        <div className="container">
       
          <section className="mb-2">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <p style= {{fontSize: '24px', fontWeight: 'bold'}}>
                  Thank you for using my Currency Converter!
                </p>
              </div>
            </div>
          </section>
      
          <section className="text-center mb-2">
            <a href="https://www.linkedin.com/in/analitavoss/" className="text-white me-4">
              <i className="fab fa-linkedin fa-lg" />
            </a>
            <a href="https://github.com/warlita" className="text-white me-4">
              <i className="fab fa-github fa-lg" />
            </a>
          </section>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          Altcademy Student: Analita Voss 2024
          <a className="text-white" href="https://www.altcademy.com/">   altcademy.com</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
