import styled from "styled-components";

const CardContainer = styled.div({
  borderRadius: 6,
  color: "#242424",
  backgroundSize: "cover",
  backgroundColor: "white",
  boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.15)",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: 100,
  margin: 10,
  overflow: "hidden",
  position: "relative",
  textDecoration: "none",
  "@media (max-width: 768px)": {
    fontSize: 10,
  },
});

const CardContent = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  height: "100%",
});

const CardBody = styled.div({
  padding: 18,
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  "@media (max-width: 768px)": {
    padding: 10,
  },
});

const CardTitle = styled.h3({
  textAlign: "center",
  flex: 1,
});

const CardFooter = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-evenly",
});

const AuthorAndStory = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

const AuthorName = styled.div({
  lineHeight: "1em",
  fontSize: "1.1em",
});

const AuthorImage = styled.div({
  height: 30,
  width: 30,
  marginRight: 8,
  backgroundColor: "#bbb",
  borderRadius: "50%",
  objectFit: "cover",
  "@media (max-width: 768px)": {
    height: 15,
    width: 15,
  },
});

export {
  CardContainer,
  CardContent,
  CardBody,
  CardTitle,
  CardFooter,
  AuthorAndStory,
  AuthorName,
  AuthorImage,
};
