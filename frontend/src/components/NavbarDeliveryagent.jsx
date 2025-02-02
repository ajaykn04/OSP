import {
  AppBar,
  Avatar,
  Button,
  Container,
  IconButton,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from 'react'
import { useNavigate } from "react-router-dom";
import iconImage from "/logo1.png";
import profileImage from "/defaultlogin.png";

const StyledToolbar = styled(Toolbar)`
  background-color: black;
`;
const NavbarDeliveryagent = () => {

  const navigate = useNavigate();
  
    const handleProfileClick = () => {
      navigate("/profile");
    };

  return (
    <div>
      <AppBar position="fixed" style={{ borderBottom: "2px solid #181818" }}>
        <StyledToolbar>
          <Avatar
            sx={{ width: 55, height: 55,mr: 3, mt: -4, mb: -4 }}
            alt="OSP"
            src={iconImage}
          />
          <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        style={{
                          fontSize: "20px",
                          fontFamily: "fantasy",
                          color: "white",
                          marginBottom: -15,
                          marginLeft: 0,
                        }}
                      >
                        DeliveryAgent
                      </Typography>
                      <Typography
                        style={{
                          fontSize: "30px",
                          fontFamily: "fantasy",
                          color: "white",
                        }}
                      >
                        OSP
                      </Typography>
                    </div>
          <Container
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "6rem",
              ml: 25,
            }}
          >
            <Button
              variant="text"
              onClick={() => {
                navigate("/deliveryagentdash");
              }}
              style={{
                fontSize: "20px",
                fontFamily: "fantasy",
                color: "black",
              }}
            >
              <Typography
                style={{
                  fontFamily: "fantasy",
                  fontSize: "20px",
                  color: "orange",
                }}
              >
                HOME
              </Typography>
            </Button>
            <Button
              variant="text"
              onClick={() => {
                navigate("/recipe/add");
              }}
              style={{
                fontSize: "20px",
                fontFamily: "fantasy",
                color: "black",
              }}
            >
              <Typography
                style={{
                  fontFamily: "fantasy",
                  fontSize: "20px",
                  color: "orange",
                }}
              >
                Add Recipe
              </Typography>
            </Button>
            <Button
              variant="text"
              onClick={() => {
                navigate("/user/recipes");
              }}
              style={{
                fontSize: "20px",
                fontFamily: "fantasy",
                color: "black",
              }}
            >
              <Typography
                style={{
                  fontFamily: "fantasy",
                  fontSize: "20px",
                  color: "orange",
                }}
              >
                My Recipes
              </Typography>
            </Button>
            <Button
              variant="text"
              onClick={() => {
                navigate("/recipes");
              }}
              style={{
                fontSize: "20px",
                fontFamily: "fantasy",
                color: "black",
              }}
            >
              <Typography
                style={{
                  fontFamily: "fantasy",
                  fontSize: "20px",
                  color: "orange",
                }}
              >
                All Recipes
              </Typography>
            </Button>
          </Container>
          <IconButton onClick={handleProfileClick}>
            <Avatar alt="Profile" src={profileImage} />
          </IconButton>
        </StyledToolbar>
      </AppBar>
    </div>
  )
}

export default NavbarDeliveryagent
