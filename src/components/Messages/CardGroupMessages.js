import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 220,
    padding: 5
  },
  media: {
    height: 140,
  },
  cardGroup: {
    overflowX: 'scroll',
    display: 'inline-flex'
  },
  link: {
    textDecoration: 'none',
    fontSize: '0.8125rem',
    color: '#3f51b5'
  }
});

const CardGroupMessages = (props) => {
  const classes = useStyles();
  return (<div className={classes.cardGroup}>
    { props.data.messages.map(function(message, index){
      return (
        <Card className={classes.root} key={index}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={message.src}
              title={message.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {message.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {message.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => message.callback(index, message.src)}>
              {message.btnText}
            </Button>
          </CardActions>
        </Card>
      );
    })}
  </div>);
  
};

export default CardGroupMessages;
