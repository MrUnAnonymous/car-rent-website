import React, { useEffect, useState } from 'react'
import useStyles from './styles'
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { FavoriteBorderOutlined, LocalGasStationOutlined, PermIdentityOutlined, SpeedOutlined } from '@material-ui/icons';
import { CarData } from './data';
import { Pagination } from '@mui/material';
import SearchBar from './SearchBar';
import './styles.css'
const CarCard = () => {
    const classes = useStyles();
    const [page, setPage] = useState(1);

    

  return (
    <div className={classes.container}>
        
        <Container className={classes.cardGridItem} maxWidth="lg">
            <Grid container spacing={1} className={classes.mainGrid}>
                {CarData?.slice((page - 1) * 6, page * 6).map((card) => ( 
                <Grid item lg={4} className={classes.cardGrid}>
                    <Card className={classes.card}>

                        {/* Image for the Card */}
                        <CardMedia 
                            className={classes.media}
                            image={card.carImg}
                        />
                        
                        {/* Title of the card and additional information */}
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant='h5'>
                                {card.carName}
                            </Typography>
                            <Typography gutterBottom variant='h5' className={classes.year}>
                                {card.carYear}
                            </Typography>
                        </CardContent>

                        {/* Features of the car */}
                        <CardContent className={classes.content}>
                            <Typography gutterBottom variant='p' className={classes.contentItem}>
                                <PermIdentityOutlined style={{color: '#00bfff'}}/>
                                {card.features[0].capacity}
                            </Typography>
                            <Typography gutterBottom variant='p' className={classes.contentItem}>
                                <LocalGasStationOutlined style={{color: '#00bfff'}}/> 
                                {card.features[0].fuel}
                            </Typography>
                            <Typography gutterBottom variant='p' className={classes.contentItem}>
                                <SpeedOutlined style={{color: '#00bfff'}}/>
                                {card.features[0].mileage}
                            </Typography>
                            <Typography gutterBottom variant='p' className={classes.contentItem}>
                            {card.features[0].type}
                            </Typography>
                        </CardContent>

                        {/* Footer of the card */}
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant='h6'>
                            {card.carRent}
                            </Typography>

                            <CardActions className={classes.action}>
                                <Button size='small' className={classes.actionButton1}>
                                <FavoriteBorderOutlined style={{color: '#00bfff', height: '20px' }}/>
                                </Button>

                                <Button size='small' className={classes.actionButton2}>
                                    Rent Now
                                </Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>
            <Pagination 
                count={Math.ceil(CarData.length / 6)}
                showFirstButton
                showLastButton
                onChange={(e , value) => setPage(value)}
            />
        </Container>
    </div>
  )
}

export default CarCard