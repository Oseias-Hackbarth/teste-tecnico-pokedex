import React from "react";
import { ClearButton } from "../../Styles/components/ButtonStyles";

export const ClearFiltersButton = ({ onClear }) => (
    <ClearButton onClick={onClear}>
        Clear Filters
    </ClearButton>
);
