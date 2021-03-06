import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h1 className="text-uppercase mb-4 mt-3 font-weight-bold">
              EventBook
            </h1>
            <p>
              Uma plataforma para eventos. Crie uma conta ou sigam-nos nas redes sociais
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Apresentações
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Palestras</a>
              </li>
              <li>
                <a href="#!">Eventos</a>
              </li>
              <li>
                <a href="#!">Conferências</a>
              </li>
              <li>
                <a href="#!">Eventos</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Links
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Palestras</a>
              </li>
              <li>
                <a href="#!">Eventos</a>
              </li>
              <li>
                <a href="#!">Conferências</a>
              </li>
              <li>
                <a href="#!">Workshops</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Links
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Simpósios</a>
              </li>
              <li>
                <a href="#!">Palestras</a>
              </li>
              <li>
                <a href="#!">Eventos</a>
              </li>
              <li>
                <a href="#!">Meet Ups</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />
      <div className="text-center py-3">
        <ul className="list-unstyled list-inline mb-0">
          <li className="list-inline-item">
            <h5 className="mb-1">Faça o seu cadastro para aproveitar o melhor da plataforma</h5>
          </li>
          <li className="list-inline-item">
            <a href="#!" className="btn btn-danger btn-rounded">
              Cadastre-se!
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-fb mx-1">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-tw mx-1">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-gplus mx-1">
              <i className="fab fa-google-plus"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-li mx-1">
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-dribbble mx-1">
              <i className="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="/"> EventBook</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;