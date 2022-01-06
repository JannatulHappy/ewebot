import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FooterBody from "../../Footer/FooterBody/FooterBody";
import AppointmentBtn from "../AppointmentBtn/AppointmentBtn";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";


const ProfessionalsDetails = ({ date, setDate }) => {
  const { id } = useParams();
  const [singleProfessional, setSingleProfessional] = useState([]);
  // getting single collection
  useEffect(() => {
    fetch(
      `https://murmuring-citadel-28008.herokuapp.com/singleProfessional/${id}`
    )
      .then((res) => res.json())
      .then((data) => setSingleProfessional(data));
  }, [id]);
  const { name, time, img, mail, designation, des1, experience, des2, phone } =
    singleProfessional;

  return (
    <div>
      <Container>
        <Grid container style={{ marginTop: "70px", marginBottom: "70px" }}>
          <Grid item xs={12} md={6}>
            <img style={{ width: "80%", height: "590px" }} src={img} alt="" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ pt: 4 }}
              style={{ color: " #3b3663", fontWeight: "600", fontSize: "18px" }}
            >
              {designation}
            </Typography>
            <Typography
              sx={{}}
              style={{ color: "#3b3663", fontWeight: "900", fontSize: "30px" }}
            >
              {name}
            </Typography>
            <Typography
              sx={{ py: 3 }}
              style={{ color: "#6c6c8a", fontWeight: "400", fontSize: "18px" }}
            >
              {des1}
            </Typography>
            <Typography
              sx={{ py: 1 }}
              style={{ color: "#6c6c8a", fontWeight: "400", fontSize: "18px" }}
            >
              {des2}
            </Typography>
            <Typography
              sx={{ pt: 5 }}
              style={{ color: "#6c6c8a", fontWeight: "400", fontSize: "17px" }}
            >
              <span sx={{ pt: 4 }}
                style={{ color: " #3b3663", fontWeight: "600", fontSize: "17px" }}> Experience: </span>
              {experience}
            </Typography>
            <Typography
              sx={{ pt: 1 }}
              style={{ color: "#6c6c8a", fontWeight: "400", fontSize: "17px" }}
            >
              <span sx={{ pt: 1 }}
                style={{ color: " #3b3663", fontWeight: "600", fontSize: "17px" }}> Mail: </span>
              {mail}
            </Typography>
            <Typography
              sx={{ pt: 1, pb: 2 }}
              style={{ color: "#6c6c8a", fontWeight: "400", fontSize: "17px" }}
            >
              <span sx={{ pt: 1 }}
                style={{ color: " #3b3663", fontWeight: "600", fontSize: "17px" }}> Phone: </span>
              {phone}
            </Typography>
            <span><i style={{ marginRight: '20px', color: " #00aced", fontWeight: "600", fontSize: "17px" }} className="fab fa-twitter"></i><i style={{ marginRight: '20px', color: " #3b5999", fontWeight: "600", fontSize: "17px" }} className="fab fa-facebook-f"></i> <i style={{ marginRight: '20px', color: "#367eb6", fontWeight: "600", fontSize: "17px" }} className="fab fa-linkedin-in"></i></span>
          </Grid>
        </Grid>
      </Container>
      <AppointmentBtn ProfessionalsName={name} appointmentTime={time} date={date} setDate={setDate}/>
      <FooterBody />
    </div>
  );
};

export default ProfessionalsDetails;
