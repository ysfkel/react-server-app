import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';
import BadgeList from '../../../shared/badges/badges-list.component.jsx';
import SelectProperty from '../select-property/select-property.component.jsx';
import PropertyAddress from '../property-address/property-address.component.jsx';
import PropertyDetails from '../property-details/property-details.component.jsx';
import PropertyPricing from '../pricing/property-pricing.component.jsx';

/**
 * It is possible to specify your own step connector by passing an element to the `connector`
 * prop. If you want to remove the connector, pass `null` to the `connector` prop.
 */
class PropertyFormConnector extends React.Component {
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
              <div className="step-item">
                <SelectProperty/>
              
                </div>
               
        );

      case 1:
        return (
         <div className="step-item">

                  <PropertyAddress/>
                </div>
              
        );

      case 2:
        return (
         <div className="step-item">
           <PropertyDetails/>
                 

                </div>
        );
       
        case 3:
        return(
          <div className="step-item">
            <PropertyPricing/>
          </div>
        );

        case 4:
         return(
           <div className="step-item">
             <BadgeList></BadgeList>
           </div>
         )
    }
  }

  handleNext() {
    const {stepIndex} = this.state;

    if (stepIndex < 4) {
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
            <StepLabel>Choose your property</StepLabel>
          </Step>

          <Step>
            <StepLabel>Property Address</StepLabel>
          </Step>
       

          <Step>
            <StepLabel>Elaborate further</StepLabel>
          </Step>


            <Step>
            <StepLabel>Name Your Price</StepLabel>
          </Step>
                    <Step>
            <StepLabel>Select it Faster</StepLabel>
          </Step>


        </Stepper>

        {
          this.getStepContent(stepIndex)
        }

        <div style={{marginTop: 24, marginBottom: 12}}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onTouchTap={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            label={stepIndex === 3 ? 'PROCEED TO CHECKOUT' : 'NEXT'}
            primary={true}
            onTouchTap={this.handleNext}
          />
        </div>
      </div>
    );
  }
}

export default PropertyFormConnector;