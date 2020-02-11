import React from "react";
import "./style.css";
import "./style.scss";
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';

class FlightCard extends React.Component {
  state = {
    price: "",
    service: {}
  }

  componentDidMount() {
    this.objDectructure()
  }

  objDectructure = () => {
    let flight = this.props.flight.offerItems[0];
    this.setState({price: flight.price});
    if(this.props.flight.offerItems !== undefined){
      for(var i =0; i<this.props.flight.offerItems[0].services.length; i++){
        let service = this.props.flight.offerItems[0].services[i];
        this.setState({
          service: service
        }, () => {console.log(this.state.service)})
        
      }
    }
  }

  render() {
    return (
    <div>
      <Card className="card m-4">
        <CardHeader className= "cardhead">Flight Name</CardHeader>
        <CardBody className="cardbody">
          <CardTitle>American Airlines</CardTitle>
      <CardText>Price {this.state.price.total}</CardText>
      {/* {this.state.service.segments.map(segment => <CardText>{segment[0].flightSegment.departure.iataCode}</CardText>)} */}
        </CardBody>
        <CardFooter>Safe Flights</CardFooter>
      </Card>
      </div>
    );
  }
}

export default FlightCard;
