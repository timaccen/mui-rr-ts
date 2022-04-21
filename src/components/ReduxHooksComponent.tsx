import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { InitialState, RootDispatcher } from "../store/root-reducer";

interface Props {}

interface StateProps {
  name: string;
  address: string;
}

const ReduxHooksComponent: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const rootDispatcher = new RootDispatcher(dispatch);
  const { name, address } = useSelector<InitialState, StateProps>(
    (state: InitialState) => {
      return {
        name: state.name,
        address: state.address,
      };
    }
  );
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        type="text"
        placeholder="name"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          rootDispatcher.updateName(e.target.value);
        }}
      />
      <TextField
        type="text"
        placeholder="address"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          rootDispatcher.updateAddress(e.target.value);
        }}
      />
      <Button type="submit"> Submit </Button>
    </Box>
  );
};

export default ReduxHooksComponent;
