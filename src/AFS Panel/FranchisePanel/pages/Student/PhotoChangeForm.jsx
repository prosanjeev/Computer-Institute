import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel } from "@chakra-ui/react";

const PhotoChangeForm = ({ currentPhotoUrl, onSubmit, onCancel }) => {
  return (
    <Modal isOpen={true} onClose={onCancel}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Formik
            initialValues={{ photo: null }}
            onSubmit={onSubmit}
          >
            {({ setFieldValue }) => (
              <Form>
                <Field name="photo">
                  {({ field, form }) => (
                    <FormControl>
                      <FormLabel htmlFor="photo">Photo</FormLabel>
                      <Input
                        {...field}
                        id="photo"
                        type="file"
                        accept="image/*"
                        onChange={(event) => {
                          form.setFieldValue("photo", event.currentTarget.files[0]);
                        }}
                      />
                    </FormControl>
                  )}
                </Field>
                <Button mt={4} colorScheme="teal" type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={onCancel}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PhotoChangeForm;
