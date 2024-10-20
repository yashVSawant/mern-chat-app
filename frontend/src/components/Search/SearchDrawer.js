import React, { useState } from "react";
import { Button, Offcanvas, OverlayTrigger, Tooltip } from "react-bootstrap";
import Loader from "../Layout/Loader";
import Users from "./Users";

const SearchDrawer = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      search users to chat
    </Tooltip>
  );

  const findHandler = () => {
    const dummay = [
      {
        name: "yash",
        email: "yash@gmail.com",
        imageUrl:
          "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      },
      {
        name: "kajal",
        email: "kajal@gmail.com",
        imageUrl:
          "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      },
      {
        name: "nikhil",
        email: "nikhil@gmail.com",
        imageUrl:
          "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      },
    ];
    setSearchResult(dummay);
  };

  const userClickHandler = (id) => {
    console.log(id);
  };

  return (
    <React.Fragment>
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 250 }}
        overlay={renderTooltip}
      >
        <Button
          variant="secondary"
          className="d-flex align-items-center m-2"
          onClick={handleShow}
        >
          <i className="fas fa-search" style={{ marginInline: "1px" }}></i>
          <span>search</span>
        </Button>
      </OverlayTrigger>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search Users :</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            ></input>
            <Button className="m-2" onClick={findHandler}>
              Find
            </Button>
          </div>
          <div>{isLoading && <Loader />}</div>
          {searchResult.map((u) => (
            <Users key={u.name} user={u} onClick={userClickHandler} />
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  );
};

export default SearchDrawer;
