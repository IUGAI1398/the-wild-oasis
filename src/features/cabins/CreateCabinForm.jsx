import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow2 from '../../ui/FormRow'


function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const {errors} = formState;
  console.log(errors);
  const queryClient = useQueryClient();
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("New cabin successfuly created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });


  function onSubmit(data) {
    console.log(data);
    mutate({...data, image: data.image[0]});
  }
  function onError(erros) {
    console.log(erros);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      {/* <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input type="text" id="name" {...register("name", { required: "the name is required" })} />
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow> */}

      <FormRow2 label="Cabin name" error={errors?.name?.message}>
      <Input type="text" id="name" {...register("name", { required: "the name is required" })} />
      </FormRow2>


      <FormRow2 label="Maximum capacity" error={errors?.maxCapacity?.message}>
      <Input type="number" id="maxCapacity" {...register("maxCapacity", {
          required: "the maxCapacity is required", min: {
            value: 1,
            message: "Capacity should be at least one"
          }
        })} />
      </FormRow2>

      <FormRow2 label="regularPrice" error={errors?.regularPrice?.message}>
      <Input type="number" id="regularPrice" {...register("regularPrice", {
          required: "the regularPrice is required", min: {
            value: 1,
            message: "Capacity should be at least one"
          }
        })} />
      </FormRow2>

      <FormRow2 label="discout" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", { required: "the discount is required", validate: (value) => value <= getValues().regularPrice || "discount should be less then regural price" })}
        />
      </FormRow2>

      <FormRow2 label="Description for website" error={errors?.description?.message}>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", { required: "the description is required" })}
        />
      </FormRow2>

      <FormRow2 label="Cabin photo">
        <FileInput id="image" accept="image/*" type="file" {...register("image", { required: "the image is required" })} />
      </FormRow2>

      <FormRow2>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add cabin</Button>
      </FormRow2>
    </Form>
  );
}

export default CreateCabinForm;
