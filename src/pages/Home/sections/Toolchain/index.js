import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import ToolItem from "pages/Home/components/ToolItem";
import toolchainData from "pages/Home/sections/data/toolchainData";

let key = 0;
function setKey(data) {
  key += 1;
  const keyData = { ...data, id: key };
  if (Array.isArray(keyData.items)) {
    keyData.items = keyData.items.map((item) => setKey(item));
  }
  return keyData;
}

function Toolchain() {
  const data = setKey(toolchainData);
  return (
    <MKBox display="flex" alignItems="center" borderRadius="xl" my={2} py={6}>
      <Container>
        {data.items.map((row) => (
          <Grid container key={row.id} item xs={12} lg={12}>
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
                  <MKTypography variant="h4" display="inline" color="light" fontWeight="bold">
                    {col.label}
                  </MKTypography>
                </MKBox>
                {(col.items || []).map((group) => (
                  <MKBox
                    key={group.id}
                    mt={1}
                    p={1}
                    textAlign="center"
                    bgColor="grey-500"
                    borderRadius="xl"
                    height={group.height || "200px"}
                    lineHeight={1}
                  >
                    <MKBox p={1} textAlign="center" lineHeight={1}>
                      <MKTypography
                        key={group.id}
                        display="inline"
                        color="white"
                        variant="h6"
                        fontWeight="bold"
                      >
                        {group.label}
                      </MKTypography>
                    </MKBox>
                    {(group.items || []).map((tools) => (
                      <Grid
                        container
                        justifyContent="space-between"
                        key={tools.id}
                        spacing={1}
                        mb={1}
                      >
                        {(tools.items || []).map((tool) => (
                          <Grid item xs key={tool.id}>
                            <ToolItem label={tool.label} />
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
