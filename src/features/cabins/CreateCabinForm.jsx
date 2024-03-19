// import { styled } from "@tanstack/react-query-devtools/build/lib/utils";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../../ui/Button";

// import { useCreateCabin } from "features/cabins/useCreateCabin";
// import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
// import Form from "../../ui/Form";
// import Button from "ui/Button";
// import FileInput from "ui/FileInput";
// import { useEditCabin } from "./useEditCabin";
// import { Textarea } from "ui/Textarea";

// We use react-hook-form to make working with complex and REAL-WORLD forms a lot easier. It handles stuff like user validation and errors. manages the form state for us, etc
// Validating the user’s data passed through the form is a crucial responsibility for a developer.
// React Hook Form takes a slightly different approach than other form libraries in the React ecosystem by adopting the use of uncontrolled inputs using ref instead of depending on the state to control the inputs. This approach makes the forms more performant and reduces the number of re-renders.

const Form = styled.form`
  overflow: hidden;
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
`;

const Label = styled.label`
  font-weight: 500;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 24rem 1fr 1.2fr;
`;

// Receives closeModal directly from Modal
function CreateCabinForm() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Label htmlFor="name">CABIN</Label>
        <Input id="name" type="text" {...register("name")}></Input>
      </FormRow>
      <FormRow>
        <Label htmlFor="maxCapacity">CAPACITY</Label>
        <Input
          id="maxCapacity"
          type="number"
          {...register("maxCapacity")}
        ></Input>
      </FormRow>
      <FormRow>
        <Label htmlFor="regularPrice">PRICE</Label>
        <Input
          id="regularPrice"
          type="number"
          {...register("regularPrice")}
        ></Input>
      </FormRow>
      <FormRow>
        <Label htmlFor="discount">DISCOUNT</Label>
        <Input id="discount" type="number" {...register("discount")}></Input>
      </FormRow>
      <FormRow>
        <Label htmlFor="description">description</Label>
        <Input
          id="description"
          type="number"
          {...register("description")}
        ></Input>
      </FormRow>
      <FormRow>
        <Label htmlFor="image">image</Label>
        <Input id="image" type="text" {...register("image")}></Input>
      </FormRow>
      <Button variation="secondary">Cancel</Button>
      <Button>Create</Button>
    </Form>
  );
}

export default CreateCabinForm;
