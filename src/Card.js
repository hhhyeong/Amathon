import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import Create from '@material-ui/icons/Create';
import Badge from '@material-ui/core/Badge';

const styles = theme => ({
  card: {
    maxWidth: 300,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
});
function ellipseStr(str, length) {
  if (!str || !length || str.length <= length) {
    return str;
  }

  return `${str.slice(0, length - 3)}...`;
}
class RecipeReviewCard extends React.Component {
  render() {
    const { classes, channel } = this.props;
    console.log(channel)
    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                A
              </Avatar>
            }
            title={channel.title}
            subheader="September 14, 2016"
          />
          <CardMedia
            className={classes.media}
            image={channel.thumbnail_url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
              {ellipseStr(channel.description, 80)}
            </Typography>
            <div style={{display: "flex", justifyContent: 'space-around', width: '100%' }}>
              <Badge className={classes.padding} color="primary" badgeContent={channel.view_count}>
                <RemoveRedEye />
              </Badge>
              <Badge className={classes.padding} color="primary" badgeContent={channel.subscriber_count}>
                <SupervisorAccount />
              </Badge>
              <Badge className={classes.padding} color="primary" badgeContent={channel.comment_count}>
                <Create />
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);