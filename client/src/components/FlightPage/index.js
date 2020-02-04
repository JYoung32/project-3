import React from "react";
import { Jumbotron, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import API from "../../utils/API";


class FlightPage extends React.Component {

    // state = {
    //     origin: "",
    //     destination: "",
    //     departure: "",
    //     return: "",
    //     flights: []

    //  };

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            origin: "",
            destination: "",
            departure: "",
            return: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            origin: event.target.origin
        });
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();

    };

    // auth = () =>{
    //     API.token()
    //     .then(data =>console.log(data))
    //     .catch(err => console.log(err))
    // }

    // loadFlights = () =>{  
    //     API.getFlights()
    //     .then(data => this.setState({flights: data}))
    //     .catch(err => console.log(err));     
    // };

    // componentDidMount(){
    //     this.auth()
    //     this.loadFlights();
    // };

    render() {
        return (
            <div className="container">
                <Jumbotron className="mt-3 text-center">
                    <h1 className="display-3">Search for Flights</h1>
                    <hr className="my-2" />
                    <Form>
                        <div className="row">

                            <FormGroup className="col-md">
                                <Label for="OriginAirport">Origin</Label>
                                <Input type="text" name="origin" id="originAirport" placeholder="Airport you are leaving from" value={this.state.origin} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="col-md">
                                <Label for="DestinationAirport">Destination</Label>
                                <Input type="text" name="destination" id="destinationAirport" placeholder="Destination you are traveling to" />
                            </FormGroup>
                        </div>
                        <DateRangePicker className="m-3"
                            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                        />
                    </Form>
                    <Button className="m-3" color="primary">Search Flights</Button>

                </Jumbotron>
            </div>

        );
    }
}

export default FlightPage; 
