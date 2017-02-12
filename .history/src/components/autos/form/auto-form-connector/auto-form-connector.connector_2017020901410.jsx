import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';

//
import AutoDescriptionForm from '../auto-description/auto-description.component.jsx';
import AutoDetailsForm from '../auto-details/auto-details.component.jsx';
import AutoDetailsFormMore from '../auto-details-more/auto-details-more.component.jsx';
/**
 * It is possible to specify your own step connector by passing an element to the `connector`
 * prop. If you want to remove the connector, pass `null` to the `connector` prop.
 */
class AutoFormConnector extends React.Component {
  constructor(props) {
    super(props);

     this.state = {
    stepIndex: 0,
  };

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

 

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
              <div  >
                  <AutoDescriptionForm></AutoDescriptionForm>
                </div>
               
        );

      case 1:
        return (
         <div  >
                    <AutoDetailsForm></AutoDetailsForm>
                </div>
              
        );

      case 2:
        return (
         <div  >
                    <AutoDetailsFormMore></AutoDetailsFormMore>

                </div>
        );
    }
  }

  handleNext() {
    const {stepIndex} = this.state;

    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  }

  handlePrev() {
    const {stepIndex} = this.state;

    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  render() {
    const {stepIndex} = this.state;

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex} connector={<ArrowForwardIcon />}>
          <Step>
            <StepLabel>Select campaign settings</StepLabel>
          </Step>

          <Step>
            <StepLabel>Create an ad group</StepLabel>
          </Step>

          <Step>
            <StepLabel>Create an ad</StepLabel>
          </Step>
        </Stepper>

        {this.getStepContent(stepIndex)}

        <div style={{marginTop: 24, marginBottom: 12}}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onTouchTap={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            label={stepIndex === 2 ? 'Finish' : 'Next'}
            primary={true}
            onTouchTap={this.handleNext}
          />
        </div>
      </div>
    );
  }
}

export default AutoFormConnector;