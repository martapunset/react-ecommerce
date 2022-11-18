import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Dropdownlist(props) {
  return (
    <DropdownButton
      id="dropdown-item-button"
      title="Shopping Cart"
      variant="secondary"
    >
      <Dropdown.ItemText>{props.children}</Dropdown.ItemText>
    </DropdownButton>
  );
}

export default Dropdownlist;
