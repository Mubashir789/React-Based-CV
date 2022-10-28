import React from "react";
import ReactDOM from "react-dom";

function Hi() {
  return (
    <div>
      <center>
        <h1> Curriculum Vitae ( CV ) </h1>
        <h3>Name: Muhammad Mubashir</h3>
        <h3>Mobile Number : 03312386596</h3>
        <h3>E-mail : mubashir37890@gmail.com</h3>
        <br />
        <h2> PERSONAL INFOEMATION </h2>
        <ul>
          Father Name : Muhammad Ali
          <br />
          Religion : Islam
          <br />
          CNIC : ********
          <br />
          Date of Birth : 06 August 2003
          <br />
          Nationality : Pakistani
          <br />
          Marital Status : Single
          <br />
        </ul>
        <br />
        <h2> QUALIFICATION </h2>
        <table border="1">
          <tr>
            <th> Examination</th>
            <th> Division</th>
            <th> Board/University</th>
          </tr>
          <tr>
            <td> Matric (Computer Science)</td>
            <td> A+</td>
            <td> Karachi Board (BSEK)</td>
          </tr>
          <tr>
            <td> Intermediate (pre-engineering)</td>
            <td> A</td>
            <td> Karachi Board (BIEK)</td>
          </tr>
          <tr>
            <td> BS in Information Technology ( IT ) </td>
            <td> A</td>
            <td> Sir Syed University (SSUET)</td>
          </tr>
        </table>
        <br />
        <h2> Personal Certificates & Skills </h2>
        <ul>
          Cisco Certified Network Associate ( CCNA )(Certified by Cisco) <br />
          Artifical Intelligence & Chatbot <br />
          Cyber Operation (Cyber Ops)(Certified by Cisco)
          <br />
          Data Analysis
          <br />
        </ul>
        <h2> Languages </h2>
        <ul>
          Urdu
          <br />
          English
          <br />
        </ul>
      </center>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));