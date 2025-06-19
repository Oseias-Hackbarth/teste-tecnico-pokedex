import { Button } from "../../Styles/components/ButtonStyles";

export const DropdownToggle = ({ selectedCount, onClick }) => (
    <Button onClick={onClick}>
        {selectedCount > 0 ? `Types (${selectedCount}) selected` : "Select Types"}
    </Button>
);