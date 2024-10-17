import React, { useState } from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import ProfileMenu from "./ProfileMenu";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      search users to chat
    </Tooltip>
  );
  return (
    <div className="row-between sideDrawer">
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 250 }}
        overlay={renderTooltip}
      >
        <Button variant="secondary" className="d-flex align-items-center m-2">
          <i class="fas fa-search" style={{ marginInline: "1px" }}></i>
          <text>search</text>
        </Button>
      </OverlayTrigger>
      <h1>Chatters-App</h1>
      <div className="row-between">
        <div className="row" style={{ margin: "3px" }}>
          <i class="fas fa-bell"></i>
        </div>
        <ProfileMenu />
      </div>
    </div>
  );
};

export default SideDrawer;
