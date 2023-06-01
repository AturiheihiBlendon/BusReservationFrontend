import React from 'react';
import { Box } from "@mui/material";
import SideNav from "components/common/SideNav/SideNav";
import AddDriverForm from './AddDriverform';


const AddDriver = () => {
    return (
      <>
        <Box sx={{ display: "flex" }}>
          <SideNav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <AddDriverForm/>
          </Box>
        </Box>
      </>
    );
}

export default AddDriver;
