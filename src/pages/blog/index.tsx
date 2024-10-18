import { Fragment, useState } from "react"
import Title from "../../components/title"
import AddBlog from "./add"

function BlogListpage() {

  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Title title="List of Blogs" btn={{ name: 'Add User', onClick: () => setOpen(true) }} />
      <AddBlog open={open} handleClose={() => setOpen(false)} />
    </Fragment>
  )
}

export default BlogListpage