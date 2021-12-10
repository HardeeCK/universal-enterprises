const Contact = () => {

    return(
    <div class="contact3 py-5">
    <div class="row no-gutters">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="card-shadow">
              <img src="./contact.png" class="img-fluid" height='100px'></img>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="contact-box ml-3">
              <h1 class="font-weight-light mt-2">Contact Us</h1>
              <form class="mt-4" method="POST">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group mt-2">
                      <input class="form-control" type="text" placeholder="Name"></input>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mt-2">
                      <input class="form-control" type="email" placeholder="Email address"></input>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mt-2">
                      <input class="form-control" type="text" placeholder="Phone number"></input>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mt-2">
                      <textarea class="form-control" rows="3" placeholder="Type your message here"></textarea>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <button variant="primary" style={{backgroundColor: '#7FD444', border: 'none', textalign: 'center', textdecoration: 'none', width: '140px', height: '40px'}} type="submit">
                    Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="card mt-4 border-0 mb-4">
              <div class="row">
                <div class="col-lg-4 col-md-4">
                  <div class="card-body d-flex align-items-center c-detail pl-0">
                    <div class="mr-3 align-self-center">
                      <img src="./mail (1).png" width="70px" height="70px"></img>
                    </div>
                    <div class="">
                      <a href = "mailto: universalenterprises2207@gmail.com"><h6 class="font-weight-medium">Email</h6></a>
                      <p class=""> universalenterprises2207@gmail.com
                        <br/>  </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <div class="card-body d-flex align-items-center c-detail">
                    <div class="mr-3 align-self-center">
                      <img src="./whatsapp.png" width="70px" height="70px"></img>
                    </div>
                    <div class="">
                      <a href ="https://api.whatsapp.com/send/?phone=919833540540&text&app_absent=0"><h6 class="font-weight-medium">WhatsApp</h6></a>
                      <p class="">(+91) 9833540540
                        <br/> </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <div class="card-body d-flex align-items-center c-detail">
                    <div class="mr-3 align-self-center">
                      <img src="./facebook.png" width="70px" height="70px"></img>
                    </div>
                    <div class="">
                      <a href = "https://www.facebook.com/Universal-Enterprises-104724225390593"><h6 class="font-weight-medium">Facebook</h6></a>
                      <p class=""> Universal Enterprises
                        <br/> </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Contact;


{/* // import React from "react";
// import { Outlet } from "react-router-dom";
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';

// function Contact() {
//   return (
//     <div className="home">
//       <div class="container">
//         <h1 className="text-center mt-5">Contact Us</h1>
//         <a href = "mailto: universalenterprises2207@gmail.com"><h2 className="text-center mt-5"><MailOutlineIcon/> Email - universalenterprises2207@gmail.com</h2></a>
//         <a href ="https://api.whatsapp.com/send/?phone=919833540540&text&app_absent=0"><h2 className="text-center mt-5"><WhatsAppIcon/>WhatsApp - +91 9833540540</h2></a>
//         <a href = "https://www.instagram.com/universalenterprises2207/"><h2 className="text-center mt-5"><InstagramIcon/>Instagram - universalenterprises2207</h2></a>
//         <a href = "https://www.facebook.com/Universal-Enterprises-104724225390593"><h2 className="text-center mt-5"><FacebookIcon/>Facebook - Universal Enterprises</h2></a>
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// export default Contact; */}
