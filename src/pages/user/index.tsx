import { Box } from "@mui/material"
import Title from "../../components/title"
import DataTable from "./table"


function UserListPage() {
  return (
    <Box sx={{ mt: 10, mb: 5}}>
      <Title title="List of Users" btn={{ name: 'Add User', onClick: () => { } }} />
      <Box sx={{mb: 2}} />
      <DataTable />
    </Box>
  )
}

export default UserListPage