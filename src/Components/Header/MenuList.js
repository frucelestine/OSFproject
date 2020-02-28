import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import DropMenu from "./DropMenu";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {popupState => (
        <React.Fragment>
          <Button
            variant="contained"
            endIcon={<ArrowDropDownIcon />}
            {...bindTrigger(popupState)}
            disableFocusListener="true"
            disableRipple="true"
          >
            SERVICES
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem
              onClick={popupState.close}
            >
              <DropMenu style={{ width: "inherit" }} />
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
