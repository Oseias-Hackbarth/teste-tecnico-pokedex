import { TypeLabel } from "../../Styles/components/MainStyles";

export const DropdownOptions = ({ pokemonTypes, selectedTypes, handleTypeChange }) => (
    <>
        {pokemonTypes.map((type) => (
            <TypeLabel key={type.name}>
                <input
                    type="checkbox"
                    value={type.name}
                    checked={selectedTypes.includes(type.name)}
                    onChange={handleTypeChange}
                />
                {" "}
                {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
            </TypeLabel>
        ))}
    </>
);