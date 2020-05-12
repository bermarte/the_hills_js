import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component{
   
    render() {
            const months =["January","February","March","April","May","June","July","August","September","October","November","December"];
            
            function giveMonth(num){
                return months[num-1];
            }

            function renderComments(arr) {
                if (arr.length < 0 || typeof arr === 'undefined') 
                    return <div></div>; 
                else {
                    return (arr.map((comm, i) =>  
                        <li key={i} className='col pb-4'>{comm.comment}
                            <div className='pt-4'> -- {comm.author}, {giveMonth(Number(comm.date.substring(5,7)))} 
                            {comm.date.substring(8,10)}, {comm.date.substring(0,4)} 
                            </div>
                        </li>)
                     );
                }
            }

            if (this.props.dish != null){
                return  (
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
                            <div className='container'>
                                <h4>Comments</h4>
                                <div className="row">
                                <ul className="list-unstyled">
                                    {renderComments(this.props.dish.comments)}
                                </ul>
                            </div>
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