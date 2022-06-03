/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import PropTypes from "prop-types";
import { Rowing } from "@mui/icons-material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import toolchainData from "pages/Home/sections/data/toolchainData";

let key = 0;
function setKey(data) {
  key += 1;
  data["id"] = key;
  if (Array.isArray(data.items)) {
    for (const item of data.items) {
      setKey(item);
    }
  }
}

function Toolchain() {
  setKey(toolchainData);
  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
    >
      <Container>
        {toolchainData.items.map((row) => (
          <Grid container key={row.id} item xs={12} lg={12} sx={12}>
            {(row.items || []).map((col) => (
              <MKBox
                key={col.id}
                m={1}
                bgColor="grey-100"
                alignItems="center"
                position="relative"
                width={col.width}
              >
                <MKBox height="50px" textAlign="center" bgColor="dark" lineHeight={1}>
                  <MKTypography variant="h4" color="light" fontWeight="bold">
                    {col.label ? col.label : "label is null"}
                  </MKTypography>
                </MKBox>
                {(col.items || []).map((group) => (
                  <MKBox key={group.id} mt={1} p={1} textAlign="center" bgColor="gray" borderRadius="xl" lineHeight={1}>
                    <MKBox p={1} textAlign="center" lineHeight={1}>
                      <MKTypography key={group.id} color="light" variant="h6" fontWeight="bold">
                        {group.label ? group.label : "label is null"}
                      </MKTypography>
                    </MKBox>
                    {(group.items || []).map((tools) => (
                      <Grid container justifyContent="space-between" key={tools.id} spacing={1} mb={1}>
                        {(tools.items || []).map((tool, index) => (
                          <Grid item xs key={tool.id}>
                            <MKButton
                              color="info"
                              fullWidth
                            >
                              {tool.label}
                            </MKButton>
                          </Grid>
                        ))}
                      </Grid>
                    ))}
                  </MKBox>
                ))}
              </MKBox>
            ))}
          </Grid>
        ))}
      </Container>
    </MKBox>
  );
}

export default Toolchain;
