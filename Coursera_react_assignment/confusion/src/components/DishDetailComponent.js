import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component{

    renderComments(arr) {
        if (arr.length < 0 || typeof arr === 'undefined') 
            return <div></div>; 
        else {
            const details = (arr.map((comm) =>  
                <li key={comm.id} className='col'>
                     <p>{comm.comment}</p>
                     <p>-- {comm.author}, {new Intl.DateTimeFormat('en-US',
                     {year: 'numeric', month: 'short', day:'2-digit'}
                     ).format(new Date(Date.parse(comm.date)))}
                     }
                     </p>
                </li>)
             );
            return <ul className="list-unstyled">{details}</ul>
             
        }
    }

    render() {

            if (this.props.dish != null){
                return  (
                    <div className='container'>
                    <div className='row'>
                        <div className="col-12 col-md-5 mt-1">
                            <Card>   
                                 <CardImg width='100%' src={this.props.dish.image} alt={this.props.dish.name} />
                                 <CardBody>
                                     <CardTitle> {this.props.dish.name} </CardTitle>
                                      <CardText>{this.props.dish.description}</CardText>
                                 </CardBody>
                            </Card>
                        </div>
                        {/* comments */}
                        <div className="col-12 col-md-5 mt-1">
                            <h4>Comments</h4>
                             {this.renderComments(this.props.dish.comments)}
                        </div>
                    </div>
                    </div>
                 );
            }
            else{
                return(
                    <div></div>
                );
            }

        }

}
export default DishDetail;