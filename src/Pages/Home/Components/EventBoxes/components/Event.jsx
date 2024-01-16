import "./Event.css";

function Event(props) {
  return (
    <div className="eventbox" >
      <div className="eventbox-title-box">
        <div className="eventbox-title">
          <strong> {props.text} </strong>
        </div>
      </div>
      <div className="eventbox-contant"  >
        <marquee behavior="scroll" direction="up" scrollamount="3" duration="1">
          <ul className="lst">
            <li>
              <center>
                <img
                  className="li-iimg"
                  src="/student/soni.jpeg"
                  alt=""
                />
                <br />
                <strong>Name: SONI KUMARI</strong>
                <br />
                <strong>Course: Advance Diploma in Computer Application</strong>
                <br />
                <strong>Branch: Global Computer Training Institute</strong>
              </center>
            </li>
            {/* --------------- */}
            <li>
              <center>
                <img
                  className="li-iimg"
                  src="/student/akash.jpeg"
                  alt=""
                />
                <br />
                <strong>Name: HIMANSHU PATEL</strong>
                <br />
                <strong>Course: Advance Diploma in Computer Application</strong>
                <br />
                <strong>Branch: Global Computer Training Institute</strong>
              </center>
            </li>
            {/* --------------- */}
            <li>
              <center>
                <img
                  className="li-iimg"
                  src="/student/beauti.jpeg"
                  alt=""
                />
                <br />
                <strong>Name: HIMANSHU PATEL</strong>
                <br />
                <strong>Course: Advance Diploma in Computer Application</strong>
                <br />
                <strong>Branch: Global Computer Training Institute</strong>
              </center>
            </li>
          </ul>
        </marquee>
      </div>
    </div>
  );
}

export default Event;
