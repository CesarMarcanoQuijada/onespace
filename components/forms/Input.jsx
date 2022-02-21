import { Input as OldInput, InputProps } from "@chakra-ui/react";

/**
 * @description Input component
 * @param {InputProps} props
 */
export default function Input(props) {
  return (
    <OldInput
      color="gray.100"
      focusBorderColor="brand.500"
      borderWidth="2px"
      borderRadius="2xl"
      size="lg"
      {...props}
    />
  );
}
