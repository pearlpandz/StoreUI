import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Product } from './interface';

interface IProps {
    product: Product
}

export default function ProductCard({ product }: IProps){
  return (
    <Card> 
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={product.image}
          alt="green iguana"
          sx={{objectFit: 'contain', backgroundColor: '#fff', borderBottom: '1px solid #d0d0d0', paddingBottom: '10px'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title.slice(0,20) + '...'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description.slice(0,100) + '...'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Button  size="medium" color="success" variant='contained' sx={{width: '50%'}}>Add to Wishlist</Button>
        <Button size="medium" variant='contained' color="primary" sx={{width: '50%'}}>Add to Cart</Button>
      </CardActions>
    </Card>
  );
}