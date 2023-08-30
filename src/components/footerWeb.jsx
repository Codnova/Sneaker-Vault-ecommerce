import Container from "react-bootstrap/Container"

function FooterWeb() {
  return (
    
  <Container className="">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <span className="mb-3 mb-md-0 text-dark">© 2023 Eduardo Gómez</span>
      </div>
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a className="text-dark" href="https://github.com/Codnova">Github</a></li>
        <li className="ms-3"><a className="text-dark" href="https://twitter.com/codiox">Twitter</a></li>
        <li className="ms-3"><a className="text-dark" href="https://www.linkedin.com/in/mookid/">Linkedin</a></li>
      </ul>
    </footer>
  </Container>

  )
}

export default FooterWeb