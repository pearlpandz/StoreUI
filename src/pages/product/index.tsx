import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ThunkDispatch } from "@reduxjs/toolkit"
import { Box, Grid } from "@mui/material"
import Title from "../../components/title"
import ProductCard from "./card"
import { getProducts } from "../../redux/slices/product.slice"
import { IRootState } from "../../redux/store"
import { Product } from "./interface"

function ProductListpage() {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const products = useSelector((state: IRootState) => state.products);
  const data = products.data;

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
      <Box sx={{marginBottom: 5}}>
        <Title title="List of Products" btn={{ name: 'Add Product', onClick: () => { } }} />
      </Box>
      <Box>
        <Grid container spacing={3}>
          {
            data.map((product: Product) => (
              <Grid item key={product.id} xs={3}>
                <ProductCard product={product} />
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </>
  )
}

export default ProductListpage