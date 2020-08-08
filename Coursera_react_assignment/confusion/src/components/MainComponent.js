import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
//action creator
import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  };
}

//redux: dispatch
const mapDispatchToProps = dispatch => ({
  //dispatch(addComment()) addComment is the action creator

  //addComment(dishId, rating, author, comment) action call
  //will return the action objects for adding a comment,
  // the action call is given as argument to the dispatch function
  //this dispatch function will be called and used when invoking postComment -> addComment() function
  //it is available thanks to the export down below
  //and passed as attribute to the DishDetail Component
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  //thunk
  //used in mapDispactchProps to make it available in the component
  fetchDishes: () => {dispatch(fetchDishes())},
  //reset the form
  //the form will be calles 'feedback'
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () => {dispatch(fetchPromos())}
});

class Main extends Component {

  constructor(props) {
    super(props);

  }

  //lifecycle method
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  };

  render() {
    const HomePage = () => {
      return (
        <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          promosLoading={this.props.promotions.isLoading}
          promosErrMess={this.props.promotions.errMess}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }
    //we consider match and ignore location and history
    const DishWithId = ({ match }) => {
      return (
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
          commentErrMess={this.props.comments.errMess}
          // passing function as props to dispatch the action to the store
          postComment={this.props.postComment}
          />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          {/* how to pass props with the component */}
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
          <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
          {/* if the route does not match anyone of these Redirects */}
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
